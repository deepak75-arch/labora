import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'lender' | 'renter' | 'delivery_partner' | 'admin';
  verified: boolean;
  rating: number;
  totalRentals: number;
  earnings: number;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: string) => Promise<void>;
  signup: (userData: any) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string, role: string) => {
    // Mock login - in production, this would call your API
    const mockUser: User = {
      id: '1',
      name: 'Karthik Kumar',
      email,
      phone: '+91 98765 43210',
      role: role as User['role'],
      verified: true,
      rating: 4.8,
      totalRentals: 23,
      earnings: 4500,
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    };
    setUser(mockUser);
  };

  const signup = async (userData: any) => {
    // Mock signup
    const newUser: User = {
      id: Date.now().toString(),
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      role: userData.role,
      verified: false,
      rating: 0,
      totalRentals: 0,
      earnings: 0
    };
    setUser(newUser);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}