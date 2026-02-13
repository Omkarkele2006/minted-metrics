import { Leaf, Bell } from "lucide-react";

const Header = () => (
  <header className="glass flex items-center justify-between px-6 py-4">
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
        <Leaf className="h-5 w-5 text-primary" />
      </div>
      <div>
        <h1 className="text-lg font-bold tracking-tight text-foreground">
          Metro-Mint <span className="text-gradient-mint">Corporate Hub</span>
        </h1>
        <p className="text-xs text-muted-foreground">Sustainability Dashboard</p>
      </div>
    </div>
    <div className="flex items-center gap-4">
      <button className="relative rounded-lg p-2 text-muted-foreground transition-colors hover:text-foreground">
        <Bell className="h-5 w-5" />
        <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-secondary" />
      </button>
      <div className="flex items-center gap-3">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-medium text-foreground">Sarah Chen</p>
          <p className="text-xs text-muted-foreground">Chief Sustainability Officer</p>
        </div>
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm font-bold text-primary-foreground">
          SC
        </div>
      </div>
    </div>
  </header>
);

export default Header;
