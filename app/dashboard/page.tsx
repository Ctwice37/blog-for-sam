// app/dashboard/page.tsx

'use client';

import React, { useContext } from 'react';
import ProtectedRoute from '../components/ProtectedRoute';
import { AuthContext } from '../context/authContext';

const DashboardPage: React.FC = () => {
  const { logout } = useContext(AuthContext);

  return (
    <ProtectedRoute>
      <div style={{ padding: '2rem' }}>
        <h1>Dashboard</h1>
        <p>Welcome to your dashboard!</p>
        <button onClick={logout} style={{ padding: '0.5rem 1rem', marginTop: '1rem' }}>
          Logout
        </button>
      </div>
    </ProtectedRoute>
  );
};

export default DashboardPage;
