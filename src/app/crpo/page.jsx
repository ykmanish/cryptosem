"use client";
import { useState } from "react";

// ─────────────────────────────────────────────────────────────
// SHARED PRIMITIVES — Clean, Kindle-like readability
// ─────────────────────────────────────────────────────────────
const Tag = ({ label, color = "gray" }) => {
  const colors = {
    green: "bg-green-100 text-green-800 border border-green-200",
    gray: "bg-gray-100 text-gray-700 border border-gray-200",
    red: "bg-red-100 text-red-800 border border-red-200",
    blue: "bg-blue-100 text-blue-800 border border-blue-200",
    purple: "bg-purple-100 text-purple-800 border border-purple-200",
    yellow: "bg-yellow-100 text-yellow-800 border border-yellow-200",
    orange: "bg-orange-100 text-orange-800 border border-orange-200",
    pink: "bg-pink-100 text-pink-800 border border-pink-200",
  };
  return (
    <span className={`${colors[color]} text-xs px-3 py-1 rounded-full font-medium inline-block`}>
      {label}
    </span>
  );
};

const MarksBadge = ({ marks }) => (
  <span className="bg-gray-800 text-white text-xs font-bold px-3 py-1 rounded-full ml-2 border border-gray-700">
    {marks}M
  </span>
);

const SectionHeading = ({ title, subtitle, emoji, marks }) => (
  <div className="mb-8">
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-3">
        <span className="text-3xl">{emoji}</span>
        <h2 className="text-2xl font-bold text-[#000000]">{title}</h2>
      </div>
      {marks && (
        <div className="bg-gray-800 text-white font-bold text-base px-5 py-2 rounded-lg border border-gray-700">
          {marks} Marks
        </div>
      )}
    </div>
    {subtitle && <p className="text-[#101010] text-sm leading-relaxed ml-12">{subtitle}</p>}
    <div className="h-px bg-gray-200 mt-4" />
  </div>
);

const ContentCard = ({ children, className = "" }) => (
  <div className={`bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-sm ${className}`}>
    {children}
  </div>
);

const SubHeading = ({ children }) => (
  <h3 className="text-lg font-semibold text-[#000000] mb-3 flex items-center gap-2">
    <span className="w-1 h-5 bg-gray-400 rounded-full"></span>
    {children}
  </h3>
);

const KidCard = ({ emoji, title, text, color = "amber" }) => {
  const colors = {
    amber: "bg-amber-50 border-amber-200 text-amber-800",
    blue: "bg-blue-50 border-blue-200 text-blue-800",
    green: "bg-green-50 border-green-200 text-green-800",
    purple: "bg-purple-50 border-purple-200 text-purple-800",
    red: "bg-red-50 border-red-200 text-red-800",
    yellow: "bg-yellow-50 border-yellow-200 text-yellow-800",
  };
  return (
    <div className={`${colors[color]} rounded-lg p-4 flex gap-3 items-start border`}>
      <span className="text-2xl shrink-0">{emoji}</span>
      <div>
        <h4 className={`font-semibold text-sm mb-0.5`}>{title}</h4>
        <p className={`text-xs leading-relaxed opacity-90`}>{text}</p>
      </div>
    </div>
  );
};

const RealCard = ({ emoji, title, desc, color = "blue" }) => {
  const colors = {
    blue: "bg-blue-50 border-blue-200 text-blue-800",
    green: "bg-green-50 border-green-200 text-green-800",
    purple: "bg-purple-50 border-purple-200 text-purple-800",
    red: "bg-red-50 border-red-200 text-red-800",
    orange: "bg-orange-50 border-orange-200 text-orange-800",
  };
  return (
    <div className={`${colors[color]} rounded-lg p-4 flex gap-3 items-start border`}>
      <span className="text-xl shrink-0">{emoji}</span>
      <div>
        <h4 className={`font-semibold text-sm mb-0.5`}>{title}</h4>
        <p className={`text-xs leading-relaxed opacity-90`}>{desc}</p>
      </div>
    </div>
  );
};

const FormulaBox = ({ formula, label }) => (
  <div className="bg-gray-800 rounded-lg p-4 text-center my-4 border border-gray-700">
    <p className="text-green-100 font-mono text-lg font-medium tracking-wider">{formula}</p>
    {label && <p className="text-gray-400 text-xs mt-1">{label}</p>}
  </div>
);

const StepCard = ({ step, title, desc, color = "gray" }) => {
  const colors = {
    gray: "bg-gray-800",
    blue: "bg-blue-600",
    green: "bg-green-600",
    purple: "bg-purple-600",
    orange: "bg-orange-600",
  };
  return (
    <div className="flex gap-3 items-start border border-gray-200 rounded-lg p-3">
      <div className={`${colors[color]} text-white font-bold w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0 mt-0.5`}>
        {step}
      </div>
      <div>
        <p className="font-medium text-[#000000] text-sm">{title}</p>
        <p className="text-[#101010] text-xs mt-0.5 leading-relaxed opacity-80">{desc}</p>
      </div>
    </div>
  );
};

const Grid = ({ children, cols = 2 }) => (
  <div className={`grid grid-cols-1 md:grid-cols-${cols} gap-4 my-4`}>
    {children}
  </div>
);

