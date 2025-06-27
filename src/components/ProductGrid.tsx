import React, { useState } from "react";
import { useProducts } from "@/context/ProductContext";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import { Product } from "@/context/ProductContext";

const ProductGrid = () => {
  const { filteredProducts } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  if (filteredProducts.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-medium text-gray-900 mb-4">
          Aucun produit trouvé
        </h2>
        <p className="text-gray-600">
          Essayez de modifier vos filtres ou votre recherche
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-2 gap-0">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={handleQuickView}
            />
          ))}
        </div>
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default ProductGrid;
