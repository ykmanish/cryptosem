"use client";
import { useState, useMemo } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend, LineChart, Line, CartesianGrid
} from "recharts";
import {
  TrendingUp, TrendingDown, Wallet, Euro, Coins, IndianRupee,
  Calendar, Banknote, Receipt, Target, PieChart as PieChartIcon,
  BarChart3, LineChart as LineChartIcon, DollarSign, Landmark,
  Building2, Globe2, CreditCard, Calculator, Briefcase,
  ArrowRightLeft, Activity, Sparkles, AlertCircle, CheckCircle2,
  ToggleLeft, ToggleRight
} from "lucide-react";

const TCS_THRESHOLD = 1_000_000;
const TCS_RATE = 5;

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
    <div className={`${bg} newq rounded-2xl sm:rounded-3xl p-4 sm:p-5`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-2xl sm:text-3xl">{emoji}</span>
        {autoTag && (
          <span className="text-xs sm:text-sm font-bold bg-emerald-200 text-emerald-700 newq rounded-full px-2 py-0.5">AUTO</span>
        )}
      </div>
      <label className="newq block text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-widest mb-1 sm:mb-2">{label}</label>
      {hint && <p className="newq text-xs sm:text-sm text-gray-400 mb-2">{hint}</p>}
      <div className={`flex items-center gap-2 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 ${readOnly ? "bg-emerald-50 border border-emerald-200" : "bg-white"}`}>
        <span className="newq text-gray-400 font-semibold text-sm sm:text-base shrink-0">{unit}</span>
        <input
          type="number"
          value={value}
          onChange={(e) => onChange && onChange(e.target.value)}
          placeholder={placeholder}
          readOnly={readOnly}
          className={`newq flex-1 outline-none font-bold text-lg sm:text-xl bg-transparent w-full min-w-0 ${readOnly ? "text-emerald-700 cursor-not-allowed" : "text-gray-800"}`}
        />
      </div>
      {readOnly && (
        <p className="newq text-xs sm:text-sm text-emerald-600 font-semibold mt-2">⚡ Auto-calculated from EUR rate</p>
      )}
    </div>
  );
}

function StatCard({ label, value, bg, icon: Icon, sub, highlight }) {
  return (
    <div className={`${bg} newq rounded-2xl sm:rounded-3xl p-3 sm:p-5 ${highlight ? "ring-2 ring-emerald-400" : ""}`}>
      <div className="text-lg sm:text-2xl mb-1">{Icon && <Icon className="w-5 h-5 sm:w-6 sm:h-6" />}</div>
      <p className="newq text-xs font-bold text-gray-500 uppercase tracking-wider leading-tight">{label}</p>
      <p className="newq text-base sm:text-2xl font-black text-gray-800 mt-1 leading-tight break-all">{value}</p>
      {sub && <p className="newq text-xs text-gray-500 mt-1 leading-snug">{sub}</p>}
    </div>
  );
}

