export type BlockType = 
  | 'heading1' 
  | 'heading2' 
  | 'heading3' 
  | 'paragraph' 
  | 'code' 
  | 'quote'
  | 'list'
  | 'image'
  | 'divider';

export interface Block {
  id: string;
  type: BlockType;
  content: string;
  metadata?: {
    language?: string;
    imageUrl?: string;
    imageAlt?: string;
    listType?: 'bullet' | 'number';
  };
  order: number;
}

export interface PageContent {
  pageId: string;
  title: string;
  blocks: Block[];
}
