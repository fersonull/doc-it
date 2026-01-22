import { EditorPage } from "@/features/editor";

interface EditorProps {
  params: Promise<{ documentId: string }>;
}

export default async function Editor({ params }: EditorProps) {
  const { documentId } = await params;

  console.log(documentId);

  return <EditorPage />;
}
