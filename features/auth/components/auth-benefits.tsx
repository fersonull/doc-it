import { Icon } from '@/components/ui/icon';

interface BenefitItemProps {
  icon: 'sparkles' | 'share' | 'code';
  title: string;
  description: string;
}

function BenefitItem({ icon, title, description }: BenefitItemProps) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-orange-100 flex items-center justify-center text-orange-600">
        <Icon name={icon} className="w-5 h-5" />
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export function AuthBenefits() {
  return (
    <div className="space-y-6 mt-12">
      <BenefitItem
        icon="sparkles"
        title="Start writing instantly"
        description="Jump right into creating professional documentation with our ready-to-use templates."
      />
      <BenefitItem
        icon="code"
        title="Markdown support"
        description="Write naturally with Markdown syntax and automatic code highlighting."
      />
      <BenefitItem
        icon="share"
        title="Share anywhere"
        description="Generate shareable links that work instantly without requiring authentication."
      />
    </div>
  );
}
