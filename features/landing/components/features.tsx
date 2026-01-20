import { Icon } from '@/components/ui/icon';
import { siteConfig } from '@/config/site';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: 'sparkles' | 'share' | 'code';
}

function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div>
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-sm bg-gradient-to-br from-orange-500 to-orange-600 text-white mb-6 shadow-lg shadow-orange-500/20">
        <Icon name={icon} className="w-7 h-7" />
      </div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h3>
      <p className="text-base text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

export function Features() {
  return (
    <section id="features" className="py-32 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-semibold text-gray-900 text-center mb-20">
          Why choose {siteConfig.name}?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-16">
          {siteConfig.features.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon as 'sparkles' | 'share' | 'code'}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
