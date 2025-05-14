
import { useState, useEffect } from 'react';
import Layout from '@/components/layouts/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingCart } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { featuredProducts } from '@/data/mockData';

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const CartPage = () => {
  const { toast } = useToast();
  const [cartItems, setCartItems] = useState<CartItem[]>([
    // Exemplo de itens no carrinho para demonstração
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
  ]);
  
  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [total, setTotal] = useState(0);
  
  // Calculate totals when cart changes
  useEffect(() => {
    const newSubtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setSubtotal(newSubtotal);
    
    // Shipping logic - free for orders over R$199
    const newShipping = newSubtotal > 199 ? 0 : 19.90;
    setShipping(newShipping);
    
    setTotal(newSubtotal + newShipping);
  }, [cartItems]);
  
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  
  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    toast({
      title: "Item removido",
      description: "O item foi removido do seu carrinho.",
    });
  };
  
  const handleCheckout = () => {
    toast({
      title: "Processando checkout",
      description: "Esta é uma simulação de checkout.",
    });
  };
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', { 
      style: 'currency', 
      currency: 'BRL' 
    }).format(price);
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">Carrinho de Compras</h1>
        
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="hidden md:grid grid-cols-6 bg-gray-50 p-4">
                  <div className="col-span-3 font-medium">Produto</div>
                  <div className="text-center font-medium">Preço</div>
                  <div className="text-center font-medium">Quantidade</div>
                  <div className="text-center font-medium">Subtotal</div>
                </div>
                
                <div className="divide-y">
                  {cartItems.map((item) => (
                    <div key={item.id} className="p-4 md:grid md:grid-cols-6 md:gap-4 md:items-center">
                      {/* Product */}
                      <div className="md:col-span-3 flex items-center mb-4 md:mb-0">
                        <div className="w-20 h-20 bg-gray-50 rounded overflow-hidden flex-shrink-0 mr-4">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-contain" 
                          />
                        </div>
                        <div>
                          <h3 className="font-medium">
                            <Link 
                              to={`/produto/${item.id}`} 
                              className="hover:text-primary"
                            >
                              {item.name}
                            </Link>
                          </h3>
                        </div>
                      </div>
                      
                      {/* Price */}
                      <div className="md:text-center mb-2 md:mb-0">
                        <span className="md:hidden font-medium mr-2">Preço:</span>
                        {formatPrice(item.price)}
                      </div>
                      
                      {/* Quantity */}
                      <div className="flex items-center md:justify-center mb-2 md:mb-0">
                        <span className="md:hidden font-medium mr-2">Quantidade:</span>
                        <div className="flex border border-gray-300 rounded">
                          <button
                            className="px-2 py-1 border-r border-gray-300 hover:bg-gray-50"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 flex items-center justify-center">{item.quantity}</span>
                          <button
                            className="px-2 py-1 border-l border-gray-300 hover:bg-gray-50"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                      
                      {/* Subtotal */}
                      <div className="flex items-center justify-between md:justify-center">
                        <div>
                          <span className="md:hidden font-medium mr-2">Subtotal:</span>
                          <span className="font-medium">{formatPrice(item.price * item.quantity)}</span>
                        </div>
                        <button
                          className="text-red-500 hover:text-red-700 md:ml-4"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Continue Shopping */}
              <div className="mt-6">
                <Link
                  to="/produtos"
                  className="inline-flex items-center text-primary hover:text-primary-hover font-medium"
                >
                  <ShoppingCart size={18} className="mr-2" />
                  Continuar Comprando
                </Link>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-bold mb-4">Resumo do Pedido</h2>
                
                <div className="space-y-3 mb-6">
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
                  <div className="border-t pt-3 flex justify-between font-bold">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>
                
                {subtotal < 199 && shipping > 0 && (
                  <div className="bg-blue-50 text-blue-800 p-3 rounded-md mb-4 text-sm">
                    Adicione mais {formatPrice(199 - subtotal)} para ganhar frete grátis!
                  </div>
                )}
                
                <Button 
                  onClick={handleCheckout} 
                  className="w-full bg-primary hover:bg-primary-hover"
                >
                  Finalizar Compra
                </Button>
                
                <div className="mt-4 text-center text-sm text-gray-medium">
                  Aceitamos Pix, boleto e cartões de crédito
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="mb-4">
              <ShoppingCart size={64} className="mx-auto text-gray-medium" />
            </div>
            <h2 className="text-xl font-medium mb-2">Seu carrinho está vazio</h2>
            <p className="text-gray-medium mb-6">Adicione produtos ao seu carrinho para continuar.</p>
            <Button asChild>
              <Link to="/produtos">Explorar Produtos</Link>
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CartPage;
