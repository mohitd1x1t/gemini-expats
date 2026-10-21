import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, Sparkles, User, RefreshCw, Copy, Check, MessageSquare } from 'lucide-react';
import { sendChatMessage } from '../utils/geminiService';

export default function GeminiCopilot({ userProfile, countryData, apiKey }) {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: `Hello! I am your **ExpatCompass Relocation Copilot**, powered by Gemini 3.8 Flash.

I have your active profile loaded:
- Moving: **${userProfile.origin} ➔ ${userProfile.destinationCity}, ${countryData.name}**
- Travel Party: **${userProfile.persona.replace('_', ' ').toUpperCase()}**
- Dietary Preference: **${userProfile.dietary.toUpperCase()}**
- Faith: **${userProfile.faith ? userProfile.faith.toUpperCase() : 'Secular'}**

How can I help you plan your transition today? You can ask about visas, rental contracts, doctor visits, vegetarian/halal spots, or child schooling!`
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [copiedIdx, setCopiedIdx] = useState(null);
  const messagesEndRef = useRef(null);

  const samplePrompts = [
    `Best neighborhoods in ${userProfile.destinationCity} for a ${userProfile.persona.replace('_', ' ')}?`,
    `How does the city registration process work in ${countryData.name}?`,
    `Where can I buy vegetarian/halal groceries in ${userProfile.destinationCity}?`,
    `What are the typical embassy interview questions for my visa?`,
    `How to avoid rental scams when looking for a flat in ${countryData.name}?`
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleSend = async (userText) => {
    const textToSend = userText || input;
    if (!textToSend.trim() || loading) return;

    const newMessages = [...messages, { role: 'user', content: textToSend.trim() }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await sendChatMessage(newMessages, userProfile, apiKey);
      setMessages([...newMessages, { role: 'assistant', content: res.reply }]);
    } catch (err) {
      setMessages([
        ...newMessages,
        {
          role: 'assistant',
          content: `⚠️ Note: I encountered an issue reaching the AI service (${err.message}). You can still browse our built-in curated guides in the tabs above, or verify your API key in Settings.`
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const copyMessage = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 1500);
  };

  const clearChat = () => {
    setMessages([
      {
        role: 'assistant',
        content: `Chat cleared. Ready for your relocation questions regarding **${userProfile.destinationCity}, ${countryData.name}**!`
      }
    ]);
  };

  return (
    <div className="space-y-4 animate-fadeIn">
      {/* Header */}
      <div className="p-6 rounded-3xl bg-slate-800/40 border border-slate-700/60 backdrop-blur-md flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" />
            Gemini 3.8 Flash Assistant
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white">
            Personal Relocation Copilot
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Ask any question about local culture, paperwork, schooling, or dietary rules in {userProfile.destinationCity}.
          </p>
        </div>

        <button
          onClick={clearChat}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 self-start sm:self-center transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Reset Chat</span>
        </button>
      </div>

      {/* Suggested Prompt Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        <span className="text-slate-500 shrink-0 font-medium">Suggestions:</span>
        {samplePrompts.map((prompt, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(prompt)}
            className="px-3 py-1.5 rounded-full bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 text-slate-300 hover:text-white shrink-0 transition-colors"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Chat Container */}
      <div className="rounded-3xl bg-slate-900/80 border border-slate-800 flex flex-col h-[520px] overflow-hidden shadow-2xl">
        {/* Messages Scroll Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {messages.map((m, idx) => {
            const isUser = m.role === 'user';
            return (
              <div
                key={idx}
                className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
              >
                {!isUser && (
                  <div className="w-8 h-8 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed relative group ${
                    isUser
                      ? 'bg-indigo-600 text-white rounded-tr-none'
                      : 'bg-slate-800/70 border border-slate-700/60 text-slate-200 rounded-tl-none whitespace-pre-wrap'
                  }`}
                >
                  <div>{m.content}</div>

                  {!isUser && (
                    <button
                      onClick={() => copyMessage(m.content, idx)}
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 p-1 text-slate-400 hover:text-white transition-opacity"
                      title="Copy response"
                    >
                      {copiedIdx === idx ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  )}
                </div>

                {isUser && (
                  <div className="w-8 h-8 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 mt-0.5 text-slate-300">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}

          {loading && (
            <div className="flex gap-3 items-center">
              <div className="w-8 h-8 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4 animate-spin-slow" />
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-800/70 border border-slate-700/60 text-slate-400 text-xs flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
                <span>Gemini 3.8 Flash is analyzing relocation requirements...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-3 sm:p-4 bg-slate-950/60 border-t border-slate-800 flex items-center gap-2">
          <input
            type="text"
            placeholder={`Ask anything about moving to ${userProfile.destinationCity}...`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSend();
            }}
            className="flex-1 bg-slate-800/80 border border-slate-700/80 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-indigo-500"
          />
          <button
            onClick={() => handleSend()}
            disabled={loading || !input.trim()}
            className="p-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white shadow-md shadow-indigo-600/30 transition-all shrink-0"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
