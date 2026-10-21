import React, { useState } from 'react';
import { Home, ExternalLink, ShieldCheck, AlertOctagon, FileText, Copy, Check, Info, Baby, Users, School } from 'lucide-react';

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
We are non-smokers, quiet, responsible, and seeking a long-term home in a safe neighborhood close to schools and parks.

Attached is our complete, verified tenant application dossier:
1. Signed Employment Contract & Proof of Income (recent 3 payslips)
2. Credit Rating Certificate (clean record with zero defaults)
3. Copies of Passports & Valid Residence Visas for all family members
4. Previous Landlord Reference

We are available for an in-person or live video viewing at your convenience, and can move in starting [Target Date].

Thank you for your time and welcoming our family.

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
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="p-6 rounded-3xl bg-slate-800/40 border border-slate-700/60 backdrop-blur-md flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <Home className="w-4 h-4" />
            Housing & Lease Defense
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white">
            House Hunting Masterclass in {countryData.name} {countryData.flag}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Official verified portals, scam defense playbook, lease terminology, and {isFamily ? 'family housing strategies' : 'bachelor studio guidance'}.
          </p>
        </div>

        {isFamily && (
          <div className="p-3 bg-indigo-950/40 border border-indigo-500/30 rounded-2xl flex items-center gap-2 text-xs text-indigo-300">
            <Baby className="w-4 h-4 text-indigo-400" />
            <span><strong>Family Filter Active:</strong> Prioritizing 2–3 BR apartments, school catchment areas, and elevator access.</span>
          </div>
        )}
      </div>

      {/* Family Housing Strategy Card */}
      {isFamily && (
        <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-900 border border-indigo-500/40 space-y-3">
          <div className="flex items-center gap-2 font-bold text-indigo-300 text-sm">
            <School className="w-5 h-5 text-indigo-400" />
            Family Housing Rules: School Catchment Zones & Space Mandates
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-slate-300 pt-1">
            <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/60 space-y-1">
              <strong className="text-white block">1. School Catchment Zones:</strong>
              <p className="text-slate-400 leading-relaxed">
                Public school and kindergarten admission strictly depends on the exact municipal postal code where your family does city registration. Pick neighborhoods with high-rated primary schools.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/60 space-y-1">
              <strong className="text-white block">2. Minimum Bedroom Space:</strong>
              <p className="text-slate-400 leading-relaxed">
                In Europe and the UK, landlords and immigration authorities require adequate square footage (min 10–12 m² per child). Children over 10 of different genders often legally require separate bedrooms.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/60 space-y-1">
              <strong className="text-white block">3. Strollers & Noise Protection:</strong>
              <p className="text-slate-400 leading-relaxed">
                Check for ground-floor stroller storage (*Kinderwagenraum*) or an elevator. By law (*Kinderlärmschutzgesetz* in Germany/EU), normal child noise is protected and cannot be ground for eviction.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Scam Defense Playbook */}
      <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/40 space-y-3">
        <div className="flex items-center gap-2 font-bold text-rose-300 text-sm">
          <AlertOctagon className="w-5 h-5 text-rose-400" />
          The #1 Expat Rental Scam: "Landlord is Abroad"
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          The most common rental scam targeting newcomers: A fraudster lists an attractive flat at a below-market rate. When you inquire, they claim: <em>"I recently had to relocate to the UK/Spain. If you wire the security deposit and first month's rent through Airbnb / Western Union / PIX, the delivery courier will mail you the keys."</em>
        </p>
        <div className="text-xs text-rose-200 font-semibold flex items-center gap-2">
          <span>⛔ Golden Rule:</span> NEVER transfer a deposit or rent until you have viewed the property in person (or had a trusted local friend visit) and verified the owner's identity with a signed written lease.
        </div>
      </div>

      {/* Top Portals Grid */}
      <div className="space-y-3">
        <h3 className="font-bold text-sm text-white flex items-center gap-2">
          <ExternalLink className="w-4 h-4 text-indigo-400" />
          Verified Rental Portals in {countryData.name}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {houseData.topPortals.map((portal, idx) => (
            <a
              key={idx}
              href={portal.url}
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-xl bg-slate-800/40 hover:bg-slate-800 border border-slate-700/60 hover:border-indigo-500/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="font-bold text-white text-sm group-hover:text-indigo-300 transition-colors flex items-center justify-between">
                  <span>{portal.name}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-400" />
                </div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {portal.note}
                </p>
              </div>
              <span className="text-[11px] text-indigo-400 font-medium mt-3 block">Visit Portal &rarr;</span>
            </a>
          ))}
        </div>
      </div>

      {/* Key Rental Terminology Decoder */}
      {houseData.keyConcepts && houseData.keyConcepts.length > 0 && (
        <div className="space-y-3">
          <h3 className="font-bold text-sm text-white flex items-center gap-2">
            <Info className="w-4 h-4 text-amber-400" />
            Key Lease Concepts & Local Terminology
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {houseData.keyConcepts.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                <div className="font-bold text-xs text-indigo-300">{item.term}</div>
                <div className="text-xs text-slate-300 leading-relaxed">{item.meaning}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Ready-to-Copy Tenant Dossier Cover Letter */}
      <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
        <div className="flex items-center justify-between">
          <div className="font-bold text-sm text-white flex items-center gap-2">
            <FileText className="w-4 h-4 text-emerald-400" />
            {isFamily ? 'Family Tenant Application Letter Template' : 'Solo Professional Application Letter Template'}
          </div>
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
          >
            {copiedLetter ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Letter</span>
              </>
            )}
          </button>
        </div>

        <p className="text-xs text-slate-400">
          Tailored specifically for your <strong>{userProfile.persona.replace('_', ' ').toUpperCase()}</strong> profile moving to {userProfile.destinationCity}:
        </p>

        <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed select-all">
          {sampleCoverLetter}
        </pre>
      </div>
    </div>
  );
}
