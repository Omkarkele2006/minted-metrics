import { Map } from "lucide-react";

const hotspots = [
  { top: "20%", left: "30%", color: "bg-primary", size: "h-16 w-16", opacity: "opacity-40" },
  { top: "50%", left: "60%", color: "bg-secondary", size: "h-20 w-20", opacity: "opacity-30" },
  { top: "35%", left: "75%", color: "bg-primary", size: "h-12 w-12", opacity: "opacity-50" },
  { top: "65%", left: "25%", color: "bg-primary", size: "h-14 w-14", opacity: "opacity-35" },
  { top: "75%", left: "50%", color: "bg-secondary", size: "h-18 w-18", opacity: "opacity-25" },
  { top: "15%", left: "55%", color: "bg-accent", size: "h-10 w-10", opacity: "opacity-45" },
  { top: "45%", left: "40%", color: "bg-primary", size: "h-8 w-8", opacity: "opacity-60" },
  { top: "80%", left: "70%", color: "bg-secondary", size: "h-14 w-14", opacity: "opacity-30" },
];

const MobilityHeatmap = () => (
  <div className="glass p-6 h-full">
    <div className="mb-4 flex items-center gap-2">
      <Map className="h-5 w-5 text-primary" />
      <h3 className="text-sm font-semibold text-foreground">Live Mobility Heatmap</h3>
    </div>

    <div className="relative w-full rounded-xl overflow-hidden bg-background/60 border border-border" style={{ minHeight: 360 }}>
      {/* Grid lines */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={`h-${i}`} className="absolute w-full border-t border-foreground/20" style={{ top: `${(i + 1) * 11}%` }} />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={`v-${i}`} className="absolute h-full border-l border-foreground/20" style={{ left: `${(i + 1) * 11}%` }} />
        ))}
      </div>

      {/* Hotspots */}
      {hotspots.map((spot, i) => (
        <div
          key={i}
          className={`absolute rounded-full blur-xl ${spot.color} ${spot.size} ${spot.opacity} animate-pulse-glow`}
          style={{ top: spot.top, left: spot.left, animationDelay: `${i * 0.3}s` }}
        />
      ))}

      {/* Legend */}
      <div className="absolute bottom-3 right-3 glass px-3 py-2 text-xs space-y-1.5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-primary" />
          <span className="text-muted-foreground">Green Commutes</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
          <span className="text-muted-foreground">High Congestion</span>
        </div>
      </div>
    </div>
  </div>
);

export default MobilityHeatmap;
