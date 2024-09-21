// app/context/AuthContext.tsx

'use client';

import React, { createContext, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

// Define the shape of the authentication context data
interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

// Create the context with default values
export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: () => false,
  logout: () => {},
});

// Create a provider component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  // Mock login function
  const login = (email: string, password: string): boolean => {
    // Replace these with your actual credentials
    const validEmail = 'carpe359@gmail.com';
    const validPassword = 'aaa';

    if (email === validEmail && password === validPassword) {
      setIsAuthenticated(true);
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    router.push('/login');
  };
  // Provide the state and functions to the context
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
