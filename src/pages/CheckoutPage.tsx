
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layouts/Layout';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { formatPrice } from '@/utils/formatPrice';
import { featuredProducts } from '@/data/mockData';

// Simulação de itens no carrinho
const cartItems = [
  {
    id: '1',
    name: featuredProducts[0].name,
    price: featuredProducts[0].price,
    image: featuredProducts[0].image,
    quantity: 1,
  },
  {
    id: '3',
    name: featuredProducts[2].name,
    price: featuredProducts[2].price,
    image: featuredProducts[2].image,
    quantity: 2,
  }
];

// Calcular valores
const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
const shipping = subtotal > 199 ? 0 : 19.90;
const total = subtotal + shipping;

const CheckoutPage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: ''
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (
      !formData.fullName || 
      !formData.email || 
      !formData.address || 
      !formData.city || 
      !formData.state || 
      !formData.zipCode
    ) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos de endereço.",
        variant: "destructive"
      });
      return;
    }
    
    // Validate payment fields if credit card is selected
    if (paymentMethod === 'credit-card') {
      if (!formData.cardName || !formData.cardNumber || !formData.cardExpiry || !formData.cardCvv) {
        toast({
          title: "Campos obrigatórios",
          description: "Por favor, preencha todos os campos do cartão de crédito.",
          variant: "destructive"
        });
        return;
      }
    }
    
    // Process payment
    setIsProcessing(true);
    
    // Simulate payment processing delay
    setTimeout(() => {
      toast({
        title: "Pedido realizado com sucesso!",
        description: "Seu pedido foi processado e será enviado em breve.",
      });
      
      // Redirect to home page
      setTimeout(() => {
        navigate('/');
      }, 2000);
      
      setIsProcessing(false);
    }, 2000);
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">Finalizar Compra</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulário de Checkout */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit}>
              {/* Endereço de Entrega */}
              <Card className="mb-6">
                <CardHeader className="pb-3">
                  <CardTitle>Endereço de Entrega</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Nome Completo</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        disabled={isProcessing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={isProcessing}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Endereço</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      disabled={isProcessing}
                    />
                  </div>
                  <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="city">Cidade</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        disabled={isProcessing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">Estado</Label>
                      <Input
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        disabled={isProcessing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zipCode">CEP</Label>
                      <Input
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        disabled={isProcessing}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Opções de Pagamento */}
              <Card className="mb-6">
                <CardHeader className="pb-3">
                  <CardTitle>Método de Pagamento</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup
                    value={paymentMethod}
                    onValueChange={setPaymentMethod}
                    className="space-y-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="credit-card" id="credit-card" />
                      <Label htmlFor="credit-card">Cartão de Crédito</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="boleto" id="boleto" />
                      <Label htmlFor="boleto">Boleto Bancário</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="pix" id="pix" />
                      <Label htmlFor="pix">Pix</Label>
                    </div>
                  </RadioGroup>
                  
                  {paymentMethod === 'credit-card' && (
                    <div className="mt-6 space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardName">Nome no Cartão</Label>
                        <Input
                          id="cardName"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleInputChange}
                          disabled={isProcessing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Número do Cartão</Label>
                        <Input
                          id="cardNumber"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          placeholder="0000 0000 0000 0000"
                          disabled={isProcessing}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="cardExpiry">Validade (MM/AA)</Label>
                          <Input
                            id="cardExpiry"
                            name="cardExpiry"
                            value={formData.cardExpiry}
                            onChange={handleInputChange}
                            placeholder="MM/AA"
                            disabled={isProcessing}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cardCvv">CVV</Label>
                          <Input
                            id="cardCvv"
                            name="cardCvv"
                            value={formData.cardCvv}
                            onChange={handleInputChange}
                            placeholder="123"
                            disabled={isProcessing}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {paymentMethod === 'boleto' && (
                    <div className="mt-6 bg-gray-50 p-4 rounded-md">
                      <p className="text-sm text-gray-600">
                        O boleto será gerado após a finalização do pedido e terá validade de 3 dias úteis.
                      </p>
                    </div>
                  )}
                  
                  {paymentMethod === 'pix' && (
                    <div className="mt-6 bg-gray-50 p-4 rounded-md">
                      <p className="text-sm text-gray-600">
                        Um QR Code PIX será gerado após a finalização do pedido.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
              
              <div className="mt-6 lg:hidden">
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isProcessing}
                >
                  {isProcessing ? "Processando..." : "Finalizar Compra"}
                </Button>
              </div>
            </form>
          </div>
          
          {/* Resumo do Pedido */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader className="pb-3">
                <CardTitle>Resumo do Pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex justify-between items-center py-2">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-50 rounded overflow-hidden mr-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{item.name}</p>
                          <p className="text-xs text-gray-500">Qtd: {item.quantity}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{formatPrice(item.price)}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Frete</span>
                    <span>
                      {shipping === 0 ? 'Grátis' : formatPrice(shipping)}
                    </span>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
                
                <div className="hidden lg:block mt-6">
                  <Button 
                    onClick={handleSubmit} 
                    className="w-full" 
                    disabled={isProcessing}
                  >
                    {isProcessing ? "Processando..." : "Finalizar Compra"}
                  </Button>
                </div>
                
                <div className="text-xs text-gray-500 text-center mt-4">
                  Seus dados pessoais serão utilizados para processar seu pedido,
                  conforme nossa política de privacidade.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutPage;