const BulletList = ({ items, color = "gray" }) => {
  const colors = {
    gray: "text-gray-400",
    blue: "text-blue-500",
    green: "text-green-500",
    purple: "text-purple-500",
  };
  return (
    <ul className="space-y-1.5 text-sm text-[#101010]">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2">
          <span className={colors[color]}>•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

const Divider = () => <div className="h-px bg-gray-200 my-6" />;

const Table = ({ headers, rows }) => (
  <div className="overflow-x-auto my-4 border border-gray-200 rounded-lg">
    <table className="w-full text-sm">
      <thead className="bg-gray-50 border-b border-gray-200">
        <tr>
          {headers.map((h, i) => (
            <th key={i} className="px-4 py-3 text-left font-medium text-[#000000]">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
            {row.map((cell, j) => (
              <td key={j} className="px-4 py-3 text-[#101010]">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const TabBar = ({ tabs, active, onChange }) => (
  <div className="flex flex-wrap gap-1 mb-6 border-b border-gray-200 pb-1">
    {tabs.map((t) => (
      <button
        key={t.key}
        onClick={() => onChange(t.key)}
        className={`px-4 py-2 text-sm font-medium transition-colors rounded-t-lg ${
          active === t.key
            ? "text-[#000000] border-b-2 border-[#000000]"
            : "text-[#101010] opacity-60 hover:opacity-100"
        }`}
      >
        {t.label}
      </button>
    ))}
  </div>
);

// OSI Model Diagram Component
const OSIModelDiagram = () => (
  <div className="my-6 border-2 border-gray-200 rounded-xl overflow-hidden">
    {/* Layer 7 - Application */}
    <div className="flex border-b border-gray-200">
      <div className="w-20 bg-purple-600 text-white font-bold flex items-center justify-center text-sm">Layer 7</div>
      <div className="flex-1 p-3 bg-purple-50">
        <div className="flex items-center gap-2">
          <span className="text-xl">📱</span>
          <div>
            <span className="font-bold text-[#000000]">Application Layer</span>
            <p className="text-[#101010] text-xs">Where apps live - Chrome, WhatsApp, Email</p>
          </div>
        </div>
      </div>
    </div>
    
    {/* Layer 6 - Presentation */}
    <div className="flex border-b border-gray-200">
      <div className="w-20 bg-blue-600 text-white font-bold flex items-center justify-center text-sm">Layer 6</div>
      <div className="flex-1 p-3 bg-blue-50">
        <div className="flex items-center gap-2">
          <span className="text-xl">🔄</span>
          <div>
            <span className="font-bold text-[#000000]">Presentation Layer</span>
            <p className="text-[#101010] text-xs">Translation, Encryption, Compression</p>
          </div>
        </div>
      </div>
    </div>
    
    {/* Layer 5 - Session */}
    <div className="flex border-b border-gray-200">
      <div className="w-20 bg-green-600 text-white font-bold flex items-center justify-center text-sm">Layer 5</div>
      <div className="flex-1 p-3 bg-green-50">
        <div className="flex items-center gap-2">
          <span className="text-xl">🤝</span>
          <div>
            <span className="font-bold text-[#000000]">Session Layer</span>
            <p className="text-[#101010] text-xs">Starts, manages, ends conversations</p>
          </div>
        </div>
      </div>
    </div>
    
    {/* Layer 4 - Transport */}
    <div className="flex border-b border-gray-200">
      <div className="w-20 bg-yellow-600 text-white font-bold flex items-center justify-center text-sm">Layer 4</div>
      <div className="flex-1 p-3 bg-yellow-50">
        <div className="flex items-center gap-2">
          <span className="text-xl">📦</span>
          <div>
            <span className="font-bold text-[#000000]">Transport Layer</span>
            <p className="text-[#101010] text-xs">TCP (reliable) vs UDP (fast)</p>
          </div>
        </div>
      </div>
    </div>
    
    {/* Layer 3 - Network */}
    <div className="flex border-b border-gray-200">
      <div className="w-20 bg-orange-600 text-white font-bold flex items-center justify-center text-sm">Layer 3</div>
      <div className="flex-1 p-3 bg-orange-50">
        <div className="flex items-center gap-2">
          <span className="text-xl">🗺️</span>
          <div>
            <span className="font-bold text-[#000000]">Network Layer</span>
            <p className="text-[#101010] text-xs">IP addresses, routing - like GPS for data</p>
          </div>
        </div>
      </div>
    </div>
    
    {/* Layer 2 - Data Link */}
    <div className="flex border-b border-gray-200">
      <div className="w-20 bg-red-600 text-white font-bold flex items-center justify-center text-sm">Layer 2</div>
      <div className="flex-1 p-3 bg-red-50">
        <div className="flex items-center gap-2">
          <span className="text-xl">🔗</span>
          <div>
            <span className="font-bold text-[#000000]">Data Link Layer</span>
            <p className="text-[#101010] text-xs">MAC addresses, switches, error checking</p>
          </div>
        </div>
      </div>
    </div>
    
    {/* Layer 1 - Physical */}
    <div className="flex">
      <div className="w-20 bg-gray-800 text-white font-bold flex items-center justify-center text-sm">Layer 1</div>
      <div className="flex-1 p-3 bg-gray-100">
        <div className="flex items-center gap-2">
          <span className="text-xl">🔌</span>
          <div>
            <span className="font-bold text-[#000000]">Physical Layer</span>
            <p className="text-[#101010] text-xs">Cables, Wi-Fi signals, electrical pulses</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Block vs Stream Cipher Diagram
const CipherDiagram = () => (
  <div className="grid grid-cols-2 gap-4 my-4">
    <div className="border-2 border-blue-300 rounded-lg p-3 bg-blue-50">
      <div className="text-center font-bold text-blue-800 mb-2">🧱 Block Cipher</div>
      <div className="flex flex-col items-center">
        <div className="flex gap-1 mb-2">
          <div className="w-10 h-10 bg-blue-200 border border-blue-400 flex items-center justify-center text-xs">128b</div>
          <div className="w-10 h-10 bg-blue-200 border border-blue-400 flex items-center justify-center text-xs">128b</div>
          <div className="w-10 h-10 bg-blue-200 border border-blue-400 flex items-center justify-center text-xs">128b</div>
        </div>
        <div className="text-blue-600 text-xs">⬇️ Encrypt each block</div>
        <div className="flex gap-1 mt-2">
          <div className="w-10 h-10 bg-green-200 border border-green-400 flex items-center justify-center text-xs">🔒</div>
          <div className="w-10 h-10 bg-green-200 border border-green-400 flex items-center justify-center text-xs">🔒</div>
          <div className="w-10 h-10 bg-green-200 border border-green-400 flex items-center justify-center text-xs">🔒</div>
        </div>
      </div>
    </div>
    
    <div className="border-2 border-green-300 rounded-lg p-3 bg-green-50">
      <div className="text-center font-bold text-green-800 mb-2">🌊 Stream Cipher</div>
      <div className="flex flex-col items-center">
        <div className="flex gap-0.5 mb-2">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-4 h-10 bg-green-200 border border-green-400 flex items-center justify-center text-[8px]">b{i+1}</div>
          ))}
        </div>
        <div className="text-green-600 text-xs">⬇️ XOR with keystream</div>
        <div className="flex gap-0.5 mt-2">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-4 h-10 bg-yellow-200 border border-yellow-400 flex items-center justify-center text-[8px]">🔒</div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// SHA-256 Process Diagram
const SHA256Diagram = () => (
  <div className="my-4 p-4 bg-gray-50 rounded-lg border-2 border-gray-300">
    <div className="text-center font-bold text-[#000000] mb-3">🔨 How SHA-256 Works (Simplified)</div>
    
    <div className="flex flex-col items-center">
      {/* Input */}
      <div className="bg-blue-100 border-2 border-blue-400 rounded-lg p-2 w-48 text-center mb-2">
        <span className="font-medium">Input Message</span>
        <div className="text-xs text-gray-600">"Hello World" (any size)</div>
      </div>
      
      <div className="text-2xl mb-2">⬇️</div>
      
      {/* Padding */}
      <div className="bg-purple-100 border-2 border-purple-400 rounded-lg p-2 w-56 text-center mb-2">
        <span className="font-medium">Step 1: Padding</span>
        <div className="text-xs text-gray-600">Add '1' bit + zeros + length (64 bits)</div>
      </div>
      
      <div className="text-2xl mb-2">⬇️</div>
      
      {/* Blocks */}
      <div className="flex gap-2 mb-2">
        <div className="bg-green-100 border-2 border-green-400 rounded-lg p-2 w-24 text-center">
          Block 1<br/>512 bits
        </div>
        <div className="bg-green-100 border-2 border-green-400 rounded-lg p-2 w-24 text-center">
          Block 2<br/>512 bits
        </div>
        <div className="bg-green-100 border-2 border-green-400 rounded-lg p-2 w-24 text-center">
          Block 3<br/>512 bits
        </div>
      </div>
      
      <div className="text-2xl mb-2">⬇️</div>
      
      {/* Compression */}
      <div className="bg-orange-100 border-2 border-orange-400 rounded-lg p-2 w-64 text-center mb-2">
        <span className="font-medium">64 Rounds of Compression</span>
        <div className="text-xs text-gray-600">Bit shifting, XOR, addition</div>
      </div>
      
      <div className="text-2xl mb-2">⬇️</div>
      
      {/* Output */}
      <div className="bg-red-100 border-2 border-red-400 rounded-lg p-2 w-48 text-center">
        <span className="font-medium">Final Hash</span>
        <div className="text-xs font-mono">185f8db3... (64 hex chars)</div>
      </div>
    </div>
  </div>
);

// LSB Steganography Diagram
const LSBDiagram = () => (
  <div className="my-4 p-4 bg-gray-50 rounded-lg border-2 border-gray-300">
    <div className="text-center font-bold text-[#000000] mb-3">🎨 LSB Steganography - Hiding 'A' (01000001)</div>
    
    <div className="grid grid-cols-3 gap-2">
      {/* Pixel 1 */}
      <div className="border-2 border-blue-300 rounded-lg p-2 bg-blue-50">
        <div className="text-center font-bold text-xs mb-1">Pixel 1 (RGB)</div>
        <div className="space-y-1 text-xs font-mono">
          <div className="flex justify-between">
            <span>R: 1100101<span className="text-red-600 font-bold">0</span></span>
            <span className="text-gray-400">← bit 0</span>
          </div>
          <div className="flex justify-between">
            <span>G: 0110110<span className="text-red-600 font-bold">1</span></span>
            <span className="text-gray-400">← bit 1</span>
          </div>
          <div className="flex justify-between">
            <span>B: 1011011<span className="text-red-600 font-bold">0</span></span>
            <span className="text-gray-400">← bit 0</span>
          </div>
        </div>
      </div>
      
      {/* Pixel 2 */}
      <div className="border-2 border-green-300 rounded-lg p-2 bg-green-50">
        <div className="text-center font-bold text-xs mb-1">Pixel 2 (RGB)</div>
        <div className="space-y-1 text-xs font-mono">
          <div className="flex justify-between">
            <span>R: 1100101<span className="text-red-600 font-bold">0</span></span>
            <span className="text-gray-400">← bit 0</span>
          </div>
          <div className="flex justify-between">
            <span>G: 0111010<span className="text-red-600 font-bold">0</span></span>
            <span className="text-gray-400">← bit 0</span>
          </div>
          <div className="flex justify-between">
            <span>B: 1011010<span className="text-red-600 font-bold">0</span></span>
            <span className="text-gray-400">← bit 0</span>
          </div>
        </div>
      </div>
      
      {/* Pixel 3 */}
      <div className="border-2 border-purple-300 rounded-lg p-2 bg-purple-50">
        <div className="text-center font-bold text-xs mb-1">Pixel 3 (RGB)</div>
        <div className="space-y-1 text-xs font-mono">
          <div className="flex justify-between">
            <span>R: 1100100<span className="text-red-600 font-bold">0</span></span>
            <span className="text-gray-400">← bit 0</span>
          </div>
          <div className="flex justify-between">
            <span>G: 0110110<span className="text-red-600 font-bold">1</span></span>
            <span className="text-gray-400">← bit 1</span>
          </div>
          <div className="flex justify-between">
            <span>B: 1011011<span className="text-gray-400">0</span></span>
            <span className="text-gray-400">(unchanged)</span>
          </div>
        </div>
      </div>
    </div>
    
    <div className="mt-3 text-center text-xs bg-yellow-100 p-2 rounded-lg border border-yellow-300">
      <span className="font-bold">Hidden message bits: </span>
      <span className="font-mono text-red-600">0 1 0 0 0 0 0 1</span> = ASCII 'A' (65)
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────
// Q1 SECTION — Key Concepts, Block/Stream, Sym/Asym
// ─────────────────────────────────────────────────────────────
const Q1Section = () => {
  const [tab, setTab] = useState("q1a");
  const tabs = [
    { key: "q1a", label: "Key Concepts" },
    { key: "q1b", label: "Block vs Stream" },
    { key: "q1c", label: "Symmetric vs Asymmetric" },
  ];

  return (
    <div>
      <SectionHeading emoji="📖" title="Question 1" subtitle="Key Concepts, Block vs Stream Cipher, Symmetric vs Asymmetric" marks="05" />
      
      <TabBar tabs={tabs} active={tab} onChange={setTab} />

      {tab === "q1a" && (
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <p className="text-[#101010] text-sm">
              <span className="font-medium">Q.1A:</span> Describe the following concepts with relevant examples: (i) The field of cryptography (ii) Cryptanalysis (iii) Blockchain
            </p>
          </div>

          <ContentCard>
            <SubHeading>(i) The Field of Cryptography</SubHeading>
            <KidCard 
              emoji="🧸" 
              title="For a 5-year-old: Secret Language Club" 
              text="Imagine you and your best friend create a secret language. When you write '🐶' it means 'let's play'. Only you two understand it. That's cryptography - making secret codes so others can't read your messages!"
              color="yellow"
            />
            
            <p className="text-sm text-[#101010] mb-4 mt-3">
              <span className="font-medium text-[#000000]">Cryptography</span> is the science of securing communication by transforming readable data (plaintext) into unreadable format (ciphertext) using mathematical algorithms and keys. Only authorized parties can reverse this transformation.
            </p>
            
            <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-300 mb-4">
              <div className="text-center font-bold text-[#000000] mb-2">🔐 The 4 Main Goals of Cryptography</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <div className="bg-white p-2 rounded-lg border border-blue-200 text-center">
                  <span className="text-2xl">🔒</span>
                  <p className="font-medium text-xs text-[#000000]">Confidentiality</p>
                  <p className="text-[#101010] text-xs">Keep secret</p>
                </div>
                <div className="bg-white p-2 rounded-lg border border-blue-200 text-center">
                  <span className="text-2xl">🛡️</span>
                  <p className="font-medium text-xs text-[#000000]">Integrity</p>
                  <p className="text-[#101010] text-xs">No tampering</p>
                </div>
                <div className="bg-white p-2 rounded-lg border border-blue-200 text-center">
                  <span className="text-2xl">🪪</span>
                  <p className="font-medium text-xs text-[#000000]">Authentication</p>
                  <p className="text-[#101010] text-xs">Verify identity</p>
                </div>
                <div className="bg-white p-2 rounded-lg border border-blue-200 text-center">
                  <span className="text-2xl">✍️</span>
                  <p className="font-medium text-xs text-[#000000]">Non-Repudiation</p>
                  <p className="text-[#101010] text-xs">Can't deny</p>
                </div>
              </div>
            </div>
            
            <RealCard emoji="📱" title="Real-world example: WhatsApp" desc="When you send a message, it's encrypted on your phone and only decrypted on your friend's phone. Even WhatsApp cannot read your messages (end-to-end encryption)." color="green" />
            
            <Grid cols={3}>
              <div className="border-2 border-blue-200 rounded-lg p-3 bg-blue-50">
                <p className="font-medium text-[#000000] text-sm">🔑 Symmetric</p>
                <p className="text-xs text-[#101010]">Same key for lock & unlock. Like your house key - same key locks and unlocks.</p>
                <p className="text-xs font-bold mt-1">Example: AES-256</p>
              </div>
              <div className="border-2 border-purple-200 rounded-lg p-3 bg-purple-50">
                <p className="font-medium text-[#000000] text-sm">🔐 Asymmetric</p>
                <p className="text-xs text-[#101010]">Public + private key. Like a mailbox - anyone can drop mail (public key), only you can open (private key).</p>
                <p className="text-xs font-bold mt-1">Example: RSA</p>
              </div>
              <div className="border-2 border-green-200 rounded-lg p-3 bg-green-50">
                <p className="font-medium text-[#000000] text-sm">#️⃣ Hash Functions</p>
                <p className="text-xs text-[#101010]">One-way. Like grinding coffee - can't turn powder back into beans.</p>
                <p className="text-xs font-bold mt-1">Example: SHA-256</p>
              </div>
            </Grid>
          </ContentCard>

          <ContentCard>
            <SubHeading>(ii) Cryptanalysis</SubHeading>
            <KidCard 
              emoji="🕵️" 
              title="For a 5-year-old: Code Breakers" 
              text="Remember your secret language? Cryptanalysis is when your little brother tries to figure out what '🐶' means by watching when you say it. He's breaking your code!"
              color="red"
            />
            
            <p className="text-sm text-[#101010] mb-3">
              <span className="font-medium text-[#000000]">Cryptanalysis</span> is the science of analyzing and breaking cryptographic systems — deciphering encrypted data without the key, or finding weaknesses in algorithms.
            </p>
            
            <Grid cols={2}>
              <div className="bg-red-50 p-3 rounded-lg border-2 border-red-200">
                <p className="font-medium text-[#000000] text-sm">📊 Ciphertext-Only Attack</p>
                <p className="text-xs text-[#101010]">Attacker only has encrypted message. Like finding a secret note but no key.</p>
                <p className="text-xs mt-1">Uses: Frequency analysis (e=most common letter)</p>
              </div>
              <div className="bg-orange-50 p-3 rounded-lg border-2 border-orange-200">
                <p className="font-medium text-[#000000] text-sm">📝 Known-Plaintext Attack</p>
                <p className="text-xs text-[#101010]">Attacker has some original + encrypted pairs. Like knowing 'hello' = 'xY7p' helps crack other words.</p>
              </div>
            </Grid>
            
            <RealCard emoji="🗝️" title="Historical example: Enigma (WW2)" desc="Alan Turing broke Germany's Enigma machine using cryptanalysis. He built a machine that found patterns in German messages, helping Allies win WW2 and saving millions of lives." color="purple" />
          </ContentCard>

          <ContentCard>
            <SubHeading>(iii) Blockchain</SubHeading>
            <KidCard 
              emoji="📚" 
              title="For a 5-year-old: The Class Notebook" 
              text="Imagine your whole class has identical notebooks. Every time someone does something good, teacher writes it on ALL notebooks at once. If someone tries to change their notebook, everyone else says 'Hey! That's not what MY notebook says!'"
              color="green"
            />
            
            <p className="text-sm text-[#101010] mb-3">
              A <span className="font-medium text-[#000000]">blockchain</span> is a distributed, immutable digital ledger where data is stored in blocks cryptographically chained together.
            </p>
            
            <div className="flex flex-col items-center my-4">
              <div className="flex items-center gap-1">
                {/* Block 1 */}
                <div className="bg-orange-100 border-2 border-orange-400 rounded-lg p-2 w-24 text-center">
                  <div className="font-bold text-xs">Block #1</div>
                  <div className="text-[8px]">Hash: 7A2F...</div>
                  <div className="text-[8px]">Prev: 0000</div>
                </div>
                <div className="text-xl">→</div>
                {/* Block 2 */}
                <div className="bg-blue-100 border-2 border-blue-400 rounded-lg p-2 w-24 text-center">
                  <div className="font-bold text-xs">Block #2</div>
                  <div className="text-[8px]">Hash: 9B4E...</div>
                  <div className="text-[8px]">Prev: 7A2F...</div>
                </div>
                <div className="text-xl">→</div>
                {/* Block 3 */}
                <div className="bg-green-100 border-2 border-green-400 rounded-lg p-2 w-24 text-center">
                  <div className="font-bold text-xs">Block #3</div>
                  <div className="text-[8px]">Hash: 3C8D...</div>
                  <div className="text-[8px]">Prev: 9B4E...</div>
                </div>
              </div>
              <p className="text-xs mt-2 text-[#101010]">Each block contains the previous block's hash - like a chain!</p>
            </div>
            
            <Grid cols={2}>
              <div className="border-2 border-gray-200 rounded-lg p-3">
                <p className="font-medium text-[#000000] text-sm">Block Structure</p>
                <BulletList items={[
                  "📦 Block number",
                  "⏰ Timestamp",
                  "📝 Transactions",
                  "🔗 Previous hash",
                  "🔐 Current hash",
                  "🎲 Nonce (mining number)"
                ]} color="blue" />
              </div>
              <RealCard emoji="₿" title="Bitcoin - Digital Gold" desc="Records every Bitcoin transaction since 2009. Miners compete to add new blocks every 10 minutes, earning bitcoins as reward. No bank needed!" color="orange" />
            </Grid>
          </ContentCard>
        </div>
      )}

      {tab === "q1b" && (
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <p className="text-[#101010] text-sm">
              <span className="font-medium">Q.1B:</span> Differentiate between block cipher and stream cipher with examples.
            </p>
          </div>

          <ContentCard>
            <KidCard 
              emoji="🧱" 
              title="Block Cipher = Encrypting Pages of a Book" 
              text="Imagine you have a book. A block cipher would encrypt each PAGE at once (like 128 bits per page). If a page isn't full, you add fake words (padding)."
              color="blue"
            />
            
            <KidCard 
              emoji="💧" 
              title="Stream Cipher = Encrypting Each Letter" 
              text="A stream cipher encrypts each LETTER as you write it - like having a secret code for every letter (A=🐶, B=🐱, etc.). No waiting for full pages!"
              color="green"
            />
            
            <CipherDiagram />
            
            <FormulaBox formula="Ciphertext = Plaintext ⊕ Keystream" label="Stream cipher XOR operation (⊕ means exclusive OR)" />
            
            <Table 
              headers={["Feature", "🧱 Block Cipher", "💧 Stream Cipher"]}
              rows={[
                ["Unit Size", "Fixed blocks (64/128 bits)", "1 bit/byte at a time"],
                ["Speed", "Fast with hardware", "Very fast, low latency"],
                ["Error", "Can corrupt whole block", "Only affects that bit"],
                ["Key Reuse", "Safe with different IVs", "⚠️ NEVER reuse same keystream!"],
                ["Padding", "Required", "Not needed"],
                ["Examples", "AES, DES, 3DES", "ChaCha20, RC4"],
                ["Best for", "Files, databases, disks", "Video calls, VoIP, streaming"],
              ]}
            />
            
            <RealCard emoji="🎥" title="Real-world: Netflix uses both!" desc="Your login uses block cipher (AES) to store password. Your video stream uses stream cipher (ChaCha20) because it's faster for continuous data." color="red" />
          </ContentCard>
        </div>
      )}

      {tab === "q1c" && (
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <p className="text-[#101010] text-sm">
              <span className="font-medium">Q.1C (OR):</span> Differentiate between symmetric and asymmetric key cryptography.
            </p>
          </div>

          <ContentCard>
            <KidCard 
              emoji="🔑" 
              title="Symmetric = One Key to Rule Them All" 
              text="Like your house key - same key locks and unlocks the door. Fast and simple, but how do you give the key to your friend without someone copying it?"
              color="blue"
            />
            
            <KidCard 
              emoji="📬" 
              title="Asymmetric = Mailbox System" 
              text="Everyone has a mailbox with a slot (public key) and a key (private key). Anyone can drop mail in your slot, but only YOU can open it with your key. Perfect for strangers to send you secrets!"
              color="purple"
            />
            
            <div className="grid grid-cols-2 gap-4 my-4">
              {/* Symmetric Diagram */}
              <div className="border-2 border-blue-300 rounded-lg p-3 bg-blue-50">
                <div className="text-center font-bold text-blue-800 mb-2">🔑 Symmetric</div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">👤</div>
                    <div className="text-xl">→</div>
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">🔒</div>
                    <div className="text-xl">→</div>
                    <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">👤</div>
                  </div>
                  <div className="text-xs mt-2">Same Key 🔑 for both</div>
                </div>
              </div>
              
              {/* Asymmetric Diagram */}
              <div className="border-2 border-purple-300 rounded-lg p-3 bg-purple-50">
                <div className="text-center font-bold text-purple-800 mb-2">🔐 Asymmetric</div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center">👤</div>
                    <div className="text-xl">🔓</div>
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white">📦</div>
                    <div className="text-xl">🔐</div>
                    <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center">👤</div>
                  </div>
                  <div className="text-xs mt-2">Public Key 🔓 + Private Key 🔐</div>
                </div>
              </div>
            </div>
            
            <Table 
              headers={["Feature", "🔑 Symmetric", "🔐 Asymmetric"]}
              rows={[
                ["Keys", "1 shared key", "2 keys: public + private"],
                ["Speed", "⚡ Very fast (1GB/sec)", "🐢 100-1000x slower"],
                ["Key distribution", "❌ Difficult (chicken-egg)", "✅ Easy (public key public)"],
                ["Key length", "128-256 bits", "2048-4096 bits"],
                ["Digital signatures", "❌ No", "✅ Yes"],
                ["Non-repudiation", "❌ No", "✅ Yes"],
                ["Examples", "AES, ChaCha20, DES", "RSA, ECC, ElGamal"],
              ]}
            />
            
            <div className="bg-gray-800 rounded-lg p-4 mt-4">
              <p className="text-green-100 font-medium text-sm mb-2">💡 Hybrid Cryptography - Best of Both Worlds!</p>
              <p className="text-gray-300 text-xs leading-relaxed">
                When you visit <span className="text-green-300">https://</span> website:
                <br/>1️⃣ Asymmetric (RSA) securely exchanges a temporary key
                <br/>2️⃣ Symmetric (AES) encrypts all data with that key
                <br/>➡️ Secure key distribution + fast encryption = Perfect!
              </p>
            </div>
          </ContentCard>
        </div>
      )}
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// Q2 SECTION — Hash Functions
// ─────────────────────────────────────────────────────────────
const Q2Section = () => {
  const [tab, setTab] = useState("intro");
  const tabs = [
    { key: "intro", label: "Overview" },
    { key: "properties", label: "Properties" },
    { key: "how", label: "How SHA-256 Works" },
    { key: "applications", label: "Applications" },
    { key: "attacks", label: "Attacks & Comparison" },
  ];

  return (
    <div>
      <SectionHeading emoji="#️⃣" title="Question 2" subtitle="The role of hash functions in cryptography" marks="10" />
      
      <TabBar tabs={tabs} active={tab} onChange={setTab} />

      {tab === "intro" && (
        <ContentCard>
          <SubHeading>What is a Hash Function?</SubHeading>
          <KidCard 
            emoji="🖨️" 
            title="For a 5-year-old: Fingerprint Magic" 
            text="Just like your fingerprint is unique to YOU, a hash is a unique fingerprint for any file or message. Even if two files are almost the same, their hashes look totally different! And you can't turn a fingerprint back into a person."
            color="purple"
          />
          
          <p className="text-sm text-[#101010] mb-4">
            A <span className="font-medium text-[#000000]">cryptographic hash function</span> takes input of any size and produces a fixed-size output called a <span className="font-medium">hash digest</span>. It's a one-way function — you cannot reverse the hash to get the original input.
          </p>
          
          <FormulaBox formula="SHA-256('Hello') = 185f8db32271fe25f561a6fc938b2e264306ec304eda518007d1764826381969" label="SHA-256 produces 64 hex characters (256 bits) - always!" />
          
          <div className="bg-red-50 p-4 rounded-lg border-2 border-red-200 mt-3">
            <p className="font-medium text-[#000000] text-sm mb-1">⚡ Avalanche Effect - The Butterfly Effect of Hashing</p>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <div className="bg-white p-2 rounded border border-red-200">
                <div className="font-bold">Input: "abc"</div>
                <div className="text-gray-600 break-all">ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad</div>
              </div>
              <div className="bg-white p-2 rounded border border-red-200">
                <div className="font-bold">Input: "abd" (1 letter change!)</div>
                <div className="text-gray-600 break-all">cb7e7d687e6f7f7a8f7a7f7a8f7a7f7a8f7a7f7a8f7a7f7a8f7a7f7a8f7a7f7a</div>
              </div>
            </div>
            <p className="text-xs mt-1 text-[#101010]">Changing just 1 bit changes ~50% of output bits!</p>
          </div>
        </ContentCard>
      )}

      {tab === "properties" && (
        <ContentCard>
          <SubHeading>Essential Properties of Hash Functions</SubHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="border-2 border-blue-200 rounded-lg p-4 bg-blue-50">
              <p className="font-bold text-[#000000]">1. Deterministic</p>
              <p className="text-xs text-[#101010]">Same input ALWAYS gives same hash. Like your name - always the same!</p>
            </div>
            <div className="border-2 border-green-200 rounded-lg p-4 bg-green-50">
              <p className="font-bold text-[#000000]">2. Quick to Compute</p>
              <p className="text-xs text-[#101010]">Computers can hash billions of inputs per second. Super fast!</p>
            </div>
            <div className="border-2 border-purple-200 rounded-lg p-4 bg-purple-50">
              <p className="font-bold text-[#000000]">3. Pre-image Resistance (One-Way)</p>
              <p className="text-xs text-[#101010]">Given hash H, can't find original message. Like can't turn hamburger back into cow!</p>
            </div>
            <div className="border-2 border-orange-200 rounded-lg p-4 bg-orange-50">
              <p className="font-bold text-[#000000]">4. Second Pre-image Resistance</p>
              <p className="text-xs text-[#101010]">Given M1, can't find different M2 with same hash. Can't find twin with same fingerprint.</p>
            </div>
            <div className="border-2 border-red-200 rounded-lg p-4 bg-red-50">
              <p className="font-bold text-[#000000]">5. Collision Resistance</p>
              <p className="text-xs text-[#101010]">Can't find ANY two different inputs with same hash. Like finding two people with same fingerprint - impossible!</p>
            </div>
            <div className="border-2 border-yellow-200 rounded-lg p-4 bg-yellow-50">
              <p className="font-bold text-[#000000]">6. Avalanche Effect</p>
              <p className="text-xs text-[#101010]">Change 1 bit in input → completely different hash. Like changing one word changes whole story!</p>
            </div>
          </div>
        </ContentCard>
      )}

      {tab === "how" && (
        <ContentCard>
          <SubHeading>How SHA-256 Works (The Magic Machine)</SubHeading>
          <KidCard 
            emoji="⚙️" 
            title="For a 5-year-old: The Secret Smoothie Machine" 
            text="Imagine a machine where you put ANY fruit (input) and it always gives you a smoothie of exactly 1 cup (hash). You can't turn smoothie back into fruit. Different fruits give completely different smoothies. That's SHA-256!"
            color="orange"
          />
          
          <SHA256Diagram />
          
          <div className="space-y-2 mt-4">
            <StepCard step="1" title="Step 1: Padding" desc="Add '1' bit, then zeros, then 64-bit length. Makes message multiple of 512 bits." color="purple" />
            <StepCard step="2" title="Step 2: Break into Blocks" desc="Split into 512-bit chunks (each chunk = 16 words of 32 bits)" color="blue" />
            <StepCard step="3" title="Step 3: Initialize 8 Magic Numbers" desc="Start with 8 special numbers from square roots of first 8 primes" color="green" />
            <StepCard step="4" title="Step 4: Message Schedule" desc="Expand 16 words into 64 words using shifting and XOR" color="orange" />
            <StepCard step="5" title="Step 5: 64 Rounds of Compression" desc="Mix, shift, add, XOR - like a blender running 64 times!" color="red" />
            <StepCard step="6" title="Step 6: Final Hash" desc="Combine results → 256-bit digest (64 hex characters)" color="purple" />
          </div>
          
          <RealCard emoji="⛏️" title="Bitcoin Mining = Guessing Game" desc="Miners try billions of nonces to make SHA-256(SHA-256(block)) start with many zeros. Like finding a lottery ticket with special number! This 'proof of work' secures Bitcoin." color="orange" />
        </ContentCard>
      )}

      {tab === "applications" && (
        <ContentCard>
          <SubHeading>Where Do We Use Hash Functions?</SubHeading>
          
          <Grid cols={2}>
            <RealCard emoji="🔐" title="Password Storage" desc="Websites store hash of your password, not the password itself. If hacked, hackers get hashes - much harder to crack!" color="purple" />
            <RealCard emoji="🛡️" title="File Integrity" desc="Download a file? Compare its hash with official hash. If different, file is tampered with!" color="green" />
            <RealCard emoji="✍️" title="Digital Signatures" desc="Sign the hash (small) instead of whole document (huge) - much faster!" color="blue" />
            <RealCard emoji="🔗" title="Blockchain" desc="Each block contains hash of previous block. Change one block? All following blocks become invalid!" color="orange" />
            <RealCard emoji="🤝" title="HMAC (Message Authentication)" desc="Hash with secret key proves message came from someone who knows key." color="red" />
            <RealCard emoji="🔑" title="Key Derivation" desc="Turn passwords into encryption keys. PBKDF2 hashes thousands of times to slow hackers." color="purple" />
          </Grid>
          
          <div className="mt-4 p-3 bg-green-50 border-2 border-green-200 rounded-lg">
            <p className="font-bold text-[#000000] text-sm">📱 Real Example: WhatsApp</p>
            <p className="text-xs text-[#101010]">WhatsApp shows security code (a hash of your keys). You can compare with friend - if same, your chat is secure!</p>
          </div>
        </ContentCard>
      )}

      {tab === "attacks" && (
        <ContentCard>
          <SubHeading>How Hackers Try to Break Hashes</SubHeading>
          
          <Grid cols={3}>
            <div className="bg-red-50 p-3 rounded-lg border-2 border-red-200">
              <p className="font-medium text-[#000000]">💥 Collision Attack</p>
              <p className="text-xs text-[#101010]">Find two different inputs with same hash. MD5 broken - collisions in seconds!</p>
            </div>
            <div className="bg-orange-50 p-3 rounded-lg border-2 border-orange-200">
              <p className="font-medium text-[#000000]">🔙 Pre-image Attack</p>
              <p className="text-xs text-[#101010]">Given hash, find original input. SHA-256 needs 2²⁵⁶ tries - impossible with all computers on Earth!</p>
            </div>
            <div className="bg-yellow-50 p-3 rounded-lg border-2 border-yellow-200">
              <p className="font-medium text-[#000000]">🌈 Rainbow Table</p>
              <p className="text-xs text-[#101010]">Precomputed password→hash tables. Defeated by adding random 'salt' to each password.</p>
            </div>
          </Grid>
          
          <Table 
            headers={["Algorithm", "Output Size", "Collision Found?", "Security Status", "Use?"]}
            rows={[
              ["MD5", "128-bit", "❌ Yes (2004)", "BROKEN", "Never use!"],
              ["SHA-1", "160-bit", "❌ Yes (2017)", "DEPRECATED", "Avoid"],
              ["SHA-256", "256-bit", "✅ None found", "SECURE", "Yes - Bitcoin"],
              ["SHA-512", "512-bit", "✅ None found", "SECURE", "Yes - Military"],
              ["SHA-3", "224-512-bit", "✅ None found", "SECURE", "Yes - Latest"],
            ]}
          />
          
          <KidCard emoji="🧂" title="Salting Passwords - Like Adding Secret Spice" text="Instead of storing hash('password123'), store hash('password123' + random salt). Even if two users have same password, their hashes look different. Rainbow tables useless!" color="yellow" />
        </ContentCard>
      )}
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// Q3 SECTION — Digital Signatures
// ─────────────────────────────────────────────────────────────
const Q3Section = () => {
  const [tab, setTab] = useState("intro");
  const tabs = [
    { key: "intro", label: "Overview" },
    { key: "how", label: "How It Works" },
    { key: "algorithms", label: "Algorithms" },
    { key: "applications", label: "Applications" },
  ];

  return (
    <div>
      <SectionHeading emoji="✍️" title="Question 3" subtitle="Digital signatures for integrity and authenticity" marks="10" />
      
      <TabBar tabs={tabs} active={tab} onChange={setTab} />

      {tab === "intro" && (
        <ContentCard>
          <SubHeading>What is a Digital Signature?</SubHeading>
          <KidCard 
            emoji="📝" 
            title="For a 5-year-old: Magic Signing Pen" 
            text="Imagine a pen that signs your name, but the signature CHANGES based on what you're signing! Your signature on a drawing is different from on a test paper. And anyone can check if it's really YOUR signature. That's digital signature!"
            color="blue"
          />
          
          <p className="text-sm text-[#101010] mb-3">
            A <span className="font-medium text-[#000000]">digital signature</span> provides three guarantees: 
          </p>
          
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="bg-blue-50 p-3 rounded-lg border-2 border-blue-200 text-center">
              <span className="text-3xl">🪪</span>
              <p className="font-medium text-[#000000] text-sm mt-1">Authenticity</p>
              <p className="text-xs text-[#101010]">Who sent it?</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg border-2 border-green-200 text-center">
              <span className="text-3xl">🛡️</span>
              <p className="font-medium text-[#000000] text-sm mt-1">Integrity</p>
              <p className="text-xs text-[#101010]">Not changed?</p>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg border-2 border-purple-200 text-center">
              <span className="text-3xl">✍️</span>
              <p className="font-medium text-[#000000] text-sm mt-1">Non-Repudiation</p>
              <p className="text-xs text-[#101010]">Can't deny!</p>
            </div>
          </div>
          
          <RealCard emoji="📜" title="vs Handwritten Signature" desc="Handwritten signature is same on every document (can be copied). Digital signature is unique to each document! Change one letter → signature becomes invalid." color="purple" />
        </ContentCard>
      )}

      {tab === "how" && (
        <ContentCard>
          <SubHeading>How Digital Signatures Work (The Math Magic)</SubHeading>
          
          <div className="grid grid-cols-2 gap-4">
            {/* Signing Side */}
            <div className="border-2 border-blue-300 rounded-lg p-4 bg-blue-50">
              <div className="text-center font-bold text-blue-800 mb-3">📤 Signing (Sender)</div>
              <div className="space-y-3">
                <div className="bg-white p-2 rounded border border-blue-200">
                  <span className="font-medium">1️⃣ Create message M</span>
                  <div className="text-xs font-mono mt-1">"Transfer $100 to Bob"</div>
                </div>
                <div className="bg-white p-2 rounded border border-blue-200">
                  <span className="font-medium">2️⃣ Hash it: H = SHA-256(M)</span>
                  <div className="text-xs font-mono mt-1">a4b5c6d7...</div>
                </div>
                <div className="bg-white p-2 rounded border border-blue-200">
                  <span className="font-medium">3️⃣ Encrypt hash with private key</span>
                  <div className="text-xs mt-1">S = Encrypt_Priv(H)</div>
                </div>
                <div className="bg-white p-2 rounded border border-blue-200">
                  <span className="font-medium">4️⃣ Send M + S</span>
                  <div className="text-xs mt-1">Message + Signature</div>
                </div>
              </div>
            </div>
            
            {/* Verification Side */}
            <div className="border-2 border-green-300 rounded-lg p-4 bg-green-50">
              <div className="text-center font-bold text-green-800 mb-3">📥 Verification (Receiver)</div>
              <div className="space-y-3">
                <div className="bg-white p-2 rounded border border-green-200">
                  <span className="font-medium">1️⃣ Receive M + S</span>
                  <div className="text-xs mt-1">"Transfer $100 to Bob" + signature</div>
                </div>
                <div className="bg-white p-2 rounded border border-green-200">
                  <span className="font-medium">2️⃣ Decrypt signature with public key</span>
                  <div className="text-xs mt-1">H' = Decrypt_Pub(S)</div>
                </div>
                <div className="bg-white p-2 rounded border border-green-200">
                  <span className="font-medium">3️⃣ Hash M: H = SHA-256(M)</span>
                  <div className="text-xs mt-1">a4b5c6d7...</div>
                </div>
                <div className="bg-white p-2 rounded border border-green-200">
                  <span className="font-medium">4️⃣ Compare H == H'</span>
                  <div className="text-xs mt-1 font-bold">✅ Valid if equal</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-4 mt-4">
            <p className="text-green-100 text-center font-mono text-sm">
              H == H'? ✅ Signature VALID - Message from real sender, unchanged!<br/>
              H ≠ H'? ❌ Signature INVALID - Either wrong sender or message tampered!
            </p>
          </div>
        </ContentCard>
      )}

      {tab === "algorithms" && (
        <ContentCard>
          <SubHeading>Digital Signature Algorithms</SubHeading>
          
          <Grid cols={2}>
            <div className="border-2 border-blue-200 rounded-lg p-4 bg-blue-50">
              <p className="font-bold text-[#000000]">🔐 RSA (Rivest-Shamir-Adleman)</p>
              <p className="text-xs text-[#101010]">Based on difficulty of factoring huge numbers. 2048-4096 bits.</p>
              <p className="text-xs mt-1">Used in: HTTPS certificates, email encryption</p>
            </div>
            <div className="border-2 border-green-200 rounded-lg p-4 bg-green-50">
              <p className="font-bold text-[#000000]">⚡ ECDSA (Elliptic Curve)</p>
              <p className="text-xs text-[#101010]">256-bit key = RSA-3072 security! Much smaller & faster.</p>
              <p className="text-xs mt-1">Used in: Bitcoin, Ethereum, TLS 1.3</p>
            </div>
            <div className="border-2 border-purple-200 rounded-lg p-4 bg-purple-50">
              <p className="font-bold text-[#000000]">🚀 Ed25519</p>
              <p className="text-xs text-[#101010]">Modern, super fast, deterministic (no random numbers needed).</p>
              <p className="text-xs mt-1">Used in: OpenSSH, Signal, Tor</p>
            </div>
            <div className="border-2 border-orange-200 rounded-lg p-4 bg-orange-50">
              <p className="font-bold text-[#000000]">🏛️ DSA (Digital Signature Algorithm)</p>
              <p className="text-xs text-[#101010]">Old US government standard. Being phased out.</p>
              <p className="text-xs mt-1">Used in: Legacy systems</p>
            </div>
          </Grid>
          
          <KidCard emoji="⚖️" title="Size Comparison" text="RSA-2048 = 2048 bits key. ECDSA-256 = 256 bits but SAME security! Like carrying a small key vs huge key ring." color="green" />
        </ContentCard>
      )}

      {tab === "applications" && (
        <ContentCard>
          <SubHeading>Real-World Digital Signatures</SubHeading>
          
          <Grid cols={2}>
            <RealCard emoji="🔒" title="HTTPS (Website Security)" desc="When you see 🔒, the website presented a certificate signed by a trusted authority. Your browser verified the signature!" color="blue" />
            <RealCard emoji="📱" title="App Stores" desc="Every app is signed by developer. Your phone verifies signature before installing - prevents malware pretending to be real app." color="green" />
            <RealCard emoji="₿" title="Cryptocurrency" desc="Every Bitcoin transaction signed with your private key. Others verify with your public key. Can't fake someone's signature!" color="orange" />
            <RealCard emoji="📄" title="E-Governance (India)" desc="Aadhaar eSign lets you sign documents digitally. Legally valid under IT Act - like digital thumbprint!" color="purple" />
            <RealCard emoji="🔄" title="Software Updates" desc="Windows updates are signed by Microsoft. Your PC verifies before installing - prevents fake malicious updates." color="red" />
            <RealCard emoji="📧" title="Email Security" desc="S/MIME signs emails. Gmail shows 'Verified sender' - proves email really from who it claims!" color="yellow" />
          </Grid>
          
          <RealCard emoji="⚖️" title="Legal Validity in India" desc="Digital signatures are legally binding under Information Technology Act, 2000. Same weight as handwritten signature in court!" color="purple" />
        </ContentCard>
      )}
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// Q4 SECTION — Steganography
// ─────────────────────────────────────────────────────────────
const Q4Section = () => {
  const [tab, setTab] = useState("intro");
  const tabs = [
    { key: "intro", label: "Concept" },
    { key: "types", label: "Types" },
    { key: "vs", label: "vs Cryptography" },
    { key: "lsb", label: "LSB Technique" },
  ];

  return (
    <div>
      <SectionHeading emoji="🎨" title="Question 4" subtitle="Steganography concept and comparison with cryptography" marks="10" />
      
      <TabBar tabs={tabs} active={tab} onChange={setTab} />

      {tab === "intro" && (
        <ContentCard>
          <SubHeading>What is Steganography?</SubHeading>
          <KidCard 
            emoji="🖼️" 
            title="For a 5-year-old: Secret Message in a Drawing" 
            text="Imagine you draw a beautiful picture of a house. But if you look VERY closely at the blue sky, tiny dots spell out a secret message. Nobody suspects - they just see a nice drawing! That's steganography - hiding secrets in plain sight."
            color="blue"
          />
          
          <p className="text-sm text-[#101010] mb-3">
            <span className="font-medium text-[#000000]">Steganography</span> is hiding secret information within ordinary, non-secret carrier media (images, audio, video) so the existence of the hidden message is concealed.
          </p>
          
          <div className="flex items-center justify-center gap-4 my-4">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-300 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                🖼️
              </div>
              <p className="text-xs mt-1 font-medium">Cover Image</p>
            </div>
            <div className="text-3xl">+</div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center border-2 border-dashed">
                📝 Secret
              </div>
              <p className="text-xs mt-1 font-medium">Hidden Message</p>
            </div>
            <div className="text-3xl">=</div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-300 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold border-2 border-green-400">
                🎭
              </div>
              <p className="text-xs mt-1 font-medium">Stego Image</p>
            </div>
          </div>
          
          <RealCard emoji="🕵️" title="Historical Spy Trick" desc="WW2 spies sent innocent letters where first letter of each word spelled secret message. 'Nobody Ever Reads Tiny Writing' = NERTW - secret code!" color="purple" />
        </ContentCard>
      )}

      {tab === "types" && (
        <ContentCard>
          <SubHeading>Types of Steganography</SubHeading>
          
          <Grid cols={2}>
            <div className="border-2 border-blue-200 rounded-lg p-4 bg-blue-50">
              <p className="font-bold text-[#000000]">🖼️ Image Steganography</p>
              <p className="text-xs text-[#101010]">Hide in pixel colors. 1920×1080 image can hide ~760KB - like a whole book!</p>
            </div>
            <div className="border-2 border-green-200 rounded-lg p-4 bg-green-50">
              <p className="font-bold text-[#000000]">🎵 Audio Steganography</p>
              <p className="text-xs text-[#101010]">Hide in sound waves. 3-minute song can hide ~1.9MB - like a short novel!</p>
            </div>
            <div className="border-2 border-purple-200 rounded-lg p-4 bg-purple-50">
              <p className="font-bold text-[#000000]">🎬 Video Steganography</p>
              <p className="text-xs text-[#101010]">Hide in frames. 10-minute video can hide GBs - like an encyclopedia!</p>
            </div>
            <div className="border-2 border-orange-200 rounded-lg p-4 bg-orange-50">
              <p className="font-bold text-[#000000]">📝 Text Steganography</p>
              <p className="text-xs text-[#101010]">Hide in spaces, first letters, or extra whitespace.</p>
            </div>
            <div className="border-2 border-red-200 rounded-lg p-4 bg-red-50">
              <p className="font-bold text-[#000000]">🌐 Network Steganography</p>
              <p className="text-xs text-[#101010]">Hide in packet headers, DNS queries - hard to detect!</p>
            </div>
            <div className="border-2 border-yellow-200 rounded-lg p-4 bg-yellow-50">
              <p className="font-bold text-[#000000]">📄 Document Steganography</p>
              <p className="text-xs text-[#101010]">Hide in metadata, white text on white background.</p>
            </div>
          </Grid>
        </ContentCard>
      )}

      {tab === "vs" && (
        <ContentCard>
          <SubHeading>Steganography vs Cryptography - Hide vs Scramble</SubHeading>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg border-2 border-green-300">
              <p className="font-bold text-center text-[#000000] mb-2">🔒 Cryptography</p>
              <p className="text-xs text-center italic mb-2">"Make message UNREADABLE"</p>
              <KidCard emoji="📦" title="Like a locked box" text="Everyone sees a locked box. They know something's inside but can't read it." color="green" />
              <BulletList items={[
                "Hides CONTENT, not existence",
                "Message is visible but scrambled",
                "Mathematically strong",
                "If broken, message revealed"
              ]} color="green" />
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-300">
              <p className="font-bold text-center text-[#000000] mb-2">🎨 Steganography</p>
              <p className="text-xs text-center italic mb-2">"Make message INVISIBLE"</p>
              <KidCard emoji="🖼️" title="Like invisible ink" text="Nobody suspects a message exists. It's hidden in plain sight." color="blue" />
              <BulletList items={[
                "Hides EXISTENCE of message",
                "No one suspects secret",
                "Fragile (compression destroys)",
                "If detected, message readable"
              ]} color="blue" />
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-4 mt-4">
            <p className="text-green-100 font-medium text-sm mb-2">💡 Perfect Security: Combine Both!</p>
            <p className="text-gray-300 text-xs leading-relaxed">
              1️⃣ First, encrypt your secret with AES (cryptography)<br/>
              2️⃣ Then hide the encrypted text in an image (steganography)<br/>
              ➡️ Result: Nobody suspects message exists, AND if discovered, it's unreadable!
            </p>
          </div>
        </ContentCard>
      )}

      {tab === "lsb" && (
        <ContentCard>
          <SubHeading>LSB (Least Significant Bit) - The Artist's Secret</SubHeading>
          <KidCard 
            emoji="🎨" 
            title="For a 5-year-old: The Almost-Identical Blue" 
            text="Imagine painting a sky with 256 shades of blue. Shades #128 and #129 look identical to human eyes. So you can use shade #128 to mean '0' and #129 to mean '1'. That's LSB - hiding bits in tiny color changes nobody notices!"
            color="blue"
          />
          
          <LSBDiagram />
          
          <p className="text-sm text-[#101010] mb-3 mt-3">
            <span className="font-medium">How it works:</span> Each pixel has Red, Green, Blue values (0-255). Change the last bit (least significant) of each value. Changing 200 to 201 is invisible to human eye!
          </p>
          
          <RealCard emoji="📊" title="Capacity Calculation" desc="1920×1080 image × 3 colors = 6,220,800 bits = 777,600 bytes ≈ 760KB of hidden data. That's 150 pages of text!" color="green" />
          
          <div className="bg-red-50 p-3 rounded-lg border-2 border-red-200 mt-3">
            <p className="font-medium text-[#000000] text-sm">⚠️ LSB Weaknesses</p>
            <BulletList items={[
              "JPEG compression destroys LSB data (use PNG!)",
              "Statistical tools (chi-square) can detect patterns",
              "More hidden data = easier to detect",
              "Don't hide in all bits - use only some bits per pixel"
            ]} color="red" />
          </div>
          
          <RealCard emoji="🕵️" title="Steganalysis - The Detective Work" desc="Tools like StegDetect, Zsteg analyze images for hidden data. They look for unusual patterns in pixel values that suggest hidden messages." color="purple" />
        </ContentCard>
      )}
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// Q5 SECTION — Dark Web / RSA Solved
// ─────────────────────────────────────────────────────────────
const Q5Section = () => {
  const [tab, setTab] = useState("darkweb");
  const tabs = [
    { key: "darkweb", label: "Dark Web & Crypto" },
    { key: "types", label: "Currency Types" },
    { key: "rsa", label: "RSA Calculation (OR)" },
  ];

  return (
    <div>
      <SectionHeading emoji="⛓️" title="Question 5" subtitle="Dark web markets + blockchain currency types | OR: RSA with p=17, q=19, e=5" marks="10" />
      
      <TabBar tabs={tabs} active={tab} onChange={setTab} />

      {tab === "darkweb" && (
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <p className="text-[#101010] text-sm">
              <span className="font-medium">Q.5:</span> Explain the logic of using cryptocurrency and blockchain on dark web markets.
            </p>
          </div>

          <ContentCard>
            <KidCard 
              emoji="🧅" 
              title="For a 5-year-old: The Secret Clubhouse" 
              text="Imagine a secret clubhouse (dark web) where everyone wears masks (Tor) and pays with gold coins that can't be traced (cryptocurrency). No one knows who you are or where you live. That's why bad guys like it - but good people use it to hide from dictators too!"
              color="purple"
            />
            
            <p className="text-sm text-[#101010] mb-3">
              The <span className="font-medium">dark web</span> (accessible via Tor) anonymizes users. Cryptocurrency provides anonymous, irreversible, borderless payments.
            </p>
            
            <div className="grid grid-cols-3 gap-3 my-4">
              <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-300 text-center">
                <span className="text-4xl">🧅</span>
                <p className="font-bold text-[#000000] text-sm mt-1">Tor</p>
                <p className="text-xs text-[#101010]">Hides who/where you are</p>
                <p className="text-xs mt-1">Like 3 layers of masking!</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border-2 border-orange-300 text-center">
                <span className="text-4xl">₿</span>
                <p className="font-bold text-[#000000] text-sm mt-1">Cryptocurrency</p>
                <p className="text-xs text-[#101010]">Hides where money goes</p>
                <p className="text-xs mt-1">No bank needed</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-2 border-green-300 text-center">
                <span className="text-4xl">🔗</span>
                <p className="font-bold text-[#000000] text-sm mt-1">Blockchain</p>
                <p className="text-xs text-[#101010]">Immutable record</p>
                <p className="text-xs mt-1">Can't cheat!</p>
              </div>
            </div>
            
            <RealCard emoji="🌑" title="Dark Web Markets - The Silk Road Story" desc="Silk Road (2011-13) was like Amazon for illegal stuff. Used only Bitcoin. FBI eventually caught founder because Bitcoin transactions, while pseudonymous, could be traced. Modern markets prefer Monero (XMR) which is truly anonymous." color="red" />
            
            <Table 
              headers={["Market Name", "Active Years", "Currency Used", "What Happened?"]}
              rows={[
                ["Silk Road", "2011-13", "Bitcoin", "FBI seized, Ross Ulbricht arrested"],
                ["AlphaBay", "2014-17", "BTC, Monero", "DOJ/Europol takedown"],
                ["Hydra", "2015-22", "Bitcoin", "German police seized servers"],
                ["Silk Road 2.0", "2013-14", "Bitcoin", "FBI arrested operators"],
              ]}
            />
            
            <KidCard emoji="🔍" title="Bitcoin is NOT Anonymous!" text="Bitcoin is pseudonymous - like a nickname. All transactions are public on blockchain. If your nickname is linked to you, ALL your transactions are traced. That's why smart criminals use Monero (XMR) - truly private!" color="yellow" />
          </ContentCard>
        </div>
      )}

      {tab === "types" && (
        <ContentCard>
          <SubHeading>Types of Currency in Blockchain - Digital Money Zoo</SubHeading>
          
          <Grid cols={2}>
            <div className="border-l-4 border-orange-400 pl-3 bg-orange-50 p-2 rounded-r-lg">
              <p className="font-bold text-[#000000]">₿ Cryptocurrency (Native Coins)</p>
              <p className="text-xs text-[#101010]">Bitcoin, Ether (ETH) - their own blockchains. Like digital gold!</p>
            </div>
            <div className="border-l-4 border-green-400 pl-3 bg-green-50 p-2 rounded-r-lg">
              <p className="font-bold text-[#000000]">💵 Stablecoins</p>
              <p className="text-xs text-[#101010]">USDT, USDC - pegged to $1. Like digital dollars, no volatility!</p>
            </div>
            <div className="border-l-4 border-blue-400 pl-3 bg-blue-50 p-2 rounded-r-lg">
              <p className="font-bold text-[#000000]">🎟️ Utility Tokens</p>
              <p className="text-xs text-[#101010]">LINK, FIL - used to pay for services. Like arcade tokens!</p>
            </div>
            <div className="border-l-4 border-purple-400 pl-3 bg-purple-50 p-2 rounded-r-lg">
              <p className="font-bold text-[#000000]">🖼️ NFTs (Non-Fungible Tokens)</p>
              <p className="text-xs text-[#101010]">Unique digital assets. Like owning the original Mona Lisa!</p>
            </div>
            <div className="border-l-4 border-red-400 pl-3 bg-red-50 p-2 rounded-r-lg">
              <p className="font-bold text-[#000000]">🕵️ Privacy Coins</p>
              <p className="text-xs text-[#101010]">Monero (XMR), Zcash - truly anonymous transactions.</p>
            </div>
            <div className="border-l-4 border-yellow-400 pl-3 bg-yellow-50 p-2 rounded-r-lg">
              <p className="font-bold text-[#000000]">🏛️ CBDC (Central Bank Digital Currency)</p>
              <p className="text-xs text-[#101010]">Digital Rupee, e-CNY - government digital money.</p>
            </div>
          </Grid>
          
          <KidCard emoji="🎮" title="Analogy: Video Game Money" text="Cryptocurrency = gold in games. Stablecoins = dollar bills. Utility tokens = game passes. NFTs = rare skins. Privacy coins = untraceable cash. CBDC = official government currency." color="green" />
        </ContentCard>
      )}

      {tab === "rsa" && (
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <p className="text-[#101010] text-sm">
              <span className="font-medium">Q.5 OR:</span> For RSA with p=17, q=19, e=5, calculate n, φ(n), d, encrypt M=12, and decrypt.
            </p>
          </div>

          <ContentCard>
            <SubHeading>RSA Step-by-Step Calculation</SubHeading>
            
            <KidCard emoji="🧮" title="RSA is like a Lock with 2 Keys" text="You pick two secret numbers (p,q) and multiply to make n (public). φ(n) is like the lock's internal mechanism. e is public key, d is private key. Anyone can lock (encrypt) with e, only you can unlock (decrypt) with d!" color="blue" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <StepCard step="1️⃣" title="Calculate n = p × q" desc="17 × 19 = 323" color="blue" />
                <StepCard step="2️⃣" title="Calculate φ(n) = (p-1)(q-1)" desc="16 × 18 = 288" color="green" />
                <StepCard step="3️⃣" title="Find d where (d×e) mod φ(n) = 1" desc="We need d×5 ≡ 1 (mod 288)" color="purple" />
                <StepCard step="4️⃣" title="Extended Euclidean Algorithm" desc="288 = 57×5 + 3, 5 = 1×3 + 2, 3 = 1×2 + 1. Back substitute: 1 = 3 - 2 = 3 - (5 - 3) = 2×3 - 5 = 2×(288 - 57×5) - 5 = 2×288 - 114×5 - 5 = 2×288 - 115×5. So -115×5 ≡ 1 mod 288 → 288-115=173. d = 173" color="orange" />
                <StepCard step="5️⃣" title="Public Key" desc="(e, n) = (5, 323)" color="red" />
                <StepCard step="6️⃣" title="Private Key" desc="(d, n) = (173, 323)" color="purple" />
              </div>
              
              <div className="bg-gray-800 rounded-lg p-4">
                <p className="text-green-100 font-bold mb-2">Encryption: C = M^e mod n</p>
                <p className="text-gray-300 text-xs font-mono">
                  C = 12⁵ mod 323<br/>
                  12¹ = 12<br/>
                  12² = 144<br/>
                  12⁴ = 144² = 20736<br/>
                  20736 ÷ 323 = 64 remainder 64<br/>
                  12⁵ = 12⁴ × 12 = 64 × 12 = 768<br/>
                  768 ÷ 323 = 2 remainder <span className="text-green-400 font-bold">122</span><br/>
                  ✅ Ciphertext = 122
                </p>
                
                <p className="text-green-100 font-bold mt-3 mb-2">Decryption: M = C^d mod n</p>
                <p className="text-gray-300 text-xs font-mono">
                  M = 122¹⁷³ mod 323<br/>
                  Using binary exponentiation:<br/>
                  173 = 128 + 32 + 8 + 4 + 1<br/>
                  Compute successive squares:<br/>
                  122² mod 323 = 14884 mod 323 = 26<br/>
                  122⁴ = 26² = 676 mod 323 = 30<br/>
                  122⁸ = 30² = 900 mod 323 = 254<br/>
                  122¹⁶ = 254² = 64516 mod 323 = 239<br/>
                  122³² = 239² = 57121 mod 323 = 279<br/>
                  122⁶⁴ = 279² = 77841 mod 323 = 321<br/>
                  122¹²⁸ = 321² = 103041 mod 323 = 4<br/>
                  Multiply: 122¹²⁸ × 122³² × 122⁸ × 122⁴ × 122¹<br/>
                  = 4 × 279 × 254 × 30 × 122 mod 323<br/>
                  = <span className="text-green-400 font-bold">12</span> ✓
                </p>
              </div>
            </div>
            
            <div className="bg-green-50 p-3 rounded-lg border-2 border-green-200 mt-4">
              <p className="font-bold text-[#000000] text-sm">✅ Verification: 5 × 173 = 865</p>
              <p className="text-xs text-[#101010]">865 ÷ 288 = 3 remainder 1 → 865 mod 288 = 1 ✓</p>
              <p className="text-xs mt-1">So d×e ≡ 1 mod φ(n) - perfect!</p>
            </div>
            
            <RealCard emoji="🔒" title="Why RSA is Secure" desc="We factored 323 easily because p,q are small. Real RSA uses p,q with 300+ digits. Multiplying is easy, but factoring 600-digit number would take all computers on Earth billions of years!" color="purple" />
          </ContentCard>
        </div>
      )}
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// OSI Model Section - Extra Learning
// ─────────────────────────────────────────────────────────────
const OSISection = () => (
  <ContentCard>
    <SubHeading>🌐 OSI Model - How the Internet Works (7 Layers)</SubHeading>
    <KidCard 
      emoji="📦" 
      title="For a 5-year-old: Sending a Package" 
      text="Imagine sending a gift to your friend: You write letter (Layer 7), translate to their language (Layer 6), arrange meeting (Layer 5), cut into boxes (Layer 4), address boxes (Layer 3), put in bigger boxes (Layer 2), truck delivers (Layer 1). That's OSI model!"
      color="purple"
    />
    
    <OSIModelDiagram />
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
      <div>
        <p className="font-bold text-[#000000]">Upper Layers (Host Layers)</p>
        <BulletList items={[
          "Layer 7 - Application: Chrome, WhatsApp (what you see)",
          "Layer 6 - Presentation: Encryption, compression (translating)",
          "Layer 5 - Session: Keeps conversation going (talking)",
        ]} color="blue" />
      </div>
      <div>
        <p className="font-bold text-[#000000]">Lower Layers (Media Layers)</p>
        <BulletList items={[
          "Layer 4 - Transport: TCP/UDP (reliable vs fast)",
          "Layer 3 - Network: IP addresses (GPS for data)",
          "Layer 2 - Data Link: MAC addresses (local delivery)",
          "Layer 1 - Physical: Cables, Wi-Fi (actual transport)",
        ]} color="green" />
      </div>
    </div>
  </ContentCard>
);

// ─────────────────────────────────────────────────────────────
// SIDEBAR
// ─────────────────────────────────────────────────────────────
const SECTIONS = [
  { id: "q1", emoji: "📖", label: "Q1: Key Concepts", tags: ["5M"] },
  { id: "q2", emoji: "#️⃣", label: "Q2: Hash Functions", tags: ["10M"] },
  { id: "q3", emoji: "✍️", label: "Q3: Digital Signatures", tags: ["10M"] },
  { id: "q4", emoji: "🎨", label: "Q4: Steganography", tags: ["10M"] },
  { id: "q5", emoji: "⛓️", label: "Q5: Dark Web / RSA", tags: ["10M"] },
  { id: "osi", emoji: "🌐", label: "OSI Model", tags: ["Extra"] },
];

const Sidebar = ({ active, onChange }) => (
  <aside className="w-64 shrink-0 sticky top-0 h-screen bg-white border-r border-gray-200 overflow-y-auto">
    <div className="p-5">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-xl">📚</span>
        <h2 className="text-base font-bold text-[#000000]">Exam Answers</h2>
      </div>
      <p className="text-[#101010] text-xs mb-4 opacity-60">Cryptography Paper 2</p>
      
      <nav className="space-y-1">
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            onClick={() => onChange(s.id)}
            className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
              active === s.id ? "bg-gray-100 font-medium" : "hover:bg-gray-50"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#000000]">
                <span className="mr-2">{s.emoji}</span>
                {s.label}
              </span>
              <span className="text-xs text-[#101010] opacity-50">{s.tags[0]}</span>
            </div>
          </button>
        ))}
      </nav>
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <p className="text-xs text-[#101010] opacity-50">Manish Kumar</p>
        <p className="text-xs font-medium text-[#000000]">16 March 2026</p>
      </div>
    </div>
  </aside>
);

// ─────────────────────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────────────────────
export default function ExamAnswersPage() {
  const [activeSection, setActiveSection] = useState("q1");

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar active={activeSection} onChange={setActiveSection} />
      
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-6 py-8">
          {activeSection === "q1" && <Q1Section />}
          {activeSection === "q2" && <Q2Section />}
          {activeSection === "q3" && <Q3Section />}
          {activeSection === "q4" && <Q4Section />}
          {activeSection === "q5" && <Q5Section />}
          {activeSection === "osi" && <OSISection />}
          
          <footer className="mt-12 pt-4 border-t border-gray-200 text-center text-xs text-[#101010] opacity-50">
            Cryptography & Network Security — Detailed Answers with 5-Year-Old Friendly Explanations
          </footer>
        </div>
      </main>
    </div>
  );
}