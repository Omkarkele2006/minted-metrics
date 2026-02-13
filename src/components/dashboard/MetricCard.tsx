import { type LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  glowClass: "glow-mint" | "glow-pink" | "glow-purple";
}

const iconStyles: Record<string, string> = {
  "glow-mint": "bg-primary/15 text-primary",
  "glow-pink": "bg-secondary/15 text-secondary",
  "glow-purple": "bg-accent/15 text-accent",
};

const MetricCard = ({ title, value, change, icon: Icon, glowClass }: MetricCardProps) => (
  <div
    className="glass glass-hover group cursor-default p-6 transition-shadow duration-300"
    style={{ ["--hover-glow" as string]: glowClass === "glow-mint" ? "var(--glow-mint)" : glowClass === "glow-pink" ? "var(--glow-pink)" : "var(--glow-purple)" }}
    onMouseEnter={(e) => (e.currentTarget.style.boxShadow = glowClass === "glow-mint" ? "var(--glow-mint)" : glowClass === "glow-pink" ? "var(--glow-pink)" : "var(--glow-purple)")}
    onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
  >
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm text-muted-foreground">{title}</p>
        <p className="mt-2 text-3xl font-bold tracking-tight text-foreground">{value}</p>
        <p className="mt-1 text-xs font-medium text-primary">{change}</p>
      </div>
      <div className={`rounded-lg p-2.5 transition-shadow duration-300 ${iconStyles[glowClass]}`}>
        <Icon className="h-5 w-5" />
      </div>
    </div>
  </div>
);

export default MetricCard;
