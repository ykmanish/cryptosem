"use client";
import { useState, useMemo } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend, LineChart, Line, CartesianGrid
} from "recharts";

const TCS_THRESHOLD = 1_000_000; // ₹10,00,000
const TCS_RATE = 5;              // 5% only on amount ABOVE ₹10L

const fmt = (val) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency", currency: "INR", maximumFractionDigits: 2,
  }).format(val);

const fmtEur = (val) =>
  new Intl.NumberFormat("en-DE", {
    style: "currency", currency: "EUR", maximumFractionDigits: 4,
  }).format(val);

const fmtNum = (val, d = 4) => Number(val).toFixed(d);

const PIE_COLORS = ["#86efac", "#fca5a5", "#c4b5fd", "#fed7aa", "#bae6fd"];
const BAR_COLORS = ["#93c5fd", "#6ee7b7", "#fde68a", "#f9a8d4"];

function InputCard({ label, value, onChange, placeholder, unit, bg, emoji, hint, readOnly, autoTag }) {
  return (
    <div className={`${bg} newq rounded-3xl p-5`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-2xl">{emoji}</span>
        {autoTag && (
          <span className="text-xs font-bold bg-emerald-200 text-emerald-700 newq rounded-full px-2 py-0.5">AUTO</span>
        )}
      </div>
      <label className="newq block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">{label}</label>
      {hint && <p className="newq text-xs text-gray-400 mb-2">{hint}</p>}
      <div className={`flex items-center gap-2 rounded-2xl px-4 py-3 ${readOnly ? "bg-emerald-50 border border-emerald-200" : "bg-white"}`}>
        <span className="newq text-gray-400 font-semibold text-sm shrink-0">{unit}</span>
        <input
          type="number"
          value={value}
          onChange={(e) => onChange && onChange(e.target.value)}
          placeholder={placeholder}
          readOnly={readOnly}
          className={`newq flex-1 outline-none font-bold text-lg bg-transparent w-full ${readOnly ? "text-emerald-700 cursor-not-allowed" : "text-gray-800"}`}
        />
      </div>
      {readOnly && (
        <p className="newq text-xs text-emerald-600 font-semibold mt-2">⚡ Auto-calculated from EUR rate</p>
      )}
    </div>
  );
}

function StatCard({ label, value, bg, emoji, sub, highlight }) {
  return (
    <div className={`${bg} newq rounded-3xl p-5 ${highlight ? "ring-2 ring-emerald-400" : ""}`}>
      <div className="text-xl mb-1">{emoji}</div>
      <p className="newq text-xs font-bold text-gray-500 uppercase tracking-widest">{label}</p>
      <p className="newq text-xl font-black text-gray-800 mt-1 leading-tight">{value}</p>
      {sub && <p className="newq text-xs text-gray-500 mt-1">{sub}</p>}
    </div>
  );
}

function FlowStep({ icon, label, sub, active }) {
  return (
    <div className={`flex flex-col items-center gap-1 ${active ? "opacity-100" : "opacity-40"}`}>
      <div className={`w-12 h-12 ${active ? "bg-white" : "bg-gray-100"} rounded-2xl flex items-center justify-center text-xl`}>
        {icon}
      </div>
      <p className="newq text-xs font-bold text-gray-700 text-center">{label}</p>
      <p className="newq text-xs text-gray-400 text-center">{sub}</p>
    </div>
  );
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="newq bg-white rounded-2xl p-3 border border-gray-100">
        <p className="newq text-xs font-bold text-gray-500">{label}</p>
        {payload.map((p, i) => (
          <p key={i} className="newq text-sm font-black text-gray-800">
            {typeof p.value === "number" && p.value > 100 ? fmt(p.value) : fmtNum(p.value, 2)}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function ArbiFlow() {
  const [inrSent, setInrSent] = useState("");
  const [eurRate, setEurRate] = useState("");
  const [eurReceivedManual, setEurReceivedManual] = useState("");
  const [usdtPriceEur, setUsdtPriceEur] = useState("");
  const [inrSellRate, setInrSellRate] = useState("");
  const [daysPerMonth, setDaysPerMonth] = useState("");
  const [remitChargeFixed, setRemitChargeFixed] = useState("");
  const [remitChargePct, setRemitChargePct] = useState("");
  const [estoniaTaxRate] = useState(20);
  const [indiaTaxRate] = useState(30);

  const isAutoEur = parseFloat(eurRate) > 0 && parseFloat(inrSent) > 0;
  const autoEurValue = isAutoEur
    ? (parseFloat(inrSent) / parseFloat(eurRate)).toFixed(4)
    : "";

  const c = useMemo(() => {
    const inr = parseFloat(inrSent) || 0;
    const rate = parseFloat(eurRate) || 0;
    const eur = rate > 0 && inr > 0
      ? inr / rate
      : parseFloat(eurReceivedManual) || 0;
    const usdtPrice = parseFloat(usdtPriceEur) || 0;
    const sellRate = parseFloat(inrSellRate) || 0;
    const days = parseFloat(daysPerMonth) || 0;

    // Remittance charges
    const remitFixed = parseFloat(remitChargeFixed) || 0;
    const remitPct = parseFloat(remitChargePct) || 0;
    const remitPctAmount = inr > 0 ? (inr * remitPct) / 100 : 0;
    const totalRemitCharge = remitFixed + remitPctAmount;
    const hasRemitCharge = totalRemitCharge > 0;

    // ✅ FIXED TCS — 5% only on the portion ABOVE ₹10L, first ₹10L always free
    const taxableRemit = Math.max(0, inr - TCS_THRESHOLD); // e.g. ₹40L → ₹30L taxable
    const tcsAmount = (taxableRemit * TCS_RATE) / 100;     // ₹30L × 5% = ₹1.5L
    const hasTCS = tcsAmount > 0;
    const tcsRatio = inr > 0 ? (tcsAmount / inr) * 100 : 0;
    const remainingBeforeTCS = Math.max(0, TCS_THRESHOLD - inr);

    const usdtBought = usdtPrice > 0 ? eur / usdtPrice : 0;
    const inrReceived = usdtBought * sellRate;

    const grossProfitBeforeCharge = inrReceived - inr;
    const grossProfit = grossProfitBeforeCharge - totalRemitCharge - tcsAmount;

    const estTax = grossProfit > 0 ? grossProfit * (estoniaTaxRate / 100) : 0;
    const afterEst = grossProfit - estTax;
    const indTax = afterEst > 0 ? afterEst * (indiaTaxRate / 100) : 0;
    const netProfit = afterEst - indTax;
    const totalTax = estTax + indTax;

    const roi = inr > 0 ? (grossProfitBeforeCharge / inr) * 100 : 0;
    const netRoi = inr > 0 ? (netProfit / inr) * 100 : 0;
    const effTaxRate = grossProfit > 0 ? (totalTax / grossProfit) * 100 : 0;
    const remitChargeRatio = inr > 0 ? (totalRemitCharge / inr) * 100 : 0;

    const monthly = (v) => v * days;
    const yearly  = (v) => v * days * 12;

    return {
      inr, eur, usdtPrice, sellRate, days,
      usdtBought, inrReceived,
      grossProfitBeforeCharge, grossProfit,
      remitFixed, remitPct, remitPctAmount,
      totalRemitCharge, hasRemitCharge, remitChargeRatio,
      // ✅ TCS fields
      tcsAmount, hasTCS, tcsRatio,
      taxableRemit,           // portion above ₹10L
      remainingBeforeTCS,     // headroom left
      estTax, afterEst, indTax, netProfit, totalTax,
      roi, netRoi, effTaxRate,
      // Monthly
      mGross: monthly(grossProfit),
      mEstTax: monthly(estTax),
      mAfterEst: monthly(afterEst),
      mIndTax: monthly(indTax),
      mNet: monthly(netProfit),
      mTotalTax: monthly(totalTax),
      mRemitCharge: monthly(totalRemitCharge),
      mTCS: monthly(tcsAmount),
      // Yearly
      yGross: yearly(grossProfit),
      yEstTax: yearly(estTax),
      yAfterEst: yearly(afterEst),
      yIndTax: yearly(indTax),
      yNet: yearly(netProfit),
      yTotalTax: yearly(totalTax),
      yRemitCharge: yearly(totalRemitCharge),
      yTCS: yearly(tcsAmount),
      yDays: days * 12,
      hasData: inr > 0 && eur > 0 && usdtPrice > 0 && sellRate > 0,
    };
  }, [inrSent, eurRate, eurReceivedManual, usdtPriceEur, inrSellRate, daysPerMonth,
      remitChargeFixed, remitChargePct, estoniaTaxRate, indiaTaxRate]);

  const barData = [
    { name: "INR Sent", value: c.inr },
    { name: "INR Received", value: c.inrReceived },
    { name: "Gross Profit", value: Math.max(0, c.grossProfit) },
    { name: "Net Profit", value: Math.max(0, c.netProfit) },
  ];

  const pieData = c.grossProfit > 0
    ? [
        { name: "Net Profit", value: Math.max(0, c.netProfit) },
        { name: `Estonia Tax (${estoniaTaxRate}%)`, value: c.estTax },
        { name: `India Tax (${indiaTaxRate}%)`, value: c.indTax },
        ...(c.hasRemitCharge ? [{ name: "Remit Charges", value: c.totalRemitCharge }] : []),
        ...(c.hasTCS ? [{ name: "TCS (5% on excess)", value: c.tcsAmount }] : []),
      ]
    : [];

  const monthlyBarData = [
    { name: "Gross", value: Math.max(0, c.mGross) },
    { name: "After Estonia", value: Math.max(0, c.mAfterEst) },
    { name: "After India", value: Math.max(0, c.mNet) },
  ];

  const yearlyBarData = [
    { name: "Gross", value: Math.max(0, c.yGross) },
    { name: "After Estonia", value: Math.max(0, c.yAfterEst) },
    { name: "After India", value: Math.max(0, c.yNet) },
  ];

  const projectionData = c.hasData && c.days > 0
    ? Array.from({ length: Math.min(30, c.days) }, (_, i) => ({
        day: `Day ${i + 1}`,
        cumulative: (i + 1) * c.netProfit,
      }))
    : [];

  const yearlyProjectionData = c.hasData && c.days > 0
    ? Array.from({ length: 12 }, (_, i) => ({
        month: `M${i + 1}`,
        cumulative: (i + 1) * c.mNet,
        gross: (i + 1) * c.mGross,
      }))
    : [];

  const activeSteps = [c.inr > 0, c.eur > 0, c.usdtBought > 0, c.inrReceived > 0];

  return (
    <div className="newq min-h-screen bg-gray-50" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* Sticky Header */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-2xl flex items-center justify-center text-xl">💱</div>
            <div>
              <h1 className="newq text-lg font-black text-gray-900">ArbiFlow</h1>
              <p className="newq text-xs text-gray-400">INR → EUR → USDT → INR Calculator</p>
            </div>
          </div>
          {c.hasData && (
            <div className="bg-emerald-100 rounded-2xl px-4 py-2 text-center">
              <p className="newq text-xs text-gray-500 font-semibold">Net ROI</p>
              <p className="newq text-lg font-black text-emerald-700">{c.netRoi.toFixed(2)}%</p>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">

        {/* Flow Visualizer */}
        <div className="bg-blue-50 rounded-3xl p-6">
          <h2 className="newq text-sm font-black text-gray-500 uppercase tracking-widest mb-5">Transaction Flow</h2>
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <FlowStep icon="🇮🇳" label="Remit INR" sub="India Bank" active={activeSteps[0]} />
            <div className="flex-1 h-0.5 bg-blue-200 rounded min-w-4" />
            <FlowStep icon="🏦" label="EUR Received" sub="EU Bank" active={activeSteps[1]} />
            <div className="flex-1 h-0.5 bg-blue-200 rounded min-w-4" />
            <FlowStep icon="🪙" label="Buy USDT" sub="Binance" active={activeSteps[2]} />
            <div className="flex-1 h-0.5 bg-blue-200 rounded min-w-4" />
            <FlowStep icon="💰" label="Sell USDT" sub="INR Market" active={activeSteps[3]} />
            <div className="flex-1 h-0.5 bg-blue-200 rounded min-w-4" />
            <FlowStep icon="🎯" label="Net Profit" sub="After Tax" active={c.netProfit > 0} />
          </div>
          {c.hasData && (
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-white rounded-2xl p-3 text-center">
                <p className="newq text-xs text-gray-400 font-semibold">Sent</p>
                <p className="newq text-sm font-black text-gray-800">{fmt(c.inr)}</p>
              </div>
              <div className="bg-white rounded-2xl p-3 text-center">
                <p className="newq text-xs text-gray-400 font-semibold">EUR Received</p>
                <p className="newq text-sm font-black text-gray-800">{fmtEur(c.eur)}</p>
                {isAutoEur && <p className="newq text-xs text-emerald-500 font-bold">⚡ Auto</p>}
              </div>
              <div className="bg-white rounded-2xl p-3 text-center">
                <p className="newq text-xs text-gray-400 font-semibold">USDT Bought</p>
                <p className="newq text-sm font-black text-gray-800">{fmtNum(c.usdtBought, 2)} USDT</p>
              </div>
              <div className="bg-white rounded-2xl p-3 text-center">
                <p className="newq text-xs text-gray-400 font-semibold">INR Back</p>
                <p className="newq text-sm font-black text-gray-800">{fmt(c.inrReceived)}</p>
              </div>
            </div>
          )}
        </div>

        {/* Inputs */}
        <div>
          <h2 className="newq text-sm font-black text-gray-500 uppercase tracking-widest mb-4">📥 Enter Details</h2>
          <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-5 mb-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-2xl flex items-center justify-center text-xl shrink-0">⚡</div>
              <div className="flex-1">
                <p className="newq text-sm font-black text-emerald-800 mb-1">EUR Exchange Rate (Optional Auto-Fill)</p>
                <p className="newq text-xs text-emerald-600 mb-3">
                  Enter today's INR → EUR rate (e.g. 90 means ₹90 = €1). EUR Received will be auto-calculated. Leave blank to enter EUR manually.
                </p>
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="flex items-center gap-2 bg-white rounded-2xl px-4 py-3 flex-1 min-w-48">
                    <span className="newq text-gray-400 font-semibold text-sm shrink-0">₹ per €1</span>
                    <input
                      type="number"
                      value={eurRate}
                      onChange={(e) => setEurRate(e.target.value)}
                      placeholder="e.g. 90.5"
                      className="newq flex-1 outline-none text-gray-800 font-bold text-lg bg-transparent"
                    />
                  </div>
                  {isAutoEur && (
                    <div className="bg-emerald-100 rounded-2xl px-4 py-3 flex items-center gap-2">
                      <span className="newq text-emerald-700 font-black text-sm">€ {parseFloat(autoEurValue).toFixed(2)} auto-filled</span>
                      <span className="text-emerald-500">✅</span>
                    </div>
                  )}
                  {eurRate && !isAutoEur && (
                    <div className="bg-yellow-100 rounded-2xl px-4 py-3">
                      <span className="newq text-yellow-700 font-bold text-xs">Enter INR Sent first to auto-calculate</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <InputCard label="INR Remitted to Europe" value={inrSent} onChange={setInrSent} placeholder="500000" unit="₹" bg="bg-blue-100" emoji="🇮🇳" hint="Principal amount sent" />
            <InputCard
              label="EUR Received in Bank"
              value={isAutoEur ? autoEurValue : eurReceivedManual}
              onChange={isAutoEur ? null : setEurReceivedManual}
              placeholder="5500" unit="€" bg="bg-green-100" emoji="🏦"
              hint={isAutoEur ? `= ₹${inrSent} ÷ ₹${eurRate}/€` : "After remittance fees"}
              readOnly={isAutoEur} autoTag={isAutoEur}
            />
            <InputCard label="USDT Price in EUR" value={usdtPriceEur} onChange={setUsdtPriceEur} placeholder="0.92" unit="€/USDT" bg="bg-yellow-100" emoji="🪙" hint="Binance EUR/USDT rate" />
            <InputCard label="INR Selling Rate per USDT" value={inrSellRate} onChange={setInrSellRate} placeholder="88" unit="₹/USDT" bg="bg-pink-100" emoji="💱" hint="P2P or exchange rate" />
            <InputCard label="Trading Days per Month" value={daysPerMonth} onChange={setDaysPerMonth} placeholder="20" unit="days" bg="bg-purple-100" emoji="📅" hint="Days you run this cycle" />
          </div>
        </div>

        {/* Remittance Charges */}
        <div>
          <h2 className="newq text-sm font-black text-gray-500 uppercase tracking-widest mb-4">🏧 Remittance Charges</h2>
          <div className="bg-amber-50 border border-amber-100 rounded-3xl p-5">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 bg-amber-100 rounded-2xl flex items-center justify-center text-xl shrink-0">💸</div>
              <div>
                <p className="newq text-sm font-black text-amber-800 mb-1">Bank / Transfer Fees (Optional)</p>
                <p className="newq text-xs text-amber-600">Fixed wire fee + percentage markup charged by your bank or remittance provider. Deducted from gross profit automatically.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-4">
                <label className="newq block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Fixed Fee</label>
                <p className="newq text-xs text-gray-400 mb-3">Flat bank/SWIFT/wire charge per transaction</p>
                <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-2.5">
                  <span className="newq text-gray-400 font-semibold text-sm shrink-0">₹</span>
                  <input type="number" value={remitChargeFixed} onChange={(e) => setRemitChargeFixed(e.target.value)} placeholder="e.g. 500" className="newq flex-1 outline-none text-gray-800 font-bold text-lg bg-transparent" />
                </div>
                <p className="newq text-xs text-gray-400 mt-2">Examples: SWIFT fee ₹250–₹1500</p>
              </div>
              <div className="bg-white rounded-2xl p-4">
                <label className="newq block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Percentage Markup</label>
                <p className="newq text-xs text-gray-400 mb-3">Forex conversion margin on INR amount</p>
                <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-2.5">
                  <span className="newq text-gray-400 font-semibold text-sm shrink-0">%</span>
                  <input type="number" value={remitChargePct} onChange={(e) => setRemitChargePct(e.target.value)} placeholder="e.g. 0.5" className="newq flex-1 outline-none text-gray-800 font-bold text-lg bg-transparent" />
                </div>
                <p className="newq text-xs text-gray-400 mt-2">Examples: Wise ~0.4%, bank markup 0.5–2%</p>
              </div>
            </div>
            {c.hasData && c.hasRemitCharge && (
              <div className="mt-4 bg-amber-100 rounded-2xl p-4">
                <p className="newq text-xs font-black text-amber-700 uppercase tracking-widest mb-3">📊 Charge Breakdown (Per Transaction)</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {c.remitFixed > 0 && (
                    <div className="bg-white rounded-xl p-3 text-center">
                      <p className="newq text-xs text-gray-400 font-semibold">Fixed Fee</p>
                      <p className="newq text-sm font-black text-amber-700">{fmt(c.remitFixed)}</p>
                    </div>
                  )}
                  {c.remitPct > 0 && (
                    <div className="bg-white rounded-xl p-3 text-center">
                      <p className="newq text-xs text-gray-400 font-semibold">% Markup ({c.remitPct}%)</p>
                      <p className="newq text-sm font-black text-amber-700">{fmt(c.remitPctAmount)}</p>
                    </div>
                  )}
                  <div className="bg-white rounded-xl p-3 text-center">
                    <p className="newq text-xs text-gray-400 font-semibold">Total Charge</p>
                    <p className="newq text-sm font-black text-red-500">{fmt(c.totalRemitCharge)}</p>
                  </div>
                  <div className="bg-white rounded-xl p-3 text-center">
                    <p className="newq text-xs text-gray-400 font-semibold">Cost Ratio</p>
                    <p className="newq text-sm font-black text-orange-600">{c.remitChargeRatio.toFixed(3)}%</p>
                    <p className="newq text-xs text-gray-400">of principal</p>
                  </div>
                </div>
              </div>
            )}
            {c.hasData && !c.hasRemitCharge && (
              <div className="mt-3 flex items-center gap-2">
                <span className="text-sm">💡</span>
                <p className="newq text-xs text-amber-600">No charges entered — add charges above to see their impact on profit.</p>
              </div>
            )}
          </div>
        </div>

        {/* ✅ TCS Section — fixed: 5% only on amount ABOVE ₹10L */}
        {c.inr > 0 && (
          <div>
            <h2 className="newq text-sm font-black text-gray-500 uppercase tracking-widest mb-4">🏦 TCS — Tax Collected at Source (LRS)</h2>
            <div className={`rounded-3xl p-6 border ${c.hasTCS ? "bg-sky-50 border-sky-200" : "bg-green-50 border-green-200"}`}>
              <div className="flex items-start gap-4">
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap mb-2">
                    <h3 className="newq font-black text-gray-800 text-base">
                      {c.hasTCS ? "TCS Applicable — Excess Above ₹10L" : "No TCS — Within ₹10L Free Limit"}
                    </h3>
                    <span className={`text-xs font-black px-3 py-1 rounded-full ${c.hasTCS ? "bg-sky-200 text-sky-700" : "bg-green-200 text-green-700"}`}>
                      {c.hasTCS ? `TCS =
                       ${fmt(c.tcsAmount)}` : "₹0 TCS"}
                    </span>
                  </div>

                  {/* ✅ Clear rule explanation */}
                  <div className="bg-white rounded-2xl p-4 mb-4">
                    <p className="newq text-xs font-black text-gray-500 uppercase tracking-widest mb-3">📋 How TCS is Calculated (LRS Rule)</p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-xs font-black text-green-700 shrink-0 mt-0.5">1</div>
                        <p className="newq text-xs text-gray-600">
                          First <strong>₹10,00,000</strong> of any remittance → <strong className="text-green-600">₹0 TCS (completely free)</strong>
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center text-xs font-black text-sky-700 shrink-0 mt-0.5">2</div>
                        <p className="newq text-xs text-gray-600">
                          Amount <strong>above ₹10L</strong> → <strong className="text-sky-600">5% TCS on the excess only</strong>
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-violet-100 rounded-full flex items-center justify-center text-xs font-black text-violet-700 shrink-0 mt-0.5">3</div>
                        <p className="newq text-xs text-gray-600">
                          Example: ₹40L sent → ₹10L free + ₹30L taxable → TCS = ₹30L × 5% = <strong>₹1,50,000</strong>
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center text-xs font-black text-amber-700 shrink-0 mt-0.5">4</div>
                        <p className="newq text-xs text-gray-600">
                          TCS is collected by your bank at source — <strong className="text-amber-600">fully refundable</strong> when you file your ITR.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Progress meter */}
                  <div className="bg-white rounded-2xl p-4 mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="newq text-xs font-black text-gray-500 uppercase">LRS Threshold Meter</span>
                      <span className="newq text-xs font-bold text-gray-400">Free limit: {fmt(TCS_THRESHOLD)}</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden flex">
                      {/* Green portion — up to ₹10L */}
                      <div
                        className="h-4 bg-green-400 transition-all duration-500"
                        style={{ width: `${Math.min((Math.min(c.inr, TCS_THRESHOLD) / TCS_THRESHOLD) * 100, 100)}%` }}
                      />
                      {/* Sky blue portion — above ₹10L */}
                      {c.hasTCS && (
                        <div
                          className="h-4 bg-sky-400 transition-all duration-500"
                          style={{ width: `${Math.min((c.taxableRemit / TCS_THRESHOLD) * 100, 100)}%` }}
                        />
                      )}
                    </div>
                    <div className="flex justify-between mt-2 text-xs">
                      <span className="newq text-green-600 font-bold">🟢 Free: {fmt(Math.min(c.inr, TCS_THRESHOLD))}</span>
                      {c.hasTCS
                        ? <span className="newq text-sky-600 font-bold">🔵 Taxable: {fmt(c.taxableRemit)}</span>
                        : <span className="newq text-green-500 font-semibold">💚 {fmt(c.remainingBeforeTCS)} more before TCS</span>
                      }
                    </div>
                  </div>

                  {/* TCS calculation breakdown — only when applicable */}
                  {c.hasTCS && (
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                      <div className="bg-white rounded-2xl p-4 text-center">
                        <p className="newq text-xs text-gray-400 font-bold uppercase">Total Sent</p>
                        <p className="newq text-base font-black text-gray-800">{fmt(c.inr)}</p>
                      </div>
                      <div className="bg-green-100 rounded-2xl p-4 text-center">
                        <p className="newq text-xs text-green-600 font-bold uppercase">Free (₹10L)</p>
                        <p className="newq text-base font-black text-green-700">{fmt(TCS_THRESHOLD)}</p>
                        <p className="newq text-xs text-green-500 mt-1">No TCS</p>
                      </div>
                      <div className="bg-sky-100 rounded-2xl p-4 text-center">
                        <p className="newq text-xs text-sky-600 font-bold uppercase">Taxable Excess</p>
                        <p className="newq text-base font-black text-sky-700">{fmt(c.taxableRemit)}</p>
                        <p className="newq text-xs text-sky-500 mt-1">{fmt(c.inr)} − ₹10L</p>
                      </div>
                      <div className="bg-sky-200 rounded-2xl p-4 text-center">
                        <p className="newq text-xs text-sky-700 font-bold uppercase">TCS @ 5%</p>
                        <p className="newq text-base font-black text-sky-800">- {fmt(c.tcsAmount)}</p>
                        <p className="newq text-xs text-sky-500 mt-1">Refundable via ITR</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Monthly + Yearly TCS cost */}
              {c.hasTCS && c.days > 0 && (
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-4">
                    <p className="newq text-xs font-black text-gray-400 uppercase tracking-widest mb-3">📅 Monthly TCS ({c.days} days)</p>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="newq text-gray-500">TCS per trade</span>
                        <span className="newq font-bold text-gray-700">{fmt(c.tcsAmount)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="newq text-gray-500">Taxable per trade</span>
                        <span className="newq font-bold text-sky-600">{fmt(c.taxableRemit)}</span>
                      </div>
                      <div className="border-t border-gray-100 pt-1 flex justify-between font-black">
                        <span className="newq text-gray-600">Monthly TCS Total</span>
                        <span className="newq text-sky-600">{fmt(c.mTCS)}</span>
                      </div>
                    </div>
                    <p className="newq text-xs text-sky-500 mt-2 font-semibold">⚡ Fully refundable via ITR</p>
                  </div>
                  <div className="bg-white rounded-2xl p-4">
                    <p className="newq text-xs font-black text-gray-400 uppercase tracking-widest mb-3">🗓️ Yearly TCS ({c.yDays} days)</p>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="newq text-gray-500">TCS per trade</span>
                        <span className="newq font-bold text-gray-700">{fmt(c.tcsAmount)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="newq text-gray-500">Taxable per trade</span>
                        <span className="newq font-bold text-sky-600">{fmt(c.taxableRemit)}</span>
                      </div>
                      <div className="border-t border-gray-100 pt-1 flex justify-between font-black">
                        <span className="newq text-gray-600">Yearly TCS Total</span>
                        <span className="newq text-sky-600">{fmt(c.yTCS)}</span>
                      </div>
                    </div>
                    <p className="newq text-xs text-sky-500 mt-2 font-semibold">⚡ Fully refundable via ITR</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Per Transaction Results */}
        {c.hasData && (
          <>
            <div>
              <h2 className="newq text-sm font-black text-gray-500 uppercase tracking-widest mb-4">📊 Per Transaction Breakdown</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                <StatCard label="Principal Invested" value={fmt(c.inr)} bg="bg-blue-100" emoji="💼" sub="INR sent to Europe" />
                <StatCard label="USDT Bought" value={`${fmtNum(c.usdtBought, 2)} USDT`} bg="bg-yellow-100" emoji="🪙" sub={`@ ${fmtEur(c.usdtPrice)} per USDT`} />
                <StatCard label="INR Received" value={fmt(c.inrReceived)} bg="bg-green-100" emoji="💵" sub="From selling USDT" />
                {c.hasRemitCharge && (
                  <StatCard label="Remittance Charges" value={fmt(c.totalRemitCharge)} bg="bg-amber-100" emoji="🏧" sub={`${c.remitChargeRatio.toFixed(3)}% of principal`} />
                )}
                {c.hasTCS && (
                  <StatCard label="TCS (5% on excess)" value={fmt(c.tcsAmount)} bg="bg-sky-100" emoji="🔵" sub={`On ${fmt(c.taxableRemit)} above ₹10L`} />
                )}
                <StatCard
                  label="Gross Profit"
                  value={fmt(c.grossProfit)}
                  bg={c.grossProfit >= 0 ? "bg-teal-100" : "bg-red-100"}
                  emoji={c.grossProfit >= 0 ? "📈" : "📉"}
                  sub={`Pre-charge ROI: ${c.roi.toFixed(2)}%`}
                />
                <StatCard label="Estonia Tax (20%)" value={fmt(c.estTax)} bg="bg-orange-100" emoji="🇪🇪" sub="On gross profit" />
                <StatCard label="After Estonia Tax" value={fmt(c.afterEst)} bg="bg-lime-100" emoji="✅" />
                <StatCard label="India Tax (30%)" value={fmt(c.indTax)} bg="bg-red-100" emoji="🇮🇳" sub="Section 115BBH" />
                <StatCard
                  label="Net Profit"
                  value={fmt(c.netProfit)}
                  bg={c.netProfit >= 0 ? "bg-emerald-100" : "bg-red-200"}
                  emoji="🎯"
                  sub={`Net ROI: ${c.netRoi.toFixed(2)}%`}
                  highlight={c.netProfit > 0}
                />
              </div>
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="bg-white rounded-3xl p-6 border border-gray-100">
                <h3 className="newq font-black text-gray-800 mb-1">💹 INR Flow</h3>
                <p className="newq text-xs text-gray-400 mb-4">Sent vs Received vs Profit</p>
                <ResponsiveContainer width="100%" height={240}>
                  <BarChart data={barData} barCategoryGap="30%">
                    <XAxis dataKey="name" tick={{ fontSize: 10, fontWeight: 700 }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 10 }} axisLine={false} tickLine={false} tickFormatter={(v) => `₹${(v / 1000).toFixed(0)}k`} />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="value" radius={[10, 10, 0, 0]}>
                      {barData.map((_, i) => <Cell key={i} fill={BAR_COLORS[i]} />)}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {c.grossProfit > 0 && pieData.length > 0 && (
                <div className="bg-white rounded-3xl p-6 border border-gray-100">
                  <h3 className="newq font-black text-gray-800 mb-1">🍩 Profit Distribution</h3>
                  <p className="newq text-xs text-gray-400 mb-4">
                    Net vs Taxes{c.hasRemitCharge ? " vs Remit" : ""}{c.hasTCS ? " vs TCS" : ""}
                  </p>
                  <ResponsiveContainer width="100%" height={240}>
                    <PieChart>
                      <Pie data={pieData} cx="50%" cy="50%" innerRadius={60} outerRadius={90} dataKey="value" paddingAngle={3}>
                        {pieData.map((_, i) => <Cell key={i} fill={PIE_COLORS[i]} />)}
                      </Pie>
                      <Tooltip formatter={(v) => fmt(v)} />
                      <Legend wrapperStyle={{ fontSize: 11, fontWeight: 700 }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              )}
            </div>

            {/* Tax Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-orange-50 rounded-3xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-2xl">🇪🇪</div>
                  <div>
                    <h3 className="newq font-black text-gray-800">Estonia Tax</h3>
                    <p className="newq text-xs text-gray-500">Corporate / Personal Income Tax</p>
                  </div>
                  <div className="ml-auto bg-orange-200 rounded-2xl px-3 py-1">
                    <span className="newq text-xl font-black text-orange-600">20%</span>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-3 space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="newq text-gray-500">Gross Profit</span>
                    <span className="newq font-bold text-gray-800">{fmt(c.grossProfit)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="newq text-gray-500">Tax (20%)</span>
                    <span className="newq font-bold text-red-500">- {fmt(c.estTax)}</span>
                  </div>
                  <div className="border-t border-gray-100 pt-1 flex justify-between text-sm">
                    <span className="newq text-gray-500 font-bold">After Tax</span>
                    <span className="newq font-black text-gray-800">{fmt(c.afterEst)}</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-3xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-2xl">🇮🇳</div>
                  <div>
                    <h3 className="newq font-black text-gray-800">India Tax</h3>
                    <p className="newq text-xs text-gray-500">Section 115BBH — VDA Tax</p>
                  </div>
                  <div className="ml-auto bg-green-200 rounded-2xl px-3 py-1">
                    <span className="newq text-xl font-black text-green-700">30%</span>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-3 space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="newq text-gray-500">After Estonia Tax</span>
                    <span className="newq font-bold text-gray-800">{fmt(c.afterEst)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="newq text-gray-500">Tax (30%)</span>
                    <span className="newq font-bold text-red-500">- {fmt(c.indTax)}</span>
                  </div>
                  <div className="border-t border-gray-100 pt-1 flex justify-between text-sm">
                    <span className="newq font-bold text-gray-500">Net Profit</span>
                    <span className="newq font-black text-emerald-700">{fmt(c.netProfit)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Remittance Charges Paid */}
            {c.hasRemitCharge && (
              <div className="bg-amber-50 rounded-3xl p-6">
                <h3 className="newq font-black text-gray-800 mb-1">🏧 Remittance Charges Paid</h3>
                <p className="newq text-xs text-gray-400 mb-4">Deducted before tax calculations</p>
                <div className="bg-white rounded-2xl p-4 mb-4">
                  <p className="newq text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Per Transaction</p>
                  <div className="space-y-2">
                    {c.remitFixed > 0 && (
                      <div className="flex justify-between text-sm items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-amber-400" />
                          <span className="newq text-gray-500">Fixed Wire / SWIFT Fee</span>
                        </div>
                        <span className="newq font-bold text-gray-800">{fmt(c.remitFixed)}</span>
                      </div>
                    )}
                    {c.remitPct > 0 && (
                      <div className="flex justify-between text-sm items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-orange-400" />
                          <span className="newq text-gray-500">Forex Markup ({c.remitPct}% of {fmt(c.inr)})</span>
                        </div>
                        <span className="newq font-bold text-gray-800">{fmt(c.remitPctAmount)}</span>
                      </div>
                    )}
                    <div className="border-t border-gray-100 pt-2 flex justify-between text-sm">
                      <span className="newq font-black text-gray-600">Total Charge (1 trade)</span>
                      <span className="newq font-black text-red-500">{fmt(c.totalRemitCharge)}</span>
                    </div>
                  </div>
                </div>
                {c.days > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white rounded-2xl p-4">
                      <p className="newq text-xs font-black text-gray-400 uppercase tracking-widest mb-2">📅 Monthly ({c.days} days)</p>
                      <div className="flex justify-between text-sm border-t border-gray-100 pt-2">
                        <span className="newq font-black text-gray-600">Monthly Total</span>
                        <span className="newq font-black text-red-500">{fmt(c.mRemitCharge)}</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl p-4">
                      <p className="newq text-xs font-black text-gray-400 uppercase tracking-widest mb-2">🗓️ Yearly ({c.yDays} days)</p>
                      <div className="flex justify-between text-sm border-t border-gray-100 pt-2">
                        <span className="newq font-black text-gray-600">Yearly Total</span>
                        <span className="newq font-black text-red-500">{fmt(c.yRemitCharge)}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Full Cost Summary */}
            <div className="bg-violet-50 rounded-3xl p-6">
              <h3 className="newq font-black text-gray-800 mb-4">🧾 Full Cost Summary (Per Trade)</h3>
              <div className="bg-white rounded-2xl p-4 mb-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="newq text-gray-500">Raw Spread (INR Received − Sent)</span>
                  <span className="newq font-bold text-gray-800">{fmt(c.grossProfitBeforeCharge)}</span>
                </div>
                {c.hasRemitCharge && (
                  <div className="flex justify-between text-sm">
                    <span className="newq text-gray-500">Less: Remittance Charges</span>
                    <span className="newq font-bold text-amber-600">- {fmt(c.totalRemitCharge)}</span>
                  </div>
                )}
                {c.hasTCS && (
                  <>
                    <div className="flex justify-between text-sm">
                      <span className="newq text-gray-500">Less: TCS @ 5% on {fmt(c.taxableRemit)} (above ₹10L)</span>
                      <span className="newq font-bold text-sky-600">- {fmt(c.tcsAmount)}</span>
                    </div>
                    <div className="flex justify-between text-xs pl-2">
                      <span className="newq text-gray-400">Free ₹10L + Taxable {fmt(c.taxableRemit)} × 5%</span>
                      <span className="newq text-sky-400 font-semibold">Refundable</span>
                    </div>
                  </>
                )}
                <div className="flex justify-between text-sm border-t border-gray-100 pt-2">
                  <span className="newq font-bold text-gray-600">Gross Profit (before income tax)</span>
                  <span className="newq font-black text-teal-700">{fmt(c.grossProfit)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="newq text-gray-500">Less: Estonia Tax (20%)</span>
                  <span className="newq font-bold text-orange-500">- {fmt(c.estTax)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="newq text-gray-500">Less: India Tax 115BBH (30%)</span>
                  <span className="newq font-bold text-red-500">- {fmt(c.indTax)}</span>
                </div>
                <div className="flex justify-between text-sm border-t border-gray-100 pt-2">
                  <span className="newq font-black text-gray-700">Net Profit</span>
                  <span className="newq font-black text-emerald-700">{fmt(c.netProfit)}</span>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {c.hasRemitCharge && (
                  <div className="bg-white rounded-2xl p-4 text-center">
                    <p className="newq text-xs text-gray-400 font-bold uppercase">Remit Charges</p>
                    <p className="newq text-lg font-black text-amber-500 mt-1">{fmt(c.totalRemitCharge)}</p>
                  </div>
                )}
                {c.hasTCS && (
                  <div className="bg-white rounded-2xl p-4 text-center">
                    <p className="newq text-xs text-gray-400 font-bold uppercase">TCS Paid</p>
                    <p className="newq text-lg font-black text-sky-500 mt-1">{fmt(c.tcsAmount)}</p>
                    <p className="newq text-xs text-sky-400 font-semibold">Refundable</p>
                  </div>
                )}
                <div className="bg-white rounded-2xl p-4 text-center">
                  <p className="newq text-xs text-gray-400 font-bold uppercase">Total Tax</p>
                  <p className="newq text-lg font-black text-red-500 mt-1">{fmt(c.totalTax)}</p>
                </div>
                <div className="bg-white rounded-2xl p-4 text-center">
                  <p className="newq text-xs text-gray-400 font-bold uppercase">Effective Tax Rate</p>
                  <p className="newq text-lg font-black text-orange-500 mt-1">{c.effTaxRate.toFixed(1)}%</p>
                </div>
                <div className="bg-white rounded-2xl p-4 text-center">
                  <p className="newq text-xs text-gray-400 font-bold uppercase">Net Profit</p>
                  <p className="newq text-lg font-black text-emerald-600 mt-1">{fmt(c.netProfit)}</p>
                </div>
                <div className="bg-white rounded-2xl p-4 text-center">
                  <p className="newq text-xs text-gray-400 font-bold uppercase">Net ROI</p>
                  <p className="newq text-lg font-black text-blue-600 mt-1">{c.netRoi.toFixed(2)}%</p>
                </div>
              </div>
            </div>

            {/* Monthly Projection */}
            {c.days > 0 && (
              <div>
                <h2 className="newq text-sm font-black text-gray-500 uppercase tracking-widest mb-4">
                  📆 Monthly Projection ({c.days} trading days)
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
                  <StatCard label="Monthly Gross" value={fmt(c.mGross)} bg="bg-teal-100" emoji="📊" />
                  {c.hasRemitCharge && (
                    <StatCard label="Remit Charges (month)" value={fmt(c.mRemitCharge)} bg="bg-amber-100" emoji="🏧" sub={`${c.days} × ${fmt(c.totalRemitCharge)}`} />
                  )}
                  {c.hasTCS && (
                    <StatCard label="TCS (month)" value={fmt(c.mTCS)} bg="bg-sky-100" emoji="🔵" sub={`On excess above ₹10L — refundable`} />
                  )}
                  <StatCard label="Estonia Tax (month)" value={fmt(c.mEstTax)} bg="bg-orange-100" emoji="🇪🇪" />
                  <StatCard label="India Tax (month)" value={fmt(c.mIndTax)} bg="bg-red-100" emoji="🇮🇳" />
                  <StatCard label="Monthly Net Profit" value={fmt(c.mNet)} bg="bg-emerald-100" emoji="🎉" sub="After all deductions" highlight={c.mNet > 0} />
                  <StatCard label="Total Tax Paid" value={fmt(c.mTotalTax)} bg="bg-gray-100" emoji="🧾" />
                  <StatCard label="Days × Net/day" value={`${c.days} × ${fmt(c.netProfit)}`} bg="bg-violet-100" emoji="🗓️" sub="calculation basis" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="bg-white rounded-3xl p-6 border border-gray-100">
                    <h3 className="newq font-black text-gray-800 mb-1">📅 Monthly After-Tax Stages</h3>
                    <p className="newq text-xs text-gray-400 mb-4">Gross → After Estonia → Net</p>
                    <ResponsiveContainer width="100%" height={220}>
                      <BarChart data={monthlyBarData} barCategoryGap="40%">
                        <XAxis dataKey="name" tick={{ fontSize: 11, fontWeight: 700 }} axisLine={false} tickLine={false} />
                        <YAxis tick={{ fontSize: 10 }} axisLine={false} tickLine={false} tickFormatter={(v) => `₹${(v / 1000).toFixed(0)}k`} />
                        <Tooltip content={<CustomTooltip />} />
                        <Bar dataKey="value" radius={[10, 10, 0, 0]}>
                          <Cell fill="#6ee7b7" /><Cell fill="#fcd34d" /><Cell fill="#86efac" />
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  {projectionData.length > 1 && (
                    <div className="bg-white rounded-3xl p-6 border border-gray-100">
                      <h3 className="newq font-black text-gray-800 mb-1">📈 Cumulative Net Profit</h3>
                      <p className="newq text-xs text-gray-400 mb-4">Day-by-day accumulation</p>
                      <ResponsiveContainer width="100%" height={220}>
                        <LineChart data={projectionData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                          <XAxis dataKey="day" tick={{ fontSize: 9 }} interval={Math.floor(projectionData.length / 5)} axisLine={false} tickLine={false} />
                          <YAxis tick={{ fontSize: 10 }} axisLine={false} tickLine={false} tickFormatter={(v) => `₹${(v / 1000).toFixed(0)}k`} />
                          <Tooltip content={<CustomTooltip />} />
                          <Line type="monotone" dataKey="cumulative" stroke="#6ee7b7" strokeWidth={3} dot={false} />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Yearly Projection */}
            {c.days > 0 && (
              <div>
                <h2 className="newq text-sm font-black text-gray-500 uppercase tracking-widest mb-4">
                  🗓️ Yearly Projection ({c.yDays} trading days / year)
                </h2>
                <div className="bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-100 rounded-3xl p-5 mb-4 flex flex-col sm:flex-row items-center gap-4">
                  <div className="w-14 h-14 bg-white rounded-3xl flex items-center justify-center text-3xl -sm shrink-0">🏆</div>
                  <div className="flex-1 text-center sm:text-left">
                    <p className="newq text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Projected Annual Net Profit</p>
                    <p className="newq text-3xl font-black text-emerald-700">{fmt(c.yNet)}</p>
                    <p className="newq text-xs text-gray-400 mt-1">{c.days} days/month × 12 months × {fmt(c.netProfit)}/trade</p>
                  </div>
                  <div className="flex flex-wrap gap-3 justify-center">
                    <div className="bg-white rounded-2xl px-4 py-3 text-center -sm">
                      <p className="newq text-xs text-gray-400 font-bold uppercase">Annual ROI</p>
                      <p className="newq text-xl font-black text-blue-600">{c.netRoi.toFixed(2)}%</p>
                      <p className="newq text-xs text-gray-400">per trade</p>
                    </div>
                    <div className="bg-white rounded-2xl px-4 py-3 text-center -sm">
                      <p className="newq text-xs text-gray-400 font-bold uppercase">Tax / Year</p>
                      <p className="newq text-xl font-black text-red-500">{fmt(c.yTotalTax)}</p>
                      <p className="newq text-xs text-gray-400">EE + IN</p>
                    </div>
                    {c.hasRemitCharge && (
                      <div className="bg-white rounded-2xl px-4 py-3 text-center -sm">
                        <p className="newq text-xs text-gray-400 font-bold uppercase">Remit / Year</p>
                        <p className="newq text-xl font-black text-amber-500">{fmt(c.yRemitCharge)}</p>
                      </div>
                    )}
                    {c.hasTCS && (
                      <div className="bg-white rounded-2xl px-4 py-3 text-center -sm">
                        <p className="newq text-xs text-gray-400 font-bold uppercase">TCS / Year</p>
                        <p className="newq text-xl font-black text-sky-500">{fmt(c.yTCS)}</p>
                        <p className="newq text-xs text-sky-400 font-semibold">Refundable</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
                  <StatCard label="Yearly Gross Profit" value={fmt(c.yGross)} bg="bg-teal-100" emoji="📊" sub={`${c.yDays} days × ${fmt(c.grossProfit)}`} />
                  {c.hasRemitCharge && (
                    <StatCard label="Remit Charges (year)" value={fmt(c.yRemitCharge)} bg="bg-amber-100" emoji="🏧" />
                  )}
                  {c.hasTCS && (
                    <StatCard label="TCS (year)" value={fmt(c.yTCS)} bg="bg-sky-100" emoji="🔵" sub="Refundable via ITR" />
                  )}
                  <StatCard label="Estonia Tax (year)" value={fmt(c.yEstTax)} bg="bg-orange-100" emoji="🇪🇪" sub="20% on yearly gross" />
                  <StatCard label="After Estonia (year)" value={fmt(c.yAfterEst)} bg="bg-lime-100" emoji="✅" />
                  <StatCard label="India Tax (year)" value={fmt(c.yIndTax)} bg="bg-red-100" emoji="🇮🇳" sub="Sec 115BBH @ 30%" />
                  <StatCard label="Total Tax (year)" value={fmt(c.yTotalTax)} bg="bg-gray-100" emoji="🧾" sub={`Eff. rate: ${c.effTaxRate.toFixed(1)}%`} />
                  <StatCard label="Annual Net Profit" value={fmt(c.yNet)} bg="bg-emerald-100" emoji="🎯" sub="After all deductions" highlight={c.yNet > 0} />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="bg-white rounded-3xl p-6 border border-gray-100">
                    <h3 className="newq font-black text-gray-800 mb-1">📅 Yearly After-Tax Stages</h3>
                    <p className="newq text-xs text-gray-400 mb-4">Gross → After Estonia → Net (annual)</p>
                    <ResponsiveContainer width="100%" height={220}>
                      <BarChart data={yearlyBarData} barCategoryGap="40%">
                        <XAxis dataKey="name" tick={{ fontSize: 11, fontWeight: 700 }} axisLine={false} tickLine={false} />
                        <YAxis tick={{ fontSize: 10 }} axisLine={false} tickLine={false} tickFormatter={(v) => `₹${(v / 100000).toFixed(1)}L`} />
                        <Tooltip content={<CustomTooltip />} />
                        <Bar dataKey="value" radius={[10, 10, 0, 0]}>
                          <Cell fill="#6ee7b7" /><Cell fill="#fcd34d" /><Cell fill="#86efac" />
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  {yearlyProjectionData.length > 1 && (
                    <div className="bg-white rounded-3xl p-6 border border-gray-100">
                      <h3 className="newq font-black text-gray-800 mb-1">📈 Month-wise Cumulative Profit</h3>
                      <p className="newq text-xs text-gray-400 mb-4">Net profit accumulation over 12 months</p>
                      <ResponsiveContainer width="100%" height={220}>
                        <LineChart data={yearlyProjectionData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                          <XAxis dataKey="month" tick={{ fontSize: 10, fontWeight: 700 }} axisLine={false} tickLine={false} />
                          <YAxis tick={{ fontSize: 10 }} axisLine={false} tickLine={false} tickFormatter={(v) => `₹${(v / 100000).toFixed(1)}L`} />
                          <Tooltip content={<CustomTooltip />} />
                          <Line type="monotone" dataKey="gross" stroke="#fcd34d" strokeWidth={2} dot={false} strokeDasharray="5 5" name="Cumulative Gross" />
                          <Line type="monotone" dataKey="cumulative" stroke="#34d399" strokeWidth={3} dot={{ r: 4, fill: "#34d399" }} name="Cumulative Net" />
                          <Legend wrapperStyle={{ fontSize: 11, fontWeight: 700 }} />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  )}
                </div>

                <div className="mt-4 bg-violet-50 rounded-3xl p-6">
                  <h3 className="newq font-black text-gray-800 mb-4">🧾 Annual Tax Breakdown</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white rounded-2xl p-4 space-y-2">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">🇪🇪</span>
                        <span className="newq font-black text-gray-700 text-sm">Estonia — Annual</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="newq text-gray-500">Yearly Gross</span>
                        <span className="newq font-bold text-gray-800">{fmt(c.yGross)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="newq text-gray-500">Tax @ 20%</span>
                        <span className="newq font-bold text-red-500">- {fmt(c.yEstTax)}</span>
                      </div>
                      <div className="border-t border-gray-100 pt-2 flex justify-between text-sm">
                        <span className="newq font-bold text-gray-500">After Tax</span>
                        <span className="newq font-black text-gray-800">{fmt(c.yAfterEst)}</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl p-4 space-y-2">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">🇮🇳</span>
                        <span className="newq font-black text-gray-700 text-sm">India — Annual</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="newq text-gray-500">After Estonia</span>
                        <span className="newq font-bold text-gray-800">{fmt(c.yAfterEst)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="newq text-gray-500">Tax @ 30%</span>
                        <span className="newq font-bold text-red-500">- {fmt(c.yIndTax)}</span>
                      </div>
                      <div className="border-t border-gray-100 pt-2 flex justify-between text-sm">
                        <span className="newq font-bold text-gray-500">Annual Net</span>
                        <span className="newq font-black text-emerald-700">{fmt(c.yNet)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* Empty State */}
        {!c.hasData && (
          <div className="newq bg-white rounded-3xl p-10 text-center border border-gray-100">
            <div className="text-5xl mb-4">💱</div>
            <h3 className="newq text-xl font-black text-gray-700 mb-2">Fill in the details above</h3>
            <p className="newq text-gray-400 text-sm max-w-sm mx-auto">
              Enter your remittance amount, EUR rate or EUR received, USDT price in EUR, and INR selling rate to see full profit analysis with tax breakdowns.
            </p>
          </div>
        )}

        {/* Footer */}
        <div className="text-center py-4">
          <p className="newq text-xs text-gray-400">ArbiFlow • INR → EUR → USDT → INR Arbitrage Tracker</p>
          <p className="newq text-xs text-gray-400 mt-1">
            Tax rates are indicative. Consult a qualified tax advisor. India: Sec 115BBH @30% | Estonia: @20% | LRS TCS: 5% on excess above ₹10L (refundable via ITR)
          </p>
        </div>
      </div>
    </div>
  );
}
