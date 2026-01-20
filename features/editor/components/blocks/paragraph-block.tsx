'use client';

import { useEffect, useRef } from 'react';

interface ParagraphBlockProps {
  id: string;
  content: string;
  isActive: boolean;
  onChange: (id: string, content: string) => void;
  onFocus: (id: string) => void;
}

export function ParagraphBlock({ id, content, isActive, onChange, onFocus }: ParagraphBlockProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [content]);

  return (
    <textarea
      ref={textareaRef}
      value={content}
      onChange={(e) => onChange(id, e.target.value)}
      onFocus={() => onFocus(id)}
      placeholder="Type something..."
      rows={1}
      className={`w-full text-gray-700 leading-relaxed placeholder-gray-300 border-none outline-none focus:ring-0 resize-none overflow-hidden ${isActive ? 'bg-orange-50/30' : 'bg-transparent'}`}
    />
  );
}
