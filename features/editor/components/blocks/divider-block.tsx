'use client';

interface DividerBlockProps {
  isActive: boolean;
}

export function DividerBlock({ isActive }: DividerBlockProps) {
  return (
    <div className={`py-4 ${isActive ? 'bg-orange-50/30' : 'bg-transparent'}`}>
      <hr className="border-t-2 border-gray-200" />
    </div>
  );
}
