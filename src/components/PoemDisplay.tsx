import React from 'react';
import { PoemLine } from './PoemLine';
import { LoadingSpinner } from './LoadingSpinner';
import { ShareButton } from './ShareButton';

interface PoemDisplayProps {
  name: string;
  poem: string[];
  isLoading: boolean;
}

export function PoemDisplay({ name, poem, isLoading }: PoemDisplayProps) {
  return (
    <div className="mt-8 p-6 bg-white rounded-lg shadow-lg max-w-md w-full">
      <h2 className="text-2xl font-bold text-center mb-4">
        Roast Poem for {name}
      </h2>
      <LoadingSpinner loading={isLoading} />
      {!isLoading && (
        <>
          <div className="space-y-2">
            {poem.map((line, index) => (
              <PoemLine
                key={index}
                letter={name[index] || ' '}
                word={line}
                index={index}
              />
            ))}
          </div>
          <ShareButton name={name} poem={poem} />
        </>
      )}
    </div>
  );
}