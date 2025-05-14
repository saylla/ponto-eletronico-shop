
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">
              Ponto do Eletrônico
            </h1>
          </Link>

          {/* Search Bar - Hidden on Mobile */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Pesquisar produtos..."
                className="input-field pl-10"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-medium" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4">
            <Link to="/produtos" className="text-gray-dark hover:text-primary">
              Produtos
            </Link>
            <Link to="/categorias" className="text-gray-dark hover:text-primary">
              Categorias
            </Link>
            <Link to="/promocoes" className="text-gray-dark hover:text-primary">
              Promoções
            </Link>
            <Link to="/login" className="flex items-center gap-1 text-gray-dark hover:text-primary">
              <User size={20} />
              <span>Entrar</span>
            </Link>
            <Link to="/carrinho" className="relative">
              <ShoppingCart size={24} className="text-gray-dark hover:text-primary" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden gap-2">
            <Link to="/carrinho" className="relative mr-2">
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Search - Only visible on mobile */}
        <div className="md:hidden mt-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Pesquisar produtos..."
              className="input-field pl-10"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-medium" />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-3 py-3 border-t">
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/produtos" 
                  className="block text-gray-dark hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Produtos
                </Link>
              </li>
              <li>
                <Link 
                  to="/categorias" 
                  className="block text-gray-dark hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Categorias
                </Link>
              </li>
              <li>
                <Link 
                  to="/promocoes" 
                  className="block text-gray-dark hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Promoções
                </Link>
              </li>
              <li>
                <Link 
                  to="/login" 
                  className="flex items-center gap-1 text-gray-dark hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User size={20} />
                  <span>Entrar</span>
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
