
import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    shop: [
      'Costumes',
      'Chemises',
      'Accessoires',
      'Sur Mesure',
      'Consultations'
    ],
    customer: [
      'Service Client',
      'Mon Compte',
      'Guide des Tailles',
      'Livraison',
      'Retours',
      'Contact'
    ],
    company: [
      'À propos',
      'Atelier',
      'Savoir-faire',
      'Histoire',
      'Presse'
    ]
  };

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Youtube, label: 'YouTube', href: '#' }
  ];

  return (
    <footer className="bg-white border-t border-gray-100">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <img 
              src="/lovable-uploads/69b552f1-586a-4e89-9275-11ee73acf808.png" 
              alt="Paola Di Battiglia" 
              className="h-12 w-auto mb-6"
            />
            <p className="text-gray-600 text-sm mb-8 leading-relaxed font-light">
              Sartoria italiana d'eccellenza dal 1953. Ogni capo è realizzato a mano nei nostri atelier di Milano.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3 text-sm text-gray-500">
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-gray-400" />
                <span>+39 02 123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-gray-400" />
                <span>atelier@paoladibattiglia.it</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={14} className="text-gray-400" />
                <span>Via della Spiga, Milano</span>
              </div>
            </div>
          </div>

          {/* Shop links */}
          <div>
            <h3 className="font-medium text-gray-900 mb-6 text-sm tracking-wide uppercase">Collezioni</h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-light">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer service */}
          <div>
            <h3 className="font-medium text-gray-900 mb-6 text-sm tracking-wide uppercase">Servizi</h3>
            <ul className="space-y-3">
              {footerLinks.customer.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-light">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-medium text-gray-900 mb-6 text-sm tracking-wide uppercase">Maison</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-light">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social links */}
        <div className="border-t border-gray-100 pt-12 mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex gap-6 mb-6 md:mb-0">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-xs text-gray-500 font-light tracking-wide">
                © 2024 Paola Di Battiglia • Sartoria Italiana
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
