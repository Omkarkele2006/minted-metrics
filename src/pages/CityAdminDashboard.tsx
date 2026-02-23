import { Car, Users, CloudSun } from "lucide-react";
import CityAdminHeader from "@/components/city-admin/CityAdminHeader";
import MetricCard from "@/components/dashboard/MetricCard";
import MobilityHeatmap from "@/components/city-admin/MobilityHeatmap";
import ZoneLeaderboard from "@/components/city-admin/ZoneLeaderboard";

const CityAdminDashboard = () => (
  <div className="min-h-screen bg-background p-4 md:p-6 space-y-6">
    <CityAdminHeader />

    {/* Metrics */}
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <MetricCard title="City Traffic Reduction" value="18.5%" change="+2.3% vs last month" icon={Car} glowClass="glow-mint" />
      <MetricCard title="Total Active Commuters" value="45,200" change="+1,820 this week" icon={Users} glowClass="glow-pink" />
      <MetricCard title="Citywide CO2 Impact" value="1,240 Tons" change="+98 tons saved" icon={CloudSun} glowClass="glow-purple" />
    </div>

    {/* Main Content */}
    <div className="grid gap-4 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <MobilityHeatmap />
      </div>
      <div>
        <ZoneLeaderboard />
      </div>
    </div>
  </div>
);

export default CityAdminDashboard;
