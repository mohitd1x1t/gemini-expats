import React from 'react';
import { Car, Train, ShieldCheck, AlertTriangle } from 'lucide-react';

export default function DrivingTransport({ countryData }) {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div>
          <div className="flex items-center gap-2 text-stone-500 font-mono text-[10px] uppercase tracking-[0.22em] mb-1.5">
            <Car className="w-3.5 h-3.5 text-stone-700" />
            <span>Mobility, Driving Licenses & Public Transit</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 tracking-tight font-normal">
            Driving License Conversion & Commuter Transit in <em className="italic font-serif">{countryData.name}</em> {countryData.flag}
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            International Driving Permit (IDP) validity, license exchange reciprocity, vehicle winter equipment, and municipal commuter smartcards.
          </p>
        </div>
      </div>

      {/* 3 Core Mobility Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        {/* Driving License Exchange */}
        <div className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-2.5">
          <div className="font-serif text-stone-900 text-base flex items-center gap-2">
            <Car className="w-4 h-4 text-stone-700" />
            <span>The Six-Month IDP Grace Period</span>
          </div>
          <p className="text-stone-600 leading-relaxed">
            In {countryData.name}, foreign national driver's licenses accompanied by an International Driving Permit are valid for driving strictly <strong>up to six months</strong> from your date of official residential registration.
          </p>
          <div className="p-3 bg-stone-50 rounded-2xl border border-stone-200 text-stone-700 text-[11px] leading-relaxed">
            After 6 months, you must convert your license to a local one (e.g. German <em>Führerschein</em>, Brazilian <em>CNH</em>, or UK license) or face charges for driving without valid credentials.
          </div>
        </div>

        {/* Public Transit Passes */}
        <div className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-2.5">
          <div className="font-serif text-stone-900 text-base flex items-center gap-2">
            <Train className="w-4 h-4 text-stone-700" />
            <span>Monthly Commuter Transit Card</span>
          </div>
          <p className="text-stone-600 leading-relaxed">
            {countryData.id === 'germany' && 'Deutschlandticket (€49/mo) provides unlimited travel on all local trains, regional RE/RB lines, subways, trams, and buses across Germany.'}
            {countryData.id === 'brazil' && 'Obtain a Bilhete Único in São Paulo or RioCard in Rio de Janeiro for discounted integrated subway, bus, and urban rail fares.'}
            {countryData.id === 'uk' && 'Use Contactless bank cards or an Oyster Card across TfL in London with automatic daily and weekly price capping.'}
            {countryData.id === 'netherlands' && 'A personal OV-Chipkaart links directly to your Dutch bank account for automated tap-in discounts on NS trains and municipal trams.'}
            {countryData.id === 'japan' && 'Mobile Suica or Pasmo on your phone operates seamlessly across regional trains, metro lines, and convenience stores.'}
            {!['germany', 'brazil', 'uk', 'netherlands', 'japan'].includes(countryData.id) && 'Get a local integrated contactless smartcard for trains, buses, and ferries with commuter capping.'}
          </p>
        </div>

        {/* Mandatory Vehicle Gear */}
        <div className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-2.5">
          <div className="font-serif text-stone-900 text-base flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-800" />
            <span>Mandatory Vehicle Equipment</span>
          </div>
          <p className="text-stone-600 leading-relaxed">
            Vehicles traveling in Europe must carry by statutory law inside the passenger cabin:
          </p>
          <ul className="space-y-1 text-stone-600 font-mono text-[11px] pt-1">
            <li>• Hazard warning triangle (Warndreieck)</li>
            <li>• High-visibility reflective vest (Warnweste) for each passenger</li>
            <li>• Sealed DIN 13164 compliant first aid kit</li>
          </ul>
        </div>
      </div>

      {/* Winter Tires & Speed Limits */}
      <div className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-4">
        <h3 className="font-serif text-lg text-stone-900 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-stone-700" />
          <span>Winter Driving Standards & Right-of-Way Rules</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-stone-600">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-1.5">
            <strong className="text-stone-900 block font-serif text-sm">Situational Winter Tires (3PMSF Alpine Symbol):</strong>
            <p className="text-stone-500 leading-relaxed">
              In cold destinations (Germany, Canada, Northern US), driving with summer tires on icy, snowy, or slushy roads incurs immediate fines and invalidates third-party insurance coverage during an incident.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-1.5">
            <strong className="text-stone-900 block font-serif text-sm">Priority to the Right (Rechts vor Links):</strong>
            <p className="text-stone-500 leading-relaxed">
              At intersections lacking signage or active traffic lights in continental Europe and Latin America, vehicles approaching from your right always possess absolute right of way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
