import React from 'react';
import { Compass, ShieldCheck, Heart } from 'lucide-react';

export default function SaaSFooter({ onSelectCountry }) {
  const popularHubs = [
    { id: 'germany', name: 'Germany 🇩🇪' },
    { id: 'uae', name: 'UAE / Dubai 🇦🇪' },
    { id: 'singapore', name: 'Singapore 🇸🇬' },
    { id: 'uk', name: 'United Kingdom 🇬🇧' },
    { id: 'netherlands', name: 'Netherlands 🇳🇱' },
    { id: 'usa', name: 'United States 🇺🇸' },
    { id: 'canada', name: 'Canada 🇨🇦' },
    { id: 'australia', name: 'Australia 🇦🇺' },
    { id: 'japan', name: 'Japan 🇯🇵' },
    { id: 'brazil', name: 'Brazil 🇧🇷' },
  ];

  return (
    <footer className="bg-white border-t border-stone-200/90 py-14 text-xs text-stone-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Col */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#181325] text-white flex items-center justify-center">
                <Compass className="w-4 h-4 text-white" />
              </div>
              <span className="font-sans text-lg font-bold tracking-tight text-stone-900">
                Expat<span className="text-terracotta-500">Compass</span>
              </span>
            </div>
            <p className="text-stone-500 text-xs leading-relaxed">
              Instant ballpark estimates, official consular roadmaps, and IT salary benchmarks for global expats.
            </p>
            <div className="flex items-center gap-1.5 text-[11px] text-stone-500 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>100% Private • Local Storage Only</span>
            </div>
          </div>

          {/* Destinations Col */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-stone-900 uppercase tracking-wider text-[11px] font-mono">
              Supported Destinations
            </h4>
            <div className="grid grid-cols-2 gap-1.5 text-xs">
              {popularHubs.map(hub => (
                <button
                  key={hub.id}
                  onClick={() => onSelectCountry && onSelectCountry(hub.id)}
                  className="text-left text-stone-500 hover:text-terracotta-600 transition-colors py-0.5"
                >
                  {hub.name}
                </button>
              ))}
            </div>
          </div>

          {/* Relocation Tools Col */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-stone-900 uppercase tracking-wider text-[11px] font-mono">
              Relocation Suite
            </h4>
            <ul className="space-y-1.5 text-stone-500 text-xs">
              <li><a href="#workspace" className="hover:text-stone-900">Relocation Living Budget</a></li>
              <li><a href="#workspace" className="hover:text-stone-900">IT Salary Benchmark Engine</a></li>
              <li><a href="#workspace" className="hover:text-stone-900">Visa Guide & Official Portals</a></li>
              <li><a href="#workspace" className="hover:text-stone-900">30-Day Departure Countdown</a></li>
              <li><a href="#workspace" className="hover:text-stone-900">Interactive Packing Matrix</a></li>
              <li><a href="#workspace" className="hover:text-stone-900">Gemini Relocation Copilot</a></li>
            </ul>
          </div>

          {/* Legal / Data Quality Col */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-stone-900 uppercase tracking-wider text-[11px] font-mono">
              Data & Verification
            </h4>
            <p className="text-stone-500 text-xs leading-relaxed">
              Visa fees, minimum statutory salary levels, and document checklists are sourced directly from verified consular portals (Auswärtiges Amt, MOM, UKVI, IND, USCIS, IRCC, Home Affairs).
            </p>
            <p className="text-[11px] text-stone-400">
              Always verify statutory rules with local foreign missions prior to international travel.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-stone-400 text-[11px]">
          <div>
            © {new Date().getFullYear()} ExpatCompass AI. Built with precision for the global expat community.
          </div>
          <div className="flex items-center gap-4">
            <a href="#how-it-works" className="hover:text-stone-600 transition-colors">How It Works</a>
            <span>•</span>
            <a href="#faq" className="hover:text-stone-600 transition-colors">FAQ</a>
            <span>•</span>
            <a href="#workspace" className="hover:text-stone-600 transition-colors">Workspace</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
