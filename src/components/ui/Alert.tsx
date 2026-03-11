import React from 'react';

interface AlertProps {
  message: string;
  type?: 'success' | 'error';
}

const Alert: React.FC<AlertProps> = ({ message, type = 'success' }) => {
  const alertStyles = type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700';

  return (
    <div className={`p-4 mb-4 rounded-md ${alertStyles}`}>
      {message}
    </div>
  );
};

export default Alert;