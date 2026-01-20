"use client";

import { Button } from "@/components/ui/button";

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6">
      <div className="w-16 h-16 rounded-sm bg-orange-100 flex items-center justify-center mb-6">
        <svg
          className="w-8 h-8 text-orange-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-3">
        No projects yet
      </h2>
      <p className="text-gray-600 text-center max-w-md mb-8">
        Get started by creating your first documentation project. It only takes
        a few seconds to set up.
      </p>

      <Button variant="primary" className="px-6 py-3">
        Create Your First Project
      </Button>
    </div>
  );
}
