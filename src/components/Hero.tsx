import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden bg-gray-900">
      {/* Background Image - Your uploaded tailoring image */}
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/47f47df0-faf6-4178-8ae1-526655f4230c.png"
          alt="Italian Tailoring"
          className="w-full h-full object-cover"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center">
        {/* Prominent Logo */}
        <div className="mb-12">
          <img 
            src="/lovable-uploads/69b552f1-586a-4e89-9275-11ee73acf808.png" 
            alt="Paola Di Battiglia" 
            className="h-24 md:h-32 w-auto mx-auto filter drop-shadow-2xl"
          />
        </div>

        <div className="text-center text-white max-w-3xl px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light mb-6 tracking-wide leading-tight">
            SARTORIA ITALIANA
          </h1>
          
          <h2 className="text-xl md:text-2xl font-extralight mb-8 tracking-wider opacity-90 italic">
            L'Arte del Vestire Maschile
          </h2>

          <p className="text-base md:text-lg font-light mb-12 tracking-wide opacity-80 max-w-2xl mx-auto leading-relaxed">
            Depuis trois générations, nous créons des costumes sur mesure qui incarnent l'excellence de la tradition sartoriale italienne. Chaque pièce est une œuvre d'art, façonnée à la main dans nos ateliers de Milan.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group px-10 py-4 bg-white text-black font-medium text-sm tracking-widest uppercase hover:bg-gray-100 transition-all duration-300 flex items-center gap-3 shadow-lg">
              Découvrir la Collection
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="px-10 py-4 border-2 border-white text-white font-medium text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300">
              Prendre Rendez-vous
            </button>
          </div>

          {/* Italian craftsmanship badges */}
          <div className="flex justify-center items-center gap-8 mt-16 opacity-70">
            <div className="text-center">
              <div className="text-2xl font-light mb-1">100%</div>
              <div className="text-xs tracking-wide uppercase">Fait Main</div>
            </div>
            <div className="w-px h-12 bg-white opacity-30"></div>
            <div className="text-center">
              <div className="text-2xl font-light mb-1">1953</div>
              <div className="text-xs tracking-wide uppercase">Depuis</div>
            </div>
            <div className="w-px h-12 bg-white opacity-30"></div>
            <div className="text-center">
              <div className="text-2xl font-light mb-1">Milano</div>
              <div className="text-xs tracking-wide uppercase">Atelier</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
        <div className="flex flex-col items-center animate-bounce">
          <div className="w-px h-12 bg-white opacity-50 mb-2"></div>
          <span className="text-xs font-light tracking-widest uppercase opacity-75">Scroll</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
