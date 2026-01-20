"use client";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

export function DashboardNavbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <a
              href="/dashboard"
              className="text-xl font-semibold text-gray-900"
            >
              {siteConfig.name}
            </a>
            <div className="hidden md:flex items-center gap-6">
              <a
                href="/dashboard"
                className="text-sm font-medium text-gray-900 hover:text-orange-600 transition-colors"
              >
                Documents
              </a>
              <a
                href="/dashboard/settings"
                className="text-sm font-medium text-gray-600 hover:text-orange-600 transition-colors"
              >
                Settings
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-linear-to-br border flex items-center justify-center font-semibold cursor-pointer hover:opacity-90 transition-opacity">
              JD
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
