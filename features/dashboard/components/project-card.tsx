"use client";

import { Icon } from "@/components/ui/icon";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  lastEdited: string;
  status: "published" | "draft";
  pageCount: number;
}

export function ProjectCard({
  id,
  title,
  description,
  lastEdited,
  status,
  pageCount,
}: ProjectCardProps) {
  return (
    <div className="group bg-white border border-gray-200 rounded-sm p-6 hover:border-orange-300 transition-all cursor-pointer">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        </div>
        <button
          className="ml-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            console.log("Menu clicked for project:", id);
          }}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </button>
      </div>

      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1 text-xs">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            {pageCount} {pageCount === 1 ? "page" : "pages"}
          </span>
          <span
            className={`px-2 py-0.5 rounded-sm text-xs font-medium ${
              status === "published"
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {status === "published" ? "Published" : "Draft"}
          </span>
        </div>
        <span className="text-xs">Edited {lastEdited}</span>
      </div>
    </div>
  );
}
