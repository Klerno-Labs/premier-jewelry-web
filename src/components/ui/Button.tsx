import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, ...props }) => {
  const baseStyles = 'px-4 py-2 rounded-md focus:outline-none';
  const variantStyles = variant === 'primary' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800';

  return (
    <button className={`${baseStyles} ${variantStyles}`} {...props}>
      {children}
    </button>
  );
};

export default Button;