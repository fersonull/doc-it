'use client';

import { useState } from 'react';

interface Section {
  id: string;
  title: string;
  order: number;
}

interface Page {
  id: string;
  title: string;
  order: number;
  sections: Section[];
}

interface EditorSidebarProps {
  projectTitle: string;
  pages: Page[];
  activePageId: string;
  activeSectionId?: string;
  onPageSelect: (pageId: string) => void;
  onSectionSelect: (pageId: string, sectionId: string) => void;
  onAddPage: () => void;
  onDeletePage: (pageId: string) => void;
  onAddSection: (pageId: string) => void;
}

function SectionItem({
  section,
  isActive,
  onSelect,
}: {
  section: Section;
  isActive: boolean;
  onSelect: () => void;
}) {
  return (
    <div
      className={`
        flex items-center gap-2 pl-10 pr-3 py-2 cursor-pointer transition-colors text-sm
        ${isActive 
          ? 'text-orange-700 bg-orange-50/50' 
          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
        }
      `}
      onClick={onSelect}
    >
      <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
      </svg>
      <span className="truncate">{section.title}</span>
    </div>
  );
}

function PageItem({ 
  page, 
  isActive, 
  onSelect, 
  onDelete,
  onSectionSelect,
  activeSectionId,
  onAddSection,
}: { 
  page: Page; 
  isActive: boolean; 
  onSelect: () => void; 
  onDelete: () => void;
  onSectionSelect: (sectionId: string) => void;
  activeSectionId?: string;
  onAddSection: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(isActive);

  const hasSections = page.sections && page.sections.length > 0;

  return (
    <div>
      <div
        className={`
          group flex items-center gap-2 px-3 py-2.5 rounded-sm cursor-pointer transition-colors
          ${isActive 
            ? 'bg-orange-50 border-l-4 border-orange-600 pl-2' 
            : 'hover:bg-gray-50 border-l-4 border-transparent'
          }
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Expand/Collapse Button */}
        {hasSections && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            className="p-0.5 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg 
              className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-90' : ''}`} 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg>
          </button>
        )}
        
        {!hasSections && <div className="w-4"></div>}

        {/* Drag Handle */}
        <svg className="w-4 h-4 text-gray-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"/>
        </svg>
        
        <span 
          className={`flex-1 text-sm font-medium truncate ${isActive ? 'text-orange-900' : 'text-gray-700'}`}
          onClick={onSelect}
        >
          {page.title}
        </span>
        
        {isHovered && !isActive && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            className="p-1 text-gray-400 hover:text-red-600 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        )}
      </div>

      {/* Sections */}
      {isExpanded && hasSections && (
        <div className="ml-2 border-l-2 border-gray-100">
          {page.sections.map((section) => (
            <SectionItem
              key={section.id}
              section={section}
              isActive={activeSectionId === section.id}
              onSelect={() => onSectionSelect(section.id)}
            />
          ))}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddSection();
            }}
            className="w-full flex items-center gap-2 pl-10 pr-3 py-2 text-xs text-gray-500 hover:text-orange-600 transition-colors"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Section
          </button>
        </div>
      )}
    </div>
  );
}

export function EditorSidebar({ 
  projectTitle, 
  pages, 
  activePageId, 
  activeSectionId,
  onPageSelect, 
  onSectionSelect,
  onAddPage,
  onDeletePage,
  onAddSection,
}: EditorSidebarProps) {
  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <a href="/dashboard" className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-600 transition-colors mb-3">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Dashboard
        </a>
        <h2 className="text-lg font-semibold text-gray-900 truncate">{projectTitle}</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-3">
        <div className="mb-3">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 py-2">
            Pages
          </div>
        </div>
        
        <div className="space-y-1">
          {pages.map((page) => (
            <PageItem
              key={page.id}
              page={page}
              isActive={page.id === activePageId}
              onSelect={() => onPageSelect(page.id)}
              onDelete={() => onDeletePage(page.id)}
              onSectionSelect={(sectionId) => onSectionSelect(page.id, sectionId)}
              activeSectionId={activeSectionId}
              onAddSection={() => onAddSection(page.id)}
            />
          ))}
        </div>
      </div>

      <div className="p-3 border-t border-gray-200">
        <button
          onClick={onAddPage}
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-dashed border-gray-300 rounded-sm text-sm font-medium text-gray-700 hover:border-orange-400 hover:text-orange-600 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Page
        </button>
      </div>
    </aside>
  );
}
