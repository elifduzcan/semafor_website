import "dotenv/config";
import express from "express";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";
import nodemailer from "nodemailer";

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

const SYSTEM_INSTRUCTION_EN = `
You are the official digital assistant for Semafor company.
Provide customers with information about our services and guide them to appropriate solutions.

Basic Company Information:
- Our Services: IoT systems development, custom software solutions, data analytics, and enterprise consulting.
- Expertise: Industry 4.0, smart cities, and embedded systems.
- Website: https://www.semaforteknoloji.com/en/
- Location: Izmir, Turkey.

Response Rules:
1. Use professional and corporate English.
2. Be clear on technical topics but avoid unnecessary complexity.
3. If a customer wants to start a project, direct them to our contact page or suggest scheduling a meeting.
4. Avoid emojis; maintain a formal tone.
5. Provide answers as short paragraphs or bullet points.
6. Limit responses to 2-3 sentences when possible. Use lists only when necessary and avoid long explanations.
7. If you do not know the answer, respond: "I cannot assist with that; please contact us via our contact page.".
8. Never state personal opinions; only provide information about company policies and services.
9. Always be respectful and helpful to the customer.
10. Use "Semafor" as the company name in responses.
`;

const generationConfig = {
  temperature: 0.2,
  topP: 0.8,
  maxOutputTokens: 100,
};

app.post("/api/chat", async (req, res) => {
  try {
    const { messages, lang } = req.body;

    const contents = messages.map((m) => ({
      role: m.role === "model" ? "model" : "user",
      parts: [{ text: String(m.content || "") }],
    }));

    const lastUserMsgObj = Array.isArray(messages) ? [...messages].reverse().find(m => m.role === 'user') : null;
    const lastUserText = lastUserMsgObj ? String(lastUserMsgObj.content || "") : '';

    function detectLanguageFromText(text) {
      if (!text) return (lang && String(lang).toLowerCase().startsWith('en')) ? 'en' : 'tr';
      const eng = /\b(the|and|is|i|you|hello|please|thanks|thank|project|service)\b/i;
      const tr = /\b(ve|bir|bu|ben|siz|merhaba|teşekkür|lütfen|proje|hizmet)\b/i;
      if (eng.test(text)) return 'en';
      if (tr.test(text)) return 'tr';
      if (lang && String(lang).toLowerCase().startsWith('en')) return 'en';
      return 'tr';
    }

    const detectedLang = (lang && String(lang).toLowerCase().startsWith('en')) ? 'en' : detectLanguageFromText(lastUserText);
    const systemInstructionToUse = detectedLang === 'en' ? SYSTEM_INSTRUCTION_EN : SYSTEM_INSTRUCTION;

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash", 
      systemInstruction: systemInstructionToUse,
    }, generationConfig);

    const result = await model.generateContent({ contents });
    const response = await result.response;
    const text = response.text();

    return res.json({ text });
  } catch (error) {
    console.error("Gemini API Detaylı Hata:", error);
    
    return res.status(error.status || 500).json({ 
      error: "Sunucu hatası", 
      details: error.message 
    });
  }
});

app.post("/api/consultation", async (req, res) => {
  const { name, company, email, phone, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({
      ok: false,
      message: "Zorunlu alanlar eksik",
    });
  }

  const transporter = nodemailer.createTransport({
    service : "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Semafor Website" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL,
      replyTo: email,
      subject: `Yeni Consultation Talebi - ${name}`,
      text: `
Ad Soyad: ${name}
Firma: ${company || "-"}
E-posta: ${email}
Telefon: ${phone || "-"}

Mesaj:
${message}
      `,
    });

    return res.json({ ok: true });
  } catch (err) {
    console.error("Mail gönderme hatası:", err);
    return res.status(500).json({
      ok: false,
      message: "Mail gönderilemedi",
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend http://localhost:${PORT} adresinde aktif.`);
});