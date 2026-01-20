"use client";

import { useState } from "react";
import { EditorSidebar } from "./components/editor-sidebar";
import { EditorHeader } from "./components/editor-header";
import { FormattingToolbar } from "./components/formatting-toolbar";
import { EditorCanvas } from "./components/editor-canvas";
import { Block, BlockType, PageContent } from "./types/block.types";

interface Section {
  id: string;
  title: string;
  order: number;
}

interface Page {
  id: string;
  title: string;
  order: number;
  sections: Section[];
}

const mockPages: Page[] = [
  {
    id: "1",
    title: "Getting Started",
    order: 1,
    sections: [
      { id: "1-1", title: "Introduction", order: 1 },
      { id: "1-2", title: "Quick Start", order: 2 },
      { id: "1-3", title: "Prerequisites", order: 3 },
    ],
  },
  {
    id: "2",
    title: "Installation",
    order: 2,
    sections: [
      { id: "2-1", title: "npm Installation", order: 1 },
      { id: "2-2", title: "yarn Installation", order: 2 },
      { id: "2-3", title: "CDN Setup", order: 3 },
    ],
  },
  {
    id: "3",
    title: "Configuration",
    order: 3,
    sections: [
      { id: "3-1", title: "Basic Setup", order: 1 },
      { id: "3-2", title: "Advanced Options", order: 2 },
      { id: "3-3", title: "Environment Variables", order: 3 },
    ],
  },
];

const mockPageContent: Record<string, PageContent> = {
  "1": {
    pageId: "1",
    title: "Getting Started",
    blocks: [
      {
        id: "b1",
        type: "paragraph",
        content:
          "Welcome to the documentation! This guide will help you get started in just a few minutes.",
        order: 1,
      },
      { id: "b2", type: "heading2", content: "Installation", order: 2 },
      {
        id: "b3",
        type: "paragraph",
        content:
          "To get started, install our package using your preferred package manager.",
        order: 3,
      },
      {
        id: "b4",
        type: "code",
        content: "npm install doc-it\nyarn add doc-it\npnpm add doc-it",
        metadata: { language: "bash" },
        order: 4,
      },
      { id: "b5", type: "heading2", content: "Configuration", order: 5 },
      {
        id: "b6",
        type: "paragraph",
        content: "Create a configuration file in your project root:",
        order: 6,
      },
      {
        id: "b7",
        type: "code",
        content: `export default {\n  name: 'My Documentation',\n  theme: 'default',\n  sidebar: {\n    enabled: true\n  }\n}`,
        metadata: { language: "javascript" },
        order: 7,
      },
      {
        id: "b8",
        type: "quote",
        content:
          "Pro tip: You can customize every aspect of your documentation using our theming system.",
        order: 8,
      },
    ],
  },
  "2": {
    pageId: "2",
    title: "Installation",
    blocks: [
      {
        id: "b9",
        type: "paragraph",
        content: "This page covers different installation methods.",
        order: 1,
      },
    ],
  },
};

