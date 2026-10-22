import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, Sparkles, User, RefreshCw, Copy, Check, ShieldCheck } from 'lucide-react';
import { sendChatMessage } from '../utils/geminiService';

export default function GeminiCopilot({ userProfile, countryData, apiKey, currentUser }) {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: `Hello! I am your ExpatCompass Relocation Copilot, powered by Gemini 3.8 Flash.

I have your active itinerary loaded:
• Route: ${userProfile.origin} ➔ ${userProfile.destinationCity}, ${countryData.name}
• Travel Party: ${userProfile.persona.replace('_', ' ').toUpperCase()}
• Dietary Preference: ${userProfile.dietary.toUpperCase()}
• Faith: ${userProfile.faith ? userProfile.faith.toUpperCase() : 'Secular'}

How can I assist your relocation planning today? Inquire about visa interviews, lease agreements, pediatric registrations, or local neighborhoods!`
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [copiedIdx, setCopiedIdx] = useState(null);
  const messagesEndRef = useRef(null);

  const samplePrompts = [
    `Best neighborhoods in ${userProfile.destinationCity} for a ${userProfile.persona.replace('_', ' ')}?`,
    `How does the city registration process work in ${countryData.name}?`,
    `Where can I buy vegetarian groceries in ${userProfile.destinationCity}?`,
    `What are typical visa interview questions for my pathway?`,
    `How to avoid rental scams when apartment hunting in ${countryData.name}?`
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
          content: `Note: Unable to reach the AI reasoning service (${err.message}). You can continue exploring our curated country modules above, or check your connection.`
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
        content: `Chat session reset. Ready to answer your questions regarding ${userProfile.destinationCity}, ${countryData.name}!`
      }
    ]);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
        <div>
          <div className="flex items-center gap-2 text-stone-500 font-mono text-[10px] uppercase tracking-[0.22em] mb-1.5">
            <Sparkles className="w-3.5 h-3.5 text-stone-700" />
            <span>Gemini 3.8 Flash Relocation Copilot</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 tracking-tight font-normal">
            Editorial AI Advisor for <em className="italic font-serif">{userProfile.destinationCity}</em>
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Real-time advisory on municipal bureaucracy, school registrations, and cultural nuances in {countryData.name}.
          </p>
        </div>

        <div className="flex items-center gap-3 self-start sm:self-center">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-[11px] font-mono text-emerald-800">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
            <span>Free Tier Active</span>
          </div>
          <button
            onClick={clearChat}
            className="flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-medium bg-stone-50 hover:bg-stone-100 text-stone-700 border border-stone-200 transition-colors"
          >
            <RefreshCw className="w-3 h-3 text-stone-500" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Suggested Prompt Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 shrink-0">Prompts:</span>
        {samplePrompts.map((prompt, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(prompt)}
            className="px-3.5 py-1.5 rounded-full bg-white hover:bg-stone-50 border border-stone-200/90 text-stone-600 hover:text-stone-900 hover:border-stone-400 text-xs shrink-0 transition-colors shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Chat Container */}
      <div className="rounded-3xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col h-[540px] overflow-hidden">
        {/* Top Info Strip */}
        <div className="px-5 py-2.5 bg-stone-50/70 border-b border-stone-100 flex items-center justify-between text-[11px] font-mono text-stone-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-stone-600" />
            <span>Zero API Key Required • Powered by Gemini 3.8 Flash</span>
          </div>
          {currentUser ? (
            <span className="text-stone-700 font-medium">Logged in as {currentUser.name.split(' ')[0]}</span>
          ) : (
            <span className="text-stone-400">Guest Access</span>
          )}
        </div>

        {/* Messages Scroll Area */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-4 bg-[#fcfbf9]/60">
          {messages.map((m, idx) => {
            const isUser = m.role === 'user';
            return (
              <div
                key={idx}
                className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
              >
                {!isUser && (
                  <div className="w-7 h-7 rounded-full bg-stone-100 border border-stone-200 text-stone-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed relative group ${
                    isUser
                      ? 'bg-stone-900 text-white rounded-tr-none'
                      : 'bg-white border border-stone-200/90 text-stone-800 rounded-tl-none shadow-[0_1px_2px_rgba(0,0,0,0.02)] whitespace-pre-wrap'
                  }`}
                >
                  <div>{m.content}</div>

                  {!isUser && (
                    <button
                      onClick={() => copyMessage(m.content, idx)}
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 p-1 text-stone-400 hover:text-stone-700 transition-opacity"
                      title="Copy response"
                    >
                      {copiedIdx === idx ? <Check className="w-3.5 h-3.5 text-stone-900" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  )}
                </div>

                {isUser && (
                  <div className="w-7 h-7 rounded-full bg-stone-900 text-white flex items-center justify-center shrink-0 mt-0.5">
                    {currentUser ? (
                      <img src={currentUser.picture} alt="" className="w-7 h-7 rounded-full" />
                    ) : (
                      <User className="w-3.5 h-3.5" />
                    )}
                  </div>
                )}
              </div>
            );
          })}

          {loading && (
            <div className="flex gap-3 items-center">
              <div className="w-7 h-7 rounded-full bg-stone-100 border border-stone-200 text-stone-800 flex items-center justify-center shrink-0">
                <Bot className="w-3.5 h-3.5 animate-spin" />
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-stone-200 text-stone-500 text-xs flex items-center gap-2 shadow-[0_1px_2px_rgba(0,0,0,0.02)] font-mono">
                <div className="w-1.5 h-1.5 rounded-full bg-stone-900 animate-ping" />
                <span>Synthesizing relocation guidance with Gemini 3.8 Flash...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-3.5 sm:p-4 bg-white border-t border-stone-200/90 flex items-center gap-2">
          <input
            type="text"
            placeholder={`Ask anything regarding moving to ${userProfile.destinationCity}...`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSend();
            }}
            className="flex-1 bg-stone-50 border border-stone-200 rounded-full px-4 py-2.5 text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:border-stone-500 focus:ring-1 focus:ring-stone-400/20"
          />
          <button
            onClick={() => handleSend()}
            disabled={loading || !input.trim()}
            className="p-2.5 rounded-full bg-stone-900 hover:bg-stone-800 disabled:opacity-40 text-white transition-all shrink-0"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
