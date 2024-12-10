import React from 'react';
import { Button } from './Button';

interface NameInputProps {
  name: string;
  onNameChange: (name: string) => void;
  onGenerate: () => void;
  isLoading: boolean;
}

export function NameInput({ name, onNameChange, onGenerate, isLoading }: NameInputProps) {
  return (
    <div className="space-y-4 w-full max-w-md">
      <div className="flex flex-col space-y-2">
        <label htmlFor="name" className="text-lg font-medium text-gray-700">
          Enter your name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Type your name..."
          disabled={isLoading}
        />
      </div>
      <Button onClick={onGenerate} disabled={isLoading}>
        {isLoading ? 'Generating...' : 'Generate Roast Poem'}
      </Button>
    </div>
  );
}