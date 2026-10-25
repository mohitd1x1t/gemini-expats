import React, { useState, useMemo } from 'react';
import {
  Luggage,
  Ship,
  Zap,
  ShoppingBag,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  ArrowRight,
  Flame,
  Check
} from 'lucide-react';
import {
  calculateShippingVsBaggageROI,
  COUNTRY_ELECTRICAL_STANDARDS
} from '../data/logisticsAndDependencyData';

export default function LogisticsOptimizer({ countryData, userProfile }) {
  const [suitcasesCount, setSuitcasesCount] = useState(4);
  const [estimatedStayYears, setEstimatedStayYears] = useState(2);
  const [includeFurniture, setIncludeFurniture] = useState(false);

  // Origin and destination electrical standards
  const originKey = userProfile.origin?.toLowerCase().includes('brazil')
    ? 'brazil'
    : userProfile.origin?.toLowerCase().includes('states') || userProfile.origin?.toLowerCase().includes('usa')
    ? 'usa'
    : 'india';

  const originStandards = COUNTRY_ELECTRICAL_STANDARDS[originKey] || COUNTRY_ELECTRICAL_STANDARDS.india;
  const destStandards = COUNTRY_ELECTRICAL_STANDARDS[countryData.id] || COUNTRY_ELECTRICAL_STANDARDS.germany;

  // Shipping ROI calculation
  const shippingROI = useMemo(() => {
    return calculateShippingVsBaggageROI({
      suitcasesCount,
      estimatedStayYears,
      includeFurniture,
      origin: userProfile.origin,
      destination: countryData.name
    });
  }, [suitcasesCount, estimatedStayYears, includeFurniture, userProfile.origin, countryData.name]);

  // Frequency hazard detection
  const isFrequencyMismatch = originStandards.frequency !== destStandards.frequency &&
    typeof originStandards.frequency === 'number' && typeof destStandards.frequency === 'number';

  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div>
          <div className="flex items-center gap-2 text-stone-500 font-mono text-[10px] uppercase tracking-[0.22em] mb-1.5">
            <Luggage className="w-3.5 h-3.5 text-terracotta-500" />
            <span>Relocation Logistics & Hardware Engineering</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 tracking-tight font-normal">
            Shipping vs. Baggage ROI & Appliance Compatibility
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-1 max-w-2xl">
            Decide whether to pay airline excess baggage fees, ship a wooden LCL sea crate, or buy locally. Check whether your home electronics will survive destination grid voltages.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-stone-50 px-4 py-2 rounded-2xl border border-stone-200 text-xs font-mono text-stone-700 shrink-0">
          <Zap className="w-4 h-4 text-amber-500" />
          <span>{originStandards.voltage}V/{originStandards.frequency}Hz ➔ {destStandards.voltage}V/{destStandards.frequency}Hz</span>
        </div>
      </div>

      {/* 1. Shipping Container vs. Excess Baggage ROI Calculator */}
      <div className="p-6 sm:p-7 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 pb-4">
          <div>
            <h3 className="font-serif text-xl text-stone-900 font-normal">
              Shipping Container vs. Excess Baggage ROI Calculator
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              Simulate 4x extra 23kg suitcases vs. 2.5m³ sea crate vs. local repurchase.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 bg-stone-50 border border-stone-200 rounded-xl px-3 py-1.5 text-xs font-mono">
              <span className="text-stone-500">Duration:</span>
              <select
                value={estimatedStayYears}
                onChange={(e) => setEstimatedStayYears(Number(e.target.value))}
                className="bg-transparent font-bold text-stone-900 focus:outline-none cursor-pointer"
              >
                <option value={1}>1 Year Assignment</option>
                <option value={2}>2 Years</option>
                <option value={3}>3+ Years (Long Term)</option>
              </select>
            </div>

            <label className="flex items-center gap-2 text-xs font-semibold text-stone-700 cursor-pointer bg-stone-50 border border-stone-200 rounded-xl px-3 py-1.5">
              <input
                type="checkbox"
                checked={includeFurniture}
                onChange={(e) => setIncludeFurniture(e.target.checked)}
                className="w-4 h-4 rounded text-terracotta-500 focus:ring-terracotta-400"
              />
              <span>Include Large Furniture?</span>
            </label>
          </div>
        </div>

        {/* 3 Options Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Option 1: Airline Excess Baggage */}
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3 flex flex-col justify-between">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-serif font-bold text-stone-900 text-sm">Airline Excess Baggage</span>
                <Luggage className="w-4 h-4 text-terracotta-500" />
              </div>
              <div className="text-2xl font-mono font-extrabold text-stone-900">
                ${shippingROI.baggageOption.totalCost}
              </div>
              <div className="text-[11px] font-mono text-emerald-700 font-semibold">
                ✓ Speed: {shippingROI.baggageOption.deliveryTime}
              </div>
              <p className="text-xs text-stone-600 leading-relaxed pt-1">
                {shippingROI.baggageOption.risk}
              </p>
            </div>
            <div className="text-[10px] font-mono text-stone-400 pt-2 border-t border-stone-200">
              {suitcasesCount}x 23kg suitcases ({suitcasesCount * 23}kg extra payload)
            </div>
          </div>

          {/* Option 2: LCL Sea Crate */}
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3 flex flex-col justify-between">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-serif font-bold text-stone-900 text-sm">LCL Wooden Sea Crate</span>
                <Ship className="w-4 h-4 text-indigo-500" />
              </div>
              <div className="text-2xl font-mono font-extrabold text-stone-900">
                ${shippingROI.seaLclOption.totalCost}
              </div>
              <div className="text-[11px] font-mono text-amber-700 font-semibold">
                ⏱️ Speed: {shippingROI.seaLclOption.deliveryTime}
              </div>
              <p className="text-xs text-stone-600 leading-relaxed pt-1">
                {shippingROI.seaLclOption.risk}
              </p>
            </div>
            <div className="text-[10px] font-mono text-stone-400 pt-2 border-t border-stone-200">
              2.5 m³ liftvan + customs clearance + marine insurance
            </div>
          </div>

          {/* Option 3: Buy Locally */}
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3 flex flex-col justify-between">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-serif font-bold text-stone-900 text-sm">Sell & Buy Locally</span>
                <ShoppingBag className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="text-2xl font-mono font-extrabold text-stone-900">
                ${shippingROI.buyLocallyOption.totalCost}
              </div>
              <div className="text-[11px] font-mono text-emerald-700 font-semibold">
                ✓ Speed: {shippingROI.buyLocallyOption.deliveryTime}
              </div>
              <p className="text-xs text-stone-600 leading-relaxed pt-1">
                {shippingROI.buyLocallyOption.risk}
              </p>
            </div>
            <div className="text-[10px] font-mono text-stone-400 pt-2 border-t border-stone-200">
              IKEA / Local furniture starter set + local warranties
            </div>
          </div>

        </div>

        {/* Algorithm Recommendation Banner */}
        <div className="p-5 rounded-2xl bg-terracotta-50/70 border border-terracotta-200/80 text-stone-900 space-y-1">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-terracotta-800 font-bold">
            <Sparkles className="w-4 h-4 text-terracotta-600" />
            <span>Optimal Relocation Decision: {shippingROI.recommendation}</span>
          </div>
          <p className="text-xs leading-relaxed text-stone-700">
            {shippingROI.rationale}
          </p>
        </div>
      </div>

      {/* 2. Voltage, Frequency & Appliance Compatibility Checker */}
      <div className="p-6 sm:p-7 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 pb-4">
          <div>
            <h3 className="font-serif text-xl text-stone-900 font-normal">
              Voltage, Plug & 50Hz/60Hz Frequency Checker
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              Ensure your expensive home audio, kitchen gear, and tech don't short-circuit or burn abroad.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono">
            <div className="p-2 bg-stone-50 rounded-xl border border-stone-200">
              Origin: <strong>{originStandards.voltage}V / {originStandards.frequency}Hz</strong> ({originStandards.plugs.join(', ')})
            </div>
            <span>➔</span>
            <div className="p-2 bg-stone-50 rounded-xl border border-stone-200">
              Target: <strong>{destStandards.voltage}V / {destStandards.frequency}Hz</strong> ({destStandards.plugs.join(', ')})
            </div>
          </div>
        </div>

        {/* Appliance Compatibility Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          
          {/* Laptops & Smartphones */}
          <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2">
            <div className="flex items-center justify-between font-bold text-emerald-950 font-serif">
              <span>Laptops, Phones & Tablets</span>
              <span className="text-[10px] font-mono text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">100% Safe</span>
            </div>
            <p className="text-emerald-900 leading-relaxed text-[11px]">
              Modern power bricks (Apple, Dell, Lenovo) are rated for <strong>100–240V, 50/60Hz</strong> auto-switching. You only need a cheap \$5 passive physical plug adapter.
            </p>
          </div>

          {/* Kitchen Blenders, Hair Dryers, Vacuums */}
          <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200 space-y-2">
            <div className="flex items-center justify-between font-bold text-rose-950 font-serif">
              <span>Hair Dryers, Blenders, Vacuums</span>
              <span className="text-[10px] font-mono text-rose-700 bg-rose-100 px-2 py-0.5 rounded">Burn Hazard 🔥</span>
            </div>
            <p className="text-rose-900 leading-relaxed text-[11px]">
              High-wattage heating/motor elements are usually single-voltage (e.g. 230V only or 120V only). Plugging a 120V hair dryer into 230V will melt or catch fire. <strong>Do not pack; buy locally.</strong>
            </p>
          </div>

          {/* Motor / Compressor Appliances (50Hz vs 60Hz) */}
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2">
            <div className="flex items-center justify-between font-bold text-amber-950 font-serif">
              <span>Fridges, Washers & Microwaves</span>
              <span className="text-[10px] font-mono text-amber-800 bg-amber-100 px-2 py-0.5 rounded">Motor Lag</span>
            </div>
            <p className="text-amber-900 leading-relaxed text-[11px]">
              AC induction motors running on the wrong frequency (50Hz vs 60Hz) run 20% hotter and burn out within months. Transformers change voltage, NOT frequency.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}
