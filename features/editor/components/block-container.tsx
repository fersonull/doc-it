'use client';

import { useState } from 'react';
import { Block, BlockType } from '../types/block.types';
import { HeadingBlock } from './blocks/heading-block';
import { ParagraphBlock } from './blocks/paragraph-block';
import { CodeBlock } from './blocks/code-block';
import { QuoteBlock } from './blocks/quote-block';
import { DividerBlock } from './blocks/divider-block';
import { DropdownMenu, DropdownMenuItem, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';

interface BlockContainerProps {
  block: Block;
  isActive: boolean;
  onChange: (id: string, content: string) => void;
  onFocus: (id: string) => void;
  onDelete: (id: string) => void;
  onDuplicate: (id: string) => void;
  onAddBlockAfter: (id: string, type: BlockType) => void;
  onLanguageChange: (id: string, language: string) => void;
  onMoveUp?: (id: string) => void;
  onMoveDown?: (id: string) => void;
}

export function BlockContainer({ 
  block, 
  isActive, 
  onChange, 
  onFocus, 
  onDelete,
  onDuplicate,
  onAddBlockAfter,
  onLanguageChange,
  onMoveUp,
  onMoveDown,
}: BlockContainerProps) {
  const [isHovered, setIsHovered] = useState(false);

  const renderBlock = () => {
    switch (block.type) {
      case 'heading1':
        return <HeadingBlock id={block.id} level={1} content={block.content} isActive={isActive} onChange={onChange} onFocus={onFocus} />;
      case 'heading2':
        return <HeadingBlock id={block.id} level={2} content={block.content} isActive={isActive} onChange={onChange} onFocus={onFocus} />;
      case 'heading3':
        return <HeadingBlock id={block.id} level={3} content={block.content} isActive={isActive} onChange={onChange} onFocus={onFocus} />;
      case 'paragraph':
        return <ParagraphBlock id={block.id} content={block.content} isActive={isActive} onChange={onChange} onFocus={onFocus} />;
      case 'code':
        return <CodeBlock id={block.id} content={block.content} language={block.metadata?.language} isActive={isActive} onChange={onChange} onFocus={onFocus} onLanguageChange={onLanguageChange} />;
      case 'quote':
        return <QuoteBlock id={block.id} content={block.content} isActive={isActive} onChange={onChange} onFocus={onFocus} />;
      case 'divider':
        return <DividerBlock isActive={isActive} />;
      default:
        return null;
    }
  };

  const blockTypeIcons: Record<BlockType, React.ReactNode> = {
    heading1: <Heading1Icon />,
    heading2: <Heading2Icon />,
    heading3: <Heading3Icon />,
    paragraph: <ParagraphIcon />,
    code: <CodeIcon />,
    quote: <QuoteIcon />,
    list: <ListIcon />,
    image: <ImageIcon />,
    divider: <DividerIcon />,
  };

  return (
    <div 
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left Side Actions - Always Visible on Hover */}
      {isHovered && (
        <div className="absolute -left-14 top-0 flex items-start gap-1 pt-2">
          <button
            className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-sm transition-all"
            title="Drag to reorder"
          >
            <GripVerticalIcon />
          </button>
          
          <DropdownMenu
            trigger={
              <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-sm transition-all">
                <MoreHorizontalIcon />
              </button>
            }
          >
            <DropdownMenuItem onClick={() => onDuplicate(block.id)} icon={<CopyIcon />}>
              Duplicate
            </DropdownMenuItem>
            {onMoveUp && (
              <DropdownMenuItem onClick={() => onMoveUp(block.id)} icon={<ArrowUpIcon />}>
                Move Up
              </DropdownMenuItem>
            )}
            {onMoveDown && (
              <DropdownMenuItem onClick={() => onMoveDown(block.id)} icon={<ArrowDownIcon />}>
                Move Down
              </DropdownMenuItem>
            )}
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => onDelete(block.id)} icon={<TrashIcon />} variant="danger">
              Delete
            </DropdownMenuItem>
          </DropdownMenu>
        </div>
      )}

      {/* Block Content */}
      <div className={`border-l-2 pl-4 transition-all ${isActive ? 'border-orange-500' : 'border-transparent'}`}>
        {renderBlock()}
      </div>

      {/* Add Block Below - Shows on Hover */}
      {isHovered && (
        <div className="flex items-center gap-2 py-2">
          <div className="flex-1 h-px bg-gray-200"></div>
          <DropdownMenu
            trigger={
              <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-sm transition-all border border-gray-200 hover:border-orange-300">
                <PlusIcon className="w-3 h-3" />
                Add Block
              </button>
            }
            align="center"
          >
            <DropdownMenuItem onClick={() => onAddBlockAfter(block.id, 'paragraph')} icon={<ParagraphIcon />}>
              Paragraph
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onAddBlockAfter(block.id, 'heading1')} icon={<Heading1Icon />}>
              Heading 1
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onAddBlockAfter(block.id, 'heading2')} icon={<Heading2Icon />}>
              Heading 2
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onAddBlockAfter(block.id, 'heading3')} icon={<Heading3Icon />}>
              Heading 3
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => onAddBlockAfter(block.id, 'code')} icon={<CodeIcon />}>
              Code Block
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onAddBlockAfter(block.id, 'quote')} icon={<QuoteIcon />}>
              Quote
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onAddBlockAfter(block.id, 'divider')} icon={<DividerIcon />}>
              Divider
            </DropdownMenuItem>
          </DropdownMenu>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>
      )}
    </div>
  );
}

// Lucide-inspired icons
function GripVerticalIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="9" cy="5" r="1" fill="currentColor"/>
      <circle cx="9" cy="12" r="1" fill="currentColor"/>
      <circle cx="9" cy="19" r="1" fill="currentColor"/>
      <circle cx="15" cy="5" r="1" fill="currentColor"/>
      <circle cx="15" cy="12" r="1" fill="currentColor"/>
      <circle cx="15" cy="19" r="1" fill="currentColor"/>
    </svg>
  );
}

function MoreHorizontalIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="1" fill="currentColor"/>
      <circle cx="19" cy="12" r="1" fill="currentColor"/>
      <circle cx="5" cy="12" r="1" fill="currentColor"/>
    </svg>
  );
}

function PlusIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
  );
}

function ArrowUpIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
  );
}

function ArrowDownIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  );
}

function Heading1Icon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M6 4v6h2V7h3v10H9v2h6v-2h-2V7h3v3h2V4H6z"/>
    </svg>
  );
}

function Heading2Icon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M6 4v6h2V7h3v10H9v2h6v-2h-2V7h3v3h2V4H6z"/>
    </svg>
  );
}

function Heading3Icon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M6 4v6h2V7h3v10H9v2h6v-2h-2V7h3v3h2V4H6z"/>
    </svg>
  );
}

function ParagraphIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function ImageIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function DividerIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
    </svg>
  );
}
