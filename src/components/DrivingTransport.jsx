import React from 'react';
import { Car, Train, ShieldCheck, AlertTriangle } from 'lucide-react';

const COUNTRY_TRANSPORT_META = {
  germany: {
    transit: 'Deutschlandticket (€49/mo) provides unlimited travel on all local trains, regional RE/RB lines, subways (U-Bahn), suburban trains (S-Bahn), trams, and buses across Germany.',
    drivingSide: 'Right-hand traffic (drive on the right, overtake on the left). Strict right-of-way to the right (Rechts vor Links) at unmarked junctions.',
    vehicleGearTitle: 'Mandatory Vehicle Cabin Gear',
    vehicleGear: [
      'Warning triangle (Warndreieck) placed 50-100m behind vehicle on highway',
      'Reflective high-visibility safety vest (Warnweste) for each passenger',
      'Sealed DIN 13164 compliant first aid kit with valid expiry date'
    ]
  },
  uae: {
    transit: 'In Dubai, purchase an RTA Nol Card (Silver for regular class, Gold for first class) for the driverless Dubai Metro, Dubai Tram, and city buses. In Abu Dhabi, use a Hafilat smartcard.',
    drivingSide: 'Right-hand traffic (drive on the right). Strictly follow lane discipline; tailgating, overtaking on the hard shoulder, and aggressive lane cutting incur AED 1,000+ fines and black points.',
    vehicleGearTitle: 'Mandatory UAE Vehicle Requirements',
    vehicleGear: [
      'Salik toll transponder tag installed on upper windshield for automatic highway toll debits',
      'Valid Mulkiya vehicle registration card and electronic certificate on Dubai Drive app',
      'Comprehensive or third-party motor insurance card and certified spare tire'
    ]
  },
  singapore: {
    transit: 'SimplyGo lets you tap in and out on SMRT trains, SBS transit buses, and LRT directly using your contactless Visa/Mastercard, Apple Pay, or standard EZ-Link card.',
    drivingSide: 'Left-hand traffic (drive on the left, driver on the right). Strictly adhere to yellow box junction rules; halting inside a yellow box attracts demerit points.',
    vehicleGearTitle: 'Mandatory Singapore Vehicle Equipment',
    vehicleGear: [
      'Dual-mode In-Vehicle Unit (OBU / 2.0 IU) linked to ERP 2.0 for electronic road pricing toll collection',
      'Valid Certificate of Entitlement (COE) and active digital Road Tax disc',
      'Breakdown emergency warning triangle in the vehicle trunk'
    ]
  },
  uk: {
    transit: 'Use Contactless bank cards or an Oyster Card across TfL in London (Underground, Overground, DLR, Elizabeth line, buses) with automatic daily and weekly price capping.',
    drivingSide: 'Left-hand traffic (drive on the left, driver on the right). Roundabouts operate strictly clockwise; give way to vehicles approaching from your right.',
    vehicleGearTitle: 'Mandatory UK Vehicle Standards',
    vehicleGear: [
      'Valid MOT annual roadworthiness certificate for vehicles aged 3+ years',
      'Valid Road Tax (VED) paid online via DVLA',
      'Auto-pay registration for London ULEZ (Ultra Low Emission Zone) and Congestion Charge'
    ]
  },
  netherlands: {
    transit: 'OVpay allows tapping in and out directly with bank cards and smartphones. A personal OV-Chipkaart links directly to your Dutch bank account for automated 40% off-peak rail discounts (Dal Voordeel).',
    drivingSide: 'Right-hand traffic (drive on the right). Cyclists have supreme legal right-of-way; turning vehicles must yield to crossing bicycles on bike lanes.',
    vehicleGearTitle: 'Mandatory Dutch Vehicle Gear',
    vehicleGear: [
      'Hazard warning triangle inside the vehicle',
      'APK (Algemene Periodieke Keuring) annual roadworthiness inspection certificate',
      'Valid motor vehicle third-party liability insurance (WA-verzekering)'
    ]
  },
  usa: {
    transit: 'Major metropolitan systems use contactless tap: OMNY in New York City (MTA), Ventra in Chicago, CharlieCard in Boston, Metro TAP in Los Angeles, and Clipper Card in the San Francisco Bay Area.',
    drivingSide: 'Right-hand traffic (drive on the right). Right turn on red is legally permissible after a complete stop unless marked by a "No Turn on Red" sign.',
    vehicleGearTitle: 'Mandatory US Vehicle Requirements',
    vehicleGear: [
      'Proof of state-mandated auto liability insurance kept in glove compartment',
      'Valid state vehicle registration card and unexpired license plate validation sticker',
      'State emissions inspection certificate (smog check)'
    ]
  },
  canada: {
    transit: 'Use PRESTO card in Toronto / GTA (TTC, GO Transit), Compass Card in Vancouver (TransLink SkyTrain), or OPUS card in Montreal (STM). Tap-to-pay with credit cards is active on major gates.',
    drivingSide: 'Right-hand traffic (drive on the right). Strict requirement to stop for school buses with flashing red lights in both directions.',
    vehicleGearTitle: 'Mandatory Canadian Winter Gear',
    vehicleGear: [
      'Three-Peak Mountain Snowflake (3PMSF) certified winter tires legally mandated Dec 1 – Mar 15 in Quebec and mountain passes in BC',
      'Heavy-duty snow brush, ice scraper, and low-temperature windshield washer fluid (-40°C)',
      'Provincial vehicle ownership registration permit (green slip) and pink insurance card'
    ]
  },
  australia: {
    transit: 'Use an Opal Card in Sydney (or tap contactless credit/debit card on ferries, trains, metro, buses), myki in Melbourne, or go card in Brisbane.',
    drivingSide: 'Left-hand traffic (drive on the left, driver on the right). Melbourne CBD features unique "Hook Turns" where right-turning cars must turn from the far left lane to avoid blocking trams.',
    vehicleGearTitle: 'Mandatory Australian Vehicle Requirements',
    vehicleGear: [
      'Compulsory Third Party (CTP / Green Slip) insurance active with state roads authority',
      'Annual pink slip safety inspection check for vehicles over 5 years old',
      'Toll tag transponder (e-TAG / Linkt) mounted on windshield for motorways'
    ]
  },
  japan: {
    transit: 'Mobile Suica or Pasmo integrated on Apple Wallet / Google Pay operates seamlessly across JR lines, Tokyo Metro, regional bullet trains (Shinkansen), buses, and convenience stores.',
    drivingSide: 'Left-hand traffic (drive on the left, driver on the right). Mandatory complete stop (3 full seconds) at every railway train crossing before proceeding.',
    vehicleGearTitle: 'Mandatory Japanese Vehicle Requirements',
    vehicleGear: [
      'Shaken (車検) mandatory rigorous vehicle inspection certificate and sticker on windshield',
      'Jikobaiseki (自賠責保険) compulsory automobile liability insurance certificate',
      'Emergency red flare (Hatsuentō) inside driver cabin by statutory requirement'
    ]
  },
  brazil: {
    transit: 'Obtain a Bilhete Único in São Paulo (SPTrans) or RioCard Mais in Rio de Janeiro for discounted integrated subway, bus, and CPTM urban rail fares.',
    drivingSide: 'Right-hand traffic (drive on the right). Watch for aggressive motorcycle couriers (motoboys) splitting lanes between cars at high speeds; always check side mirrors.',
    vehicleGearTitle: 'Mandatory Brazilian Vehicle Requirements',
    vehicleGear: [
      'CRLV-e digital vehicle registration on the Carteira Digital de Trânsito (CDT) app',
      'Reflective hazard warning triangle, jack, lug wrench, and roadworthy spare tire',
      'Annual IPVA vehicle tax payment receipt and mandatory DPVAT/SPVAT insurance'
    ]
  }
};

