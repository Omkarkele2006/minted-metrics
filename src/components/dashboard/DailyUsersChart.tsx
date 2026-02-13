import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "Mon", users: 1200 },
  { day: "Tue", users: 1890 },
  { day: "Wed", users: 2400 },
  { day: "Thu", users: 2100 },
  { day: "Fri", users: 2780 },
  { day: "Sat", users: 1900 },
  { day: "Sun", users: 2300 },
];

const DailyUsersChart = () => (
  <div className="glass p-6">
    <h3 className="mb-1 text-sm font-semibold text-foreground">Daily Active Users</h3>
    <p className="mb-6 text-xs text-muted-foreground">Green commuters over the last 7 days</p>
    <ResponsiveContainer width="100%" height={260}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="mintGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4ade80" stopOpacity={0.35} />
            <stop offset="100%" stopColor="#4ade80" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
        <XAxis dataKey="day" tick={{ fill: '#6b7280', fontSize: 12 }} axisLine={false} tickLine={false} />
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
        <Area
          type="monotone"
          dataKey="users"
          stroke="#4ade80"
          strokeWidth={2.5}
          fill="url(#mintGrad)"
          dot={{ r: 4, fill: '#4ade80', strokeWidth: 0 }}
          activeDot={{ r: 6, fill: '#4ade80', stroke: '#4ade80', strokeWidth: 3, strokeOpacity: 0.3 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

export default DailyUsersChart;
