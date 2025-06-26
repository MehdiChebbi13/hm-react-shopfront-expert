
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&h=1080&fit=crop&crop=center"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-2xl px-4">
          <h1 className="text-4xl md:text-6xl font-extralight mb-6 tracking-wider uppercase leading-tight">
            Nouvelle
            <br />
            Collection
          </h1>
          
          <p className="text-lg md:text-xl font-light mb-8 tracking-wide opacity-90 max-w-lg mx-auto">
            Découvrez l'élégance intemporelle à travers nos créations exclusives
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group px-8 py-4 bg-white text-black font-light text-sm tracking-widest uppercase hover:bg-gray-100 transition-all duration-300 flex items-center gap-3">
              Découvrir
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="px-8 py-4 border border-white text-white font-light text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300">
              Lookbook
            </button>
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
