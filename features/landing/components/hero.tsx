import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { siteConfig } from '@/config/site';
import { BrowserMockup } from './browser-mockup';

export function Hero() {
  return (
    <section className="pt-40 pb-32 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-7xl font-semibold text-gray-900 leading-tight mb-8 tracking-tight">
            {siteConfig.tagline}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-2xl mx-auto">
            {siteConfig.description}
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button className="px-8 py-4 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30">
              Start Writing for Free
            </Button>
            <a 
              href="#demo" 
              className="px-8 py-4 text-base font-medium text-gray-900 hover:text-orange-600 transition-colors flex items-center gap-2"
            >
              View Demo
              <Icon name="arrow-right" className="w-4 h-4" />
            </a>
          </div>
        </div>

        <BrowserMockup />
      </div>
    </section>
  );
}
