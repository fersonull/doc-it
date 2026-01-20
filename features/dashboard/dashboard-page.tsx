import { DashboardNavbar } from "./components/dashboard-navbar";
import { PageHeading } from "./components/page-heading";
import { ProjectGrid } from "./components/project-grid";
import { EmptyState } from "./components/empty-state";

// Mock data - replace with real data fetching
const mockProjects = [
  {
    id: "1",
    title: "API Documentation",
    description:
      "Complete REST API reference with authentication, endpoints, and examples.",
    lastEdited: "2 hours ago",
    status: "published" as const,
    pageCount: 12,
  },
  {
    id: "2",
    title: "Developer Guide",
    description: "Getting started guide for new developers joining the team.",
    lastEdited: "1 day ago",
    status: "draft" as const,
    pageCount: 5,
  },
  {
    id: "3",
    title: "Component Library",
    description:
      "UI component documentation with live examples and code snippets.",
    lastEdited: "3 days ago",
    status: "published" as const,
    pageCount: 24,
  },
];

interface DashboardPageProps {
  hasProjects?: boolean;
}

export function DashboardPage({ hasProjects = true }: DashboardPageProps) {
  const projects = hasProjects ? mockProjects : [];

  return (
    <div className="min-h-screen bg-white font-sans">
      <DashboardNavbar />

      <main className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        {projects.length > 0 ? (
          <>
            <PageHeading
              title="Documents"
              subtitle="Manage and organize your documentation in one place."
              projectCount={projects.length}
            />
            <ProjectGrid projects={projects} />
          </>
        ) : (
          <EmptyState />
        )}
      </main>
    </div>
  );
}
