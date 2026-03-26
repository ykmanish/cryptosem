// FILE: pages/solutions.jsx  (Next.js Pages Router)
// OR:  app/solutions/page.jsx (Next.js App Router)
// ─────────────────────────────────────────────────────────────
// NFSU • MBA Cyber Security Management • Dec 2025
// Accounting for Managers — MBACS24-SI-3 — COMPLETE SOLUTIONS
// ─────────────────────────────────────────────────────────────

export default function ExamSolutions() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">

      {/* ──────────── HEADER ──────────── */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-10 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-2">
            National Forensic Sciences University — Gandhinagar Campus
          </p>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-2">
            Accounting for Managers
          </h1>
          <p className="text-gray-300 text-lg font-medium mb-4">
            MBA Cyber Security Management · Semester I · Dec 2025
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Badge label="Code" value="MBACS24-SI-3" />
            <Badge label="Date" value="17/12/2025" />
            <Badge label="Total Marks" value="100" />
            <Badge label="Time" value="2:00 PM – 5:00 PM" />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-10 space-y-16">

        {/* ═══════════════════════════════════════════════════════
            Q.1 (a)  —  STATEMENT OF PROFIT & LOSS               [10]
        ═══════════════════════════════════════════════════════ */}
        <Block id="q1a" code="Q.1 (a)" marks={10}
          title="Statement of Profit & Loss — Apex Healthcare Pvt. Ltd."
          subtitle="For the Year Ending 31 March 2024 · As per Schedule III, Companies (Amendment) Act 2013">

          <Callout color="amber">
            <CalloutTitle>📋 Given Data (from Trial Balance)</CalloutTitle>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2 text-sm">
              {[
                ["Sales Revenue", "₹18,50,000 (Cr)"],["Purchases", "₹8,40,000 (Dr)"],
                ["Closing Stock", "₹1,20,000 (Dr)"],["Salaries", "₹3,50,000 (Dr)"],
                ["Rent & Utilities", "₹1,10,000 (Dr)"],["Interest on Loan", "₹45,000 (Dr)"],
                ["Plant & Machinery", "₹9,00,000 (Dr)"],["12% Bank Loan", "₹4,00,000 (Cr)"],
                ["Trade Receivables", "₹2,80,000 (Dr)"],["Adjustments","Dep@10%, PDD@5%, O/S Sal ₹50k"],
              ].map(([k,v]) => (
                <div key={k} className="bg-amber-100 border border-amber-300 px-2 py-1 rounded-sm">
                  <span className="text-amber-800 font-semibold text-xs">{k}:</span>
                  <span className="text-amber-900 ml-1 text-xs font-bold">{v}</span>
                </div>
              ))}
            </div>
          </Callout>

          <Callout color="blue">
            <CalloutTitle>💡 Key Tricks & Concepts</CalloutTitle>
            <ul className="mt-2 space-y-1 text-sm text-blue-900">
              <li>▸ <b>Closing Stock in TB (Dr side)</b> → Already adjusted. COGS = Purchases (₹8,40,000) − Closing Stock (₹1,20,000) = ₹7,20,000</li>
              <li>▸ <b>Hidden Outstanding Interest</b> → 12% × ₹4,00,000 = ₹48,000 (total). TB shows only ₹45,000 paid → O/S = ₹3,000</li>
              <li>▸ <b>Depreciation</b> = 10% × ₹9,00,000 = ₹90,000 (adjustment, not in TB)</li>
              <li>▸ <b>Provision for Doubtful Debts</b> = 5% × ₹2,80,000 = ₹14,000</li>
              <li>▸ <b>Outstanding Salary</b> = ₹50,000 (add to Salaries → ₹3,50,000 + ₹50,000 = ₹4,00,000)</li>
            </ul>
          </Callout>

          <div className="mt-5 border-2 border-gray-800 overflow-x-auto">
            <div className="bg-gray-800 text-white text-center py-2 text-sm font-bold tracking-wide uppercase">
              Statement of Profit & Loss for the Year Ended 31st March 2024
            </div>
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-100 border-b-2 border-gray-800">
                  <th className="p-3 text-left border-r border-gray-400 w-1/2">Particulars</th>
                  <th className="p-3 text-center border-r border-gray-400 w-28">Note No.</th>
                  <th className="p-3 text-right w-40">Amount (₹)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-3 border-r border-gray-300 font-bold">I. Revenue from Operations</td>
                  <td className="p-3 border-r border-gray-300 text-center">—</td>
                  <td className="p-3 text-right font-bold">18,50,000</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 border-r border-gray-300 font-bold">II. Other Income</td>
                  <td className="p-3 border-r border-gray-300 text-center">—</td>
                  <td className="p-3 text-right">Nil</td>
                </tr>
                <tr className="border-b-2 border-gray-800 bg-gray-100">
                  <td className="p-3 border-r border-gray-400 font-black">III. Total Revenue (I + II)</td>
                  <td className="p-3 border-r border-gray-400 text-center"></td>
                  <td className="p-3 text-right font-black">18,50,000</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="p-3 border-r border-gray-300 font-bold" colSpan={3}>IV. Expenses:</td>
                </tr>
                <PLRow label="Cost of Goods Sold (₹8,40,000 − ₹1,20,000 Closing Stock)" note="WN 1" amt="7,20,000" />
                <PLRow label="Employee Benefits Expense (Salaries ₹3,50,000 + O/S ₹50,000)" note="Adj. 3" amt="4,00,000" />
                <PLRow label="Finance Costs (Int. Paid ₹45,000 + O/S Interest ₹3,000)" note="WN 2" amt="48,000" />
                <PLRow label="Depreciation & Amortisation (10% × ₹9,00,000)" note="Adj. 1" amt="90,000" />
                <PLRow label="Other Expenses (Rent ₹1,10,000 + Prov. for DD ₹14,000)" note="WN 3" amt="1,24,000" />
                <tr className="border-b-2 border-gray-800 bg-gray-100">
                  <td className="p-3 border-r border-gray-400 font-black">Total Expenses (IV)</td>
                  <td className="p-3 border-r border-gray-400 text-center text-xs text-gray-500"></td>
                  <td className="p-3 text-right font-black">13,82,000</td>
                </tr>
                <tr className="bg-green-50 border-b-2 border-gray-800">
                  <td className="p-3 border-r border-gray-400 font-black text-green-900 text-base">
                    V. Profit Before Tax (III − IV)
                  </td>
                  <td className="p-3 border-r border-gray-400 text-center"></td>
                  <td className="p-3 text-right font-black text-green-900 text-xl">4,68,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <WNBox notes={[
            { n: "WN 1", t: "COGS = Purchases (₹8,40,000) − Closing Stock (₹1,20,000) = ₹7,20,000. Closing Stock is on Dr side of TB → adjustment already passed." },
            { n: "WN 2", t: "Total Interest = 12% × ₹4,00,000 = ₹48,000. TB shows ₹45,000 paid. Outstanding = ₹3,000. Full ₹48,000 charged to Finance Costs." },
            { n: "WN 3", t: "Provision for Doubtful Debts = 5% × ₹2,80,000 (Trade Receivables) = ₹14,000. Added to Other Expenses." },
          ]} />
        </Block>

        {/* ═══════════════════════════════════════════════════════
            Q.1 (b)  —  ATTEMPT ANY TWO                          [10]
        ═══════════════════════════════════════════════════════ */}
        <Block id="q1b" code="Q.1 (b)" marks="10 (Attempt Any Two × 5)"
          title="Short Answer Questions">

          {/* Option i */}
          <OptionHeader num="i" title="Steps to Make Financial Statements Understandable & Decision-Useful" />
          <p className="text-sm text-gray-700 mb-3 italic">
            (As Senior Accountant of XYZ Limited — Steps to improve financial statement quality)
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              ["1. Follow Accounting Standards", "Ensure all statements comply with Ind AS / AS issued by ICAI and Schedule III of Companies Act 2013. This ensures comparability and reliability."],
              ["2. Use Clear & Consistent Format", "Present Balance Sheet, P&L, and Cash Flow in the prescribed Schedule III format with proper headings, sub-headings and note numbers."],
              ["3. Provide Adequate Disclosures", "Include notes to accounts explaining significant accounting policies, contingencies, related party transactions, and assumptions used."],
              ["4. Ensure Comparability", "Present figures for the current year alongside the previous year to enable trend analysis and benchmarking."],
              ["5. Maintain Materiality & Aggregation", "Disclose every material item separately. Immaterial items may be aggregated to avoid clutter without losing decision-relevance."],
              ["6. Apply Conservatism/Prudence", "Provide for all anticipated losses (e.g., doubtful debts, inventory write-downs) but recognise profits only when realised."],
            ].map(([h, d]) => (
              <div key={h} className="border border-gray-300 p-3 bg-white">
                <p className="font-bold text-gray-800 text-sm mb-1">{h}</p>
                <p className="text-xs text-gray-600">{d}</p>
              </div>
            ))}
          </div>

          {/* Option ii */}
          <OptionHeader num="ii" title="Categorise Items under Schedule III — Companies (Amendment) Act 2013" />
          <div className="overflow-x-auto border-2 border-gray-800">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="p-3 border-r border-gray-600 w-10">Sr.</th>
                  <th className="p-3 text-left border-r border-gray-600">Item</th>
                  <th className="p-3 text-left border-r border-gray-600">Major Head</th>
                  <th className="p-3 text-left">Sub-Head</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["1","Goodwill","Non-Current Assets","Fixed Assets → Intangible Assets"],
                  ["2","Investment in Shares & Debentures","Non-Current Assets","Non-Current Investments"],
                  ["3","Loose Tools","Current Assets","Inventories"],
                  ["4","Provision for Taxation","Current Liabilities","Short-Term Provisions"],
                  ["5","Pre-paid Insurance","Current Assets","Other Current Assets"],
                ].map(([n,item,major,sub]) => (
                  <tr key={n} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-3 border-r border-gray-300 text-center font-bold text-gray-600">{n}</td>
                    <td className="p-3 border-r border-gray-300 font-semibold">{item}</td>
                    <td className="p-3 border-r border-gray-300 text-blue-800 font-bold">{major}</td>
                    <td className="p-3 text-green-800">{sub}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Option iii */}
          <OptionHeader num="iii" title="Accounting Concepts / Conventions — Identify the Concept" />
          <div className="overflow-x-auto border-2 border-gray-800">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="p-3 border-r border-gray-600 w-8">No.</th>
                  <th className="p-3 text-left border-r border-gray-600">Statement</th>
                  <th className="p-3 text-left">Accounting Concept</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["1","If a firm believes some debtors may default, it should act by providing for all possible losses in the books.","Prudence / Conservatism Concept"],
                  ["2","A business is separate and distinguishable from its owner.","Business Entity Concept"],
                  ["3","Everything a firm owns, it also owes to somebody (Assets = Liabilities + Capital).","Dual Aspect Concept"],
                  ["4","If straight-line depreciation is used in one year, it should be used in the next year too.","Consistency Concept"],
                  ["5","If a firm receives an order for goods, it would not be included in the sales figure.","Revenue Realization Concept"],
                ].map(([n,s,c]) => (
                  <tr key={n} className="border-b border-gray-200 hover:bg-gray-50 align-top">
                    <td className="p-3 border-r border-gray-300 font-bold text-center">{n}</td>
                    <td className="p-3 border-r border-gray-300 text-gray-700 text-xs">{s}</td>
                    <td className="p-3 font-bold text-green-800">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Block>

        {/* ═══════════════════════════════════════════════════════
            Q.2 (a)  —  COMPARATIVE BALANCE SHEET                [10]
        ═══════════════════════════════════════════════════════ */}
        <Block id="q2a" code="Q.2 (a)" marks={10}
          title="Comparative Balance Sheet — J. Ltd."
          subtitle="As at March 31, 2016 & March 31, 2017">

          <Callout color="blue">
            <CalloutTitle>💡 Formula & Trick</CalloutTitle>
            <p className="text-sm text-blue-900 mt-1">
              <b>Absolute Change</b> = 2017 Value − 2016 Value &nbsp;|&nbsp;
              <b>% Change</b> = (Absolute Change ÷ 2016 Value) × 100.
              Always use the <u>earlier year as the base (denominator)</u> for % calculation.
            </p>
          </Callout>

          <div className="mt-4 border-2 border-gray-800 overflow-x-auto">
            <div className="bg-gray-800 text-white text-center py-2 text-sm font-bold uppercase tracking-wide">
              Comparative Balance Sheet of J. Ltd. as at 31st March 2016 & 2017
            </div>
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-100 border-b-2 border-gray-800 text-xs">
                  <th className="p-3 text-left border-r border-gray-400">Particulars</th>
                  <th className="p-3 text-right border-r border-gray-400">Mar 31, 2017 (₹)</th>
                  <th className="p-3 text-right border-r border-gray-400">Mar 31, 2016 (₹)</th>
                  <th className="p-3 text-right border-r border-gray-400">Abs. Change (₹)</th>
                  <th className="p-3 text-right">% Change</th>
                </tr>
              </thead>
              <tbody>
                <CompSectionRow label="I. EQUITY & LIABILITIES" />
                <CompSectionRow label="1. Shareholders' Funds" sub />
                <CompRow label="a) Share Capital" v17="20,00,000" v16="15,00,000" abs="+5,00,000" pct="+33.33%" pos />
                <CompRow label="b) Reserve & Surplus" v17="3,00,000" v16="4,00,000" abs="−1,00,000" pct="−25.00%" neg />
                <CompSectionRow label="2. Non-Current Liabilities" sub />
                <CompRow label="Long-term Borrowings" v17="9,00,000" v16="6,00,000" abs="+3,00,000" pct="+50.00%" pos />
                <CompSectionRow label="3. Current Liabilities" sub />
                <CompRow label="Trade Payables" v17="3,00,000" v16="2,00,000" abs="+1,00,000" pct="+50.00%" pos />
                <CompRow label="TOTAL (A)" v17="35,00,000" v16="27,00,000" abs="+8,00,000" pct="+29.63%" bold />
                <CompSectionRow label="II. ASSETS" />
                <CompSectionRow label="1. Non-Current Assets — Fixed Assets" sub />
                <CompRow label="a) Tangible Assets" v17="20,00,000" v16="15,00,000" abs="+5,00,000" pct="+33.33%" pos />
                <CompRow label="b) Intangible Assets" v17="9,00,000" v16="6,00,000" abs="+3,00,000" pct="+50.00%" pos />
                <CompSectionRow label="2. Current Assets" sub />
                <CompRow label="Inventories" v17="3,00,000" v16="4,00,000" abs="−1,00,000" pct="−25.00%" neg />
                <CompRow label="Cash & Cash Equivalents" v17="3,00,000" v16="2,00,000" abs="+1,00,000" pct="+50.00%" pos />
                <CompRow label="TOTAL (B)" v17="35,00,000" v16="27,00,000" abs="+8,00,000" pct="+29.63%" bold />
              </tbody>
            </table>
          </div>
          <div className="mt-3 border border-gray-300 bg-white p-4">
            <p className="font-bold text-gray-800 text-sm mb-2">📊 Interpretation (Write This in Exam for Full Marks)</p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-gray-700">
              <li>Share Capital increased by <b>33.33%</b> — indicates fresh equity issue; company is mobilising capital.</li>
              <li>Long-term Borrowings rose by <b>50%</b> — company is taking on significant debt for expansion.</li>
              <li>Both Tangible (+33.33%) and Intangible Assets (+50%) grew — major investment in productive capacity and brand/IP.</li>
              <li>Reserves declined by <b>25%</b> — possible dividend distribution or accumulated losses eating into reserves.</li>
              <li>Overall Balance Sheet expanded by <b>29.63%</b> — growth phase, but increasing leverage requires monitoring.</li>
            </ul>
          </div>
        </Block>

        {/* ═══════════════════════════════════════════════════════
            Q.2 (b)  —  ATTEMPT ANY TWO                          [10]
        ═══════════════════════════════════════════════════════ */}
        <Block id="q2b" code="Q.2 (b)" marks="10 (Attempt Any Two × 5)"
          title="Analytical Statements">

          {/* Option i — Common Size Balance Sheet */}
          <OptionHeader num="i" title="Common Size Balance Sheet — Aditya Ltd. & Anjali Ltd." />
          <Callout color="amber">
            <CalloutTitle>💡 Trick: Base = Total (Balance Sheet Total = 100%)</CalloutTitle>
            <p className="text-sm text-amber-900 mt-1">Every item % = (Item Value ÷ Balance Sheet Total) × 100. Aditya Total = ₹10,00,000 | Anjali Total = ₹12,00,000</p>
          </Callout>
          <div className="mt-3 border-2 border-gray-800 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-800 text-white text-xs">
                  <th className="p-3 text-left border-r border-gray-600">Particulars</th>
                  <th className="p-3 text-right border-r border-gray-600">Aditya (₹)</th>
                  <th className="p-3 text-right border-r border-gray-600 bg-blue-900">Aditya %</th>
                  <th className="p-3 text-right border-r border-gray-600">Anjali (₹)</th>
                  <th className="p-3 text-right bg-purple-900">Anjali %</th>
                </tr>
              </thead>
              <tbody>
                <CSSectionRow label="I. EQUITY & LIABILITIES" />
                <CSSectionRow label="1. Shareholders' Funds" sub />
                <CSRow label="a) Equity Share Capital" a="6,00,000" ap="60.00%" b="8,00,000" bp="66.67%" />
                <CSRow label="b) Reserves & Surplus" a="3,00,000" ap="30.00%" b="2,50,000" bp="20.83%" />
                <CSSectionRow label="2. Current Liabilities" sub />
                <CSRow label="Current Liabilities" a="1,00,000" ap="10.00%" b="1,50,000" bp="12.50%" />
                <CSRow label="TOTAL" a="10,00,000" ap="100.00%" b="12,00,000" bp="100.00%" bold />
                <CSSectionRow label="II. ASSETS" />
                <CSSectionRow label="1. Non-Current Assets" sub />
                <CSRow label="a) Fixed Assets" a="4,00,000" ap="40.00%" b="7,00,000" bp="58.33%" />
                <CSSectionRow label="2. Current Assets" sub />
                <CSRow label="Current Assets" a="6,00,000" ap="60.00%" b="5,00,000" bp="41.67%" />
                <CSRow label="TOTAL" a="10,00,000" ap="100.00%" b="12,00,000" bp="100.00%" bold />
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600 mt-2 italic border-l-4 border-gray-400 pl-3">
            Interpretation: Anjali has higher fixed asset proportion (58.33% vs 40%) indicating more capital-intensive operations.
            Aditya is more liquid with 60% current assets. Both have healthy equity structures with minimal liabilities.
          </p>

          {/* Option ii — Common Size Income Statement */}
          <OptionHeader num="ii" title="Common Size Income Statement — Year Ended Mar 31, 2016 & 2017" />
          <Callout color="amber">
            <CalloutTitle>💡 Trick: Base = Revenue from Operations = 100%</CalloutTitle>
            <p className="text-sm text-amber-900 mt-1">Every P&L item % = (Item ÷ Revenue from Operations) × 100.</p>
          </Callout>
          <div className="mt-3 border-2 border-gray-800 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-800 text-white text-xs">
                  <th className="p-3 text-left border-r border-gray-600">Particulars</th>
                  <th className="p-3 text-right border-r border-gray-600">2016–17 (₹)</th>
                  <th className="p-3 text-right border-r border-gray-600 bg-blue-900">% of Rev</th>
                  <th className="p-3 text-right border-r border-gray-600">2015–16 (₹)</th>
                  <th className="p-3 text-right bg-green-900">% of Rev</th>
                </tr>
              </thead>
              <tbody>
                <CSISRow label="Revenue from Operations" a="18,00,000" ap="100.00%" b="25,00,000" bp="100.00%" bold />
                <CSISRow label="Less: Cost of Goods Sold" a="10,00,000" ap="55.56%" b="12,00,000" bp="48.00%" neg />
                <CSISRow label="Gross Profit" a="8,00,000" ap="44.44%" b="13,00,000" bp="52.00%" bold />
                <CSISRow label="Less: Operating Expenses" a="80,000" ap="4.44%" b="1,20,000" bp="4.80%" neg />
                <CSISRow label="Net Operating Profit" a="7,20,000" ap="40.00%" b="11,80,000" bp="47.20%" bold profit />
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600 mt-2 italic border-l-4 border-gray-400 pl-3">
            Interpretation: COGS% jumped from 48% to 55.56% — cost efficiency worsened. Net profit margin fell from 47.20% to 40.00%.
            Despite lower revenue in 2016-17, cost control needs immediate attention.
          </p>

          {/* Option iii — Cash Flow Classification */}
          <OptionHeader num="iii" title="Classify Activities: Operating / Investing / Financing (As per AS 3)" />
          <Callout color="blue">
            <CalloutTitle>💡 Memory Trick — OIF Rule</CalloutTitle>
            <p className="text-sm text-blue-900 mt-1">
              <b>O</b>perating = Daily business (buying/selling goods, salaries, overheads) |
              <b> I</b>nvesting = Long-term assets (buy/sell machinery, investments) |
              <b> F</b>inancing = Raising/repaying capital (loans, shares, dividends)
            </p>
          </Callout>
          <div className="mt-3 border-2 border-gray-800 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="p-3 border-r border-gray-600 w-8">No.</th>
                  <th className="p-3 text-left border-r border-gray-600">Activity</th>
                  <th className="p-3 text-left border-r border-gray-600">Classification</th>
                  <th className="p-3 text-left">Nature</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["1","Purchase of Machinery","Investing Activity","Cash Outflow"],
                  ["2","Proceeds from Long-term Borrowings","Financing Activity","Cash Inflow"],
                  ["3","Proceeds from Sale of Non-current Investment","Investing Activity","Cash Inflow"],
                  ["4","Cash Paid to Supplier","Operating Activity","Cash Outflow"],
                  ["5","Manufacturing Overheads Paid","Operating Activity","Cash Outflow"],
                ].map(([n,act,cls,flow]) => (
                  <tr key={n} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-3 border-r border-gray-300 text-center font-bold">{n}</td>
                    <td className="p-3 border-r border-gray-300">{act}</td>
                    <td className={`p-3 border-r border-gray-300 font-bold ${cls==="Operating Activity"?"text-blue-800":cls==="Investing Activity"?"text-green-800":"text-purple-800"}`}>{cls}</td>
                    <td className={`p-3 font-semibold ${flow.includes("Inflow")?"text-green-600":"text-red-600"}`}>{flow}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Block>

        {/* ═══════════════════════════════════════════════════════
            Q.3 (a)  —  ALTMAN Z-SCORE                          [10]
        ═══════════════════════════════════════════════════════ */}
        <Block id="q3a" code="Q.3 (a)" marks={10}
          title="Altman's Z-Score Model — Orion Textiles Ltd."
          subtitle="Compute Z-Score and Interpret the Result">

          <Callout color="amber">
            <CalloutTitle>📋 Given Data</CalloutTitle>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2 text-xs">
              {[
                ["Current Assets","₹3,50,000"],["Current Liabilities","₹2,00,000"],
                ["Retained Earnings","₹2,00,000"],["EBIT","₹1,20,000"],
                ["Net Sales","₹8,00,000"],["Total Assets","₹10,00,000"],
                ["BV Total Liabilities","₹4,00,000"],["Shares Outstanding","50,000 @ ₹40"],
              ].map(([k,v]) => (
                <div key={k} className="bg-amber-100 border border-amber-300 px-2 py-1 rounded-sm">
                  <div className="text-amber-700 font-semibold">{k}</div>
                  <div className="text-amber-900 font-black">{v}</div>
                </div>
              ))}
            </div>
          </Callout>

          <Callout color="blue">
            <CalloutTitle>💡 Formula (Publicly Traded Manufacturing Firms)</CalloutTitle>
            <p className="text-sm text-blue-900 mt-1 font-mono bg-blue-100 p-2 rounded-sm">
              Z = 1.2X₁ + 1.4X₂ + 3.3X₃ + 0.6X₄ + 1.0X₅
            </p>
            <p className="text-xs text-blue-800 mt-1">Memorise coefficients: <b>1.2 | 1.4 | 3.3 | 0.6 | 1.0</b></p>
          </Callout>

          <div className="mt-4 border-2 border-gray-800 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-800 text-white text-xs">
                  <th className="p-3 border-r border-gray-600 w-12">Var.</th>
                  <th className="p-3 text-left border-r border-gray-600">Ratio Name</th>
                  <th className="p-3 text-left border-r border-gray-600">Calculation</th>
                  <th className="p-3 text-right border-r border-gray-600">Value</th>
                  <th className="p-3 text-right border-r border-gray-600">Coeff.</th>
                  <th className="p-3 text-right">Weighted</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["X₁","Working Capital / Total Assets","(3,50,000 − 2,00,000) / 10,00,000 = 1,50,000/10,00,000","0.15","× 1.2","0.180"],
                  ["X₂","Retained Earnings / Total Assets","2,00,000 / 10,00,000","0.20","× 1.4","0.280"],
                  ["X₃","EBIT / Total Assets","1,20,000 / 10,00,000","0.12","× 3.3","0.396"],
                  ["X₄","Mkt Value of Equity / BV of Liabilities","(50,000 × ₹40) / 4,00,000 = 20,00,000/4,00,000","5.00","× 0.6","3.000"],
                  ["X₅","Net Sales / Total Assets","8,00,000 / 10,00,000","0.80","× 1.0","0.800"],
                ].map(([v,r,c,val,co,wt]) => (
                  <tr key={v} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-3 border-r border-gray-300 font-black text-blue-800 text-center text-base">{v}</td>
                    <td className="p-3 border-r border-gray-300 font-medium">{r}</td>
                    <td className="p-3 border-r border-gray-300 text-xs text-gray-500 font-mono">{c}</td>
                    <td className="p-3 border-r border-gray-300 text-right font-bold">{val}</td>
                    <td className="p-3 border-r border-gray-300 text-right text-purple-800 font-bold">{co}</td>
                    <td className="p-3 text-right font-bold text-green-700">{wt}</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-gray-800 bg-gray-100">
                  <td colSpan={5} className="p-3 border-r border-gray-800 text-right font-black text-lg">
                    Z-Score = 0.180 + 0.280 + 0.396 + 3.000 + 0.800 =
                  </td>
                  <td className="p-3 text-right font-black text-2xl text-green-900">4.656</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-1 text-center text-xs border-2 border-gray-800 overflow-hidden">
            <div className="bg-red-100 border-r-2 border-gray-800 p-3">
              <p className="font-black text-red-800 text-base">Z &lt; 1.81</p>
              <p className="text-red-700 font-bold">🔴 DISTRESS ZONE</p>
              <p className="text-red-600">High bankruptcy risk</p>
            </div>
            <div className="bg-yellow-100 border-r-2 border-gray-800 p-3">
              <p className="font-black text-yellow-800 text-base">1.81 – 2.99</p>
              <p className="text-yellow-700 font-bold">⚠️ GREY ZONE</p>
              <p className="text-yellow-600">Uncertain, monitor closely</p>
            </div>
            <div className="bg-green-200 p-3">
              <p className="font-black text-green-900 text-base">Z &gt; 2.99</p>
              <p className="text-green-800 font-bold">✅ SAFE ZONE</p>
              <p className="text-green-700">Financially healthy</p>
            </div>
          </div>
          <div className="mt-3 bg-green-50 border-2 border-green-700 p-4">
            <p className="font-black text-green-900 text-lg">
              ✅ Z-Score = 4.656 → <span className="underline">SAFE ZONE</span>
            </p>
            <p className="text-sm text-green-800 mt-1">
              Orion Textiles Ltd. is <b>financially healthy and at very low risk of bankruptcy</b>.
              The dominant contributor is X₄ = 3.000 (Market Value of Equity = ₹20,00,000 vs Liabilities = ₹4,00,000),
              showing strong market confidence. The company has a comfortable working capital position (X₁ = 0.15)
              and stable sales generation (X₅ = 0.80).
            </p>
          </div>
        </Block>

        {/* ═══════════════════════════════════════════════════════
            Q.3 (b)  —  ATTEMPT ANY TWO                          [10]
        ═══════════════════════════════════════════════════════ */}
        <Block id="q3b" code="Q.3 (b)" marks="10 (Attempt Any Two × 5)"
          title="Financial Ratios & Analysis">

          {/* Option i */}
          <OptionHeader num="i" title="Current Ratio = 2:1 — Effect of Each Transaction (Improve / Reduce / No Change)" />
          <Callout color="blue">
            <CalloutTitle>💡 Logic Rule</CalloutTitle>
            <p className="text-sm text-blue-900 mt-1">
              CR = CA/CL = 2 (CA &gt; CL). When CR &gt; 1: Equal increase in both CA & CL → CR <b>reduces</b> (moves toward 1).
              Equal decrease in both CA & CL → CR <b>improves</b>. Only CA changes → depends on direction.
            </p>
          </Callout>
          <div className="mt-3 border-2 border-gray-800 overflow-x-auto">
            <table className="w-full border-collapse text-xs md:text-sm">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="p-3 border-r border-gray-600 w-8">No.</th>
                  <th className="p-3 text-left border-r border-gray-600">Transaction</th>
                  <th className="p-3 text-left border-r border-gray-600">CA Change</th>
                  <th className="p-3 text-left border-r border-gray-600">CL Change</th>
                  <th className="p-3 text-left">Effect on CR</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["1","Payment of Current Liability (cash paid)","CA ↓ (Cash reduces)","CL ↓ (Equal amount)","IMPROVE — Both fall equally; since CA > CL, ratio moves further from 1 upward","green"],
                  ["2","Purchased Goods on Credit","CA ↑ (Stock increases)","CL ↑ (Creditors increase equally)","REDUCE — Equal increase in both; since CR > 1, ratio moves toward 1","red"],
                  ["3","Sale of Computer (BV ₹4,000) for ₹3,000 only","CA ↑ ₹3,000 (Cash) — Non-current FA ↓ ₹4,000","No change","REDUCE — Net CA decreases by ₹1,000 (loss on sale); only CA affected","red"],
                  ["4","Sale of Goods costing ₹10,000 for ₹11,000","CA ↑ ₹11,000 (Cash/Debtor); Stock ↓ ₹10,000 → Net CA ↑ ₹1,000","No change","IMPROVE — Net CA increases by profit of ₹1,000","green"],
                  ["5","Payment of Unclaimed Dividend","CA ↓ (Cash reduces)","CL ↓ (Dividend payable reduces equally)","IMPROVE — Same logic as Transaction 1; both reduce equally","green"],
                ].map(([n,tx,ca,cl,eff,color]) => (
                  <tr key={n} className="border-b border-gray-200 hover:bg-gray-50 align-top">
                    <td className="p-3 border-r border-gray-300 text-center font-bold">{n}</td>
                    <td className="p-3 border-r border-gray-300 font-medium">{tx}</td>
                    <td className="p-3 border-r border-gray-300 text-xs text-gray-600">{ca}</td>
                    <td className="p-3 border-r border-gray-300 text-xs text-gray-600">{cl}</td>
                    <td className={`p-3 font-bold text-sm ${color==="green"?"text-green-700":"text-red-700"}`}>{eff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Option ii */}
          <OptionHeader num="ii" title="Inventory Turnover Ratio" />
          <Callout color="amber">
            <CalloutTitle>📋 Given: Inventory Beginning ₹18,000 | End ₹22,000 | Net Purchases ₹46,000 | Wages ₹14,000 | Revenue ₹80,000 | Carriage Inwards ₹4,000</CalloutTitle>
            <p className="text-sm text-amber-900 mt-1">
              <b>COGS</b> = Opening Stock + Net Purchases + Wages + Carriage Inwards − Closing Stock.
              Include all direct costs. <b>Do not use Revenue</b> (that is Sales, not cost).
            </p>
          </Callout>
          <div className="mt-3 border-2 border-gray-800 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="p-3 text-left border-r border-gray-600">Calculation Step</th>
                  <th className="p-3 text-right">Amount (₹)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Opening Inventory (given)","18,000",false],
                  ["Add: Net Purchases (given)","46,000",false],
                  ["Add: Wages / Direct Labour (given)","14,000",false],
                  ["Add: Carriage Inwards (given)","4,000",false],
                  ["Less: Closing Inventory (given)","(22,000)",false],
                  ["= Cost of Goods Sold (COGS)","60,000",true],
                  ["Average Inventory = (Opening + Closing) / 2 = (18,000 + 22,000) / 2","20,000",false],
                ].map(([lbl,amt,bold]) => (
                  <tr key={lbl} className={`border-b border-gray-200 ${bold?"bg-yellow-50 font-bold":""}`}>
                    <td className="p-3 border-r border-gray-300">{lbl}</td>
                    <td className="p-3 text-right font-mono">{amt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-3 bg-blue-50 border-2 border-blue-700 p-4 text-center">
            <p className="text-xl font-black text-blue-900">
              Inventory Turnover Ratio = COGS / Avg. Inventory = ₹60,000 / ₹20,000 = <span className="text-green-800 text-2xl">3.0 Times</span>
            </p>
            <p className="text-xs text-blue-700 mt-1">The company sells and replenishes its entire stock 3 times per year.</p>
          </div>

          {/* Option iii */}
          <OptionHeader num="iii" title="Interest Coverage Ratio" />
          <Callout color="amber">
            <CalloutTitle>📋 Given: NPAT = ₹60,000 | LT Debt = ₹10,00,000 @ 15% | Tax Rate = 40%</CalloutTitle>
            <p className="text-sm text-amber-900 mt-1">
              ICR = EBIT / Interest. Trick: Work backwards from NPAT → NPBT (÷ by 1−tax) → add Interest back = EBIT.
            </p>
          </Callout>
          <div className="mt-3 border-2 border-gray-800 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="p-3 border-r border-gray-600 w-10">Step</th>
                  <th className="p-3 text-left border-r border-gray-600">Particulars</th>
                  <th className="p-3 text-right">Amount (₹)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["1","Net Profit After Tax (NPAT) — given","60,000"],
                  ["2","Net Profit Before Tax (NPBT) = NPAT ÷ (1 − Tax Rate) = 60,000 ÷ (1 − 0.40) = 60,000 ÷ 0.60","1,00,000"],
                  ["3","Interest on Long-term Debt = 15% × ₹10,00,000","1,50,000"],
                  ["4","EBIT = NPBT + Interest = ₹1,00,000 + ₹1,50,000","2,50,000"],
                ].map(([s,d,a]) => (
                  <tr key={s} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-3 border-r border-gray-300 text-center font-bold text-blue-800">{s}</td>
                    <td className="p-3 border-r border-gray-300">{d}</td>
                    <td className="p-3 text-right font-bold font-mono">{a}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-3 bg-blue-50 border-2 border-blue-700 p-4 text-center">
            <p className="text-xl font-black text-blue-900">
              ICR = EBIT / Interest = ₹2,50,000 / ₹1,50,000 = <span className="text-orange-700 text-2xl">1.67 Times</span>
            </p>
            <p className="text-xs text-orange-700 mt-1 font-bold">
              ⚠️ Interpretation: ICR &lt; 2 is considered risky. The company earns only ₹1.67 per ₹1 of interest obligation.
              Lenders and creditors expect ICR ≥ 2 for comfort. Immediate action on profitability recommended.
            </p>
          </div>
        </Block>

        {/* ═══════════════════════════════════════════════════════
            Q.4 (a)  —  FIFO INVENTORY LEDGER                    [10]
        ═══════════════════════════════════════════════════════ */}
        <Block id="q4a" code="Q.4 (a)" marks={10}
          title="FIFO Inventory Ledger — Smart Chargers Model ZR (Pavana Traders)"
          subtitle="Perpetual Inventory System · March 2024">

          <Callout color="amber">
            <CalloutTitle>📋 Given Transactions</CalloutTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-2 text-xs">
              {[
                ["1 Mar","Opening Inventory","400 units @ ₹50"],
                ["5 Mar","Purchase","300 units @ ₹55"],
                ["12 Mar","Issue","450 units"],
                ["16 Mar","Purchase","350 units @ ₹60"],
                ["20 Mar","Issue","300 units"],
                ["25 Mar","Purchase","200 units @ ₹65"],
                ["28 Mar","Issue","250 units"],
              ].map(([d,t,v]) => (
                <div key={d} className="bg-amber-100 border border-amber-300 px-2 py-1 flex gap-2">
                  <span className="font-black text-amber-700 w-14">{d}</span>
                  <span className="font-semibold text-amber-800">{t}:</span>
                  <span className="text-amber-900">{v}</span>
                </div>
              ))}
            </div>
          </Callout>

          <Callout color="blue">
            <CalloutTitle>💡 FIFO Rule + AS-2 Valuation</CalloutTitle>
            <p className="text-sm text-blue-900 mt-1">
              <b>Issue Rule:</b> Always deplete the <u>oldest batch first</u>. Track remaining layers in Balance column.
              <br/><b>AS-2 Lower of Cost or NRV:</b> NRV = ₹90 SP − ₹5 Selling Exp = ₹85 (but exam states NRV = ₹63).
              Since ₹63 &lt; FIFO Cost → use ₹63.
            </p>
          </Callout>

          <div className="mt-4 border-2 border-gray-800 overflow-x-auto">
            <div className="bg-gray-800 text-white text-center py-2 text-xs font-bold uppercase tracking-wider">
              FIFO Inventory Ledger — Smart Chargers Model ZR
            </div>
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="p-2 border-r-2 border-gray-800 border-b border-gray-400" rowSpan={2}>Date</th>
                  <th className="p-2 text-center border-r-2 border-gray-800 border-b border-gray-400 bg-blue-100" colSpan={3}>RECEIPTS</th>
                  <th className="p-2 text-center border-r-2 border-gray-800 border-b border-gray-400 bg-red-100" colSpan={3}>ISSUES</th>
                  <th className="p-2 text-center border-b border-gray-400 bg-green-100" colSpan={3}>BALANCE</th>
                </tr>
                <tr className="bg-gray-100 border-b-2 border-gray-800 text-gray-600">
                  <th className="p-2 border-r border-gray-300 bg-blue-50">Qty</th>
                  <th className="p-2 border-r border-gray-300 bg-blue-50">Rate (₹)</th>
                  <th className="p-2 border-r-2 border-gray-800 bg-blue-50">Amt (₹)</th>
                  <th className="p-2 border-r border-gray-300 bg-red-50">Qty</th>
                  <th className="p-2 border-r border-gray-300 bg-red-50">Rate (₹)</th>
                  <th className="p-2 border-r-2 border-gray-800 bg-red-50">Amt (₹)</th>
                  <th className="p-2 border-r border-gray-300 bg-green-50">Qty</th>
                  <th className="p-2 border-r border-gray-300 bg-green-50">Rate (₹)</th>
                  <th className="p-2 bg-green-50">Amt (₹)</th>
                </tr>
              </thead>
              <tbody>
                <FIFORow
                  date="1 Mar (Opening)"
                  rq="—" rr="—" ra="—"
                  iq="—" ir="—" ia="—"
                  bq="400" br="50" ba="20,000"
                  remark="Opening Balance"
                />
                <FIFORow
                  date="5 Mar (Purchase)"
                  rq="300" rr="55" ra="16,500"
                  iq="—" ir="—" ia="—"
                  bq="400+300=700" br="50/55" ba="36,500"
                  remark="400@50 + 300@55"
                />
                <FIFORow
                  date="12 Mar (Issue 450)"
                  rq="—" rr="—" ra="—"
                  iq="450" ir="50/55" ia="22,750"
                  bq="250" br="55" ba="13,750"
                  remark="Issue: 400@50=20,000 + 50@55=2,750. Balance: 250@55"
                />
                <FIFORow
                  date="16 Mar (Purchase)"
                  rq="350" rr="60" ra="21,000"
                  iq="—" ir="—" ia="—"
                  bq="250+350=600" br="55/60" ba="34,750"
                  remark="250@55=13,750 + 350@60=21,000"
                />
                <FIFORow
                  date="20 Mar (Issue 300)"
                  rq="—" rr="—" ra="—"
                  iq="300" ir="55/60" ia="16,750"
                  bq="300" br="60" ba="18,000"
                  remark="Issue: 250@55=13,750 + 50@60=3,000. Balance: 300@60"
                />
                <FIFORow
                  date="25 Mar (Purchase)"
                  rq="200" rr="65" ra="13,000"
                  iq="—" ir="—" ia="—"
                  bq="300+200=500" br="60/65" ba="31,000"
                  remark="300@60=18,000 + 200@65=13,000"
                />
                <FIFORow
                  date="28 Mar (Issue 250)"
                  rq="—" rr="—" ra="—"
                  iq="250" ir="60" ia="15,000"
                  bq="50+200=250" br="60/65" ba="16,000"
                  remark="Issue: 250@60=15,000. Balance: 50@60=3,000 + 200@65=13,000"
                  last
                />
              </tbody>
            </table>
          </div>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border-2 border-gray-800 p-4 text-center bg-white">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-1 font-bold">ii. Closing Inventory at FIFO Cost</p>
              <p className="text-3xl font-black text-gray-900">₹16,000</p>
              <p className="text-xs text-gray-600 mt-1">50 units @ ₹60 = ₹3,000<br/>200 units @ ₹65 = ₹13,000<br/>Total = 250 units</p>
            </div>
            <div className="border-2 border-gray-800 p-4 text-center bg-white">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-1 font-bold">iii. Closing Inventory at NRV</p>
              <p className="text-3xl font-black text-gray-900">₹15,750</p>
              <p className="text-xs text-gray-600 mt-1">250 units × ₹63 (given NRV)<br/>= ₹15,750</p>
            </div>
            <div className="border-2 border-green-700 bg-green-50 p-4 text-center">
              <p className="text-xs uppercase tracking-widest text-green-700 mb-1 font-bold">iv. Value for Financial Statements</p>
              <p className="text-3xl font-black text-green-900">₹15,750</p>
              <p className="text-xs text-green-700 mt-1 font-bold">Lower of Cost (₹16,000) or NRV (₹15,750)</p>
              <p className="text-xs text-green-600 mt-1">AS-2: Valuation at Lower of Cost or NRV</p>
            </div>
          </div>
        </Block>

        {/* ═══════════════════════════════════════════════════════
            Q.4 (b)  —  ATTEMPT ANY TWO                          [10]
        ═══════════════════════════════════════════════════════ */}
        <Block id="q4b" code="Q.4 (b)" marks="10 (Attempt Any Two × 5)"
          title="Theory — Accounting Standards & Depreciation">

          {/* Option i — AS 13 */}
          <OptionHeader num="i" title="AS 13 — Equity Shares Held for Long-Term: Should Company Revalue or Continue at Cost?" />
          <Callout color="blue">
            <CalloutTitle>📋 Situation: Company holds equity shares for long-term strategic purposes. Market value falls significantly.</CalloutTitle>
          </Callout>
          <div className="mt-3 space-y-2">
            {[
              ["AS 13 Classification","Under AS 13, long-term investments (held for strategic purposes) are classified as Long-Term Investments and are carried at cost. Short-term investments (current assets) are carried at lower of cost or fair value."],
              ["Principle: Cost Method for Long-Term","Since these shares are held for long-term strategic purposes (not for trading), AS 13 requires them to be carried at COST. Market fluctuations are NOT recognised in the books."],
              ["Exception: Permanent Diminution","AS 13 states: If there is a decline in value that is NOT temporary (i.e., permanent diminution), the company MUST write down the carrying amount to the reduced value and recognise the loss in P&L."],
              ["Conclusion","The company should CONTINUE to carry the investment at cost unless the fall in market value is permanent and not temporary. If temporary → no change. If permanent → write down to lower value and charge to P&L immediately."],
            ].map(([h,d]) => (
              <div key={h} className="border border-gray-300 p-3 bg-white flex gap-3">
                <span className="font-black text-blue-800 text-sm w-48 shrink-0">▸ {h}:</span>
                <span className="text-sm text-gray-700">{d}</span>
              </div>
            ))}
          </div>

          {/* Option ii — Impairment */}
          <OptionHeader num="ii" title="AS 28 / Ind AS 36 — Indicators of Impairment (Should Machine be Assessed?)" />
          <Callout color="amber">
            <CalloutTitle>📋 Situation: New competitor, 30% price decline, 4-month idle machine, falling cash flows, obsolete parts</CalloutTitle>
          </Callout>
          <div className="mt-3 border-2 border-gray-800 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="p-3 border-r border-gray-600 w-8">No.</th>
                  <th className="p-3 text-left border-r border-gray-600">Situation from Question</th>
                  <th className="p-3 text-left border-r border-gray-600">Indicator of Impairment</th>
                  <th className="p-3 text-left">Relevant?</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["1","New competitor introduced advanced technology → product less attractive","Obsolescence / Technological change (External Indicator)","✅ YES"],
                  ["2","Selling price of main product declined by 30%","Significant decline in market value (External Indicator)","✅ YES"],
                  ["3","Machine idle for 4 months due to demand drop","Physical damage or idle use (Internal Indicator)","✅ YES"],
                  ["4","Cash flows from machine consistently fallen over last 2 years","Evidence of economic performance worse than expected (Internal Indicator)","✅ YES"],
                  ["5","Replacement parts becoming obsolete and difficult to obtain","Indication asset will be disposed of before end of economic life (Internal Indicator)","✅ YES"],
                ].map(([n,sit,ind,rel]) => (
                  <tr key={n} className="border-b border-gray-200 hover:bg-gray-50 align-top">
                    <td className="p-3 border-r border-gray-300 text-center font-bold">{n}</td>
                    <td className="p-3 border-r border-gray-300 text-xs text-gray-700">{sit}</td>
                    <td className="p-3 border-r border-gray-300 font-semibold text-orange-800 text-xs">{ind}</td>
                    <td className="p-3 font-black text-green-700">{rel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-2 bg-red-50 border border-red-400 p-3 text-sm text-red-900">
            <b>Conclusion:</b> ALL 5 indicators of impairment are present. The company <b>MUST assess the machine for impairment</b> as per AS 28 / Ind AS 36.
            If Recoverable Amount (higher of Net Selling Price and Value in Use) is less than Carrying Amount → impairment loss must be recognised immediately in P&L.
          </div>

          {/* Option iii — SLM vs WDV */}
          <OptionHeader num="iii" title="Differentiate: Straight Line Method (SLM) vs Written Down Value Method (WDV) — 5 Points" />
          <div className="border-2 border-gray-800 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="p-3 border-r border-gray-600 w-8">No.</th>
                  <th className="p-3 text-left border-r border-gray-600 w-32">Basis</th>
                  <th className="p-3 text-left border-r border-gray-600 bg-blue-900">Straight Line Method (SLM)</th>
                  <th className="p-3 text-left bg-purple-900">Written Down Value Method (WDV)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["1","Amount of Dep.","Equal / Constant amount every year","Decreasing amount every year (higher initially, lower later)"],
                  ["2","Base / Calculation","Applied on Original Cost of the asset","Applied on Book Value (Reducing Balance) at start of each year"],
                  ["3","Book Value at End","Asset reaches zero (scrap value) at end of useful life","Asset never becomes zero; always has some book value"],
                  ["4","Tax Benefit","Less tax benefit in initial years (lower depreciation)","Greater tax benefit in early years (higher depreciation reduces taxable income)"],
                  ["5","Suitable For","Assets with uniform use & maintenance (Buildings, Furniture, Patents)","Assets with higher wear in early years (Machinery, Vehicles, Computers)"],
                ].map(([n,b,s,w]) => (
                  <tr key={n} className="border-b border-gray-200 hover:bg-gray-50 align-top">
                    <td className="p-3 border-r border-gray-300 font-bold text-center">{n}</td>
                    <td className="p-3 border-r border-gray-300 font-bold text-gray-700">{b}</td>
                    <td className="p-3 border-r border-gray-300 text-blue-900 text-xs">{s}</td>
                    <td className="p-3 text-purple-900 text-xs">{w}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Block>

        {/* ═══════════════════════════════════════════════════════
            Q.5 (a)  —  CASH BUDGET (VARDHAN TRADERS)            [10]
        ═══════════════════════════════════════════════════════ */}
        <Block id="q5a" code="Q.5 (a)" marks={10}
          title="Cash Budget — Vardhan Traders"
          subtitle="For the Months of April, May & June 2025">

          <Callout color="amber">
            <CalloutTitle>📋 Given Data</CalloutTitle>
            <div className="overflow-x-auto mt-2">
              <table className="text-xs border border-gray-400 border-collapse">
                <thead>
                  <tr className="bg-amber-200">
                    <th className="p-2 border border-amber-400">Particulars</th>
                    <th className="p-2 border border-amber-400">March</th>
                    <th className="p-2 border border-amber-400">April</th>
                    <th className="p-2 border border-amber-400">May</th>
                    <th className="p-2 border border-amber-400">June</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Credit Sales (₹)","2,00,000","2,50,000","3,00,000","3,50,000"],
                    ["Purchases (₹)","1,00,000","1,20,000","1,40,000","—"],
                    ["Wages (₹)","—","30,000","30,000","30,000"],
                    ["Rent (₹)","—","20,000","20,000","20,000"],
                  ].map(([lbl,...vals]) => (
                    <tr key={lbl} className="border border-amber-300">
                      <td className="p-2 border border-amber-300 font-semibold">{lbl}</td>
                      {vals.map((v,i) => <td key={i} className="p-2 border border-amber-300 text-right">{v}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-amber-900 mt-2 font-semibold">
              Additional: 70% collected next month | 30% collected second month | Purchases paid 1 month lag | Opening Cash 1 Apr = ₹20,000
            </p>
          </Callout>

          <Callout color="blue">
            <CalloutTitle>💡 Trick: Build Collections Grid First!</CalloutTitle>
            <div className="mt-2 overflow-x-auto">
              <table className="text-xs border border-blue-300 border-collapse">
                <thead>
                  <tr className="bg-blue-200">
                    <th className="p-2 border border-blue-300">Month Collected →</th>
                    <th className="p-2 border border-blue-300">April</th>
                    <th className="p-2 border border-blue-300">May</th>
                    <th className="p-2 border border-blue-300">June</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["70% of Previous Month Sales (next month)","70%×2,00,000 = 1,40,000","70%×2,50,000 = 1,75,000","70%×3,00,000 = 2,10,000"],
                    ["30% of Two Months Ago Sales","Feb data N/A → Nil","30%×2,00,000 = 60,000","30%×2,50,000 = 75,000"],
                    ["Total Collections","1,40,000","2,35,000","2,85,000"],
                  ].map(([lbl,...vals]) => (
                    <tr key={lbl} className="border border-blue-200">
                      <td className="p-2 border border-blue-200 font-semibold">{lbl}</td>
                      {vals.map((v,i) => <td key={i} className={`p-2 border border-blue-200 text-right ${lbl.includes("Total")?"font-black text-blue-900":""}`}>{v}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Callout>

          <div className="mt-4 border-2 border-gray-800 overflow-x-auto">
            <div className="bg-gray-800 text-white text-center py-2 text-sm font-bold uppercase tracking-wide">
              Cash Budget of Vardhan Traders — April to June 2025
            </div>
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-100 border-b-2 border-gray-800">
                  <th className="p-3 text-left border-r border-gray-400 w-1/2">Particulars</th>
                  <th className="p-3 text-right border-r border-gray-400">April (₹)</th>
                  <th className="p-3 text-right border-r border-gray-400">May (₹)</th>
                  <th className="p-3 text-right">June (₹)</th>
                </tr>
              </thead>
              <tbody>
                <CBRow label="A. Opening Cash Balance" a="20,000" m="10,000" j="75,000" bold />
                <CBSectionRow label="Add: Receipts" />
                <CBRow label="Collections from Debtors (Working Note)" a="1,40,000" m="2,35,000" j="2,85,000" indent />
                <CBRow label="B. Total Cash Available (A + Receipts)" a="1,60,000" m="2,45,000" j="3,60,000" bold highlight />
                <CBSectionRow label="Less: Payments" />
                <CBRow label="Payment for Purchases (1-month lag: March/April/May purchases)" a="1,00,000" m="1,20,000" j="1,40,000" indent />
                <CBRow label="Wages" a="30,000" m="30,000" j="30,000" indent />
                <CBRow label="Rent" a="20,000" m="20,000" j="20,000" indent />
                <CBRow label="C. Total Payments" a="1,50,000" m="1,70,000" j="1,90,000" bold />
                <CBRow label="Closing Cash Balance (B − C)" a="10,000" m="75,000" j="1,70,000" bold profit />
              </tbody>
            </table>
          </div>
        </Block>

        {/* ═══════════════════════════════════════════════════════
            Q.5 (b)  —  ATTEMPT ANY TWO                          [10]
        ═══════════════════════════════════════════════════════ */}
        <Block id="q5b" code="Q.5 (b)" marks="10 (Attempt Any Two × 5)"
          title="Cost Concepts & Analysis">

          {/* Option i */}
          <OptionHeader num="i" title="Calculate Variable Cost, Fixed Cost & Contribution — Both Years" />
          <Callout color="amber">
            <CalloutTitle>📋 Given: Year 1 — Sales ₹39,000, Total Cost ₹34,800 | Year 2 — Sales ₹43,000, Total Cost ₹37,600</CalloutTitle>
            <p className="text-sm text-amber-900 mt-1">
              <b>High-Low Method:</b> VC Ratio = Change in Total Cost ÷ Change in Sales = (37,600−34,800) ÷ (43,000−39,000) = 2,800 ÷ 4,000 = <b>70%</b>
            </p>
          </Callout>
          <div className="mt-3 border-2 border-gray-800 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="p-3 text-left border-r border-gray-600">Particulars</th>
                  <th className="p-3 text-right border-r border-gray-600">Year 1 (₹)</th>
                  <th className="p-3 text-right">Year 2 (₹)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Sales (given)","39,000","43,000",false],
                  ["Variable Cost @ 70% of Sales","27,300","30,100",false],
                  ["Contribution (Sales − Variable Cost)","11,700","12,900",true],
                  ["Fixed Cost (Total Cost − Variable Cost)","7,500","7,500",false],
                  ["Total Cost Verification (VC + FC)","34,800 ✓","37,600 ✓",false],
                  ["P/V Ratio (Contribution / Sales)","30%","30%",false],
                ].map(([lbl,y1,y2,bold]) => (
                  <tr key={lbl} className={`border-b border-gray-200 ${bold?"bg-yellow-50 font-bold":""}`}>
                    <td className="p-3 border-r border-gray-300">{lbl}</td>
                    <td className="p-3 border-r border-gray-300 text-right font-mono">{y1}</td>
                    <td className="p-3 text-right font-mono">{y2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600 mt-2 border-l-4 border-gray-400 pl-3 italic">
            Note: Fixed Cost remains ₹7,500 in both years — confirming that the only change in total cost is due to variable component.
            P/V Ratio = 30% means for every ₹100 of sales, ₹30 contributes toward fixed costs and profit.
          </p>

          {/* Option ii */}
          <OptionHeader num="ii" title="Evaluate Management's Assumption using Elements of Cost (Materials, Labour, Expenses)" />
          <Callout color="amber">
            <CalloutTitle>📋 Situation: Stable sales, declining profit. Management: reduce direct material. Dept. Heads: indirect expenses & labour inefficiencies are the real cause.</CalloutTitle>
          </Callout>
          <div className="mt-3 space-y-3">
            <div className="border-l-4 border-gray-800 pl-4">
              <p className="font-black text-gray-900 text-sm mb-1">Elements of Cost Framework (AS per Cost Accounting Standards):</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
                {[
                  ["1. Material Cost","Direct Material (raw material, components) + Indirect Material (consumables, lubricants). Forms the largest portion of cost in manufacturing.","Direct Material is visible, measurable and controllable. Reduction here has immediate cost impact."],
                  ["2. Labour Cost","Direct Labour (workers on production floor) + Indirect Labour (supervisors, cleaners). Labour inefficiency compounds cost without producing output.","Indirect labour inefficiency adds to overheads silently."],
                  ["3. Expenses (Overheads)","Direct Expenses (specific to product) + Indirect Expenses (factory overhead, admin, selling). Indirect expenses are harder to trace and control.","If overheads are rising disproportionately, they silently kill profitability."],
                ].map(([h,d,note]) => (
                  <div key={h} className="border border-gray-300 p-3 bg-white">
                    <p className="font-bold text-blue-800 mb-1">{h}</p>
                    <p className="text-gray-700 mb-1">{d}</p>
                    <p className="text-orange-700 font-semibold">{note}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <p className="font-black text-red-800 text-sm mb-1">Evaluation of Management's Assumption:</p>
              <p className="text-sm text-gray-700">Management's assumption that <b>reducing direct material cost alone will restore profitability</b> is <b>partially correct but incomplete</b>. While direct material is controllable and impactful, the real issue with <i>stable sales but declining profits</i> points to a <b>rising cost base beyond materials</b>. Department heads are more likely correct: indirect labour inefficiencies and rising overheads create hidden cost leakages that are harder to detect.</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <p className="font-black text-green-800 text-sm mb-1">Recommendation — Priority for Cost Control:</p>
              <ul className="text-sm text-gray-700 space-y-1 list-disc pl-4">
                <li><b>Labour Cost (Priority 1):</b> Introduce productivity measurement, reduce idle time, remove redundant roles. Labour inefficiency directly inflates both variable and fixed cost.</li>
                <li><b>Indirect Expenses (Priority 2):</b> Conduct overhead audit — identify non-value-adding expenses (unnecessary admin, excess utilities). Apply Activity-Based Costing (ABC) to allocate properly.</li>
                <li><b>Direct Material (Priority 3):</b> Negotiate better rates, reduce waste, use value engineering. Important but secondary if overheads are the root cause.</li>
              </ul>
            </div>
          </div>
        </Block>

        <footer className="text-center py-8 border-t-2 border-gray-800 text-gray-400 text-xs">
          <p className="font-bold text-gray-600 text-sm mb-1">All Questions Solved — Prepared for Full 100 Marks</p>
          <p>NFSU · MBA Cyber Security Management · Accounting for Managers · MBACS24-SI-3 · Dec 2025</p>
        </footer>

      </div>
    </div>
  );
}

/* ═══════════════ REUSABLE COMPONENTS ═══════════════ */

function Badge({ label, value }) {
  return (
    <div className="border border-gray-500 px-4 py-1 text-sm">
      <span className="text-gray-400">{label}: </span>
      <span className="font-bold text-white">{value}</span>
    </div>
  );
}

function Block({ id, code, marks, title, subtitle, children }) {
  return (
    <section id={id} className="bg-white border-2 border-gray-800">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-gray-900 text-white px-5 py-4 border-l-8 border-yellow-400">
        <div>
          <span className="text-yellow-400 font-black text-xl mr-3">{code}</span>
          <span className="font-bold text-lg">{title}</span>
          {subtitle && <p className="text-gray-400 text-xs mt-1">{subtitle}</p>}
        </div>
        <span className="mt-2 md:mt-0 border border-yellow-400 text-yellow-400 text-xs font-bold px-3 py-1 w-fit">
          [{marks} Marks]
        </span>
      </div>
      <div className="p-5 space-y-5">{children}</div>
    </section>
  );
}

function OptionHeader({ num, title }) {
  return (
    <div className="flex items-start gap-3 mt-4 mb-2 border-b-2 border-gray-300 pb-2">
      <span className="bg-gray-800 text-white font-black px-3 py-1 text-sm shrink-0">({num})</span>
      <span className="font-bold text-gray-800 text-sm">{title}</span>
    </div>
  );
}

function Callout({ color, children }) {
  const cls = {
    amber: "bg-amber-50 border-amber-400 border-l-4",
    blue: "bg-blue-50 border-blue-500 border-l-4",
    green: "bg-green-50 border-green-500 border-l-4",
  };
  return <div className={`p-4 ${cls[color]}`}>{children}</div>;
}

function CalloutTitle({ children }) {
  return <p className="font-black text-gray-800 text-sm">{children}</p>;
}

function PLRow({ label, note, amt, indent }) {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      <td className={`p-3 border-r border-gray-300 ${indent ? "pl-10 text-gray-700" : ""}`}>{label}</td>
      <td className="p-3 border-r border-gray-300 text-center text-xs text-gray-400">{note || ""}</td>
      <td className="p-3 text-right font-mono">{amt}</td>
    </tr>
  );
}

function WNBox({ notes }) {
  return (
    <div className="mt-4 border border-gray-300 bg-gray-50 p-4">
      <p className="font-black text-gray-700 text-xs uppercase tracking-widest mb-2">Working Notes</p>
      <ul className="space-y-1">
        {notes.map(({ n, t }) => (
          <li key={n} className="text-xs text-gray-700">
            <b className="text-gray-900">{n}: </b>{t}
          </li>
        ))}
      </ul>
    </div>
  );
}

function CompSectionRow({ label, sub }) {
  return (
    <tr className={`border-b border-gray-200 ${sub ? "bg-gray-50" : "bg-gray-200"}`}>
      <td colSpan={5} className={`p-2 ${sub ? "pl-6 text-xs text-gray-500 italic" : "pl-3 font-bold text-gray-700 text-xs uppercase tracking-wider"}`}>{label}</td>
    </tr>
  );
}

function CompRow({ label, v17, v16, abs, pct, bold, pos, neg }) {
  return (
    <tr className={`border-b border-gray-200 ${bold ? "bg-yellow-50 font-bold" : "hover:bg-gray-50"}`}>
      <td className="p-3 border-r border-gray-300 pl-5">{label}</td>
      <td className="p-3 border-r border-gray-300 text-right font-mono">{v17}</td>
      <td className="p-3 border-r border-gray-300 text-right font-mono">{v16}
      </td>
      <td className={`p-3 border-r border-gray-300 text-right font-mono font-bold ${pos ? "text-green-700" : neg ? "text-red-700" : ""}`}>{abs}</td>
      <td className={`p-3 text-right font-bold ${pos ? "text-green-700" : neg ? "text-red-700" : ""}`}>{pct}</td>
    </tr>
  );
}

function CSSectionRow({ label, sub }) {
  return (
    <tr className={sub ? "bg-gray-50" : "bg-gray-200"}>
      <td colSpan={5} className={`p-2 border-b border-gray-300 ${sub ? "pl-6 text-xs text-gray-500 italic" : "pl-3 font-bold text-gray-700 text-xs uppercase tracking-wider"}`}>
        {label}
      </td>
    </tr>
  );
}

function CSRow({ label, a, ap, b, bp, bold }) {
  return (
    <tr className={`border-b border-gray-200 ${bold ? "bg-yellow-50 font-black" : "hover:bg-gray-50"}`}>
      <td className="p-3 border-r border-gray-300 pl-5">{label}</td>
      <td className="p-3 border-r border-gray-300 text-right font-mono">{a}</td>
      <td className="p-3 border-r border-gray-300 text-right font-bold text-blue-800">{ap}</td>
      <td className="p-3 border-r border-gray-300 text-right font-mono">{b}</td>
      <td className="p-3 text-right font-bold text-purple-800">{bp}</td>
    </tr>
  );
}

function CSISRow({ label, a, ap, b, bp, bold, profit, neg }) {
  return (
    <tr className={`border-b border-gray-200 ${profit ? "bg-green-50 font-black" : bold ? "bg-yellow-50 font-bold" : "hover:bg-gray-50"}`}>
      <td className="p-3 border-r border-gray-300">{label}</td>
      <td className={`p-3 border-r border-gray-300 text-right font-mono ${neg ? "text-red-700" : ""}`}>{a}</td>
      <td className={`p-3 border-r border-gray-300 text-right font-bold ${neg ? "text-red-700" : profit ? "text-green-800" : "text-blue-800"}`}>{ap}</td>
      <td className={`p-3 border-r border-gray-300 text-right font-mono ${neg ? "text-red-700" : ""}`}>{b}</td>
      <td className={`p-3 text-right font-bold ${neg ? "text-red-700" : profit ? "text-green-800" : "text-green-700"}`}>{bp}</td>
    </tr>
  );
}

function FIFORow({ date, rq, rr, ra, iq, ir, ia, bq, br, ba, remark, last }) {
  return (
    <tr className={`border-b ${last ? "border-b-2 border-gray-800" : "border-gray-200"} hover:bg-gray-50 align-top`}>
      <td className="p-2 border-r-2 border-gray-800 font-bold text-gray-700 text-xs whitespace-nowrap">
        {date}
      </td>
      {/* Receipts */}
      <td className="p-2 border-r border-gray-200 text-center text-blue-800 font-mono">{rq}</td>
      <td className="p-2 border-r border-gray-200 text-center text-blue-800 font-mono">{rr}</td>
      <td className="p-2 border-r-2 border-gray-800 text-center text-blue-800 font-bold font-mono">{ra}</td>
      {/* Issues */}
      <td className="p-2 border-r border-gray-200 text-center text-red-800 font-mono">{iq}</td>
      <td className="p-2 border-r border-gray-200 text-center text-red-800 font-mono">{ir}</td>
      <td className="p-2 border-r-2 border-gray-800 text-center text-red-800 font-bold font-mono">{ia}</td>
      {/* Balance */}
      <td className="p-2 border-r border-gray-200 text-center text-green-800 font-mono">{bq}</td>
      <td className="p-2 border-r border-gray-200 text-center text-green-800 font-mono">{br}</td>
      <td className="p-2 border-r border-gray-200 text-center text-green-800 font-bold font-mono">{ba}</td>
      {/* Remark */}
      <td className="p-2 text-gray-400 text-xs italic hidden md:table-cell">{remark}</td>
    </tr>
  );
}

function CBSectionRow({ label }) {
  return (
    <tr className="bg-gray-100 border-b border-gray-300">
      <td colSpan={4} className="p-2 pl-4 font-black text-xs uppercase tracking-widest text-gray-600">
        {label}
      </td>
    </tr>
  );
}

function CBRow({ label, a, m, j, bold, highlight, profit, indent }) {
  return (
    <tr className={`border-b border-gray-200
      ${profit ? "bg-green-50 border-t-2 border-green-700" : ""}
      ${highlight ? "bg-gray-200" : ""}
      ${bold && !profit && !highlight ? "bg-gray-100" : ""}
      ${!bold && !highlight && !profit ? "hover:bg-gray-50" : ""}
    `}>
      <td className={`p-3 border-r border-gray-300
        ${bold || profit ? "font-black" : ""}
        ${indent ? "pl-10 text-gray-700" : ""}
        ${profit ? "text-green-900 text-base" : ""}
      `}>
        {label}
      </td>
      {[a, m, j].map((val, i) => (
        <td key={i} className={`p-3 border-r border-gray-300 text-right font-mono
          ${bold || profit ? "font-black" : ""}
          ${profit ? "text-green-900 text-lg" : ""}
        `}>
          {val}
        </td>
      ))}
    </tr>
  );
}
