"use client";
import { useState } from "react";

// ─────────────────────────────────────────────────────────────
// ENHANCED COMPONENTS WITH BETTER COLORS AND VISUALS
// ─────────────────────────────────────────────────────────────
const Tag = ({ label, color = "gray" }) => {
  const colors = {
    green: "bg-green-100 text-green-800 border border-green-200",
    gray: "bg-gray-100 text-[#101010] border border-gray-200",
    red: "bg-red-100 text-red-800 border border-red-200",
    blue: "bg-blue-100 text-blue-800 border border-blue-200",
    purple: "bg-purple-100 text-purple-800 border border-purple-200",
    yellow: "bg-yellow-100 text-yellow-800 border border-yellow-200",
  };
  return (
    <span className={`${colors[color]} text-xs px-3 py-1 rounded-full font-medium`}>
      {label}
    </span>
  );
};

const SectionHeading = ({ title, subtitle, marks, emoji }) => (
  <div className="mb-8">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="text-3xl">{emoji}</span>
        <h2 className="text-2xl font-bold text-[#000000]">{title}</h2>
      </div>
      {marks && (
        <span className="bg-gray-800 text-white text-sm px-4 py-1.5 rounded-full font-medium">
          {marks} Marks
        </span>
      )}
    </div>
    {subtitle && <p className="text-[#101010] text-sm mt-2 ml-12">{subtitle}</p>}
    <div className="h-px bg-gray-200 mt-4" />
  </div>
);

const Card = ({ children, className = "" }) => (
  <div className={`bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-sm ${className}`}>
    {children}
  </div>
);

const ExampleBox = ({ emoji, title, children }) => (
  <div className="bg-gray-50 border-l-4 border-gray-400 p-4 my-4 rounded-r-lg">
    <div className="flex items-center gap-2 mb-2">
      <span className="text-xl">{emoji}</span>
      <span className="font-semibold text-[#000000]">{title}</span>
    </div>
    <div className="text-[#101010] text-sm pl-2">{children}</div>
  </div>
);

