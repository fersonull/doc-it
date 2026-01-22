import { EditorPage } from "@/features/editor";

interface EditorProps {
  params: Promise<{ projectId: string }>;
}

export default async function Editor({ params }: EditorProps) {
  const { projectId } = await params;

  console.log(projectId);

  return <EditorPage />;
}
