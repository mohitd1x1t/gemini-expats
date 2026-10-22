import React, { useState } from 'react';
import {
  Luggage,
  CheckCircle2,
  Circle,
  AlertTriangle,
  Zap,
  Sparkles,
  Baby,
  ChevronDown,
  Users
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function PackingEngine({
  categories,
  completedTasks,
  onToggleTask,
  userProfile,
  countryData,
  onUpdatePersona
}) {
  const [activeCategory, setActiveCategory] = useState('all');

  // Driven directly by Global Persona!
  const isFamily = userProfile.persona.toLowerCase().includes('family');
  const hasPet = userProfile.persona.toLowerCase().includes('pet');

  // Assemble items based on active Global Persona
  const allFilteredItems = [];
  categories.forEach(cat => {
    if (activeCategory === 'all' || activeCategory === cat.id) {
      cat.bachelorItems.forEach(item => {
        allFilteredItems.push({ ...item, categoryName: cat.name, categoryId: cat.id, personaType: 'bachelor' });
      });
      if (isFamily) {
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
        particleCount: 22,
        spread: 45,
        origin: { y: 0.8 },
        colors: ['#1c1917', '#78716c', '#10b981']
      });
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header & Global Persona Filter */}
      <div className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div>
          <div className="flex items-center gap-2 text-stone-500 font-mono text-[10px] uppercase tracking-[0.22em] mb-1.5">
            <Luggage className="w-3.5 h-3.5 text-stone-700" />
            <span>Luggage & Baggage Matrix</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 tracking-tight font-normal">
            Baggage & Packing for <em className="italic font-serif">{countryData.name}</em>
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Curated item checklist dynamically tailored for <span className="font-mono text-stone-900 font-medium">{userProfile.persona.replace('_', ' ').toUpperCase()}</span>.
          </p>
        </div>

        {/* Global Persona Dropdown */}
        <div className="flex items-center gap-2.5 bg-stone-50 px-3.5 py-1.5 rounded-full border border-stone-200 self-start md:self-center">
          <label className="text-[11px] text-stone-500 font-mono uppercase tracking-wider flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-stone-700" />
            <span>Party:</span>
          </label>
          <div className="relative">
            <select
              value={userProfile.persona}
              onChange={(e) => onUpdatePersona(e.target.value)}
              className="appearance-none bg-white border border-stone-200 hover:border-stone-400 text-stone-900 font-medium text-xs rounded-full pl-3 pr-7 py-1 focus:outline-none focus:ring-1 focus:ring-stone-400 cursor-pointer transition-all"
            >
              <option value="bachelor">Bachelor / Solo</option>
              <option value="couple">Couple</option>
              <option value="family_kids">Family with Kids</option>
              <option value="family_pets">Traveling with Pets</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-stone-500">
              <ChevronDown className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>

      {/* Global Filter Family Banner */}
      {isFamily && (
        <div className="p-4 sm:p-5 rounded-2xl bg-stone-50 border border-stone-200/90 text-stone-800 text-xs flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center shrink-0">
              <Baby className="w-4 h-4 text-stone-700" />
            </div>
            <div className="leading-relaxed">
              <strong className="text-stone-900 font-semibold font-serif">Family Relocation Mode Active:</strong> Immunization record booklets, apostilled birth & marriage certificates, pediatric medications, comfort belongings, and seasonal weather gear are automatically included in your checklist.
            </div>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] px-2.5 py-1 rounded-full bg-white border border-stone-200 text-stone-600 shrink-0 hidden sm:inline">
            Global Sync
          </span>
        </div>
      )}

      {/* Voltage & Electrical Rules Alert */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex items-start gap-3.5">
          <div className="w-8 h-8 rounded-full bg-stone-100 text-stone-800 flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
            <Zap className="w-4 h-4 text-stone-800" />
          </div>
          <div className="text-xs space-y-1.5 flex-1">
            <div className="font-medium text-stone-900 font-serif text-sm">Voltage & Socket Standards</div>
            <p className="text-stone-600 leading-relaxed">
              <strong className="text-stone-900">{countryData.name}</strong> operates on{' '}
              {countryData.id === 'brazil'
                ? 'Type N sockets (3-round-pin). Note: Voltage varies by municipality! São Paulo & Rio are 127V/110V, whereas Brasília, Curitiba & Florianópolis use 220V.'
                : countryData.id === 'usa' || countryData.id === 'canada'
                ? '120V @ 60Hz (Type A/B plugs).'
                : '230V @ 50Hz (Standard EU / UK / AU sockets).'}
            </p>
            <p className="text-stone-500">
              Laptop and phone adapters are universal (100–240V). High-wattage hair dryers or kettles rated for 110V will short circuit if connected directly to 230V mains.
            </p>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex items-start gap-3.5">
          <div className="w-8 h-8 rounded-full bg-rose-50 text-rose-800 flex items-center justify-center shrink-0 mt-0.5 border border-rose-200/70">
            <AlertTriangle className="w-4 h-4 text-rose-700" />
          </div>
          <div className="text-xs space-y-1.5 flex-1">
            <div className="font-medium text-stone-900 font-serif text-sm">Customs & Prescriptions Alert</div>
            <p className="text-stone-600 leading-relaxed">
              Never transport raw agricultural seeds, non-commercial meat, or unpasteurized dairy (subject to confiscation and steep fines at border control).
            </p>
            <p className="text-stone-500">
              Carry physician-signed prescription letters in English for all regular medications. Note restricted compounds (e.g. codeine, ADHD medication) requiring prior import permits.
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter Pills & Progress Bar */}
      <div className="space-y-4 pt-2">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeCategory === 'all'
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
              }`}
            >
              All Items ({totalItemsCount})
            </button>
            {categories.map(c => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all border ${
                  activeCategory === c.id
                    ? 'bg-stone-900 border-stone-900 text-white shadow-sm'
                    : 'bg-white border-stone-200 text-stone-600 hover:border-stone-400 hover:text-stone-900'
                }`}
              >
                {c.name.split(' ')[0]}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-stone-500">
            <span>Progress:</span>
            <span className="font-semibold text-stone-900">{completedCount} of {totalItemsCount} packed</span>
            <span className="text-stone-400">({progressPercent}%)</span>
          </div>
        </div>

        {/* Minimal Progress Bar */}
        <div className="w-full h-1.5 bg-stone-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-stone-900 transition-all duration-300 rounded-full"
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
              className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                isDone
                  ? 'bg-stone-50/70 border-stone-200 text-stone-400'
                  : item.personaType === 'family'
                  ? 'bg-white border-stone-300 hover:border-stone-400 shadow-[0_1px_2px_rgba(0,0,0,0.02)]'
                  : 'bg-white hover:border-stone-400 border-stone-200/90 shadow-[0_1px_2px_rgba(0,0,0,0.02)]'
              }`}
            >
              <button
                type="button"
                className="mt-0.5 text-stone-400 hover:text-stone-900 transition-colors shrink-0"
              >
                {isDone ? (
                  <CheckCircle2 className="w-4 h-4 text-stone-900" />
                ) : (
                  <Circle className="w-4 h-4 text-stone-300 hover:text-stone-500" />
                )}
              </button>

              <div className="flex-1 text-xs">
                <div className="mb-1">
                  <span className={`font-normal ${isDone ? 'line-through text-stone-400' : 'text-stone-800'}`}>
                    {item.title}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-stone-500 flex-wrap">
                  <span className="px-2 py-0.5 rounded-full bg-stone-100 text-stone-600">
                    {item.categoryName}
                  </span>
                  {item.priority === 'critical' && (
                    <span className="text-rose-700 font-medium">Critical</span>
                  )}
                  {item.priority === 'high' && (
                    <span className="text-amber-800 font-medium">High</span>
                  )}
                  {item.personaType === 'family' && (
                    <span className="text-stone-700 bg-stone-100 px-2 py-0.5 rounded-full border border-stone-200">
                      Family Priority
                    </span>
                  )}
                  {item.personaType === 'pet' && (
                    <span className="text-stone-700 bg-stone-100 px-2 py-0.5 rounded-full border border-stone-200">
                      Pet Protocol
                    </span>
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
