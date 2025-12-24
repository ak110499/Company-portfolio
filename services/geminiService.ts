import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let chatSession: Chat | null = null;

const getAiInstance = (): GoogleGenAI => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY is missing from environment variables.");
    throw new Error("API Key not found");
  }
  return new GoogleGenAI({ apiKey });
};

export const initializeChat = (): Chat => {
  if (chatSession) return chatSession;

  try {
    const ai = getAiInstance();
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 500,
      },
    });
    return chatSession;
  } catch (error) {
    console.error("Failed to initialize chat:", error);
    throw error;
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = initializeChat();
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    
    if (response.text) {
      return response.text;
    }
    return "I received the data but could not generate a text response.";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "Connection error. Please ensure your API key is valid.";
  }
};
