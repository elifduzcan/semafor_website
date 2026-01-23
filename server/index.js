import "dotenv/config";
import express from "express";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";

const app = express();
app.use(cors());
app.use(express.json({ limit: "1mb" }));

// API anahtarının varlığını kontrol et
if (!process.env.GEMINI_API_KEY) {
  console.error("HATA: GEMINI_API_KEY bulunamadı!");
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const SYSTEM_INSTRUCTION = `
Sen Semafor şirketinin resmi dijital asistanısın. 
Müşterilere hizmetlerimiz hakkında bilgi ver ve onları doğru çözümlere yönlendir.

Şirket Hakkında Temel Bilgiler:
- Hizmetlerimiz: IoT sistemleri geliştirme, özel yazılım çözümleri, veri analitiği ve kurumsal danışmanlık.
- Uzmanlık Alanımız: Endüstri 4.0, akıllı şehirler ve gömülü sistemler.
- Web Sitemiz: https://www.semaforteknoloji.com/tr/
- Lokasyon: İzmir, Türkiye.

Yanıt Kuralları:
1. Türkçe, profesyonel ve kurumsal bir üslup kullan.
2. Teknik konularda açıklayıcı ol ama karmaşadan kaçın.
3. Eğer bir müşteri proje başlatmak isterse, onları iletişim sayfamıza yönlendir veya bir toplantı talep etmelerini öner.
4. Emoji kullanma, ciddi bir duruş sergile.
5. Yanıtları kısa paragraflar veya maddeler halinde sun.
6.Yanıtlarını maksimum 2-3 cümle ile sınırla. Sadece çok gerekli olduğunda liste kullan ve asla uzun açıklamalar yapma.
7. Eğer bir sorunun cevabını bilmiyorsan, "Bu konuda size yardımcı olamıyorum, lütfen iletişim sayfamızdan bize ulaşın." şeklinde yanıt ver.
8. Asla kişisel görüş belirtme, sadece şirket politikası ve hizmetleri hakkında bilgi ver.
9. Müşteriye her zaman saygılı ve yardımsever ol.
10. Yanıtlarında şirket adını "Semafor" olarak kullan.
`;

const generationConfig = {
  temperature: 0.2, // Daha kurumsal ve tutarlı yanıtlar için düşürdük
  topP: 0.8,
  maxOutputTokens: 100, // Yanıt uzunluğunu sınırladık
};

app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;

    const contents = messages.map((m) => ({
      role: m.role === "model" ? "model" : "user",
      parts: [{ text: String(m.content || "") }],
    }));

    // SENİN LİSTENDİĞİ GİBİ: gemini-2.5-flash kullanıyoruz
    // Bu model senin sisteminde "generateContent" destekliyor
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash", 
      systemInstruction: SYSTEM_INSTRUCTION,
    }, generationConfig);

    const result = await model.generateContent({ contents });
    const response = await result.response;
    const text = response.text();

    return res.json({ text });
  } catch (error) {
    console.error("Gemini API Detaylı Hata:", error);
    
    // Eğer hala kota hatası (429) alırsan, yeni key'in aktifleşmesi için 2 dk bekle
    return res.status(error.status || 500).json({ 
      error: "Sunucu hatası", 
      details: error.message 
    });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Backend http://localhost:${PORT} adresinde aktif.`);
});