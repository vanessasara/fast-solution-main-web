import { LucideIcon } from 'lucide-react';

interface ServiceMenuItemProps {
  title: string;
  icon: LucideIcon;
  link: string;
  onClick?: () => void;
}

export function ServiceMenuItem({ title, icon: Icon, link, onClick }: ServiceMenuItemProps) {
  return (
    <a
      href={link}
      className="flex items-center gap-3 px-3 py-3 rounded-lg text-slate-700 hover:bg-[#FDF7F2] hover:text-[#4F46E5] transition-colors"
      onClick={onClick}
    >
      <div className="w-9 h-9 bg-[#4F46E5]/10 rounded-lg flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-[#4F46E5]" />
      </div>
      <span className="text-sm font-medium">{title}</span>
    </a>
  );
}
