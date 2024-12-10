import { generateRoastLine } from './openai';

export async function generateAcrosticPoem(name: string): Promise<string[]> {
  const poem: string[] = [];
  const uppercaseName = name.toUpperCase();

  for (const letter of uppercaseName) {
    if (letter === ' ') {
      poem.push('');
      continue;
    }

    const roastLine = await generateRoastLine(letter, name);
    poem.push(roastLine);
  }

  return poem;
}