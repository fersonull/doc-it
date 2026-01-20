'use client';

import { useEffect, useRef } from 'react';

interface QuoteBlockProps {
  id: string;
  content: string;
  isActive: boolean;
  onChange: (id: string, content: string) => void;
  onFocus: (id: string) => void;
}

export function QuoteBlock({ id, content, isActive, onChange, onFocus }: QuoteBlockProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [content]);

  return (
    <div className={`border-l-4 border-orange-500 pl-4 py-2 ${isActive ? 'bg-orange-50/30' : 'bg-gray-50'}`}>
      <textarea
        ref={textareaRef}
        value={content}
        onChange={(e) => onChange(id, e.target.value)}
        onFocus={() => onFocus(id)}
        placeholder="Quote text..."
        rows={1}
        className="w-full text-gray-700 italic leading-relaxed placeholder-gray-400 bg-transparent border-none outline-none focus:ring-0 resize-none overflow-hidden"
      />
    </div>
  );
}
