
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(2); // Exemplo com 2 itens no carrinho
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchInput = e.currentTarget.querySelector('input') as HTMLInputElement;
    if (searchInput.value.trim()) {
      navigate(`/produtos?search=${encodeURIComponent(searchInput.value.trim())}`);
      searchInput.value = '';
      setIsMenuOpen(false);
    }
  };

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
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Pesquisar produtos..."
                  className="w-full h-10 px-10 py-2 border border-gray-300 rounded-md"
                />
                <button type="submit" className="absolute left-3 top-2.5 h-5 w-5 text-gray-medium">
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </form>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4">
            <Link to="/produtos" className="text-gray-dark hover:text-primary">
              Produtos
            </Link>
            <div className="relative group">
              <span className="text-gray-dark hover:text-primary cursor-pointer">
                Categorias
              </span>
              <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-1">
                  <Link to="/categoria/fones-de-ouvido" className="block px-4 py-2 text-gray-dark hover:bg-gray-100 hover:text-primary">
                    Fones de Ouvido
                  </Link>
                  <Link to="/categoria/joysticks" className="block px-4 py-2 text-gray-dark hover:bg-gray-100 hover:text-primary">
                    Joysticks
                  </Link>
                  <Link to="/categoria/games-portateis" className="block px-4 py-2 text-gray-dark hover:bg-gray-100 hover:text-primary">
                    Games Portáteis
                  </Link>
                  <Link to="/categoria/carregadores" className="block px-4 py-2 text-gray-dark hover:bg-gray-100 hover:text-primary">
                    Carregadores
                  </Link>
                  <Link to="/categoria/cabos-usb" className="block px-4 py-2 text-gray-dark hover:bg-gray-100 hover:text-primary">
                    Cabos USB
                  </Link>
                </div>
              </div>
            </div>
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
          <form onSubmit={handleSearch}>
            <div className="relative">
              <input
                type="text"
                placeholder="Pesquisar produtos..."
                className="w-full h-10 px-10 py-2 border border-gray-300 rounded-md"
              />
              <button type="submit" className="absolute left-3 top-2.5 h-5 w-5 text-gray-medium">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </form>
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
              <li className="space-y-2">
                <span className="block text-gray-dark font-medium">Categorias</span>
                <ul className="pl-4 space-y-2">
                  <li>
                    <Link
                      to="/categoria/fones-de-ouvido"
                      className="block text-gray-dark hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Fones de Ouvido
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/categoria/joysticks"
                      className="block text-gray-dark hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Joysticks
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/categoria/games-portateis"
                      className="block text-gray-dark hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Games Portáteis
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/categoria/carregadores"
                      className="block text-gray-dark hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Carregadores
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/categoria/cabos-usb"
                      className="block text-gray-dark hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Cabos USB
                    </Link>
                  </li>
                </ul>
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
