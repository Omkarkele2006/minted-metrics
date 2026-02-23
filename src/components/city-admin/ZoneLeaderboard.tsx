import { Trophy } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const zones = [
  { name: "Kothrud", co2: 312, max: 350 },
  { name: "Viman Nagar", co2: 278, max: 350 },
  { name: "Baner", co2: 245, max: 350 },
  { name: "Hinjewadi", co2: 198, max: 350 },
  { name: "Kalyani Nagar", co2: 172, max: 350 },
];

const medals = ["🏆", "🥈", "🥉"];

const ZoneLeaderboard = () => (
  <div className="glass p-6 h-full">
    <div className="mb-6 flex items-center gap-2">
      <Trophy className="h-5 w-5 text-secondary" />
      <h3 className="text-sm font-semibold text-foreground">Zone Wars Overview</h3>
    </div>
    <div className="space-y-4">
      {zones.map((zone, i) => (
        <div key={zone.name} className="space-y-1.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-5 text-center text-sm">{medals[i] ?? i + 1}</span>
              <span className={`text-sm font-medium ${i === 0 ? "text-primary" : "text-foreground"}`}>
                {zone.name}
              </span>
            </div>
            <span className="text-xs text-muted-foreground">{zone.co2} tons</span>
          </div>
          <Progress
            value={(zone.co2 / zone.max) * 100}
            className="h-2 bg-muted"
          />
        </div>
      ))}
    </div>
  </div>
);

export default ZoneLeaderboard;
