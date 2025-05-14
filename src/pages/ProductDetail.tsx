
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layouts/Layout';
import { featuredProducts } from '@/data/mockData';
import ProductsSection from '@/components/sections/ProductsSection';

// Import the new components
import BreadcrumbNav from '@/components/product/BreadcrumbNav';
import ProductImages from '@/components/product/ProductImages';
import ProductInfo from '@/components/product/ProductInfo';
import ProductTabs from '@/components/product/ProductTabs';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // Find product by ID
  const product = featuredProducts.find(p => p.id === id);
  
  // Generate related products (excluding current product)
  const relatedProducts = featuredProducts
    .filter(p => p.category === product?.category && p.id !== id)
    .slice(0, 4);
  
  // Fallback image
  const fallbackImage = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop";
  
  // Generate dummy additional images
  const additionalImages = [
    product?.image || fallbackImage,
    'https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?q=80&w=300',
    'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=300',
    'https://images.unsplash.com/photo-1612444530582-fc66183b16f3?q=80&w=300',
  ];
  
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
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <BreadcrumbNav 
          productName={product.name}
          category={product.category}
        />
        
        {/* Product Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <ProductImages 
            images={additionalImages}
            productName={product.name}
            fallbackImage={fallbackImage}
          />
          
          {/* Product Details */}
          <ProductInfo product={product} />
        </div>
        
        {/* Product Details Tabs */}
        <ProductTabs productName={product.name} />
        
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
