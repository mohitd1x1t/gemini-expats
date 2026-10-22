import React, { useState } from 'react';
import { Calendar, CheckCircle2, Circle, AlertCircle, Clock, PlaneTakeoff, Compass, Check, ChevronDown, ChevronUp } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CountdownTimeline({
  countdownData,
  arrivalRoadmap,
  completedTasks,
  onToggleTask,
  userProfile,
  countryData
}) {
  const [activeSubTab, setActiveSubTab] = useState('tminus30'); // 'tminus30' or 'arrival30'
  const [expandedTasks, setExpandedTasks] = useState({});

  const toggleExpand = (taskId) => {
    setExpandedTasks(prev => ({
      ...prev,
      [taskId]: !prev[taskId]
    }));
  };

  const handleTaskClick = (taskId) => {
    const isNowChecked = !completedTasks[taskId];
    onToggleTask(taskId);

    if (isNowChecked) {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#38bdf8', '#818cf8', '#34d399']
      });
    }
  };

  const isFamily = userProfile.persona.toLowerCase().includes('family');

  const isFamilyRelevantTask = (task) => {
    const text = (task.title + ' ' + task.desc).toLowerCase();
    return text.includes('school') || text.includes('kindergarten') || text.includes('kita') ||
           text.includes('child') || text.includes('vaccin') || text.includes('marriage') ||
           text.includes('birth') || text.includes('family') || text.includes('pediatric');
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header & Sub-tab Selector — Minimalist Editorial */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <div>
          <div className="text-[10px] uppercase tracking-[0.22em] text-stone-400 font-mono mb-1">
            TIMELINE MASTER PROTOCOL · {countryData.name.toUpperCase()}
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900">
            Countdown & Onboarding Roadmap
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-1 font-sans">
            Curated sequence: Tasks to complete 30 days before departure, and your first 30 days in {countryData.name}.
          </p>
        </div>

        {/* Sub-tab pills */}
        <div className="flex items-center bg-stone-100/80 p-1 rounded-full border border-stone-200 self-start sm:self-center">
          <button
            onClick={() => setActiveSubTab('tminus30')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all ${
              activeSubTab === 'tminus30'
                ? 'bg-stone-900 text-white shadow-sm'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <PlaneTakeoff className="w-3.5 h-3.5" />
            <span>1 Month Left (T-30 Days)</span>
          </button>
          <button
            onClick={() => setActiveSubTab('arrival30')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all ${
              activeSubTab === 'arrival30'
                ? 'bg-stone-900 text-white shadow-sm'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>First Month After Arrival</span>
          </button>
        </div>
      </div>

      {/* Content for T-30 Days */}
      {activeSubTab === 'tminus30' && (
        <div className="space-y-6">
          {/* Family Mode Priority Alert */}
          {isFamily && (
            <div className="p-4 px-5 rounded-2xl bg-white border border-stone-200/90 text-stone-700 text-xs flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-2.5">
                <span className="text-base">👨‍👩‍👧‍👦</span>
                <span>
                  <strong className="text-stone-900 font-medium">Family Protocol Active:</strong> Highlighting school & kindergarten enrollments, child immunization records, and family flight logistics.
                </span>
              </div>
              <span className="text-[10px] uppercase font-mono tracking-wider text-stone-600 bg-stone-100 px-2.5 py-0.5 rounded-full border border-stone-200">
                Family Mode
              </span>
            </div>
          )}

          <div className="p-4 px-5 rounded-2xl bg-[#faf9f5] border border-stone-200 text-stone-700 text-xs flex items-center justify-between">
            <span>
              💡 <strong>Sequence Guideline:</strong> Complete tasks in weekly order. Secure temporary accommodation address proof and dental/health checks first.
            </span>
            <span className="font-mono text-stone-500 text-[11px]">Week 4 down to Travel Day</span>
          </div>

          <div className="space-y-6">
            {countdownData.map((stage, sIdx) => {
              const stageTasks = stage.tasks;
              const completedInStage = stageTasks.filter(t => completedTasks[t.id]).length;
              const isStageComplete = completedInStage === stageTasks.length;

              return (
                <div
                  key={stage.week}
                  className={`rounded-2xl border transition-all ${
                    isStageComplete
                      ? 'bg-white border-stone-300 shadow-sm'
                      : 'bg-white border-stone-200/90'
                  }`}
                >
                  {/* Stage Header */}
                  <div className="p-4 sm:p-5 flex items-center justify-between border-b border-stone-200/80 bg-[#faf9f5]/70 rounded-t-2xl">
                    <div className="flex items-center gap-3">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-medium ${
                        isStageComplete
                          ? 'bg-stone-900 text-white'
                          : 'bg-stone-100 text-stone-700 border border-stone-300'
                      }`}>
                        {sIdx + 1}
                      </div>
                      <div>
                        <div className="font-serif text-base text-stone-900 flex items-center gap-2">
                          <span>{stage.week}</span>
                          <span className="text-stone-400 font-sans font-normal text-xs">• {stage.title}</span>
                        </div>
                        <div className="text-xs text-stone-500 font-sans">{stage.focus}</div>
                      </div>
                    </div>

                    <div className="text-xs font-mono text-stone-500">
                      <span className={completedInStage > 0 ? 'text-stone-900 font-semibold' : ''}>
                        {completedInStage}
                      </span> / {stageTasks.length} Done
                    </div>
                  </div>

                  {/* Tasks List */}
                  <div className="p-4 sm:p-5 space-y-3">
                    {stageTasks.map(task => {
                      const isDone = completedTasks[task.id];
                      const isExpanded = expandedTasks[task.id];

                      return (
                        <div
                          key={task.id}
                          className={`p-4 rounded-xl border transition-all ${
                            isDone
                              ? 'bg-stone-50/70 border-stone-200'
                              : 'bg-white border-stone-200/80 hover:border-stone-400'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <button
                              onClick={() => handleTaskClick(task.id)}
                              className="mt-0.5 text-stone-400 hover:text-stone-900 transition-colors shrink-0"
                            >
                              {isDone ? (
                                <CheckCircle2 className="w-5 h-5 text-stone-900 fill-stone-100" />
                              ) : (
                                <Circle className="w-5 h-5 text-stone-300 hover:text-stone-600" />
                              )}
                            </button>

                            <div className="flex-1 cursor-pointer" onClick={() => toggleExpand(task.id)}>
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className={`text-xs sm:text-sm font-medium ${
                                  isDone ? 'line-through text-stone-400' : 'text-stone-900'
                                }`}>
                                  {task.title}
                                </span>
                                {task.priority === 'critical' && (
                                  <span className="px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider bg-rose-50 text-rose-700 border border-rose-200 rounded-full">
                                    Critical
                                  </span>
                                )}
                                {task.priority === 'high' && (
                                  <span className="px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider bg-stone-100 text-stone-700 border border-stone-200 rounded-full">
                                    High
                                  </span>
                                )}
                                {isFamily && isFamilyRelevantTask(task) && (
                                  <span className="px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider bg-stone-100 text-stone-800 border border-stone-300 rounded-full">
                                    Family Essential
                                  </span>
                                )}
                              </div>

                              <p className={`text-xs text-stone-600 mt-1.5 leading-relaxed font-sans ${
                                isExpanded ? '' : 'line-clamp-2'
                              }`}>
                                {task.desc}
                              </p>
                            </div>

                            <button
                              onClick={() => toggleExpand(task.id)}
                              className="text-stone-400 hover:text-stone-700 p-1"
                            >
                              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Content for First Month After Arrival */}
      {activeSubTab === 'arrival30' && (
        <div className="space-y-6">
          <div className="p-4 px-5 rounded-2xl bg-[#faf9f5] border border-stone-200 text-stone-700 text-xs flex items-center justify-between">
            <span>
              🌟 <strong>Arrival Milestone Rule:</strong> Prioritize local SIM connectivity and official resident registration in Week 1. This unlocks your national tax identifier and bank accounts.
            </span>
            <span className="font-mono text-stone-500 text-[11px]">Day 1 to Day 30</span>
          </div>

          <div className="space-y-6">
            {arrivalRoadmap.map((phase, pIdx) => {
              const phaseTasks = phase.tasks;
              const completedInPhase = phaseTasks.filter(t => completedTasks[t.id]).length;
              const isPhaseComplete = completedInPhase === phaseTasks.length;

              return (
                <div
                  key={phase.phase}
                  className={`rounded-2xl border transition-all ${
                    isPhaseComplete
                      ? 'bg-white border-stone-300 shadow-sm'
                      : 'bg-white border-stone-200/90'
                  }`}
                >
                  <div className="p-4 sm:p-5 flex items-center justify-between border-b border-stone-200/80 bg-[#faf9f5]/70 rounded-t-2xl">
                    <div className="flex items-center gap-3">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-medium ${
                        isPhaseComplete
                          ? 'bg-stone-900 text-white'
                          : 'bg-stone-100 text-stone-700 border border-stone-300'
                      }`}>
                        {pIdx + 1}
                      </div>
                      <div>
                        <div className="font-serif text-base text-stone-900 flex items-center gap-2">
                          <span>{phase.phase}</span>
                          <span className="text-stone-400 font-sans font-normal text-xs">• {phase.title}</span>
                        </div>
                        <div className="text-xs text-stone-500 font-sans">{phase.badge}</div>
                      </div>
                    </div>

                    <div className="text-xs font-mono text-stone-500">
                      <span className={completedInPhase > 0 ? 'text-stone-900 font-semibold' : ''}>
                        {completedInPhase}
                      </span> / {phaseTasks.length} Done
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 space-y-3">
                    {phaseTasks.map(task => {
                      const isDone = completedTasks[task.id];
                      const isExpanded = expandedTasks[task.id];

                      return (
                        <div
                          key={task.id}
                          className={`p-4 rounded-xl border transition-all ${
                            isDone
                              ? 'bg-stone-50/70 border-stone-200'
                              : 'bg-white border-stone-200/80 hover:border-stone-400'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <button
                              onClick={() => handleTaskClick(task.id)}
                              className="mt-0.5 text-stone-400 hover:text-stone-900 transition-colors shrink-0"
                            >
                              {isDone ? (
                                <CheckCircle2 className="w-5 h-5 text-stone-900 fill-stone-100" />
                              ) : (
                                <Circle className="w-5 h-5 text-stone-300 hover:text-stone-600" />
                              )}
                            </button>

                            <div className="flex-1 cursor-pointer" onClick={() => toggleExpand(task.id)}>
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className={`text-xs sm:text-sm font-medium ${
                                  isDone ? 'line-through text-stone-400' : 'text-stone-900'
                                }`}>
                                  {task.title}
                                </span>
                                <span className="px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider bg-stone-100 text-stone-600 rounded-full border border-stone-200">
                                  {task.timing}
                                </span>
                              </div>

                              <p className={`text-xs text-stone-600 mt-1.5 leading-relaxed font-sans ${
                                isExpanded ? '' : 'line-clamp-2'
                              }`}>
                                {task.desc}
                              </p>
                            </div>

                            <button
                              onClick={() => toggleExpand(task.id)}
                              className="text-stone-400 hover:text-stone-700 p-1"
                            >
                              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
