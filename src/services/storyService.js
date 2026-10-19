
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const generateStory = async (prompt) => {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    config: {
      temperature: 0.9,
      maxOutputTokens: 3000,
    },
  });

  if (!response.text) {
    throw new Error("Gemini returned an empty story");
  }

  return response.text;
};

export default generateStory;
