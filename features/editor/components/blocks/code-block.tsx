'use client';

import { useEffect, useRef } from 'react';

interface CodeBlockProps {
  id: string;
  content: string;
  language?: string;
  isActive: boolean;
  onChange: (id: string, content: string) => void;
  onFocus: (id: string) => void;
  onLanguageChange: (id: string, language: string) => void;
}

export function CodeBlock({ id, content, language = 'javascript', isActive, onChange, onFocus, onLanguageChange }: CodeBlockProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      const newHeight = Math.max(textareaRef.current.scrollHeight, 60);
      textareaRef.current.style.height = newHeight + 'px';
    }
  }, [content]);

  return (
    <div className={`rounded-sm overflow-hidden border ${isActive ? 'border-orange-300' : 'border-gray-200'}`}>
      <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
        <select
          value={language}
          onChange={(e) => onLanguageChange(id, e.target.value)}
          className="bg-gray-700 text-gray-300 text-sm border-none rounded-sm px-2 py-1 focus:ring-1 focus:ring-orange-500"
        >
          <option value="javascript">JavaScript</option>
          <option value="typescript">TypeScript</option>
          <option value="python">Python</option>
          <option value="bash">Bash</option>
          <option value="json">JSON</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
        </select>
      </div>
      <textarea
        ref={textareaRef}
        value={content}
        onChange={(e) => onChange(id, e.target.value)}
        onFocus={() => onFocus(id)}
        placeholder="// Enter your code here..."
        rows={1}
        className="w-full bg-gray-900 text-gray-100 font-mono text-sm p-4 border-none outline-none focus:ring-0 resize-none overflow-hidden"
      />
    </div>
  );
}
