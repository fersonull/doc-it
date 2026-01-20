'use client';

interface EditorHeaderProps {
  projectName: string;
  pageName: string;
  isSaved: boolean;
  onPreview: () => void;
  onPublish: () => void;
}

export function EditorHeader({ 
  projectName, 
  pageName, 
  isSaved, 
  onPreview, 
  onPublish 
}: EditorHeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="font-medium text-gray-900">{projectName}</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span>{pageName}</span>
        </div>

        <div className="flex items-center gap-4">
          <span className={`text-sm font-medium ${isSaved ? 'text-green-600' : 'text-gray-500'}`}>
            {isSaved ? '✓ Saved' : 'Saving...'}
          </span>

          <button
            onClick={onPreview}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            Preview
          </button>

          <button
            onClick={onPublish}
            className="px-5 py-2 text-sm font-medium text-white bg-orange-600 rounded-sm hover:bg-orange-700 transition-colors"
          >
            Publish
          </button>
        </div>
      </div>
    </header>
  );
}
