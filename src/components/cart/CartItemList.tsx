
import { CartItemType } from './CartItem';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

interface CartItemListProps {
  items: CartItemType[];
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  formatPrice: (price: number) => string;
}

const CartItemList = ({ items, updateQuantity, removeItem, formatPrice }: CartItemListProps) => {
  return (
    <div className="lg:col-span-2">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="hidden md:grid grid-cols-6 bg-gray-50 p-4">
          <div className="col-span-3 font-medium">Produto</div>
          <div className="text-center font-medium">Preço</div>
          <div className="text-center font-medium">Quantidade</div>
          <div className="text-center font-medium">Subtotal</div>
        </div>
        
        <div className="divide-y">
          {items.map((item) => (
            <CartItem 
              key={item.id} 
              item={item} 
              updateQuantity={updateQuantity}
              removeItem={removeItem}
              formatPrice={formatPrice}
            />
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
  );
};

export default CartItemList;
