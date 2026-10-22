import React, { useState } from 'react';
import { Home, ExternalLink, AlertOctagon, FileText, Copy, Check, Info, Baby, School } from 'lucide-react';

export default function HouseHunting({ countryData, userProfile }) {
  const [copiedLetter, setCopiedLetter] = useState(false);
  const houseData = countryData.houseHunting || {
    topPortals: [],
    scamWarnings: [],
    keyConcepts: []
  };

  const isFamily = userProfile.persona.toLowerCase().includes('family');

  const sampleCoverLetter = isFamily
    ? `Dear Landlord / Property Manager,

My name is [Your Name], and my family and I are writing to express our keen interest in leasing your property in ${userProfile.destinationCity}.

I am relocating from ${userProfile.origin} to take up a permanent full-time position as [Your Job Title] at [Company Name] with a stable corporate salary.
Family Members: [My spouse and X children, aged X].
We are non-smokers, quiet, responsible, and seeking a long-term home in a safe neighborhood close to schools and transit.

Attached is our complete, verified tenant application dossier:
1. Signed Employment Contract & Proof of Income (recent 3 payslips)
2. Credit Rating Certificate (clean record with zero defaults)
3. Copies of Passports & Valid Residence Visas for all family members
4. Previous Landlord Reference

We are available for an in-person or live video viewing at your convenience, and can move in starting [Target Date].

Thank you for your consideration.

Warm regards,
[Your Name] & Family
[Your Phone Number]
[Your Email]`
    : `Dear Landlord / Property Manager,

My name is [Your Name], and I am writing to express my strong interest in leasing your property in ${userProfile.destinationCity}.

I am relocating from ${userProfile.origin} to take up a full-time position as [Your Job Title] at [Company Name] with a permanent contract.
Travel Party: Solo Professional / Non-smoker with no pets.
I am a quiet, responsible tenant with no history of rent defaults.

Attached is my complete application dossier:
1. Signed Employment Contract & Proof of Income (recent payslips)
2. Credit Rating Certificate (clean record)
3. Copy of Passport & Valid Residence Visa
4. Previous Landlord Reference

I am available for an in-person or virtual viewing at your convenience, and can move in starting [Target Date].

Thank you for your consideration.

Warm regards,
[Your Name]
[Your Phone Number]
[Your Email]`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(sampleCoverLetter);
    setCopiedLetter(true);
    setTimeout(() => setCopiedLetter(false), 2000);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div>
          <div className="flex items-center gap-2 text-stone-500 font-mono text-[10px] uppercase tracking-[0.22em] mb-1.5">
            <Home className="w-3.5 h-3.5 text-stone-700" />
            <span>Housing & Lease Defense</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 tracking-tight font-normal">
            House Hunting & Leases in <em className="italic font-serif">{countryData.name}</em> {countryData.flag}
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Official verified portals, deposit protection protocol, rental terminology, and {isFamily ? 'family school catchment zones' : 'studio leasing guidance'}.
          </p>
        </div>

        {isFamily && (
          <div className="p-3 bg-stone-50 border border-stone-200 rounded-full flex items-center gap-2 text-xs text-stone-700 self-start md:self-center">
            <Baby className="w-3.5 h-3.5 text-stone-600" />
            <span className="font-mono text-[11px]"><strong>Family Mode:</strong> Prioritizing 2–3 BR apartments & school catchments</span>
          </div>
        )}
      </div>

      {/* Family Housing Strategy Card */}
      {isFamily && (
        <div className="p-6 rounded-3xl bg-stone-50 border border-stone-200/90 space-y-4">
          <div className="flex items-center gap-2 font-serif text-stone-900 text-base">
            <School className="w-4 h-4 text-stone-700" />
            <span>Family Housing: School Catchment Zones & Space Mandates</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs text-stone-600">
            <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.02)] space-y-1.5">
              <strong className="text-stone-900 block font-medium">1. Municipal School Zones:</strong>
              <p className="text-stone-500 text-[11px] leading-relaxed">
                Public school and kindergarten admission strictly depends on the exact municipal postal code where your family does city registration. Pick neighborhoods with high-rated primary schools.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.02)] space-y-1.5">
              <strong className="text-stone-900 block font-medium">2. Minimum Bedroom Space:</strong>
              <p className="text-stone-500 text-[11px] leading-relaxed">
                In Europe and the UK, landlords and immigration authorities require adequate square footage (min 10–12 m² per child). Children over 10 of different genders legally require separate bedrooms.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.02)] space-y-1.5">
              <strong className="text-stone-900 block font-medium">3. Strollers & Noise Protection:</strong>
              <p className="text-stone-500 text-[11px] leading-relaxed">
                Check for ground-floor stroller storage (*Kinderwagenraum*) or an elevator. By law (*Kinderlärmschutzgesetz* in Germany/EU), normal child noise is protected and cannot be ground for eviction.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Scam Defense Playbook */}
      <div className="p-5 sm:p-6 rounded-2xl bg-rose-50/70 border border-rose-200/80 space-y-2 text-stone-900">
        <div className="flex items-center gap-2 font-serif text-base text-rose-950 font-medium">
          <AlertOctagon className="w-4 h-4 text-rose-800" />
          <span>The #1 Rental Scam: "Landlord is Abroad"</span>
        </div>
        <p className="text-xs text-stone-700 leading-relaxed">
          The most prevalent rental fraud targeting newcomers: A fraudster lists an attractive flat at a below-market rate. When you inquire, they claim: <em>"I recently had to relocate abroad. If you wire the security deposit and first month's rent through Airbnb / Western Union / PIX, a courier will mail you the keys."</em>
        </p>
        <div className="text-xs font-mono text-rose-950 pt-1">
          <span className="font-semibold uppercase tracking-wider">Golden Rule:</span> NEVER transfer deposit funds before visiting the property in person (or via a verified local proxy) and signing a verified lease.
        </div>
      </div>

      {/* Top Portals Grid */}
      <div className="space-y-4">
        <h3 className="font-serif text-lg text-stone-900 flex items-center gap-2">
          <ExternalLink className="w-4 h-4 text-stone-700" />
          <span>Verified Rental Portals in {countryData.name}</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {houseData.topPortals.map((portal, idx) => (
            <a
              key={idx}
              href={portal.url}
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-2xl bg-white hover:border-stone-400 border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="font-serif text-stone-900 text-base group-hover:text-stone-700 transition-colors flex items-center justify-between">
                  <span>{portal.name}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover:text-stone-700" />
                </div>
                <p className="text-xs text-stone-500 mt-2 leading-relaxed">
                  {portal.note}
                </p>
              </div>
              <span className="text-[11px] font-mono text-stone-900 font-medium mt-4 block">Visit Portal &rarr;</span>
            </a>
          ))}
        </div>
      </div>

      {/* Key Rental Terminology Decoder */}
      {houseData.keyConcepts && houseData.keyConcepts.length > 0 && (
        <div className="space-y-4">
          <h3 className="font-serif text-lg text-stone-900 flex items-center gap-2">
            <Info className="w-4 h-4 text-stone-700" />
            <span>Key Lease Concepts & Local Terminology</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {houseData.keyConcepts.map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white border border-stone-200/90 shadow-[0_1px_2px_rgba(0,0,0,0.02)] space-y-1">
                <div className="font-mono text-xs font-semibold text-stone-900 uppercase tracking-wider">{item.term}</div>
                <div className="text-xs text-stone-600 leading-relaxed">{item.meaning}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Ready-to-Copy Tenant Dossier Cover Letter */}
      <div className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-4">
        <div className="flex items-center justify-between">
          <div className="font-serif text-lg text-stone-900 flex items-center gap-2">
            <FileText className="w-4 h-4 text-stone-700" />
            <span>{isFamily ? 'Family Tenant Application Dossier Template' : 'Solo Professional Application Letter Template'}</span>
          </div>
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-stone-900 hover:bg-stone-800 text-white transition-colors"
          >
            {copiedLetter ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Letter</span>
              </>
            )}
          </button>
        </div>

        <p className="text-xs text-stone-500 font-mono">
          Customized for <span className="text-stone-800 font-semibold">{userProfile.persona.replace('_', ' ').toUpperCase()}</span> relocating to {userProfile.destinationCity}:
        </p>

        <pre className="p-5 rounded-2xl bg-stone-50 border border-stone-200 font-mono text-xs text-stone-700 whitespace-pre-wrap leading-relaxed select-all">
          {sampleCoverLetter}
        </pre>
      </div>
    </div>
  );
}
