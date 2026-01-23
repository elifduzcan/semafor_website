import "dotenv/config";
import express from "express";
import cors from "cors";
import { GoogleGenAI } from "@google/genai";

const app = express();
app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({}); // quickstart: env'den GEMINI_API_KEY alır :contentReference[oaicite:8]{index=8}

app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;

  const contents = (messages || []).map(m => ({
    role: m.role === "user" ? "user" : "model",
    parts: [{ text: String(m.content ?? "") }]
  }));

  const response = await ai.models.generateContent({
    // burada gemini-2.5-pro kullanacaksın
    model: "gemini-2.5-pro",
    contents
  });

  res.json({ text: response.text });
});

app.listen(3001);
