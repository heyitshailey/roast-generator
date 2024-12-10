import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export async function generateRoastLine(letter: string, name: string): Promise<string> {
  try {
    const prompt = `Write a funny, lighthearted roast line that starts with the letter "${letter}" for someone named "${name}". Keep it playful and not mean-spirited. The line should be short and witty.`;
    
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a witty comedian who specializes in playful roasts. Keep the tone light and funny, never cruel."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      max_tokens: 50,
      temperature: 0.8,
    });

    return response.choices[0].message.content?.trim() || `${letter}... (API error)`;
  } catch (error) {
    console.error('Error generating roast line:', error);
    return `${letter}... (Failed to generate)`;
  }
}