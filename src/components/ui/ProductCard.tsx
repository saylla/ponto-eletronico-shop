
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  shortDescription: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { toast } = useToast();

  // Verificar se a imagem existe e usar uma imagem fallback se necessário
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop";
  };

  const addToCart = () => {
    // Implementação futura: Adicionar ao carrinho
    toast({
      title: "Adicionado ao carrinho",
      description: `${product.name} foi adicionado ao seu carrinho.`,
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', { 
      style: 'currency', 
      currency: 'BRL' 
    }).format(price);
  };

  return (
    <div className="product-card group">
      <Link to={`/produto/${product.id}`} className="block">
        <div className="relative overflow-hidden aspect-square mb-3 bg-gray-100 rounded-md">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-300"
            onError={handleImageError}
          />
          {product.oldPrice && (
            <div className="absolute top-2 left-2 bg-primary text-white px-2 py-1 rounded-md text-sm font-medium">
              Promoção
            </div>
          )}
        </div>
        <h3 className="text-lg font-semibold line-clamp-2 text-gray-900 mb-1">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-2">
          {product.shortDescription}
        </p>
        <div className="mb-3">
          {product.oldPrice && (
            <span className="text-sm text-gray-500 line-through mr-2">
              {formatPrice(product.oldPrice)}
            </span>
          )}
          <span className="text-lg font-bold text-gray-900">
            {formatPrice(product.price)}
          </span>
        </div>
      </Link>
      <Button 
        className="w-full bg-primary hover:bg-primary-hover"
        onClick={addToCart}
      >
        <ShoppingCart className="mr-2 h-4 w-4" /> Adicionar
      </Button>
    </div>
  );
};

export default ProductCard;
