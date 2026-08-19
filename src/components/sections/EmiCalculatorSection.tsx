'use client';

import React, { useState, useId } from 'react';
import { Calculator, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface EmiCalculatorSectionProps {
  onOpenModal: (source: string) => void;
}

export default function EmiCalculatorSection({ onOpenModal }: EmiCalculatorSectionProps) {
  const propertySliderId = useId();
  const loanSliderId = useId();
  const tenureSliderId = useId();
  const rateSliderId = useId();

  const [propertyPrice, setPropertyPrice] = useState(5500000);
  const [loanAmount, setLoanAmount] = useState(4400000); // 80% default
  const [tenureYears, setTenureYears] = useState(20);
  const [interestRate, setInterestRate] = useState(8.5);

  // EMI Calculation: P * r * (1 + r)^n / ((1 + r)^n - 1)
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;
  const emi = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );

  const approxTaxSavingMonthly = 9500; // Tax benefit on interest under Sec 24(b)
  const effectiveMonthlyCost = Math.max(0, emi - approxTaxSavingMonthly);
  const estimatedRent = 20000;
  const netOwnershipDiff = effectiveMonthlyCost - estimatedRent;

  const handlePropertyChange = (val: number) => {
    setPropertyPrice(val);
    setLoanAmount(Math.round(val * 0.8));
  };

  const formatINR = (val: number) => {
    return '₹' + val.toLocaleString('en-IN');
  };

  return (
    <section id="calculator" className="py-20 sm:py-28 bg-chocolate/40 text-noir">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-caramel">
            Financial Studio
          </span>
          <h2 className="font-gumani text-3xl sm:text-4xl lg:text-5xl font-bold text-sienna leading-tight">
            The True Cost of <span className="italic text-caramel font-normal">Homeownership.</span>
          </h2>
          <p className="text-sm sm:text-base text-noir/70 font-light">
            Adjust loan parameters to see why owning a home at ORR Exit-5 creates immediate monthly equity instead of lost rent.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-white rounded-3xl p-6 sm:p-10 shadow-kura border border-chocolate-dark">
          {/* Left: Sliders */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-caramel mb-2">
              <Calculator className="w-4 h-4" />
              <span>Loan & Budget Parameters</span>
            </div>

            {/* Property Cost */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-sienna">
                <label htmlFor={propertySliderId}>Property Price</label>
                <span className="text-sm text-caramel">{formatINR(propertyPrice)}</span>
              </div>
              <input
                id={propertySliderId}
                type="range"
                min={5500000}
                max={15000000}
                step={100000}
                value={propertyPrice}
                onChange={(e) => handlePropertyChange(Number(e.target.value))}
              />
              <div className="flex justify-between text-[10px] text-noir/40">
                <span>₹55 Lakhs</span>
                <span>₹1.50 Crore</span>
              </div>
            </div>

            {/* Loan Amount */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-sienna">
                <label htmlFor={loanSliderId}>Loan Amount ({(loanAmount / propertyPrice * 100).toFixed(0)}%)</label>
                <span className="text-sm text-caramel">{formatINR(loanAmount)}</span>
              </div>
              <input
                id={loanSliderId}
                type="range"
                min={2000000}
                max={propertyPrice}
                step={50000}
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
              />
              <div className="flex justify-between text-[10px] text-noir/40">
                <span>₹20 Lakhs</span>
                <span>Max: {formatINR(propertyPrice)}</span>
              </div>
            </div>

            {/* Tenure & Interest Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-sienna">
                  <label htmlFor={tenureSliderId}>Loan Tenure</label>
                  <span className="text-sm text-caramel">{tenureYears} Years</span>
                </div>
                <input
                  id={tenureSliderId}
                  type="range"
                  min={5}
                  max={30}
                  step={1}
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                />
                <div className="flex justify-between text-[10px] text-noir/40">
                  <span>5 Yrs</span>
                  <span>30 Yrs</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-sienna">
                  <label htmlFor={rateSliderId}>Interest Rate</label>
                  <span className="text-sm text-caramel">{interestRate}% p.a.</span>
                </div>
                <input
                  id={rateSliderId}
                  type="range"
                  min={7.5}
                  max={11.5}
                  step={0.1}
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                />
                <div className="flex justify-between text-[10px] text-noir/40">
                  <span>7.5%</span>
                  <span>11.5%</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-chocolate/60 rounded-xl text-xs text-noir/70 leading-relaxed border border-chocolate-dark">
              <strong>Tax Benefit Note:</strong> Under the Old Tax Regime (Section 24b), home loan interest payments qualify for tax deductions up to ₹2 Lakhs per annum, translating into ~₹9,500/month in net tax savings.
            </div>
          </div>

          {/* Right: Output Breakdown */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 bg-sienna-dark rounded-2xl text-alabaster shadow-xl border border-white/10">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-caramel">
                  Monthly Outflow
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-gumani text-4xl sm:text-5xl font-bold text-white">
                    {formatINR(emi)}
                  </span>
                  <span className="text-xs text-alabaster/60">/month</span>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10 text-xs sm:text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-alabaster/70">Estimated Monthly EMI</span>
                  <span className="font-semibold text-white">{formatINR(emi)}</span>
                </div>
                <div className="flex items-center justify-between text-emerald">
                  <span>Less: Monthly Tax Benefit (Sec 24b)</span>
                  <span className="font-semibold">- {formatINR(approxTaxSavingMonthly)}</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-white/10 text-caramel font-bold">
                  <span>Effective Net Monthly Outflow</span>
                  <span className="font-gumani text-lg">{formatINR(effectiveMonthlyCost)}</span>
                </div>
              </div>

              {/* Rent vs Buy Callout */}
              <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-1 text-xs">
                <div className="flex items-center gap-1.5 text-caramel font-semibold">
                  <Sparkles className="w-4 h-4" />
                  <span>Rent vs Buy Reality</span>
                </div>
                <p className="text-alabaster/80 font-light">
                  Average 2 BHK rent in this corridor is <strong>{formatINR(estimatedRent)}/mo</strong>. For just{' '}
                  <strong className="text-emerald">+{formatINR(Math.max(0, netOwnershipDiff))}/mo</strong> extra, you build permanent homeownership equity.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10">
              <button
                onClick={() => onOpenModal('emi_calculator_cta')}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-caramel hover:bg-caramel-light text-white font-bold text-xs uppercase tracking-widest rounded-xl shadow-lg transition-all"
              >
                <span>Check Bank Loan Eligibility</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
