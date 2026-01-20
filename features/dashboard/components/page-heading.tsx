import { Button } from "@/components/ui";
import { Plus } from "lucide-react";

interface PageHeadingProps {
  title: string;
  subtitle: string;
  projectCount?: number;
}

export function PageHeading({
  title,
  subtitle,
  projectCount,
}: PageHeadingProps) {
  return (
    <div className="mb-12">
      <div className="flex items-center justify-between font-sans gap-2">
        <h1 className="text-4xl font-semibold text-gray-900">{title}</h1>

        <Button className="flex items-center gap-2">
          <Plus size={16} />
          New Document
        </Button>
      </div>
      <p className="text-muted-foreground">{subtitle}</p>
    </div>
  );
}
