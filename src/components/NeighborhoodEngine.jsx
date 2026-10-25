import React, { useState, useMemo } from 'react';
import {
  MapPin,
  SlidersHorizontal,
  Shield,
  Train,
  GraduationCap,
  Trees,
  ShoppingCart,
  DollarSign,
  Clock,
  Sparkles,
  Info,
  ExternalLink
} from 'lucide-react';
import { CITY_NEIGHBORHOODS } from '../data/logisticsAndDependencyData';

export default function NeighborhoodEngine({ countryData, userProfile }) {
  // Determine available city neighborhoods
  const cityKey = userProfile.destinationCity?.toLowerCase().includes('dubai')
    ? 'dubai'
    : userProfile.destinationCity?.toLowerCase().includes('paulo')
    ? 'sao_paulo'
    : 'berlin';

  const neighborhoods = CITY_NEIGHBORHOODS[cityKey] || CITY_NEIGHBORHOODS.berlin;

  // Weighted criteria preferences (0 to 10 scale)
  const isFamily = userProfile.persona.includes('family');
  const [weightSafety, setWeightSafety] = useState(isFamily ? 9 : 7);
  const [weightSchool, setWeightSchool] = useState(isFamily ? 10 : 3);
  const [weightCommute, setWeightCommute] = useState(isFamily ? 5 : 9);
  const [weightParks, setWeightParks] = useState(isFamily ? 8 : 4);
  const [weightGrocery, setWeightGrocery] = useState(8);

  // Compute composite score for each neighborhood
  const rankedNeighborhoods = useMemo(() => {
    return neighborhoods.map(n => {
      // Commute score: 10 mins = 100, 40 mins = 40
      const commuteScore = Math.max(20, 110 - (n.commuteMin * 2));
      const totalWeight = weightSafety + weightSchool + weightCommute + weightParks + weightGrocery;

      const weightedTotal =
        (n.safetyScore * weightSafety) +
        (n.schoolScore * weightSchool) +
        (commuteScore * weightCommute) +
        (n.parkScore * weightParks) +
        (n.groceryAccess * weightGrocery);

      const compositeScore = Math.round(weightedTotal / (totalWeight || 1));
      return {
        ...n,
        compositeScore
      };
    }).sort((a, b) => b.compositeScore - a.compositeScore);
  }, [neighborhoods, weightSafety, weightSchool, weightCommute, weightParks, weightGrocery]);

  const currencySymbol = countryData?.symbol || '€';

  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div>
          <div className="flex items-center gap-2 text-stone-500 font-mono text-[10px] uppercase tracking-[0.22em] mb-1.5">
            <MapPin className="w-3.5 h-3.5 text-terracotta-500" />
            <span>Neighborhood Decision & Micro-Location Engine</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 tracking-tight font-normal">
            Neighborhood Match for {userProfile.destinationCity}, {countryData.name}
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-1 max-w-2xl">
            Compare actual neighborhoods weighted by your personal priorities: rent averages, safety indices, commute times to tech hubs, school density, and grocery access.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-stone-50 px-4 py-2 rounded-2xl border border-stone-200 text-xs font-mono text-stone-700 shrink-0">
          <span>{rankedNeighborhoods.length} Local Districts Evaluated</span>
        </div>
      </div>

      {/* Criteria Weighting Sliders Control Panel */}
      <div className="p-5 sm:p-6 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <span className="font-serif text-sm font-bold text-stone-900 flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-terracotta-500" />
            <span>Customize Your Priority Weights (0 = Ignore, 10 = Top Priority)</span>
          </span>
          <span className="text-xs font-mono text-stone-400">
            {isFamily ? 'Family Mode Defaults Active' : 'Professional Defaults Active'}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 pt-2">
          
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-stone-600 flex items-center gap-1"><Shield className="w-3 h-3 text-emerald-600" /> Safety</span>
              <span className="font-bold text-stone-900">{weightSafety}/10</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={weightSafety}
              onChange={(e) => setWeightSafety(Number(e.target.value))}
              className="w-full h-1 bg-stone-200 rounded cursor-pointer accent-terracotta-500"
            />
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-stone-600 flex items-center gap-1"><GraduationCap className="w-3 h-3 text-indigo-600" /> Schools / Kita</span>
              <span className="font-bold text-stone-900">{weightSchool}/10</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={weightSchool}
              onChange={(e) => setWeightSchool(Number(e.target.value))}
              className="w-full h-1 bg-stone-200 rounded cursor-pointer accent-terracotta-500"
            />
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-stone-600 flex items-center gap-1"><Clock className="w-3 h-3 text-amber-600" /> Fast Commute</span>
              <span className="font-bold text-stone-900">{weightCommute}/10</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={weightCommute}
              onChange={(e) => setWeightCommute(Number(e.target.value))}
              className="w-full h-1 bg-stone-200 rounded cursor-pointer accent-terracotta-500"
            />
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-stone-600 flex items-center gap-1"><Trees className="w-3 h-3 text-emerald-600" /> Parks & Lakes</span>
              <span className="font-bold text-stone-900">{weightParks}/10</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={weightParks}
              onChange={(e) => setWeightParks(Number(e.target.value))}
              className="w-full h-1 bg-stone-200 rounded cursor-pointer accent-terracotta-500"
            />
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-stone-600 flex items-center gap-1"><ShoppingCart className="w-3 h-3 text-terracotta-600" /> Groceries</span>
              <span className="font-bold text-stone-900">{weightGrocery}/10</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={weightGrocery}
              onChange={(e) => setWeightGrocery(Number(e.target.value))}
              className="w-full h-1 bg-stone-200 rounded cursor-pointer accent-terracotta-500"
            />
          </div>

        </div>
      </div>

      {/* Ranked Neighborhood Cards */}
      <div className="space-y-4">
        {rankedNeighborhoods.map((n, idx) => (
          <div
            key={n.id}
            className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-4 hover:border-terracotta-300 transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-stone-900 text-white font-mono text-xs font-bold flex items-center justify-center">
                    #{idx + 1}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-stone-900">
                    {n.name}
                  </h3>
                  <span className="text-xs font-mono text-stone-500 bg-stone-50 px-2.5 py-0.5 rounded-full border border-stone-200">
                    {n.vibe}
                  </span>
                </div>
              </div>

              {/* Match Score Badge */}
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-2xl font-mono font-extrabold text-terracotta-600">
                    {n.compositeScore}%
                  </div>
                  <div className="text-[10px] font-mono text-stone-400 uppercase">
                    Weighted Match
                  </div>
                </div>
              </div>
            </div>

            {/* Micro Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/70">
                <span className="text-stone-400 text-[10px] block">Avg 1-Bed / 3-Bed Rent</span>
                <span className="font-bold text-stone-900">
                  {currencySymbol}{n.rentAvg1Bed.toLocaleString()} / {currencySymbol}{n.rentAvg3Bed.toLocaleString()}
                </span>
              </div>

              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/70">
                <span className="text-stone-400 text-[10px] block">Tech Commute</span>
                <span className="font-bold text-stone-900">~{n.commuteMin} mins to Hub</span>
              </div>

              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/70">
                <span className="text-stone-400 text-[10px] block">Safety Index</span>
                <span className="font-bold text-emerald-700">{n.safetyScore} / 100</span>
              </div>

              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/70">
                <span className="text-stone-400 text-[10px] block">Transit & Groceries</span>
                <span className="font-bold text-stone-900">{n.transitScore} / {n.groceryAccess}</span>
              </div>
            </div>

            {/* Pros, Cons, and Data Sources */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-stone-600 pt-1">
              <div className="p-3.5 bg-emerald-50/50 rounded-xl border border-emerald-100">
                <strong className="text-emerald-950 font-serif block mb-0.5">Best For:</strong>
                <span>{n.bestFor}</span>
              </div>

              <div className="p-3.5 bg-amber-50/50 rounded-xl border border-amber-100">
                <strong className="text-amber-950 font-serif block mb-0.5">Trade-offs & Realities:</strong>
                <span>{n.tradeoffs}</span>
              </div>
            </div>

            <div className="text-[10px] font-mono text-stone-400 flex items-center justify-between pt-2 border-t border-stone-100">
              <span>Verified Data Source: {n.dataSources}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
