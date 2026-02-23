import { Landmark, Bell, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const CityAdminHeader = () => (
  <header className="glass flex items-center justify-between px-6 py-4">
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
        <Landmark className="h-5 w-5 text-primary" />
      </div>
      <div>
        <h1 className="text-lg font-bold tracking-tight text-foreground">
          Metro-Mint <span className="text-gradient-mint">City Admin</span>
        </h1>
        <p className="text-xs text-muted-foreground">Municipal Mobility Dashboard</p>
      </div>
    </div>
    <div className="flex items-center gap-4">
      <Link to="/" className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground bg-[hsl(var(--glass-bg))] border border-[hsl(var(--glass-border))] hover:border-[hsl(0_0%_100%/0.15)]">
        <Leaf className="h-3.5 w-3.5" />
        Corporate Hub
      </Link>
      <button className="relative rounded-lg p-2 text-muted-foreground transition-colors hover:text-foreground">
        <Bell className="h-5 w-5" />
        <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-secondary" />
      </button>
      <div className="flex items-center gap-3">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-medium text-foreground">Priya Sharma</p>
          <p className="text-xs text-muted-foreground">City Official · Pune</p>
        </div>
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-sm font-bold text-secondary-foreground">
          PS
        </div>
      </div>
    </div>
  </header>
);

export default CityAdminHeader;
