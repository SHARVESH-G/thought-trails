import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({apiKey:process.env.GEMINI});

const geminiMain =async(prompt)=> {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });
  return(response.text);
}

export default geminiMain;