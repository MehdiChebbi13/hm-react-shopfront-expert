
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const PromotionBanner = () => {
  const promotions = [
    {
      id: 1,
      title: "Soldes d'été",
      subtitle: "Jusqu'à -70% sur une sélection",
      description: "Profitez des dernières pièces de la collection été à prix réduits",
      buttonText: "Découvrir les soldes",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=600&fit=crop",
      bgColor: "bg-gradient-to-r from-pink-500 to-rose-500"
    },
    {
      id: 2,
      title: "Nouvelle Collection",
      subtitle: "Automne-Hiver 2024",
      description: "Découvrez les tendances de la saison avec notre nouvelle collection",
      buttonText: "Voir la collection",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=600&fit=crop",
      bgColor: "bg-gradient-to-r from-amber-600 to-orange-600"
    },
    {
      id: 3,
      title: "Livraison Gratuite",
      subtitle: "Dès 40€ d'achat",
      description: "Commandez maintenant et recevez vos articles gratuitement",
      buttonText: "Commander maintenant",
      image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&h=600&fit=crop",
      bgColor: "bg-gradient-to-r from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="text-yellow-500" size={24} />
            <h2 className="text-3xl font-bold text-gray-900">Offres Spéciales</h2>
            <Sparkles className="text-yellow-500" size={24} />
          </div>
          <p className="text-gray-600">Ne manquez pas nos promotions exceptionnelles</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promotions.map((promo) => (
            <div
              key={promo.id}
              className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 h-80 flex flex-col justify-end text-white">
                <div className="space-y-3">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{promo.title}</h3>
                    <p className="text-lg font-medium text-yellow-300">{promo.subtitle}</p>
                  </div>
                  
                  <p className="text-gray-200 text-sm leading-relaxed">
                    {promo.description}
                  </p>

                  <button className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 group-hover:scale-105 transform">
                    {promo.buttonText}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromotionBanner;
