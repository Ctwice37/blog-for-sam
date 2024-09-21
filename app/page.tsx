// app/page.tsx

'use client';

import React, { useContext } from 'react';
import Link from 'next/link';
import { AuthContext } from './context/authContext';

const HomePage: React.FC = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>Welcome to My Blog</h1>
      <p>This is the home page.</p>
      {isAuthenticated ? (
        <div>
          <p>You are logged in!</p>
          <Link href="/dashboard">
            <button style={{ padding: '0.5rem 1rem', fontSize: '1rem' }}>Go to Dashboard</button>
          </Link>
        </div>
      ) : (
        <Link href="/login">
          <button style={{ padding: '0.5rem 1rem', fontSize: '1rem' }}>Login</button>
        </Link>
      )}
    </div>
  );
};

export default HomePage;
