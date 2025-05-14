
import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import Layout from '@/components/layouts/Layout';
import ProductCard, { Product } from '@/components/ui/ProductCard';
import { featuredProducts, categories } from '@/data/mockData';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProductList = () => {
  const { categorySlug } = useParams();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  
  const [products, setProducts] = useState<Product[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([0, 500]);
  const [maxPrice, setMaxPrice] = useState(500);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  
  // Determine the page title based on categorySlug or searchQuery
  const getPageTitle = () => {
    if (searchQuery) {
      return `Resultados para "${searchQuery}"`;
    }
    if (categorySlug) {
      const category = categories.find(c => c.slug === categorySlug);
      return category ? category.name : 'Produtos';
    }
    return 'Todos os Produtos';
  };
  
  useEffect(() => {
    // Filter products based on category, search, and price range
    let filteredProducts = [...featuredProducts];
    
    // Apply category filter from URL parameter or selectedCategories
    if (categorySlug) {
      filteredProducts = filteredProducts.filter(product => product.category === categorySlug);
    } else if (selectedCategories.length > 0) {
      filteredProducts = filteredProducts.filter(product => selectedCategories.includes(product.category));
    }
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filteredProducts = filteredProducts.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.shortDescription.toLowerCase().includes(query)
      );
    }
    
    // Apply price range filter
    filteredProducts = filteredProducts.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    setProducts(filteredProducts);
    
    // Determine max price for slider
    const highestPrice = Math.max(...featuredProducts.map(p => p.price));
    setMaxPrice(Math.ceil(highestPrice / 100) * 100);
  }, [categorySlug, searchQuery, priceRange, selectedCategories]);
  
  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };
  
  const resetFilters = () => {
    setPriceRange([0, maxPrice]);
    setSelectedCategories([]);
  };
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', { 
      style: 'currency', 
      currency: 'BRL',
      maximumFractionDigits: 0 
    }).format(price);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold">{getPageTitle()}</h1>
          
          <button 
            className="md:hidden flex items-center gap-2 text-primary"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal size={20} />
            <span>Filtros</span>
          </button>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters Sidebar - Mobile */}
          <div 
            className={`md:hidden fixed inset-0 bg-white z-50 transition-transform duration-300 transform ${
              showFilters ? 'translate-x-0' : 'translate-x-full'
            } overflow-auto`}
          >
            <div className="p-4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Filtros</h2>
                <button onClick={() => setShowFilters(false)}>
                  <X size={24} />
                </button>
              </div>
              
              {/* Mobile Filters Content - same as desktop */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">Preço</h3>
                  <Slider
                    defaultValue={priceRange}
                    max={maxPrice}
                    step={10}
                    onValueChange={setPriceRange}
                    className="mb-4"
                  />
                  <div className="flex justify-between text-sm">
                    <span>{formatPrice(priceRange[0])}</span>
                    <span>{formatPrice(priceRange[1])}</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-3">Categorias</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category.id} className="flex items-center">
                        <Checkbox 
                          id={`mobile-category-${category.id}`}
                          checked={selectedCategories.includes(category.slug)}
                          onCheckedChange={() => toggleCategory(category.slug)}
                        />
                        <Label
                          htmlFor={`mobile-category-${category.id}`}
                          className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {category.name}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button onClick={resetFilters} variant="outline" size="sm" className="w-full">
                  Limpar Filtros
                </Button>
                
                <Button onClick={() => setShowFilters(false)} className="w-full">
                  Aplicar Filtros
                </Button>
              </div>
            </div>
          </div>
          
          {/* Filters Sidebar - Desktop */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow p-4 sticky top-24">
              <h2 className="text-lg font-bold mb-4">Filtros</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-md font-medium mb-3">Preço</h3>
                  <Slider
                    defaultValue={priceRange}
                    max={maxPrice}
                    step={10}
                    onValueChange={setPriceRange}
                    className="mb-4"
                  />
                  <div className="flex justify-between text-sm">
                    <span>{formatPrice(priceRange[0])}</span>
                    <span>{formatPrice(priceRange[1])}</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-md font-medium mb-3">Categorias</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category.id} className="flex items-center">
                        <Checkbox 
                          id={`category-${category.id}`}
                          checked={selectedCategories.includes(category.slug)}
                          onCheckedChange={() => toggleCategory(category.slug)}
                        />
                        <Label
                          htmlFor={`category-${category.id}`}
                          className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {category.name}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button onClick={resetFilters} variant="outline" size="sm" className="w-full">
                  Limpar Filtros
                </Button>
              </div>
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="flex-1">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  defaultValue={searchQuery}
                  className="input-field pl-10"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-medium" />
              </div>
            </div>
            
            {products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">Nenhum produto encontrado</h3>
                <p className="text-gray-medium">Tente ajustar seus filtros ou realizar uma nova busca.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductList;
