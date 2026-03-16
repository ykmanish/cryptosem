"use client";
import { useState } from "react";

// ─────────────────────────────────────────────────────────────
// DESIGN TOKENS
// ─────────────────────────────────────────────────────────────
// Green accent: #C8F5C8 / #E8FFF0
// Dark: #111827
// Text: #374151
// Soft bg: #F9FAFB

// ─────────────────────────────────────────────────────────────
// SHARED UI PRIMITIVES
// ─────────────────────────────────────────────────────────────

const GreenTag = ({ label }) => (
  <span className="bg-[#C8F5C8] text-green-800 text-xs font-bold px-3 py-1 rounded-full">{label}</span>
);

const GrayTag = ({ label }) => (
  <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full">{label}</span>
);

const SectionHeading = ({ title, subtitle, emoji }) => (
  <div className="mb-8">
    <div className="flex items-center gap-3 mb-2">
      <span className="text-4xl">{emoji}</span>
      <h2 className="text-3xl font-black text-gray-900">{title}</h2>
    </div>
    {subtitle && <p className="text-gray-500 text-base leading-relaxed ml-14">{subtitle}</p>}
  </div>
);

const KidCard = ({ emoji, title, text }) => (
  <div className="bg-yellow-50 rounded-2xl p-5 flex gap-4 items-start">
    <span className="text-4xl shrink-0">{emoji}</span>
    <div>
      <h4 className="font-black text-gray-800 text-base mb-1">{title}</h4>
      <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
    </div>
  </div>
);

