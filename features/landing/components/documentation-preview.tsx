import { Sidebar } from './sidebar';
import { CodeBlock } from './code-block';

export function DocumentationPreview() {
  return (
    <div className="flex bg-white/90 backdrop-blur-sm">
      <Sidebar />
      
      <div className="flex-1 p-12 max-h-96 overflow-hidden">
        <h2 className="text-4xl font-semibold text-gray-900 mb-6">Authentication</h2>
        <p className="text-base text-gray-600 leading-relaxed mb-8">
          All API requests require authentication using Bearer tokens. Include your token in the Authorization header.
        </p>
        
        <CodeBlock />

        <p className="text-base text-gray-600 leading-relaxed">
          Generate API tokens from your dashboard settings...
        </p>
      </div>
    </div>
  );
}
