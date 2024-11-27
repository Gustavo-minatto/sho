/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { api } from '../services/api.tsx';
import { AxiosError } from 'axios';

interface AuthContextType {
  signIn: (params: SignInParams) => Promise<void>;
  user: { name: string; email: string } | null;
  token: string | null;
}

interface AuthProviderProps {
  children: ReactNode;
}

interface SignInParams {
  email: string;
  password: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<{ user: { name: string; email: string }; token: string } | object>({});

  async function signIn({ email, password }: SignInParams): Promise<void> {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@shopper:user", JSON.stringify(user));
      localStorage.setItem("@shopper:token", token);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({ user, token });
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        const message = error.response.data?.message;
        if (message) {
          alert(message);
        } else {
          alert("Erro desconhecido no servidor");
        }
      } else {
        alert("Não foi possível entrar");
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@shopper:token");
    const user = localStorage.getItem("@shopper:user");

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({
        user: JSON.parse(user),
        token
      });
    } else {
      setData({ user: null, token: null }); 
    }
  }, []);


  return (
    <AuthContext.Provider
      value={{
        signIn,
        user: data ? (data as { user: { name: string; email: string } }).user : null,
        token: data ? (data as { token: string }).token : null,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
