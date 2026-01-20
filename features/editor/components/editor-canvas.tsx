'use client';

import { Block, BlockType } from '../types/block.types';
import { BlockContainer } from './block-container';

interface EditorCanvasProps {
  pageTitle: string;
  blocks: Block[];
  activeBlockId: string | null;
  onTitleChange: (title: string) => void;
  onBlockChange: (id: string, content: string) => void;
  onBlockFocus: (id: string) => void;
  onBlockDelete: (id: string) => void;
  onBlockDuplicate: (id: string) => void;
  onBlockAdd: (type: BlockType) => void;
  onBlockAddAfter: (blockId: string, type: BlockType) => void;
  onLanguageChange: (id: string, language: string) => void;
  onBlockMoveUp: (id: string) => void;
  onBlockMoveDown: (id: string) => void;
}

export function EditorCanvas({
  pageTitle,
  blocks,
  activeBlockId,
  onTitleChange,
  onBlockChange,
  onBlockFocus,
  onBlockDelete,
  onBlockDuplicate,
  onBlockAdd,
  onBlockAddAfter,
  onLanguageChange,
  onBlockMoveUp,
  onBlockMoveDown,
}: EditorCanvasProps) {
  return (
    <div className="flex-1 overflow-y-auto bg-gray-50">
      <div className=" w-full mx-auto px-20 py-12">
        <div className="bg-white rounded-sm border border-gray-200 p-12">
          {/* Page Title */}
          <input
            type="text"
            value={pageTitle}
            onChange={(e) => onTitleChange(e.target.value)}
            placeholder="Untitled Page"
            className="w-full text-5xl font-semibold text-gray-900 placeholder-gray-300 border-none outline-none mb-12 focus:ring-0"
          />

          {/* Blocks */}
          {blocks.length > 0 ? (
            <div className="space-y-2">
              {blocks.map((block, index) => (
                <BlockContainer
                  key={block.id}
                  block={block}
                  isActive={activeBlockId === block.id}
                  onChange={onBlockChange}
                  onFocus={onBlockFocus}
                  onDelete={onBlockDelete}
                  onDuplicate={onBlockDuplicate}
                  onAddBlockAfter={onBlockAddAfter}
                  onLanguageChange={onLanguageChange}
                  onMoveUp={index > 0 ? onBlockMoveUp : undefined}
                  onMoveDown={index < blocks.length - 1 ? onBlockMoveDown : undefined}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-12 h-12 rounded-sm bg-gray-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <p className="text-gray-500 mb-4">Start writing by adding your first block</p>
              <button
                onClick={() => onBlockAdd('paragraph')}
                className="px-4 py-2 text-sm font-medium text-white bg-orange-600 rounded-sm hover:bg-orange-700 transition-colors"
              >
                Add Paragraph
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
