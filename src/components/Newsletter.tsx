
import React, { useState } from 'react';
import { Mail, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email requis",
        description: "Veuillez saisir votre adresse email",
        variant: "destructive",
      });
      return;
    }

    // Simulate subscription
    setIsSubscribed(true);
    setEmail('');
    
    toast({
      title: "Inscription réussie !",
      description: "Vous recevrez nos dernières actualités et offres exclusives",
    });

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubscribed(false);
    }, 3000);
  };

  return (
    <section className="bg-gradient-to-r from-gray-900 to-black text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <Mail className="mx-auto mb-4 text-white" size={48} />
            <h2 className="text-3xl font-bold mb-4">
              Restez informé(e) de nos nouveautés
            </h2>
            <p className="text-gray-300 text-lg">
              Inscrivez-vous à notre newsletter et recevez en avant-première nos collections,
              offres exclusives et conseils mode.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                disabled={isSubscribed}
              />
              <button
                type="submit"
                disabled={isSubscribed}
                className="px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200 disabled:bg-green-500 disabled:text-white flex items-center justify-center gap-2"
              >
                {isSubscribed ? (
                  <>
                    <Check size={20} />
                    Inscrit !
                  </>
                ) : (
                  'S\'abonner'
                )}
              </button>
            </div>
          </form>

          <div className="mt-8 text-sm text-gray-400">
            <p>
              En vous inscrivant, vous acceptez de recevoir nos communications marketing.
              Vous pouvez vous désabonner à tout moment.
            </p>
          </div>

          {/* Benefits */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-medium mb-2">Offres Exclusives</h3>
              <p className="text-gray-400 text-sm">
                Accédez à des promotions réservées aux abonnés
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-medium mb-2">Nouveautés en Avant-Première</h3>
              <p className="text-gray-400 text-sm">
                Découvrez nos collections avant tout le monde
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="font-medium mb-2">Conseils Mode</h3>
              <p className="text-gray-400 text-sm">
                Recevez nos tips et inspirations styling
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
