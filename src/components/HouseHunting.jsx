import React, { useState } from 'react';
import { Home, ExternalLink, ShieldCheck, AlertOctagon, FileText, Copy, Check, Info } from 'lucide-react';

export default function HouseHunting({ countryData, userProfile }) {
  const [copiedLetter, setCopiedLetter] = useState(false);
  const houseData = countryData.houseHunting || {
    topPortals: [],
    scamWarnings: [],
    keyConcepts: []
  };

  const sampleCoverLetter = `Dear Landlord / Property Manager,

My name is [Your Name], and I am writing to express my strong interest in leasing your property in ${userProfile.destinationCity}.

I am relocating from ${userProfile.origin} to take up a full-time position as [Your Job Title] at [Company Name] with a permanent contract.
Travel Party: ${userProfile.persona.replace('_', ' ')}.
We are non-smokers, quiet, responsible tenants with no history of rent defaults.

Attached please find our complete application dossier:
1. Signed Employment Contract & Proof of Income (recent payslips)
2. Credit Rating Certificate (clean record)
3. Copies of Passports & Valid Residence Visas
4. Previous Landlord Reference

We are available for an in-person or virtual viewing at your convenience, and can move in starting [Target Date].

Thank you for your time and consideration.

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
            House Hunting Masterclass in {countryData.name}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Official verified portals, scam defense playbook, lease terminology, and tenant application templates.
          </p>
        </div>
      </div>

      {/* Scam Defense Playbook */}
      <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/40 space-y-3">
        <div className="flex items-center gap-2 font-bold text-rose-300 text-sm">
          <AlertOctagon className="w-5 h-5 text-rose-400" />
          The #1 Expat Rental Scam: "Landlord is Abroad"
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          The most common rental scam targeting newcomers: A fraudster lists a gorgeous flat at an attractive price. When you message them, they say: <em>"I recently had to relocate to the UK/Spain for work. If you wire the security deposit and first month's rent through Airbnb / Western Union / crypto, the delivery service will mail you the keys."</em>
        </p>
        <div className="text-xs text-rose-200 font-semibold flex items-center gap-2">
          <span>⛔ Rule:</span> NEVER transfer a deposit or rent until you have viewed the property in person (or had a trusted local friend visit) and verified the owner's identity with a signed written lease.
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
            High-Response Tenant Application Letter Template
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
          In competitive rental markets like Berlin, London, Amsterdam, Dublin, or New York, hundreds of people apply within 30 minutes of a listing. Sending a tailored, polite introduction significantly increases viewing invitation rates:
        </p>

        <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed select-all">
          {sampleCoverLetter}
        </pre>
      </div>
    </div>
  );
}
