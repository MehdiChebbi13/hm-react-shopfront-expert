
import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    shop: [
      'Femme',
      'Homme',
      'Enfant',
      'H&M Home',
      'Sport',
      'Nouveautés',
      'Soldes'
    ],
    customer: [
      'Service Client',
      'Mon Compte',
      'Guide des Tailles',
      'Livraison',
      'Retours',
      'FAQ',
      'Contact'
    ],
    company: [
      'À propos',
      'Carrières',
      'Développement Durable',
      'Investisseurs',
      'Presse',
      'Responsabilité Sociale'
    ],
    legal: [
      'Mentions Légales',
      'Politique de Confidentialité',
      'Conditions d\'Utilisation',
      'Cookies',
      'CGV'
    ]
  };

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Youtube, label: 'YouTube', href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <img 
              src="/lovable-uploads/850ce6f3-3077-447e-a7d5-f634b4f1bf6c.png" 
              alt="Paola Di Battiglia" 
              className="h-16 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-400 text-sm mb-6">
              Mode élégante et accessible pour tous. Découvrez notre collection de vêtements tendance.
            </p>
            
            {/* Contact info */}
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Phone size={14} />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} />
                <span>contact@paoladibattiglia.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} />
                <span>75001 Paris, France</span>
              </div>
            </div>
          </div>

          {/* Shop links */}
          <div>
            <h3 className="font-semibold mb-4">Boutique</h3>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer service */}
          <div>
            <h3 className="font-semibold mb-4">Service Client</h3>
            <ul className="space-y-2">
              {footerLinks.customer.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Entreprise</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Légal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="text-center">
            <h3 className="font-semibold mb-2">Suivez-nous sur les réseaux sociaux</h3>
            <p className="text-gray-400 text-sm mb-6">
              Restez connecté pour les dernières actualités et inspirations mode
            </p>
            
            {/* Social links */}
            <div className="flex justify-center gap-4 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2024 Paola Di Battiglia. Tous droits réservés.</p>
            <div className="flex gap-4 mt-2 md:mt-0">
              <span>Paiement sécurisé</span>
              <span>•</span>
              <span>Livraison rapide</span>
              <span>•</span>
              <span>Satisfaction garantie</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
