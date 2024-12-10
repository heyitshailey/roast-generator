import { FC } from 'react';

export const Header: FC = () => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold text-purple-800">
        🔥 Roast Poem Generator 🔥
      </h1>
      <p className="text-gray-600 mt-2">
        Get playfully roasted with an AI-generated acrostic poem!
      </p>
    </div>
  );
}