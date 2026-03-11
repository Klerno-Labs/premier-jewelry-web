'use client';

import { useEffect, useState } from 'react';

export default function DashboardPage() {
  const [stats, setStats] = useState({ users: 0, sales: 0 });

  useEffect(() => {
    // Simulate fetching dashboard stats
    setStats({ users: 120, sales: 4500 });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="mt-4">
        <h2 className="text-xl">Statistics</h2>
        <ul className="list-disc pl-5">
          <li>Total Users: {stats.users}</li>
          <li>Total Sales: ${stats.sales}</li>
        </ul>
      </div>
    </div>
  );
}