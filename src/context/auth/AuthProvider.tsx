import { useState } from "react";
import type { User } from "../../interfaces/User.interface";
import { AuthContext } from "./AuthContext";

interface Props {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (name: string, email: string, password: string) => {
    setUser({
      name,
      email,
      password,
    });
  };
  
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
