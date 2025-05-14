
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star, Minus, Plus } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';

interface ProductInfoProps {
  product: {
    id: string;
    name: string;
    price: number;
    oldPrice?: number;
    shortDescription?: string;
  };
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast();

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  const addToCart = () => {
    toast({
      title: "Adicionado ao carrinho",
      description: `${quantity} ${quantity > 1 ? 'unidades' : 'unidade'} de ${product.name} ${quantity > 1 ? 'foram adicionadas' : 'foi adicionada'} ao seu carrinho.`,
    });
  };
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', { 
      style: 'currency', 
      currency: 'BRL' 
    }).format(price);
  };

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.name}</h1>
      
      {/* Reviews */}
      <div className="flex items-center mb-4">
        <div className="flex">
          {[1, 2, 3, 4, 5].map((rating) => (
            <Star
              key={rating}
              size={18}
              className={rating <= 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
            />
          ))}
        </div>
        <span className="ml-2 text-gray-medium">4.0 (24 avaliações)</span>
      </div>
      
      {/* Price */}
      <div className="mb-6">
        {product.oldPrice && (
          <p className="text-gray-medium line-through">
            {formatPrice(product.oldPrice)}
          </p>
        )}
        <p className="text-3xl font-bold text-gray-900">
          {formatPrice(product.price)}
        </p>
        <p className="text-sm text-gray-medium">
          Em até 12x de {formatPrice(product.price / 12)} sem juros
        </p>
      </div>
      
      {/* Short Description */}
      {product.shortDescription && (
        <p className="text-gray-700 mb-6">
          {product.shortDescription}
        </p>
      )}
      
      {/* Quantity Selector */}
      <div className="flex items-center mb-6">
        <span className="mr-4 font-medium">Quantidade:</span>
        <div className="flex border border-gray-300 rounded">
          <button
            className="px-3 py-2 border-r border-gray-300 hover:bg-gray-50"
            onClick={decreaseQuantity}
          >
            <Minus size={16} />
          </button>
          <span className="w-12 flex items-center justify-center">{quantity}</span>
          <button
            className="px-3 py-2 border-l border-gray-300 hover:bg-gray-50"
            onClick={increaseQuantity}
          >
            <Plus size={16} />
          </button>
        </div>
      </div>
      
      {/* Add to Cart Button */}
      <Button 
        className="w-full md:w-auto mb-4 bg-primary hover:bg-primary-hover"
        size="lg"
        onClick={addToCart}
      >
        <ShoppingCart className="mr-2 h-5 w-5" />
        Adicionar ao Carrinho
      </Button>
      
      {/* Delivery Info */}
      <div className="mt-8 bg-gray-50 p-4 rounded-lg">
        <h3 className="font-medium mb-2">Informações de Entrega</h3>
        <p className="text-sm text-gray-700">
          Frete grátis para compras acima de R$ 199,00.
          Prazo de entrega estimado: 3-5 dias úteis.
        </p>
      </div>
    </div>
  );
};

export default ProductInfo;
