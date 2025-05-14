
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ProductTabsProps {
  productName: string;
}

const ProductTabs = ({ productName }: ProductTabsProps) => {
  return (
    <Tabs defaultValue="description" className="mb-12">
      <TabsList className="w-full grid grid-cols-3 mb-4">
        <TabsTrigger value="description">Descrição</TabsTrigger>
        <TabsTrigger value="specifications">Especificações</TabsTrigger>
        <TabsTrigger value="reviews">Avaliações</TabsTrigger>
      </TabsList>
      
      <TabsContent value="description" className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-bold mb-4">Descrição do Produto</h2>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nisi consectetur purus, eget porttitor nisl nisl eu nisi. Nullam euismod, nisi vel consectetur interdum, nisl nisi consectetur purus, eget porttitor nisl nisl eu nisi.
        </p>
        <p className="mb-4">
          Nullam euismod, nisi vel consectetur interdum, nisl nisi consectetur purus, eget porttitor nisl nisl eu nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nisi consectetur purus, eget porttitor nisl nisl eu nisi.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Recurso avançado de conectividade Bluetooth 5.0</li>
          <li>Bateria de longa duração - até 24 horas de uso</li>
          <li>Resistente à água e poeira - classificação IP67</li>
          <li>Compatível com assistentes de voz</li>
          <li>Múltiplos dispositivos conectados simultaneamente</li>
        </ul>
      </TabsContent>
      
      <TabsContent value="specifications" className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-bold mb-4">Especificações Técnicas</h2>
        <div className="divide-y">
          <div className="grid grid-cols-3 py-3">
            <span className="font-medium">Modelo</span>
            <span className="col-span-2">XYZ2023</span>
          </div>
          <div className="grid grid-cols-3 py-3">
            <span className="font-medium">Marca</span>
            <span className="col-span-2">TechBrand</span>
          </div>
          <div className="grid grid-cols-3 py-3">
            <span className="font-medium">Conectividade</span>
            <span className="col-span-2">Bluetooth 5.0</span>
          </div>
          <div className="grid grid-cols-3 py-3">
            <span className="font-medium">Bateria</span>
            <span className="col-span-2">500mAh, até 24h de uso</span>
          </div>
          <div className="grid grid-cols-3 py-3">
            <span className="font-medium">Dimensões</span>
            <span className="col-span-2">18 x 8 x 6 cm</span>
          </div>
          <div className="grid grid-cols-3 py-3">
            <span className="font-medium">Peso</span>
            <span className="col-span-2">280g</span>
          </div>
          <div className="grid grid-cols-3 py-3">
            <span className="font-medium">Garantia</span>
            <span className="col-span-2">12 meses</span>
          </div>
        </div>
      </TabsContent>
      
      <TabsContent value="reviews" className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-bold mb-4">Avaliações dos Clientes</h2>
        
        <div className="space-y-6">
          {[1, 2, 3].map((review) => (
            <div key={review} className="border-b pb-6">
              <div className="flex items-center mb-2">
                <div className="flex mr-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={16}
                      className={star <= 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                    />
                  ))}
                </div>
                <span className="font-medium">Cliente {review}</span>
              </div>
              <p className="text-sm text-gray-medium mb-1">Compra verificada em {new Date().toLocaleDateString()}</p>
              <p className="text-gray-700">
                Ótimo produto! Superou minhas expectativas em termos de qualidade e funcionalidade. 
                A entrega foi rápida e o produto chegou bem embalado. Recomendo!
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-6">
          <Button variant="outline" className="w-full">
            Ver Todas as Avaliações
          </Button>
        </div>
      </TabsContent>
    </Tabs>
  );
};

import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

export default ProductTabs;
