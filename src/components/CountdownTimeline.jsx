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
      {/* Header & Sub-tab Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6 rounded-3xl bg-slate-800/40 border border-slate-700/60 backdrop-blur-md">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <Clock className="w-4 h-4" />
            Timeline Master Protocol
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white">
            Countdown & Onboarding Roadmap
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Actionable guide: What to do 30 days before leaving, and your first 30 days in {countryData.name}.
          </p>
        </div>

        {/* Sub-tab pills */}
        <div className="flex items-center bg-slate-900/80 p-1 rounded-2xl border border-slate-700 self-start sm:self-center">
          <button
            onClick={() => setActiveSubTab('tminus30')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeSubTab === 'tminus30'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <PlaneTakeoff className="w-4 h-4" />
            <span>1 Month Left (T-30 Days)</span>
          </button>
          <button
            onClick={() => setActiveSubTab('arrival30')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeSubTab === 'arrival30'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>First Month After Arrival</span>
          </button>
        </div>
      </div>

      {/* Content for T-30 Days */}
      {activeSubTab === 'tminus30' && (
        <div className="space-y-6">
          {/* Family Mode Priority Alert */}
          {isFamily && (
            <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/40 text-indigo-200 text-xs flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-base">👨‍👩‍👧‍👦</span>
                <span>
                  <strong className="text-white">Family Timeline Active:</strong> Highlighting school & kindergarten enrollments, child immunization records, and family flight logistics.
                </span>
              </div>
              <span className="text-[10px] uppercase font-bold text-indigo-400 bg-indigo-500/20 px-2 py-0.5 rounded border border-indigo-500/30">
                Family Mode
              </span>
            </div>
          )}

          <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/20 text-indigo-200 text-xs flex items-center justify-between">
            <span>
              💡 <strong>Pro Tip:</strong> Complete tasks in sequence. Never delay temporary accommodation registration confirmation and medical checks!
            </span>
            <span className="font-semibold text-indigo-300">Week 4 down to Travel Day</span>
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
                      ? 'bg-slate-900/40 border-emerald-500/30'
                      : 'bg-slate-900/60 border-slate-800'
                  }`}
                >
                  {/* Stage Header */}
                  <div className="p-4 sm:p-5 flex items-center justify-between border-b border-slate-800/80 bg-slate-800/30">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs ${
                        isStageComplete
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                          : 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/40'
                      }`}>
                        {sIdx + 1}
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm sm:text-base flex items-center gap-2">
                          <span>{stage.week}</span>
                          <span className="text-slate-400 font-normal text-xs">• {stage.title}</span>
                        </div>
                        <div className="text-xs text-slate-400">{stage.focus}</div>
                      </div>
                    </div>

                    <div className="text-xs font-semibold text-slate-400">
                      <span className={completedInStage > 0 ? 'text-emerald-400 font-bold' : ''}>
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
                          className={`p-3.5 rounded-xl border transition-all ${
                            isDone
                              ? 'bg-emerald-950/10 border-emerald-500/20'
                              : 'bg-slate-800/40 border-slate-700/50 hover:border-slate-600'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <button
                              onClick={() => handleTaskClick(task.id)}
                              className="mt-0.5 text-slate-400 hover:text-emerald-400 transition-colors shrink-0"
                            >
                              {isDone ? (
                                <CheckCircle2 className="w-5 h-5 text-emerald-400 fill-emerald-950" />
                              ) : (
                                <Circle className="w-5 h-5 text-slate-500 hover:text-slate-300" />
                              )}
                            </button>

                            <div className="flex-1 cursor-pointer" onClick={() => toggleExpand(task.id)}>
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className={`text-xs sm:text-sm font-semibold ${
                                  isDone ? 'line-through text-slate-500' : 'text-slate-200'
                                }`}>
                                  {task.title}
                                </span>
                                {task.priority === 'critical' && (
                                  <span className="px-1.5 py-0.5 text-[9px] font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30 rounded uppercase">
                                    Critical
                                  </span>
                                )}
                                {task.priority === 'high' && (
                                  <span className="px-1.5 py-0.5 text-[9px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded uppercase">
                                    High
                                  </span>
                                )}
                                {isFamily && isFamilyRelevantTask(task) && (
                                  <span className="px-1.5 py-0.5 text-[9px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded uppercase">
                                    👨‍👩‍👧 Family Critical
                                  </span>
                                )}
                              </div>

                              <p className={`text-xs text-slate-400 mt-1 leading-relaxed ${
                                isExpanded ? '' : 'line-clamp-2'
                              }`}>
                                {task.desc}
                              </p>
                            </div>

                            <button
                              onClick={() => toggleExpand(task.id)}
                              className="text-slate-500 hover:text-slate-300 p-1"
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
          <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/20 text-emerald-200 text-xs flex items-center justify-between">
            <span>
              🌟 <strong>Arrival Golden Rule:</strong> Focus strictly on SIM + City Registration in Week 1. You cannot open most bank accounts or get paid without registration!
            </span>
            <span className="font-semibold text-emerald-300">Day 1 to Day 30</span>
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
                      ? 'bg-slate-900/40 border-emerald-500/30'
                      : 'bg-slate-900/60 border-slate-800'
                  }`}
                >
                  <div className="p-4 sm:p-5 flex items-center justify-between border-b border-slate-800/80 bg-slate-800/30">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs ${
                        isPhaseComplete
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                          : 'bg-emerald-600/20 text-emerald-300 border border-emerald-500/40'
                      }`}>
                        {pIdx + 1}
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm sm:text-base flex items-center gap-2">
                          <span>{phase.phase}</span>
                          <span className="text-slate-400 font-normal text-xs">• {phase.title}</span>
                        </div>
                        <div className="text-xs text-slate-400">{phase.badge}</div>
                      </div>
                    </div>

                    <div className="text-xs font-semibold text-slate-400">
                      <span className={completedInPhase > 0 ? 'text-emerald-400 font-bold' : ''}>
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
                          className={`p-3.5 rounded-xl border transition-all ${
                            isDone
                              ? 'bg-emerald-950/10 border-emerald-500/20'
                              : 'bg-slate-800/40 border-slate-700/50 hover:border-slate-600'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <button
                              onClick={() => handleTaskClick(task.id)}
                              className="mt-0.5 text-slate-400 hover:text-emerald-400 transition-colors shrink-0"
                            >
                              {isDone ? (
                                <CheckCircle2 className="w-5 h-5 text-emerald-400 fill-emerald-950" />
                              ) : (
                                <Circle className="w-5 h-5 text-slate-500 hover:text-slate-300" />
                              )}
                            </button>

                            <div className="flex-1 cursor-pointer" onClick={() => toggleExpand(task.id)}>
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className={`text-xs sm:text-sm font-semibold ${
                                  isDone ? 'line-through text-slate-500' : 'text-slate-200'
                                }`}>
                                  {task.title}
                                </span>
                                <span className="px-1.5 py-0.5 text-[9px] font-bold bg-slate-700 text-slate-300 rounded">
                                  {task.timing}
                                </span>
                              </div>

                              <p className={`text-xs text-slate-400 mt-1 leading-relaxed ${
                                isExpanded ? '' : 'line-clamp-2'
                              }`}>
                                {task.desc}
                              </p>
                            </div>

                            <button
                              onClick={() => toggleExpand(task.id)}
                              className="text-slate-500 hover:text-slate-300 p-1"
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
