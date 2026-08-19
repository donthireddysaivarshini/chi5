'use client';

import React, { useState } from 'react';
import { Calculator, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

interface AffordabilityStudioSectionProps {
  onOpenLeadModal: (source: string, title?: string) => void;
}

export default function AffordabilityStudioSection({ onOpenLeadModal }: AffordabilityStudioSectionProps) {
  const [propertyPrice, setPropertyPrice] = useState(5900000);
  const [loanAmount, setLoanAmount] = useState(4720000);
  const [tenureYears, setTenureYears] = useState(20);
  const [interestRate, setInterestRate] = useState(7.95);
  const [activeScenario, setActiveScenario] = useState<'live' | 'rent'>('live');

  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;
  const grossEmi = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );

  const annualInterestPaid = loanAmount * (interestRate / 100);
  const monthlyInterest = annualInterestPaid / 12;
  const actualTaxSaving = Math.min(9500, Math.round(monthlyInterest * 0.312));
  const estimatedRental = 20000;

  const netOutgoLive = Math.max(0, grossEmi - actualTaxSaving);
  const netOutgoRent = Math.max(0, grossEmi - actualTaxSaving - estimatedRental);

  const formatINR = (val: number) => '₹' + Math.round(val).toLocaleString('en-IN');

  const handlePropertyChange = (val: number) => {
    setPropertyPrice(val);
    setLoanAmount(Math.round(val * 0.8));
  };

  return (
    <section
      id="calculators"
      className="min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-center py-12 lg:py-16 bg-white text-obsidian relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-2"
        >
          <span className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-bronze">
            Financial Studio
          </span>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-obsidian tracking-tight leading-[1.15]">
            The True Cost of <span className="italic text-bronze font-normal">Homeownership.</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm md:text-base text-charcoal-mute font-normal">
            Adjust the loan parameters to see why owning a home at ORR Exit-5 creates immediate monthly equity instead of lost rent.
          </p>
        </motion.div>

        {/* Unified Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 bg-slate-50 rounded-3xl p-5 sm:p-8 shadow-kura border border-zinc-border items-stretch"
        >
          {/* Left Column: Sliders */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-bronze">
              <Calculator className="w-4 h-4" />
              <span>Loan & Budget Parameters</span>
            </div>

            {/* Slider 1: Property Value */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between font-sans text-xs font-semibold text-obsidian">
                <span>Property Value</span>
                <span className="text-sm font-bold text-bronze">{formatINR(propertyPrice)}</span>
              </div>
              <input
                type="range"
                className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#BFA181]"
                min={5900000}
                max={15000000}
                step={100000}
                value={propertyPrice}
                style={{
                  background: `linear-gradient(to right, #BFA181 0%, #BFA181 ${((propertyPrice - 5900000) / (15000000 - 5900000)) * 100}%, #DFE3E8 ${((propertyPrice - 5900000) / (15000000 - 5900000)) * 100}%, #DFE3E8 100%)`,
                }}
                onChange={(e) => handlePropertyChange(Number(e.target.value))}
              />
              <div className="flex justify-between font-sans text-[10px] text-charcoal-mute/60">
                <span>₹59 Lakhs</span>
                <span>₹1.50 Crore</span>
              </div>
            </div>

            {/* Slider 2: Home Loan Amount */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between font-sans text-xs font-semibold text-obsidian">
                <span>Home Loan Amount ({(loanAmount / propertyPrice * 100).toFixed(0)}%)</span>
                <span className="text-sm font-bold text-bronze">{formatINR(loanAmount)}</span>
              </div>
              <input
                type="range"
                className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#BFA181]"
                min={2000000}
                max={propertyPrice}
                step={50000}
                value={loanAmount}
                style={{
                  background: `linear-gradient(to right, #BFA181 0%, #BFA181 ${Math.max(0, Math.min(100, ((loanAmount - 2000000) / (propertyPrice - 2000000)) * 100))}%, #DFE3E8 ${Math.max(0, Math.min(100, ((loanAmount - 2000000) / (propertyPrice - 2000000)) * 100))}%, #DFE3E8 100%)`,
                }}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
              />
              <div className="flex justify-between font-sans text-[10px] text-charcoal-mute/60">
                <span>₹20 Lakhs</span>
                <span>Max: {formatINR(propertyPrice)}</span>
              </div>
            </div>

            {/* Slider 3 & 4 Row: Tenure & Rate */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between font-sans text-xs font-semibold text-obsidian">
                  <span>Tenure</span>
                  <span className="text-sm font-bold text-bronze">{tenureYears} Years</span>
                </div>
                <input
                  type="range"
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#BFA181]"
                  min={5}
                  max={30}
                  step={1}
                  value={tenureYears}
                  style={{
                    background: `linear-gradient(to right, #BFA181 0%, #BFA181 ${((tenureYears - 5) / (30 - 5)) * 100}%, #DFE3E8 ${((tenureYears - 5) / (30 - 5)) * 100}%, #DFE3E8 100%)`,
                  }}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between font-sans text-xs font-semibold text-obsidian">
                  <span>Interest Rate</span>
                  <span className="text-sm font-bold text-bronze">{interestRate}%</span>
                </div>
                <input
                  type="range"
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#BFA181]"
                  min={6.5}
                  max={12.0}
                  step={0.05}
                  value={interestRate}
                  style={{
                    background: `linear-gradient(to right, #BFA181 0%, #BFA181 ${((interestRate - 6.5) / (12 - 6.5)) * 100}%, #DFE3E8 ${((interestRate - 6.5) / (12 - 6.5)) * 100}%, #DFE3E8 100%)`,
                  }}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                />
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => setActiveScenario('live')}
                className={`py-1.5 px-3 rounded-full text-xs font-sans font-bold transition-all ${
                  activeScenario === 'live'
                    ? 'bg-obsidian text-white shadow-md'
                    : 'bg-white text-obsidian/70 border border-zinc-border hover:bg-slate-100'
                }`}
              >
                Self-Occupied Scenario
              </button>
              <button
                onClick={() => setActiveScenario('rent')}
                className={`py-1.5 px-3 rounded-full text-xs font-sans font-bold transition-all ${
                  activeScenario === 'rent'
                    ? 'bg-obsidian text-white shadow-md'
                    : 'bg-white text-obsidian/70 border border-zinc-border hover:bg-slate-100'
                }`}
              >
                Investor Rental Scenario
              </button>
            </div>
          </div>

          {/* Right Column: Outgo Breakdown in Deep Slate Card */}
          <div className="lg:col-span-5 bg-obsidian text-alabaster rounded-2xl p-5 sm:p-6 flex flex-col justify-between space-y-4 border border-white/10 shadow-xl">
            <div>
              <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-bronze block">
                Net Monthly Outgo Breakdown
              </span>
              <div className="mt-1">
                <span className="font-display text-3xl sm:text-4xl font-bold text-white block">
                  {formatINR(activeScenario === 'live' ? netOutgoLive : netOutgoRent)}
                </span>
                <span className="font-sans text-xs text-alabaster/70">
                  {activeScenario === 'live' ? 'Effective monthly cost of owning' : 'Net investor cashflow requirement'}
                </span>
              </div>
            </div>

            <div className="space-y-2 pt-3 border-t border-white/15 font-sans text-xs">
              <div className="flex justify-between text-alabaster/80">
                <span>Gross Monthly EMI:</span>
                <span className="font-semibold text-alabaster">{formatINR(grossEmi)}</span>
              </div>
              <div className="flex justify-between text-emerald-400">
                <span>Tax Savings (Sec 24b max):</span>
                <span className="font-semibold">-{formatINR(actualTaxSaving)}</span>
              </div>
              {activeScenario === 'rent' && (
                <div className="flex justify-between text-amber-300">
                  <span>Estimated Rental Offset:</span>
                  <span className="font-semibold">-{formatINR(estimatedRental)}</span>
                </div>
              )}
            </div>

            <button
              onClick={() => onOpenLeadModal('calculator_cta', 'Get Customized Financial & Tax Breakdown')}
              className="w-full py-3 bg-bronze hover:bg-bronze-hover text-white font-sans font-bold text-xs uppercase tracking-widest rounded-xl shadow-lg hover:shadow-bronze-glow transition-all flex items-center justify-center gap-2"
            >
              <span>Get Loan Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
