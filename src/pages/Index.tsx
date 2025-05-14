
import Layout from '@/components/layouts/Layout';
import HomeBanner from '@/components/sections/HomeBanner';
import CategoriesSection from '@/components/sections/CategoriesSection';
import ProductsSection from '@/components/sections/ProductsSection';
import { categories, featuredProducts, newProducts, salesProducts } from '@/data/mockData';

const Index = () => {
  return (
    <Layout>
      <HomeBanner />
      
      <CategoriesSection 
        title="Navegue por Categorias" 
        categories={categories} 
      />
      
      <ProductsSection 
        title="Produtos em Destaque" 
        products={featuredProducts.slice(0, 5)} 
        viewAllLink="/produtos" 
      />
      
      <ProductsSection 
        title="Novidades" 
        products={newProducts} 
        viewAllLink="/produtos/novidades" 
      />
      
      <ProductsSection 
        title="Ofertas Especiais" 
        products={salesProducts} 
        viewAllLink="/promocoes" 
      />
      
      <section className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Receba nossas ofertas exclusivas</h2>
          <p className="mb-6 max-w-2xl mx-auto">Cadastre seu email e receba promoções e novidades do Ponto do Eletrônico diretamente no seu inbox.</p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Seu melhor email"
              className="flex-grow px-4 py-2 rounded-l focus:outline-none"
            />
            <button className="bg-gray-900 text-white px-4 py-2 rounded-r hover:bg-gray-800 transition-colors">
              Cadastrar
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
