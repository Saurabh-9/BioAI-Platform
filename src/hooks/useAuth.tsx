
import { createContext, useContext, useState, ReactNode } from "react";
import { toast } from "./use-toast";
import { apiClient } from "@/lib/apiClient";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // In a real app, this would make an API call
      // For now, we'll mock a successful login
      console.log("Logging in with", email, password);
      
      // Mock API response
      const userData = {
        id: "user-123",
        name: "Demo User",
        email: email
      };
      
      setUser(userData);
      
      // Store JWT token in local storage
      localStorage.setItem("bioai_token", "mock-jwt-token");
      
      // In a real app with API integration, it would look like:
      // const response = await apiClient.post("/auth/login", { email, password });
      // setUser(response.data.user);
      // localStorage.setItem("bioai_token", response.data.token);
      
    } catch (error) {
      console.error("Login error:", error);
      toast({
        title: "Login Failed",
        description: "Invalid credentials. Please try again.",
        variant: "destructive"
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };
  
  const register = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    try {
      // In a real app, this would make an API call
      console.log("Registering user:", name, email);
      
      // Mock API response
      const userData = {
        id: "user-" + Math.floor(Math.random() * 1000),
        name,
        email
      };
      
      setUser(userData);
      
      // Store JWT token in local storage
      localStorage.setItem("bioai_token", "mock-jwt-token");
      
      // In a real app with API integration:
      // const response = await apiClient.post("/auth/register", { name, email, password });
      // setUser(response.data.user);
      // localStorage.setItem("bioai_token", response.data.token);
      
    } catch (error) {
      console.error("Registration error:", error);
      toast({
        title: "Registration Failed",
        description: "Could not create your account. Please try again.",
        variant: "destructive"
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };
  
  const logout = async () => {
    setIsLoading(true);
    try {
      // In a real app, this might call an API endpoint to invalidate the token
      localStorage.removeItem("bioai_token");
      setUser(null);
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
