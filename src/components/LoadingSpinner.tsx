import { FC } from 'react';
import { PulseLoader } from 'react-spinners';

interface LoadingSpinnerProps {
  loading: boolean;
}

export const LoadingSpinner: FC<LoadingSpinnerProps> = ({ loading }) => {
  if (!loading) return null;

  return (
    <div className="flex justify-center items-center py-4">
      <PulseLoader color="#9333ea" size={10} />
    </div>
  );
}