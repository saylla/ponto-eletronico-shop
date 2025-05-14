
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';

interface User {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const { toast } = useToast();
  
  useEffect(() => {
    // Verificar se existe um usuário no localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Erro ao carregar usuário:', error);
        localStorage.removeItem('user');
      }
    }
  }, []);
  
  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulação de login - em uma aplicação real, seria uma chamada à API
    try {
      // Simular verificação de credenciais
      if (email === 'admin@exemplo.com' && password === 'admin123') {
        const adminUser = {
          id: '1',
          name: 'Administrador',
          email: 'admin@exemplo.com',
          isAdmin: true
        };
        setUser(adminUser);
        localStorage.setItem('user', JSON.stringify(adminUser));
        toast({
          title: "Login realizado com sucesso!",
          description: "Bem-vindo, Administrador."
        });
        return true;
      } else if (email === 'usuario@exemplo.com' && password === 'user123') {
        const regularUser = {
          id: '2',
          name: 'Usuário Comum',
          email: 'usuario@exemplo.com',
          isAdmin: false
        };
        setUser(regularUser);
        localStorage.setItem('user', JSON.stringify(regularUser));
        toast({
          title: "Login realizado com sucesso!",
          description: `Bem-vindo, ${regularUser.name}.`
        });
        return true;
      } else {
        toast({
          title: "Falha no login",
          description: "Email ou senha incorretos.",
          variant: "destructive"
        });
        return false;
      }
    } catch (error) {
      console.error('Erro no login:', error);
      toast({
        title: "Erro no login",
        description: "Ocorreu um erro ao tentar fazer login. Tente novamente.",
        variant: "destructive"
      });
      return false;
    }
  };
  
  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    // Simulação de registro - em uma aplicação real, seria uma chamada à API
    try {
      // Simular registro de usuário
      const newUser = {
        id: Date.now().toString(),
        name,
        email,
        isAdmin: false
      };
      
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
      
      toast({
        title: "Cadastro realizado com sucesso!",
        description: `Bem-vindo, ${name}. Sua conta foi criada.`
      });
      
      return true;
    } catch (error) {
      console.error('Erro no cadastro:', error);
      toast({
        title: "Erro no cadastro",
        description: "Ocorreu um erro ao tentar criar sua conta. Tente novamente.",
        variant: "destructive"
      });
      return false;
    }
  };
  
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    toast({
      title: "Logout realizado",
      description: "Você saiu da sua conta."
    });
  };
  
  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated: !!user, 
      isAdmin: user?.isAdmin || false,
      login, 
      register, 
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};
