export const siteConfig = {
  name: 'doc-it',
  tagline: 'Beautiful Technical Documentation, Simplified.',
  description: 'Create, manage, and share documentation with the clean, professional aesthetic developers love.',
  year: 2026,
  
  navigation: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
  ],
  
  footer: {
    links: [
      { label: 'Privacy', href: '#privacy' },
      { label: 'Terms', href: '#terms' },
    ],
  },
  
  features: [
    {
      id: 'aesthetics',
      title: 'Instant Aesthetics',
      description: 'Beautiful design out of the box. Every page looks professional without any styling work.',
      icon: 'sparkles',
    },
    {
      id: 'sharing',
      title: 'Effortless Sharing',
      description: 'Share with a simple link. No login required for readers, just instant access.',
      icon: 'share',
    },
    {
      id: 'developer',
      title: 'Developer Friendly',
      description: 'Write in Markdown with full syntax highlighting. Focus on content, we handle the rest.',
      icon: 'code',
    },
  ],
} as const;
