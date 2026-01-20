import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost';
  children: ReactNode;
}

export function Button({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}: ButtonProps) {
  const baseStyles = 'px-6 py-2.5 text-sm font-medium rounded-sm transition-all';
  
  const variantStyles = {
    primary: 'text-white bg-orange-600 hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-500/20',
    ghost: 'text-gray-900 hover:text-orange-600',
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
