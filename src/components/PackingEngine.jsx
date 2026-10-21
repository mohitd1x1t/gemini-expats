import React, { useState } from 'react';
import {
  Luggage,
  CheckCircle2,
  Circle,
  AlertTriangle,
  Zap,
  Sparkles,
  Layers,
  Baby,
  Dog,
  User,
  Plus
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function PackingEngine({
  categories,
  completedTasks,
  onToggleTask,
  userProfile,
  countryData
}) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPersonaFilter, setSelectedPersonaFilter] = useState(
    userProfile.persona.toLowerCase().includes('family') ? 'family' : 'bachelor'
  );
  const [hasPet, setHasPet] = useState(userProfile.persona.toLowerCase().includes('pet'));

  // Calculate items
  const allFilteredItems = [];
  categories.forEach(cat => {
    if (activeCategory === 'all' || activeCategory === cat.id) {
      cat.bachelorItems.forEach(item => {
        allFilteredItems.push({ ...item, categoryName: cat.name, categoryId: cat.id, personaType: 'bachelor' });
      });
      if (selectedPersonaFilter === 'family') {
        cat.familyItems.forEach(item => {
          allFilteredItems.push({ ...item, categoryName: cat.name, categoryId: cat.id, personaType: 'family' });
        });
      }
      if (hasPet) {
        cat.petItems.forEach(item => {
          allFilteredItems.push({ ...item, categoryName: cat.name, categoryId: cat.id, personaType: 'pet' });
        });
      }
    }
  });

  const totalItemsCount = allFilteredItems.length;
  const completedCount = allFilteredItems.filter(item => completedTasks[item.id]).length;
  const progressPercent = totalItemsCount > 0 ? Math.round((completedCount / totalItemsCount) * 100) : 0;

  const handleToggle = (itemId) => {
    const isNowDone = !completedTasks[itemId];
    onToggleTask(itemId);
    if (isNowDone) {
      confetti({
        particleCount: 25,
        spread: 50,
        origin: { y: 0.8 },
        colors: ['#6366f1', '#10b981', '#f59e0b']
      });
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header & Persona Filter */}
      <div className="p-6 rounded-3xl bg-slate-800/40 border border-slate-700/60 backdrop-blur-md flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <Luggage className="w-4 h-4" />
            Intelligent Luggage Matrix
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white">
            Smart Packing & Voltage Planner
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Dynamically adapted for {userProfile.persona} moving to {countryData.name}.
          </p>
        </div>

        {/* Persona toggle buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setSelectedPersonaFilter('bachelor')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
              selectedPersonaFilter === 'bachelor'
                ? 'bg-indigo-600 border-indigo-500 text-white shadow-md'
                : 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>Bachelor / Solo</span>
          </button>

          <button
            onClick={() => setSelectedPersonaFilter('family')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
              selectedPersonaFilter === 'family'
                ? 'bg-indigo-600 border-indigo-500 text-white shadow-md'
                : 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white'
            }`}
          >
            <Baby className="w-3.5 h-3.5" />
            <span>Family with Kids</span>
          </button>

          <button
            onClick={() => setHasPet(!hasPet)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
              hasPet
                ? 'bg-amber-600 border-amber-500 text-white shadow-md'
                : 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white'
            }`}
          >
            <Dog className="w-3.5 h-3.5" />
            <span>Include Pets</span>
          </button>
        </div>
      </div>

      {/* Voltage & Electrical Rules Alert */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60 flex items-start gap-3">
          <Zap className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="text-xs space-y-1">
            <div className="font-bold text-white">Voltage & Plug Compatibility Check:</div>
            <p className="text-slate-300 leading-relaxed">
              <strong>{countryData.name}</strong> operates on{' '}
              {countryData.id === 'usa' || countryData.id === 'canada'
                ? '120V @ 60Hz (Type A/B plugs).'
                : '230V @ 50Hz (Standard EU / UK / AU plugs).'}
            </p>
            <p className="text-slate-400">
              Check small print on electronics: Laptops and phone chargers are universal (100-240V). High-wattage hair dryers or blenders made for 110V will blow out if plugged into 230V!
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-500/30 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
          <div className="text-xs space-y-1">
            <div className="font-bold text-rose-300">Banned Customs & Medication Alert:</div>
            <p className="text-slate-300 leading-relaxed">
              Never pack raw seeds, fresh fruits, or open dairy/meat (confiscated with fines in US/Australia/Europe).
            </p>
            <p className="text-slate-400">
              Keep original doctor’s prescription in English for all chronic medications. Check country-specific narcotics lists (e.g. codeine banned in UAE/Japan).
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter Pills & Progress Bar */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === 'all'
                  ? 'bg-slate-200 text-slate-900 font-bold'
                  : 'bg-slate-800/80 text-slate-400 hover:text-white border border-slate-700/50'
              }`}
            >
              All Categories ({totalItemsCount})
            </button>
            {categories.map(c => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
                  activeCategory === c.id
                    ? 'bg-indigo-600 border-indigo-500 text-white'
                    : 'bg-slate-800/60 border-slate-700/50 text-slate-400 hover:text-white'
                }`}
              >
                {c.name.split(' ')[0]}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>Packed:</span>
            <span className="font-bold text-emerald-400">{completedCount} / {totalItemsCount}</span>
            <span className="text-slate-500">({progressPercent}%)</span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden border border-slate-700/50">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 via-teal-400 to-emerald-400 transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Items List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {allFilteredItems.map(item => {
          const isDone = completedTasks[item.id];
          return (
            <div
              key={item.id}
              onClick={() => handleToggle(item.id)}
              className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                isDone
                  ? 'bg-emerald-950/20 border-emerald-500/30'
                  : 'bg-slate-800/40 hover:bg-slate-800/70 border-slate-700/60'
              }`}
            >
              <button
                type="button"
                className="mt-0.5 text-slate-400 hover:text-emerald-400 transition-colors shrink-0"
              >
                {isDone ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 fill-emerald-950" />
                ) : (
                  <Circle className="w-5 h-5 text-slate-500 hover:text-slate-300" />
                )}
              </button>

              <div className="flex-1 text-xs">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className={`font-semibold ${isDone ? 'line-through text-slate-500' : 'text-slate-200'}`}>
                    {item.title}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-[10px] text-slate-400">
                  <span className="px-1.5 py-0.2 rounded bg-slate-700/60 text-slate-300">
                    {item.categoryName}
                  </span>
                  {item.priority === 'critical' && (
                    <span className="text-rose-400 font-bold uppercase">Critical</span>
                  )}
                  {item.priority === 'high' && (
                    <span className="text-amber-400 font-semibold uppercase">High</span>
                  )}
                  {item.personaType === 'family' && (
                    <span className="text-emerald-400">Family specific</span>
                  )}
                  {item.personaType === 'pet' && (
                    <span className="text-amber-400">Pet specific</span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
