
import { useState, useEffect } from 'react';
import Layout from '@/components/layouts/Layout';
import { useToast } from '@/components/ui/use-toast';
import { featuredProducts } from '@/data/mockData';
import { formatPrice } from '@/utils/formatPrice';
import CartItemList from '@/components/cart/CartItemList';
import OrderSummary from '@/components/cart/OrderSummary';
import EmptyCart from '@/components/cart/EmptyCart';
import { CartItemType } from '@/components/cart/CartItem';

const CartPage = () => {
  const { toast } = useToast();
  const [cartItems, setCartItems] = useState<CartItemType[]>([
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
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">Carrinho de Compras</h1>
        
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <CartItemList 
              items={cartItems} 
              updateQuantity={updateQuantity} 
              removeItem={removeItem} 
              formatPrice={formatPrice} 
            />
            
            <OrderSummary 
              subtotal={subtotal} 
              shipping={shipping} 
              total={total} 
              handleCheckout={handleCheckout} 
              formatPrice={formatPrice} 
            />
          </div>
        ) : (
          <EmptyCart />
        )}
      </div>
    </Layout>
  );
};

export default CartPage;
