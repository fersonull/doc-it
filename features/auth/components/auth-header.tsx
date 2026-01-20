import { siteConfig } from '@/config/site';

interface AuthHeaderProps {
  title: string;
  subtitle: string;
}

export function AuthHeader({ title, subtitle }: AuthHeaderProps) {
  return (
    <div className="mb-12">
      <div className="mb-8">
        <a href="/" className="text-2xl font-semibold text-gray-900 hover:text-orange-600 transition-colors">
          {siteConfig.name}
        </a>
      </div>
      <h1 className="text-4xl font-semibold text-gray-900 mb-4">{title}</h1>
      <p className="text-lg text-gray-600 leading-relaxed">{subtitle}</p>
    </div>
  );
}
