'use client';

import { Button } from '@/components/ui/button';
import { Link } from '@/components/ui/link';
import { siteConfig } from '@/config/site';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 border-b border-orange-100/50">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-semibold text-gray-900">
              {siteConfig.name}
            </span>
          </div>
          
          <div className="flex items-center gap-10">
            {siteConfig.navigation.map((item) => (
              <Link key={item.href} href={item.href} variant="nav">
                {item.label}
              </Link>
            ))}
            
            <Button variant="ghost">
              Log In
            </Button>
            
            <Button variant="primary">
              Get Started
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
