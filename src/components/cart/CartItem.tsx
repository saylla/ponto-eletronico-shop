
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';

export interface CartItemType {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartItemProps {
  item: CartItemType;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  formatPrice: (price: number) => string;
}

const CartItem = ({ item, updateQuantity, removeItem, formatPrice }: CartItemProps) => {
  return (
    <div className="p-4 md:grid md:grid-cols-6 md:gap-4 md:items-center">
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
  );
};

export default CartItem;
