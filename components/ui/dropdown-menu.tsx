'use client';

import * as React from 'react';

interface DropdownMenuProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  align?: 'start' | 'end' | 'center';
}

export function DropdownMenu({ trigger, children, align = 'start' }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative inline-block">
      <div onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div
            className={`absolute top-full mt-1 z-50 min-w-[200px] bg-white border border-gray-200 rounded-sm shadow-lg ${
              align === 'end' ? 'right-0' : align === 'center' ? 'left-1/2 -translate-x-1/2' : 'left-0'
            }`}
          >
            <div className="py-1">
              {children}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

interface DropdownMenuItemProps {
  onClick: () => void;
  icon?: React.ReactNode;
  children: React.ReactNode;
  variant?: 'default' | 'danger';
}

export function DropdownMenuItem({ onClick, icon, children, variant = 'default' }: DropdownMenuItemProps) {
  const variantStyles = {
    default: 'text-gray-700 hover:bg-orange-50 hover:text-orange-900',
    danger: 'text-red-600 hover:bg-red-50',
  };

  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-3 py-2 text-sm transition-colors ${variantStyles[variant]}`}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}

export function DropdownMenuSeparator() {
  return <div className="my-1 h-px bg-gray-200" />;
}
