
import React, { useState } from 'react';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useProducts } from '@/context/ProductContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { state } = useCart();
  const { searchQuery, setSearchQuery } = useProducts();

  const categories = ['Femme', 'Homme', 'Enfant', 'Maison', 'Sport'];

  return (
    <header className="bg-amber-50 border-b border-gray-100 sticky top-0 z-50">
      {/* Top banner */}
      <div className="bg-black text-white text-center py-2 text-xs font-light tracking-wide">
        <p>LIVRAISON GRATUITE DÈS 40€</p>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Left side - Mobile menu + Desktop nav */}
          <div className="flex items-center flex-1">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 hover:bg-amber-100 rounded-sm mr-4"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {categories.slice(0, 2).map((category) => (
                <a
                  key={category}
                  href="#"
                  className="text-gray-900 text-sm font-light tracking-wide hover:text-gray-600 transition-colors duration-200 uppercase"
                >
                  {category}
                </a>
              ))}
            </nav>
          </div>

          {/* Center - Logo */}
          <div className="flex items-center justify-center flex-1">
            <img 
              src="/lovable-uploads/69b552f1-586a-4e89-9275-11ee73acf808.png" 
              alt="Paola Di Battiglia" 
              className="h-16 w-auto"
            />
          </div>

          {/* Right side - Desktop nav + Icons */}
          <div className="flex items-center justify-end flex-1">
            {/* Desktop Navigation (remaining categories) */}
            <nav className="hidden md:flex space-x-8 mr-6">
              {categories.slice(2).map((category) => (
                <a
                  key={category}
                  href="#"
                  className="text-gray-900 text-sm font-light tracking-wide hover:text-gray-600 transition-colors duration-200 uppercase"
                >
                  {category}
                </a>
              ))}
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-2">
              {/* Search */}
              <div className="relative">
                <button
                  className="p-3 hover:bg-amber-100 rounded-sm transition-colors"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                >
                  <Search size={18} />
                </button>
                
                {isSearchOpen && (
                  <div className="absolute right-0 top-12 w-80 bg-white shadow-xl border border-gray-100 p-4">
                    <input
                      type="text"
                      placeholder="Rechercher..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:outline-none focus:border-black text-sm"
                      autoFocus
                    />
                  </div>
                )}
              </div>

              {/* User account */}
              <button className="p-3 hover:bg-amber-100 rounded-sm transition-colors">
                <User size={18} />
              </button>

              {/* Shopping cart */}
              <button className="p-3 hover:bg-amber-100 rounded-sm transition-colors relative">
                <ShoppingBag size={18} />
                {state.itemCount > 0 && (
                  <span className="absolute top-1 right-1 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center text-[10px]">
                    {state.itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-6">
            <nav className="flex flex-col space-y-6">
              {categories.map((category) => (
                <a
                  key={category}
                  href="#"
                  className="text-gray-900 text-sm font-light tracking-wide hover:text-gray-600 transition-colors duration-200 uppercase"
                >
                  {category}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
