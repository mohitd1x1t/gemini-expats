import React, { useState } from 'react';
import {
  CreditCard,
  Building2,
  DollarSign,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe2,
  AlertTriangle,
  Landmark,
  CheckCircle2,
  Sparkles,
  Info
} from 'lucide-react';
import {
  COUNTRY_TAX_ID_WORKAROUNDS,
  BOOTSTRAP_NEOBANKS,
  LOCAL_PAYMENT_RAILS,
  calculateRemittanceComparison
} from '../data/financialBootstrapData';

export default function CreditZeroGuide({ countryData, userProfile }) {
  const [remittanceAmount, setRemittanceAmount] = useState(2500);
  const [sourceCurrency, setSourceCurrency] = useState(countryData?.currency || 'EUR');
  const [targetCurrency, setTargetCurrency] = useState(userProfile.origin === 'Brazil' ? 'BRL' : 'INR');

  // Country tax ID workaround
  const taxIdInfo = COUNTRY_TAX_ID_WORKAROUNDS[countryData.id] || COUNTRY_TAX_ID_WORKAROUNDS.germany;
  const paymentRail = LOCAL_PAYMENT_RAILS[countryData.id] || LOCAL_PAYMENT_RAILS.germany;

  // Remittance comparison
  const remittanceComparison = calculateRemittanceComparison(
    remittanceAmount,
    sourceCurrency,
    targetCurrency
  );

  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div>
          <div className="flex items-center gap-2 text-stone-500 font-mono text-[10px] uppercase tracking-[0.22em] mb-1.5">
            <CreditCard className="w-3.5 h-3.5 text-terracotta-500" />
            <span>Financial Engineering & Day-1 Liquidity</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 tracking-tight font-normal">
            "Credit-Zero" Bootstrap & Remittance Optimizer
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-1 max-w-2xl">
            How to secure a local tax ID before lease signing, open no-address neo-banks, master instant local payment rails (PIX, Girocard, PayNow), and save up to 3% on foreign remittances.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-stone-50 px-4 py-2.5 rounded-2xl border border-stone-200 text-xs font-mono text-stone-700 shrink-0">
          <Zap className="w-4 h-4 text-amber-500" />
          <span>Local Rails: <strong>{paymentRail.systemName}</strong></span>
        </div>
      </div>

      {/* 1. Country Immediate Tax ID Workaround Card */}
      {taxIdInfo && (
        <div className="p-6 sm:p-7 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400">
                Official Identifier · {countryData.name}
              </span>
              <h3 className="font-serif text-xl text-stone-900 font-normal">
                {taxIdInfo.idName}
              </h3>
            </div>
            <span className="text-xs font-mono text-stone-600 bg-stone-50 px-3 py-1 rounded-full border border-stone-200 self-start sm:self-auto">
              Issued by {taxIdInfo.authority}
            </span>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-terracotta-600 font-sans">
              <Sparkles className="w-4 h-4" />
              <span>{taxIdInfo.bootstrapWorkaround.title}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-stone-600">
              {taxIdInfo.bootstrapWorkaround.steps.map((step, idx) => (
                <div key={idx} className="p-3.5 bg-stone-50 rounded-2xl border border-stone-200/80 space-y-1">
                  <span className="w-5 h-5 rounded-full bg-white text-stone-700 font-mono text-[10px] font-bold flex items-center justify-center border border-stone-200">
                    {idx + 1}
                  </span>
                  <p className="leading-relaxed pt-1">
                    {step}
                  </p>
                </div>
              ))}
            </div>

            {taxIdInfo.bootstrapWorkaround.warning && (
              <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 text-amber-900 text-xs flex items-center gap-2">
                <Info className="w-4 h-4 shrink-0 text-amber-700" />
                <span>{taxIdInfo.bootstrapWorkaround.warning}</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 2. Neo-Banks That Open WITHOUT a Permanent Registered Lease */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-lg text-stone-900 flex items-center gap-2">
            <Building2 className="w-4 h-4 text-stone-600" />
            <span>Digital Neo-Banks For Immediate Arrival Liquidity</span>
          </h3>
          <span className="text-xs font-mono text-stone-400">Open with temporary hotel or foreign address</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {BOOTSTRAP_NEOBANKS.map((bank) => (
            <div
              key={bank.name}
              className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-sm flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-stone-900 text-base">{bank.name}</div>
                  <span className="text-[10px] font-mono uppercase bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full">
                    {bank.regions[0]}
                  </span>
                </div>

                <div className="text-[11px] font-mono text-stone-500">
                  <strong>Proof of Address:</strong> {bank.acceptedProofOfAddress}
                </div>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {bank.keyAdvantages}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 text-[11px] font-mono text-terracotta-600">
                <strong>Best For:</strong> {bank.bestFor}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Instant Local Payment Rail Primer (PIX, UPI, Girocard, PayNow, iDEAL) */}
      <div className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-serif text-stone-900 text-lg">
            <Zap className="w-5 h-5 text-amber-500" />
            <span>Local Instant Payment Rail: {paymentRail.systemName} in {countryData.name}</span>
          </div>
          <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
            Everyday Essential
          </span>
        </div>

        <p className="text-xs text-stone-600 leading-relaxed">
          {paymentRail.howItWorks}
        </p>

        <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 text-xs text-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <strong>Cost:</strong> {paymentRail.fees}
          </div>
          <div className="text-stone-600 italic font-mono text-[11px]">
            💡 Pro-Tip: {paymentRail.expatProTip}
          </div>
        </div>
      </div>

      {/* 4. Remittance, FX Markup & Repatriation Optimizer */}
      <div className="p-6 sm:p-7 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 pb-4">
          <div>
            <div className="flex items-center gap-2 text-stone-500 font-mono text-[10px] uppercase tracking-[0.2em] mb-1">
              <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
              <span>Remittance & Hidden FX Markup Calculator</span>
            </div>
            <h3 className="font-serif text-xl text-stone-900 font-normal">
              Compare Bank SWIFT Wire vs. Mid-Market FinTech Transfer
            </h3>
          </div>

          {/* Transfer Amount Input */}
          <div className="flex items-center gap-2 bg-stone-50 border border-stone-200 rounded-2xl px-3 py-1.5 self-start sm:self-auto">
            <span className="text-xs font-mono font-bold text-stone-500">{sourceCurrency}</span>
            <input
              type="number"
              value={remittanceAmount}
              onChange={(e) => setRemittanceAmount(Math.max(100, Number(e.target.value) || 0))}
              step={250}
              className="bg-transparent font-mono text-sm font-bold text-stone-900 focus:outline-none w-24 text-right"
            />
            <span className="text-[10px] font-mono text-stone-400">➔ {targetCurrency}</span>
          </div>
        </div>

        {/* Side-by-Side Remittance Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Traditional Bank SWIFT */}
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-serif font-bold text-stone-900 text-sm">Traditional Bank SWIFT Wire</span>
              <span className="text-[10px] font-mono text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                2.8% Hidden FX Spread
              </span>
            </div>

            <div className="text-2xl font-mono font-extrabold text-stone-800">
              {targetCurrency} {remittanceComparison.traditionalBank.targetReceived.toLocaleString()}
            </div>

            <div className="text-xs text-stone-500 space-y-1 pt-2 border-t border-stone-200/60 font-mono text-[11px]">
              <div>• Fixed Outgoing Wire Fee: {sourceCurrency} {remittanceComparison.traditionalBank.fixedFee}</div>
              <div>• Effective Exchange Rate: 1 {sourceCurrency} ≈ {remittanceComparison.traditionalBank.effectiveRate} {targetCurrency}</div>
              <div>• Delivery Speed: {remittanceComparison.traditionalBank.deliveryTime}</div>
            </div>
          </div>

          {/* Wise / Modern FinTech */}
          <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-serif font-bold text-emerald-950 text-sm">Wise / Mid-Market FinTech</span>
              <span className="text-[10px] font-mono text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300">
                0% FX Markup Guaranteed
              </span>
            </div>

            <div className="text-2xl font-mono font-extrabold text-emerald-900">
              {targetCurrency} {remittanceComparison.wiseFintech.targetReceived.toLocaleString()}
            </div>

            <div className="text-xs text-stone-600 space-y-1 pt-2 border-t border-emerald-200 font-mono text-[11px]">
              <div>• Transparent Variable Fee: {sourceCurrency} {remittanceComparison.wiseFintech.transparentFee}</div>
              <div>• Exact Mid-Market Rate: 1 {sourceCurrency} = {remittanceComparison.wiseFintech.effectiveRate} {targetCurrency}</div>
              <div>• Delivery Speed: {remittanceComparison.wiseFintech.deliveryTime}</div>
            </div>
          </div>

        </div>

        {/* Savings Callout */}
        <div className="p-4 rounded-2xl bg-[#181325] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="space-y-0.5">
            <div className="text-terracotta-400 font-mono font-bold text-sm">
              +{targetCurrency} {remittanceComparison.extraMoneyInPocket.toLocaleString()} Extra Money in Your Account
            </div>
            <p className="text-stone-300">
              By avoiding the hidden 2.8% spread on a {sourceCurrency} {remittanceAmount.toLocaleString()} transfer, you keep ~{remittanceComparison.percentSaved}% more cash.
            </p>
          </div>
          <span className="text-[10px] font-mono uppercase px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 shrink-0 self-start sm:self-auto">
            Annual Savings: ~{targetCurrency} {(remittanceComparison.extraMoneyInPocket * 12).toLocaleString()}
          </span>
        </div>

      </div>

    </div>
  );
}
