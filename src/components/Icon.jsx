import {
  ArrowRight,
  BookOpen,
  Lightbulb,
  Compass,
  Briefcase,
  ChartNoAxesCombined,
  Zap,
  ClipboardList,
  Library,
  ShieldCheck,
  Settings2,
  Code2,
  Fingerprint,
  Database,
  FolderOpen,
  CheckCheck,
  GraduationCap,
  Layers,
  Check,
  ArrowUpRight,
} from 'lucide-react'
const icons = {
  BookOpen,
  Lightbulb,
  Compass,
  Briefcase,
  ChartNoAxesCombined,
  Zap,
  ClipboardList,
  Library,
  ShieldCheck,
  Settings2,
  Code2,
  Fingerprint,
  Database,
  FolderOpen,
  CheckCheck,
  GraduationCap,
  Layers,
  Check,
  ArrowUpRight,
}
export function Icon({ name, size = 22, ...props }) {
  const Component = icons[name] || BookOpen
  return <Component size={size} aria-hidden="true" {...props} />
}
export function Arrow({ size = 18 }) {
  return <ArrowRight size={size} aria-hidden="true" />
}
