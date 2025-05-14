
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layouts/Layout';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { featuredProducts } from '@/data/mockData';
import { ShoppingCart, Star, Minus, Plus, ChevronRight } from 'lucide-react';
import ProductsSection from '@/components/sections/ProductsSection';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  // Find product by ID
  const product = featuredProducts.find(p => p.id === id);
  
  // Generate related products (excluding current product)
  const relatedProducts = featuredProducts
    .filter(p => p.category === product?.category && p.id !== id)
    .slice(0, 4);
  
  // Generate dummy additional images
  const additionalImages = [
    product?.image,
    'https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?q=80&w=300',
    'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=300',
    'https://images.unsplash.com/photo-1612444530582-fc66183b16f3?q=80&w=300',
  ].filter(Boolean) as string[];
  
  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Produto não encontrado</h1>
          <p className="mb-6">O produto que você está procurando não existe ou foi removido.</p>
          <Button asChild>
            <Link to="/produtos">Ver todos os produtos</Link>
          </Button>
        </div>
      </Layout>
    );
  }
  
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
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex mb-6 text-sm">
          <ol className="flex items-center space-x-1">
            <li>
              <Link to="/" className="text-gray-medium hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight size={16} className="text-gray-medium" />
            </li>
            <li>
              <Link to="/produtos" className="text-gray-medium hover:text-primary">
                Produtos
              </Link>
            </li>
            <li>
              <ChevronRight size={16} className="text-gray-medium" />
            </li>
            <li>
              <Link 
                to={`/categoria/${product.category}`} 
                className="text-gray-medium hover:text-primary"
              >
                {product.category.split('-').map(word => 
                  word.charAt(0).toUpperCase() + word.slice(1)
                ).join(' ')}
              </Link>
            </li>
            <li>
              <ChevronRight size={16} className="text-gray-medium" />
            </li>
            <li className="text-gray-dark font-medium truncate">{product.name}</li>
          </ol>
        </nav>
        
        {/* Product Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg overflow-hidden border border-gray-200 aspect-square flex items-center justify-center p-4">
              <img 
                src={additionalImages[activeImageIndex]} 
                alt={product.name}
                className="max-h-full max-w-full object-contain" 
              />
            </div>
            
            <div className="grid grid-cols-4 gap-2">
              {additionalImages.map((image, index) => (
                <button
                  key={index}
                  className={`bg-white rounded border ${
                    activeImageIndex === index ? 'border-primary' : 'border-gray-200'
                  } aspect-square flex items-center justify-center p-2 hover:border-primary transition-colors`}
                  onClick={() => setActiveImageIndex(index)}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} - Imagem ${index + 1}`}
                    className="max-h-full max-w-full object-contain" 
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Details */}
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
            <p className="text-gray-700 mb-6">
              {product.shortDescription}
            </p>
            
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
        </div>
        
        {/* Product Details Tabs */}
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
              <li>Bateria de longa duração - até 24 horas de reprodução</li>
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
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <ProductsSection
            title="Produtos Relacionados"
            products={relatedProducts}
            viewAllLink={`/categoria/${product.category}`}
          />
        )}
      </div>
    </Layout>
  );
};

export default ProductDetail;
