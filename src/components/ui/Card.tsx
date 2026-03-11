import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="shadow-md border rounded-md p-4">
      <h2 className="text-lg font-medium">{title}</h2>
      <div className="mt-2">{children}</div>
    </div>
  );
};

export default Card;