export function EditorPage() {
  const [activePageId, setActivePageId] = useState("1");
  const [activeSectionId, setActiveSectionId] = useState<string | undefined>(
    "1-1",
  );
  const [activeBlockId, setActiveBlockId] = useState<string | null>(null);
  const [pages, setPages] = useState<Page[]>(mockPages);
  const [pageContents, setPageContents] =
    useState<Record<string, PageContent>>(mockPageContent);
  const [isSaved, setIsSaved] = useState(true);

  const currentPageContent = pageContents[activePageId] || {
    pageId: activePageId,
    title: pages.find((p) => p.id === activePageId)?.title || "Untitled",
    blocks: [],
  };

  const handlePageSelect = (pageId: string) => {
    setActivePageId(pageId);
    setActiveSectionId(undefined);
    setActiveBlockId(null);
  };

  const handleSectionSelect = (pageId: string, sectionId: string) => {
    setActivePageId(pageId);
    setActiveSectionId(sectionId);
    setActiveBlockId(null);
  };

  const handleAddPage = () => {
    const newPage: Page = {
      id: String(pages.length + 1),
      title: "New Page",
      order: pages.length + 1,
      sections: [],
    };
    setPages([...pages, newPage]);
    setPageContents({
      ...pageContents,
      [newPage.id]: {
        pageId: newPage.id,
        title: "New Page",
        blocks: [],
      },
    });
    setActivePageId(newPage.id);
    setActiveSectionId(undefined);
    setActiveBlockId(null);
  };

  const handleDeletePage = (pageId: string) => {
    if (pages.length > 1) {
      setPages(pages.filter((p) => p.id !== pageId));
      if (activePageId === pageId) {
        setActivePageId(pages[0].id);
        setActiveSectionId(undefined);
        setActiveBlockId(null);
      }
    }
  };

  const handleAddSection = (pageId: string) => {
    setPages(
      pages.map((page) => {
        if (page.id === pageId) {
          const newSection: Section = {
            id: `${pageId}-${page.sections.length + 1}`,
            title: "New Section",
            order: page.sections.length + 1,
          };
          return {
            ...page,
            sections: [...page.sections, newSection],
          };
        }
        return page;
      }),
    );
  };

  const handleTitleChange = (title: string) => {
    setPageContents({
      ...pageContents,
      [activePageId]: {
        ...currentPageContent,
        title,
      },
    });
    setIsSaved(false);
  };

  const handleBlockChange = (blockId: string, content: string) => {
    setPageContents({
      ...pageContents,
      [activePageId]: {
        ...currentPageContent,
        blocks: currentPageContent.blocks.map((block) =>
          block.id === blockId ? { ...block, content } : block,
        ),
      },
    });
    setIsSaved(false);
  };

  const handleBlockFocus = (blockId: string) => {
    setActiveBlockId(blockId);
  };

  const handleBlockDelete = (blockId: string) => {
    setPageContents({
      ...pageContents,
      [activePageId]: {
        ...currentPageContent,
        blocks: currentPageContent.blocks.filter(
          (block) => block.id !== blockId,
        ),
      },
    });
    setIsSaved(false);
  };

  const handleBlockAdd = (type: BlockType) => {
    const newBlock: Block = {
      id: `b${Date.now()}`,
      type,
      content: "",
      order: currentPageContent.blocks.length + 1,
      metadata: type === "code" ? { language: "javascript" } : undefined,
    };

    setPageContents({
      ...pageContents,
      [activePageId]: {
        ...currentPageContent,
        blocks: [...currentPageContent.blocks, newBlock],
      },
    });
    setActiveBlockId(newBlock.id);
    setIsSaved(false);
  };

  const handleBlockAddAfter = (blockId: string, type: BlockType) => {
    const blockIndex = currentPageContent.blocks.findIndex(b => b.id === blockId);
    const newBlock: Block = {
      id: `b${Date.now()}`,
      type,
      content: "",
      order: blockIndex + 1.5,
      metadata: type === "code" ? { language: "javascript" } : undefined,
    };

    const updatedBlocks = [...currentPageContent.blocks];
    updatedBlocks.splice(blockIndex + 1, 0, newBlock);

    setPageContents({
      ...pageContents,
      [activePageId]: {
        ...currentPageContent,
        blocks: updatedBlocks.map((block, idx) => ({ ...block, order: idx + 1 })),
      },
    });
    setActiveBlockId(newBlock.id);
    setIsSaved(false);
  };

  const handleBlockDuplicate = (blockId: string) => {
    const blockToDuplicate = currentPageContent.blocks.find(b => b.id === blockId);
    if (!blockToDuplicate) return;

    const blockIndex = currentPageContent.blocks.findIndex(b => b.id === blockId);
    const duplicatedBlock: Block = {
      ...blockToDuplicate,
      id: `b${Date.now()}`,
      order: blockIndex + 1.5,
    };

    const updatedBlocks = [...currentPageContent.blocks];
    updatedBlocks.splice(blockIndex + 1, 0, duplicatedBlock);

    setPageContents({
      ...pageContents,
      [activePageId]: {
        ...currentPageContent,
        blocks: updatedBlocks.map((block, idx) => ({ ...block, order: idx + 1 })),
      },
    });
    setIsSaved(false);
  };

  const handleBlockMoveUp = (blockId: string) => {
    const blockIndex = currentPageContent.blocks.findIndex(b => b.id === blockId);
    if (blockIndex <= 0) return;

    const updatedBlocks = [...currentPageContent.blocks];
    const temp = updatedBlocks[blockIndex];
    updatedBlocks[blockIndex] = updatedBlocks[blockIndex - 1];
    updatedBlocks[blockIndex - 1] = temp;

    setPageContents({
      ...pageContents,
      [activePageId]: {
        ...currentPageContent,
        blocks: updatedBlocks.map((block, idx) => ({ ...block, order: idx + 1 })),
      },
    });
    setIsSaved(false);
  };

  const handleBlockMoveDown = (blockId: string) => {
    const blockIndex = currentPageContent.blocks.findIndex(b => b.id === blockId);
    if (blockIndex >= currentPageContent.blocks.length - 1) return;

    const updatedBlocks = [...currentPageContent.blocks];
    const temp = updatedBlocks[blockIndex];
    updatedBlocks[blockIndex] = updatedBlocks[blockIndex + 1];
    updatedBlocks[blockIndex + 1] = temp;

    setPageContents({
      ...pageContents,
      [activePageId]: {
        ...currentPageContent,
        blocks: updatedBlocks.map((block, idx) => ({ ...block, order: idx + 1 })),
      },
    });
    setIsSaved(false);
  };

  const handleLanguageChange = (blockId: string, language: string) => {
    setPageContents({
      ...pageContents,
      [activePageId]: {
        ...currentPageContent,
        blocks: currentPageContent.blocks.map((block) =>
          block.id === blockId
            ? { ...block, metadata: { ...block.metadata, language } }
            : block,
        ),
      },
    });
    setIsSaved(false);
  };

  const handlePreview = () => {
    console.log("Preview:", pageContents[activePageId]);
  };

  const handlePublish = () => {
    console.log("Publish:", pageContents);
    setIsSaved(true);
  };

  const activePage = pages.find((p) => p.id === activePageId);
  const activeSection = activePage?.sections.find(
    (s) => s.id === activeSectionId,
  );
  const pageName = activeSection
    ? `${activePage?.title} / ${activeSection.title}`
    : activePage?.title || "Untitled";

  return (
    <div className="flex h-screen overflow-hidden bg-white font-sans">
      <EditorSidebar
        projectTitle="API Documentation"
        pages={pages}
        activePageId={activePageId}
        activeSectionId={activeSectionId}
        onPageSelect={handlePageSelect}
        onSectionSelect={handleSectionSelect}
        onAddPage={handleAddPage}
        onDeletePage={handleDeletePage}
        onAddSection={handleAddSection}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <EditorHeader
          projectName="API Documentation"
          pageName={pageName}
          isSaved={isSaved}
          onPreview={handlePreview}
          onPublish={handlePublish}
        />

        <FormattingToolbar />

        <EditorCanvas
          pageTitle={currentPageContent.title}
          blocks={currentPageContent.blocks}
          activeBlockId={activeBlockId}
          onTitleChange={handleTitleChange}
          onBlockChange={handleBlockChange}
          onBlockFocus={handleBlockFocus}
          onBlockDelete={handleBlockDelete}
          onBlockDuplicate={handleBlockDuplicate}
          onBlockAdd={handleBlockAdd}
          onBlockAddAfter={handleBlockAddAfter}
          onLanguageChange={handleLanguageChange}
          onBlockMoveUp={handleBlockMoveUp}
          onBlockMoveDown={handleBlockMoveDown}
        />
      </div>
    </div>
  );
}
