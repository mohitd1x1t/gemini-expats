import React from 'react';
import { Car, Train, ShieldCheck, AlertTriangle, ExternalLink, Compass, CheckCircle2 } from 'lucide-react';

export default function DrivingTransport({ countryData, userProfile }) {
  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="p-6 rounded-3xl bg-slate-800/40 border border-slate-700/60 backdrop-blur-md flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <Car className="w-4 h-4" />
            Mobility, Driving Licenses & Public Transit
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white">
            Driving License Conversion & Transit in {countryData.name} {countryData.flag}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            International Driving Permit (IDP) limits, license exchange treaties, winter tire mandates, and public commuter passes.
          </p>
        </div>
      </div>

      {/* 3 Core Mobility Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        {/* Driving License Exchange */}
        <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2">
          <div className="font-bold text-white text-sm flex items-center gap-2">
            <Car className="w-4 h-4 text-cyan-400" />
            The 6-Month IDP Grace Period
          </div>
          <p className="text-slate-400 leading-relaxed">
            In {countryData.name}, foreign national licenses (plus an International Driving Permit) are valid for driving for strictly <strong>up to 6 months</strong> from your date of official resident registration.
          </p>
          <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700 text-slate-300">
            After 6 months, you must convert your license to a local one (e.g. German <em>Führerschein</em>, Brazilian <em>CNH</em>, or UK license) or face driving without a valid license charges.
          </div>
        </div>

        {/* Public Transit Passes */}
        <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2">
          <div className="font-bold text-white text-sm flex items-center gap-2">
            <Train className="w-4 h-4 text-emerald-400" />
            Monthly Commuter Transit Card
          </div>
          <p className="text-slate-400 leading-relaxed">
            {countryData.id === 'germany' && 'Deutschlandticket (€49/mo) provides unlimited travel on all local trains, subways, trams, and buses across all of Germany.'}
            {countryData.id === 'brazil' && 'Get a Bilhete Único in São Paulo or RioCard in Rio de Janeiro for discounted integrated subway, bus, and train fares.'}
            {countryData.id === 'uk' && 'Use Contactless bank card or Oyster Card in London with daily/weekly price capping.'}
            {countryData.id === 'netherlands' && 'Personal OV-Chipkaart connects to your bank account for automatic check-in discounts on NS trains and GVB trams.'}
            {countryData.id === 'japan' && 'Mobile Suica or Pasmo on your smartphone works seamlessly for subways, convenience stores, and vending machines.'}
            {!['germany', 'brazil', 'uk', 'netherlands', 'japan'].includes(countryData.id) && 'Get a local integrated contactless smartcard for trains, buses, and ferries with commuter capping.'}
          </p>
        </div>

        {/* Mandatory Vehicle Gear */}
        <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2">
          <div className="font-bold text-white text-sm flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            Mandatory Vehicle Equipment
          </div>
          <p className="text-slate-400 leading-relaxed">
            In Europe, vehicles must carry by law inside the passenger cabin:
          </p>
          <ul className="space-y-1 text-slate-300 pt-1">
            <li>• Warning triangle (Warndreieck)</li>
            <li>• High-visibility reflective vest (Warnweste) for each occupant</li>
            <li>• First aid kit (DIN 13164 compliant with unexpired seal)</li>
          </ul>
        </div>
      </div>

      {/* Winter Tires & Speed Limits */}
      <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-4">
        <h3 className="font-bold text-sm text-white flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-blue-400" />
          Winter Driving & Right-of-Way Rules
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300">
          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 space-y-2">
            <strong className="text-white block">Situational Winter Tires (M+S / Alpine 3PMSF):</strong>
            <p className="text-slate-400 leading-relaxed">
              In cold destinations (Germany, Canada, Northern US), driving with summer tires on icy or snowy roads carries heavy fines and voids your car insurance in case of an accident.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 space-y-2">
            <strong className="text-white block">Priority to the Right (Rechts vor Links):</strong>
            <p className="text-slate-400 leading-relaxed">
              At intersections without signs or traffic lights in continental Europe and Latin America, vehicles approaching from your right always have absolute right of way!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
