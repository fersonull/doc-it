import { ButtonHTMLAttributes, ReactNode } from 'react';

interface OAuthButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  provider: 'google' | 'github';
  children: ReactNode;
}

export function OAuthButton({ provider, children, className = '', ...props }: OAuthButtonProps) {
  const providerStyles = {
    google: 'bg-white border border-gray-200 text-gray-900 hover:border-orange-300 hover:bg-orange-50/30',
    github: 'bg-gray-900 border border-gray-900 text-white hover:bg-gray-800 hover:border-gray-700',
  };

  return (
    <button
      className={`w-full flex items-center justify-center gap-3 px-6 py-4 rounded-sm font-medium transition-all ${providerStyles[provider]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
