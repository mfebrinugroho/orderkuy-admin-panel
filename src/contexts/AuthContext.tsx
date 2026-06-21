import { getUser } from "@/services/authApi";
import type { UserAuth } from "@/types/auth";
import { createContext, useEffect, useState } from "react";

type AuthContextType = {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  user: UserAuth | null;
  setUser: React.Dispatch<React.SetStateAction<UserAuth | null>>;
  authLoading: boolean;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token"),
  );
  const [user, setUser] = useState<UserAuth | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      if (!token) {
        setUser(null);
        setAuthLoading(false);
        return;
      }

      setAuthLoading(true);

      try {
        const user = await getUser();

        setUser(user);
      } catch (error) {
        console.log(error);
        setUser(null);
        localStorage.removeItem("token");
        setToken(null);
      } finally {
        setAuthLoading(false);
      }
    };

    fetchUser();
  }, [token]);

  return (
    <AuthContext.Provider
      value={{ token, setToken, user, setUser, authLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
