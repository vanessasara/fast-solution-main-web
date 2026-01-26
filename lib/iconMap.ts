import {
  Code,
  Megaphone,
  Printer,
  Hotel,
  GraduationCap,
  Plane,
  Compass,
  Building,
  Monitor,
  Server,
  BarChart,
  Target,
  Package,
  FileText,
  Utensils,
  Calendar,
  BookOpen,
  Users,
  Ticket,
  Globe,
  Briefcase,
  Map,
  Home,
  Key,
  type LucideIcon
} from 'lucide-react';

export const iconMap: Record<string, LucideIcon> = {
  Code,
  Megaphone,
  Printer,
  Hotel,
  GraduationCap,
  Plane,
  Compass,
  Building,
  Monitor,
  Server,
  BarChart,
  Target,
  Package,
  FileText,
  Utensils,
  Calendar,
  BookOpen,
  Users,
  Ticket,
  Globe,
  Briefcase,
  Map,
  Home,
  Key
};

export function getIcon(iconName: string): LucideIcon {
  return iconMap[iconName] || Code; // Default fallback icon
}
