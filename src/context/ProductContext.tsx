
import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  sizes: string[];
  colors: string[];
  description: string;
  isNew: boolean;
  isOnSale: boolean;
  rating: number;
  reviews: number;
  stock: number;
}

interface ProductContextType {
  products: Product[];
  filteredProducts: Product[];
  filters: {
    category: string;
    minPrice: number;
    maxPrice: number;
    size: string;
    color: string;
    sortBy: string;
  };
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  updateFilters: (filters: any) => void;
  getProductById: (id: string) => Product | undefined;
}

const ProductContext = createContext<ProductContextType | null>(null);

// Luxury Italian tailoring products
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Costume Trois Pièces Milano',
    price: 2890,
    originalPrice: 3200,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop'
    ],
    category: 'Costumes',
    sizes: ['46', '48', '50', '52', '54', '56'],
    colors: ['Bleu Marine', 'Charbon', 'Anthracite'],
    description: 'Costume trois pièces confectionné à la main dans nos ateliers milanais. Laine Super 150s, coupe sartoriale traditionnelle avec finitions main couture.',
    isNew: false,
    isOnSale: true,
    rating: 4.9,
    reviews: 87,
    stock: 8
  },
  {
    id: '2',
    name: 'Chemise Napoli Cotton',
    price: 245,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop'
    ],
    category: 'Chemises',
    sizes: ['38', '39', '40', '41', '42', '43', '44'],
    colors: ['Blanc', 'Bleu Ciel', 'Rose Poudré'],
    description: 'Chemise en coton égyptien 100% façonnée selon la tradition napolitaine. Col italien, poignets mousquetaires, coutures roulottées main.',
    isNew: true,
    isOnSale: false,
    rating: 4.8,
    reviews: 124,
    stock: 15
  },
  {
    id: '3',
    name: 'Veste Smoking Venezia',
    price: 1890,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop'
    ],
    category: 'Smoking',
    sizes: ['46', '48', '50', '52', '54'],
    colors: ['Noir', 'Bleu Minuit'],
    description: 'Veste de smoking en laine mohair avec revers en soie. Confection artisanale vénitienne, boutonnière fonctionnelle, doublure jacquard.',
    isNew: false,
    isOnSale: false,
    rating: 4.9,
    reviews: 56,
    stock: 6
  },
  {
    id: '4',
    name: 'Manteau Cachemire Firenze',
    price: 2450,
    originalPrice: 2890,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop',
      'https://images.unsplash.com/photo-1583743089696-4b3ccb4b7ad3?w=400&h=500&fit=crop'
    ],
    category: 'Manteaux',
    sizes: ['46', '48', '50', '52', '54'],
    colors: ['Camel', 'Gris Anthracite', 'Bleu Marine'],
    description: 'Manteau en pur cachemire de Mongolie, doublure en soie. Coupe droite florentine, col italien, finitions main couture.',
    isNew: true,
    isOnSale: true,
    rating: 4.9,
    reviews: 43,
    stock: 4
  },
  {
    id: '5',
    name: 'Costume Cérémonie Roma',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop'
    ],
    category: 'Costumes',
    sizes: ['46', '48', '50', '52', '54', '56'],
    colors: ['Gris Perle', 'Charbon', 'Bleu Nuit'],
    description: 'Costume de cérémonie en laine Super 180s. Confection romaine traditionnelle, gilet assorti, détails en nacre véritable.',
    isNew: false,
    isOnSale: false,
    rating: 5.0,
    reviews: 28,
    stock: 3
  },
  {
    id: '6',
    name: 'Cravate Soie Como',
    price: 185,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop'
    ],
    category: 'Accessoires',
    sizes: ['Unique'],
    colors: ['Bordeaux', 'Bleu Marine', 'Vert Bouteille', 'Argenté'],
    description: 'Cravate en pure soie de Côme, tissage jacquard traditionnel. Motifs géométriques exclusifs, finition main roulottée.',
    isNew: true,
    isOnSale: false,
    rating: 4.7,
    reviews: 92,
    stock: 25
  },
  {
    id: '7',
    name: 'Pochette Soie Pura',
    price: 95,
    image: 'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=400&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=400&h=500&fit=crop',
      'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400&h=500&fit=crop'
    ],
    category: 'Accessoires',
    sizes: ['Unique'],
    colors: ['Blanc', 'Champagne', 'Bleu Ciel', 'Rose'],
    description: 'Pochette de costume en soie pure italienne. Pliage traditionnel, bords roulottés main, motifs floraux délicats.',
    isNew: false,
    isOnSale: false,
    rating: 4.6,
    reviews: 67,
    stock: 18
  },
  {
    id: '8',
    name: 'Gilet Laine Torino',
    price: 890,
    image: 'https://images.unsplash.com/photo-1583743089696-4b3ccb4b7ad3?w=400&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1583743089696-4b3ccb4b7ad3?w=400&h=500&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop'
    ],
    category: 'Gilets',
    sizes: ['46', '48', '50', '52', '54'],
    colors: ['Gris Chiné', 'Bleu Marine', 'Beige'],
    description: 'Gilet en laine mérinos, confection turinoise. Dos en soie, boutons en corne naturelle, ajustement parfait.',
    isNew: true,
    isOnSale: false,
    rating: 4.8,
    reviews: 34,
    stock: 12
  }
];

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products] = useState<Product[]>(mockProducts);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    category: '',
    minPrice: 0,
    maxPrice: 5000,
    size: '',
    color: '',
    sortBy: 'name'
  });

  const updateFilters = (newFilters: any) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const getProductById = (id: string) => {
    return products.find(product => product.id === id);
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !filters.category || product.category === filters.category;
    const matchesPrice = product.price >= filters.minPrice && product.price <= filters.maxPrice;
    const matchesSize = !filters.size || product.sizes.includes(filters.size);
    const matchesColor = !filters.color || product.colors.includes(filters.color);

    return matchesSearch && matchesCategory && matchesPrice && matchesSize && matchesColor;
  }).sort((a, b) => {
    switch (filters.sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return b.isNew ? 1 : -1;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <ProductContext.Provider value={{
      products,
      filteredProducts,
      filters,
      searchQuery,
      setSearchQuery,
      updateFilters,
      getProductById,
    }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};
