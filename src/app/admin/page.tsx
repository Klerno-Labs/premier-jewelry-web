'use client';

import { useEffect, useState } from 'react';

export default function AdminPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Simulate fetching user data
    setUsers([
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
      { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
    ]);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Admin Panel</h1>
      <table className="min-w-full mt-4 border border-gray-200">
        <thead>
          <tr>
            <th className="border-b p-2 text-left">Name</th>
            <th className="border-b p-2 text-left">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border-b p-2">{user.name}</td>
              <td className="border-b p-2">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}