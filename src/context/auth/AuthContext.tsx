import { createContext } from "react";
import type { User } from "../../interfaces/user.interface";

interface AuthContextType {
	user: User | null;
	login: (name: string, email: string, password: string) => void;
	logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)