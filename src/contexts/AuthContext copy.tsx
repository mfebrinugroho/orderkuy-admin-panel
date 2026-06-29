import { getUser } from "@/services/authApi";
import type { UserAuth } from "@/types/auth";
import { createContext, useEffect, useState } from "react";

type AuthContextType = {
  user: UserAuth | null;
  setUser: React.Dispatch<React.SetStateAction<UserAuth | null>>;
  authLoading: boolean;
  login: (token: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserAuth | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  const login = (token: string) => {
    localStorage.setItem("token", token);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  // useEffect(() => {
  //   setToken(localStorage.getItem("token"));
  // }, []);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setUser(null);
        setAuthLoading(false);
        return;
      }

      // setAuthLoading(true);

      try {
        const user = await getUser();

        setUser(user);
      } catch (error) {
        console.log(error);
        localStorage.removeItem("token");
        setUser(null);
      } finally {
        setAuthLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, authLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