const RealCard = ({ emoji, title, desc }) => (
  <div className="bg-[#E8FFF0] rounded-2xl p-5 flex gap-4 items-start">
    <span className="text-3xl shrink-0">{emoji}</span>
    <div>
      <h4 className="font-black text-green-900 text-base mb-1">{title}</h4>
      <p className="text-green-800 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

const FormulaBox = ({ formula, label }) => (
  <div className="bg-gray-900 rounded-2xl p-5 text-center my-4">
    <p className="text-yellow-400 font-mono text-2xl font-black tracking-widest">{formula}</p>
    {label && <p className="text-gray-400 text-sm mt-2">{label}</p>}
  </div>
);

const StepCard = ({ step, title, desc, color = "bg-[#C8F5C8] text-green-900" }) => (
  <div className="flex gap-4 items-start">
    <div className={`${color} font-black text-base rounded-2xl w-10 h-10 flex items-center justify-center shrink-0`}>
      {step}
    </div>
    <div>
      <p className="font-bold text-gray-900 text-sm">{title}</p>
      <p className="text-gray-500 text-sm mt-0.5 leading-relaxed">{desc}</p>
    </div>
  </div>
);

const InfoGrid = ({ items }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-4">
    {items.map((item, i) => (
      <div key={i} className={`${item.bg} rounded-2xl p-4 text-center`}>
        <p className="text-3xl mb-1">{item.icon}</p>
        <p className={`text-xs font-bold uppercase tracking-widest ${item.color} mb-1`}>{item.label}</p>
        <p className={`font-black text-lg ${item.color}`}>{item.value}</p>
      </div>
    ))}
  </div>
);

const CalcRow = ({ step, text, calc, bg, tc }) => (
  <div className={`${bg} rounded-2xl p-4 flex items-center justify-between gap-4 flex-wrap`}>
    <div className="flex items-center gap-3">
      <span className={`font-black text-lg ${tc} w-6`}>{step}.</span>
      <span className={`font-medium text-sm ${tc}`}>{text}</span>
    </div>
    <span className={`font-mono font-black text-base ${tc}`}>{calc}</span>
  </div>
);

const ProConList = ({ items, bg, textColor, icon }) => (
  <ul className="space-y-2">
    {items.map((item, i) => (
      <li key={i} className={`${bg} rounded-xl px-4 py-3 flex gap-3 items-start`}>
        <span className="shrink-0">{icon}</span>
        <span className={`${textColor} text-sm leading-relaxed`}>{item}</span>
      </li>
    ))}
  </ul>
);

const Divider = () => <div className="h-px bg-gray-100 my-10" />;

const ContentCard = ({ children, className = "" }) => (
  <div className={`bg-white rounded-3xl p-6 ${className}`}>{children}</div>
);

const SubHeading = ({ children }) => (
  <h3 className="text-xl font-black text-gray-900 mb-4">{children}</h3>
);

// ─────────────────────────────────────────────────────────────
// TRANSPOSITION — RAIL FENCE VISUAL
// ─────────────────────────────────────────────────────────────
const RailFenceGrid = () => {
  const rows = [
    ["T","·","·","·","B","·","·","·","P","·","·","·","T","·","·","·","E"],
    ["·","E","·","T","·","O","·","K","·","A","·","E","·","H","·","E","·"],
    ["·","·","X","·","·","·","O","·","·","·","G","·","·","·","R","·","·"],
  ];
  const cls = [
    (c) => c !== "·" ? "bg-[#C8F5C8] text-green-800 font-black" : "text-gray-200",
    (c) => c !== "·" ? "bg-blue-100 text-blue-700 font-black" : "text-gray-200",
    (c) => c !== "·" ? "bg-orange-100 text-orange-700 font-black" : "text-gray-200",
  ];
  return (
    <div className="overflow-x-auto">
      <table className="mx-auto font-mono text-sm">
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri}>
              {row.map((c, ci) => (
                <td key={ci} className={`w-9 h-9 text-center rounded-lg ${cls[ri](c)}`}>{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center gap-4 mt-4 flex-wrap">
        <GreenTag label="Rail 1 — Green" />
        <GrayTag label="Rail 2 — Blue" />
        <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full">Rail 3 — Orange</span>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// TRANSPOSITION — ROUTE CIPHER GRID
// ─────────────────────────────────────────────────────────────
const RouteGrid = () => {
  const grid = [
    ["M","M","R","M","O","G"],
    ["E","E","E","O","W","H"],
    ["E","H","T","R","N","T"],
    ["T","E","O","R","I","X"],
  ];
  const spiral = [
    [0,0],[0,1],[0,2],[0,3],[0,4],[0,5],
    [1,5],[2,5],[3,5],
    [3,4],[3,3],[3,2],[3,1],[3,0],
    [2,0],[1,0],
    [1,1],[1,2],[1,3],[1,4],
    [2,4],[2,3],[2,2],[2,1],
  ];
  const order = {};
  spiral.forEach(([r, c], idx) => { order[`${r}-${c}`] = idx + 1; });
  return (
    <div className="overflow-x-auto">
      <table className="mx-auto font-mono text-sm">
        <tbody>
          {grid.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => {
                const num = order[`${ri}-${ci}`];
                return (
                  <td key={ci} className="p-1">
                    <div className="w-14 h-14 bg-[#E8FFF0] rounded-xl flex flex-col items-center justify-center relative">
                      <span className="font-black text-green-900 text-base">{cell}</span>
                      {num && <span className="absolute top-1 right-1.5 text-green-500 text-xs font-black">{num}</span>}
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// TRANSPOSITION — COLUMNAR GRID
// ─────────────────────────────────────────────────────────────
const ColumnarGrid = ({ data, headers }) => (
  <div className="overflow-x-auto">
    <table className="mx-auto font-mono text-sm">
      <thead>
        <tr>
          {headers.map((h, i) => (
            <th key={i} className="w-11 h-10 text-center text-xs font-black text-gray-500 bg-gray-100 rounded-lg m-0.5">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, ri) => (
          <tr key={ri}>
            {row.map((cell, ci) => (
              <td key={ci} className="w-11 h-10 text-center font-bold rounded-lg m-0.5 bg-[#F0FFF4] text-green-900">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// ─────────────────────────────────────────────────────────────
// SECTION: TRANSPOSITION CIPHER
// ─────────────────────────────────────────────────────────────
const TranspositionSection = () => {
  const [tab, setTab] = useState("overview");

  const tabs = [
    { key: "overview", label: "📖 Overview" },
    { key: "railfence", label: "🚂 Rail Fence" },
    { key: "route", label: "🌀 Route Cipher" },
    { key: "columnar", label: "📊 Columnar" },
    { key: "double", label: "🔁 Double Transposition" },
    { key: "cryptanalysis", label: "🕵️ Cryptanalysis" },
  ];

  return (
    <div>
      <SectionHeading
        emoji="🔀"
        title="Transposition Cipher"
        subtitle="A cipher that rearranges the positions of characters without changing them. The letters are the same — just shuffled!"
      />

      {/* Overview cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <KidCard
          emoji="🧩"
          title="Explain like I'm 5"
          text="Imagine you write your name on puzzle pieces, then shuffle them around. The letters are the same — just in a different order! That's a transposition cipher. The secret is knowing HOW the pieces were rearranged."
        />
        <KidCard
          emoji="✉️"
          title="Quick Example"
          text={`"MEET ME TOMORROW" → reversed → "WORROMOT EM TEEM". Same letters, different order. The receiver needs to know the reversal rule to get back the original message!`}
        />
        <div className="bg-gray-900 rounded-2xl p-5 flex flex-col justify-between">
          <div>
            <p className="text-[#C8F5C8] font-black text-base mb-2">Key Properties</p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex gap-2"><span className="text-[#C8F5C8]">✓</span> Letters are <strong className="text-white">not replaced</strong></li>
              <li className="flex gap-2"><span className="text-[#C8F5C8]">✓</span> Letters are <strong className="text-white">repositioned</strong></li>
              <li className="flex gap-2"><span className="text-[#C8F5C8]">✓</span> Letter frequency is <strong className="text-white">preserved</strong></li>
              <li className="flex gap-2"><span className="text-[#C8F5C8]">✓</span> Key = the <strong className="text-white">rearrangement rule</strong></li>
            </ul>
          </div>
          <div className="mt-4 flex gap-2 flex-wrap">
            <GreenTag label="Classical" />
            <GreenTag label="Symmetric" />
          </div>
        </div>
      </div>

      {/* Real life */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <RealCard emoji="🪖" title="WW2 Military Comms" desc="German armies used Double Columnar Transposition (ADFGVX) for sensitive battlefield orders. Allied codebreakers at Bletchley Park took weeks to crack each new key." />
        <RealCard emoji="🏦" title="Inside AES Encryption" desc="Modern AES — the cipher protecting your bank, WhatsApp, and TLS — uses ShiftRows: a transposition step that moves bytes across rows to achieve diffusion." />
        <RealCard emoji="📨" title="Historical Espionage" desc="Cold War spies embedded route cipher messages inside newspaper classified ads and book page numbers to communicate with handlers without raising suspicion." />
      </div>

      {/* Tab Switcher */}
      <div className="flex gap-2 flex-wrap mb-6">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
              tab === t.key ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-600 hover:bg-[#C8F5C8] hover:text-green-900"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* ── OVERVIEW ── */}
      {tab === "overview" && (
        <div className="space-y-6">
          <ContentCard>
            <SubHeading>What is a Transposition Cipher?</SubHeading>
            <p className="text-gray-600 leading-relaxed mb-4">
              A <strong>transposition cipher</strong> is a cryptographic method in which the positions of the characters are changed according to a regular system, but the actual characters (letters) remain unchanged. Unlike substitution ciphers (where A→D), transposition ciphers simply <em>move the letters around</em>.
            </p>
            <div className="bg-[#F0FFF4] rounded-2xl p-5 font-mono text-center">
              <p className="text-gray-400 text-sm mb-2">Plain Text</p>
              <p className="text-2xl font-black text-gray-900 tracking-widest mb-3">MEET ME TOMORROW</p>
              <p className="text-gray-400 text-sm mb-2">After Simple Reversal</p>
              <p className="text-2xl font-black text-green-700 tracking-widest">WORROMOT EM TEEM</p>
            </div>
          </ContentCard>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ContentCard>
              <SubHeading>Types of Transposition</SubHeading>
              <div className="space-y-3">
                {[
                  { e: "🚂", t: "Rail Fence Cipher", d: "Write in diagonal zigzag, read row by row" },
                  { e: "🌀", t: "Route Cipher", d: "Write in grid, read following a spiral/zigzag route" },
                  { e: "📊", t: "Columnar Transposition", d: "Fill columns, read in different column order" },
                  { e: "🔁", t: "Double Transposition", d: "Apply columnar twice for stronger security" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start bg-gray-50 rounded-xl p-3">
                    <span className="text-2xl">{item.e}</span>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{item.t}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ContentCard>

            <ContentCard>
              <SubHeading>Transposition vs Substitution</SubHeading>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left">
                      <th className="p-3 font-bold text-gray-400">Feature</th>
                      <th className="p-3 font-bold text-green-700">Transposition</th>
                      <th className="p-3 font-bold text-purple-700">Substitution</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Letters changed?", "❌ No", "✅ Yes"],
                      ["Positions changed?", "✅ Yes", "❌ No"],
                      ["Frequency preserved?", "✅ Yes", "❌ No"],
                      ["Example", "Rail Fence", "Caesar Cipher"],
                      ["Weakness", "Anagramming", "Frequency analysis"],
                    ].map(([f, tr, sub], i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="p-3 font-bold text-gray-700">{f}</td>
                        <td className="p-3 text-green-700">{tr}</td>
                        <td className="p-3 text-purple-700">{sub}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ContentCard>
          </div>
        </div>
      )}

      {/* ── RAIL FENCE ── */}
      {tab === "railfence" && (
        <div className="space-y-6">
          <ContentCard>
            <SubHeading>🚂 Rail Fence Cipher — How It Works</SubHeading>
            <p className="text-gray-600 leading-relaxed mb-4">
              The <strong>Rail Fence Cipher</strong> writes the plaintext in a <strong>zigzag (diagonal) pattern</strong> across a number of "rails" (rows), then reads off each rail from left to right to produce the ciphertext.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <StepCard step="1" title="Choose number of rails" desc="This is your key. Example: 3 rails." />
              <StepCard step="2" title="Write message diagonally" desc="Write letters going down and up across the rails like a zigzag wave." />
              <StepCard step="3" title="Read row by row" desc="Read all letters in rail 1, then rail 2, then rail 3. That's your ciphertext." />
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 mb-4">
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest text-center mb-4">
                Plaintext: TEXTBOOK PAGE THREE &nbsp;|&nbsp; Key: 3 Rails
              </p>
              <RailFenceGrid />
            </div>

            <div className="bg-gray-900 rounded-2xl p-5 text-center">
              <p className="text-gray-400 text-sm mb-1">Ciphertext (read row by row)</p>
              <p className="text-[#C8F5C8] font-mono font-black text-3xl tracking-widest">TBPTEETOKAEHEXOGR</p>
            </div>
          </ContentCard>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ContentCard>
              <SubHeading>Encryption Step by Step</SubHeading>
              <div className="space-y-3">
                <div className="bg-[#F0FFF4] rounded-xl p-4">
                  <p className="font-bold text-green-900 text-sm mb-2">Rail 1 (positions 0,4,8,12,16...)</p>
                  <p className="font-mono font-black text-xl text-green-800 tracking-widest">T · · · B · · · P · · · T · · · E</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4">
                  <p className="font-bold text-blue-900 text-sm mb-2">Rail 2 (positions 1,3,5,7,9,11...)</p>
                  <p className="font-mono font-black text-xl text-blue-800 tracking-widest">· E · T · O · K · A · E · H · E ·</p>
                </div>
                <div className="bg-orange-50 rounded-xl p-4">
                  <p className="font-bold text-orange-900 text-sm mb-2">Rail 3 (positions 2,6,10,14...)</p>
                  <p className="font-mono font-black text-xl text-orange-800 tracking-widest">· · X · · · O · · · G · · · R · ·</p>
                </div>
              </div>
            </ContentCard>

            <ContentCard>
              <SubHeading>Decryption</SubHeading>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                To decrypt, you reverse the process: knowing the number of rails and the ciphertext length, you reconstruct the zigzag grid and fill in the letters row by row, then read them diagonally.
              </p>
              <div className="space-y-3">
                <StepCard step="1" title="Know the key (number of rails)" desc="Without the key, you'd need to try 1, 2, 3... rails — brute force." />
                <StepCard step="2" title="Calculate row lengths" desc="Determine how many characters fall on each rail." />
                <StepCard step="3" title="Reconstruct the grid" desc="Fill ciphertext back into the grid row by row." />
                <StepCard step="4" title="Read diagonally" desc="Read the zigzag pattern diagonally to recover plaintext." />
              </div>
              <KidCard
                emoji="🧩"
                title="Like reversing a puzzle!"
                text="You already know the zigzag shape (from the key). Just put the letters back where they belong, then read them in the original zigzag order."
              />
            </ContentCard>
          </div>

          <ContentCard>
            <SubHeading>Security Analysis</SubHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-black text-red-700 text-sm mb-3">❌ Weaknesses</p>
                <ProConList
                  items={[
                    "Very small key space — you only need to try a few values of N (number of rails)",
                    "Letter frequencies are preserved — standard English frequency analysis applies",
                    "Easy to brute-force for short texts with few possible rail counts",
                  ]}
                  bg="bg-red-50"
                  textColor="text-red-700"
                  icon="❌"
                />
              </div>
              <div>
                <p className="font-black text-green-700 text-sm mb-3">✅ When It's Useful</p>
                <ProConList
                  items={[
                    "Combined with substitution (e.g., Vigenère + Rail Fence) creates a much stronger cipher",
                    "Used as a component inside modern block ciphers (AES uses transposition steps internally)",
                    "Simple to implement and understand — good for learning cryptography basics",
                  ]}
                  bg="bg-[#F0FFF4]"
                  textColor="text-green-800"
                  icon="✅"
                />
              </div>
            </div>
          </ContentCard>
        </div>
      )}

      {/* ── ROUTE CIPHER ── */}
      {tab === "route" && (
        <div className="space-y-6">
          <ContentCard>
            <SubHeading>🌀 Route Cipher — How It Works</SubHeading>
            <p className="text-gray-600 leading-relaxed mb-4">
              In a <strong>Route Cipher</strong>, the plaintext is written into a <strong>rectangular grid</strong>, and then read off by following a chosen geometric path or "route" — such as spiraling clockwise inward, zigzagging, or reading alternate rows reversed. The route itself is the key.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <StepCard step="1" title="Choose grid dimensions" desc="Decide on rows × columns (e.g., 4×6 for 24 characters)." />
              <StepCard step="2" title="Fill plaintext row by row" desc="Write the message left to right, row by row. Use 'X' as padding for empty cells." />
              <StepCard step="3" title="Follow the route" desc="Read the letters in the chosen route order (spiral, zigzag, etc.)." />
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 mb-4">
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest text-center mb-4">
                Plaintext: MEET ME HERE TOMORROW NIGHT &nbsp;|&nbsp; Grid: 4×6 &nbsp;|&nbsp; Route: Spiral Clockwise
              </p>
              <RouteGrid />
              <p className="text-center text-xs text-gray-400 mt-3 font-medium">Numbers indicate the spiral clockwise reading order</p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-5 text-center">
              <p className="text-gray-400 text-sm mb-1">Ciphertext (spiral clockwise)</p>
              <p className="text-[#C8F5C8] font-mono font-black text-2xl tracking-widest">TEEMMRMOGHTXIROEHEEOWNRT</p>
            </div>
          </ContentCard>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ContentCard>
              <SubHeading>Available Routes</SubHeading>
              <div className="space-y-3">
                {[
                  { e: "🌀", t: "Spiral Clockwise Inward", d: "Top-left → right → down → left → up → inner loop..." },
                  { e: "⚡", t: "Zigzag (Boustrophedon)", d: "Row 1 left→right, Row 2 right→left, alternating..." },
                  { e: "↕️", t: "Column Read", d: "Read top-to-bottom column by column" },
                  { e: "🔄", t: "Diagonal Read", d: "Read diagonally across the grid" },
                  { e: "🎯", t: "Inward Spiral Counter-clockwise", d: "Same as clockwise but in opposite direction" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 bg-gray-50 rounded-xl p-3">
                    <span className="text-xl">{item.e}</span>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{item.t}</p>
                      <p className="text-gray-500 text-xs">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ContentCard>

            <ContentCard>
              <SubHeading>Decryption</SubHeading>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">Receiver needs to know: (1) Grid dimensions, (2) The route taken.</p>
              <div className="space-y-3">
                <StepCard step="1" title="Reconstruct the empty grid" desc="Create the same size grid used for encryption." />
                <StepCard step="2" title="Fill using the route" desc="Place ciphertext letters back into the grid following the same route." />
                <StepCard step="3" title="Read row by row" desc="Once grid is filled, read left-to-right, top-to-bottom to get plaintext." />
              </div>
              <div className="mt-4">
                <RealCard emoji="🗺️" title="Cold War Spy Networks" desc="Soviet and Western intelligence agencies used route ciphers embedded in newspaper personal ads, book codes, and shortwave radio broadcasts to communicate with field agents." />
              </div>
            </ContentCard>
          </div>
        </div>
      )}

      {/* ── COLUMNAR ── */}
      {tab === "columnar" && (
        <div className="space-y-6">
          <ContentCard>
            <SubHeading>📊 Simple Columnar Transposition</SubHeading>
            <p className="text-gray-600 leading-relaxed mb-4">
              The plaintext is written row by row into a grid with a fixed number of columns, then the columns are read out in a specific order (either numerically 1→8 or based on alphabetical order of a keyword). The column reading order is the key.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <StepCard step="1" title="Choose column count (key)" desc="Example: 8 columns. Write plaintext row by row." />
              <StepCard step="2" title="Pad if needed" desc="If message doesn't fill last row, pad with 'X' or 'Q'." />
              <StepCard step="3" title="Read column by column" desc="Read column 1 top-to-bottom, then column 2, etc." />
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 mb-4">
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest text-center mb-4">
                Plaintext: WE ARE DISCOVERED FLEE AT ONCE &nbsp;|&nbsp; 8 Columns
              </p>
              <ColumnarGrid
                headers={["1","2","3","4","5","6","7","8"]}
                data={[
                  ["W","E","A","R","E","D","I","S"],
                  ["C","O","V","E","R","E","D","F"],
                  ["L","E","E","A","T","O","N","C"],
                  ["E","Q","J","W","G","C","R","K"],
                ]}
              />
            </div>

            <div className="bg-gray-900 rounded-2xl p-5 text-center">
              <p className="text-gray-400 text-sm mb-1">Ciphertext (read column 1, then 2, ... then 8)</p>
              <p className="text-[#C8F5C8] font-mono font-black text-xl tracking-widest break-all">WCLE · EOEQ · AVEJ · REAW · ERTG · DEOC · IDNR · SFCK</p>
            </div>
          </ContentCard>

          <ContentCard>
            <SubHeading>Keyword Columnar Transposition</SubHeading>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Instead of reading columns 1,2,3,4..., you use a <strong>keyword</strong> to determine column order. The keyword letters are sorted alphabetically, and columns are read in that sorted order.
            </p>
            <div className="bg-[#F0FFF4] rounded-2xl p-5 mb-4">
              <p className="font-bold text-green-900 mb-3">Example: Keyword = ZEBRAS</p>
              <div className="overflow-x-auto">
                <table className="font-mono text-sm mx-auto">
                  <thead>
                    <tr>
                      {[["Z","6"],["E","3"],["B","1"],["R","5"],["A","2"],["S","4"]].map(([k,n],i)=>(
                        <th key={i} className="text-center px-2">
                          <div className="bg-gray-900 text-[#C8F5C8] font-black w-10 h-10 rounded-lg flex flex-col items-center justify-center">
                            <span>{k}</span><span className="text-xs">{n}</span>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[["W","E","A","R","E","D"],["I","S","C","O","V","E"],["R","E","D","F","L","E"],["E","A","T","O","N","C"]].map((row,ri)=>(
                      <tr key={ri}>
                        {row.map((c,ci)=>(
                          <td key={ci} className="w-10 h-10 text-center bg-[#E8FFF0] text-green-900 font-bold rounded-lg m-0.5">{c}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-green-700 mt-3 text-center font-medium">Columns read in sorted order: B(1), A(2), E(3), S(4), R(5), Z(6) → ACDT... EWAE... etc.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <RealCard emoji="🏛️" title="WW1 & WW2 Intelligence" desc="The ADFGVX cipher used by Germany in WW1 combined a substitution step with double columnar transposition. French cryptanalyst Georges Painvin broke it in June 1918." />
              <RealCard emoji="🔐" title="Used inside AES" desc="AES (Advanced Encryption Standard) uses a ShiftRows transformation — essentially a transposition step — to ensure diffusion across the 4×4 byte state matrix." />
            </div>
          </ContentCard>
        </div>
      )}

      {/* ── DOUBLE TRANSPOSITION ── */}
      {tab === "double" && (
        <div className="space-y-6">
          <ContentCard>
            <SubHeading>🔁 Double Columnar Transposition</SubHeading>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Double Transposition</strong> applies columnar transposition <em>twice</em>. The ciphertext of the first transposition becomes the plaintext for the second transposition. This dramatically increases the difficulty of cryptanalysis.
            </p>

            {/* Flow diagram */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-6">
              <div className="flex items-center justify-around flex-wrap gap-4 text-center">
                {[
                  { e: "📝", l: "Plaintext", sub: "WE ARE DISCOVERED...", bg: "bg-white" },
                  { e: "🔀", l: "1st Columnar", sub: "WCLE EOEQ AVEJ...", bg: "bg-[#E8FFF0]" },
                  { e: "🔀", l: "2nd Columnar", sub: "WAEI CVRD LETN...", bg: "bg-[#C8F5C8]" },
                  { e: "🔒", l: "Final Ciphertext", sub: "Much harder to crack", bg: "bg-gray-900" },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`${s.bg} rounded-2xl p-4 text-center w-36`}>
                      <p className="text-3xl mb-1">{s.e}</p>
                      <p className={`font-black text-sm ${s.bg === "bg-gray-900" ? "text-white" : "text-gray-800"}`}>{s.l}</p>
                      <p className={`font-mono text-xs mt-1 ${s.bg === "bg-gray-900" ? "text-gray-400" : "text-gray-500"}`}>{s.sub}</p>
                    </div>
                    {i < 3 && <span className="text-2xl text-gray-300 font-black hidden md:block">→</span>}
                  </div>
                ))}
              </div>
            </div>

            {/* First round */}
            <div className="mb-4">
              <p className="font-black text-gray-900 mb-3">Round 1 — First Columnar Transposition</p>
              <ColumnarGrid
                headers={["1","2","3","4","5","6","7","8"]}
                data={[
                  ["W","E","A","R","E","D","I","S"],
                  ["C","O","V","E","R","E","D","F"],
                  ["L","E","E","A","T","O","N","C"],
                  ["E","Q","J","W","G","C","R","K"],
                ]}
              />
              <div className="bg-[#F0FFF4] rounded-xl p-3 text-center mt-3">
                <p className="font-mono text-green-900 font-black tracking-widest text-sm">Cipher 1: WCLE EOEQ AVEJ REAW ERTG DEOC IDNR SFCK</p>
              </div>
            </div>

            {/* Second round */}
            <div>
              <p className="font-black text-gray-900 mb-3">Round 2 — Second Columnar Transposition (Cipher 1 becomes new plaintext)</p>
              <ColumnarGrid
                headers={["1","2","3","4","5","6","7","8"]}
                data={[
                  ["W","C","L","E","E","O","E","Q"],
                  ["A","V","E","J","R","E","A","W"],
                  ["E","R","T","G","D","E","O","C"],
                  ["I","D","N","R","S","F","C","K"],
                ]}
              />
              <div className="bg-gray-900 rounded-xl p-3 text-center mt-3">
                <p className="font-mono text-[#C8F5C8] font-black tracking-widest text-sm">Cipher 2: WAEI CVRD LETN EJGR ERDS OEEF EAOC QWCK</p>
              </div>
            </div>
          </ContentCard>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ContentCard>
              <SubHeading>Why Is It Stronger?</SubHeading>
              <div className="space-y-3">
                {[
                  { e: "🛡️", t: "Destroys frequency patterns", d: "Single transposition keeps letter frequencies intact — double transposition makes statistical analysis much harder." },
                  { e: "🔑", t: "Two key spaces", d: "Attacker needs to crack both the first AND second transposition keys simultaneously." },
                  { e: "📏", t: "Exponential complexity", d: "For 8-column cipher, single = 8! = 40,320 combinations. Double = (8!)² ≈ 1.6 billion combinations." },
                  { e: "🧬", t: "Genetic algorithm resistant", d: "The combination of two permutations makes hill-climbing attacks much less effective." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 bg-[#F0FFF4] rounded-xl p-3">
                    <span className="text-xl">{item.e}</span>
                    <div>
                      <p className="font-bold text-green-900 text-sm">{item.t}</p>
                      <p className="text-green-700 text-xs mt-0.5 leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ContentCard>

            <ContentCard>
              <SubHeading>Historical Use</SubHeading>
              <div className="space-y-4">
                <RealCard emoji="🪖" title="German Wehrmacht (WW2)" desc="The German Army used double columnar transposition for field radio messages. Each unit had a different key table changed daily." />
                <RealCard emoji="🕵️" title="SOE Agents (British)" desc="Special Operations Executive agents parachuted into occupied Europe used double transposition poem ciphers. The poem was the key — memorized, never written down." />
                <KidCard emoji="🎁" title="Like wrapping a gift twice!" text="Put your secret gift in one box, wrap it up tight. Then put THAT wrapped box inside another box and wrap it again. Even if someone opens the outer box, they still need to unwrap the inner one!" />
              </div>
            </ContentCard>
          </div>
        </div>
      )}

      {/* ── CRYPTANALYSIS ── */}
      {tab === "cryptanalysis" && (
        <div className="space-y-6">
          <ContentCard>
            <SubHeading>🕵️ How to Detect a Transposition Cipher</SubHeading>
            <p className="text-gray-600 leading-relaxed mb-6">
              The key fingerprint of a transposition cipher: <strong>letter frequencies match normal plaintext</strong>. In English, 'E' appears ~13%, 'T' ~9%, 'A' ~8%. If ciphertext shows this pattern, it's almost certainly a transposition, not a substitution.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {[
                { e: "📊", t: "Step 1: Frequency Analysis", d: "Count the frequency of each letter in the ciphertext. If it matches the expected frequency distribution for English (E, T, A most common), it is very likely a transposition cipher.", bg: "bg-[#F0FFF4]", tc: "text-green-900", bc: "text-green-800" },
                { e: "🔤", t: "Step 2: Anagramming", d: "Slice the ciphertext into chunks of various lengths and attempt to rearrange them to form real English words or phrases. Once one correct arrangement is found, it reveals the transposition key pattern.", bg: "bg-blue-50", tc: "text-blue-900", bc: "text-blue-700" },
                { e: "🧬", t: "Step 3: Genetic Algorithms", d: "Modern AI-based methods evolve 'populations' of candidate keys by combining and mutating them, scoring each by how English-like the result looks. Very effective at finding columnar keys.", bg: "bg-purple-50", tc: "text-purple-900", bc: "text-purple-700" },
              ].map((c, i) => (
                <div key={i} className={`${c.bg} rounded-2xl p-5`}>
                  <p className="text-3xl mb-2">{c.e}</p>
                  <p className={`font-black ${c.tc} text-base mb-2`}>{c.t}</p>
                  <p className={`${c.bc} text-sm leading-relaxed`}>{c.d}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-900 rounded-2xl p-5">
              <p className="text-[#C8F5C8] font-bold mb-3">💡 Key Cryptanalysis Insight from your notes:</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                "Simpler transpositions suffer from the property that keys very close to the correct key will disclose long pieces of understandable plaintext combined in a rough format. Consequently, such ciphers may be weak to most-favorable-solution seeking algorithms such as <strong className="text-white">Genetic Algorithms</strong> — algorithms that dig out probabilities for the solution."
              </p>
            </div>
          </ContentCard>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ContentCard>
              <SubHeading>Cryptanalysis Methods in Detail</SubHeading>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-2xl p-4">
                  <p className="font-black text-gray-900 text-sm mb-2">🔬 Index of Coincidence (IC)</p>
                  <p className="text-gray-600 text-xs leading-relaxed">The IC measures how often two randomly selected letters from the ciphertext are identical. For English: IC ≈ 0.065. For random cipher: IC ≈ 0.038. Transposition ciphers have IC ≈ 0.065 — matching plaintext!</p>
                </div>
                <div className="bg-gray-50 rounded-2xl p-4">
                  <p className="font-black text-gray-900 text-sm mb-2">🔤 Anagramming Attack</p>
                  <p className="text-gray-600 text-xs leading-relaxed">Cut ciphertext into N strips (try N=2,3,4,5...). Try all permutations of strips. When you find a permutation that produces readable English fragments, you have the key. Tools like CryptoCracker automate this.</p>
                </div>
                <div className="bg-gray-50 rounded-2xl p-4">
                  <p className="font-black text-gray-900 text-sm mb-2">🧬 Genetic Algorithm Attack</p>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    1. Generate random population of candidate keys<br/>
                    2. Score each by "fitness" (how English-like is the result?)<br/>
                    3. Breed best candidates, mutate slightly<br/>
                    4. Repeat until a high-fitness key emerges
                  </p>
                </div>
              </div>
            </ContentCard>

            <ContentCard>
              <SubHeading>Historical Codebreaking</SubHeading>
              <div className="space-y-4">
                <RealCard emoji="🏛️" title="Bletchley Park, WW2" desc="Alan Turing and team used frequency analysis combined with 'cribs' (known plaintext guesses like 'WEATHER REPORT' or 'HEIL HITLER') to crack German transposition ciphers. The cribs dramatically reduced the search space." />
                <RealCard emoji="⚔️" title="ADFGVX Cipher (WW1)" desc="Germany's ADFGVX cipher used substitution followed by columnar transposition. French cryptanalyst Georges Painvin broke it in June 1918 using repeated message analysis — messages sent with the same key but different lengths leaked the column structure." />
                <RealCard emoji="📱" title="Modern Context" desc="Pure transposition is rarely used alone today. However, permutation steps are fundamental to AES (ShiftRows), DES (P-box), and SHA-256 (bitwise rotations) — all modern cryptographic standards." />
              </div>
            </ContentCard>
          </div>
        </div>
      )}
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// SECTION: RSA ALGORITHM
// ─────────────────────────────────────────────────────────────
const RSASection = () => {
  const [tab, setTab] = useState("overview");

  const tabs = [
    { key: "overview", label: "📖 Overview" },
    { key: "publickey", label: "🔑 Public Key Crypto" },
    { key: "keygen", label: "⚙️ Key Generation" },
    { key: "encrypt", label: "🔒 Encryption" },
    { key: "decrypt", label: "🔓 Decryption" },
    { key: "worked", label: "🧮 Full Example" },
    { key: "ciphertypes", label: "🗂️ Cipher Types" },
  ];

  return (
    <div>
      <SectionHeading
        emoji="🔐"
        title="RSA Algorithm"
        subtitle="Rivest–Shamir–Adleman: The math behind HTTPS, digital signatures, and cryptocurrency — explained from scratch."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <KidCard emoji="📬" title="Like a magic mailbox!" text="You have a mailbox with a slot anyone can drop letters into (public key). But only YOU have the physical key to open and read those letters (private key). RSA works exactly the same way — anyone can encrypt, only you can decrypt!" />
        <KidCard emoji="🔢" title="Why is it secure?" text="RSA is based on multiplying two huge prime numbers — easy to do. But figuring out which two primes were multiplied to produce that huge number? Even the world's fastest supercomputers would take billions of years to reverse it!" />
        <div className="bg-gray-900 rounded-2xl p-5">
          <p className="text-[#C8F5C8] font-black text-base mb-3">Key Facts</p>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex gap-2"><span className="text-[#C8F5C8]">👨‍💻</span> Invented by Rivest, Shamir, Adleman (1977)</li>
            <li className="flex gap-2"><span className="text-[#C8F5C8]">🔢</span> Based on integer factorization problem</li>
            <li className="flex gap-2"><span className="text-[#C8F5C8]">🔑</span> Uses two mathematically linked keys</li>
            <li className="flex gap-2"><span className="text-[#C8F5C8]">🌍</span> Powers HTTPS, SSH, PGP email, TLS</li>
            <li className="flex gap-2"><span className="text-[#C8F5C8]">📏</span> Common key sizes: 1024, 2048, 4096 bits</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <RealCard emoji="🌐" title="HTTPS (Every Website)" desc="Every time you see 🔒 in your browser, RSA or ECC established a secure TLS session. Your browser verified the server's RSA public key certificate before sending any data." />
        <RealCard emoji="₿" title="Cryptocurrency & Blockchain" desc="Bitcoin wallets use ECDSA (elliptic curve cousin of RSA) to create digital signatures — proving coin ownership without revealing your private key to anyone." />
        <RealCard emoji="✍️" title="Digital Signatures" desc="Apple signs every iOS update with their private RSA key. Your iPhone uses Apple's public key to verify it's a genuine update — not malware from a hacker." />
      </div>

      {/* Tab Switcher */}
      <div className="flex gap-2 flex-wrap mb-6">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
              tab === t.key ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-600 hover:bg-[#C8F5C8] hover:text-green-900"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* ── OVERVIEW ── */}
      {tab === "overview" && (
        <div className="space-y-6">
          <ContentCard>
            <SubHeading>What is RSA?</SubHeading>
            <p className="text-gray-600 leading-relaxed mb-4">
              RSA is an <strong>asymmetric-key cipher</strong> — it uses <strong>two mathematically linked keys</strong>: a public key for encryption and a private key for decryption. It's based on the mathematical difficulty of factoring the product of two large prime numbers.
            </p>

            <div className="bg-gray-50 rounded-2xl p-6 mb-4">
              <div className="flex items-center justify-around flex-wrap gap-4 text-center">
                {[
                  { e: "🔑", l: "Public Key", sub: "(n, e)", bg: "bg-green-100", tc: "text-green-800" },
                  { e: "📝", l: "Message M", sub: "Original plaintext", bg: "bg-gray-100", tc: "text-gray-700" },
                  { e: "🔒", l: "Encrypt", sub: "C = Mᵉ mod n", bg: "bg-[#E8FFF0]", tc: "text-green-800" },
                  { e: "📡", l: "Transmit C", sub: "Over internet", bg: "bg-blue-50", tc: "text-blue-800" },
                  { e: "🔓", l: "Decrypt", sub: "M = Cᵈ mod n", bg: "bg-[#E8FFF0]", tc: "text-green-800" },
                  { e: "✅", l: "Message M", sub: "Recovered!", bg: "bg-green-100", tc: "text-green-800" },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className={`${s.bg} rounded-2xl p-4 text-center w-28`}>
                      <p className="text-3xl mb-1">{s.e}</p>
                      <p className={`font-black text-xs ${s.tc}`}>{s.l}</p>
                      <p className={`text-xs ${s.tc} opacity-70 mt-0.5 font-mono`}>{s.sub}</p>
                    </div>
                    {i < 5 && <span className="text-gray-200 text-2xl font-black hidden md:block">→</span>}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-[#F0FFF4] rounded-2xl p-4 text-center">
                <p className="text-3xl mb-1">⚡</p>
                <p className="text-xs font-bold text-green-600 uppercase">Speed</p>
                <p className="font-black text-green-900">Slow (vs AES)</p>
              </div>
              <div className="bg-blue-50 rounded-2xl p-4 text-center">
                <p className="text-3xl mb-1">🔑</p>
                <p className="text-xs font-bold text-blue-600 uppercase">Keys</p>
                <p className="font-black text-blue-900">2048+ bits</p>
              </div>
              <div className="bg-purple-50 rounded-2xl p-4 text-center">
                <p className="text-3xl mb-1">📐</p>
                <p className="text-xs font-bold text-purple-600 uppercase">Based on</p>
                <p className="font-black text-purple-900">Prime Factors</p>
              </div>
              <div className="bg-orange-50 rounded-2xl p-4 text-center">
                <p className="text-3xl mb-1">🌍</p>
                <p className="text-xs font-bold text-orange-600 uppercase">Use case</p>
                <p className="font-black text-orange-900">Key Exchange</p>
              </div>
            </div>
          </ContentCard>
        </div>
      )}

      {/* ── PUBLIC KEY CRYPTO ── */}
      {tab === "publickey" && (
        <div className="space-y-6">
          <ContentCard>
            <SubHeading>Public Key Cryptography Fundamentals</SubHeading>
            <p className="text-gray-600 leading-relaxed mb-6">
              Traditional (symmetric) cryptography requires both parties to share a secret key in advance — a huge problem over the internet. Public key cryptography solves this by using mathematically linked key pairs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-[#F0FFF4] rounded-2xl p-5">
                <p className="text-4xl mb-3">🔑</p>
                <h4 className="font-black text-green-900 text-lg mb-2">Public Key</h4>
                <ul className="space-y-2 text-sm text-green-800">
                  <li className="flex gap-2"><span>✅</span> <span>Freely shared with anyone in the world</span></li>
                  <li className="flex gap-2"><span>✅</span> <span>Used to <strong>ENCRYPT</strong> messages sent to the owner</span></li>
                  <li className="flex gap-2"><span>✅</span> <span>Used to <strong>VERIFY</strong> digital signatures</span></li>
                  <li className="flex gap-2"><span>✅</span> <span>Published in directories (like HTTPS certificates)</span></li>
                  <li className="flex gap-2"><span>✅</span> <span>Like your email address — anyone can send to it</span></li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-2xl p-5">
                <p className="text-4xl mb-3">🗝️</p>
                <h4 className="font-black text-red-900 text-lg mb-2">Private Key</h4>
                <ul className="space-y-2 text-sm text-red-800">
                  <li className="flex gap-2"><span>🔒</span> <span>Never shared with anyone, kept secret forever</span></li>
                  <li className="flex gap-2"><span>🔒</span> <span>Used to <strong>DECRYPT</strong> messages encrypted with your public key</span></li>
                  <li className="flex gap-2"><span>🔒</span> <span>Used to <strong>CREATE</strong> digital signatures</span></li>
                  <li className="flex gap-2"><span>🔒</span> <span>Stored in HSMs, TPM chips, or encrypted key files</span></li>
                  <li className="flex gap-2"><span>🔒</span> <span>Like your email password — only you know it</span></li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-5 mb-4">
              <p className="font-black text-gray-900 mb-4 text-center">Two Use Cases of Asymmetric Cryptography</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-4">
                  <p className="font-black text-green-800 text-sm mb-2">📨 Secure Communication</p>
                  <div className="flex items-center gap-2 text-xs text-gray-600 flex-wrap">
                    <span className="bg-gray-100 px-2 py-1 rounded">Alice wants to message Bob</span>
                    <span>→</span>
                    <span className="bg-[#C8F5C8] px-2 py-1 rounded">Encrypts with Bob's PUBLIC key</span>
                    <span>→</span>
                    <span className="bg-gray-100 px-2 py-1 rounded">Sends ciphertext</span>
                    <span>→</span>
                    <span className="bg-[#C8F5C8] px-2 py-1 rounded">Bob decrypts with his PRIVATE key</span>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-4">
                  <p className="font-black text-purple-800 text-sm mb-2">✍️ Digital Signature</p>
                  <div className="flex items-center gap-2 text-xs text-gray-600 flex-wrap">
                    <span className="bg-gray-100 px-2 py-1 rounded">Bob signs a document</span>
                    <span>→</span>
                    <span className="bg-purple-100 px-2 py-1 rounded">Signs with his PRIVATE key</span>
                    <span>→</span>
                    <span className="bg-gray-100 px-2 py-1 rounded">Sends signature + doc</span>
                    <span>→</span>
                    <span className="bg-purple-100 px-2 py-1 rounded">Alice verifies with Bob's PUBLIC key</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <RealCard emoji="🌐" title="HTTPS / TLS" desc="Your browser uses the website's RSA public key (from the SSL certificate) to establish a secure session. Only the web server with the matching private key can participate." />
              <RealCard emoji="📧" title="PGP Email Encryption" desc="PGP (Pretty Good Privacy) lets you encrypt emails using the recipient's public key. Even your email provider can't read the contents — only the recipient can." />
              <RealCard emoji="💳" title="Secure Online Payments" desc="Payment processors use RSA to ensure only their servers can decrypt your card details. The public key is in their HTTPS certificate your browser already has." />
            </div>
          </ContentCard>
        </div>
      )}

      {/* ── KEY GENERATION ── */}
      {tab === "keygen" && (
        <div className="space-y-6">
          <ContentCard>
            <SubHeading>⚙️ RSA Key Generation — Step by Step</SubHeading>
            <p className="text-gray-600 leading-relaxed mb-6">
              Key generation is the most critical step. We'll use small numbers (p=3, q=11, e=7) for clarity. In practice, p and q are 1024-bit prime numbers.
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  n: "1", title: "Choose two distinct prime numbers p and q",
                  detail: "Primes are numbers divisible only by 1 and themselves: 2, 3, 5, 7, 11, 13...",
                  calc: "p = 3,  q = 11",
                  bg: "bg-[#F0FFF4]", tc: "text-green-900", bc: "bg-[#C8F5C8] text-green-900"
                },
                {
                  n: "2", title: "Compute n = p × q  (the modulus)",
                  detail: "n is public and part of both the public and private key. Its length in bits is the key size.",
                  calc: "n = 3 × 11 = 33",
                  bg: "bg-blue-50", tc: "text-blue-900", bc: "bg-blue-100 text-blue-900"
                },
                {
                  n: "3", title: "Compute φ(n) = (p−1)(q−1)  (Euler's Totient)",
                  detail: "φ(n) counts how many integers between 1 and n are coprime with n. This is kept secret.",
                  calc: "φ(33) = (3−1)(11−1) = 2 × 10 = 20",
                  bg: "bg-purple-50", tc: "text-purple-900", bc: "bg-purple-100 text-purple-900"
                },
                {
                  n: "4", title: "Choose public exponent e",
                  detail: "e must satisfy: 1 < e < φ(n), and gcd(e, φ(n)) = 1 (e and φ(n) must be coprime).",
                  calc: "e = 7  →  gcd(7, 20) = 1  ✓",
                  bg: "bg-orange-50", tc: "text-orange-900", bc: "bg-orange-100 text-orange-900"
                },
                {
                  n: "5", title: "Compute private key d (modular multiplicative inverse of e)",
                  detail: "Find d such that: d × e ≡ 1 (mod φ(n)). Use the Extended Euclidean Algorithm.",
                  calc: "d × 7 ≡ 1 (mod 20)  →  3 × 7 = 21 = 20+1  →  d = 3",
                  bg: "bg-red-50", tc: "text-red-900", bc: "bg-red-100 text-red-900"
                },
              ].map((row) => (
                <div key={row.n} className={`${row.bg} rounded-2xl p-5`}>
                  <div className="flex items-start gap-4 flex-wrap">
                    <div className={`${row.bc} font-black text-2xl rounded-2xl w-12 h-12 flex items-center justify-center shrink-0`}>{row.n}</div>
                    <div className="flex-1 min-w-0">
                      <p className={`font-black text-base ${row.tc} mb-1`}>{row.title}</p>
                      <p className={`text-sm ${row.tc} opacity-70 mb-3 leading-relaxed`}>{row.detail}</p>
                      <div className="bg-white rounded-xl px-4 py-3 font-mono font-black text-base text-gray-900">{row.calc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#E8FFF0] rounded-2xl p-5 text-center">
                <p className="text-sm font-bold text-green-600 uppercase tracking-widest mb-2">🌍 Public Key (Share with everyone)</p>
                <p className="font-black text-green-900 font-mono text-3xl">(n = 33, e = 7)</p>
              </div>
              <div className="bg-red-50 rounded-2xl p-5 text-center">
                <p className="text-sm font-bold text-red-600 uppercase tracking-widest mb-2">🤫 Private Key (Keep forever secret)</p>
                <p className="font-black text-red-900 font-mono text-3xl">(n = 33, d = 3)</p>
              </div>
            </div>
          </ContentCard>

          <ContentCard>
            <SubHeading>Understanding Euler's Totient Function φ(n)</SubHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  φ(n) counts how many positive integers up to n share no common factor with n (i.e., are coprime with n). For n = 33, the numbers 1–32 that are coprime with 33 total 20.
                </p>
                <KidCard emoji="🔢" title="Simple analogy" text="Imagine n=10 tiles. φ(10) counts how many tiles share no color with tile 10. Tiles 1,3,7,9 qualify → φ(10) = 4. This secret count is used to derive the private key!" />
              </div>
              <div className="bg-gray-50 rounded-2xl p-4">
                <p className="font-black text-gray-900 text-sm mb-3">Why it works mathematically</p>
                <div className="space-y-2 text-xs text-gray-600 leading-relaxed">
                  <p>By Euler's theorem: if gcd(M, n) = 1, then M^φ(n) ≡ 1 (mod n)</p>
                  <p>RSA uses this: M^(e·d) ≡ M^(1 + k·φ(n)) ≡ M·(M^φ(n))^k ≡ M·1^k ≡ M (mod n)</p>
                  <p>So decrypting (applying d) after encrypting (applying e) always recovers M!</p>
                </div>
                <div className="bg-white rounded-xl p-3 mt-3 font-mono text-xs text-center text-gray-800">
                  <p>e · d ≡ 1 (mod φ(n))</p>
                  <p className="mt-1">7 · 3 = 21 ≡ 1 (mod 20) ✓</p>
                </div>
              </div>
            </div>
          </ContentCard>
        </div>
      )}

      {/* ── ENCRYPTION ── */}
      {tab === "encrypt" && (
        <div className="space-y-6">
          <ContentCard>
            <SubHeading>🔒 RSA Encryption</SubHeading>
            <p className="text-gray-600 leading-relaxed mb-4">
              Given a message M (represented as a number where M &lt; n), encryption uses the <strong>public key (n, e)</strong>:
            </p>
            <FormulaBox formula="C = Mᵉ mod n" label="Encryption Formula — C is the ciphertext, M is the message, e and n are from the public key" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div className="space-y-3">
                <p className="font-black text-gray-900">Step-by-step: Encrypt M = 5</p>
                <CalcRow step="1" text="Public key values" calc="n = 33,  e = 7" bg="bg-[#F0FFF4]" tc="text-green-900" />
                <CalcRow step="2" text="Message to encrypt" calc="M = 5" bg="bg-gray-50" tc="text-gray-800" />
                <CalcRow step="3" text="Apply formula" calc="C = 5⁷ mod 33" bg="bg-[#F0FFF4]" tc="text-green-900" />
                <CalcRow step="4" text="Calculate 5⁷" calc="= 78,125" bg="bg-[#F0FFF4]" tc="text-green-900" />
                <CalcRow step="5" text="Find 78125 mod 33" calc="78125 ÷ 33 = 2367 remainder 14" bg="bg-[#F0FFF4]" tc="text-green-900" />

                <div className="bg-gray-900 rounded-2xl p-5 text-center mt-4">
                  <p className="text-gray-400 text-sm mb-1">Ciphertext (sent over the internet)</p>
                  <p className="text-yellow-400 font-black font-mono text-5xl">C = 14</p>
                  <p className="text-gray-500 text-xs mt-2">Useless without the private key!</p>
                </div>
              </div>

              <div className="space-y-4">
                <KidCard emoji="🔒" title="What does 'mod' mean?" text="'Mod' is just the remainder after division! 17 mod 5 = 2 (because 17 ÷ 5 = 3 with remainder 2). In RSA, 78,125 mod 33 means: divide 78,125 by 33 and give me the remainder. That remainder IS the encrypted message!" />
                <KidCard emoji="🎯" title="Why is it one-way?" text="Given C=14, e=7, n=33, reversing C=M^e mod n to find M is the 'discrete logarithm problem'. For small numbers it's feasible. For 2048-bit n, it's computationally impossible — would take longer than the age of the universe!" />
                <RealCard emoji="💳" title="Your card number right now" desc="When you type your card on Amazon, your browser encrypts it with Amazon's RSA public key (from their HTTPS certificate). Even Amazon's CDN servers can't read it — only their payment server with the private key." />
              </div>
            </div>
          </ContentCard>

          <ContentCard>
            <SubHeading>Why M must be less than n</SubHeading>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              RSA requires the plaintext M to be a number smaller than n. For real messages (text, files), the data is split into chunks smaller than n and each chunk is encrypted separately. In practice, RSA is used to encrypt a random <strong>symmetric key</strong> (like an AES key), which is then used to encrypt the actual message — this hybrid approach is how TLS works.
            </p>
            <div className="bg-gray-50 rounded-2xl p-4 text-sm text-gray-600">
              <p className="font-bold text-gray-900 mb-2">🔄 Hybrid Encryption (How TLS Actually Works)</p>
              <div className="flex items-center gap-2 flex-wrap text-xs">
                <span className="bg-[#C8F5C8] px-2 py-1 rounded font-medium text-green-900">Generate random AES key</span>
                <span>→</span>
                <span className="bg-[#C8F5C8] px-2 py-1 rounded font-medium text-green-900">Encrypt AES key with RSA public key</span>
                <span>→</span>
                <span className="bg-gray-200 px-2 py-1 rounded font-medium">Encrypt message with AES key</span>
                <span>→</span>
                <span className="bg-gray-200 px-2 py-1 rounded font-medium">Send both encrypted pieces</span>
                <span>→</span>
                <span className="bg-[#C8F5C8] px-2 py-1 rounded font-medium text-green-900">Receiver decrypts AES key with RSA private key</span>
                <span>→</span>
                <span className="bg-[#C8F5C8] px-2 py-1 rounded font-medium text-green-900">Decrypts message with AES key</span>
              </div>
            </div>
          </ContentCard>
        </div>
      )}

      {/* ── DECRYPTION ── */}
      {tab === "decrypt" && (
        <div className="space-y-6">
          <ContentCard>
            <SubHeading>🔓 RSA Decryption</SubHeading>
            <p className="text-gray-600 leading-relaxed mb-4">
              The recipient uses the <strong>private key (n, d)</strong> to reverse the encryption:
            </p>
            <FormulaBox formula="M = Cᵈ mod n" label="Decryption Formula — M is recovered message, C is ciphertext, d and n are from the private key" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div className="space-y-3">
                <p className="font-black text-gray-900">Step-by-step: Decrypt C = 14</p>
                <CalcRow step="1" text="Private key values" calc="n = 33,  d = 3" bg="bg-[#F0FFF4]" tc="text-green-900" />
                <CalcRow step="2" text="Received ciphertext" calc="C = 14" bg="bg-gray-50" tc="text-gray-800" />
                <CalcRow step="3" text="Apply formula" calc="M = 14³ mod 33" bg="bg-[#F0FFF4]" tc="text-green-900" />
                <CalcRow step="4" text="Calculate 14³" calc="14 × 14 × 14 = 2,744" bg="bg-[#F0FFF4]" tc="text-green-900" />
                <CalcRow step="5" text="Find 2744 mod 33" calc="2744 ÷ 33 = 83 remainder 5" bg="bg-[#F0FFF4]" tc="text-green-900" />

                <div className="bg-[#E8FFF0] rounded-2xl p-5 text-center mt-4">
                  <p className="text-green-600 text-sm mb-1">✅ Original message recovered!</p>
                  <p className="text-green-900 font-black font-mono text-5xl">M = 5</p>
                  <p className="text-green-600 text-xs mt-2">Matches the original plaintext perfectly!</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-2xl p-5">
                  <p className="font-black text-gray-900 mb-3">Why decryption works (the math)</p>
                  <div className="space-y-2 text-sm text-gray-600 font-mono">
                    <p>e × d ≡ 1 (mod φ(n))</p>
                    <p>7 × 3 = 21 ≡ 1 (mod 20)</p>
                    <p className="mt-2">M = C^d mod n</p>
                    <p>= (M^e)^d mod n</p>
                    <p>= M^(e·d) mod n</p>
                    <p>= M^1 mod n  [by Euler's theorem]</p>
                    <p>= M ✓</p>
                  </div>
                </div>
                <RealCard emoji="🏦" title="Your bank's HTTPS server" desc="When you log in to your bank, the browser sends your password encrypted with the bank's RSA public key. Their payment server (in a secure data center with HSM hardware) holds the private key to decrypt it." />
              </div>
            </div>
          </ContentCard>
        </div>
      )}

      {/* ── FULL WORKED EXAMPLE ── */}
      {tab === "worked" && (
        <div className="space-y-6">
          <ContentCard>
            <SubHeading>🧮 Complete RSA Worked Example (p=3, q=11, e=7)</SubHeading>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
              {[
                { l: "p", v: "3", d: "Prime 1", bg: "bg-[#F0FFF4]", tc: "text-green-900" },
                { l: "q", v: "11", d: "Prime 2", bg: "bg-[#F0FFF4]", tc: "text-green-900" },
                { l: "n", v: "33", d: "Modulus", bg: "bg-blue-50", tc: "text-blue-900" },
                { l: "φ(n)", v: "20", d: "Totient", bg: "bg-purple-50", tc: "text-purple-900" },
                { l: "e", v: "7", d: "Public exp", bg: "bg-orange-50", tc: "text-orange-900" },
              ].map((s, i) => (
                <div key={i} className={`${s.bg} rounded-2xl p-4 text-center`}>
                  <p className={`font-mono font-black text-2xl ${s.tc}`}>{s.v}</p>
                  <p className={`text-xs font-bold ${s.tc} mt-1`}>{s.l}</p>
                  <p className={`text-xs ${s.tc} opacity-70`}>{s.d}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Key Gen */}
              <div>
                <p className="font-black text-gray-900 mb-3 flex items-center gap-2"><span className="bg-[#C8F5C8] text-green-900 w-7 h-7 rounded-full flex items-center justify-center text-sm font-black">1</span> Key Generation</p>
                <div className="space-y-2 text-sm">
                  <div className="bg-gray-50 rounded-xl p-3 font-mono"><p className="text-gray-500 text-xs">n = p × q</p><p className="font-black">3 × 11 = 33</p></div>
                  <div className="bg-gray-50 rounded-xl p-3 font-mono"><p className="text-gray-500 text-xs">φ(n) = (p-1)(q-1)</p><p className="font-black">2 × 10 = 20</p></div>
                  <div className="bg-gray-50 rounded-xl p-3 font-mono"><p className="text-gray-500 text-xs">e (coprime with φ(n))</p><p className="font-black">e = 7</p></div>
                  <div className="bg-gray-50 rounded-xl p-3 font-mono"><p className="text-gray-500 text-xs">d × e ≡ 1 mod φ(n)</p><p className="font-black">d = 3 (3×7=21=20+1)</p></div>
                  <div className="bg-[#E8FFF0] rounded-xl p-3 font-mono"><p className="text-green-600 text-xs">Public Key</p><p className="font-black text-green-900">(n=33, e=7)</p></div>
                  <div className="bg-red-50 rounded-xl p-3 font-mono"><p className="text-red-600 text-xs">Private Key</p><p className="font-black text-red-900">(n=33, d=3)</p></div>
                </div>
              </div>
              {/* Encryption */}
              <div>
                <p className="font-black text-gray-900 mb-3 flex items-center gap-2"><span className="bg-[#C8F5C8] text-green-900 w-7 h-7 rounded-full flex items-center justify-center text-sm font-black">2</span> Encryption (M=5)</p>
                <div className="space-y-2 text-sm">
                  <div className="bg-gray-50 rounded-xl p-3 font-mono"><p className="text-gray-500 text-xs">Formula</p><p className="font-black">C = Mᵉ mod n</p></div>
                  <div className="bg-gray-50 rounded-xl p-3 font-mono"><p className="text-gray-500 text-xs">Substitute</p><p className="font-black">C = 5⁷ mod 33</p></div>
                  <div className="bg-gray-50 rounded-xl p-3 font-mono"><p className="text-gray-500 text-xs">5^1=5, 5^2=25</p><p className="font-black">5^4=625 mod33=9</p></div>
                  <div className="bg-gray-50 rounded-xl p-3 font-mono"><p className="text-gray-500 text-xs">5^7 = 5^4 × 5^2 × 5^1</p><p className="font-black">= 9×25×5 mod 33</p></div>
                  <div className="bg-gray-50 rounded-xl p-3 font-mono"><p className="text-gray-500 text-xs">= 1125 mod 33</p><p className="font-black">= 78125 mod 33</p></div>
                  <div className="bg-gray-900 rounded-xl p-3 font-mono text-center"><p className="text-gray-400 text-xs">Ciphertext</p><p className="font-black text-yellow-400 text-2xl">C = 14</p></div>
                </div>
              </div>
              {/* Decryption */}
              <div>
                <p className="font-black text-gray-900 mb-3 flex items-center gap-2"><span className="bg-[#C8F5C8] text-green-900 w-7 h-7 rounded-full flex items-center justify-center text-sm font-black">3</span> Decryption (C=14)</p>
                <div className="space-y-2 text-sm">
                  <div className="bg-gray-50 rounded-xl p-3 font-mono"><p className="text-gray-500 text-xs">Formula</p><p className="font-black">M = Cᵈ mod n</p></div>
                  <div className="bg-gray-50 rounded-xl p-3 font-mono"><p className="text-gray-500 text-xs">Substitute</p><p className="font-black">M = 14³ mod 33</p></div>
                  <div className="bg-gray-50 rounded-xl p-3 font-mono"><p className="text-gray-500 text-xs">14² = 196</p><p className="font-black">196 mod 33 = 31</p></div>
                  <div className="bg-gray-50 rounded-xl p-3 font-mono"><p className="text-gray-500 text-xs">14³ = 14 × 196</p><p className="font-black">= 2744 mod 33</p></div>
                  <div className="bg-gray-50 rounded-xl p-3 font-mono"><p className="text-gray-500 text-xs">2744 ÷ 33 = 83 r5</p><p className="font-black">= 5</p></div>
                  <div className="bg-[#E8FFF0] rounded-xl p-3 font-mono text-center"><p className="text-green-600 text-xs">Recovered! ✅</p><p className="font-black text-green-900 text-2xl">M = 5</p></div>
                </div>
              </div>
            </div>
          </ContentCard>
        </div>
      )}

      {/* ── CIPHER TYPES ── */}
      {tab === "ciphertypes" && (
        <div className="space-y-6">
          <ContentCard>
            <SubHeading>🗂️ Classification of Ciphers</SubHeading>
            <p className="text-gray-600 leading-relaxed mb-6">
              A <strong>cipher</strong> is an algorithm used to perform encryption or decryption — a series of well-defined steps that convert plaintext into ciphertext and back. All ciphers fall into two major categories based on their key structure.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-[#F0FFF4] rounded-2xl p-5">
                <p className="font-black text-green-900 text-lg mb-3">🔄 Symmetric-Key Ciphers</p>
                <p className="text-green-800 text-sm mb-4 leading-relaxed">The SAME secret key is used for both encryption and decryption. Both parties must securely exchange the key first.</p>
                <div className="space-y-3">
                  <div className="bg-white rounded-xl p-3">
                    <p className="font-bold text-gray-900 text-sm">Stream Ciphers</p>
                    <p className="text-gray-600 text-xs mt-1">Encrypt plaintext one bit or byte at a time. Fast, low latency.</p>
                    <p className="text-gray-400 text-xs mt-1">Examples: RC4, A5/1, ChaCha20, Salsa20</p>
                  </div>
                  <div className="bg-white rounded-xl p-3">
                    <p className="font-bold text-gray-900 text-sm">Block Ciphers</p>
                    <p className="text-gray-600 text-xs mt-1">Encrypt fixed-size blocks (e.g., 128 bits) at a time.</p>
                    <p className="text-gray-400 text-xs mt-1">Examples: AES (128-bit), DES (64-bit), Triple DES</p>
                  </div>
                </div>
              </div>
              <div className="bg-purple-50 rounded-2xl p-5">
                <p className="font-black text-purple-900 text-lg mb-3">🗝️ Asymmetric-Key Ciphers</p>
                <p className="text-purple-800 text-sm mb-4 leading-relaxed">DIFFERENT keys are used for encryption (public) and decryption (private). No need to securely share keys first.</p>
                <div className="space-y-3">
                  <div className="bg-white rounded-xl p-3">
                    <p className="font-bold text-gray-900 text-sm">RSA</p>
                    <p className="text-gray-600 text-xs mt-1">Based on integer factorization. Used in HTTPS, SSH, PGP.</p>
                    <p className="text-gray-400 text-xs mt-1">Key sizes: 1024, 2048, 4096 bits</p>
                  </div>
                  <div className="bg-white rounded-xl p-3">
                    <p className="font-bold text-gray-900 text-sm">ECC (Elliptic Curve Cryptography)</p>
                    <p className="text-gray-600 text-xs mt-1">More efficient than RSA for same security level.</p>
                    <p className="text-gray-400 text-xs mt-1">Examples: ECDSA (Bitcoin), ECDH (TLS 1.3)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-4 text-left font-bold text-gray-500">Feature</th>
                    <th className="p-4 text-center font-bold text-green-700">Symmetric</th>
                    <th className="p-4 text-center font-bold text-purple-700">Asymmetric</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Number of keys", "1 (shared secret)", "2 (public + private)"],
                    ["Key exchange problem", "Must share key securely first", "No prior sharing needed"],
                    ["Speed", "⚡ Very fast (AES: ~1GB/s)", "🐢 Slow (RSA: ~1KB/s)"],
                    ["Key sizes", "128, 256 bits (AES)", "2048, 4096 bits (RSA)"],
                    ["Primary use", "Bulk data encryption", "Key exchange, digital signatures"],
                    ["Security basis", "Confusion + diffusion", "Mathematical hard problems"],
                    ["Examples", "AES, DES, RC4, ChaCha20", "RSA, ECC, ElGamal, DSA"],
                    ["Scalability", "N people need N(N-1)/2 keys", "N people need only 2N keys"],
                  ].map(([f, sym, asym],                     i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-4 font-bold text-gray-700">{f}</td>
                      <td className="p-4 text-center text-green-700">{sym}</td>
                      <td className="p-4 text-center text-purple-700">{asym}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ContentCard>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <RealCard emoji="🔒" title="AES (Symmetric Block Cipher)" desc="AES-256 encrypts your WhatsApp messages, full-disk encryption (BitLocker/FileVault), and WiFi (WPA2). It's the gold standard for bulk data encryption — extremely fast in hardware." />
            <RealCard emoji="🔐" title="RSA (Asymmetric)" desc="RSA-2048 secures HTTPS certificates, SSH logins, and PGP email. It's slow for bulk data but perfect for securely exchanging an AES session key." />
            <RealCard emoji="⚡" title="ECC (Modern Asymmetric)" desc="ECC (Elliptic Curve) gives same security as RSA-2048 with only 256-bit keys — much faster and more efficient. Used in TLS 1.3, Bitcoin, Signal, and Apple Pay." />
          </div>
        </div>
      )}
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// SECTION: STREAM CIPHERS
// ─────────────────────────────────────────────────────────────

const XORTable = () => (
  <div className="space-y-2">
    <div className="grid grid-cols-4 text-center text-xs font-bold text-gray-400 uppercase tracking-widest py-2">
      <span>Plaintext Bit (P)</span>
      <span>Key Bit (K)</span>
      <span>Operation</span>
      <span>Ciphertext (C)</span>
    </div>
    {[
      ["0", "0", "⊕", "0", false],
      ["0", "1", "⊕", "1", true],
      ["1", "0", "⊕", "1", true],
      ["1", "1", "⊕", "0", false],
    ].map(([p, k, op, r, highlight], i) => (
      <div
        key={i}
        className={`grid grid-cols-4 text-center rounded-2xl py-3 font-mono font-black text-xl ${
          highlight ? "bg-[#C8F5C8]" : "bg-gray-50"
        }`}
      >
        <span className="text-gray-700">{p}</span>
        <span className="text-green-700">{k}</span>
        <span className="text-gray-400">{op}</span>
        <span className={highlight ? "text-green-900" : "text-gray-700"}>{r}</span>
      </div>
    ))}
    <p className="text-center text-sm text-gray-400 font-medium pt-2">
      Rule: Same bits → 0 &nbsp;|&nbsp; Different bits → 1
    </p>
  </div>
);

const StreamSection = () => {
  const [tab, setTab] = useState("overview");

  const tabs = [
    { key: "overview", label: "📖 Overview" },
    { key: "howworks", label: "⚙️ How It Works" },
    { key: "xor", label: "⊕ XOR Operation" },
    { key: "rc4", label: "🔴 RC4 Cipher" },
    { key: "chacha", label: "🟢 ChaCha20" },
    { key: "caesar", label: "👑 Caesar Cipher" },
    { key: "diffusion", label: "🌀 Diffusion & Confusion" },
  ];

  return (
    <div>
      <SectionHeading
        emoji="🌊"
        title="Stream Ciphers"
        subtitle="Encrypts data one bit or byte at a time — like a continuously flowing river of encryption. Perfect for real-time voice, video, and VPNs."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <KidCard
          emoji="🚿"
          title="Explain like I'm 5!"
          text="You and your friend both have the SAME magic random number list. For every letter in your message, you use the next number from the list to scramble it. Your friend uses the same list to unscramble it. No one else has the list, so no one can read it!"
        />
        <KidCard
          emoji="🎵"
          title="Stream vs Block"
          text="Block ciphers are like encrypting a whole page at once (AES: 16 bytes at a time). Stream ciphers are like encrypting letter by letter, bit by bit — a continuous flowing stream. Much faster for real-time communication where you can't wait for a full block."
        />
        <div className="bg-gray-900 rounded-2xl p-5">
          <p className="text-[#C8F5C8] font-black text-base mb-3">Key Properties</p>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex gap-2"><span className="text-[#C8F5C8]">✓</span> Encrypts 1 bit/byte at a time</li>
            <li className="flex gap-2"><span className="text-[#C8F5C8]">✓</span> Uses XOR with a keystream</li>
            <li className="flex gap-2"><span className="text-[#C8F5C8]">✓</span> Symmetric (same key both sides)</li>
            <li className="flex gap-2"><span className="text-[#C8F5C8]">✓</span> Near-zero latency</li>
            <li className="flex gap-2"><span className="text-[#C8F5C8]">⚠️</span> Never reuse the keystream!</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <RealCard emoji="📞" title="WhatsApp & VoIP Calls" desc="Your voice calls on WhatsApp, FaceTime, and Zoom are encrypted using stream cipher techniques so every voice packet is encrypted in real time with zero perceptible delay." />
        <RealCard emoji="🛡️" title="WireGuard VPN" desc="The ChaCha20-Poly1305 stream cipher is WireGuard's default cipher. It's the VPN protecting your browsing on public WiFi right now — faster than AES on mobile devices without hardware acceleration." />
        <RealCard emoji="📶" title="Historical WiFi (WEP)" desc="WEP (Wired Equivalent Privacy) used the RC4 stream cipher to encrypt WiFi traffic. Serious biases in RC4's keystream allowed attackers to crack WEP in under 60 seconds — it's now completely obsolete." />
      </div>

      {/* Tab Switcher */}
      <div className="flex gap-2 flex-wrap mb-6">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
              tab === t.key ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-600 hover:bg-[#C8F5C8] hover:text-green-900"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* ── OVERVIEW ── */}
      {tab === "overview" && (
        <div className="space-y-6">
          <ContentCard>
            <SubHeading>What is a Stream Cipher?</SubHeading>
            <p className="text-gray-600 leading-relaxed mb-6">
              A <strong>stream cipher</strong> is a symmetric key cipher where plaintext is encrypted one bit or byte at a time, rather than in blocks. It generates a <strong>keystream</strong> — a sequence of pseudorandom bits — and combines it with the plaintext using XOR. The same keystream is used by the receiver to decrypt.
            </p>

            <div className="bg-gray-50 rounded-2xl p-6 mb-6">
              <p className="font-black text-gray-900 text-sm uppercase tracking-widest text-center mb-4">Stream Cipher Flow</p>
              <div className="flex items-center justify-around flex-wrap gap-3 text-center">
                {[
                  { e: "🔑", l: "Shared Secret Key", bg: "bg-yellow-100", tc: "text-yellow-900" },
                  { e: "🎲", l: "PRNG / Algorithm", bg: "bg-orange-100", tc: "text-orange-900" },
                  { e: "🌊", l: "Keystream Generated", bg: "bg-[#E8FFF0]", tc: "text-green-900" },
                  { e: "⊕", l: "XOR with Plaintext", bg: "bg-blue-100", tc: "text-blue-900" },
                  { e: "🔒", l: "Ciphertext Output", bg: "bg-gray-800", tc: "text-white" },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className={`${s.bg} rounded-2xl p-4 text-center w-32`}>
                      <p className="text-3xl mb-1">{s.e}</p>
                      <p className={`font-black text-xs ${s.tc}`}>{s.l}</p>
                    </div>
                    {i < 4 && <span className="text-gray-200 font-black text-2xl hidden md:block">→</span>}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-black text-green-700 mb-3">✅ Advantages</p>
                <ProConList
                  items={[
                    "Very fast — suitable for real-time encryption of continuous data streams",
                    "Low latency — no need to buffer data into blocks before encrypting",
                    "Low memory usage — ideal for resource-constrained devices (IoT, RFID, smartcards)",
                    "Simple hardware implementation — efficient for embedded systems",
                    "A single bit error affects only that one bit in decryption (no error propagation)",
                  ]}
                  bg="bg-[#F0FFF4]"
                  textColor="text-green-800"
                  icon="✅"
                />
              </div>
              <div>
                <p className="font-black text-red-700 mb-3">❌ Disadvantages</p>
                <ProConList
                  items={[
                    "Keystream MUST be unique — reusing a keystream with two different messages leaks the XOR of those messages (catastrophic security failure)",
                    "Key management complexity — secure key distribution is difficult",
                    "No built-in message integrity — doesn't detect tampering (need MAC/HMAC alongside)",
                    "Synchronization requirement — both sides must stay in sync on keystream position",
                    "Vulnerable to bit-flipping attacks if not combined with authentication",
                  ]}
                  bg="bg-red-50"
                  textColor="text-red-800"
                  icon="❌"
                />
              </div>
            </div>
          </ContentCard>

          <ContentCard>
            <SubHeading>Stream vs Block Ciphers</SubHeading>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-4 text-left font-bold text-gray-500">Feature</th>
                    <th className="p-4 text-center font-bold text-[#1a7a1a]">Stream Cipher</th>
                    <th className="p-4 text-center font-bold text-blue-700">Block Cipher</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Unit of encryption", "1 bit or 1 byte at a time", "Fixed block (64/128 bits)"],
                    ["Speed", "⚡ Very fast", "🔵 Fast (with hardware)"],
                    ["Latency", "Near zero", "Must buffer full block"],
                    ["Memory usage", "Very low", "Higher (block buffer needed)"],
                    ["Error propagation", "Only affects that bit", "Can affect whole block"],
                    ["Key reuse", "⚠️ Never safe to reuse", "Safe with different IVs"],
                    ["Best for", "VoIP, VPN, live streams", "Files, databases, HTTPS data"],
                    ["Examples", "RC4, ChaCha20, A5/1", "AES, DES, Triple-DES"],
                    ["Mode of operation", "Not needed", "ECB, CBC, CTR, GCM..."],
                  ].map(([f, s, b], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-4 font-bold text-gray-700">{f}</td>
                      <td className="p-4 text-center text-green-700">{s}</td>
                      <td className="p-4 text-center text-blue-700">{b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ContentCard>
        </div>
      )}

      {/* ── HOW IT WORKS ── */}
      {tab === "howworks" && (
        <div className="space-y-6">
          <ContentCard>
            <SubHeading>⚙️ How Stream Ciphers Work — In Detail</SubHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  A stream cipher takes a <strong>secret key</strong> and an optional <strong>nonce (IV)</strong>, feeds them into a <strong>pseudo-random number generator (PRNG)</strong>, and produces a <strong>keystream</strong>. This keystream is XOR'd with the plaintext bit by bit (or byte by byte).
                </p>
                <div className="space-y-3">
                  <StepCard step="1" title="Key + Nonce Input" desc="The secret key (e.g., 256-bit) and a nonce (unique number, e.g., 64-bit) are fed into the PRNG initialization." />
                  <StepCard step="2" title="PRNG Initialization" desc="The PRNG uses a key scheduling algorithm (KSA) to set up its internal state based on the key and nonce." />
                  <StepCard step="3" title="Keystream Generation" desc="The PRNG produces a pseudorandom bit sequence (keystream) that looks random but is deterministically reproducible by anyone with the key and nonce." />
                  <StepCard step="4" title="XOR Operation" desc="Each bit/byte of plaintext is XOR'd with the corresponding bit/byte of the keystream to produce ciphertext." />
                  <StepCard step="5" title="Decryption (Same Process)" desc="The receiver generates the identical keystream using the same key + nonce, then XORs it with the ciphertext to recover the plaintext." />
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-2xl p-5">
                  <p className="font-black text-gray-900 mb-4 text-sm">Byte-by-byte example</p>
                  <div className="space-y-2 font-mono text-sm">
                    <div className="bg-white rounded-xl p-3">
                      <p className="text-gray-400 text-xs mb-1">Plaintext (ASCII bytes)</p>
                      <p className="font-black text-gray-900">H    E    L    L    O</p>
                      <p className="font-black text-gray-500 text-xs">72  69  76  76  79</p>
                    </div>
                    <div className="text-center text-gray-400 font-black">⊕ (XOR with keystream)</div>
                    <div className="bg-[#E8FFF0] rounded-xl p-3">
                      <p className="text-green-600 text-xs mb-1">Keystream bytes</p>
                      <p className="font-black text-green-900">0x3A 0x7F 0x12 0x91 0xC4</p>
                      <p className="font-black text-green-700 text-xs">58  127  18  145  196</p>
                    </div>
                    <div className="text-center text-gray-400 font-black">↓</div>
                    <div className="bg-gray-900 rounded-xl p-3">
                      <p className="text-gray-400 text-xs mb-1">Ciphertext bytes</p>
                      <p className="font-black text-yellow-400">0x5A 0x32 0x6E 0xED 0xB3</p>
                    </div>
                  </div>
                </div>
                <KidCard emoji="🔦" title="Why XOR is perfect for this" text="XOR is its own inverse! If A ⊕ B = C, then C ⊕ B = A. So encrypting (XOR with keystream) and decrypting (XOR with same keystream again) are the exact same operation. Simple, fast, reversible!" />
              </div>
            </div>

            <div className="bg-red-50 rounded-2xl p-5">
              <p className="font-black text-red-900 text-base mb-3">⚠️ Critical Security Rule: NEVER Reuse a Keystream</p>
              <p className="text-red-800 text-sm leading-relaxed mb-3">
                If you encrypt two messages M1 and M2 with the same keystream K:
              </p>
              <div className="bg-white rounded-xl p-4 font-mono text-sm space-y-1">
                <p className="text-gray-700">C1 = M1 ⊕ K</p>
                <p className="text-gray-700">C2 = M2 ⊕ K</p>
                <p className="text-red-700 font-black mt-2">C1 ⊕ C2 = M1 ⊕ M2 &nbsp;(K cancels out!)</p>
              </div>
              <p className="text-red-800 text-sm leading-relaxed mt-3">
                The attacker now has the XOR of both messages. With known-plaintext or frequency analysis, they can recover both M1 and M2. This is exactly how <strong>WEP WiFi was broken</strong> — IV reuse led to keystream reuse.
              </p>
            </div>
          </ContentCard>
        </div>
      )}

      {/* ── XOR ── */}
      {tab === "xor" && (
        <div className="space-y-6">
          <ContentCard>
            <SubHeading>⊕ The XOR Operation — Heart of Stream Ciphers</SubHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  XOR (Exclusive OR) is a bitwise operation where the output is <strong>1 if the inputs are different</strong>, and <strong>0 if they are the same</strong>. It's perfect for encryption because it's its own inverse — applying it twice returns the original value.
                </p>
                <XORTable />
              </div>
              <div className="space-y-4">
                <KidCard
                  emoji="🔦"
                  title="Think of it like a light switch toggle"
                  text="Key bit 0 = 'leave the switch alone'. Key bit 1 = 'flip the switch'. To decrypt, you apply the same key again — flipping each switch back to its original position. The message magically reappears!"
                />
                <div className="bg-gray-50 rounded-2xl p-4">
                  <p className="font-black text-gray-900 text-sm mb-3">XOR Key Properties</p>
                  <div className="space-y-2 font-mono text-sm">
                    {[
                      ["A ⊕ 0 = A", "XOR with 0 = identity (no change)"],
                      ["A ⊕ A = 0", "XOR with itself = 0 (self-inverse)"],
                      ["A ⊕ B = B ⊕ A", "Commutative"],
                      ["(A⊕B)⊕C = A⊕(B⊕C)", "Associative"],
                      ["A ⊕ B ⊕ B = A", "XOR twice = original ← KEY!"],
                    ].map(([formula, note], i) => (
                      <div key={i} className="flex items-center justify-between gap-4">
                        <span className="font-black text-gray-900">{formula}</span>
                        <span className="text-gray-500 text-xs font-sans">{note}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ContentCard>

          <ContentCard>
            <SubHeading>Full XOR Encryption Example</SubHeading>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { label: "Plaintext (P)", value: "1 0 1 1 0 1 0 0", note: "Original message bits", bg: "bg-gray-50", tc: "text-gray-900" },
                  { label: "Keystream (K)", value: "1 1 0 1 0 0 1 1", note: "Generated by PRNG", bg: "bg-[#E8FFF0]", tc: "text-green-900" },
                  { label: "Ciphertext (C = P ⊕ K)", value: "0 1 1 0 0 1 1 1", note: "Sent over the wire", bg: "bg-gray-900", tc: "text-yellow-400" },
                ].map((row, i) => (
                  <div key={i} className={`${row.bg} rounded-2xl p-5 text-center`}>
                    <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${row.bg === "bg-gray-900" ? "text-gray-400" : "text-gray-500"}`}>{row.label}</p>
                    <p className={`font-mono font-black text-2xl tracking-widest ${row.tc}`}>{row.value}</p>
                    <p className={`text-xs mt-2 ${row.bg === "bg-gray-900" ? "text-gray-500" : "text-gray-400"}`}>{row.note}</p>
                  </div>
                ))}
              </div>

              <div className="bg-[#F0FFF4] rounded-2xl p-5">
                <p className="font-black text-green-900 mb-3">Decryption: C ⊕ K = P (XOR again with same keystream)</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { label: "Ciphertext (C)", value: "0 1 1 0 0 1 1 1", bg: "bg-white", tc: "text-gray-900" },
                    { label: "Keystream (K) — same!", value: "1 1 0 1 0 0 1 1", bg: "bg-white", tc: "text-green-900" },
                    { label: "Result (C ⊕ K) = P ✅", value: "1 0 1 1 0 1 0 0", bg: "bg-[#C8F5C8]", tc: "text-green-900" },
                  ].map((row, i) => (
                    <div key={i} className={`${row.bg} rounded-xl p-4 text-center`}>
                      <p className="text-xs font-bold text-gray-500 uppercase mb-1">{row.label}</p>
                      <p className={`font-mono font-black text-xl tracking-widest ${row.tc}`}>{row.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ContentCard>
        </div>
      )}

      {/* ── RC4 ── */}
      {tab === "rc4" && (
        <div className="space-y-6">
          <ContentCard>
            <SubHeading>🔴 RC4 — Rivest Cipher 4</SubHeading>
            <div className="flex gap-3 flex-wrap mb-6">
              <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full">⚠️ Deprecated</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full">Invented: Ron Rivest, 1987</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full">Formerly: SSL/TLS, WEP, WPA</span>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              RC4 was one of the most widely deployed stream ciphers in history, used in SSL/TLS, WEP, WPA, and many other protocols. It operates using two algorithms: <strong>KSA</strong> (Key Scheduling Algorithm) for initialization, and <strong>PRGA</strong> (Pseudo-Random Generation Algorithm) for keystream generation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="font-black text-gray-900 mb-4">Phase 1: Key Scheduling Algorithm (KSA)</p>
                <div className="space-y-3">
                  <StepCard step="1" title="Initialize state array S" desc="Create array S[0..255] where S[i] = i. Also create a key array K[0..255] by repeating the secret key to fill 256 bytes." />
                  <StepCard step="2" title="Permute S based on key" desc="For i = 0 to 255: j = (j + S[i] + K[i]) mod 256, then swap S[i] and S[j]. This scrambles S based on the key." />
                  <StepCard step="3" title="State array is ready" desc="After KSA, S is a permutation of 0–255 determined by the secret key. This is the internal state." />
                </div>
              </div>
              <div>
                <p className="font-black text-gray-900 mb-4">Phase 2: Pseudo-Random Generation Algorithm (PRGA)</p>
                <div className="space-y-3">
                  <StepCard step="1" title="Initialize counters i=0, j=0" desc="Two counters track position in the state array." />
                  <StepCard step="2" title="Generate each keystream byte" desc="i = (i+1) mod 256 → j = (j + S[i]) mod 256 → swap S[i] and S[j] → output K = S[(S[i]+S[j]) mod 256]" />
                  <StepCard step="3" title="XOR with plaintext" desc="Output keystream byte K is XOR'd with the corresponding plaintext byte to produce one byte of ciphertext." />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 rounded-2xl p-5">
                <p className="font-black text-green-900 mb-3">✅ Historical Strengths</p>
                <ul className="space-y-2 text-sm text-green-800">
                  <li className="flex gap-2"><span>✅</span> Extremely simple to implement (about 30 lines of code)</li>
                  <li className="flex gap-2"><span>✅</span> Very fast in software — no complex math</li>
                  <li className="flex gap-2"><span>✅</span> Variable key length (40 to 2048 bits)</li>
                  <li className="flex gap-2"><span>✅</span> No need for padding (stream cipher)</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-2xl p-5">
                <p className="font-black text-red-900 mb-3">❌ Critical Weaknesses (Why It's Banned)</p>
                <ul className="space-y-2 text-sm text-red-800">
                  <li className="flex gap-2"><span>❌</span> Biased first bytes — first 256 bytes of keystream are non-random</li>
                  <li className="flex gap-2"><span>❌</span> Fluhrer-Mantin-Shamir (FMS) attack cracked WEP WiFi</li>
                  <li className="flex gap-2"><span>❌</span> BEAST attack on RC4 in SSL/TLS (2013)</li>
                  <li className="flex gap-2"><span>❌</span> RFC 7465 (2015) explicitly prohibits RC4 in TLS</li>
                  <li className="flex gap-2"><span>❌</span> Statistical biases enable plaintext recovery from enough ciphertexts</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-5">
              <p className="text-[#C8F5C8] font-bold mb-2">💡 Real-World Impact of RC4 Weaknesses</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                The FMS attack (2001) showed that weak IVs in WEP allowed attackers to recover the RC4 key after collecting ~1 million packets — achievable in minutes on a busy network. The Aircrack-ng tool still cracks WEP in under 60 seconds. This led to WPA2 (AES-based) and eventually the complete deprecation of RC4 across all major protocols.
              </p>
            </div>
          </ContentCard>
        </div>
      )}

      {/* ── CHACHA20 ── */}
      {tab === "chacha" && (
        <div className="space-y-6">
          <ContentCard>
            <SubHeading>🟢 ChaCha20 & Salsa20 — Modern Secure Stream Ciphers</SubHeading>
            <div className="flex gap-3 flex-wrap mb-6">
              <GreenTag label="✅ Secure" />
              <GreenTag label="Modern Standard" />
              <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">By: Daniel J. Bernstein</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full">Used in: TLS 1.3, WireGuard, Android</span>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              ChaCha20 is a variant of Salsa20 designed by Daniel J. Bernstein. It uses a <strong>256-bit key</strong> and a <strong>64-bit nonce</strong>, performing 20 rounds of Add-Rotate-XOR (ARX) operations on a 512-bit state. It's faster than RC4 and AES on mobile devices without hardware AES acceleration.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="font-black text-gray-900 mb-4">ChaCha20 Core: ARX Operations</p>
                <div className="bg-gray-50 rounded-2xl p-5 space-y-3">
                  <p className="text-gray-600 text-sm leading-relaxed">ChaCha20 uses only three operations — making it efficient and side-channel resistant (no lookup tables needed):</p>
                  <div className="space-y-2">
                    <div className="bg-[#E8FFF0] rounded-xl p-3 font-mono">
                      <p className="font-black text-green-900">A (Add)</p>
                      <p className="text-green-700 text-xs">a = a + b (mod 2³²) — 32-bit addition</p>
                    </div>
                    <div className="bg-[#E8FFF0] rounded-xl p-3 font-mono">
                      <p className="font-black text-green-900">R (Rotate)</p>
                      <p className="text-green-700 text-xs">a = a ⋘ n — left rotate by n bits</p>
                    </div>
                    <div className="bg-[#E8FFF0] rounded-xl p-3 font-mono">
                      <p className="font-black text-green-900">X (XOR)</p>
                      <p className="text-green-700 text-xs">a = a ⊕ b — bitwise exclusive OR</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-xs">These 3 ops are repeated in a quarter-round × 20 rounds = 80 operations per 64 bytes of keystream</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-2xl p-5">
                  <p className="font-black text-gray-900 mb-3 text-sm">Initial State (4×4 matrix of 32-bit words)</p>
                  <div className="overflow-x-auto">
                    <table className="font-mono text-xs mx-auto">
                      <tbody>
                        {[
                          [{ v: "expa", bg: "bg-blue-100 text-blue-900" }, { v: "nd 3", bg: "bg-blue-100 text-blue-900" }, { v: "2-by", bg: "bg-blue-100 text-blue-900" }, { v: "te k", bg: "bg-blue-100 text-blue-900" }],
                          [{ v: "key0", bg: "bg-[#C8F5C8] text-green-900" }, { v: "key1", bg: "bg-[#C8F5C8] text-green-900" }, { v: "key2", bg: "bg-[#C8F5C8] text-green-900" }, { v: "key3", bg: "bg-[#C8F5C8] text-green-900" }],
                          [{ v: "key4", bg: "bg-[#C8F5C8] text-green-900" }, { v: "key5", bg: "bg-[#C8F5C8] text-green-900" }, { v: "key6", bg: "bg-[#C8F5C8] text-green-900" }, { v: "key7", bg: "bg-[#C8F5C8] text-green-900" }],
                          [{ v: "ctr", bg: "bg-yellow-100 text-yellow-900" }, { v: "non0", bg: "bg-orange-100 text-orange-900" }, { v: "non1", bg: "bg-orange-100 text-orange-900" }, { v: "non2", bg: "bg-orange-100 text-orange-900" }],
                        ].map((row, ri) => (
                          <tr key={ri}>
                            {row.map((cell, ci) => (
                              <td key={ci} className="p-0.5">
                                <div className={`${cell.bg} w-14 h-10 flex items-center justify-center rounded-lg font-bold text-xs`}>{cell.v}</div>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="flex gap-2 flex-wrap mt-3 justify-center text-xs font-bold">
                    <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Constant</span>
                    <span className="bg-[#C8F5C8] text-green-800 px-2 py-0.5 rounded-full">256-bit Key</span>
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">Counter</span>
                    <span className="bg-orange-100 text-orange-800 px-2 py-0.5 rounded-full">96-bit Nonce</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-[#F0FFF4] rounded-2xl p-5">
                <p className="font-black text-green-900 mb-3">✅ Why ChaCha20 Is Preferred</p>
                <ProConList
                  items={[
                    "No known cryptographic weaknesses — unlike RC4",
                    "Constant-time operations — immune to cache-timing side-channel attacks",
                    "Faster than AES on CPUs without hardware AES-NI (most mobile chips)",
                    "Counter mode — allows random access to any position in the keystream",
                    "Combined with Poly1305 MAC → ChaCha20-Poly1305 = authenticated encryption",
                  ]}
                  bg="bg-white"
                  textColor="text-green-800"
                  icon="✅"
                />
              </div>
              <div className="space-y-3">
                <RealCard emoji="🛡️" title="WireGuard VPN" desc="WireGuard uses ChaCha20-Poly1305 as its sole cipher suite. It's simpler, faster, and more auditable than OpenVPN's dozen cipher options." />
                <RealCard emoji="🌐" title="TLS 1.3" desc="TLS 1.3 (the protocol securing all HTTPS) includes TLS_CHACHA20_POLY1305_SHA256 as a mandatory cipher suite — used by Chrome, Firefox, and Safari." />
                <RealCard emoji="📱" title="Android HTTPS" desc="Google made ChaCha20-Poly1305 the preferred cipher for Android HTTPS connections on devices without hardware AES — covering hundreds of millions of budget phones." />
              </div>
            </div>

            <ContentCard className="bg-gray-50">
              <SubHeading>Grain — Lightweight Stream Cipher</SubHeading>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    <strong>Grain</strong> is a hardware-optimized stream cipher designed for extremely resource-constrained environments like RFID chips, smartcards, and IoT sensors with as little as 1KB of memory.
                  </p>
                  <div className="space-y-2">
                    <div className="bg-white rounded-xl p-3 flex gap-3 text-sm">
                      <span>📡</span><span className="text-gray-700"><strong>RFID tags</strong> — supply chain tracking, passport chips</span>
                    </div>
                    <div className="bg-white rounded-xl p-3 flex gap-3 text-sm">
                      <span>💳</span><span className="text-gray-700"><strong>Smart cards</strong> — transit cards, building access</span>
                    </div>
                    <div className="bg-white rounded-xl p-3 flex gap-3 text-sm">
                      <span>🌡️</span><span className="text-gray-700"><strong>IoT sensors</strong> — temperature/humidity devices</span>
                    </div>
                  </div>
                </div>
                <KidCard emoji="🌾" title="Like a tiny seed of encryption!" text="Grain is like a small but strong padlock designed to work on devices with almost no battery and almost no memory. It can't do RSA or AES — too big! But Grain fits perfectly on a tiny chip the size of a grain of rice." />
              </div>
            </ContentCard>
          </ContentCard>
        </div>
      )}

      {/* ── CAESAR CIPHER ── */}
      {tab === "caesar" && (
        <div className="space-y-6">
          <ContentCard>
            <SubHeading>👑 Caesar Cipher — The World's Oldest Known Cipher</SubHeading>
            <div className="flex gap-3 flex-wrap mb-4">
              <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full">Classical Cipher</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full">~50 BC — Julius Caesar</span>
              <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full">Not Secure Today</span>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              The <strong>Caesar Cipher</strong> is one of the earliest and simplest known encryption techniques, used by Julius Caesar to protect his military messages. It's a <strong>substitution cipher</strong> where each letter is shifted by a fixed number of positions in the alphabet.
            </p>

            <KidCard
              emoji="👑"
              title="How Caesar actually used it!"
              text={`Caesar used a shift of 3. So A→D, B→E, C→F... "ATTACK AT DAWN" became "DWWDFN DW GDZQ". His messengers could carry it safely — if captured, the enemy just saw gibberish. His generals knew to shift back by 3 to read the real orders!`}
            />
          </ContentCard>

          <ContentCard>
            <SubHeading>Encryption & Decryption</SubHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="grid grid-cols-1 gap-3 mb-4">
                  <FormulaBox formula="C = (P + K) mod 26" label="Encryption: shift each letter forward by K" />
                  <FormulaBox formula="P = (C - K + 26) mod 26" label="Decryption: shift each letter back by K" />
                </div>
                <div className="bg-gray-50 rounded-2xl p-4 font-mono text-sm">
                  <p className="text-gray-500 text-xs mb-2 font-sans font-bold uppercase">Variables</p>
                  <p className="text-gray-900"><span className="text-green-700 font-black">C</span> = Ciphertext letter (0–25)</p>
                  <p className="text-gray-900"><span className="text-blue-700 font-black">P</span> = Plaintext letter (0–25)</p>
                  <p className="text-gray-900"><span className="text-orange-700 font-black">K</span> = Key (shift amount, 1–25)</p>
                  <p className="text-gray-900"><span className="text-gray-700 font-black">26</span> = Alphabet size (wraps around)</p>
                </div>
              </div>

              <div>
                <p className="font-black text-gray-900 mb-4">Step-by-step: Encrypt "HELLO" with K=3</p>
                <div className="space-y-2">
                  {[
                    { letter: "H", num: 7, shift: "+3", result: 10, cipher: "K" },
                    { letter: "E", num: 4, shift: "+3", result: 7, cipher: "H" },
                    { letter: "L", num: 11, shift: "+3", result: 14, cipher: "O" },
                    { letter: "L", num: 11, shift: "+3", result: 14, cipher: "O" },
                    { letter: "O", num: 14, shift: "+3", result: 17, cipher: "R" },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center gap-2 bg-gray-50 rounded-xl p-3">
                      <div className="bg-amber-100 rounded-lg w-10 h-10 flex flex-col items-center justify-center shrink-0">
                        <span className="font-black text-amber-800">{row.letter}</span>
                        <span className="text-amber-500 text-xs">{row.num}</span>
                      </div>
                      <span className="text-gray-400 font-mono font-black">{row.shift}</span>
                      <span className="text-gray-400 font-mono">= {row.result}</span>
                      <span className="text-gray-400">→</span>
                      <div className="bg-amber-500 rounded-lg w-10 h-10 flex flex-col items-center justify-center shrink-0">
                        <span className="font-black text-white">{row.cipher}</span>
                        <span className="text-amber-200 text-xs">{row.result}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-900 rounded-2xl p-4 text-center mt-4">
                  <p className="text-gray-400 text-xs mb-1">Result</p>
                  <p className="text-yellow-400 font-black font-mono text-3xl tracking-widest">HELLO → KHOOR</p>
                </div>
              </div>
            </div>
          </ContentCard>

          <ContentCard>
            <SubHeading>Complete Alphabet Shift Reference (K=3)</SubHeading>
            <div className="mb-4 overflow-x-auto">
              <div className="flex flex-wrap gap-1 min-w-max">
                {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter, i) => {
                  const shifted = String.fromCharCode(((i + 3) % 26) + 65);
                  return (
                    <div key={i} className="flex flex-col items-center">
                      <div className="bg-gray-100 rounded-t-lg w-9 h-9 flex items-center justify-center">
                        <span className="font-black text-gray-700 text-sm">{letter}</span>
                      </div>
                      <div className="bg-[#C8F5C8] rounded-b-lg w-9 h-9 flex items-center justify-center">
                        <span className="font-black text-green-900 text-sm">{shifted}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="text-xs text-gray-400 mt-2 font-medium">Top row = Plaintext &nbsp;|&nbsp; Bottom row = Ciphertext (K=3)</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-red-50 rounded-2xl p-5">
                <p className="font-black text-red-900 mb-3">❌ Why Caesar is Completely Insecure</p>
                <ul className="space-y-2 text-sm text-red-800">
                  <li className="flex gap-2"><span>❌</span> Only 25 possible keys (shift 1–25) — brute force in seconds</li>
                  <li className="flex gap-2"><span>❌</span> Letter frequencies preserved — 'E' stays most common</li>
                  <li className="flex gap-2"><span>❌</span> Known-plaintext attack trivial — one word breaks it</li>
                  <li className="flex gap-2"><span>❌</span> No key — shift pattern is obvious from ciphertext</li>
                </ul>
              </div>
              <div className="space-y-3">
                <RealCard emoji="🎮" title="ROT13 on Reddit / Forums" desc="ROT13 (Caesar with K=13) is used on Reddit to hide spoilers! Rotating by 13 is its own inverse (13+13=26). Type 'ROT13' into any online tool to hide/reveal spoilers." />
                <KidCard emoji="🔤" title="Vigenère improves Caesar" text="The Vigenère cipher uses multiple Caesar shifts (one per letter, based on a keyword), making frequency analysis much harder. It was called 'le chiffre indéchiffrable' for 300 years!" />
              </div>
            </div>
          </ContentCard>
        </div>
      )}

      {/* ── DIFFUSION & CONFUSION ── */}
      {tab === "diffusion" && (
        <div className="space-y-6">
          <ContentCard>
            <SubHeading>🌀 Diffusion & Confusion — Shannon's Principles</SubHeading>
            <p className="text-gray-600 leading-relaxed mb-6">
              In 1949, Claude Shannon (the father of information theory) defined two essential properties every strong cipher must have: <strong>Diffusion</strong> and <strong>Confusion</strong>. Every modern cipher (AES, RSA, ChaCha20) achieves both.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-[#F0FFF4] rounded-2xl p-6">
                <div className="text-5xl mb-3">🌊</div>
                <h3 className="font-black text-green-900 text-2xl mb-2">Diffusion</h3>
                <p className="text-green-800 text-sm leading-relaxed mb-4">
                  <strong>"Spread the plaintext influence."</strong> Changing one bit of plaintext should change approximately half the bits in the ciphertext. This hides the statistical relationship between plaintext and ciphertext.
                </p>
                <div className="bg-white rounded-xl p-4 space-y-2 text-sm">
                  <p className="font-bold text-gray-900">How it's achieved:</p>
                  <p className="text-gray-600">🔧 <strong>Permutation (P-box)</strong> — physically moves bits/bytes around</p>
                  <p className="text-gray-600">📦 <strong>AES example:</strong> ShiftRows moves bytes across rows of the 4×4 state matrix</p>
                  <p className="text-gray-600">📦 <strong>AES MixColumns</strong> multiplies each column by a matrix — one input byte affects all 4 output bytes</p>
                  <p className="text-gray-600">📦 <strong>DES example:</strong> P-box permutes 32 bits after each S-box substitution</p>
                </div>
                <div className="bg-[#C8F5C8] rounded-xl p-3 mt-3 text-center font-mono text-sm">
                  <p className="text-green-900 font-black">Change 1 plaintext bit → ~½ ciphertext bits change</p>
                  <p className="text-green-700 text-xs">(Avalanche Effect)</p>
                </div>
              </div>

              <div className="bg-purple-50 rounded-2xl p-6">
                <div className="text-5xl mb-3">🔀</div>
                <h3 className="font-black text-purple-900 text-2xl mb-2">Confusion</h3>
                <p className="text-purple-800 text-sm leading-relaxed mb-4">
                  <strong>"Make the key relationship complex."</strong> The relationship between the ciphertext and the key should be as complex as possible. Changing one key bit should change approximately half the ciphertext bits.
                </p>
                <div className="bg-white rounded-xl p-4 space-y-2 text-sm">
                  <p className="font-bold text-gray-900">How it's achieved:</p>
                  <p className="text-gray-600">🔧 <strong>Substitution (S-box)</strong> — replaces values with non-linear substitution</p>
                  <p className="text-gray-600">📦 <strong>AES SubBytes:</strong> each byte is replaced via a non-linear substitution table</p>
                  <p className="text-gray-600">📦 <strong>DES S-boxes:</strong> 6-bit input → 4-bit output via lookup tables with no linear relationship</p>
                  <p className="text-gray-600">📦 <strong>Goal:</strong> even with many plaintext-ciphertext pairs, the key remains hidden</p>
                </div>
                <div className="bg-purple-200 rounded-xl p-3 mt-3 text-center font-mono text-sm">
                  <p className="text-purple-900 font-black">Change 1 key bit → ~½ ciphertext bits change</p>
                  <p className="text-purple-700 text-xs">(Key Sensitivity)</p>
                </div>
              </div>
            </div>

            <KidCard
              emoji="🍪"
              title="Cookie recipe analogy (best one!)"
              text="Diffusion = mixing the cookie dough thoroughly so you can't tell WHERE the chocolate chips came from originally — every bite tastes different. Confusion = using so many ingredients in such complex proportions that even if someone tastes the cookies for days, they can't figure out the exact recipe. Together: unbreakable cookie security! 🍪"
            />
          </ContentCard>

          <ContentCard>
            <SubHeading>Comparison & AES Application</SubHeading>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-4 text-left font-bold text-gray-500">Feature</th>
                    <th className="p-4 text-center font-bold text-green-700">Diffusion</th>
                    <th className="p-4 text-center font-bold text-purple-700">Confusion</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["What it hides", "Plaintext statistical patterns", "Key-to-ciphertext relationship"],
                    ["Achieved by", "Permutation / Transposition", "Substitution (non-linear)"],
                    ["Cryptographic tool", "P-box (Permutation box)", "S-box (Substitution box)"],
                    ["AES step", "ShiftRows + MixColumns", "SubBytes (based on GF(2⁸))"],
                    ["DES step", "P-box permutation", "S-boxes (8 different ones)"],
                    ["Avalanche from", "Plaintext change", "Key change"],
                    ["Goal", "Spread each plaintext bit's influence", "Make key extraction impossible"],
                    ["Without it", "Pattern analysis breaks cipher", "Key can be guessed from pairs"],
                  ].map(([f, d, c], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-4 font-bold text-gray-700">{f}</td>
                      <td className="p-4 text-center text-green-700">{d}</td>
                      <td className="p-4 text-center text-purple-700">{c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-gray-900 rounded-2xl p-6">
              <p className="text-[#C8F5C8] font-black text-base mb-4">🔬 AES: Diffusion + Confusion Working Together</p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                {[
                  { step: "1", name: "SubBytes", type: "Confusion", desc: "Replace each of the 16 bytes using a non-linear S-box lookup table", bg: "bg-purple-900", tc: "text-purple-200" },
                  { step: "2", name: "ShiftRows", type: "Diffusion", desc: "Cyclically shift rows of the 4×4 state matrix by 0,1,2,3 positions", bg: "bg-green-900", tc: "text-green-200" },
                  { step: "3", name: "MixColumns", type: "Diffusion", desc: "Matrix multiply each 4-byte column — one byte influences all 4 outputs", bg: "bg-green-900", tc: "text-green-200" },
                  { step: "4", name: "AddRoundKey", type: "Both", desc: "XOR the state with a round key derived from the original key", bg: "bg-blue-900", tc: "text-blue-200" },
                ].map((s) => (
                  <div key={s.step} className={`${s.bg} rounded-2xl p-4`}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-white text-gray-900 w-6 h-6 rounded-full flex items-center justify-center font-black text-xs">{s.step}</span>
                      <span className={`${s.tc} font-black text-sm`}>{s.name}</span>
                    </div>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${s.type === "Confusion" ? "bg-purple-700 text-purple-100" : s.type === "Diffusion" ? "bg-green-700 text-green-100" : "bg-blue-700 text-blue-100"}`}>
                      {s.type}
                    </span>
                    <p className={`text-xs ${s.tc} opacity-70 mt-2 leading-relaxed`}>{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ContentCard>
        </div>
      )}
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// SIDEBAR NAVIGATION
// ─────────────────────────────────────────────────────────────
const SECTIONS = [
  {
    id: "transposition",
    emoji: "🔀",
    label: "Transposition Cipher",
    tags: ["Classical", "Symmetric"],
    color: "text-orange-600",
    activeBg: "bg-orange-50",
    dot: "bg-orange-400",
  },
  {
    id: "rsa",
    emoji: "🔐",
    label: "RSA Algorithm",
    tags: ["Asymmetric", "Modern"],
    color: "text-purple-600",
    activeBg: "bg-purple-50",
    dot: "bg-purple-400",
  },
  {
    id: "stream",
    emoji: "🌊",
    label: "Stream Ciphers",
    tags: ["XOR", "Real-Time"],
    color: "text-sky-600",
    activeBg: "bg-sky-50",
    dot: "bg-sky-400",
  },
];

const Sidebar = ({ active, onChange }) => (
  <aside className="w-72 shrink-0 sticky top-0 h-screen overflow-y-auto bg-white pt-8 pb-6 px-4 flex flex-col">
    {/* Logo */}
    <div className="px-3 mb-8">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-2xl">🔒</span>
        <span className="font-black text-gray-900 text-xl">CryptoLearn</span>
      </div>
      <p className="text-gray-400 text-xs font-medium ml-1">Cryptography for everyone</p>
      <div className="flex items-center gap-2 mt-3">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <span className="text-gray-600 text-sm font-semibold">Manish Kumar</span>
        <span className="bg-[#C8F5C8] text-green-800 text-xs font-bold px-2 py-0.5 rounded-full ml-auto">Exam Ready</span>
      </div>
    </div>

    {/* Nav */}
    <nav className="flex-1 space-y-2">
      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest px-3 mb-3">Topics</p>
      {SECTIONS.map((s) => (
        <button
          key={s.id}
          onClick={() => onChange(s.id)}
          className={`w-full text-left px-3 py-3 rounded-2xl transition-all ${
            active === s.id ? `${s.activeBg} ${s.color}` : "text-gray-600 hover:bg-gray-50"
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">{s.emoji}</span>
            <div className="flex-1 min-w-0">
              <p className={`font-bold text-sm ${active === s.id ? s.color : "text-gray-700"}`}>{s.label}</p>
              <div className="flex gap-1 mt-1 flex-wrap">
                {s.tags.map((t) => (
                  <span key={t} className={`text-xs font-bold px-2 py-0.5 rounded-full ${active === s.id ? "bg-white" : "bg-gray-100"} text-gray-500`}>{t}</span>
                ))}
              </div>
            </div>
            {active === s.id && (
              <div className={`w-2 h-2 rounded-full ${s.dot} shrink-0`}></div>
            )}
          </div>
        </button>
      ))}
    </nav>

    {/* Quick Reference */}
    <div className="bg-gray-900 rounded-2xl p-4 mt-6">
      <p className="text-[#C8F5C8] font-black text-sm mb-3">⚡ Quick Reference</p>
      <div className="space-y-2 text-xs font-mono text-gray-400">
        <p className="text-white font-bold">RSA Formulas:</p>
        <p>C = Mᵉ mod n</p>
        <p>M = Cᵈ mod n</p>
        <p>d·e ≡ 1 (mod φ(n))</p>
        <p className="text-white font-bold mt-2">XOR:</p>
        <p>A ⊕ A = 0</p>
        <p>A ⊕ 0 = A</p>
        <p className="text-white font-bold mt-2">Caesar:</p>
        <p>C=(P+K) mod 26</p>
        <p>P=(C-K) mod 26</p>
      </div>
    </div>

    {/* Last Update */}
    <div className="px-3 mt-4">
      <p className="text-gray-300 text-xs font-medium">Last Update</p>
      <p className="text-gray-400 text-xs font-bold">Monday, 16 March 2026</p>
    </div>
  </aside>
);

// ─────────────────────────────────────────────────────────────
// HEADER
// ─────────────────────────────────────────────────────────────
const Header = ({ activeSection }) => {
  const section = SECTIONS.find((s) => s.id === activeSection);
  return (
    <div className="bg-white px-8 py-5 flex items-center justify-between">
      <div>
        <div className="flex items-center gap-3 mb-1">
          <span className="text-3xl">{section?.emoji}</span>
          <h1 className="text-2xl font-black text-gray-900">{section?.label}</h1>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <p className="text-gray-500 text-sm">
            {activeSection === "transposition" && "Rail Fence • Route • Columnar • Double • Cryptanalysis"}
            {activeSection === "rsa" && "Key Gen • Encryption • Decryption • Full Example • Cipher Types"}
            {activeSection === "stream" && "XOR • RC4 • ChaCha20 • Caesar • Diffusion & Confusion"}
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        {section?.tags.map((t) => <GreenTag key={t} label={t} />)}
        <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full">Exam Notes 📚</span>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────────────────────
export default function CryptographyPage() {
  const [activeSection, setActiveSection] = useState("transposition");

  return (
    <div className="min-h-screen newq bg-[#F9FAFB] flex font-sans">
      {/* Sidebar */}
      <Sidebar active={activeSection} onChange={setActiveSection} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen overflow-y-auto">
        {/* Header */}
        <Header activeSection={activeSection} />

        {/* Divider */}
        <div className="h-px bg-gray-100" />

        {/* Content */}
        <main className="flex-1 p-8 max-w-6xl w-full mx-auto">
          {activeSection === "transposition" && <TranspositionSection />}
          {activeSection === "rsa" && <RSASection />}
          {activeSection === "stream" && <StreamSection />}
        </main>

        {/* Footer */}
        <footer className="bg-white px-8 py-5 flex items-center justify-between mt-auto">
          <div className="flex items-center gap-3">
            <span className="text-xl">🔒</span>
            <span className="font-black text-gray-700">CryptoLearn</span>
            <span className="text-gray-300 text-sm">—</span>
            <span className="text-gray-500 text-sm">Built for Manish Kumar's Cryptography Exam</span>
          </div>
          <div className="flex gap-2">
            <GreenTag label="🔀 Transposition" />
            <GreenTag label="🔐 RSA" />
            <GreenTag label="🌊 Stream Ciphers" />
          </div>
        </footer>
      </div>
    </div>
  );
}

