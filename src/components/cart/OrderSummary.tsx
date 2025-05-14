
import { Button } from '@/components/ui/button';

interface OrderSummaryProps {
  subtotal: number;
  shipping: number;
  total: number;
  handleCheckout: () => void;
  formatPrice: (price: number) => string;
}

const OrderSummary = ({ 
  subtotal, 
  shipping, 
  total, 
  handleCheckout, 
  formatPrice 
}: OrderSummaryProps) => {
  return (
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
  );
};

export default OrderSummary;
