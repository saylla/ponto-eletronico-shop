
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/layouts/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const LoginPage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  
  // Login form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  
  // Register form state
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState('');
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!loginEmail || !loginPassword) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }
    
    // Simulate login - In a real app, this would call an API
    toast({
      title: "Login realizado com sucesso!",
      description: "Bem-vindo ao Ponto do Eletrônico.",
    });
    
    // Redirect to home page after login
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };
  
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!registerName || !registerEmail || !registerPassword || !registerConfirmPassword) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }
    
    // Check if passwords match
    if (registerPassword !== registerConfirmPassword) {
      toast({
        title: "Senhas não conferem",
        description: "As senhas informadas não são iguais.",
        variant: "destructive",
      });
      return;
    }
    
    // Simulate registration - In a real app, this would call an API
    toast({
      title: "Cadastro realizado com sucesso!",
      description: "Sua conta foi criada. Você já pode fazer login.",
    });
    
    // Reset form and switch to login tab
    setRegisterName('');
    setRegisterEmail('');
    setRegisterPassword('');
    setRegisterConfirmPassword('');
    
    // Use setTimeout to wait for toast to show before changing tab
    setTimeout(() => {
      const loginTrigger = document.querySelector('[data-state="inactive"][data-value="login"]') as HTMLButtonElement;
      if (loginTrigger) {
        loginTrigger.click();
      }
    }, 1500);
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 flex justify-center">
        <div className="w-full max-w-md">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Entrar</TabsTrigger>
              <TabsTrigger value="register">Cadastrar</TabsTrigger>
            </TabsList>
            
            {/* Login Form */}
            <TabsContent value="login">
              <Card>
                <CardHeader>
                  <CardTitle>Login</CardTitle>
                  <CardDescription>
                    Entre com sua conta para acessar o Ponto do Eletrônico.
                  </CardDescription>
                </CardHeader>
                <form onSubmit={handleLogin}>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="seu@email.com"
                          className="pl-10"
                          value={loginEmail}
                          onChange={(e) => setLoginEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="password" className="text-sm font-medium">
                        Senha
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          className="pl-10"
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-3 text-gray-500"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="remember"
                          className="h-4 w-4 rounded border-gray-300"
                        />
                        <label htmlFor="remember" className="text-sm text-gray-500">
                          Lembrar-me
                        </label>
                      </div>
                      <a href="#" className="text-sm text-primary hover:underline">
                        Esqueceu a senha?
                      </a>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button type="submit" className="w-full">
                      Entrar
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>
            
            {/* Register Form */}
            <TabsContent value="register">
              <Card>
                <CardHeader>
                  <CardTitle>Criar conta</CardTitle>
                  <CardDescription>
                    Crie sua conta para começar a comprar no Ponto do Eletrônico.
                  </CardDescription>
                </CardHeader>
                <form onSubmit={handleRegister}>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nome completo
                      </label>
                      <Input
                        id="name"
                        placeholder="Seu nome completo"
                        value={registerName}
                        onChange={(e) => setRegisterName(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="register-email" className="text-sm font-medium">
                        Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                        <Input
                          id="register-email"
                          type="email"
                          placeholder="seu@email.com"
                          className="pl-10"
                          value={registerEmail}
                          onChange={(e) => setRegisterEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="register-password" className="text-sm font-medium">
                        Senha
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                        <Input
                          id="register-password"
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          className="pl-10"
                          value={registerPassword}
                          onChange={(e) => setRegisterPassword(e.target.value)}
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-3 text-gray-500"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="confirm-password" className="text-sm font-medium">
                        Confirmar senha
                      </label>
                      <Input
                        id="confirm-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={registerConfirmPassword}
                        onChange={(e) => setRegisterConfirmPassword(e.target.value)}
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="terms"
                        className="h-4 w-4 rounded border-gray-300"
                        required
                      />
                      <label htmlFor="terms" className="text-sm text-gray-500">
                        Eu concordo com os{" "}
                        <a href="#" className="text-primary hover:underline">
                          Termos de Serviço
                        </a>{" "}
                        e{" "}
                        <a href="#" className="text-primary hover:underline">
                          Política de Privacidade
                        </a>
                      </label>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button type="submit" className="w-full">
                      Criar conta
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
