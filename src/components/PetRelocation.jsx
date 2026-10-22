import React from 'react';
import { Dog, ShieldCheck, Calendar } from 'lucide-react';

export default function PetRelocation({ countryData }) {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div>
          <div className="flex items-center gap-2 text-stone-500 font-mono text-[10px] uppercase tracking-[0.22em] mb-1.5">
            <Dog className="w-3.5 h-3.5 text-stone-700" />
            <span>Pet Immigration & Biosecurity Protocol</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 tracking-tight font-normal">
            Relocating with Pets to <em className="italic font-serif">{countryData.name}</em> {countryData.flag}
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            ISO microchip standards, rabies serological titer timeline, IATA flight crates, and consular veterinary health certifications.
          </p>
        </div>

        <div className="p-3 bg-stone-50 border border-stone-200 rounded-full flex items-center gap-2 text-xs text-stone-700 self-start md:self-center">
          <Calendar className="w-3.5 h-3.5 text-stone-500 shrink-0" />
          <span className="font-mono text-[11px]">Recommended Window: <strong>Start 3 to 6 Months Ahead</strong></span>
        </div>
      </div>

      {/* 4 Critical Biosecurity Stages */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
        {/* Stage 1 */}
        <div className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-2.5">
          <div className="w-8 h-8 rounded-full bg-stone-100 text-stone-900 border border-stone-200 flex items-center justify-center font-mono font-semibold">
            1
          </div>
          <div className="font-serif text-stone-900 text-base">ISO 11784/11785 Microchip</div>
          <p className="text-stone-600 leading-relaxed">
            Must be a standard 15-digit non-encrypted microchip implanted <strong>BEFORE</strong> the latest rabies vaccination. Foreign border inspection scanners cannot read non-ISO chips.
          </p>
        </div>

        {/* Stage 2 */}
        <div className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-2.5">
          <div className="w-8 h-8 rounded-full bg-stone-100 text-stone-900 border border-stone-200 flex items-center justify-center font-mono font-semibold">
            2
          </div>
          <div className="font-serif text-stone-900 text-base">Rabies Titer (RNATT)</div>
          <p className="text-stone-600 leading-relaxed">
            Blood drawn at least 30 days after rabies vaccination and tested at an EU/OIE-approved laboratory. Most countries enforce a <strong>3-month waiting quarantine</strong> after blood draw prior to entry.
          </p>
        </div>

        {/* Stage 3 */}
        <div className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-2.5">
          <div className="w-8 h-8 rounded-full bg-stone-100 text-stone-900 border border-stone-200 flex items-center justify-center font-mono font-semibold">
            3
          </div>
          <div className="font-serif text-stone-900 text-base">Official Veterinary Health Cert</div>
          <p className="text-stone-600 leading-relaxed">
            Endorsed by an authorized government veterinarian (e.g. USDA APHIS in US, CFIA in Canada, AQCS in India, Vigiagro in Brazil) strictly within <strong>10 days of departure</strong>.
          </p>
        </div>

        {/* Stage 4 */}
        <div className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-2.5">
          <div className="w-8 h-8 rounded-full bg-stone-100 text-stone-900 border border-stone-200 flex items-center justify-center font-mono font-semibold">
            4
          </div>
          <div className="font-serif text-stone-900 text-base">IATA Travel Flight Crate</div>
          <p className="text-stone-600 leading-relaxed">
            Must permit the animal to stand erect, turn 360°, and lie down without touching the crate ceiling. Secured with metal bolts (no plastic snap locks) and external water reservoirs.
          </p>
        </div>
      </div>

      {/* Country Specific Pet Laws */}
      <div className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-4">
        <h3 className="font-serif text-lg text-stone-900 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-stone-700" />
          <span>Country-Specific Pet Regulations ({countryData.name})</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-stone-600">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-1.5">
            <strong className="text-stone-900 block font-serif text-sm">In-Cabin vs Manifested Cargo:</strong>
            <p className="text-stone-500 leading-relaxed">
              Pets under 8 kg (including soft travel bag) can fly in-cabin on most European and Latin American airlines. The UK, Australia, and UAE by statutory mandate do NOT permit pets in cabin; animals must arrive strictly as manifested air cargo via approved animal reception stations.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-1.5">
            <strong className="text-stone-900 block font-serif text-sm">Breed-Specific Import Restrictions (BSL):</strong>
            <p className="text-stone-500 leading-relaxed">
              Germany, the UK, and Singapore ban the importation of American Staffordshire Terriers, Pit Bull Terriers, Dogo Argentino, and Fila Brasileiro breeds. Attempting to enter with prohibited breeds leads to immediate customs seizure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
