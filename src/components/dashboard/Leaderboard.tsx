import { Trophy, Flame, Award, Medal } from "lucide-react";

const teams = [
  { rank: 1, name: "Engineering", score: 2840, streak: 12, badge: "🏆" },
  { rank: 2, name: "Marketing", score: 2310, streak: 8, badge: "🥈" },
  { rank: 3, name: "Sales", score: 2150, streak: 6, badge: "🥉" },
  { rank: 4, name: "HR", score: 1980, streak: 5, badge: "" },
  { rank: 5, name: "Operations", score: 1720, streak: 3, badge: "" },
];

const Leaderboard = () => (
  <div className="glass p-6">
    <div className="mb-6 flex items-center gap-2">
      <Trophy className="h-5 w-5 text-secondary" />
      <h3 className="text-sm font-semibold text-foreground">Department Challenges</h3>
    </div>
    <div className="space-y-3">
      {teams.map((team) => (
        <div
          key={team.name}
          className={`flex items-center justify-between rounded-lg px-4 py-3 transition-all duration-200 ${
            team.rank === 1
              ? "bg-primary/10 border border-primary/20 glow-mint"
              : "bg-[hsl(var(--glass-bg))] border border-transparent hover:border-[hsl(var(--glass-border))]"
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="w-6 text-center text-sm font-bold text-muted-foreground">
              {team.badge || team.rank}
            </span>
            <div>
              <p className={`text-sm font-medium ${team.rank === 1 ? "text-primary" : "text-foreground"}`}>
                {team.name}
              </p>
              <div className="flex items-center gap-1 mt-0.5">
                <Flame className="h-3 w-3 text-secondary" />
                <span className="text-xs text-muted-foreground">{team.streak}-day streak</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-bold text-foreground">{team.score.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground">points</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Leaderboard;
