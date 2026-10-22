import React, { useState } from 'react';
import { X, Check, ShieldCheck, Sparkles, UserCheck } from 'lucide-react';

export default function GoogleAuthModal({ isOpen, onClose, currentUser, onSignIn, onSignOut }) {
  const [mockEmail, setMockEmail] = useState('');
  const [mockName, setMockName] = useState('');

  if (!isOpen) return null;

  const handleSimulatedGoogleSignIn = (e) => {
    e.preventDefault();
    const name = mockName.trim() || 'Alex Mercer';
    const email = mockEmail.trim() || 'alex.mercer@gmail.com';
    const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();

    const userObj = {
      name,
      email,
      initials,
      picture: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=1c1917&color=faf9f5&rounded=true&bold=true`,
      authenticatedWith: 'google',
      signedInAt: new Date().toISOString()
    };

    onSignIn(userObj);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/40 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md bg-white border border-stone-200 rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-stone-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-stone-50 border border-stone-200 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-400">Google Authentication</div>
              <h3 className="text-xl font-serif text-stone-900">Sign in with Google</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {currentUser ? (
          /* Already Signed In */
          <div className="space-y-5">
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/90 flex items-center gap-3.5">
              <img
                src={currentUser.picture}
                alt={currentUser.name}
                className="w-12 h-12 rounded-full border border-stone-200 shrink-0"
              />
              <div className="text-xs">
                <div className="font-serif font-medium text-stone-900 text-sm">{currentUser.name}</div>
                <div className="font-mono text-stone-500">{currentUser.email}</div>
                <div className="flex items-center gap-1.5 text-emerald-700 font-mono text-[10px] mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>Google Account Linked • Free Copilot Active</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-stone-50/70 rounded-2xl border border-stone-200 text-xs text-stone-600 space-y-1 leading-relaxed">
              <strong className="text-stone-900 font-serif block">Synced Capabilities:</strong>
              <p>Your checklists, customized departure timeline, relocation budget ledger, and document vault status are saved to your personal profile.</p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={onClose}
                className="flex-1 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-medium rounded-full text-xs transition-colors"
              >
                Keep Logged In
              </button>
              <button
                onClick={() => {
                  onSignOut();
                  onClose();
                }}
                className="px-4 py-2.5 bg-white border border-stone-200 hover:border-stone-400 text-stone-700 font-medium rounded-full text-xs transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          /* Sign In Form */
          <div className="space-y-5">
            <div className="p-4 bg-stone-50 border border-stone-200 rounded-2xl text-xs space-y-1.5">
              <div className="font-serif font-medium text-stone-900 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-stone-700" />
                <span>Zero API Key Required</span>
              </div>
              <p className="text-stone-500 leading-relaxed text-[11px]">
                Signing in with Google activates full, unrestricted access to the **Gemini 3.8 Flash Relocation Copilot** backed by our free server tier, and syncs your checklists across devices.
              </p>
            </div>

            {/* Quick One-Click Google Button */}
            <button
              onClick={handleSimulatedGoogleSignIn}
              className="w-full py-3 bg-white hover:bg-stone-50 border border-stone-300 hover:border-stone-500 text-stone-800 font-medium rounded-full text-xs shadow-sm transition-all flex items-center justify-center gap-3"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Continue with Google</span>
            </button>

            <div className="relative text-center">
              <span className="bg-white px-3 text-[10px] font-mono uppercase tracking-wider text-stone-400 relative z-10">or personalize account</span>
              <div className="absolute inset-x-0 top-1/2 border-t border-stone-100" />
            </div>

            <form onSubmit={handleSimulatedGoogleSignIn} className="space-y-3">
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-wider text-stone-500 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Mohit Dixit"
                  value={mockName}
                  onChange={(e) => setMockName(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-500 text-xs"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase tracking-wider text-stone-500 mb-1">
                  Google Email
                </label>
                <input
                  type="email"
                  placeholder="name@gmail.com"
                  value={mockEmail}
                  onChange={(e) => setMockEmail(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-500 text-xs"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-medium rounded-full text-xs transition-colors"
              >
                Sign In & Unlock Free AI Copilot
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
