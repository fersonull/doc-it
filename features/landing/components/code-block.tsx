export function CodeBlock() {
  return (
    <div className="rounded-sm bg-gray-900 p-5 mb-8 shadow-lg">
      <div className="font-mono text-sm">
        <div className="text-gray-500 mb-2">// Example request</div>
        <div className="text-orange-400">
          fetch<span className="text-gray-300">(</span>
          <span className="text-green-400">'https://api.example.com'</span>
          <span className="text-gray-300">, {`{`}</span>
        </div>
        <div className="pl-4 text-gray-300">headers: {`{`}</div>
        <div className="pl-8">
          <span className="text-orange-300">'Authorization'</span>
          <span className="text-gray-300">:</span>{' '}
          <span className="text-green-400">'Bearer YOUR_TOKEN'</span>
        </div>
        <div className="pl-4 text-gray-300">{`}`}</div>
        <div className="text-gray-300">{`})`}</div>
      </div>
    </div>
  );
}
