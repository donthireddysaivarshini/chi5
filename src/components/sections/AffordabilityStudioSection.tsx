'use client';

import React, { useState } from 'react';
import { Calculator, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

interface AffordabilityStudioSectionProps {
  onOpenLeadModal: (source: string, title?: string) => void;
}

export default function AffordabilityStudioSection({ onOpenLeadModal }: AffordabilityStudioSectionProps) {
  const [propertyPrice, setPropertyPrice] = useState(5500000);
  const [loanAmount, setLoanAmount] = useState(4400000);
  const [tenureYears, setTenureYears] = useState(20);
  const [interestRate, setInterestRate] = useState(8.25);
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
    <motion.section
      id="calculators"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="py-20 sm:py-28 bg-[#EEE8DE]/40 text-[#1B1717]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-[#CE793A]">
            Financial Studio
          </span>
          <h2 className="font-display font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3A1C11] tracking-tight leading-[1.15]">
            The True Cost of <span className="italic text-[#CE793A] font-normal">Homeownership.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#5C4D44] font-normal">
            Adjust the loan parameters to see why owning a home at ORR Exit-5 creates immediate monthly equity instead of lost rent.
          </p>
        </div>

        {/* Unified Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 bg-white rounded-3xl p-6 sm:p-10 shadow-kura border border-[#EADECF] items-stretch">
          {/* Left Column: Sliders */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-[#CE793A]">
              <Calculator className="w-4 h-4" />
              <span>Loan & Budget Parameters</span>
            </div>

            {/* Slider 1: Property Value */}
            <div className="space-y-2">
              <div className="flex items-center justify-between font-sans text-xs font-semibold text-[#3A1C11]">
                <span>Property Value</span>
                <span className="text-sm font-bold text-[#CE793A]">{formatINR(propertyPrice)}</span>
              </div>
              <input
                type="range"
                className="w-full h-2 bg-[#E2D8CA] rounded-lg appearance-none cursor-pointer accent-[#CE793A]"
                min={5500000}
                max={15000000}
                step={100000}
                value={propertyPrice}
                onChange={(e) => handlePropertyChange(Number(e.target.value))}
              />
              <div className="flex justify-between font-sans text-[10px] text-[#5C4D44]/60">
                <span>₹55 Lakhs</span>
                <span>₹1.50 Crore</span>
              </div>
            </div>

            {/* Slider 2: Home Loan Amount */}
            <div className="space-y-2">
              <div className="flex items-center justify-between font-sans text-xs font-semibold text-[#3A1C11]">
                <span>Home Loan Amount ({(loanAmount / propertyPrice * 100).toFixed(0)}%)</span>
                <span className="text-sm font-bold text-[#CE793A]">{formatINR(loanAmount)}</span>
              </div>
              <input
                type="range"
                className="w-full h-2 bg-[#E2D8CA] rounded-lg appearance-none cursor-pointer accent-[#CE793A]"
                min={2000000}
                max={propertyPrice}
                step={50000}
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
              />
              <div className="flex justify-between font-sans text-[10px] text-[#5C4D44]/60">
                <span>₹20 Lakhs</span>
                <span>Max: {formatINR(propertyPrice)}</span>
              </div>
            </div>

            {/* Slider 3 & 4 Row: Tenure & Rate */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
              <div className="space-y-2">
                <div className="flex items-center justify-between font-sans text-xs font-semibold text-[#3A1C11]">
                  <span>Tenure</span>
                  <span className="text-sm font-bold text-[#CE793A]">{tenureYears} Years</span>
                </div>
                <input
                  type="range"
                  className="w-full h-2 bg-[#E2D8CA] rounded-lg appearance-none cursor-pointer accent-[#CE793A]"
                  min={5}
                  max={30}
                  step={1}
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between font-sans text-xs font-semibold text-[#3A1C11]">
                  <span>Interest Rate</span>
                  <span className="text-sm font-bold text-[#CE793A]">{interestRate}% p.a.</span>
                </div>
                <input
                  type="range"
                  className="w-full h-2 bg-[#E2D8CA] rounded-lg appearance-none cursor-pointer accent-[#CE793A]"
                  min={7.5}
                  max={12}
                  step={0.05}
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                />
              </div>
            </div>

            {/* Disclaimer Accordion */}
            <div className="p-4 bg-[#F5F3E6] rounded-2xl border border-[#EADECF] text-xs font-sans text-[#5C4D44] leading-relaxed space-y-1">
              <div className="flex items-center gap-1.5 text-[#3A1C11] font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#CE793A]" />
                <span>Tax Savings Note (Section 24b)</span>
              </div>
              <p className="font-normal text-[#5C4D44]">
                Under the Old Tax Regime, interest payments qualify for tax deductions up to ₹2 Lakhs per annum, saving up to ~₹9,500/month for 30% tax brackets.
              </p>
            </div>
          </div>

          {/* Right Column: Dark Summary Box with Shining High-Contrast White Text */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 bg-[#28120C] rounded-2xl text-[#F5F3E6] shadow-xl border border-white/10">
            <div className="space-y-6">
              {/* Live vs Rent Scenario Toggle */}
              <div className="grid grid-cols-2 gap-1.5 p-1 bg-white/10 rounded-xl">
                <button
                  onClick={() => setActiveScenario('live')}
                  className={`py-2 px-3 rounded-lg font-sans font-bold text-xs uppercase tracking-wider transition-all ${
                    activeScenario === 'live'
                      ? 'bg-[#CE793A] text-white shadow-md'
                      : 'text-[#E0D8CB] hover:text-white'
                  }`}
                >
                  Live Here
                </button>
                <button
                  onClick={() => setActiveScenario('rent')}
                  className={`py-2 px-3 rounded-lg font-sans font-bold text-xs uppercase tracking-wider transition-all ${
                    activeScenario === 'rent'
                      ? 'bg-[#CE793A] text-white shadow-md'
                      : 'text-[#E0D8CB] hover:text-white'
                  }`}
                >
                  Rent Out
                </button>
              </div>

              {/* Net Outgo Callout - CRISP WHITE ALABASTER */}
              <div>
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#CE793A] block">
                  {activeScenario === 'live' ? 'Net Monthly Cost of Ownership' : 'Net Monthly Cashflow Outflow'}
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-display font-serif text-4xl sm:text-5xl font-bold text-[#F5F3E6]">
                    {formatINR(activeScenario === 'live' ? netOutgoLive : netOutgoRent)}
                  </span>
                  <span className="font-sans text-xs text-[#E0D8CB]">/month</span>
                </div>
              </div>

              {/* Breakdown Rows */}
              <div className="space-y-2.5 pt-4 border-t border-white/10 font-sans text-xs sm:text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[#E0D8CB]">Gross Monthly EMI</span>
                  <span className="font-semibold text-[#F5F3E6]">{formatINR(grossEmi)}</span>
                </div>
                <div className="flex items-center justify-between text-emerald-400">
                  <span>Less: Section 24(b) Tax Benefit</span>
                  <span className="font-semibold">- {formatINR(actualTaxSaving)}</span>
                </div>
                {activeScenario === 'rent' && (
                  <div className="flex items-center justify-between text-emerald-400">
                    <span>Less: Estimated Rental Income</span>
                    <span className="font-semibold">- {formatINR(estimatedRental)}</span>
                  </div>
                )}
                <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[#CE793A] font-bold">
                  <span>Net Effective Outflow</span>
                  <span className="font-serif text-lg text-[#F5F3E6]">
                    {formatINR(activeScenario === 'live' ? netOutgoLive : netOutgoRent)}
                  </span>
                </div>
              </div>

              {/* Rent vs Buy Callout */}
              <div className="p-3.5 bg-white/5 rounded-xl border border-white/10 space-y-1 text-xs font-sans">
                <div className="flex items-center gap-1.5 text-[#CE793A] font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Rent vs Buy Reality</span>
                </div>
                <p className="text-[#D6CFC4] font-normal">
                  Average 2 BHK rent in this corridor is <strong className="text-[#F5F3E6]">₹20,000/mo</strong>. For just a small increment, you build permanent property equity.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10">
              <button
                onClick={() => onOpenLeadModal('calculator_emi_cta', 'Check Home Loan Eligibility & Bank Offers')}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#CE793A] hover:brightness-110 text-white font-sans font-bold text-xs uppercase tracking-widest rounded-xl shadow-lg transition-all"
              >
                <span>Check Bank Loan Eligibility</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
