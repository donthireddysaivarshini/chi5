'use client';

import React, { useState } from 'react';

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
  const taxSavings = 9500;
  const rentIncome = 20000;
  const netOutgoLive = Math.max(0, grossEmi - taxSavings);
  const netOutgoRent = Math.max(0, grossEmi - taxSavings - rentIncome);

  const formatINR = (val: number) => '₹' + val.toLocaleString('en-IN');

  const handlePropertySlider = (val: number) => {
    setPropertyPrice(val);
    setLoanAmount(Math.round(val * 0.8));
  };

  return (
    <section className="section affordability-studio" id="calculators">
      <div className="container">
        <div className="section-header text-center">
          <span className="tag font-figtree font-bold uppercase tracking-widest text-caramel">Financial Studio</span>
          <h2 className="font-gumani font-bold text-sienna">The True Cost of Homeownership</h2>
          <p className="font-figtree font-normal text-noir/70" style={{ margin: '0 auto' }}>
            Adjust the calculators to see why buying a home here can cost less than paying rent.
          </p>
        </div>

        <div className="studio-card">
          <div className="studio-sliders">
            <h3 className="font-gumani font-bold text-sienna text-2xl" style={{ marginBottom: '24px' }}>Adjust Loan Parameters</h3>

            {/* Slider 1 */}
            <div className="slider-group">
              <div className="slider-lbl-row font-figtree font-semibold text-sienna">
                <span>Property Value</span>
                <span className="text-caramel font-bold">{formatINR(propertyPrice)}</span>
              </div>
              <input
                type="range"
                className="calc-slider"
                min={5500000}
                max={15000000}
                step={100000}
                value={propertyPrice}
                onChange={(e) => handlePropertySlider(Number(e.target.value))}
              />
            </div>

            {/* Slider 2 */}
            <div className="slider-group">
              <div className="slider-lbl-row font-figtree font-semibold text-sienna">
                <span>Home Loan Amount</span>
                <span className="text-caramel font-bold">{formatINR(loanAmount)}</span>
              </div>
              <input
                type="range"
                className="calc-slider"
                min={2000000}
                max={propertyPrice}
                step={50000}
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
              />
            </div>

            {/* Slider 3 */}
            <div className="slider-group">
              <div className="slider-lbl-row font-figtree font-semibold text-sienna">
                <span>Tenure (Years)</span>
                <span className="text-caramel font-bold">{tenureYears} Years</span>
              </div>
              <input
                type="range"
                className="calc-slider"
                min={5}
                max={30}
                step={1}
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
              />
            </div>

            {/* Slider 4 */}
            <div className="slider-group">
              <div className="slider-lbl-row font-figtree font-semibold text-sienna">
                <span>Interest Rate</span>
                <span className="text-caramel font-bold">{interestRate}%</span>
              </div>
              <input
                type="range"
                className="calc-slider"
                min={7}
                max={12}
                step={0.05}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
              />
            </div>

            {/* Accordion Disclaimer */}
            <div className="calc-disclaimer">
              <details>
                <summary className="font-figtree font-semibold text-sienna cursor-pointer">Calculation Assumptions & Tax Benefits</summary>
                <p className="font-figtree font-normal text-noir/70 leading-relaxed text-xs">
                  Calculations assume interest computed monthly on reducing balance. Old Tax Regime Section 24(b)
                  deduction applies to interest paid up to ₹2,00,000 annually, yielding a net monthly tax saving of up
                  to ₹9,500 for tax brackets of 30%+ surcharge. Rental estimate of ₹20,000 is based on typical 2 BHK
                  lease rates in Bowrampet-Dundigal corridor. Consult a CA for advice tailored to your tax profile.
                </p>
              </details>
            </div>
          </div>

          <div className="studio-output">
            <div className="toggle-scenarios">
              <button
                className={`toggle-btn font-figtree font-bold ${activeScenario === 'live' ? 'active' : ''}`}
                onClick={() => setActiveScenario('live')}
              >
                Live Here (Owner Occupied)
              </button>
              <button
                className={`toggle-btn font-figtree font-bold ${activeScenario === 'rent' ? 'active' : ''}`}
                onClick={() => setActiveScenario('rent')}
              >
                Smart Investment (Rent Out)
              </button>
            </div>

            <div className="outgo-display">
              <span className="outgo-lbl font-figtree font-medium">
                {activeScenario === 'live' ? 'Net Monthly Cost of Ownership' : 'Net Monthly Cashflow Outflow'}
              </span>
              <span className="outgo-val font-gumani font-bold text-white">
                {formatINR(activeScenario === 'live' ? netOutgoLive : netOutgoRent)}
              </span>
            </div>

            <div className="calc-breakdown-rows font-figtree">
              <div className="calc-row">
                <span>Gross Monthly EMI</span>
                <span className="font-bold">{formatINR(grossEmi)}</span>
              </div>
              <div className="calc-row">
                <span>Old Regime Sec 24(b) Savings</span>
                <span className="text-emerald font-bold">- ₹9,500</span>
              </div>
              {activeScenario === 'rent' && (
                <div className="calc-row">
                  <span>Estimated Rental Income</span>
                  <span className="text-emerald font-bold">- ₹20,000</span>
                </div>
              )}
              <div className="calc-row net-row">
                <span>Net Outgo / Month</span>
                <span className="font-gumani font-bold text-caramel">{formatINR(activeScenario === 'live' ? netOutgoLive : netOutgoRent)}</span>
              </div>
            </div>

            <button
              className="btn btn-secondary font-figtree font-bold"
              style={{ borderColor: 'var(--color-secondary)', color: 'var(--color-secondary)', marginTop: 'auto' }}
              onClick={() => onOpenLeadModal('calculator_emi_cta', 'Check Home Loan Eligibility & Bank Offers')}
            >
              Check Eligibility Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
