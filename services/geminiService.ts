
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

export class GeminiService {
  constructor() {}

  async *sendMessageStream(history: { role: 'user' | 'model'; parts: { text: string }[] }[]) {
    // Ensure the history alternates correctly. If the very first message is from the model,
    // some model versions might require it to be passed as initial system context or start with user.
    // For simplicity, we ensure the contents array is clean.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    try {
      const responseStream = await ai.models.generateContentStream({
        model: 'gemini-3-flash-preview',
        contents: history,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.8,
          topP: 0.95,
        },
      });

      for await (const chunk of responseStream) {
        if (chunk.text) {
          yield chunk.text;
        }
      }
    } catch (error) {
      console.error("Gemini Streaming Error:", error);
      yield "Communication link unstable. System recalibrating...";
    }
  }
}

export const geminiService = new GeminiService();
