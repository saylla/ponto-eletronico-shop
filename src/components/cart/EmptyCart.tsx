
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
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
  );
};

export default EmptyCart;
