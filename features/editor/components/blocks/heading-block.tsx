'use client';

interface HeadingBlockProps {
  id: string;
  level: 1 | 2 | 3;
  content: string;
  isActive: boolean;
  onChange: (id: string, content: string) => void;
  onFocus: (id: string) => void;
}

export function HeadingBlock({ id, level, content, isActive, onChange, onFocus }: HeadingBlockProps) {
  const sizes = {
    1: 'text-4xl leading-tight',
    2: 'text-3xl leading-tight',
    3: 'text-2xl leading-tight',
  };

  return (
    <input
      type="text"
      value={content}
      onChange={(e) => onChange(id, e.target.value)}
      onFocus={() => onFocus(id)}
      placeholder={`Heading ${level}`}
      className={`w-full font-semibold text-gray-900 placeholder-gray-300 border-none outline-none focus:ring-0 py-1 ${sizes[level]} ${isActive ? 'bg-orange-50/30' : 'bg-transparent'}`}
    />
  );
}