const BulletList = ({ items }) => (
  <ul className="space-y-2 text-sm text-[#101010]">
    {items.map((item, i) => (
      <li key={i} className="flex gap-2">
        <span className="text-gray-400">•</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const Divider = () => <div className="h-px bg-gray-200 my-6" />;

const Grid = ({ children, cols = 2 }) => (
  <div className={`grid grid-cols-1 md:grid-cols-${cols} gap-4 my-4`}>
    {children}
  </div>
);

const SubHeading = ({ children }) => (
  <h3 className="text-lg font-semibold text-[#000000] mb-3">{children}</h3>
);

const FormulaBox = ({ formula, label }) => (
  <div className="bg-gray-800 rounded-lg p-4 text-center my-4">
    <p className="text-green-100 font-mono text-lg font-medium">{formula}</p>
    {label && <p className="text-gray-400 text-xs mt-1">{label}</p>}
  </div>
);

const StepCard = ({ step, title, desc }) => (
  <div className="flex gap-3 items-start border border-gray-200 rounded-lg p-3">
    <div className="bg-gray-800 text-white font-bold w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0 mt-0.5">
      {step}
    </div>
    <div>
      <p className="font-medium text-[#000000] text-sm">{title}</p>
      <p className="text-[#101010] text-xs mt-0.5">{desc}</p>
    </div>
  </div>
);

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
            ? "text-[#000000] border-b-2 border-gray-900"
            : "text-[#101010] hover:text-gray-700"
        }`}
      >
        {t.label}
      </button>
    ))}
  </div>
);

// ─────────────────────────────────────────────────────────────
// ENHANCED OSI MODEL VISUALIZATION
// ─────────────────────────────────────────────────────────────
const OSIModelVisual = () => {
  const layers = [
    { num: 7, name: "Application", color: "bg-purple-500", textColor: "text-white", example: "HTTP, FTP, SMTP, DNS", emoji: "🌐", desc: "Where apps live - Chrome, Outlook, etc." },
    { num: 6, name: "Presentation", color: "bg-blue-500", textColor: "text-white", example: "SSL/TLS, JPEG, MPEG", emoji: "🎨", desc: "Translates data - encryption, compression" },
    { num: 5, name: "Session", color: "bg-indigo-500", textColor: "text-white", example: "NetBIOS, RPC", emoji: "🤝", desc: "Manages conversations between apps" },
    { num: 4, name: "Transport", color: "bg-cyan-500", textColor: "text-white", example: "TCP, UDP", emoji: "🚚", desc: "Ensures data arrives correctly" },
    { num: 3, name: "Network", color: "bg-green-500", textColor: "text-white", example: "IP, ICMP, OSPF", emoji: "🗺️", desc: "Finds the best path to destination" },
    { num: 2, name: "Data Link", color: "bg-yellow-500", textColor: "text-black", example: "Ethernet, MAC, WiFi", emoji: "🔗", desc: "Transfers between neighboring devices" },
    { num: 1, name: "Physical", color: "bg-orange-500", textColor: "text-white", example: "Cables, fiber, radio", emoji: "⚡", desc: "Raw bits over wires or air" },
  ];

  return (
    <div className="my-6">
      <p className="text-sm font-medium text-[#000000] mb-3">📊 OSI 7-Layer Model (Color-coded):</p>
      <div className="space-y-1">
        {layers.map((layer) => (
          <div key={layer.num} className="flex items-stretch h-16">
            <div className={`${layer.color} ${layer.textColor} w-16 flex items-center justify-center font-bold rounded-l-lg`}>
              L{layer.num}
            </div>
            <div className="flex-1 border-t border-r border-b border-gray-300 bg-white flex items-center px-4">
              <span className="text-xl mr-3">{layer.emoji}</span>
              <div>
                <span className="font-bold text-[#000000]">{layer.name}</span>
                <span className="text-xs text-[#101010] ml-2">({layer.example})</span>
                <p className="text-xs text-[#101010]">{layer.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// TRANSPOSITION CIPHER VISUAL
// ─────────────────────────────────────────────────────────────
const RailFenceVisual = () => (
  <div className="my-4 p-4 bg-gray-50 rounded-lg">
    <p className="font-medium text-[#000000] mb-2">Rail Fence Cipher (3 rails) - Like a zigzag!</p>
    <div className="font-mono text-sm space-y-1">
      <div className="flex gap-1">
        <span className="text-red-500 font-bold">W</span>
        <span className="text-gray-300">. . .</span>
        <span className="text-blue-500 font-bold">E</span>
        <span className="text-gray-300">. . .</span>
        <span className="text-green-500 font-bold">S</span>
        <span className="text-gray-300">. . .</span>
        <span className="text-purple-500 font-bold">R</span>
        <span className="text-gray-300">. . .</span>
        <span className="text-orange-500 font-bold">L</span>
        <span className="text-gray-300">. . .</span>
        <span className="text-pink-500 font-bold">T</span>
      </div>
      <div className="flex gap-1">
        <span className="text-gray-300">.</span>
        <span className="text-red-500 font-bold">E</span>
        <span className="text-gray-300">.</span>
        <span className="text-blue-500 font-bold">R</span>
        <span className="text-gray-300">.</span>
        <span className="text-green-500 font-bold">D</span>
        <span className="text-gray-300">.</span>
        <span className="text-purple-500 font-bold">S</span>
        <span className="text-gray-300">.</span>
        <span className="text-orange-500 font-bold">O</span>
        <span className="text-gray-300">.</span>
        <span className="text-pink-500 font-bold">E</span>
        <span className="text-gray-300">.</span>
        <span className="text-red-500 font-bold">E</span>
        <span className="text-gray-300">.</span>
        <span className="text-blue-500 font-bold">F</span>
        <span className="text-gray-300">.</span>
        <span className="text-green-500 font-bold">E</span>
        <span className="text-gray-300">.</span>
        <span className="text-purple-500 font-bold">A</span>
        <span className="text-gray-300">.</span>
        <span className="text-orange-500 font-bold">O</span>
        <span className="text-gray-300">.</span>
        <span className="text-pink-500 font-bold">C</span>
        <span className="text-gray-300">.</span>
        <span className="text-red-500 font-bold">E</span>
      </div>
      <div className="flex gap-1">
        <span className="text-gray-300">. .</span>
        <span className="text-red-500 font-bold">A</span>
        <span className="text-gray-300">. . .</span>
        <span className="text-blue-500 font-bold">I</span>
        <span className="text-gray-300">. . .</span>
        <span className="text-green-500 font-bold">C</span>
        <span className="text-gray-300">. . .</span>
        <span className="text-purple-500 font-bold">D</span>
        <span className="text-gray-300">. . .</span>
        <span className="text-orange-500 font-bold">E</span>
        <span className="text-gray-300">. . .</span>
        <span className="text-pink-500 font-bold">N</span>
      </div>
    </div>
    <p className="text-xs text-[#101010] mt-2">⬆️ Read row by row: Row 1 (red, blue, green...) → Row 2 → Row 3</p>
  </div>
);

const ColumnarVisual = () => (
  <div className="my-4 p-4 bg-gray-50 rounded-lg">
    <p className="font-medium text-[#000000] mb-2">Columnar Transposition with key "ZEBRAS"</p>
    <div className="grid grid-cols-6 gap-1 max-w-md mx-auto">
      {/* Key row */}
      <div className="bg-purple-600 text-white text-center p-1 text-xs font-bold rounded-t">Z(6)</div>
      <div className="bg-blue-600 text-white text-center p-1 text-xs font-bold rounded-t">E(3)</div>
      <div className="bg-green-600 text-white text-center p-1 text-xs font-bold rounded-t">B(1)</div>
      <div className="bg-yellow-600 text-white text-center p-1 text-xs font-bold rounded-t">R(5)</div>
      <div className="bg-orange-600 text-white text-center p-1 text-xs font-bold rounded-t">A(2)</div>
      <div className="bg-red-600 text-white text-center p-1 text-xs font-bold rounded-t">S(4)</div>
      
      {/* Data rows */}
      <div className="border-2 border-purple-300 p-1 text-center font-mono">W</div>
      <div className="border-2 border-blue-300 p-1 text-center font-mono">E</div>
      <div className="border-2 border-green-300 p-1 text-center font-mono">A</div>
      <div className="border-2 border-yellow-300 p-1 text-center font-mono">R</div>
      <div className="border-2 border-orange-300 p-1 text-center font-mono">E</div>
      <div className="border-2 border-red-300 p-1 text-center font-mono">D</div>
      
      <div className="border-2 border-purple-300 p-1 text-center font-mono">I</div>
      <div className="border-2 border-blue-300 p-1 text-center font-mono">S</div>
      <div className="border-2 border-green-300 p-1 text-center font-mono">C</div>
      <div className="border-2 border-yellow-300 p-1 text-center font-mono">O</div>
      <div className="border-2 border-orange-300 p-1 text-center font-mono">V</div>
      <div className="border-2 border-red-300 p-1 text-center font-mono">E</div>
      
      <div className="border-2 border-purple-300 p-1 text-center font-mono">R</div>
      <div className="border-2 border-blue-300 p-1 text-center font-mono">E</div>
      <div className="border-2 border-green-300 p-1 text-center font-mono">D</div>
      <div className="border-2 border-yellow-300 p-1 text-center font-mono">F</div>
      <div className="border-2 border-orange-300 p-1 text-center font-mono">L</div>
      <div className="border-2 border-red-300 p-1 text-center font-mono">E</div>
    </div>
    <p className="text-xs text-[#101010] mt-2">⬆️ Read columns in key order: B(1) → A(2) → E(3) → S(4) → R(5) → Z(6)</p>
  </div>
);

// ─────────────────────────────────────────────────────────────
// BLOCKCHAIN VISUAL
// ─────────────────────────────────────────────────────────────
const BlockchainVisual = () => (
  <div className="my-4 p-4 bg-gray-50 rounded-lg">
    <p className="font-medium text-[#000000] mb-3">How Blockchain Works (Like a chain of blocks!):</p>
    <div className="flex items-center justify-center gap-2 flex-wrap">
      {/* Block 1 */}
      <div className="bg-green-100 border-2 border-green-500 rounded-lg p-3 w-40">
        <p className="font-bold text-[#000000] text-center">Block #1</p>
        <div className="text-xs text-[#101010]">
          <p>Prev Hash: 0000</p>
          <p className="text-green-700">Hash: 1A2B3C</p>
          <p>Data: "Alice → Bob 5 BTC"</p>
          <p>Nonce: 1234</p>
        </div>
      </div>
      <span className="text-2xl text-gray-400">→</span>
      
      {/* Block 2 */}
      <div className="bg-blue-100 border-2 border-blue-500 rounded-lg p-3 w-40">
        <p className="font-bold text-[#000000] text-center">Block #2</p>
        <div className="text-xs text-[#101010]">
          <p>Prev Hash: <span className="text-green-700">1A2B3C</span></p>
          <p className="text-blue-700">Hash: 4D5E6F</p>
          <p>Data: "Bob → Charlie 2 BTC"</p>
          <p>Nonce: 5678</p>
        </div>
      </div>
      <span className="text-2xl text-gray-400">→</span>
      
      {/* Block 3 */}
      <div className="bg-purple-100 border-2 border-purple-500 rounded-lg p-3 w-40">
        <p className="font-bold text-[#000000] text-center">Block #3</p>
        <div className="text-xs text-[#101010]">
          <p>Prev Hash: <span className="text-blue-700">4D5E6F</span></p>
          <p className="text-purple-700">Hash: 7G8H9I</p>
          <p>Data: "Charlie → Dave 1 BTC"</p>
          <p>Nonce: 9012</p>
        </div>
      </div>
    </div>
    <p className="text-xs text-[#101010] mt-3 text-center">🔗 Each block contains the previous block's hash - like a fingerprint! Change one block, all following blocks break!</p>
  </div>
);

// ─────────────────────────────────────────────────────────────
// Q1 SECTION - ENHANCED
// ─────────────────────────────────────────────────────────────
const Q1Section = () => {
  const [tab, setTab] = useState("q1a");
  const tabs = [
    { key: "q1a", label: "A: Cryptography Terms" },
    { key: "q1b", label: "B: Stream Ciphers" },
    { key: "q1c", label: "C: CIA Triad (OR)" },
  ];

  return (
    <div>
      <SectionHeading emoji="📖" title="Question 1" subtitle="Definitions, Stream Ciphers, CIA Triad" marks="05" />
      
      <TabBar tabs={tabs} active={tab} onChange={setTab} />

      {tab === "q1a" && (
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <p className="text-[#101010] text-sm">
              <span className="font-medium">Q.1A:</span> Describe the following terms with a relevant example: (i) The field of cryptography (ii) non-repudiation (iii) replay attack
            </p>
          </div>

          <Card>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-gray-800 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">i</span>
              <SubHeading>The Field of Cryptography</SubHeading>
            </div>
            
            <p className="text-sm text-[#101010] mb-4">
              <span className="font-medium">Cryptography</span> is like writing secret messages that only the person you want can read! Imagine you and your best friend have a secret code language. When you write a note in that code, even if someone else finds it, they can't understand what it says. That's cryptography!
            </p>
            
            <ExampleBox emoji="📱" title="Real-life example: WhatsApp (Like passing notes in class!)">
              When you send a message on WhatsApp, it's like writing it in invisible ink. Your phone scrambles the message (encryption) so it looks like garbage to anyone who intercepts it. Only your friend's phone has the special decoder ring (decryption key) to unscramble it. Even WhatsApp themselves can't read your messages! It's like having a secret language that only you and your friend know.
            </ExampleBox>

            <Grid cols={2}>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-medium text-sm mb-2">🔐 Symmetric Cryptography</p>
                <p className="text-xs text-[#101010]">Same key to lock and unlock. Like having ONE key for your diary - you use the same key to lock it and open it.</p>
                <p className="text-xs text-gray-500 mt-2">Example: Your computer's hard drive password. The password creates a key that both locks and unlocks your files.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-medium text-sm mb-2">🔑 Asymmetric Cryptography</p>
                <p className="text-xs text-[#101010]">Two different keys: one to lock (public), one to unlock (private). Like a mailbox - anyone can drop mail in (public key), but only you have the key to open it (private key).</p>
                <p className="text-xs text-gray-500 mt-2">Example: Amazon's website. Your browser uses Amazon's public key to encrypt your credit card. Only Amazon's private key can decrypt it.</p>
              </div>
            </Grid>

            <div className="mt-4 p-3 bg-gray-50 rounded-lg">
              <p className="font-medium text-sm">Other types:</p>
              <BulletList items={[
                "Hash Functions: Like a fingerprint for data. SHA-256 turns your password into a unique code. Websites store this code, not your actual password!",
                "Digital Signatures: Like signing your name but digitally. Apple signs iOS updates so your iPhone knows they're really from Apple, not a hacker."
              ]} />
            </div>
          </Card>

          <Card>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-gray-800 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">ii</span>
              <SubHeading>Non-Repudiation (Can't Say "It Wasn't Me!")</SubHeading>
            </div>
            
            <p className="text-sm text-[#101010] mb-3">
              <span className="font-medium">Non-repudiation</span> means you CAN'T deny doing something. It's like having a video camera recording everything you do - you can't say "I didn't do that" because there's proof!
            </p>
            
            <ExampleBox emoji="✍️" title="Real-life example: ATM Card (The camera is watching!)">
              When you use your ATM card and enter PIN, the bank records everything: time, location, and creates a digital signature. Later, you CAN'T say "I didn't withdraw that money!" because the bank has cryptographic proof showing it was you. This is why banks always win disputes when your card was physically used with PIN - the digital signature is like your fingerprint on the transaction!
            </ExampleBox>
            
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="font-medium text-sm mb-2">How it works (Simple version):</p>
              <BulletList items={[
                "1️⃣ Alice writes a message and puts it in a box",
                "2️⃣ She seals it with wax and presses her unique ring (private key) - this is her digital signature",
                "3️⃣ Bob gets the box, checks the wax seal with Alice's public stamp (public key)",
                "4️⃣ If the seal matches, Alice can't say someone else sent it - only she has that ring!",
              ]} />
            </div>
          </Card>

          <Card>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-gray-800 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">iii</span>
              <SubHeading>Replay Attack (The Copycat Trick!)</SubHeading>
            </div>
            
            <p className="text-sm text-[#101010] mb-3">
              A <span className="font-medium">replay attack</span> is when a bad guy records your secret message and plays it back later to trick the system. Like if you say "Open Sesame" to a magic door, and someone records your voice and plays it later to open the door themselves!
            </p>
            
            <ExampleBox emoji="🎬" title="Real-life example: Garage Door Remote">
              Imagine your garage door remote sends a simple code: "101010" to open. A thief with a recording device stands nearby and captures that signal. Later, when you're not home, they play back that exact same signal - BEEP! Your garage opens! They never learned your code, they just copied and replayed it. This is exactly how some car thefts happen with keyless entry systems.
            </ExampleBox>
            
            <ExampleBox emoji="🏦" title="Banking Example (Real story!)">
              In 2016, hackers stole $1 million from a bank by capturing banking transfer requests and replaying them multiple times. The bank's computers saw each replayed message as a new, legitimate request. Like if you said "Send $100" and they recorded it and kept saying "Send $100" over and over!
            </ExampleBox>
            
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="font-medium text-sm mb-2">How to stop copycats:</p>
              <BulletList items={[
                "Nonce (Number used once) - Use a different number each time, like a password that changes every second",
                "Timestamps - Reject old messages. If a message is more than 5 seconds old, ignore it!",
                "Session tokens - Use short-lived tickets that expire quickly, like a day-pass to an amusement park",
                "Sequence numbers - Number your messages. If you get message #5 twice, you know something's wrong!"
              ]} />
            </div>
          </Card>
        </div>
      )}

      {tab === "q1b" && (
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <p className="text-[#101010] text-sm">
              <span className="font-medium">Q.1B:</span> Write a short note on Stream Ciphers with suitable examples.
            </p>
          </div>

          <Card>
            <SubHeading>Stream Ciphers (The One-Time Pad's Cousin)</SubHeading>
            <p className="text-sm text-[#101010] mb-3">
              A <span className="font-medium">stream cipher</span> encrypts data one tiny piece at a time (like one letter or one bit) by mixing it with a secret random-looking stream. Think of it like this: You have a message "HELLO". You generate a random stream "XMQZT". You mix them: H+X, E+M, L+Q, L+Z, O+T to get ciphertext. It's like adding secret ingredients one by one!
            </p>
            
            <FormulaBox formula="Ciphertext = Plaintext ⊕ Keystream" label="Encryption: Mix message with secret stream using XOR (like a special addition)" />
            
            <ExampleBox emoji="📻" title="Real-life example: Old WiFi (WEP) - The cautionary tale">
              The original WiFi security (WEP) used RC4 stream cipher. Imagine every packet of data was encrypted with a secret stream. But the secret stream was too short and got reused! It's like using the same password for every message. Attackers could collect enough packets to figure out the secret stream and crack the network in minutes. This is why we now have WPA2/WPA3 - lesson learned!
            </ExampleBox>
            
            <ExampleBox emoji="📱" title="Modern example: ChaCha20 (The speed demon)">
              ChaCha20 is a stream cipher used in modern HTTPS, VPNs, and Android. It's like a super-fast encryption machine. Google chose it for Android because it's faster than AES on phones (like a sports car vs a truck). It's used in TLS 1.3 (the lock icon in your browser), WireGuard VPN, and many secure apps.
            </ExampleBox>

            <Grid cols={2}>
              <div className="border border-gray-200 rounded-lg p-4 bg-green-50">
                <p className="font-medium text-sm mb-2 text-green-700">✅ Advantages (Why we like them)</p>
                <BulletList items={[
                  "Super fast - like a race car!",
                  "No waiting - encrypts as data arrives (great for video calls)",
                  "Perfect for real-time stuff like Netflix streaming",
                  "No wasted space (no padding)",
                  "If one bit gets corrupted, only that bit is affected"
                ]} />
              </div>
              <div className="border border-gray-200 rounded-lg p-4 bg-red-50">
                <p className="font-medium text-sm mb-2 text-red-700">❌ Disadvantages (Why we must be careful)</p>
                <BulletList items={[
                  "NEVER reuse the secret stream - catastrophic! (like using same password twice)",
                  "No built-in way to check if data was tampered with",
                  "Must stay perfectly synchronized - if you lose your place, everything breaks",
                  "Easy to flip bits if attacker knows what they're doing"
                ]} />
              </div>
            </Grid>

            <div className="mt-4">
              <p className="font-medium text-sm mb-2">Common Stream Ciphers:</p>
              <Grid cols={2}>
                <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                  <p className="font-medium text-sm text-red-800">RC4 (Retired - Too old!)</p>
                  <p className="text-xs text-[#101010]">Used in old WiFi (WEP) and old SSL. Now broken - like using a rusty lock. Banned from modern browsers.</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                  <p className="font-medium text-sm text-green-800">ChaCha20 (Modern champion)</p>
                  <p className="text-xs text-[#101010]">Current favorite! 256-bit key, super secure. Used in Chrome, Android, and modern VPNs.</p>
                </div>
              </Grid>
            </div>
          </Card>
        </div>
      )}

      {tab === "q1c" && (
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <p className="text-[#101010] text-sm">
              <span className="font-medium">Q.1C (OR):</span> Discuss the CIA Triad with suitable examples.
            </p>
          </div>

          <Card>
            <SubHeading>The CIA Triad (Not the spy agency!)</SubHeading>
            <p className="text-sm text-[#101010] mb-4">
              The CIA Triad is the three most important things in security. Think of it like protecting a treasure: You want to hide it (Confidentiality), make sure no one messes with it (Integrity), and be able to get it when you need it (Availability). Every security tool protects one of these!
            </p>
            
            <Grid cols={3}>
              <div className="border-l-4 border-blue-500 pl-3 bg-blue-50 p-2 rounded-r">
                <p className="font-medium text-lg mb-1">🔒 C</p>
                <p className="font-medium text-sm">Confidentiality</p>
                <p className="text-xs text-[#101010]">Keep secrets SECRET! Only the right people can see.</p>
              </div>
              <div className="border-l-4 border-green-500 pl-3 bg-green-50 p-2 rounded-r">
                <p className="font-medium text-lg mb-1">🛡️ I</p>
                <p className="font-medium text-sm">Integrity</p>
                <p className="text-xs text-[#101010]">Don't let bad guys CHANGE things!</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-3 bg-orange-50 p-2 rounded-r">
                <p className="font-medium text-lg mb-1">⚡ A</p>
                <p className="font-medium text-sm">Availability</p>
                <p className="text-xs text-[#101010]">Can use it WHEN you need it!</p>
              </div>
            </Grid>
            
            <ExampleBox emoji="🏥" title="Confidentiality - Your Medical Records">
              Your doctor's notes about you should be private - only you and your doctor can see them. Hospitals use passwords and encryption to make sure nurses only see relevant patients, and hackers can't steal the data. When Apple added medical records to iPhone, they encrypted them so even Apple can't read them. It's like having a private diary that only you and your doctor have the key to!
            </ExampleBox>
            
            <ExampleBox emoji="💾" title="Integrity - Software Downloads (The Tamper-Proof Seal)">
              When you download Ubuntu Linux, the website gives you a special code (SHA-256 hash). After downloading, you check if your file creates the same code. If it matches, the file is EXACTLY what the creators made - no one added viruses during download. It's like checking the seal on a medicine bottle to make sure no one tampered with it.
            </ExampleBox>
            
            <ExampleBox emoji="☁️" title="Availability - Google Services (Always There For You)">
              Google wants Gmail to work 99.99% of the time. They use multiple data centers worldwide - if one server breaks, another instantly takes over. Without availability, you couldn't check email when you need it most. It's like having backup generators in a hospital - the lights stay on even if power goes out!
            </ExampleBox>

            <Table 
              headers={["Principle", "Attack Example (What bad guys do)", "Protection (How we stop them)"]}
              rows={[
                ["Confidentiality", "Eavesdropping on WiFi (listening to your messages)", "Encryption (WPA3, HTTPS) - scramble messages!"],
                ["Integrity", "Man-in-the-middle (changing messages secretly)", "Digital signatures, HMAC - seal messages so you know if changed"],
                ["Availability", "DDoS attack (flooding with fake traffic)", "Load balancers, firewalls - filters and spreads out traffic"]
              ]}
            />
          </Card>
        </div>
      )}
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// Q2 SECTION — ATTACKS (ENHANCED)
// ─────────────────────────────────────────────────────────────
const Q2Section = () => {
  const [tab, setTab] = useState("overview");
  const tabs = [
    { key: "overview", label: "Overview" },
    { key: "passive", label: "Passive Attacks" },
    { key: "active", label: "Active Attacks" },
    { key: "comparison", label: "Comparison" },
  ];

  return (
    <div>
      <SectionHeading emoji="⚔️" title="Question 2" subtitle="Types of security attacks and their differences" marks="10" />
      
      <TabBar tabs={tabs} active={tab} onChange={setTab} />

      {tab === "overview" && (
        <Card>
          <SubHeading>What are Security Attacks? (The Bad Guys' Plans)</SubHeading>
          <p className="text-sm text-[#101010] mb-4">
            A security attack is any attempt by bad guys to break the CIA triad. Think of it like someone trying to either peek at your secrets (passive) or break/change your stuff (active).
          </p>
          
          <Grid cols={2}>
            <div className="border border-gray-200 rounded-lg p-5 bg-blue-50">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">👁️</span>
                <span className="font-medium text-lg text-[#000000]">Passive Attacks</span>
              </div>
              <p className="text-sm text-[#101010] mb-2">Like a spy - just watching, not touching. Hard to detect because they don't change anything.</p>
              <BulletList items={[
                "Eavesdropping (listening to conversations)",
                "Traffic analysis (watching WHO talks to WHO)",
                "Port scanning (checking which doors are open)"
              ]} />
            </div>
            
            <div className="border border-gray-200 rounded-lg p-5 bg-red-50">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">⚡</span>
                <span className="font-medium text-lg text-[#000000]">Active Attacks</span>
              </div>
              <p className="text-sm text-[#101010] mb-2">Like a vandal - breaking, changing, destroying. Makes noise, so easier to detect.</p>
              <BulletList items={[
                "Denial of Service (flooding until it crashes)",
                "Man-in-the-Middle (pretending to be both sides)",
                "Replay attacks (record and play back)",
                "Masquerade (pretending to be someone else)"
              ]} />
            </div>
          </Grid>
          
          <ExampleBox emoji="🎯" title="Why it matters how we classify attacks">
            <p>Different attacks need different defenses: </p>
            <p className="mt-1"><span className="font-medium">Passive attacks</span> are stopped by ENCRYPTION (scramble messages so spies see gibberish). </p>
            <p><span className="font-medium">Active attacks</span> need AUTHENTICATION (verify who sent it) and INTEGRITY CHECKS (make sure not changed).</p>
          </ExampleBox>
        </Card>
      )}

      {tab === "passive" && (
        <Card>
          <SubHeading>👁️ Passive Attacks (The Silent Spies)</SubHeading>
          <p className="text-sm text-[#101010] mb-4">
            The attacker just OBSERVES - like a ninja watching from the shadows. They don't touch anything, so you might never know they're there!
          </p>
          
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="font-medium text-base mb-2">📡 Eavesdropping (Sniffing) - Like listening at the door</p>
              <p className="text-sm text-[#101010] mb-2">Intercepting network traffic to capture unencrypted data.</p>
              <ExampleBox emoji="☕" title="Real-life: Public WiFi at Starbucks">
                On an unencrypted public WiFi, an attacker can run a program called Wireshark and see ALL internet traffic. If you log into a website without HTTPS (no lock icon), they see your username and password in plain text - like reading over your shoulder! This is why you should ALWAYS use a VPN on public WiFi - it's like talking in a private room instead of shouting in a crowded cafe.
              </ExampleBox>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="font-medium text-base mb-2">📊 Traffic Analysis - Watching the patterns</p>
              <p className="text-sm text-[#101010] mb-2">Analyzing communication patterns even when content is encrypted.</p>
              <ExampleBox emoji="🏢" title="Real-life: Corporate Espionage">
                Even if a company encrypts ALL emails, an attacker can see patterns: The CEO emails the law firm EVERY Monday at 9 AM, and the CFO emails the bank EVERY Friday at 3 PM. This reveals business relationships and timing of sensitive activities. It's like knowing someone visits a doctor every Tuesday - you don't know what they talk about, but you know they're seeing a doctor!
              </ExampleBox>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="font-medium text-base mb-2">🔍 Port Scanning - Checking for open doors</p>
              <p className="text-sm text-[#101010] mb-2">Scanning systems to discover open ports (like checking which doors are unlocked).</p>
              <ExampleBox emoji="🔓" title="Real-life: Reconnaissance before burglary">
                Before launching an attack, hackers use tools like Nmap to scan your computer. If they find port 22 open, they know you're running SSH (remote access). Then they can try to guess passwords or exploit known SSH weaknesses. It's like a burglar checking all your windows and doors before trying to break in!
              </ExampleBox>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="font-medium text-sm">🛡️ How to stop passive attacks:</p>
            <BulletList items={[
              "Encryption (HTTPS, VPN, WPA3) — makes sniffed data look like garbage",
              "Traffic padding — send fake traffic to hide real patterns (like adding noise)",
              "Firewalls — block unnecessary ports so they can't even see what's open"
            ]} />
          </div>
        </Card>
      )}

      {tab === "active" && (
        <Card>
          <SubHeading>⚡ Active Attacks (The Vandals and Thieves)</SubHeading>
          <p className="text-sm text-[#101010] mb-4">
            The attacker actively interferes - like a vandal spray-painting walls or a thief breaking in. They leave traces, but can cause immediate damage.
          </p>
          
          <div className="space-y-5">
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="font-medium text-base mb-2">🎭 Masquerade (Spoofing) - Identity theft</p>
              <p className="text-sm text-[#101010] mb-2">Attacker pretends to be someone else to gain access.</p>
              <ExampleBox emoji="📧" title="Real-life: Phishing emails">
                You get an email that looks EXACTLY like from your bank - same logo, same design. It says "Verify your account" with a link. The link goes to a fake website that LOOKS like your bank's. When you enter your username and password, the attacker captures them. It's like someone dressing up as a police officer to get into your house!
              </ExampleBox>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="font-medium text-base mb-2">🔄 Replay Attack - The recording trick</p>
              <p className="text-sm text-[#101010] mb-2">Capturing valid data and retransmitting it later.</p>
              <ExampleBox emoji="🚗" title="Real-life: Keyless Car Theft">
                Thieves use "relay boxes" - one stands near your house to capture your key fob's signal, another stands near your car. They relay the signal instantly, tricking the car into thinking the key is present. It unlocks and starts! They've replayed your key's signal without ever having the physical key. This is why you should keep keys in a Faraday pouch (blocks signals) at night.
              </ExampleBox>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="font-medium text-base mb-2">✏️ Message Modification - Changing the message</p>
              <p className="text-sm text-[#101010] mb-2">Intercepting and altering messages in transit.</p>
              <ExampleBox emoji="💵" title="Real-life: Banking Fraud (The $81 Million Heist)">
                In 2016, hackers intercepted SWIFT messages (banking transfer instructions) from Bangladesh Bank to the NY Fed. They modified the beneficiary details - instead of sending money to the intended recipients, they changed it to accounts in the Philippines and stole $81 million. It's like intercepting a letter and changing the address before it's delivered!
              </ExampleBox>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="font-medium text-base mb-2">💥 Denial of Service (DDoS) - The crowd that blocks the door</p>
              <p className="text-sm text-[#101010] mb-2">Overwhelming a system so legitimate users can't access it.</p>
              <ExampleBox emoji="🎮" title="Real-life: The Day the Internet Broke (2016)">
                The Mirai botnet used 600,000 infected devices (security cameras, routers) to launch a massive attack against Dyn DNS. This took down Twitter, Netflix, Reddit, and Spotify for hours. It's like 600,000 people all trying to enter a store at once - real customers can't get in!
              </ExampleBox>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="font-medium text-base mb-2">🕵️ Man-in-the-Middle (MITM) - The eavesdropper who talks too</p>
              <p className="text-sm text-[#101010] mb-2">Attacker positions themselves between two parties.</p>
              <ExampleBox emoji="☕" title="Real-life: Evil Twin WiFi (Fake Starbucks WiFi)">
                An attacker sets up a rogue WiFi hotspot named "Starbucks WiFi" at a coffee shop. When you connect, all your traffic goes through their laptop. They can see everything and even modify responses - like showing you a fake bank login page when you try to visit your real bank. It's like the postman opening your mail, reading it, resealing it, and maybe changing what's inside!
              </ExampleBox>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="font-medium text-base mb-2">💉 SQL Injection - Tricking the database</p>
              <p className="text-sm text-[#101010] mb-2">Inserting malicious code into web forms to steal data.</p>
              <ExampleBox emoji="💳" title="Real-life: Heartland Payment Systems (130 million cards stolen)">
                Attackers used SQL injection to breach Heartland Payment Systems in 2008, exposing 130 million credit card numbers. They entered special code into web forms that tricked the database into dumping all stored data. It's like asking a teller "Can I see my account?" and them handing you EVERYONE'S account info!
              </ExampleBox>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-200">
            <p className="font-medium text-sm">🛡️ How to stop active attacks:</p>
            <BulletList items={[
              "Authentication (MFA, digital certificates) - prove who you are",
              "Integrity checks (digital signatures, HMAC) - verify nothing changed",
              "Timestamps and nonces (prevent replay) - reject old messages",
              "Input validation (prevent injection) - check form inputs carefully",
              "DDoS protection (rate limiting, cloud mitigation) - filter out fake traffic"
            ]} />
          </div>
        </Card>
      )}

      {tab === "comparison" && (
        <Card>
          <SubHeading>Passive vs Active Attacks: Who's Worse?</SubHeading>
          
          <Table 
            headers={["Feature", "Passive Attack (The Spy)", "Active Attack (The Vandal)"]}
            rows={[
              ["Do they change data?", "❌ No - just watch", "✅ Yes - modify/destroy"],
              ["Can you detect them?", "Very hard - leave no traces", "Possible - leave evidence"],
              ["What do they break?", "Confidentiality (secrets)", "Integrity, Availability (trust and access)"],
              ["Their goal?", "Gather information silently", "Disrupt, steal, cause chaos"],
              ["Examples", "Eavesdropping, traffic analysis", "DoS, MITM, replay, SQL injection"],
              ["Best defense", "Encryption (scramble data)", "Authentication + Integrity checks"]
            ]}
          />
          
          <ExampleBox emoji="📊" title="Key takeaway for your exam">
            <p className="font-medium">Passive attacks = confidentiality violations (secrets leaked)</p>
            <p className="font-medium">Active attacks = integrity/availability violations (trust broken)</p>
            <p className="mt-2">Good security needs BOTH: encryption stops passive spies, while authentication and integrity checks stop active vandals.</p>
          </ExampleBox>
        </Card>
      )}
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// Q3 SECTION — OSI MODEL (ENHANCED WITH COLOR VISUAL)
// ─────────────────────────────────────────────────────────────
const Q3Section = () => {
  const [tab, setTab] = useState("osi");
  const tabs = [
    { key: "osi", label: "OSI Architecture" },
    { key: "transport", label: "Transport Layer" },
    { key: "security", label: "Security in Transport" },
  ];

  return (
    <div>
      <SectionHeading emoji="🏗️" title="Question 3" subtitle="OSI Layer Architecture and Transport Layer security" marks="10" />
      
      <TabBar tabs={tabs} active={tab} onChange={setTab} />

      {tab === "osi" && (
        <Card>
          <SubHeading>OSI Model (The 7-Layer Cake of Networking)</SubHeading>
          <p className="text-sm text-[#101010] mb-4">
            The OSI model is like a 7-layer cake - each layer has a specific job and serves the layer above it. Think of it as how data travels from your app to the wire and back!
          </p>
          
          <OSIModelVisual />
          
          <ExampleBox emoji="📦" title="Analogy: Shipping a Package (The OSI Way)">
            <p className="mb-2"><strong>Layer 7 (Application):</strong> The GIFT you're sending (the actual message).</p>
            <p><strong>Layer 4 (Transport):</strong> Putting it in a BOX with tracking number (TCP segments, port numbers).</p>
            <p><strong>Layer 3 (Network):</strong> Writing the ADDRESS on the box (IP addresses).</p>
            <p><strong>Layer 2 (Data Link):</strong> Putting it on the right TRUCK for the next stop (MAC addresses).</p>
            <p><strong>Layer 1 (Physical):</strong> The TRUCK driving on the road (electrical signals through cables).</p>
          </ExampleBox>
          
          <ExampleBox emoji="🌐" title="Real-world: What happens when you visit Google.com">
            <p className="mb-2">1. <span className="font-medium">Application (L7):</span> Your browser says "I want Google.com!" (HTTP request)</p>
            <p>2. <span className="font-medium">Transport (L4):</span> TCP chops the request into pieces, numbers them, adds port 443</p>
            <p>3. <span className="font-medium">Network (L3):</span> IP adds your address and Google's address</p>
            <p>4. <span className="font-medium">Data Link (L2):</span> Ethernet adds the next hop's MAC address</p>
            <p>5. <span className="font-medium">Physical (L1):</span> Signals travel through WiFi/cables as electricity or radio waves</p>
            <p className="mt-2 text-xs text-gray-600">Then Google's computer does the reverse - unwrapping each layer until it gets your request!</p>
          </ExampleBox>
          
          <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
            <p className="font-medium text-sm">📝 Memory Trick for Layers (from bottom to top):</p>
            <p className="font-mono text-sm">Please Do Not Throw Sausage Pizza Away</p>
            <p className="text-xs text-gray-600">Physical → Data Link → Network → Transport → Session → Presentation → Application</p>
          </div>
        </Card>
      )}

      {tab === "transport" && (
        <Card>
          <SubHeading>Transport Layer (Layer 4) - The Delivery Service</SubHeading>
          <p className="text-sm text-[#101010] mb-3">
            This layer is like a delivery service - it decides HOW to send your data. Two options: Reliable but slower (TCP) or Fast but might lose stuff (UDP).
          </p>
          
          <Grid cols={2}>
            <div className="border-2 border-blue-400 rounded-lg p-4 bg-blue-50">
              <p className="font-medium text-lg mb-2 text-blue-800">🚚 TCP (The Careful Carrier)</p>
              <p className="text-xs text-gray-600 mb-2">Transmission Control Protocol</p>
              <BulletList items={[
                "📞 Connection-oriented (calls first, then talks)",
                "✅ Reliable (asks 'Did you get that?' and resends if not)",
                "📋 Ordered delivery (puts messages in correct order)",
                "🚦 Flow control (doesn't overwhelm the receiver)",
                "🌐 Used for: Web browsing, Email, File transfers"
              ]} />
              <p className="text-xs mt-2 text-blue-700">Like a registered mail with tracking and delivery confirmation!</p>
            </div>
            
            <div className="border-2 border-green-400 rounded-lg p-4 bg-green-50">
              <p className="font-medium text-lg mb-2 text-green-800">✈️ UDP (The Fast Flyer)</p>
              <p className="text-xs text-gray-600 mb-2">User Datagram Protocol</p>
              <BulletList items={[
                "📢 Connectionless (just starts talking)",
                "❌ Unreliable (doesn't check if received)",
                "📦 No ordering (packets may arrive out of order)",
                "⚡ No flow control (just sends as fast as possible)",
                "🎮 Used for: Video calls, Gaming, DNS, Streaming"
              ]} />
              <p className="text-xs mt-2 text-green-700">Like throwing paper airplanes - fast, but some might get lost!</p>
            </div>
          </Grid>
          
          <ExampleBox emoji="🤝" title="TCP 3-Way Handshake (The Polite Conversation)">
            <p className="font-mono text-sm">
              <span className="text-blue-600">Client → Server:</span> "Hi, can we talk? (SYN)"<br/>
              <span className="text-green-600">Server → Client:</span> "Sure! Let's talk (SYN-ACK)"<br/>
              <span className="text-purple-600">Client → Server:</span> "Great! Starting conversation (ACK)"<br/>
              <span className="text-gray-500 text-xs">Connection established! Now data can flow both ways.</span>
            </p>
          </ExampleBox>
          
          <ExampleBox emoji="🎮" title="Real-life: Gaming vs Web Browsing (TCP vs UDP)">
            <p><strong>🌐 Web browsing (TCP):</strong> When you load a webpage, EVERY byte must arrive correctly. If a packet is lost, TCP says "Wait, I didn't get that part!" and asks for it again. The page loads perfectly, even if slightly slower.</p>
            <p className="mt-2"><strong>🎮 Online gaming (UDP):</strong> In a fast game like Call of Duty, OLD data is useless. If a packet is lost describing where an enemy was 0.1 seconds ago, who cares? Just send the NEW position! UDP's speed matters more than perfect delivery.</p>
          </ExampleBox>
          
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p className="font-medium text-sm">Transport layer's main jobs:</p>
            <BulletList items={[
              "Segmentation & reassembly - chopping data into pieces and putting back together",
              "Port multiplexing - letting multiple apps (email, browser, games) share the same internet connection",
              "Error detection - checking if data got corrupted",
              "Flow control - making sure fast sender doesn't overwhelm slow receiver"
            ]} />
          </div>
        </Card>
      )}

      {tab === "security" && (
        <Card>
          <SubHeading>Security at Transport Layer (TLS - The Bodyguard)</SubHeading>
          <p className="text-sm text-[#101010] mb-3">
            <span className="font-medium">TLS (Transport Layer Security)</span> is like a bodyguard for your data. It sits between your app and the transport layer, making sure no one eavesdrops or tampers with your messages.
          </p>
          
          <ExampleBox emoji="🔒" title="How HTTPS (HTTP + TLS) Works - The Secret Handshake">
            <p className="mb-2"><strong>Step 1: TCP Handshake</strong> - Client and server agree to talk</p>
            <p><strong>Step 2: TLS Handshake (The Secret Introduction)</strong></p>
            <p className="ml-4">• Client: "I support these encryption methods..."</p>
            <p className="ml-4">• Server: "Here's my ID card (certificate) with my public key"</p>
            <p className="ml-4">• Client: "Let me verify this ID with my trusted list (Certificate Authorities)"</p>
            <p className="ml-4">• Both: "Let's create a shared secret key that only we know"</p>
            <p><strong>Step 3: Encrypted Conversation</strong> - All data is now scrambled with AES</p>
          </ExampleBox>
          
          <ExampleBox emoji="🏦" title="Real-life: Online Banking - Why You See the Padlock">
            <p>When you log into your bank at https://yourbank.com:</p>
            <p className="ml-2">✓ TLS ensures you're ACTUALLY talking to your bank (the server's ID card is verified by trusted authorities like VeriSign)</p>
            <p className="ml-2">✓ Your login credentials are ENCRYPTED (no one on public WiFi can see them)</p>
            <p className="ml-2">✓ Transaction details CAN'T be modified in transit (if someone tries, TLS detects it)</p>
            <p className="ml-2">✓ Even if someone RECORDS all traffic, they can't decrypt it later (forward secrecy in TLS 1.3)</p>
            <p className="mt-2 text-xs">That little padlock in your browser means TLS is working!</p>
          </ExampleBox>
          
          <Grid cols={2}>
            <div className="border border-gray-200 rounded-lg p-4 bg-green-50">
              <p className="font-medium text-sm mb-2 text-green-800">✨ TLS 1.3 Features (Modern Security)</p>
              <BulletList items={[
                "Faster handshake (1-RTT) - fewer round trips",
                "Forward secrecy by default - past recordings can't be decrypted later",
                "Removed old, weak algorithms",
                "0-RTT resumption - faster reconnections"
              ]} />
            </div>
            <div className="border border-gray-200 rounded-lg p-4 bg-red-50">
              <p className="font-medium text-sm mb-2 text-red-800">⚠️ Historical Attacks on TLS</p>
              <BulletList items={[
                "SSL stripping - attacker forces downgrade to unencrypted HTTP",
                "POODLE - padding oracle attack on SSL 3.0",
                "BEAST - IV prediction attack on TLS 1.0",
                "Heartbleed - bug in OpenSSL that leaked memory"
              ]} />
            </div>
          </Grid>
          
          <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <p className="font-medium text-sm">⚠️ Important: TLS is NOT a magic shield!</p>
            <BulletList items={[
              "TLS protects data IN TRANSIT, not data stored on servers",
              "The server itself can still be hacked (TLS won't prevent SQL injection)",
              "Certificate authorities can be compromised (like DigiNotar in 2011)",
              "Users must CHECK for HTTPS - look for the padlock!"
            ]} />
          </div>
        </Card>
      )}
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// Q4 SECTION — TRANSPOSITION CIPHER (ENHANCED WITH VISUALS)
// ─────────────────────────────────────────────────────────────
const Q4Section = () => {
  const [tab, setTab] = useState("intro");
  const tabs = [
    { key: "intro", label: "Concept" },
    { key: "railfence", label: "Rail Fence" },
    { key: "columnar", label: "Columnar" },
    { key: "double", label: "Double Transposition" },
  ];

  return (
    <div>
      <SectionHeading emoji="🔀" title="Question 4" subtitle="Transposition Cipher concepts and examples" marks="10" />
      
      <TabBar tabs={tabs} active={tab} onChange={setTab} />

      {tab === "intro" && (
        <Card>
          <SubHeading>What is a Transposition Cipher? (The Scrambler)</SubHeading>
          <p className="text-sm text-[#101010] mb-3">
            A <span className="font-medium">transposition cipher</span> is like rearranging the letters in a word. The letters themselves stay the SAME, but their ORDER changes. Like turning "HELLO" into "OLLEH" - same letters, different positions!
          </p>
          
          <ExampleBox emoji="🧩" title="Simple analogy: Puzzle Pieces">
            <p>Write your message on a strip of paper: "SECRET MESSAGE"</p>
            <p>Cut it into individual letters: S E C R E T  M E S S A G E</p>
            <p>Rearrange them according to a secret pattern: E S R C E T A G E S M S E</p>
            <p>Your friend knows the pattern and puts them back in the correct order to read the message. The letters themselves never change - just their positions!</p>
          </ExampleBox>
          
          <Grid cols={2}>
            <div className="border-2 border-blue-400 rounded-lg p-4 bg-blue-50">
              <p className="font-medium text-sm mb-2 text-blue-800">🔀 Transposition (Scrambling)</p>
              <BulletList items={[
                "Letters are REARRANGED",
                "Same letters appear - just in different order",
                "Letter frequencies stay the same (E still appears 3 times)",
                "Examples: Rail fence, Columnar, Route ciphers"
              ]} />
            </div>
            <div className="border-2 border-green-400 rounded-lg p-4 bg-green-50">
              <p className="font-medium text-sm mb-2 text-green-800">🔄 Substitution (Replacing)</p>
              <BulletList items={[
                "Letters are REPLACED with different ones",
                "Different letters appear (A becomes D, B becomes E, etc.)",
                "Letter frequencies change",
                "Examples: Caesar cipher, Vigenère, Enigma"
              ]} />
            </div>
          </Grid>
          
          <div className="mt-4 p-4 bg-gray-50 rounded-lg text-center font-mono">
            <p className="mb-2">Plaintext:  <span className="bg-white px-2 py-1 border border-gray-300">HELLO WORLD</span></p>
            <p className="text-gray-400">↓ Reverse (simplest transposition)</p>
            <p className="bg-white px-2 py-1 border border-gray-300">DLROW OLLEH</p>
            <p className="text-xs text-gray-500 mt-2">Same letters, different order! The H moved from first to last.</p>
          </div>
        </Card>
      )}

      {tab === "railfence" && (
        <Card>
          <SubHeading>Rail Fence Cipher (The Zigzag)</SubHeading>
          <p className="text-sm text-[#101010] mb-3">
            Write the message in a zigzag pattern across multiple "rails" (rows), like a fence, then read row by row to get the ciphertext.
          </p>
          
          <div className="grid grid-cols-3 gap-3 mb-4">
            <StepCard step="1" title="Choose rails" desc="Number of rows = your key (like 3 rails)" />
            <StepCard step="2" title="Write zigzag" desc="Letters go diagonally down, then up, like a snake" />
            <StepCard step="3" title="Read row by row" desc="Take all letters from Row 1, then Row 2, then Row 3" />
          </div>
          
          <RailFenceVisual />
          
          <ExampleBox emoji="📝" title="Step-by-step with 'WEAREDISCOVEREDFLEEATONCE' (3 rails)">
            <p><strong>Step 1:</strong> Write in zigzag (dots show empty spaces):</p>
            <div className="font-mono text-sm bg-white p-2 rounded border border-gray-200">
              <p className="text-red-600">W . . . E . . . S . . . R . . . L . . . T</p>
              <p className="text-blue-600">. E . R . D . S . O . E . E . F . E . A . O . C . E</p>
              <p className="text-green-600">. . A . . . I . . . C . . . D . . . E . . . N</p>
            </div>
            <p className="mt-2"><strong>Step 2:</strong> Read each row:</p>
            <p>Row 1 (red): W E S R L T</p>
            <p>Row 2 (blue): E R D S O E E F E A O C E</p>
            <p>Row 3 (green): A I C D E N</p>
            <p className="mt-2"><strong>Step 3:</strong> Combine: WESRLT + ERDSOEEFEAOCE + AICDEN = <span className="font-mono bg-gray-100 p-1">WESRLTERDSOEEFEAOCEAICDEN</span></p>
          </ExampleBox>
          
          <ExampleBox emoji="💡" title="Decryption (How to unscramble)">
            <p>To decrypt, you need to know the number of rails:</p>
            <p>1. Calculate the pattern of how many letters go on each rail</p>
            <p>2. Place ciphertext letters into rails following the same zigzag pattern</p>
            <p>3. Read diagonally to recover plaintext</p>
            <p className="text-xs text-gray-500 mt-1">It's like putting the fence back together!</p>
          </ExampleBox>
        </Card>
      )}

      {tab === "columnar" && (
        <Card>
          <SubHeading>Columnar Transposition (The Grid Scrambler)</SubHeading>
          <p className="text-sm text-[#101010] mb-3">
            Write the message in rows of fixed width, then read columns in an order determined by a keyword. Like writing in a grid and then reading top-to-bottom in a secret column order!
          </p>
          
          <ColumnarVisual />
          
          <ExampleBox emoji="📊" title="Complete example with key 'ZEBRAS'">
            <p className="mb-2">Plaintext: WEAREDISCOVEREDFLEEATONCE</p>
            <p className="mb-2">Step 1: Write in rows of 6 (pad with X if needed):</p>
            <div className="grid grid-cols-6 gap-1 max-w-md mx-auto font-mono text-sm mb-3">
              <div className="bg-gray-200 text-center p-1 font-bold">Z(6)</div>
              <div className="bg-gray-200 text-center p-1 font-bold">E(3)</div>
              <div className="bg-gray-200 text-center p-1 font-bold">B(1)</div>
              <div className="bg-gray-200 text-center p-1 font-bold">R(5)</div>
              <div className="bg-gray-200 text-center p-1 font-bold">A(2)</div>
              <div className="bg-gray-200 text-center p-1 font-bold">S(4)</div>
              
              <div className="border p-1 text-center">W</div><div className="border p-1 text-center">E</div><div className="border p-1 text-center">A</div><div className="border p-1 text-center">R</div><div className="border p-1 text-center">E</div><div className="border p-1 text-center">D</div>
              <div className="border p-1 text-center">I</div><div className="border p-1 text-center">S</div><div className="border p-1 text-center">C</div><div className="border p-1 text-center">O</div><div className="border p-1 text-center">V</div><div className="border p-1 text-center">E</div>
              <div className="border p-1 text-center">R</div><div className="border p-1 text-center">E</div><div className="border p-1 text-center">D</div><div className="border p-1 text-center">F</div><div className="border p-1 text-center">L</div><div className="border p-1 text-center">E</div>
              <div className="border p-1 text-center">E</div><div className="border p-1 text-center">A</div><div className="border p-1 text-center">T</div><div className="border p-1 text-center">O</div><div className="border p-1 text-center">N</div><div className="border p-1 text-center">C</div>
              <div className="border p-1 text-center bg-gray-100">X</div><div className="border p-1 text-center bg-gray-100">X</div><div className="border p-1 text-center bg-gray-100">X</div><div className="border p-1 text-center bg-gray-100">X</div><div className="border p-1 text-center bg-gray-100">X</div><div className="border p-1 text-center bg-gray-100">X</div>
            </div>
            
            <p>Step 2: Read columns in key order (B=1, A=2, E=3, S=4, R=5, Z=6):</p>
            <div className="grid grid-cols-6 gap-1 max-w-md mx-auto font-mono text-sm mb-2">
              <div className="bg-green-200 p-1 text-center font-bold">Col B(1)</div>
              <div className="bg-orange-200 p-1 text-center font-bold">Col A(2)</div>
              <div className="bg-blue-200 p-1 text-center font-bold">Col E(3)</div>
              <div className="bg-red-200 p-1 text-center font-bold">Col S(4)</div>
              <div className="bg-yellow-200 p-1 text-center font-bold">Col R(5)</div>
              <div className="bg-purple-200 p-1 text-center font-bold">Col Z(6)</div>
              
              <div className="border p-1 text-center">A</div><div className="border p-1 text-center">E</div><div className="border p-1 text-center">E</div><div className="border p-1 text-center">D</div><div className="border p-1 text-center">R</div><div className="border p-1 text-center">W</div>
              <div className="border p-1 text-center">C</div><div className="border p-1 text-center">S</div><div className="border p-1 text-center">S</div><div className="border p-1 text-center">E</div><div className="border p-1 text-center">O</div><div className="border p-1 text-center">I</div>
              <div className="border p-1 text-center">D</div><div className="border p-1 text-center">E</div><div className="border p-1 text-center">E</div><div className="border p-1 text-center">E</div><div className="border p-1 text-center">F</div><div className="border p-1 text-center">R</div>
              <div className="border p-1 text-center">T</div><div className="border p-1 text-center">A</div><div className="border p-1 text-center">A</div><div className="border p-1 text-center">C</div><div className="border p-1 text-center">O</div><div className="border p-1 text-center">E</div>
              <div className="border p-1 text-center bg-gray-100">X</div><div className="border p-1 text-center bg-gray-100">X</div><div className="border p-1 text-center bg-gray-100">X</div><div className="border p-1 text-center bg-gray-100">X</div><div className="border p-1 text-center bg-gray-100">X</div><div className="border p-1 text-center bg-gray-100">X</div>
            </div>
            
            <p>Step 3: Concatenate columns in order:</p>
            <p className="font-mono bg-gray-100 p-2 rounded mt-2">ACDTX · EEANX · ESEAX · EECCX · ORFOX · WIDRX</p>
            <p className="text-xs text-gray-500 mt-1">Ciphertext: ACDTXEEANXESEAXEECCXORFOXWIDRX</p>
          </ExampleBox>
          
          <ExampleBox emoji="🪖" title="Historical use: ADFGVX Cipher (WWI - Saved Paris?)">
            <p>Germany used a complex cipher combining substitution and columnar transposition during WWI. French cryptanalyst Georges Painvin cracked it in June 1918 after months of work. This helped the Allies anticipate a German offensive and potentially saved Paris from capture. Sometimes cryptography wins wars!</p>
          </ExampleBox>
        </Card>
      )}

      {tab === "double" && (
        <Card>
          <SubHeading>Double Transposition (Double the Protection)</SubHeading>
          <p className="text-sm text-[#101010] mb-3">
            Apply columnar transposition <span className="font-medium">TWICE</span> with two different keys. The ciphertext of the first transposition becomes the plaintext for the second. It's like putting your secret in a box, then putting THAT box inside another box with different locks!
          </p>
          
          <ExampleBox emoji="🎁" title="Analogy: Russian Dolls">
            <p>Put your secret in a box and lock it with Key #1 (first transposition).</p>
            <p>Then put that locked box inside a SECOND box and lock it with Key #2 (second transposition).</p>
            <p>Even if someone breaks the outer lock (Key #2), they still face the inner lock (Key #1)!</p>
            <p className="mt-1">Double transposition = double the work for attackers.</p>
          </ExampleBox>
          
          <div className="bg-gray-50 p-4 rounded-lg my-4 border-2 border-gray-300">
            <p className="font-medium text-center text-[#000000]">Plaintext → Columnar #1 (Key1) → Intermediate → Columnar #2 (Key2) → Ciphertext</p>
          </div>
          
          <Grid cols={2}>
            <div className="border-2 border-green-400 p-4 rounded-lg bg-green-50">
              <p className="font-medium text-sm mb-2 text-green-800">💪 Why double is MUCH stronger:</p>
              <BulletList items={[
                "Two independent keys - must know BOTH",
                "For 8-column key: (8!)² ≈ 1.6 BILLION combinations",
                "Single transposition: only 40,320 possibilities",
                "Destroys patterns left by first transposition",
                "Resistant to anagramming attacks"
              ]} />
            </div>
            <div className="border-2 border-blue-400 p-4 rounded-lg bg-blue-50">
              <p className="font-medium text-sm mb-2 text-blue-800">📜 Historical use:</p>
              <BulletList items={[
                "German Wehrmacht (WWII) field communications",
                "Each unit had daily key tables that changed every 24 hours",
                "SOE agents used poem-based keys (memorized poems)",
                "Bletchley Park needed days or weeks to crack"
              ]} />
            </div>
          </Grid>
          
          <ExampleBox emoji="🕵️" title="SOE Secret Agents (WWII) - The Poem Cipher">
            <p>British Special Operations Executive agents parachuted into Nazi-occupied France used double transposition with POEM ciphers. They memorized a poem (like "The Road Not Taken" by Robert Frost) and used words from it as BOTH keys. </p>
            <p className="mt-1">Nothing was written down - if captured, they had no incriminating documents. The poem provided the column order for both transpositions. The Germans could capture the agent, but unless they knew which poem and which words, they couldn't decrypt messages!</p>
            <p className="mt-1 text-xs">This is why double transposition was so valuable - no written keys to find!</p>
          </ExampleBox>
        </Card>
      )}
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// Q5 SECTION — BLOCKCHAIN + DES (ENHANCED)
// ─────────────────────────────────────────────────────────────
const Q5Section = () => {
  const [tab, setTab] = useState("blockchain");
  const tabs = [
    { key: "blockchain", label: "Blockchain" },
    { key: "crypto", label: "Cryptocurrency" },
    { key: "types", label: "Currency Types" },
    { key: "lawenf", label: "Law Enforcement" },
    { key: "des", label: "DES (OR)" },
  ];

  return (
    <div>
      <SectionHeading emoji="⛓️" title="Question 5" subtitle="Blockchain, Cryptocurrency, and DES encryption" marks="10" />
      
      <TabBar tabs={tabs} active={tab} onChange={setTab} />

      {tab === "blockchain" && (
        <Card>
          <SubHeading>What is Blockchain? (The Unchangeable Digital Ledger)</SubHeading>
          <p className="text-sm text-[#101010] mb-3">
            A <span className="font-medium">blockchain</span> is like a shared notebook that thousands of people all have copies of. Once something is written in it, it can NEVER be erased or changed! Each page (block) is connected to the one before it with a special code (hash).
          </p>
          
          <BlockchainVisual />
          
          <ExampleBox emoji="📚" title="Simple explanation: The Class Notebook That Everyone Has">
            <p>Imagine a notebook where every student in class has an identical copy. Every 10 minutes, a new page (block) is added with the day's transactions (like "Alice paid Bob $5").</p>
            <p className="mt-1">To change an old page, you'd have to change it in ALL copies simultaneously - which is impossible when thousands of people have copies! That's why blockchain is called 'immutable' - it cannot be changed.</p>
            <p className="mt-1">If one person tries to cheat and change their copy, everyone else's copies won't match, so they'd know someone's cheating!</p>
          </ExampleBox>
          
          <div className="border border-gray-200 rounded-lg p-4 my-4 bg-gray-50">
            <p className="font-medium text-sm mb-3 text-[#000000]">🔨 Anatomy of a Block (What's Inside):</p>
            <Grid cols={2}>
              <BulletList items={[
                "🔢 Block number (like page 42)",
                "📅 Timestamp (when it was added)",
                "📋 Transaction data (who paid whom)",
                "🔗 Previous block's hash (fingerprint of previous page)",
                "#️⃣ Current block's hash (this page's fingerprint)",
                "🎲 Nonce (special number miners find)"
              ]} />
              <div className="bg-gray-800 text-green-100 p-3 rounded-lg font-mono text-xs">
                <p>┌─────────────────┐</p>
                <p>│   BLOCK #42     │</p>
                <p>├─────────────────┤</p>
                <p>│ Prev: 0000...a1b2│</p>
                <p>│ Hash: 0000...c3d4│</p>
                <p>│ Nonce: 123456    │</p>
                <p>│ Data:            │</p>
                <p>│  • Alice→Bob 5 BTC│</p>
                <p>│  • Bob→Charlie 2 │</p>
                <p>└─────────────────┘</p>
              </div>
            </Grid>
          </div>
          
          <ExampleBox emoji="₿" title="Real-life example: Bitcoin (The First Blockchain)">
            <p><strong>2008:</strong> Someone named Satoshi Nakamoto (nobody knows who!) invented Bitcoin.</p>
            <p><strong>How it works:</strong> Miners compete to add new blocks by solving a SUPER hard math puzzle (proof-of-work). They have to find a special number (nonce) so that when you hash the block, it starts with many zeros. This takes enormous computing power - like finding a needle in a haystack!</p>
            <p><strong>Why it's secure:</strong> Once a block is added, changing it would require redoing ALL subsequent blocks - which would cost millions of dollars in electricity. So it's practically impossible to cheat!</p>
          </ExampleBox>
          
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <p className="font-medium text-sm text-[#000000]">✨ Key blockchain properties (Remember these for exam!):</p>
            <BulletList items={[
              "Decentralized — no single person/boss controls it (no central bank)",
              "Immutable — once written, CAN'T be changed (like carved in stone)",
              "Transparent — all transactions are public (anyone can see them)",
              "Consensus-based — 51% of nodes must agree on new blocks",
              "Pseudonymous — you have an address, not your name (like a PO box)"
            ]} />
          </div>
        </Card>
      )}

      {tab === "crypto" && (
        <Card>
          <SubHeading>Cryptocurrency & Digital Cash (Internet Money)</SubHeading>
          <p className="text-sm text-[#101010] mb-3">
            Cryptocurrency is digital money that uses cryptography for security and runs on blockchain. No banks, no governments - just math and code!
          </p>
          
          <ExampleBox emoji="💸" title="How a Bitcoin transaction works (Step by step)">
            <p className="mb-2"><strong>1. Initiate:</strong> Alice wants to send 1 BTC to Bob. She opens her wallet app, enters Bob's address, and clicks Send.</p>
            <p><strong>2. Sign:</strong> Her wallet signs the transaction with her PRIVATE key (like a digital signature proving she owns the coins).</p>
            <p><strong>3. Broadcast:</strong> The transaction is shouted out to all Bitcoin nodes worldwide - "Hey everyone, Alice is sending 1 BTC to Bob!"</p>
            <p><strong>4. Validate:</strong> Every node checks: "Does Alice really have 1 BTC? Is her signature valid?"</p>
            <p><strong>5. Mine:</strong> Miners collect many transactions and race to add them to the next block (solve the puzzle).</p>
            <p><strong>6. Confirm:</strong> After 6 more blocks are added (~1 hour), it's FINAL - irreversible forever!</p>
          </ExampleBox>
          
          <Grid cols={2} className="mb-4">
            <div className="border-2 border-orange-400 p-4 rounded-lg bg-orange-50">
              <p className="font-medium text-lg text-orange-800">₿ Bitcoin (BTC)</p>
              <p className="text-xs text-[#101010]">Digital gold, store of value. Only 21 million will ever exist. Created by mysterious Satoshi Nakamoto in 2008. Uses SHA-256 proof-of-work mining.</p>
            </div>
            <div className="border-2 border-blue-400 p-4 rounded-lg bg-blue-50">
              <p className="font-medium text-lg text-blue-800">⟠ Ethereum (ETH)</p>
              <p className="text-xs text-[#101010]">Programmable blockchain with smart contracts (automatic agreements). Powers DeFi (decentralized finance), NFTs, DAOs. Switched to proof-of-stake in 2022 (The Merge) - uses 99% less energy!</p>
            </div>
          </Grid>
          
          <Table 
            headers={["Feature", "Cryptocurrency", "Traditional Money"]}
            rows={[
              ["Control", "No boss - decentralized", "Central bank/government"],
              ["Transaction time", "Minutes to hours", "Seconds to days"],
              ["Privacy", "Pseudonymous (addresses)", "Identity-tracked (your name)"],
              ["Reversible", "NO - final forever!", "Yes (chargebacks possible)"],
              ["Supply", "Fixed by code (21M BTC)", "Govt can print more anytime"]
            ]}
          />
          
          <ExampleBox emoji="🏦" title="Why do people use crypto?">
            <p>✓ Send money anywhere in the world - no bank holidays, no borders</p>
            <p>✓ No inflation - government can't print more Bitcoin</p>
            <p>✓ No censorship - nobody can block your transactions</p>
            <p>✓ You control your money - not a bank</p>
            <p className="text-xs text-gray-500 mt-1">But also risky: price goes up and down wildly, and if you lose your password, money is gone forever!</p>
          </ExampleBox>
        </Card>
      )}

      {tab === "types" && (
        <Card>
          <SubHeading>Types of Currency in Blockchain (Different Kinds of Crypto)</SubHeading>
          
          <div className="space-y-4">
            <div className="border-l-4 border-orange-500 pl-3 bg-orange-50 p-2 rounded-r">
              <p className="font-medium text-[#000000]">₿ Cryptocurrency (Coins)</p>
              <p className="text-xs text-[#101010]">Native currency of a blockchain. Used for payments, store of value.</p>
              <p className="text-xs text-gray-600">Examples: Bitcoin, Ether, Litecoin, Solana, Dogecoin</p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-3 bg-green-50 p-2 rounded-r">
              <p className="font-medium text-[#000000]">🏦 Stablecoins (The Safe Ones)</p>
              <p className="text-xs text-[#101010]">Pegged to stable assets (usually USD) so price doesn't bounce around. 1 USDT = ~$1 always.</p>
              <p className="text-xs text-gray-600">Examples: USDT (Tether), USDC, DAI (algorithmic), BUSD</p>
              <p className="text-xs text-gray-500 mt-1">Used for trading and DeFi to avoid crypto's wild price swings.</p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-3 bg-blue-50 p-2 rounded-r">
              <p className="font-medium text-[#000000]">🎨 Utility Tokens (App-Specific)</p>
              <p className="text-xs text-[#101010]">Access to specific services or apps. Like buying tokens at an arcade to play games.</p>
              <p className="text-xs text-gray-600">Examples: Chainlink (LINK) for oracle data, Filecoin (FIL) for storage, Uniswap (UNI) for voting rights</p>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-3 bg-purple-50 p-2 rounded-r">
              <p className="font-medium text-[#000000]">🖼️ NFTs (Non-Fungible Tokens)</p>
              <p className="text-xs text-[#101010]">Unique digital assets - each one is different and special. Like collectible trading cards, but digital.</p>
              <p className="text-xs text-gray-600">Examples: CryptoPunks (10k unique characters), Bored Ape Yacht Club, NBA Top Shot moments, digital art</p>
              <p className="text-xs text-gray-500 mt-1">Each NFT has a unique ID - no two are identical! "Non-fungible" means you can't swap one for another like dollars.</p>
            </div>
            
            <div className="border-l-4 border-yellow-500 pl-3 bg-yellow-50 p-2 rounded-r">
              <p className="font-medium text-[#000000]">🏛️ CBDC (Central Bank Digital Currency)</p>
              <p className="text-xs text-[#101010]">Government-issued digital money - like digital dollars, but controlled by the government.</p>
              <p className="text-xs text-gray-600">Examples: China's e-CNY, India's Digital Rupee (e₹), Nigeria's eNaira, Bahamas Sand Dollar</p>
              <p className="text-xs text-gray-500 mt-1">NOT decentralized - the government controls it!</p>
            </div>
            
            <div className="border-l-4 border-gray-700 pl-3 bg-gray-100 p-2 rounded-r">
              <p className="font-medium text-[#000000]">🕵️ Privacy Coins (The Hidden Ones)</p>
              <p className="text-xs text-[#101010]">Complete anonymity - nobody can see who sent what to whom.</p>
              <p className="text-xs text-gray-600">Examples: Monero (XMR) hides everything, Zcash (ZEC) uses zero-knowledge proofs</p>
              <p className="text-xs text-gray-500 mt-1">Favored by privacy advocates... and criminals. Controversial!</p>
            </div>
          </div>
        </Card>
      )}

      {tab === "lawenf" && (
        <Card>
          <SubHeading>Law Enforcement Challenges (Why Cops Hate Crypto)</SubHeading>
          
          <ExampleBox emoji="👤" title="1. Pseudonymity - They Use Fake Names">
            <p>Blockchain addresses are like PO boxes - they have numbers, not names. While companies like Chainalysis can sometimes connect addresses to people, it requires subpoenas to exchanges. If the exchange is in another country with different laws, it gets complicated fast.</p>
            <p className="text-xs mt-1">Example: The FBI can track a Bitcoin address, but to find who owns it, they need to convince a judge to force Coinbase (in US) or Binance (in Cayman Islands) to reveal customer info - takes months!</p>
          </ExampleBox>
          
          <ExampleBox emoji="🕵️" title="2. Privacy Coins (Monero) - The Invisible Money">
            <p>Monero uses ring signatures, stealth addresses, and RingCT to hide EVERYTHING - sender, receiver, amount. It's like cash in an envelope - nobody can see inside. The IRS even offered a $625,000 bounty to anyone who could crack Monero. Ransomware groups now demand Monero because it's untraceable!</p>
          </ExampleBox>
          
          <ExampleBox emoji="🌍" title="3. Cross-border jurisdiction - Playing Hide and Seek Across Countries">
            <p>A criminal in India can use a mixer in the Caymans, through an exchange in Seychelles, via a VPN in Romania. Each country requires separate legal processes (MLATs - Mutual Legal Assistance Treaties) that take months or years. By the time cops get permission, the money's long gone!</p>
          </ExampleBox>
          
          <ExampleBox emoji="🔄" title="4. Crypto Mixers (Tornado Cash) - The Money Laundry">
            <p>Mixers pool funds from thousands of users, then pay out to different addresses - breaking the transaction trail. It's like putting $100 in a giant pile of cash and pulling out a different $100 - impossible to trace!</p>
            <p className="mt-1">Tornado Cash mixed over $7 billion, including $455 million stolen by North Korea's Lazarus Group. The US sanctioned Tornado Cash in 2022, but it still works because it's just code on the blockchain.</p>
          </ExampleBox>
          
          <ExampleBox emoji="🇰🇵" title="Real case: Lazarus Group (North Korea's Hackers)">
            <p>North Korean hackers have stolen over $1 BILLION in crypto. They use sophisticated laundering:</p>
            <p>1. Steal coins (like $625M from Axie Infinity's Ronin bridge in 2022)</p>
            <p>2. Chain-hopping: BTC → ETH → XMR → BTC (jumping between blockchains)</p>
            <p>3. Mixers to break the trail</p>
            <p>4. Unregulated exchanges that don't ask for ID</p>
            <p>5. Finally convert to cash through crypto ATMs or peer-to-peer trades</p>
            <p className="text-xs mt-1">This funds North Korea's weapons programs. The FBI is still trying to recover the money.</p>
          </ExampleBox>
          
          <ExampleBox emoji="💻" title="5. Technical expertise gap - Cops Need Computer Science Degrees">
            <p>Most police officers and judges don't understand blockchain. They might not know the difference between Bitcoin and a Bitcoin wallet. Only major agencies like FBI Cyber and Europol EC3 have specialized units. Local police often can't investigate crypto crimes at all - they have to call in federal help, which takes time.</p>
          </ExampleBox>
        </Card>
      )}

      {tab === "des" && (
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <p className="text-[#101010] text-sm">
              <span className="font-medium">Q.5 OR:</span> Explain DES, its vulnerabilities, and how 3DES improves security.
            </p>
          </div>
          
          <Card>
            <SubHeading>DES (Data Encryption Standard) - The Grandfather of Encryption</SubHeading>
            <p className="text-sm text-[#101010] mb-3">
              DES was the US encryption standard from 1977 to 2005. Think of it as the Model T Ford of encryption - revolutionary for its time, but now too slow and easy to break!
            </p>
            
            <Grid cols={2}>
              <div>
                <p className="font-medium text-sm text-[#000000]">DES specifications:</p>
                <BulletList items={[
                  "Block size: 64 bits (8 letters at a time)",
                  "Key size: 56 bits (too short!)",
                  "Rounds: 16 (mixes data 16 times)",
                  "Structure: Feistel network (splits data in half)",
                  "Key space: 2⁵⁶ ≈ 72 quadrillion possibilities"
                ]} />
              </div>
              <div className="bg-gray-800 text-green-100 p-4 rounded-lg">
                <p className="font-mono text-center text-lg">56-bit key</p>
                <p className="font-mono text-center">2⁵⁶ possibilities</p>
                <p className="text-xs text-gray-400 text-center mt-2">72,057,594,037,927,936</p>
                <p className="text-xs text-gray-400 text-center">(72 quadrillion)</p>
              </div>
            </Grid>
            
            <ExampleBox emoji="💻" title="Why DES is vulnerable (Too Short!)">
              <p className="mb-2">56 bits seemed huge in 1977, but not anymore:</p>
              <BulletList items={[
                "1998: EFF built 'Deep Crack' for $250,000 - broke DES in 56 hours",
                "1999: Distributed.net + Deep Crack: 22 hours 15 minutes",
                "Today: AWS cloud can crack DES in hours for under $100",
                "Special hardware can try billions of keys per second"
              ]} />
              <p className="mt-2">Moral: 56 bits is too small for modern computers. It's like using a tiny padlock on a bank vault!</p>
            </ExampleBox>
            
            <SubHeading>Triple DES (3DES) - DES Three Times for Safety</SubHeading>
            <p className="text-sm text-[#101010] mb-3">
              Applies DES three times with two or three keys. Like locking your bike with three different locks - much harder to break!
            </p>
            
            <FormulaBox formula="C = E_{K3}(D_{K2}(E_{K1}(P)))" label="3DES EDE mode (Encrypt-Decrypt-Encrypt)" />
            
            <Grid cols={3} className="mb-4">
              <div className="bg-green-50 p-3 rounded border border-green-200">
                <p className="font-medium text-sm text-green-800">Option 1 (Strongest)</p>
                <p className="text-xs">K1 ≠ K2 ≠ K3<br/>168-bit key<br/>~112-bit security</p>
                <p className="text-xs text-gray-500">Three different keys</p>
              </div>
              <div className="bg-blue-50 p-3 rounded border border-blue-200">
                <p className="font-medium text-sm text-blue-800">Option 2 (Common)</p>
                <p className="text-xs">K1 = K3 ≠ K2<br/>112-bit key<br/>~80-bit security</p>
                <p className="text-xs text-gray-500">Two keys (K1 and K3 same)</p>
              </div>
              <div className="bg-gray-50 p-3 rounded border border-gray-200">
                <p className="font-medium text-sm">Backward compat</p>
                <p className="text-xs">K1 = K2 = K3<br/>= single DES</p>
                <p className="text-xs text-gray-500">For compatibility only</p>
              </div>
            </Grid>
            
            <ExampleBox emoji="💳" title="Where 3DES was used (Before AES took over)">
              <p>• EMV chip cards (Visa/Mastercard) used 3DES for transaction authentication</p>
              <p>• SWIFT banking network used it for message authentication between banks</p>
              <p>• Microsoft Office's password protection (older versions)</p>
              <p>• ATM machines (PIN encryption)</p>
              <p className="text-xs mt-1">It was everywhere in financial systems until the 2010s!</p>
            </ExampleBox>
            
            <Grid cols={2}>
              <div className="border-2 border-green-400 p-4 rounded-lg bg-green-50">
                <p className="font-medium text-sm text-green-800">✅ 3DES advantages</p>
                <BulletList items={[
                  "112-bit security (much better than 56-bit)",
                  "Backward compatible with old DES systems",
                  "No practical cryptographic attacks (yet)",
                  "Hardware support widely available in old systems"
                ]} />
              </div>
              <div className="border-2 border-red-400 p-4 rounded-lg bg-red-50">
                <p className="font-medium text-sm text-red-800">❌ 3DES limitations</p>
                <BulletList items={[
                  "3× slower than DES, 6× slower than AES",
                  "64-bit block vulnerable to Sweet32 attack",
                  "Meet-in-the-middle reduces effective security",
                  "NIST deprecated in 2023 (officially retired!)",
                  "AES is faster AND more secure"
                ]} />
              </div>
            </Grid>
            
            <div className="mt-4 p-4 bg-yellow-50 rounded-lg border-2 border-yellow-400">
              <p className="font-medium text-sm text-[#000000]">Modern standard: AES (Advanced Encryption Standard) - The Current Champion</p>
              <BulletList items={[
                "AES-128: 128-bit key, 10 rounds - practically unbreakable",
                "AES-256: 256-bit key, 14 rounds - quantum-resistant",
                "128-bit block size (no Sweet32 vulnerability)",
                "Hardware accelerated (AES-NI instructions in all modern CPUs)",
                "Current NIST standard for ALL new systems"
              ]} />
              <p className="text-xs mt-2 text-gray-600">Fun fact: AES-256 has more possible keys than atoms in the universe!</p>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// SIDEBAR NAVIGATION
// ─────────────────────────────────────────────────────────────
const SECTIONS = [
  { id: "q1", emoji: "📖", label: "Q1: Cryptography Terms", tags: ["5 Marks"], color: "border-l-4 border-gray-400" },
  { id: "q2", emoji: "⚔️", label: "Q2: Security Attacks", tags: ["10 Marks"], color: "border-l-4 border-gray-400" },
  { id: "q3", emoji: "🏗️", label: "Q3: OSI Model", tags: ["10 Marks"], color: "border-l-4 border-gray-400" },
  { id: "q4", emoji: "🔀", label: "Q4: Transposition Cipher", tags: ["10 Marks"], color: "border-l-4 border-gray-400" },
  { id: "q5", emoji: "⛓️", label: "Q5: Blockchain + DES", tags: ["10 Marks"], color: "border-l-4 border-gray-400" },
];

const Sidebar = ({ active, onChange }) => (
  <aside className="w-72 shrink-0 sticky top-0 h-screen bg-white border-r border-gray-200 overflow-y-auto">
    <div className="p-5">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-2xl">📚</span>
        <h2 className="text-lg font-bold text-[#000000]">Exam Answers</h2>
      </div>
      <p className="text-xs text-[#101010] mb-4">Cryptography & Network Security</p>
      
      <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-200">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <span className="text-xs text-[#101010]">Manish Kumar</span>
        <Tag label="Ready" color="green" />
      </div>
      
      <nav className="space-y-1">
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            onClick={() => onChange(s.id)}
            className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
              active === s.id ? "bg-gray-100 font-medium" : "hover:bg-gray-50"
            } ${active === s.id ? s.color : ""}`}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#000000]">
                <span className="mr-2">{s.emoji}</span>
                {s.label}
              </span>
              <span className="text-xs text-gray-400">{s.tags[0]}</span>
            </div>
          </button>
        ))}
      </nav>
      
      <div className="mt-8 pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-400">Last updated</p>
        <p className="text-xs font-medium text-[#000000]">Monday, 16 March 2026</p>
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
          
          <footer className="mt-12 pt-4 border-t border-gray-200 text-center text-xs text-[#101010]">
            Cryptography & Network Security — Exam Answers — Good luck on your exam! 🍀
          </footer>
        </div>
      </main>
    </div>
  );
}