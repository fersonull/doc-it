interface NavItemProps {
  label: string;
  active?: boolean;
}

function NavItem({ label, active = false }: NavItemProps) {
  return (
    <div 
      className={`
        text-sm py-2 px-3 rounded-sm cursor-pointer transition-colors
        ${active 
          ? 'text-white bg-orange-600 shadow-sm' 
          : 'text-gray-600 hover:bg-orange-50'
        }
      `}
    >
      {label}
    </div>
  );
}

interface NavSectionProps {
  title: string;
  items: Array<{ label: string; active?: boolean }>;
}

function NavSection({ title, items }: NavSectionProps) {
  return (
    <div>
      <div className="text-xs font-semibold text-gray-900 mb-4">{title}</div>
      <div className="space-y-1">
        {items.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </div>
    </div>
  );
}

export function Sidebar() {
  const sections = [
    {
      title: 'Getting Started',
      items: [
        { label: 'Installation' },
        { label: 'Configuration' },
      ],
    },
    {
      title: 'API Reference',
      items: [
        { label: 'Authentication', active: true },
        { label: 'Endpoints' },
        { label: 'Webhooks' },
      ],
    },
  ];

  return (
    <div className="w-60 bg-white/50 backdrop-blur-sm border-r border-orange-100/50 p-6 space-y-6 font-sans overflow-hidden">
      {sections.map((section) => (
        <NavSection key={section.title} {...section} />
      ))}
    </div>
  );
}
