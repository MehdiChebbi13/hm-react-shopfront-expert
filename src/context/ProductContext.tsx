
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

// Mock data pour les produits
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Robe en lin élégante',
    price: 49.99,
    originalPrice: 79.99,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop'
    ],
    category: 'Robes',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Beige', 'Noir', 'Blanc'],
    description: 'Robe en lin naturel parfaite pour l\'été. Coupe fluide et confortable.',
    isNew: false,
    isOnSale: true,
    rating: 4.5,
    reviews: 124,
    stock: 15
  },
  {
    id: '2',
    name: 'Chemise en coton premium',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop'
    ],
    category: 'Chemises',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Blanc', 'Bleu', 'Rose'],
    description: 'Chemise classique en coton 100% biologique. Parfaite pour le bureau.',
    isNew: true,
    isOnSale: false,
    rating: 4.8,
    reviews: 89,
    stock: 22
  },
  {
    id: '3',
    name: 'Jean skinny stretch',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400&h=500&fit=crop',
      'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=400&h=500&fit=crop'
    ],
    category: 'Jeans',
    sizes: ['25', '26', '27', '28', '29', '30', '31', '32'],
    colors: ['Bleu foncé', 'Bleu clair', 'Noir'],
    description: 'Jean skinny avec technologie stretch pour un confort optimal.',
    isNew: false,
    isOnSale: false,
    rating: 4.3,
    reviews: 256,
    stock: 8
  },
  {
    id: '4',
    name: 'Pull en cachemire',
    price: 89.99,
    originalPrice: 129.99,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop',
      'https://images.unsplash.com/photo-1583743089696-4b3ccb4b7ad3?w=400&h=500&fit=crop'
    ],
    category: 'Pulls',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Gris', 'Beige', 'Noir', 'Crème'],
    description: 'Pull doux en cachemire mélangé. Élégance et confort réunis.',
    isNew: true,
    isOnSale: true,
    rating: 4.9,
    reviews: 67,
    stock: 12
  },
  {
    id: '5',
    name: 'Veste blazer moderne',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop'
    ],
    category: 'Vestes',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Noir', 'Marine', 'Gris'],
    description: 'Blazer moderne avec coupe ajustée. Idéal pour un look professionnel.',
    isNew: false,
    isOnSale: false,
    rating: 4.6,
    reviews: 143,
    stock: 18
  },
  {
    id: '6',
    name: 'T-shirt basique premium',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop'
    ],
    category: 'T-shirts',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Blanc', 'Noir', 'Gris', 'Marine', 'Rouge'],
    description: 'T-shirt basique en coton bio. Essentiel de la garde-robe.',
    isNew: true,
    isOnSale: false,
    rating: 4.2,
    reviews: 312,
    stock: 45
  }
];

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products] = useState<Product[]>(mockProducts);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    category: '',
    minPrice: 0,
    maxPrice: 1000,
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
