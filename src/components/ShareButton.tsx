import React from 'react';

interface ShareButtonProps {
  name: string;
  poem: string[];
}

export function ShareButton({ name, poem }: ShareButtonProps) {
  const generateShareableText = () => {
    const poemText = poem.map((line, i) => `${name[i].toUpperCase()}: ${line}`).join('\n');
    return `🔥 Roast Poem for ${name} 🔥\n\n${poemText}\n\nGenerate your own roast poem at: ${window.location.href}`;
  };

  const handleShare = async () => {
    const text = generateShareableText();

    if (navigator.share) {
      try {
        await navigator.share({
          title: `Roast Poem for ${name}`,
          text: text,
        });
      } catch (error) {
        if (error instanceof Error && error.name !== 'AbortError') {
          console.error('Error sharing:', error);
          fallbackShare(text);
        }
      }
    } else {
      fallbackShare(text);
    }
  };

  const fallbackShare = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Poem copied to clipboard! You can now share it with your friends.');
  };

  return (
    <button
      onClick={handleShare}
      className="mt-4 w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
      </svg>
      <span>Share Poem</span>
    </button>
  );
}