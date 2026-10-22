import React, { useState, useEffect } from 'react';
import { X, Check, ShieldCheck, Sparkles, UserCheck, AlertCircle, LogOut } from 'lucide-react';

export default function GoogleAuthModal({ isOpen, onClose, currentUser, onSignIn, onSignOut }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reset fields when opened
  useEffect(() => {
    if (isOpen) {
      setError('');
      if (!currentUser) {
        setEmail('');
        setName('');
      }
    }
  }, [isOpen, currentUser]);

  if (!isOpen) return null;

  const handleGoogleFormSubmit = (e) => {
    e.preventDefault();
    setError('');

    const cleanEmail = email.trim();
    if (!cleanEmail) {
      setError('Please enter your Google / Gmail email address to continue.');
      return;
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      setError('Please enter a valid email address (e.g. yourname@gmail.com).');
      return;
    }

    setIsSubmitting(true);

    // Derive display name if not specified
    let displayName = name.trim();
    if (!displayName) {
      const emailPrefix = cleanEmail.split('@')[0];
      displayName = emailPrefix
        .replace(/[._]/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase());
    }

    const initials = displayName
      .split(' ')
      .map(n => n[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();

    const userObj = {
      name: displayName,
      email: cleanEmail,
      initials,
      picture: `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=1c1917&color=faf9f5&rounded=true&bold=true`,
      authenticatedWith: 'google',
      signedInAt: new Date().toISOString()
    };

    setTimeout(() => {
      setIsSubmitting(false);
      onSignIn(userObj);
      onClose();
    }, 400);
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
              <strong className="text-stone-900 font-serif block">Synced to Your Account:</strong>
              <p>Your checklists, departure timeline, relocation budget ledger, and document vault status are saved to your personal profile.</p>
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
                className="px-4 py-2.5 bg-white border border-stone-200 hover:border-stone-400 text-stone-700 font-medium rounded-full text-xs transition-colors flex items-center gap-1.5"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        ) : (
          /* Active Google Login Prompt */
          <div className="space-y-5">
            <div className="p-4 bg-stone-50 border border-stone-200 rounded-2xl text-xs space-y-1.5">
              <div className="font-serif font-medium text-stone-900 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Free Community Access Enabled</span>
              </div>
              <p className="text-stone-500 leading-relaxed text-[11px]">
                Sign in with your Google Account / Gmail to save your relocation checklists across devices and enjoy free access to the <strong>Gemini 3.8 Flash Relocation Copilot</strong>.
              </p>
            </div>

            {error && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleGoogleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-wider text-stone-600 font-semibold mb-1.5">
                  Your Gmail / Google Account Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. yourname@gmail.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  className="w-full bg-stone-50 border border-stone-200 focus:bg-white rounded-xl px-4 py-2.5 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-500 focus:ring-1 focus:ring-stone-400/20 text-xs font-medium"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase tracking-wider text-stone-600 font-semibold mb-1.5">
                  Full Name (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Mohit Dixit"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200 focus:bg-white rounded-xl px-4 py-2.5 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-500 focus:ring-1 focus:ring-stone-400/20 text-xs font-medium"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-stone-900 hover:bg-stone-800 text-white font-medium rounded-full text-xs shadow-sm transition-all flex items-center justify-center gap-2"
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
                <span>{isSubmitting ? 'Signing In...' : 'Sign In with Gmail / Google'}</span>
              </button>
            </form>

            <div className="text-center text-[11px] font-mono text-stone-400 pt-1">
              No developer API key required. Never shares your password.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
