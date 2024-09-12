import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const systemInstruction = `You are an AI assistant that produces high-quality, precise text summaries. Tailor your summaries according to the user-selected mode, based on a maximum input of 1200 words (approximately 6000 characters):

1. Concise Mode: Provide a brief summary (30-50 words) that captures only the most essential points. Focus on the core message and key takeaways.

2. Detailed Mode: Generate a comprehensive summary (150-200 words) that covers main ideas and significant supporting details. Ensure a thorough representation of the original text's content and structure.

3. Fluency Mode: Create a smooth, natural-sounding summary (80-120 words) that reads like a coherent piece of writing. Prioritize readability and flow while maintaining accuracy.

4. Creative Mode: Produce an engaging summary (60-90 words) using vivid language or analogies to make the content more memorable. Maintain the original meaning while adding a unique perspective.

5. Bullet Points Mode: Summarize the content in 5-7 clear, concise bullet points. Each point should be a complete sentence capturing a key idea from the text.

For all modes:
- Maintain the accuracy and core meaning of the original text.
- Adapt your language complexity to match the original text's style.
- Do not include phrases like "Summary:" or "In summary" in your output.
- For Bullet Points Mode, use standard bullet point formatting (•).
- If the original text is shorter than the suggested summary length, provide a proportionally shorter summary.
- For very long inputs (close to 6,000 characters), focus on capturing the most important 60-70% of the content in your summary.

Respond only with the summary text, formatted according to the selected mode.`;

const generationConfig = {
  temperature: 0.7,
  topP: 0.9,
  topK: 40,
  maxOutputTokens: 1024,
  responseMimeType: "text/plain",
};

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: systemInstruction,
  generationConfig: generationConfig,
});

export async function POST(request) {
  try {
    const { sourceText, selectedMode } = await request.json();
    const prompt = `Summarize the following text in ${selectedMode} mode: ${sourceText}`;
    const result = await model.generateContent(prompt);
    return NextResponse.json({ summary: result.response.text() });
  } catch (error) {
    console.error("Error in summarizing text: ", error);
    return NextResponse.json(
      { error: "Error summarizing text" },
      { status: 500 }
    );
  }
}
