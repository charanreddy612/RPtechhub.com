
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

export class GeminiService {
  constructor() {}

  async *sendMessageStream(history: { role: 'user' | 'model'; parts: { text: string }[] }[]) {
    // CRITICAL FIX: The Gemini API requires the conversation to start with a 'user' role.
    let validHistory = history;
    const firstUserIndex = history.findIndex(m => m.role === 'user');
    if (firstUserIndex !== -1) {
      validHistory = history.slice(firstUserIndex);
    }

    // Initialize inside the method to ensure process.env is accessible at call time
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    
    try {
      const responseStream = await ai.models.generateContentStream({
        model: 'gemini-3-flash-preview',
        contents: validHistory,
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