export default function DrivingTransport({ countryData }) {
  const meta = COUNTRY_TRANSPORT_META[countryData.id] || COUNTRY_TRANSPORT_META.germany;

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
            International Driving Permit (IDP) validity, license exchange reciprocity, vehicle requirements, and municipal commuter smartcards.
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
            After 6 months, you must convert your license to a local one or complete local road theory and practical examinations.
          </div>
        </div>

        {/* Public Transit Passes */}
        <div className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-2.5">
          <div className="font-serif text-stone-900 text-base flex items-center gap-2">
            <Train className="w-4 h-4 text-stone-700" />
            <span>Monthly Commuter Transit Card</span>
          </div>
          <p className="text-stone-600 leading-relaxed">
            {meta.transit}
          </p>
        </div>

        {/* Mandatory Vehicle Gear */}
        <div className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-2.5">
          <div className="font-serif text-stone-900 text-base flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-800" />
            <span>{meta.vehicleGearTitle}</span>
          </div>
          <p className="text-stone-600 leading-relaxed">
            Vehicles traveling in {countryData.name} must carry by statutory law inside the passenger cabin:
          </p>
          <ul className="space-y-1 text-stone-600 font-mono text-[11px] pt-1">
            {meta.vehicleGear.map((item, idx) => (
              <li key={idx}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Traffic Rules & Right-of-Way Rules */}
      <div className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-4">
        <h3 className="font-serif text-lg text-stone-900 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-stone-700" />
          <span>Traffic Rules & Driving Norms in {countryData.name}</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-stone-600">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-1.5">
            <strong className="text-stone-900 block font-serif text-sm">Driving Direction & Road Rules:</strong>
            <p className="text-stone-500 leading-relaxed">
              {meta.drivingSide}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-1.5">
            <strong className="text-stone-900 block font-serif text-sm">Tolls & Highway Etiquette:</strong>
            <p className="text-stone-500 leading-relaxed">
              {countryData.id === 'uae' && 'Tolls in Dubai are automatic through the Salik tag; passing under toll gates without a registered tag incurs fines after 10 days.'}
              {countryData.id === 'singapore' && 'Electronic Road Pricing (ERP) charges apply during peak hours across central expressways; an active CEPAS card must be inserted in your IU unit.'}
              {countryData.id === 'germany' && 'The Autobahn has recommended speed guidelines (130 km/h Richtgeschwindigkeit), but no general speed limit on unposted sections; never undertake on the right.'}
              {countryData.id === 'uk' && 'Smart motorways use variable speed limits monitored by speed cameras; London enforces strict 20 mph limits in residential boroughs.'}
              {countryData.id === 'australia' && 'Point-to-point average speed cameras operate on major interstate motorways (Hume, Pacific); heavy penalties for speeding and mobile phone use.'}
              {countryData.id === 'usa' && 'EZ-Pass, SunPass, or FasTrak transponders cover toll bridges and express turnpikes across state lines.'}
              {countryData.id === 'canada' && 'Highway 407 ETR in Ontario uses automated license plate tolling; provincial highways are well salted and plowed during severe snow storms.'}
              {countryData.id === 'japan' && 'Electronic Toll Collection (ETC) 2.0 card is essential for expressways; highway tolls are steep but maintain pristine road quality.'}
              {countryData.id === 'netherlands' && 'Daytime highway limit is strictly 100 km/h (06:00 to 19:00) with extensive average speed check zones (Trajectcontrole).'}
              {countryData.id === 'brazil' && 'Toll plazas on privatized state highways (Rodovias do Estado de SP) accept automatic electronic tags (Sem Parar / Veloe) and contactless card payment.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
