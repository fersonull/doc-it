interface DividerProps {
  text?: string;
}

export function Divider({ text = 'OR' }: DividerProps) {
  return (
    <div className="relative flex items-center py-4">
      <div className="flex-grow border-t border-gray-200"></div>
      {text && (
        <span className="flex-shrink mx-4 text-sm text-gray-500 font-medium">
          {text}
        </span>
      )}
      <div className="flex-grow border-t border-gray-200"></div>
    </div>
  );
}
