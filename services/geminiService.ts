
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
    
    if (validHistory.length === 0) return;

    // Fix: Initialize GoogleGenAI with process.env.API_KEY directly as required by standard guidelines.
    // Ensure the key is used directly in the named parameter object.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    try {
      // Fix: Direct call to generateContentStream with model name and contents.
      // Upgraded to 'gemini-3-pro-preview' as the task involves complex enterprise strategic reasoning.
      const responseStream = await ai.models.generateContentStream({
        model: 'gemini-3-pro-preview',
        contents: validHistory,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.8,
          topP: 0.95,
        },
      });

      for await (const chunk of responseStream) {
        // Fix: Accessing the .text property of the GenerateContentResponse object directly.
        // Guidelines state text is a property getter, not a method.
        const text = chunk.text;
        if (text) {
          yield text;
        }
      }
    } catch (error) {
      console.error("Gemini Streaming Error:", error);
      yield "Communication link unstable. System recalibrating...";
    }
  }
}

export const geminiService = new GeminiService();
