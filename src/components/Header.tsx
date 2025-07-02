
import React, { useState } from "react";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useProducts } from "@/context/ProductContext";
import CartDropdown from "./CartDropdown";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { state } = useCart();
  const { searchQuery, setSearchQuery } = useProducts();

  const categories = ["Costumes", "Chemises", "Accessoires", "Atelier"];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      {/* Top banner */}
      <div className="bg-gray-900 text-white text-center py-2 text-xs font-light tracking-wide">
        <p>CONSULTATION GRATUITE • LIVRAISON DANS TOUTE L'EUROPE</p>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Left side - Mobile menu + Desktop nav */}
          <div className="flex items-center flex-1">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-sm mr-4"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {categories.slice(0, 2).map((category) => (
                <DropdownMenu key={category}>
                  <DropdownMenuTrigger className="text-gray-900 text-sm font-medium tracking-wide hover:text-gray-600 transition-colors duration-200 uppercase outline-none">
                    {category}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48 bg-white shadow-lg border border-gray-100">
                    <DropdownMenuItem className="hover:bg-gray-50 cursor-pointer">
                      Voir tout
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="hover:bg-gray-50 cursor-pointer">
                      Nouveautés
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-gray-50 cursor-pointer">
                      Collection Classique
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-gray-50 cursor-pointer">
                      Sur Mesure
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ))}
            </nav>
          </div>

          {/* Center - Smaller logo for header */}
          <div className="flex items-center justify-center flex-1">
            <img
              src="/lovable-uploads/69b552f1-586a-4e89-9275-11ee73acf808.png"
              alt="Paola Di Battiglia"
              className="h-14 w-auto"
            />
          </div>

          {/* Right side - Desktop nav + Icons */}
          <div className="flex items-center justify-end flex-1">
            {/* Desktop Navigation (remaining categories) */}
            <nav className="hidden md:flex space-x-8 mr-6">
              {categories.slice(2).map((category) => (
                <DropdownMenu key={category}>
                  <DropdownMenuTrigger className="text-gray-900 text-sm font-medium tracking-wide hover:text-gray-600 transition-colors duration-200 uppercase outline-none">
                    {category}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48 bg-white shadow-lg border border-gray-100">
                    <DropdownMenuItem className="hover:bg-gray-50 cursor-pointer">
                      Voir tout
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="hover:bg-gray-50 cursor-pointer">
                      Cravates & Nœuds
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-gray-50 cursor-pointer">
                      Boutons de Manchette
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-gray-50 cursor-pointer">
                      Pochettes
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ))}
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-2">
              {/* Search */}
              <DropdownMenu open={isSearchOpen} onOpenChange={setIsSearchOpen}>
                <DropdownMenuTrigger asChild>
                  <button className="p-3 hover:bg-gray-100 rounded-sm transition-colors">
                    <Search size={18} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80 bg-white shadow-xl border border-gray-100 p-4">
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Rechercher des produits..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:outline-none focus:border-black text-sm bg-transparent"
                      autoFocus
                    />
                    <div className="pt-2">
                      <p className="text-xs text-gray-500 mb-2">Recherches populaires:</p>
                      <div className="flex flex-wrap gap-2">
                        <button className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full transition-colors">
                          Costume sur mesure
                        </button>
                        <button className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full transition-colors">
                          Chemise blanche
                        </button>
                        <button className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full transition-colors">
                          Cravate soie
                        </button>
                      </div>
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* User account */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="p-3 hover:bg-gray-100 rounded-sm transition-colors">
                    <User size={18} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-white shadow-lg border border-gray-100">
                  <DropdownMenuItem className="hover:bg-gray-50 cursor-pointer">
                    Mon Compte
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-gray-50 cursor-pointer">
                    Mes Commandes
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-gray-50 cursor-pointer">
                    Mes Mesures
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-gray-50 cursor-pointer">
                    Rendez-vous Atelier
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="hover:bg-gray-50 cursor-pointer">
                    Service Client
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="hover:bg-gray-50 cursor-pointer">
                    Se Connecter
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Shopping cart */}
              <div className="relative">
                <button 
                  className="p-3 hover:bg-gray-100 rounded-sm transition-colors relative"
                  onClick={() => setIsCartOpen(!isCartOpen)}
                >
                  <ShoppingBag size={18} />
                  {state.itemCount > 0 && (
                    <span className="absolute top-1 right-1 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center text-[10px]">
                      {state.itemCount}
                    </span>
                  )}
                </button>

                <CartDropdown 
                  isOpen={isCartOpen} 
                  onClose={() => setIsCartOpen(false)} 
                />
              </div>
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
                  className="text-gray-900 text-sm font-medium tracking-wide hover:text-gray-600 transition-colors duration-200 uppercase"
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
