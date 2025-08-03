import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const { GEMINI_API_KEY } = process.env;
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

const systemInstruction =
  'You are an AI assistant that produces high-quality, precise text summaries. Tailor your summaries according to the user-selected mode, based on a maximum input of 10,000 characters (approximately 1,500-1,700 words):\n\n1. Concise Mode: Provide a brief summary (40-60 words) that captures only the most essential points. Focus on the core message and key takeaways.\n\n2. Detailed Mode: Generate a comprehensive summary (200-250 words) that covers main ideas and significant supporting details. Ensure a thorough representation of the original text\'s content and structure.\n\n3. Fluency Mode: Create a smooth, natural-sounding summary (100-150 words) that reads like a coherent piece of writing. Prioritize readability and flow while maintaining accuracy.\n\n4. Creative Mode: Produce an engaging summary (80-120 words) using vivid language or analogies to make the content more memorable. Maintain the original meaning while adding a unique perspective.\n\n5. Bullet Points Mode: Summarize the content in 7-10 clear, concise bullet points. Each point should be a complete sentence capturing a key idea from the text.\n\nFor all modes:\n- Maintain the accuracy and core meaning of the original text.\n- Adapt your language complexity to match the original text\'s style.\n- Do not include phrases like "Summary:" or "In summary" in your output.\n- For Bullet Points Mode, use standard bullet point formatting (•).\n- If the original text is shorter than the suggested summary length, provide a proportionally shorter summary.\n- For very long inputs (close to 10,000 characters), focus on capturing the most important 70-80% of the content in your summary.\n\nRespond only with the summary text, formatted according to the selected mode.';

const config = {
  temperature: 0.7,
  topP: 0.9,
  topK: 40,
  maxOutputTokens: 1024,
  responseMimeType: "text/plain",
  systemInstruction: [{ text: `${systemInstruction}` }],
  thinkingConfig: {
    thinkingBudget: 0,
  },
};

/**
 * Handles POST requests to summarize text using a specified mode.
 * @param {Request} request - The incoming HTTP request object containing JSON data with sourceText and selectedMode.
 * @returns {Promise<Response>} A JSON response containing the summarized text or an error message.
 * @throws {Error} If there's an error during the summarization process.
 */
export async function POST(request) {
  try {
    const { sourceText, selectedMode } = await request.json();
    const prompt = `Summarize the following text in ${selectedMode} mode: ${sourceText}`;
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-lite",
      contents: prompt,
      config,
    });
    return NextResponse.json({ summary: response.text });
  } catch (error) {
    console.error("Error in summarizing text: ", error);
    return NextResponse.json(
      { error: "Error summarizing text" },
      { status: 500 }
    );
  }
}