function FlowStep({ icon: Icon, label, sub, active }) {
  return (
    <div className={`flex flex-col items-center gap-0.5 sm:gap-1 ${active ? "opacity-100" : "opacity-40"}`}>
      <div className={`w-9 h-9 sm:w-12 sm:h-12 ${active ? "bg-white" : "bg-gray-100"} rounded-xl sm:rounded-2xl flex items-center justify-center text-base sm:text-2xl`}>
        {Icon && <Icon className="w-4 h-4 sm:w-6 sm:h-6" />}
      </div>
      <p className="newq text-xs font-bold text-gray-700 text-center leading-tight">{label}</p>
      <p className="newq text-xs text-gray-400 text-center leading-tight hidden sm:block">{sub}</p>
    </div>
  );
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="newq bg-white rounded-xl sm:rounded-2xl p-2 sm:p-3 border border-gray-100 max-w-[180px]">
        <p className="newq text-xs sm:text-sm font-bold text-gray-500">{label}</p>
        {payload.map((p, i) => (
          <p key={i} className="newq text-sm sm:text-base font-black text-gray-800 break-all">
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
  const [tcsModeEnabled, setTcsModeEnabled] = useState(false);

  const isAutoEur = parseFloat(eurRate) > 0 && parseFloat(inrSent) > 0;
  const autoEurValue = isAutoEur
    ? (parseFloat(inrSent) / parseFloat(eurRate)).toFixed(4)
    : "";

  const c = useMemo(() => {
    const inr = parseFloat(inrSent) || 0;
    const rate = parseFloat(eurRate) || 0;
    const eur = rate > 0 && inr > 0 ? inr / rate : parseFloat(eurReceivedManual) || 0;
    const usdtPrice = parseFloat(usdtPriceEur) || 0;
    const sellRate = parseFloat(inrSellRate) || 0;
    const days = parseFloat(daysPerMonth) || 0;

    const remitFixed = parseFloat(remitChargeFixed) || 0;
    const remitPct = parseFloat(remitChargePct) || 0;
    const remitPctAmount = inr > 0 ? (inr * remitPct) / 100 : 0;
    const totalRemitCharge = remitFixed + remitPctAmount;
    const hasRemitCharge = totalRemitCharge > 0;

    // TCS calculation based on mode
    let tcsAmount = 0;
    let taxableRemit = 0;
    let remainingBeforeTCS = 0;
    let hasTCS = false;
    let tcsRatio = 0;
    let tcsDescription = "";

    if (tcsModeEnabled) {
      // Mode 1: 5% TCS on entire transaction amount
      tcsAmount = (inr * TCS_RATE) / 100;
      hasTCS = tcsAmount > 0;
      taxableRemit = inr;
      remainingBeforeTCS = 0;
      tcsRatio = TCS_RATE;
      tcsDescription = "5% on full amount";
    } else {
      // Mode 2: Standard LRS rules - TCS only on amount above ₹10L
      taxableRemit = Math.max(0, inr - TCS_THRESHOLD);
      tcsAmount = (taxableRemit * TCS_RATE) / 100;
      hasTCS = tcsAmount > 0;
      remainingBeforeTCS = Math.max(0, TCS_THRESHOLD - inr);
      tcsRatio = inr > 0 ? (tcsAmount / inr) * 100 : 0;
    }

    const usdtBought = usdtPrice > 0 ? eur / usdtPrice : 0;
    const inrReceived = usdtBought * sellRate;
    const grossProfitBeforeCharge = inrReceived - inr;
    const grossProfit = grossProfitBeforeCharge - totalRemitCharge - tcsAmount;

    const estTax = grossProfit > 0 ? grossProfit * (estoniaTaxRate / 100) : 0;
    const indTax = grossProfit > 0 ? grossProfit * (indiaTaxRate / 100) : 0;
    const totalTax = estTax + indTax;
    const netProfit = grossProfit - estTax - indTax;

    const roi = inr > 0 ? (grossProfitBeforeCharge / inr) * 100 : 0;
    const netRoi = inr > 0 ? (netProfit / inr) * 100 : 0;
    const effTaxRate = grossProfit > 0 ? (totalTax / grossProfit) * 100 : 0;
    const remitChargeRatio = inr > 0 ? (totalRemitCharge / inr) * 100 : 0;

    const monthly = (v) => v * days;
    const yearly = (v) => v * days * 12;

    return {
      inr, eur, usdtPrice, sellRate, days, usdtBought, inrReceived,
      grossProfitBeforeCharge, grossProfit,
      remitFixed, remitPct, remitPctAmount,
      totalRemitCharge, hasRemitCharge, remitChargeRatio,
      tcsAmount, hasTCS, tcsRatio, taxableRemit, remainingBeforeTCS, tcsDescription,
      estTax, afterEst: grossProfit - estTax, indTax, netProfit, totalTax,
      roi, netRoi, effTaxRate,
      mGross: monthly(grossProfit), mEstTax: monthly(estTax),
      mAfterEst: monthly(grossProfit - estTax), mIndTax: monthly(indTax),
      mNet: monthly(netProfit), mTotalTax: monthly(totalTax),
      mRemitCharge: monthly(totalRemitCharge), mTCS: monthly(tcsAmount),
      yGross: yearly(grossProfit), yEstTax: yearly(estTax),
      yAfterEst: yearly(grossProfit - estTax), yIndTax: yearly(indTax),
      yNet: yearly(netProfit), yTotalTax: yearly(totalTax),
      yRemitCharge: yearly(totalRemitCharge), yTCS: yearly(tcsAmount),
      yDays: days * 12,
      hasData: inr > 0 && eur > 0 && usdtPrice > 0 && sellRate > 0,
    };
  }, [inrSent, eurRate, eurReceivedManual, usdtPriceEur, inrSellRate, daysPerMonth,
      remitChargeFixed, remitChargePct, estoniaTaxRate, indiaTaxRate, tcsModeEnabled]);

  const barData = [
    { name: "INR Sent", value: c.inr },
    { name: "Received", value: c.inrReceived },
    { name: "Gross", value: Math.max(0, c.grossProfit) },
    { name: "Net", value: Math.max(0, c.netProfit) },
  ];

  const pieData = c.grossProfit > 0
    ? [
        { name: "Net Profit", value: Math.max(0, c.netProfit) },
        { name: `EE Tax (${estoniaTaxRate}%)`, value: c.estTax },
        { name: `IN Tax (${indiaTaxRate}%)`, value: c.indTax },
        ...(c.hasRemitCharge ? [{ name: "Remit", value: c.totalRemitCharge }] : []),
        ...(c.hasTCS ? [{ name: "TCS", value: c.tcsAmount }] : []),
      ]
    : [];

  const monthlyBarData = [
    { name: "Gross", value: Math.max(0, c.mGross) },
    { name: "After EE", value: Math.max(0, c.mAfterEst) },
    { name: "Net", value: Math.max(0, c.mNet) },
  ];

  const yearlyBarData = [
    { name: "Gross", value: Math.max(0, c.yGross) },
    { name: "After EE", value: Math.max(0, c.yAfterEst) },
    { name: "Net", value: Math.max(0, c.yNet) },
  ];

  const projectionData = c.hasData && c.days > 0
    ? Array.from({ length: Math.min(30, c.days) }, (_, i) => ({
        day: `D${i + 1}`,
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

      {/* ── Sticky Header ── */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-3 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-100 rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl shrink-0">
              <ArrowRightLeft className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            </div>
            <div className="min-w-0">
              <h1 className="newq text-base sm:text-xl font-black text-gray-900 truncate">ArbiFlow</h1>
              <p className="newq text-xs text-gray-400 truncate hidden xs:block sm:block">INR → EUR → USDT → INR</p>
            </div>
          </div>
          {c.hasData && (
            <div className="bg-emerald-100 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-1.5 sm:py-2 text-center shrink-0">
              <p className="newq text-xs text-gray-500 font-semibold">Net ROI</p>
              <p className="newq text-base sm:text-xl font-black text-emerald-700">{c.netRoi.toFixed(2)}%</p>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-3 sm:px-4 py-5 sm:py-8 space-y-5 sm:space-y-8">

        {/* ── Flow Visualizer ── */}
        <div className="bg-blue-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6">
          <h2 className="newq text-xs sm:text-base font-black text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
            <Activity className="w-3 h-3 sm:w-4 sm:h-4" /> Transaction Flow
          </h2>
          <div className="flex items-start gap-1 sm:gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <FlowStep icon={IndianRupee} label="Remit INR" sub="India Bank" active={activeSteps[0]} />
            <div className="flex-1 h-0.5 bg-blue-200 rounded min-w-2 sm:min-w-4 mt-4 sm:mt-5 shrink-0" />
            <FlowStep icon={Euro} label="EUR In" sub="EU Bank" active={activeSteps[1]} />
            <div className="flex-1 h-0.5 bg-blue-200 rounded min-w-2 sm:min-w-4 mt-4 sm:mt-5 shrink-0" />
            <FlowStep icon={Coins} label="Buy USDT" sub="Binance" active={activeSteps[2]} />
            <div className="flex-1 h-0.5 bg-blue-200 rounded min-w-2 sm:min-w-4 mt-4 sm:mt-5 shrink-0" />
            <FlowStep icon={Wallet} label="Sell USDT" sub="INR Market" active={activeSteps[3]} />
            <div className="flex-1 h-0.5 bg-blue-200 rounded min-w-2 sm:min-w-4 mt-4 sm:mt-5 shrink-0" />
            <FlowStep icon={Target} label="Net Profit" sub="After Tax" active={c.netProfit > 0} />
          </div>
          {c.hasData && (
            <div className="mt-3 sm:mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              {[
                { label: "Sent", val: fmt(c.inr), icon: IndianRupee },
                { label: "EUR", val: fmtEur(c.eur), icon: Euro, tag: isAutoEur ? "⚡ Auto" : null },
                { label: "USDT", val: `${fmtNum(c.usdtBought, 2)} USDT`, icon: Coins },
                { label: "INR Back", val: fmt(c.inrReceived), icon: Banknote },
              ].map(({ label, val, icon: Icon, tag }) => (
                <div key={label} className="bg-white rounded-xl sm:rounded-2xl p-2 sm:p-3 text-center">
                  <div className="flex justify-center mb-1"><Icon className="w-4 h-4 text-gray-400" /></div>
                  <p className="newq text-xs text-gray-400 font-semibold">{label}</p>
                  <p className="newq text-xs sm:text-sm font-black text-gray-800 break-all leading-snug mt-0.5">{val}</p>
                  {tag && <p className="newq text-xs text-emerald-500 font-bold">{tag}</p>}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ── Inputs ── */}
        <div>
          <h2 className="newq text-xs sm:text-base font-black text-gray-500 uppercase tracking-widest mb-3 sm:mb-4 flex items-center gap-2">
            <Calculator className="w-3 h-3 sm:w-4 sm:h-4" /> Enter Details
          </h2>

          {/* EUR Rate Banner */}
          <div className="bg-emerald-50 border border-emerald-100 rounded-2xl sm:rounded-3xl p-4 sm:p-5 mb-4">
            <div className="flex items-start gap-2 sm:gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-emerald-100 rounded-xl sm:rounded-2xl flex items-center justify-center text-lg sm:text-xl shrink-0">
                <Sparkles className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="newq text-sm sm:text-base font-black text-emerald-800 mb-1">EUR Exchange Rate (Optional)</p>
                <p className="newq text-xs sm:text-sm text-emerald-600 mb-3">
                  ₹90 = €1 → EUR auto-calculated. Leave blank to enter EUR manually.
                </p>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
                  <div className="flex items-center gap-2 bg-white rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 flex-1">
                    <span className="newq text-gray-400 font-semibold text-sm sm:text-base shrink-0">₹ per €1</span>
                    <input
                      type="number"
                      value={eurRate}
                      onChange={(e) => setEurRate(e.target.value)}
                      placeholder="e.g. 90.5"
                      className="newq flex-1 outline-none text-gray-800 font-bold text-lg sm:text-xl bg-transparent min-w-0"
                    />
                  </div>
                  {isAutoEur && (
                    <div className="bg-emerald-100 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span className="newq text-emerald-700 font-black text-sm sm:text-base">€{parseFloat(autoEurValue).toFixed(2)} ✅</span>
                    </div>
                  )}
                  {eurRate && !isAutoEur && (
                    <div className="bg-yellow-100 rounded-xl sm:rounded-2xl px-3 py-2.5 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-yellow-600" />
                      <span className="newq text-yellow-700 font-bold text-xs sm:text-sm">Enter INR Sent first</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
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
            <InputCard label="INR Sell Rate / USDT" value={inrSellRate} onChange={setInrSellRate} placeholder="88" unit="₹/USDT" bg="bg-pink-100" emoji="💱" hint="P2P or exchange rate" />
            <InputCard label="Trading Days / Month" value={daysPerMonth} onChange={setDaysPerMonth} placeholder="20" unit="days" bg="bg-purple-100" emoji="📅" hint="Days you run this cycle" />
          </div>
        </div>

        {/* ── TCS Mode Toggle ── */}
        <div>
          <h2 className="newq text-xs sm:text-base font-black text-gray-500 uppercase tracking-widest mb-3 sm:mb-4 flex items-center gap-2">
            <Landmark className="w-3 h-3 sm:w-4 sm:h-4" /> TCS Configuration
          </h2>
          <div className={`rounded-2xl sm:rounded-3xl p-4 sm:p-6 border-2 transition-all ${tcsModeEnabled ? "bg-purple-50 border-purple-300" : "bg-gray-50 border-gray-200"}`}>
            <div className="flex items-start gap-3 sm:gap-4">
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl shrink-0 ${tcsModeEnabled ? "bg-purple-200" : "bg-gray-200"}`}>
                <Landmark className={`w-6 h-6 ${tcsModeEnabled ? "text-purple-700" : "text-gray-500"}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-2">
                  <h3 className="newq font-black text-gray-800 text-base sm:text-lg">
                    TCS Mode: {tcsModeEnabled ? "Full TCS (5% on entire amount)" : "Standard LRS (5% on excess above ₹10L)"}
                  </h3>
                  <button
                    onClick={() => setTcsModeEnabled(!tcsModeEnabled)}
                    className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base transition-all ${tcsModeEnabled ? "bg-purple-600 text-white hover:bg-purple-700" : "bg-gray-600 text-white hover:bg-gray-700"}`}
                  >
                    {tcsModeEnabled ? <ToggleRight className="w-4 h-4 sm:w-5 sm:h-5" /> : <ToggleLeft className="w-4 h-4 sm:w-5 sm:h-5" />}
                    {tcsModeEnabled ? "Full TCS ON" : "Standard Mode"}
                  </button>
                </div>
                <p className="newq text-xs sm:text-sm text-gray-500 mb-3">
                  {tcsModeEnabled 
                    ? "⚠️ Full TCS Mode: 5% TCS applied on total remittance amount. Suitable for high-value transactions where full amount is taxable." 
                    : "📋 Standard Mode: 5% TCS only on amount exceeding ₹10,00,000 (LRS limit). First ₹10L is TCS-free."}
                </p>
                {c.inr > 0 && (
                  <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="newq text-xs font-black text-gray-500 uppercase">Current TCS Impact</span>
                      <span className="newq text-xs font-bold text-purple-600">{c.tcsDescription}</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="newq text-gray-500">Total Remittance</span>
                        <span className="newq font-bold text-gray-800">{fmt(c.inr)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="newq text-gray-500">TCS Amount</span>
                        <span className={`newq font-bold ${c.hasTCS ? "text-purple-600" : "text-green-600"}`}>
                          {c.hasTCS ? fmt(c.tcsAmount) : "₹0"}
                        </span>
                      </div>
                      {!tcsModeEnabled && c.inr <= TCS_THRESHOLD && (
                        <div className="bg-green-50 rounded-lg p-2 text-center">
                          <CheckCircle2 className="w-4 h-4 text-green-600 inline mr-1" />
                          <span className="newq text-xs text-green-700 font-semibold">Within ₹10L limit — No TCS</span>
                        </div>
                      )}
                      {!tcsModeEnabled && c.inr > TCS_THRESHOLD && (
                        <div className="bg-purple-50 rounded-lg p-2 text-center">
                          <AlertCircle className="w-4 h-4 text-purple-600 inline mr-1" />
                          <span className="newq text-xs text-purple-700 font-semibold">
                            Excess: {fmt(c.taxableRemit)} @ 5% = {fmt(c.tcsAmount)}
                          </span>
                        </div>
                      )}
                      {tcsModeEnabled && (
                        <div className="bg-purple-100 rounded-lg p-2 text-center">
                          <AlertCircle className="w-4 h-4 text-purple-700 inline mr-1" />
                          <span className="newq text-xs text-purple-700 font-semibold">
                            Full TCS: {fmt(c.inr)} @ 5% = {fmt(c.tcsAmount)}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ── Remittance Charges ── */}
        <div>
          <h2 className="newq text-xs sm:text-base font-black text-gray-500 uppercase tracking-widest mb-3 sm:mb-4 flex items-center gap-2">
            <CreditCard className="w-3 h-3 sm:w-4 sm:h-4" /> Remittance Charges
          </h2>
          <div className="bg-amber-50 border border-amber-100 rounded-2xl sm:rounded-3xl p-4 sm:p-5">
            <div className="flex items-start gap-2 sm:gap-3 mb-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-amber-100 rounded-xl sm:rounded-2xl flex items-center justify-center text-lg sm:text-xl shrink-0">
                <Banknote className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <p className="newq text-sm sm:text-base font-black text-amber-800 mb-1">Bank / Transfer Fees (Optional)</p>
                <p className="newq text-xs sm:text-sm text-amber-600">Fixed wire fee + % markup. Auto-deducted from profit.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4">
                <label className="newq block text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Fixed Fee</label>
                <p className="newq text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3">Flat SWIFT/wire charge per transaction</p>
                <div className="flex items-center gap-2 bg-gray-50 rounded-lg sm:rounded-xl px-3 py-2 sm:py-2.5">
                  <span className="newq text-gray-400 font-semibold text-sm sm:text-base shrink-0">₹</span>
                  <input type="number" value={remitChargeFixed} onChange={(e) => setRemitChargeFixed(e.target.value)} placeholder="e.g. 500" className="newq flex-1 outline-none text-gray-800 font-bold text-lg sm:text-xl bg-transparent min-w-0" />
                </div>
                <p className="newq text-xs text-gray-400 mt-1.5">SWIFT fee ₹250–₹1500</p>
              </div>
              <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4">
                <label className="newq block text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Percentage Markup</label>
                <p className="newq text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3">Forex conversion margin on INR</p>
                <div className="flex items-center gap-2 bg-gray-50 rounded-lg sm:rounded-xl px-3 py-2 sm:py-2.5">
                  <span className="newq text-gray-400 font-semibold text-sm sm:text-base shrink-0">%</span>
                  <input type="number" value={remitChargePct} onChange={(e) => setRemitChargePct(e.target.value)} placeholder="e.g. 0.5" className="newq flex-1 outline-none text-gray-800 font-bold text-lg sm:text-xl bg-transparent min-w-0" />
                </div>
                <p className="newq text-xs text-gray-400 mt-1.5">Wise ~0.4%, bank 0.5–2%</p>
              </div>
            </div>
            {c.hasData && c.hasRemitCharge && (
              <div className="mt-3 sm:mt-4 bg-amber-100 rounded-xl sm:rounded-2xl p-3 sm:p-4">
                <p className="newq text-xs font-black text-amber-700 uppercase tracking-widest mb-2 sm:mb-3 flex items-center gap-1">📊 Per Transaction</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                  {c.remitFixed > 0 && (
                    <div className="bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 text-center">
                      <p className="newq text-xs text-gray-400 font-semibold">Fixed Fee</p>
                      <p className="newq text-xs sm:text-base font-black text-amber-700 break-all">{fmt(c.remitFixed)}</p>
                    </div>
                  )}
                  {c.remitPct > 0 && (
                    <div className="bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 text-center">
                      <p className="newq text-xs text-gray-400 font-semibold">% ({c.remitPct}%)</p>
                      <p className="newq text-xs sm:text-base font-black text-amber-700 break-all">{fmt(c.remitPctAmount)}</p>
                    </div>
                  )}
                  <div className="bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 text-center">
                    <p className="newq text-xs text-gray-400 font-semibold">Total</p>
                    <p className="newq text-xs sm:text-base font-black text-red-500 break-all">{fmt(c.totalRemitCharge)}</p>
                  </div>
                  <div className="bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 text-center">
                    <p className="newq text-xs text-gray-400 font-semibold">Cost %</p>
                    <p className="newq text-xs sm:text-base font-black text-orange-600">{c.remitChargeRatio.toFixed(3)}%</p>
                  </div>
                </div>
              </div>
            )}
            {c.hasData && !c.hasRemitCharge && (
              <p className="newq text-xs sm:text-sm text-amber-600 mt-3">💡 No charges entered — add above to see impact.</p>
            )}
          </div>
        </div>

        {/* ── TCS Section (Detailed) ── */}
        {c.inr > 0 && c.hasTCS && (
          <div>
            <h2 className="newq text-xs sm:text-base font-black text-gray-500 uppercase tracking-widest mb-3 sm:mb-4 flex items-center gap-2">
              <Landmark className="w-3 h-3 sm:w-4 sm:h-4" /> TCS — Tax Collected at Source
            </h2>
            <div className={`rounded-2xl sm:rounded-3xl p-4 sm:p-6 border ${tcsModeEnabled ? "bg-purple-50 border-purple-200" : "bg-sky-50 border-sky-200"}`}>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <h3 className="newq font-black text-gray-800 text-sm sm:text-lg">
                      {tcsModeEnabled 
                        ? `TCS Applied — 5% on Full Amount (${fmt(c.inr)})`
                        : c.hasTCS 
                          ? "TCS Applicable — Excess Above ₹10L" 
                          : "No TCS — Within ₹10L Limit"}
                    </h3>
                    <span className={`text-xs font-black px-2 sm:px-3 py-0.5 sm:py-1 rounded-full ${tcsModeEnabled ? "bg-purple-200 text-purple-700" : "bg-sky-200 text-sky-700"}`}>
                      {c.hasTCS ? `TCS = ${fmt(c.tcsAmount)}` : "₹0 TCS"}
                    </span>
                  </div>

                  {/* Rule explanation */}
                  <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 mb-3 sm:mb-4">
                    <p className="newq text-xs font-black text-gray-500 uppercase tracking-widest mb-2 sm:mb-3 flex items-center gap-1">📋 TCS Rule {tcsModeEnabled ? "(Full Mode)" : "(Standard Mode)"}</p>
                    <div className="space-y-1.5 sm:space-y-2">
                      {tcsModeEnabled ? (
                        <>
                          {[
                            { n: "1", bg: "bg-purple-100", c: "text-purple-700", t: <>TCS applied on <strong>entire remittance amount</strong> → <strong className="text-purple-600">5% of total</strong></> },
                            { n: "2", bg: "bg-purple-100", c: "text-purple-700", t: <>No exemption limit — <strong>full amount taxable</strong></> },
                            { n: "3", bg: "bg-purple-100", c: "text-purple-700", t: <>Example: ₹{TCS_THRESHOLD.toLocaleString('en-IN')} → <strong>₹{(TCS_THRESHOLD * 5 / 100).toLocaleString('en-IN')} TCS</strong></> },
                            { n: "4", bg: "bg-amber-100", c: "text-amber-700", t: <>Collected by bank — <strong className="text-amber-600">fully refundable via ITR</strong></> },
                          ].map(({ n, bg, c: col, t }) => (
                            <div key={n} className="flex items-start gap-2">
                              <div className={`w-5 h-5 sm:w-6 sm:h-6 ${bg} rounded-full flex items-center justify-center text-xs font-black ${col} shrink-0 mt-0.5`}>{n}</div>
                              <p className="newq text-xs sm:text-sm text-gray-600">{t}</p>
                            </div>
                          ))}
                        </>
                      ) : (
                        <>
                          {[
                            { n: "1", bg: "bg-green-100", c: "text-green-700", t: <>First <strong>₹10L</strong> → <strong className="text-green-600">₹0 TCS (free)</strong></> },
                            { n: "2", bg: "bg-sky-100", c: "text-sky-700", t: <>Amount <strong>above ₹10L</strong> → <strong className="text-sky-600">5% TCS on excess only</strong></> },
                            { n: "3", bg: "bg-violet-100", c: "text-violet-700", t: <>₹40L sent → ₹10L free + ₹30L × 5% = <strong>₹1,50,000 TCS</strong></> },
                            { n: "4", bg: "bg-amber-100", c: "text-amber-700", t: <>Collected by bank — <strong className="text-amber-600">fully refundable via ITR</strong></> },
                          ].map(({ n, bg, c: col, t }) => (
                            <div key={n} className="flex items-start gap-2">
                              <div className={`w-5 h-5 sm:w-6 sm:h-6 ${bg} rounded-full flex items-center justify-center text-xs font-black ${col} shrink-0 mt-0.5`}>{n}</div>
                              <p className="newq text-xs sm:text-sm text-gray-600">{t}</p>
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                  </div>

                  {/* Progress meter */}
                  <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 mb-3 sm:mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="newq text-xs font-black text-gray-500 uppercase">TCS Meter</span>
                      <span className="newq text-xs font-bold text-gray-400">
                        {tcsModeEnabled ? "Full TCS Mode" : "Limit: ₹10L"}
                      </span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-3 sm:h-4 overflow-hidden flex">
                      {!tcsModeEnabled && (
                        <>
                          <div className="h-full bg-green-400 transition-all duration-500"
                            style={{ width: `${Math.min((Math.min(c.inr, TCS_THRESHOLD) / TCS_THRESHOLD) * 100, 100)}%` }} />
                          {c.hasTCS && (
                            <div className="h-full bg-sky-400 transition-all duration-500"
                              style={{ width: `${Math.min((c.taxableRemit / TCS_THRESHOLD) * 100, 100)}%` }} />
                          )}
                        </>
                      )}
                      {tcsModeEnabled && (
                        <div className="h-full bg-purple-400 transition-all duration-500"
                          style={{ width: `100%` }} />
                      )}
                    </div>
                    <div className="flex justify-between mt-1.5 flex-wrap gap-1">
                      {!tcsModeEnabled && (
                        <>
                          <span className="newq text-xs text-green-600 font-bold">🟢 Free: {fmt(Math.min(c.inr, TCS_THRESHOLD))}</span>
                          {c.hasTCS
                            ? <span className="newq text-xs text-sky-600 font-bold">🔵 Taxable: {fmt(c.taxableRemit)}</span>
                            : <span className="newq text-xs text-green-500 font-semibold">💚 {fmt(c.remainingBeforeTCS)} more before TCS</span>}
                        </>
                      )}
                      {tcsModeEnabled && (
                        <span className="newq text-xs text-purple-600 font-bold">🟣 Full Amount Taxable: {fmt(c.inr)}</span>
                      )}
                    </div>
                  </div>

                  {c.hasTCS && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                      {tcsModeEnabled ? (
                        <>
                          {[
                            { label: "Total Sent", val: fmt(c.inr), bg: "bg-white", vc: "text-gray-800" },
                            { label: "TCS @ 5%", val: `- ${fmt(c.tcsAmount)}`, bg: "bg-purple-100", vc: "text-purple-700", sub: "On full amount" },
                            { label: "Effective Rate", val: `${TCS_RATE}%`, bg: "bg-purple-200", vc: "text-purple-800", sub: "Full TCS mode" },
                            { label: "Refundable", val: "Yes (via ITR)", bg: "bg-amber-100", vc: "text-amber-700", sub: "Claimable" },
                          ].map(({ label, val, bg, vc, sub }) => (
                            <div key={label} className={`${bg} rounded-xl sm:rounded-2xl p-2 sm:p-4 text-center`}>
                              <p className="newq text-xs text-gray-500 font-bold uppercase leading-tight">{label}</p>
                              <p className={`newq text-xs sm:text-base font-black ${vc} break-all mt-0.5`}>{val}</p>
                              {sub && <p className="newq text-xs text-gray-400 mt-0.5 hidden sm:block">{sub}</p>}
                            </div>
                          ))}
                        </>
                      ) : (
                        <>
                          {[
                            { label: "Total Sent", val: fmt(c.inr), bg: "bg-white", vc: "text-gray-800" },
                            { label: "Free (₹10L)", val: fmt(TCS_THRESHOLD), bg: "bg-green-100", vc: "text-green-700", sub: "No TCS" },
                            { label: "Taxable", val: fmt(c.taxableRemit), bg: "bg-sky-100", vc: "text-sky-700", sub: `${fmt(c.inr)} − ₹10L` },
                            { label: "TCS @ 5%", val: `- ${fmt(c.tcsAmount)}`, bg: "bg-sky-200", vc: "text-sky-800", sub: "Refundable" },
                          ].map(({ label, val, bg, vc, sub }) => (
                            <div key={label} className={`${bg} rounded-xl sm:rounded-2xl p-2 sm:p-4 text-center`}>
                              <p className="newq text-xs text-gray-500 font-bold uppercase leading-tight">{label}</p>
                              <p className={`newq text-xs sm:text-base font-black ${vc} break-all mt-0.5`}>{val}</p>
                              {sub && <p className="newq text-xs text-gray-400 mt-0.5 hidden sm:block">{sub}</p>}
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {c.hasTCS && c.days > 0 && (
                <div className="mt-3 sm:mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { title: `📅 Monthly TCS (${c.days} days)`, val: c.mTCS },
                    { title: `🗓️ Yearly TCS (${c.yDays} days)`, val: c.yTCS },
                  ].map(({ title, val }) => (
                    <div key={title} className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4">
                      <p className="newq text-xs font-black text-gray-400 uppercase tracking-widest mb-2">{title}</p>
                      <div className="space-y-1 text-sm sm:text-base">
                        <div className="flex justify-between">
                          <span className="newq text-gray-500">TCS per trade</span>
                          <span className="newq font-bold text-gray-700">{fmt(c.tcsAmount)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="newq text-gray-500">Taxable per trade</span>
                          <span className={`newq font-bold ${tcsModeEnabled ? "text-purple-600" : "text-sky-600"}`}>{fmt(c.taxableRemit)}</span>
                        </div>
                        <div className="border-t border-gray-100 pt-1 flex justify-between font-black">
                          <span className="newq text-gray-600">Total</span>
                          <span className={`newq ${tcsModeEnabled ? "text-purple-600" : "text-sky-600"}`}>{fmt(val)}</span>
                        </div>
                      </div>
                      <p className="newq text-xs text-amber-500 mt-2 font-semibold">⚡ Fully refundable via ITR</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── Per Transaction Results ── */}
        {c.hasData && (
          <>
            <div>
              <h2 className="newq text-xs sm:text-base font-black text-gray-500 uppercase tracking-widest mb-3 sm:mb-4 flex items-center gap-2">
                <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" /> Per Transaction Breakdown
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
                <StatCard label="Principal" value={fmt(c.inr)} bg="bg-blue-100" icon={Wallet} sub="INR sent" />
                <StatCard label="USDT Bought" value={`${fmtNum(c.usdtBought, 2)}`} bg="bg-yellow-100" icon={Coins} sub={`@ ${fmtEur(c.usdtPrice)}`} />
                <StatCard label="INR Received" value={fmt(c.inrReceived)} bg="bg-green-100" icon={Banknote} sub="From USDT sale" />
                {c.hasRemitCharge && (
                  <StatCard label="Remit Charges" value={fmt(c.totalRemitCharge)} bg="bg-amber-100" icon={CreditCard} sub={`${c.remitChargeRatio.toFixed(2)}% of principal`} />
                )}
                {c.hasTCS && (
                  <StatCard label="TCS" value={fmt(c.tcsAmount)} bg={tcsModeEnabled ? "bg-purple-100" : "bg-sky-100"} icon={Landmark} sub={tcsModeEnabled ? "5% on full amount" : "Refundable via ITR"} />
                )}
                <StatCard label="Gross Profit" value={fmt(c.grossProfit)} bg={c.grossProfit >= 0 ? "bg-teal-100" : "bg-red-100"} icon={c.grossProfit >= 0 ? TrendingUp : TrendingDown} sub={`ROI: ${c.roi.toFixed(2)}%`} />
                <StatCard label="Estonia Tax 20%" value={fmt(c.estTax)} bg="bg-orange-100" icon={Building2} sub="On gross profit" />
                <StatCard label="After Estonia" value={fmt(c.afterEst)} bg="bg-lime-100" icon={Globe2} />
                <StatCard label="India Tax 30%" value={fmt(c.indTax)} bg="bg-red-100" icon={Landmark} sub="Sec 115BBH" />
                <StatCard label="Net Profit" value={fmt(c.netProfit)} bg={c.netProfit >= 0 ? "bg-emerald-100" : "bg-red-200"} icon={Target} sub={`Net ROI: ${c.netRoi.toFixed(2)}%`} highlight={c.netProfit > 0} />
              </div>
            </div>

            {/* ── Charts Row ── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-gray-100">
                <h3 className="newq font-black text-gray-800 text-base sm:text-lg mb-0.5 flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" /> INR Flow
                </h3>
                <p className="newq text-xs sm:text-sm text-gray-400 mb-3">Sent vs Received vs Profit</p>
                <div className="h-44 sm:h-56">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={barData} barCategoryGap="30%">
                      <XAxis dataKey="name" tick={{ fontSize: 10, fontWeight: 700 }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fontSize: 10 }} axisLine={false} tickLine={false} tickFormatter={(v) => `₹${(v / 1000).toFixed(0)}k`} width={45} />
                      <Tooltip content={<CustomTooltip />} />
                      <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                        {barData.map((_, i) => <Cell key={i} fill={BAR_COLORS[i]} />)}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {c.grossProfit > 0 && pieData.length > 0 && (
                <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-gray-100">
                  <h3 className="newq font-black text-gray-800 text-base sm:text-lg mb-0.5 flex items-center gap-2">
                    <PieChartIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" /> Profit Distribution
                  </h3>
                  <p className="newq text-xs sm:text-sm text-gray-400 mb-3">Net vs Taxes{c.hasRemitCharge ? " vs Remit" : ""}{c.hasTCS ? " vs TCS" : ""}</p>
                  <div className="h-44 sm:h-56">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie data={pieData} cx="50%" cy="45%" innerRadius="40%" outerRadius="65%" dataKey="value" paddingAngle={3}>
                          {pieData.map((_, i) => <Cell key={i} fill={PIE_COLORS[i]} />)}
                        </Pie>
                        <Tooltip formatter={(v) => fmt(v)} />
                        <Legend wrapperStyle={{ fontSize: 11, fontWeight: 700 }} iconSize={10} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              )}
            </div>

            {/* ── Tax Info Cards ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                {
                  flag: "🇪🇪", title: "Estonia Tax", sub: "Corporate / Personal Income Tax",
                  rate: "20%", rateBg: "bg-orange-200", rateC: "text-orange-600",
                  bg: "bg-orange-50", cardBg: "bg-orange-100", icon: Building2,
                  rows: [
                    { l: "Gross Profit", v: fmt(c.grossProfit) },
                    { l: "Tax (20%)", v: `- ${fmt(c.estTax)}`, red: true },
                    { l: "After Tax", v: fmt(c.afterEst), bold: true },
                  ],
                },
                {
                  flag: "🇮🇳", title: "India Tax", sub: "Section 115BBH — VDA Tax",
                  rate: "30%", rateBg: "bg-green-200", rateC: "text-green-700",
                  bg: "bg-green-50", cardBg: "bg-green-100", icon: Landmark,
                  rows: [
                    { l: "After Estonia Tax", v: fmt(c.afterEst) },
                    { l: "Tax (30%)", v: `- ${fmt(c.indTax)}`, red: true },
                    { l: "Net Profit", v: fmt(c.netProfit), bold: true, em: true },
                  ],
                },
              ].map(({ flag, title, sub, rate, rateBg, rateC, bg, cardBg, icon: Icon, rows }) => (
                <div key={title} className={`${bg} rounded-2xl sm:rounded-3xl p-4 sm:p-6`}>
                  <div className="flex items-center gap-2 sm:gap-3 mb-3">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 ${cardBg} rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl`}>
                      {Icon && <Icon className="w-5 h-5 sm:w-6 sm:h-6" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="newq font-black text-gray-800 text-base sm:text-lg">{title}</h3>
                      <p className="newq text-xs sm:text-sm text-gray-500 truncate">{sub}</p>
                    </div>
                    <div className={`${rateBg} rounded-xl sm:rounded-2xl px-2 sm:px-3 py-1 shrink-0`}>
                      <span className={`newq text-lg sm:text-2xl font-black ${rateC}`}>{rate}</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl sm:rounded-2xl p-3 space-y-1.5">
                    {rows.map(({ l, v, red, bold, em }) => (
                      <div key={l} className={`flex justify-between text-sm sm:text-base ${bold ? "border-t border-gray-100 pt-1.5" : ""}`}>
                        <span className={`newq ${bold ? "font-bold" : ""} text-gray-500`}>{l}</span>
                        <span className={`newq font-black ${red ? "text-red-500" : em ? "text-emerald-700" : "text-gray-800"} break-all ml-2 text-right`}>{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* ── Remittance Charges Paid ── */}
            {c.hasRemitCharge && (
              <div className="bg-amber-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6">
                <h3 className="newq font-black text-gray-800 text-base sm:text-lg mb-1 flex items-center gap-2">
                  <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" /> Remittance Charges Paid
                </h3>
                <p className="newq text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">Deducted before tax calculations</p>
                <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 mb-3">
                  <p className="newq text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Per Transaction</p>
                  <div className="space-y-1.5">
                    {c.remitFixed > 0 && (
                      <div className="flex justify-between text-sm sm:text-base">
                        <span className="newq text-gray-500 flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-400 shrink-0 inline-block" />Fixed SWIFT Fee</span>
                        <span className="newq font-bold text-gray-800 ml-2">{fmt(c.remitFixed)}</span>
                      </div>
                    )}
                    {c.remitPct > 0 && (
                      <div className="flex justify-between text-sm sm:text-base">
                        <span className="newq text-gray-500 flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-orange-400 shrink-0 inline-block" />Forex {c.remitPct}% markup</span>
                        <span className="newq font-bold text-gray-800 ml-2">{fmt(c.remitPctAmount)}</span>
                      </div>
                    )}
                    <div className="border-t border-gray-100 pt-1.5 flex justify-between text-sm sm:text-base">
                      <span className="newq font-black text-gray-600">Total (1 trade)</span>
                      <span className="newq font-black text-red-500">{fmt(c.totalRemitCharge)}</span>
                    </div>
                  </div>
                </div>
                {c.days > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { label: `📅 Monthly (${c.days} days)`, val: c.mRemitCharge },
                      { label: `🗓️ Yearly (${c.yDays} days)`, val: c.yRemitCharge },
                    ].map(({ label, val }) => (
                      <div key={label} className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4">
                        <p className="newq text-xs font-black text-gray-400 uppercase tracking-widest mb-2">{label}</p>
                        <div className="flex justify-between text-sm sm:text-base border-t border-gray-100 pt-2">
                          <span className="newq font-black text-gray-600">Total</span>
                          <span className="newq font-black text-red-500">{fmt(val)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* ── Full Cost Summary ── */}
            <div className="bg-violet-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6">
              <h3 className="newq font-black text-gray-800 text-base sm:text-lg mb-4 flex items-center gap-2">
                <Receipt className="w-4 h-4 sm:w-5 sm:h-5" /> Full Cost Summary (Per Trade)
              </h3>
              <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 mb-4 space-y-2">
                {[
                  { l: "Raw Spread (Received − Sent)", v: fmt(c.grossProfitBeforeCharge), sep: false },
                  ...(c.hasRemitCharge ? [{ l: "Less: Remittance Charges", v: `- ${fmt(c.totalRemitCharge)}`, c: "text-amber-600", sep: false }] : []),
                  ...(c.hasTCS ? [{ l: `Less: TCS ${tcsModeEnabled ? "(5% on full)" : "5% on excess"}`, v: `- ${fmt(c.tcsAmount)}`, c: tcsModeEnabled ? "text-purple-600" : "text-sky-600", sep: false, sub: "Refundable" }] : []),
                  { l: "Gross Profit (pre-tax)", v: fmt(c.grossProfit), c: "text-teal-700", sep: true, bold: true },
                  { l: "Less: Estonia Tax (20%)", v: `- ${fmt(c.estTax)}`, c: "text-orange-500", sep: false },
                  { l: "Less: India Tax 115BBH (30%)", v: `- ${fmt(c.indTax)}`, c: "text-red-500", sep: false },
                  { l: "Net Profit", v: fmt(c.netProfit), c: "text-emerald-700", sep: true, bold: true },
                ].map(({ l, v, c: col, sep, bold, sub: s }, i) => (
                  <div key={i}>
                    <div className={`flex justify-between gap-2 text-xs sm:text-base ${sep ? "border-t border-gray-100 pt-2" : ""}`}>
                      <span className={`newq ${bold ? "font-black text-gray-700" : "text-gray-500"} flex-1`}>{l}</span>
                      <span className={`newq font-black ${col || "text-gray-800"} text-right shrink-0`}>{v}</span>
                    </div>
                    {s && <p className="newq text-xs text-amber-400 font-semibold pl-2">{s}</p>}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                {[
                  ...(c.hasRemitCharge ? [{ l: "Remit", v: fmt(c.totalRemitCharge), c: "text-amber-500" }] : []),
                  ...(c.hasTCS ? [{ l: "TCS", v: fmt(c.tcsAmount), c: tcsModeEnabled ? "text-purple-500" : "text-sky-500", sub: "Refundable" }] : []),
                  { l: "Total Tax", v: fmt(c.totalTax), c: "text-red-500" },
                  { l: "Eff. Tax Rate", v: `${c.effTaxRate.toFixed(1)}%`, c: "text-orange-500" },
                  { l: "Net Profit", v: fmt(c.netProfit), c: "text-emerald-600" },
                  { l: "Net ROI", v: `${c.netRoi.toFixed(2)}%`, c: "text-blue-600" },
                ].map(({ l, v, c: col, sub: s }) => (
                  <div key={l} className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center">
                    <p className="newq text-xs text-gray-400 font-bold uppercase leading-tight">{l}</p>
                    <p className={`newq text-sm sm:text-xl font-black ${col} mt-1 break-all`}>{v}</p>
                    {s && <p className="newq text-xs text-amber-400 font-semibold">{s}</p>}
                  </div>
                ))}
              </div>
            </div>

            {/* ── Monthly Projection ── */}
            {c.days > 0 && (
              <div>
                <h2 className="newq text-xs sm:text-base font-black text-gray-500 uppercase tracking-widest mb-3 sm:mb-4 flex items-center gap-2">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4" /> Monthly Projection ({c.days} days)
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 mb-4">
                  <StatCard label="Monthly Gross" value={fmt(c.mGross)} bg="bg-teal-100" icon={TrendingUp} />
                  {c.hasRemitCharge && <StatCard label="Remit (month)" value={fmt(c.mRemitCharge)} bg="bg-amber-100" icon={CreditCard} />}
                  {c.hasTCS && <StatCard label="TCS (month)" value={fmt(c.mTCS)} bg={tcsModeEnabled ? "bg-purple-100" : "bg-sky-100"} icon={Landmark} sub="Refundable" />}
                  <StatCard label="Estonia Tax" value={fmt(c.mEstTax)} bg="bg-orange-100" icon={Building2} />
                  <StatCard label="India Tax" value={fmt(c.mIndTax)} bg="bg-red-100" icon={Landmark} />
                  <StatCard label="Monthly Net" value={fmt(c.mNet)} bg="bg-emerald-100" icon={Target} sub="After all deductions" highlight={c.mNet > 0} />
                  <StatCard label="Total Tax" value={fmt(c.mTotalTax)} bg="bg-gray-100" icon={Receipt} />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-gray-100">
                    <h3 className="newq font-black text-gray-800 text-base sm:text-lg mb-0.5 flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" /> Monthly Stages
                    </h3>
                    <p className="newq text-xs sm:text-sm text-gray-400 mb-3">Gross → After Estonia → Net</p>
                    <div className="h-44 sm:h-56">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={monthlyBarData} barCategoryGap="40%">
                          <XAxis dataKey="name" tick={{ fontSize: 11, fontWeight: 700 }} axisLine={false} tickLine={false} />
                          <YAxis tick={{ fontSize: 10 }} axisLine={false} tickLine={false} tickFormatter={(v) => `₹${(v / 1000).toFixed(0)}k`} width={42} />
                          <Tooltip content={<CustomTooltip />} />
                          <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                            <Cell fill="#6ee7b7" /><Cell fill="#fcd34d" /><Cell fill="#86efac" />
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  {projectionData.length > 1 && (
                    <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-gray-100">
                      <h3 className="newq font-black text-gray-800 text-base sm:text-lg mb-0.5 flex items-center gap-2">
                        <LineChartIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" /> Cumulative Net
                      </h3>
                      <p className="newq text-xs sm:text-sm text-gray-400 mb-3">Day-by-day accumulation</p>
                      <div className="h-44 sm:h-56">
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={projectionData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                            <XAxis dataKey="day" tick={{ fontSize: 9 }} interval={Math.floor(projectionData.length / 4)} axisLine={false} tickLine={false} />
                            <YAxis tick={{ fontSize: 10 }} axisLine={false} tickLine={false} tickFormatter={(v) => `₹${(v / 1000).toFixed(0)}k`} width={42} />
                            <Tooltip content={<CustomTooltip />} />
                            <Line type="monotone" dataKey="cumulative" stroke="#6ee7b7" strokeWidth={3} dot={false} />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* ── Yearly Projection ── */}
            {c.days > 0 && (
              <div>
                <h2 className="newq text-xs sm:text-base font-black text-gray-500 uppercase tracking-widest mb-3 sm:mb-4 flex items-center gap-2">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4" /> Yearly Projection ({c.yDays} days / year)
                </h2>

                {/* Annual highlight banner */}
                <div className="bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-100 rounded-2xl sm:rounded-3xl p-4 sm:p-5 mb-4">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-2xl sm:rounded-3xl flex items-center justify-center text-2xl sm:text-3xl shadow-sm shrink-0">
                      <Target className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-600" />
                    </div>
                    <div className="flex-1 text-center sm:text-left min-w-0">
                      <p className="newq text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Annual Net Profit</p>
                      <p className="newq text-3xl sm:text-4xl font-black text-emerald-700 break-all">{fmt(c.yNet)}</p>
                      <p className="newq text-xs sm:text-sm text-gray-400 mt-1">{c.days} days × 12 mo × {fmt(c.netProfit)}/trade</p>
                    </div>
                    <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                      {[
                        { l: "Annual ROI", v: `${c.netRoi.toFixed(2)}%`, c: "text-blue-600", sub: "per trade" },
                        { l: "Tax/Year", v: fmt(c.yTotalTax), c: "text-red-500", sub: "EE + IN" },
                        ...(c.hasRemitCharge ? [{ l: "Remit/Year", v: fmt(c.yRemitCharge), c: "text-amber-500" }] : []),
                        ...(c.hasTCS ? [{ l: "TCS/Year", v: fmt(c.yTCS), c: tcsModeEnabled ? "text-purple-500" : "text-sky-500", sub: "Refundable" }] : []),
                      ].map(({ l, v, c: col, sub: s }) => (
                        <div key={l} className="bg-white rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 sm:py-3 text-center shadow-sm">
                          <p className="newq text-xs text-gray-400 font-bold uppercase">{l}</p>
                          <p className={`newq text-base sm:text-2xl font-black ${col} break-all`}>{v}</p>
                          {s && <p className="newq text-xs text-gray-400">{s}</p>}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 mb-4">
                  <StatCard label="Yearly Gross" value={fmt(c.yGross)} bg="bg-teal-100" icon={TrendingUp} sub={`${c.yDays} days`} />
                  {c.hasRemitCharge && <StatCard label="Remit (year)" value={fmt(c.yRemitCharge)} bg="bg-amber-100" icon={CreditCard} />}
                  {c.hasTCS && <StatCard label="TCS (year)" value={fmt(c.yTCS)} bg={tcsModeEnabled ? "bg-purple-100" : "bg-sky-100"} icon={Landmark} sub="Refundable" />}
                  <StatCard label="Estonia Tax" value={fmt(c.yEstTax)} bg="bg-orange-100" icon={Building2} sub="20%" />
                  <StatCard label="After Estonia" value={fmt(c.yAfterEst)} bg="bg-lime-100" icon={Globe2} />
                  <StatCard label="India Tax" value={fmt(c.yIndTax)} bg="bg-red-100" icon={Landmark} sub="30%" />
                  <StatCard label="Total Tax" value={fmt(c.yTotalTax)} bg="bg-gray-100" icon={Receipt} sub={`${c.effTaxRate.toFixed(1)}% eff.`} />
                  <StatCard label="Annual Net" value={fmt(c.yNet)} bg="bg-emerald-100" icon={Target} sub="After all deductions" highlight={c.yNet > 0} />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-gray-100">
                    <h3 className="newq font-black text-gray-800 text-base sm:text-lg mb-0.5 flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" /> Yearly Stages
                    </h3>
                    <p className="newq text-xs sm:text-sm text-gray-400 mb-3">Gross → After Estonia → Net</p>
                    <div className="h-44 sm:h-56">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={yearlyBarData} barCategoryGap="40%">
                          <XAxis dataKey="name" tick={{ fontSize: 11, fontWeight: 700 }} axisLine={false} tickLine={false} />
                          <YAxis tick={{ fontSize: 10 }} axisLine={false} tickLine={false} tickFormatter={(v) => `₹${(v / 100000).toFixed(1)}L`} width={42} />
                          <Tooltip content={<CustomTooltip />} />
                          <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                            <Cell fill="#6ee7b7" /><Cell fill="#fcd34d" /><Cell fill="#86efac" />
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  {yearlyProjectionData.length > 1 && (
                    <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-gray-100">
                      <h3 className="newq font-black text-gray-800 text-base sm:text-lg mb-0.5 flex items-center gap-2">
                        <LineChartIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" /> 12-Month Cumulative
                      </h3>
                      <p className="newq text-xs sm:text-sm text-gray-400 mb-3">Net profit over 12 months</p>
                      <div className="h-44 sm:h-56">
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={yearlyProjectionData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                            <XAxis dataKey="month" tick={{ fontSize: 10, fontWeight: 700 }} axisLine={false} tickLine={false} />
                            <YAxis tick={{ fontSize: 10 }} axisLine={false} tickLine={false} tickFormatter={(v) => `₹${(v / 100000).toFixed(1)}L`} width={42} />
                            <Tooltip content={<CustomTooltip />} />
                            <Line type="monotone" dataKey="gross" stroke="#fcd34d" strokeWidth={2} dot={false} strokeDasharray="5 5" name="Gross" />
                            <Line type="monotone" dataKey="cumulative" stroke="#34d399" strokeWidth={3} dot={{ r: 3, fill: "#34d399" }} name="Net" />
                            <Legend wrapperStyle={{ fontSize: 12, fontWeight: 700 }} iconSize={10} />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  )}
                </div>

                {/* Annual Tax Breakdown */}
                <div className="mt-3 sm:mt-4 bg-violet-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6">
                  <h3 className="newq font-black text-gray-800 text-base sm:text-lg mb-4 flex items-center gap-2">
                    <Receipt className="w-4 h-4 sm:w-5 sm:h-5" /> Annual Tax Breakdown
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {[
                      {
                        flag: "🇪🇪", title: "Estonia — Annual", icon: Building2,
                        rows: [
                          { l: "Yearly Gross", v: fmt(c.yGross) },
                          { l: "Tax @ 20%", v: `- ${fmt(c.yEstTax)}`, red: true },
                          { l: "After Tax", v: fmt(c.yAfterEst), bold: true },
                        ],
                      },
                      {
                        flag: "🇮🇳", title: "India — Annual", icon: Landmark,
                        rows: [
                          { l: "After Estonia", v: fmt(c.yAfterEst) },
                          { l: "Tax @ 30%", v: `- ${fmt(c.yIndTax)}`, red: true },
                          { l: "Annual Net", v: fmt(c.yNet), bold: true, em: true },
                        ],
                      },
                    ].map(({ flag, title, icon: Icon, rows }) => (
                      <div key={title} className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 space-y-2">
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                          <span className="newq font-black text-gray-700 text-sm sm:text-base">{title}</span>
                        </div>
                        {rows.map(({ l, v, red, bold, em }) => (
                          <div key={l} className={`flex justify-between gap-2 text-sm sm:text-base ${bold ? "border-t border-gray-100 pt-2" : ""}`}>
                            <span className={`newq ${bold ? "font-bold" : ""} text-gray-500`}>{l}</span>
                            <span className={`newq font-black ${red ? "text-red-500" : em ? "text-emerald-700" : "text-gray-800"} break-all text-right ml-2`}>{v}</span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* ── Empty State ── */}
        {!c.hasData && (
          <div className="newq bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 text-center border border-gray-100">
            <div className="text-5xl sm:text-6xl mb-4">💱</div>
            <h3 className="newq text-xl sm:text-2xl font-black text-gray-700 mb-2">Fill in the details above</h3>
            <p className="newq text-gray-400 text-sm sm:text-base max-w-sm mx-auto">
              Enter remittance amount, EUR rate, USDT price, and INR sell rate to see full profit analysis with tax breakdowns.
            </p>
          </div>
        )}

        {/* ── Footer ── */}
        <div className="text-center py-3 sm:py-4 px-2">
          <p className="newq text-xs sm:text-sm text-gray-400">ArbiFlow • INR → EUR → USDT → INR Arbitrage Tracker</p>
          <p className="newq text-xs text-gray-400 mt-1 leading-relaxed">
            Tax rates indicative. Consult a tax advisor. India: 115BBH @30% | Estonia: @20% | LRS TCS: 5% on excess above ₹10L (refundable via ITR) | Full TCS Mode: 5% on full amount
          </p>
        </div>
      </div>
    </div>
  );
}