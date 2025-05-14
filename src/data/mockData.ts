
import { Product } from '@/components/ui/ProductCard';
import { Category } from '@/components/ui/CategoryCard';

// Categories Data
export const categories: Category[] = [
  {
    id: '1',
    name: 'Fones de Ouvido',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=200&auto=format&fit=crop',
    slug: 'fones-de-ouvido',
  },
  {
    id: '2',
    name: 'Joysticks',
    image: 'https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?q=80&w=200&auto=format&fit=crop',
    slug: 'joysticks',
  },
  {
    id: '3',
    name: 'Games Portáteis',
    image: 'https://images.unsplash.com/photo-1599409636295-e3cf3538f212?q=80&w=200&auto=format&fit=crop',
    slug: 'games-portateis',
  },
  {
    id: '4',
    name: 'Carregadores',
    image: 'https://images.unsplash.com/photo-1583863788434-e62bd6bf5ebd?q=80&w=200&auto=format&fit=crop',
    slug: 'carregadores',
  },
  {
    id: '5',
    name: 'Cabos USB',
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?q=80&w=200&auto=format&fit=crop',
    slug: 'cabos-usb',
  },
];

// Featured Products
export const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Fone de Ouvido Bluetooth XYZ',
    price: 249.90,
    oldPrice: 299.90,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=300&auto=format&fit=crop',
    category: 'fones-de-ouvido',
    shortDescription: 'Fone bluetooth com cancelamento de ruído e bateria de longa duração.'
  },
  {
    id: '2',
    name: 'Joystick para PlayStation 5',
    price: 399.90,
    image: 'https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?q=80&w=300&auto=format&fit=crop',
    category: 'joysticks',
    shortDescription: 'Controle sem fio com feedback tátil e gatilhos adaptáveis.'
  },
  {
    id: '3',
    name: 'Console Portátil Retro 8000 Jogos',
    price: 199.90,
    oldPrice: 249.90,
    image: 'https://images.unsplash.com/photo-1599409636295-e3cf3538f212?q=80&w=300&auto=format&fit=crop',
    category: 'games-portateis',
    shortDescription: 'Console com 8000 jogos clássicos e tela LCD de 3 polegadas.'
  },
  {
    id: '4',
    name: 'Carregador Rápido USB-C 25W',
    price: 89.90,
    image: 'https://images.unsplash.com/photo-1583863788434-e62bd6bf5ebd?q=80&w=300&auto=format&fit=crop',
    category: 'carregadores',
    shortDescription: 'Carregador rápido para smartphones e tablets compatíveis com USB-C.'
  },
  {
    id: '5',
    name: 'Cabo USB-C para Lightning Premium',
    price: 59.90,
    oldPrice: 79.90,
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?q=80&w=300&auto=format&fit=crop',
    category: 'cabos-usb',
    shortDescription: 'Cabo reforçado de 2 metros para carregamento rápido e transferência de dados.'
  },
  {
    id: '6',
    name: 'Fone de Ouvido Gamer Pro',
    price: 349.90,
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=300&auto=format&fit=crop',
    category: 'fones-de-ouvido',
    shortDescription: 'Fone com microfone destacável e áudio surround 7.1 para gamers.'
  },
  {
    id: '7',
    name: 'Joystick para Xbox Series X',
    price: 449.90,
    image: 'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?q=80&w=300&auto=format&fit=crop',
    category: 'joysticks',
    shortDescription: 'Controle sem fio com bateria recarregável e conexão via Bluetooth.'
  },
  {
    id: '8',
    name: 'Cabo HDMI 2.1 Ultra HD 8K',
    price: 79.90,
    image: 'https://images.unsplash.com/photo-1629131726692-8cb3b8e277da?q=80&w=300&auto=format&fit=crop',
    category: 'cabos-usb',
    shortDescription: 'Cabo HDMI de alta velocidade compatível com resoluções até 8K.'
  },
  {
    id: '9',
    name: 'Carregador Sem Fio Magnético 15W',
    price: 149.90,
    oldPrice: 199.90,
    image: 'https://images.unsplash.com/photo-1622643944006-1ebe6d07cbfa?q=80&w=300&auto=format&fit=crop',
    category: 'carregadores',
    shortDescription: 'Carregador sem fio magnético com suporte para smartphones compatíveis.'
  },
  {
    id: '10',
    name: 'Game Portátil Retrô Arcade',
    price: 129.90,
    image: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=300&auto=format&fit=crop',
    category: 'games-portateis',
    shortDescription: 'Mini console portátil com 200 jogos clássicos de arcade.'
  },
];

// New Products
export const newProducts: Product[] = [
  {
    id: '11',
    name: 'Fone de Ouvido TWS com Case',
    price: 179.90,
    image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?q=80&w=300&auto=format&fit=crop',
    category: 'fones-de-ouvido',
    shortDescription: 'Fones de ouvido sem fio verdadeiros com case de carregamento e resistência à água.'
  },
  {
    id: '12',
    name: 'Controle Universal para Smart TV',
    price: 69.90,
    image: 'https://images.unsplash.com/photo-1636138389529-a8f63bf36aa0?q=80&w=300&auto=format&fit=crop',
    category: 'joysticks',
    shortDescription: 'Controle remoto compatível com todas as marcas de Smart TV.'
  },
  {
    id: '13',
    name: 'Console de Mão Android Gaming',
    price: 499.90,
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=300&auto=format&fit=crop',
    category: 'games-portateis',
    shortDescription: 'Console portátil com sistema Android para jogos mobile e emuladores.'
  },
  {
    id: '14',
    name: 'Hub USB-C 8 em 1',
    price: 199.90,
    oldPrice: 249.90,
    image: 'https://images.unsplash.com/photo-1618759287629-ca85f799b319?q=80&w=300&auto=format&fit=crop',
    category: 'cabos-usb',
    shortDescription: 'Hub USB-C com HDMI, Ethernet, leitor de cartões e portas USB 3.0.'
  },
  {
    id: '15',
    name: 'Powerbank 20000mAh 65W',
    price: 279.90,
    image: 'https://images.unsplash.com/photo-1609592434539-44c04e444e2c?q=80&w=300&auto=format&fit=crop',
    category: 'carregadores',
    shortDescription: 'Bateria externa de alta capacidade com carregamento rápido para notebooks e smartphones.'
  },
];

// Sales Products
export const salesProducts: Product[] = featuredProducts.filter(product => product.oldPrice);
