import { DocumentationPreview } from "./documentation-preview";

export function BrowserMockup() {
  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="absolute -inset-4 bg-linear-to-r from-orange-300/20 to-orange-500/20 rounded-sm blur-2xl"></div>

      <div className="relative rounded-lg overflow-hidden shadow-xl border-8 border-black/2 bg-white/80 backdrop-blur-sm">
        <div className="bg-linear-to-b from-gray-50 to-white border-b border-orange-100/50 px-4 py-3 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          </div>
          <div className="ml-4 flex-1 bg-white rounded-sm px-4 py-2 text-xs text-gray-500 border border-orange-100">
            docs.example.com/getting-started
          </div>
        </div>

        <DocumentationPreview />
      </div>
    </div>
  );
}
