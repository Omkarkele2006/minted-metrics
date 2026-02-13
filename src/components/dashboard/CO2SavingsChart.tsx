import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { dept: "Engineering", savings: 42 },
  { dept: "Sales", savings: 31 },
  { dept: "HR", savings: 28 },
  { dept: "Marketing", savings: 35 },
  { dept: "Operations", savings: 22 },
];

const CO2SavingsChart = () => (
  <div className="glass p-6">
    <h3 className="mb-1 text-sm font-semibold text-foreground">CO₂ Savings by Department</h3>
    <p className="mb-6 text-xs text-muted-foreground">Tons saved this quarter</p>
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={data} barGap={4}>
        <defs>
          <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f472b6" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
        <XAxis dataKey="dept" tick={{ fill: '#6b7280', fontSize: 12 }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} axisLine={false} tickLine={false} />
        <Tooltip
          contentStyle={{
            background: 'hsl(250 20% 10%)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '0.5rem',
            color: '#e5e7eb',
            fontSize: 13,
          }}
        />
        <Bar dataKey="savings" fill="url(#barGrad)" radius={[6, 6, 0, 0]} maxBarSize={48} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default CO2SavingsChart;
