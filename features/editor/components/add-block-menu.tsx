'use client';

import { BlockType } from '../types/block.types';
import { useState } from 'react';

interface AddBlockMenuProps {
  onAddBlock: (type: BlockType) => void;
}

interface BlockOption {
  type: BlockType;
  label: string;
  icon: React.ReactNode;
  description: string;
}

export function AddBlockMenu({ onAddBlock }: AddBlockMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const blockOptions: BlockOption[] = [
    {
      type: 'paragraph',
      label: 'Paragraph',
      description: 'Basic text block',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      ),
    },
    {
      type: 'heading1',
      label: 'Heading 1',
      description: 'Large section heading',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 4v6h2V7h3v10H9v2h6v-2h-2V7h3v3h2V4H6z"/>
        </svg>
      ),
    },
    {
      type: 'heading2',
      label: 'Heading 2',
      description: 'Medium section heading',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 4v6h2V7h3v10H9v2h6v-2h-2V7h3v3h2V4H6z"/>
        </svg>
      ),
    },
    {
      type: 'heading3',
      label: 'Heading 3',
      description: 'Small section heading',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 4v6h2V7h3v10H9v2h6v-2h-2V7h3v3h2V4H6z"/>
        </svg>
      ),
    },
    {
      type: 'code',
      label: 'Code',
      description: 'Code block with syntax highlighting',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      type: 'quote',
      label: 'Quote',
      description: 'Highlight a quote or callout',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      ),
    },
    {
      type: 'divider',
      label: 'Divider',
      description: 'Horizontal line separator',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
        </svg>
      ),
    },
  ];

  const handleAddBlock = (type: BlockType) => {
    onAddBlock(type);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-700 border-2 border-dashed border-gray-300 rounded-sm hover:border-orange-400 hover:text-orange-600 transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        Add Block
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute left-0 top-full mt-2 w-80 bg-white border border-gray-200 rounded-sm shadow-lg z-50 max-h-96 overflow-y-auto">
            <div className="p-2">
              {blockOptions.map((option) => (
                <button
                  key={option.type}
                  onClick={() => handleAddBlock(option.type)}
                  className="w-full flex items-start gap-3 px-3 py-2.5 rounded-sm hover:bg-orange-50 transition-colors text-left"
                >
                  <div className="flex-shrink-0 mt-0.5 text-gray-600">
                    {option.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-gray-900 mb-0.5">
                      {option.label}
                    </div>
                    <div className="text-xs text-gray-600">
                      {option.description}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
