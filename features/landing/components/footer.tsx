import { Link } from '@/components/ui/link';
import { siteConfig } from '@/config/site';

export function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-8 border-t border-orange-100/50">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {siteConfig.year} {siteConfig.name}
          </p>
          
          <div className="flex gap-8">
            {siteConfig.footer.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                variant="nav"
                className="text-sm text-gray-500 hover:text-orange-600"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
