import { CloudOff, Users, TrendingDown } from "lucide-react";
import Header from "@/components/dashboard/Header";
import MetricCard from "@/components/dashboard/MetricCard";
import DailyUsersChart from "@/components/dashboard/DailyUsersChart";
import CO2SavingsChart from "@/components/dashboard/CO2SavingsChart";
import Leaderboard from "@/components/dashboard/Leaderboard";

const metrics = [
  { title: "Total CO₂ Saved (Tons)", value: "158.4", change: "+12.3% vs last month", icon: CloudOff, glowClass: "glow-mint" as const },
  { title: "Active Green Commuters", value: "3,247", change: "+8.1% vs last month", icon: Users, glowClass: "glow-pink" as const },
  { title: "Traffic Reduction (%)", value: "23.8%", change: "+2.4pp vs last month", icon: TrendingDown, glowClass: "glow-purple" as const },
];

const Index = () => (
  <div className="min-h-screen bg-background p-4 md:p-6 lg:p-8">
    <div className="mx-auto max-w-7xl space-y-6">
      <Header />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {metrics.map((m) => (
          <MetricCard key={m.title} {...m} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <DailyUsersChart />
        <CO2SavingsChart />
      </div>

      <Leaderboard />
    </div>
  </div>
);

export default Index;
