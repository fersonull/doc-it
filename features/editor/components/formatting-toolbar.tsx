'use client';

interface ToolbarButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

function ToolbarButton({ icon, label, onClick }: ToolbarButtonProps) {
  return (
    <button
      onClick={onClick}
      className="p-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-sm transition-colors"
      title={label}
    >
      {icon}
    </button>
  );
}

export function FormattingToolbar() {
  return (
    <div className="sticky top-16 z-30 bg-white border-b border-gray-200 px-6 py-2">
      <div className="flex items-center gap-1">
        <ToolbarButton
          label="Heading 1"
          onClick={() => console.log('H1')}
          icon={
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4v6h2V7h3v10H9v2h6v-2h-2V7h3v3h2V4H6zm14 8h-3v3h-2v2h2v3h2v-3h3v-2h-2v-3z"/>
            </svg>
          }
        />
        
        <ToolbarButton
          label="Heading 2"
          onClick={() => console.log('H2')}
          icon={
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4v6h2V7h3v10H9v2h6v-2h-2V7h3v3h2V4H6zm13 14h-4v-2c2-2 4-3.5 4-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.2 1.8-4 4-4s4 1.8 4 4c0 2.5-2 4-4 6h4v2z"/>
            </svg>
          }
        />

        <div className="w-px h-6 bg-gray-200 mx-2"></div>

        <ToolbarButton
          label="Bold"
          onClick={() => console.log('Bold')}
          icon={
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/>
            </svg>
          }
        />

        <ToolbarButton
          label="Italic"
          onClick={() => console.log('Italic')}
          icon={
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"/>
            </svg>
          }
        />

        <div className="w-px h-6 bg-gray-200 mx-2"></div>

        <ToolbarButton
          label="Code"
          onClick={() => console.log('Code')}
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          }
        />

        <ToolbarButton
          label="Link"
          onClick={() => console.log('Link')}
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          }
        />

        <ToolbarButton
          label="Image"
          onClick={() => console.log('Image')}
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          }
        />
      </div>
    </div>
  );
}
