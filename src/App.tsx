import { useState } from 'react';
import { Header } from './components/Header';
import { NameInput } from './components/NameInput';
import { PoemDisplay } from './components/PoemDisplay';
import { ErrorMessage } from './components/ErrorMessage';
import { generateAcrosticPoem } from './utils/poemGenerator';

function App() {
  const [name, setName] = useState('');
  const [poem, setPoem] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!name.trim()) {
      setError('Please enter a name first!');
      return;
    }

    if (!import.meta.env.VITE_OPENAI_API_KEY) {
      setError('OpenAI API key is missing. Please check your environment variables.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const generatedPoem = await generateAcrosticPoem(name);
      setPoem(generatedPoem);
      setHasGenerated(true);
    } catch (error) {
      setError('Failed to generate poem. Please try again.');
      console.error('Error generating poem:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <Header />
        <div className="flex flex-col items-center space-y-8">
          {error && <ErrorMessage message={error} />}
          <NameInput
            name={name}
            onNameChange={setName}
            onGenerate={handleGenerate}
            isLoading={isLoading}
          />
          {(hasGenerated || isLoading) && (
            <PoemDisplay 
              name={name} 
              poem={poem} 
              isLoading={isLoading} 
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;