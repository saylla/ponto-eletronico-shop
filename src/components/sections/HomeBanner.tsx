
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Simulação de banners
const banners = [
  {
    id: 1,
    title: 'Fones de Ouvido Bluetooth',
    description: 'Até 50% OFF em produtos selecionados',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop',
    link: '/categoria/fones-de-ouvido',
    buttonText: 'Ver Ofertas',
    bgColor: 'from-blue-500 to-blue-700',
  },
  {
    id: 2,
    title: 'Novos Joysticks',
    description: 'A melhor experiência para seus jogos',
    image: 'https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?q=80&w=1200&auto=format&fit=crop',
    link: '/categoria/joysticks',
    buttonText: 'Conferir',
    bgColor: 'from-purple-500 to-purple-700',
  },
  {
    id: 3,
    title: 'Cabos e Carregadores',
    description: 'Os essenciais para seus dispositivos',
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?q=80&w=1200&auto=format&fit=crop',
    link: '/categoria/cabos-usb',
    buttonText: 'Ver Todos',
    bgColor: 'from-green-500 to-green-700',
  },
];

const HomeBanner = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="relative overflow-hidden bg-gray-900 w-full h-[300px] md:h-[400px] lg:h-[500px]">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-all duration-500 ease-in-out ${
            index === currentBanner ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${banner.bgColor} opacity-70`} />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6 md:px-12 flex">
              <div className="w-full md:w-1/2 text-white space-y-4 z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">{banner.title}</h2>
                <p className="text-lg md:text-xl opacity-90">{banner.description}</p>
                <Button asChild className="mt-4 bg-white text-gray-900 hover:bg-gray-100">
                  <Link to={banner.link}>{banner.buttonText}</Link>
                </Button>
              </div>
              <div className="hidden md:block w-1/2">
                <img 
                  src={banner.image} 
                  alt={banner.title}
                  className="max-h-full object-contain float-right"
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Controls */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prevBanner}
          className="bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 text-white transition-all"
          aria-label="Previous banner"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextBanner}
          className="bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 text-white transition-all"
          aria-label="Next banner"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBanner(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentBanner ? 'bg-white scale-125' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to banner ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeBanner;
