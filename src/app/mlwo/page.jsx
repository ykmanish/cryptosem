'use client'
import React, { useState } from 'react';
import Head from 'next/head';
import { 
  Shield, 
  AlertTriangle, 
  Lock, 
  Eye, 
  House,
  Search,
  Activity,
  Code,
  Package,
  Unlock,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeType, setActiveType] = useState(null);
  const [activeTab, setActiveTab] = useState('static');
  const [showUnpacked, setShowUnpacked] = useState(false);

  const malwareTypes = [
    {
      name: "Virus",
      emoji: "🦠",
      color: "red",
      realLifeExample: "Like a cold germ that spreads to your friends!",
      howItWorks: "Attaches to clean files and makes them sick. When you share files, the virus spreads!",
      funFact: "Needs help to spread - like a germ needs someone to sneeze!",
      icon: "🔴"
    },
    {
      name: "Trojan Horse",
      emoji: "🐴",
      color: "orange",
      realLifeExample: "Like a toy that looks fun but has a mean surprise inside!",
      howItWorks: "Pretends to be a fun game or useful program, but secretly does bad things.",
      funFact: "Named after the wooden horse story from ancient Greece!",
      icon: "🟠"
    },
    {
      name: "Worm",
      emoji: "🪱",
      color: "yellow",
      realLifeExample: "Like a tiny worm that makes copies of itself and crawls to other computers!",
      howItWorks: "Spreads by itself without needing to attach to files. Makes many copies!",
      funFact: "Can spread very fast - like a rumor in school!",
      icon: "🟡"
    },
    {
      name: "Ransomware",
      emoji: "💰",
      color: "purple",
      realLifeExample: "Someone locks your toy box and asks for your allowance to open it!",
      howItWorks: "Locks your files or computer and asks for money to unlock them.",
      funFact: "Bad guys ask for digital money called cryptocurrency",
      icon: "🟣"
    },
    {
      name: "Spyware",
      emoji: "👀",
      color: "blue",
      realLifeExample: "A tiny spy hiding in your room, watching everything you do!",
      howItWorks: "Secretly watches what you do on your computer and tells the bad guys.",
      funFact: "Can see your passwords and what websites you visit!",
      icon: "🔵"
    },
    {
      name: "Adware",
      emoji: "📢",
      color: "pink",
      realLifeExample: "Someone keeps shouting ads at you while you're trying to play!",
      howItWorks: "Shows you lots of pop-up ads, even when you don't want them.",
      funFact: "Sometimes pretends to be free but shows many ads!",
      icon: "💗"
    },
    {
      name: "Botnet",
      emoji: "🤖",
      color: "gray",
      realLifeExample: "Bad guy takes over many toy robots and makes them all do the same thing!",
      howItWorks: "Turns your computer into a robot that follows bad guy's commands.",
      funFact: "Many computers working together like a robot army!",
      icon: "⚫"
    },
    {
      name: "Rootkit",
      emoji: "🎭",
      color: "indigo",
      realLifeExample: "A super sneaky ninja that hides in the deepest part of your computer!",
      howItWorks: "Hides so deep that antivirus programs can't see it at first.",
      funFact: "Wakes up before your computer starts!",
      icon: "🟤"
    },
    {
      name: "Keylogger",
      emoji: "⌨️",
      color: "green",
      realLifeExample: "Someone writes down every letter you type on your keyboard!",
      howItWorks: "Records everything you type, like secrets and passwords.",
      funFact: "Can steal your diary entries and secret messages!",
      icon: "🟢"
    },
    {
      name: "Scareware",
      emoji: "😱",
      color: "amber",
      realLifeExample: "Someone shouts 'YOUR TOY IS BROKEN!' to make you scared and buy something!",
      howItWorks: "Shows fake warnings to trick you into buying fake fixes.",
      funFact: "Makes you think your computer is very sick when it's not!",
      icon: "🟡"
    },
    {
      name: "Logic Bomb",
      emoji: "⏰",
      color: "rose",
      realLifeExample: "A toy that only breaks on your birthday!",
      howItWorks: "Stays hidden until a special time or event happens.",
      funFact: "Can wait for months before doing anything bad!",
      icon: "🔴"
    },
    {
      name: "RAT",
      emoji: "🐭",
      color: "slate",
      realLifeExample: "Someone gets a remote control for your computer!",
      howItWorks: "Lets bad guys control your computer from far away.",
      funFact: "RAT stands for Remote Access Trojan",
      icon: "⚪"
    }
  ];

  return (
    <>
      <Head>
        <title>Malware Detectives - Learn About Computer Germs</title>
        <meta name="description" content="Learn about malware in a fun way!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`
          @font-face {
            font-family: 'newq';
            src: url('/fonts/newq.woff2') format('woff2');
            font-weight: normal;
            font-style: normal;
          }
          .newq {
            font-family: 'newq', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          }
          body {
            margin: 0;
            padding: 0;
            background-color: white;
          }
          .bg-blue-50 { background-color: #eff6ff; }
          .bg-blue-100 { background-color: #dbeafe; }
          .bg-blue-200 { background-color: #bfdbfe; }
          .bg-blue-600 { background-color: #2563eb; }
          .bg-blue-900 { background-color: #1e3a8a; }
          .bg-green-50 { background-color: #f0fdf4; }
          .bg-green-100 { background-color: #dcfce7; }
          .bg-green-200 { background-color: #bbf7d0; }
          .bg-green-600 { background-color: #16a34a; }
          .bg-red-50 { background-color: #fef2f2; }
          .bg-red-100 { background-color: #fee2e2; }
          .bg-red-200 { background-color: #fecaca; }
          .bg-red-600 { background-color: #dc2626; }
          .bg-red-800 { background-color: #991b1b; }
          .bg-yellow-50 { background-color: #fefce8; }
          .bg-yellow-100 { background-color: #fef9c3; }
          .bg-yellow-200 { background-color: #fef08a; }
          .bg-yellow-800 { background-color: #854d0e; }
          .bg-purple-50 { background-color: #faf5ff; }
          .bg-purple-100 { background-color: #f3e8ff; }
          .bg-purple-200 { background-color: #e9d5ff; }
          .bg-purple-800 { background-color: #6b21a8; }
          .bg-orange-50 { background-color: #fff7ed; }
          .bg-orange-100 { background-color: #ffedd5; }
          .bg-orange-800 { background-color: #9a3412; }
          .bg-pink-50 { background-color: #fdf2f8; }
          .bg-gray-100 { background-color: #f3f4f6; }
          .bg-gray-600 { background-color: #4b5563; }
          .bg-white { background-color: #ffffff; }
          .text-blue-200 { color: #bfdbfe; }
          .text-blue-300 { color: #93c5fd; }
          .text-blue-600 { color: #2563eb; }
          .text-blue-700 { color: #1d4ed8; }
          .text-blue-800 { color: #1e40af; }
          .text-blue-900 { color: #1e3a8a; }
          .text-green-600 { color: #16a34a; }
          .text-green-700 { color: #15803d; }
          .text-green-800 { color: #166534; }
          .text-red-600 { color: #dc2626; }
          .text-red-700 { color: #b91c1c; }
          .text-red-800 { color: #991b1b; }
          .text-yellow-600 { color: #ca8a04; }
          .text-yellow-700 { color: #a16207; }
          .text-yellow-800 { color: #854d0e; }
          .text-purple-600 { color: #9333ea; }
          .text-purple-700 { color: #7e22ce; }
          .text-purple-800 { color: #6b21a8; }
          .text-orange-600 { color: #ea580c; }
          .text-orange-700 { color: #c2410c; }
          .text-orange-800 { color: #9a3412; }
          .text-gray-600 { color: #4b5563; }
          .text-gray-800 { color: #1f2937; }
          .text-white { color: #ffffff; }
          .border-blue-200 { border: 2px solid #bfdbfe; }
          .border-blue-800 { border: 2px solid #1e40af; }
          .border-orange-300 { border: 2px solid #fdba74; }
          .border-red-300 { border: 2px solid #fca5a5; }
          .border-dashed { border-style: dashed; }
          .min-h-screen { min-height: 100vh; }
          .max-w-6xl { max-width: 72rem; }
          .mx-auto { margin-left: auto; margin-right: auto; }
          .px-4 { padding-left: 1rem; padding-right: 1rem; }
          .py-12 { padding-top: 3rem; padding-bottom: 3rem; }
          .py-16 { padding-top: 4rem; padding-bottom: 4rem; }
          .py-8 { padding-top: 2rem; padding-bottom: 2rem; }
          .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
          .py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
          .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
          .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
          .px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }
          .p-8 { padding: 2rem; }
          .p-6 { padding: 1.5rem; }
          .p-4 { padding: 1rem; }
          .p-3 { padding: 0.75rem; }
          .p-2 { padding: 0.5rem; }
          .mt-16 { margin-top: 4rem; }
          .mt-12 { margin-top: 3rem; }
          .mt-8 { margin-top: 2rem; }
          .mt-4 { margin-top: 1rem; }
          .mt-3 { margin-top: 0.75rem; }
          .mt-2 { margin-top: 0.5rem; }
          .mb-12 { margin-bottom: 3rem; }
          .mb-8 { margin-bottom: 2rem; }
          .mb-6 { margin-bottom: 1.5rem; }
          .mb-4 { margin-bottom: 1rem; }
          .mb-3 { margin-bottom: 0.75rem; }
          .mb-2 { margin-bottom: 0.5rem; }
          .ml-2 { margin-left: 0.5rem; }
          .mr-4 { margin-right: 1rem; }
          .mr-3 { margin-right: 0.75rem; }
          .mr-2 { margin-right: 0.5rem; }
          .mr-1 { margin-right: 0.25rem; }
          .space-x-4 > * + * { margin-left: 1rem; }
          .space-x-6 > * + * { margin-left: 1.5rem; }
          .space-x-2 > * + * { margin-left: 0.5rem; }
          .space-y-6 > * + * { margin-top: 1.5rem; }
          .space-y-4 > * + * { margin-top: 1rem; }
          .space-y-3 > * + * { margin-top: 0.75rem; }
          .space-y-2 > * + * { margin-top: 0.5rem; }
          .space-y-1 > * + * { margin-top: 0.25rem; }
          .flex { display: flex; }
          .grid { display: grid; }
          .hidden { display: none; }
          .block { display: block; }
          .inline-block { display: inline-block; }
          .inline { display: inline; }
          .inline-flex { display: inline-flex; }
          .items-center { align-items: center; }
          .items-start { align-items: flex-start; }
          .justify-center { justify-content: center; }
          .justify-between { justify-content: space-between; }
          .text-center { text-align: center; }
          .font-bold { font-weight: 700; }
          .text-sm { font-size: 0.875rem; }
          .text-lg { font-size: 1.125rem; }
          .text-xl { font-size: 1.25rem; }
          .text-2xl { font-size: 1.5rem; }
          .text-3xl { font-size: 1.875rem; }
          .text-4xl { font-size: 2.25rem; }
          .text-5xl { font-size: 3rem; }
          .leading-relaxed { line-height: 1.625; }
          .w-5 { width: 1.25rem; }
          .w-6 { width: 1.5rem; }
          .w-8 { width: 2rem; }
          .w-10 { width: 2.5rem; }
          .w-12 { width: 3rem; }
          .w-16 { width: 4rem; }
          .w-20 { width: 5rem; }
          .w-32 { width: 8rem; }
          .h-5 { height: 1.25rem; }
          .h-6 { height: 1.5rem; }
          .h-8 { height: 2rem; }
          .h-10 { height: 2.5rem; }
          .h-12 { height: 3rem; }
          .h-16 { height: 4rem; }
          .h-20 { height: 5rem; }
          .h-32 { height: 8rem; }
          .rounded-full { border-radius: 9999px; }
          .flex-shrink-0 { flex-shrink: 0; }
          .grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
          .grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
          .gap-8 { gap: 2rem; }
          .gap-6 { gap: 1.5rem; }
          .gap-4 { gap: 1rem; }
          .gap-3 { gap: 0.75rem; }
          .gap-2 { gap: 0.5rem; }
          .font-mono { font-family: monospace; }
          .border-t { border-top-width: 2px; }
          .border-t-2 { border-top-width: 2px; }
          .pt-4 { padding-top: 1rem; }
          .pb-4 { padding-bottom: 1rem; }
          .pl-4 { padding-left: 1rem; }
          .pr-4 { padding-right: 1rem; }
          .object-cover { object-fit: cover; }
          .cursor-pointer { cursor: pointer; }
          .w-full { width: 100%; }
          .h-full { height: 100%; }
          .relative { position: relative; }
          .absolute { position: absolute; }
          .top-0 { top: 0; }
          .left-0 { left: 0; }
          .right-0 { right: 0; }
          .z-10 { z-index: 10; }
          .z-20 { z-index: 20; }
          .overflow-hidden { overflow: hidden; }
          .whitespace-nowrap { white-space: nowrap; }
          .truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
          .list-none { list-style: none; }
          .underline { text-decoration: underline; }
          .italic { font-style: italic; }

          @media (min-width: 768px) {
            .md\:flex { display: flex; }
            .md\:hidden { display: none; }
            .md\:w-1\/2 { width: 50%; }
            .md\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
            .md\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
            .md\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
            .md\:text-5xl { font-size: 3rem; }
            .md\:mb-0 { margin-bottom: 0; }
          }

          @media (min-width: 1024px) {
            .lg\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
          }
        `}</style>
      </Head>

      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="bg-blue-50 p-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-blue-600" />
              <span className="text-xl newq text-blue-800">Malware Detectives</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="text-blue-700 newq">Home</a>
              <a href="#what-is-malware" className="text-blue-600 newq">What is Malware?</a>
              <a href="#types" className="text-blue-600 newq">Types</a>
              <a href="#analysis" className="text-blue-600 newq">Analysis</a>
              <a href="#packing" className="text-blue-600 newq">Packing</a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 space-y-2">
              <a href="#home" className="block p-2 text-blue-700 newq">Home</a>
              <a href="#what-is-malware" className="block p-2 text-blue-600 newq">What is Malware?</a>
              <a href="#types" className="block p-2 text-blue-600 newq">Types</a>
              <a href="#analysis" className="block p-2 text-blue-600 newq">Analysis</a>
              <a href="#packing" className="block p-2 text-blue-600 newq">Packing</a>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4">

          {/* Home Section */}
          <section id="home" className="py-16">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl newq text-blue-900 mb-4">
                  Welcome to the World of Malware Analysis!
                </h1>
                <p className="text-lg text-blue-800 newq mb-6">
                  Imagine being a digital detective who catches computer germs called malware! 
                  Let's learn how to keep our computer friends safe and healthy.
                </p>
                <a href="#what-is-malware" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 newq text-lg">
                  Start Learning
                  <ChevronRight className="ml-2 w-5 h-5" />
                </a>
              </div>
              <div className="md:w-1/2">
                <div className="bg-blue-200 p-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 text-center">
                      <Shield className="w-12 h-12 mx-auto mb-2 text-blue-600" />
                      <p className="newq text-sm">Digital Shield</p>
                    </div>
                    <div className="bg-white p-4 text-center">
                      <AlertTriangle className="w-12 h-12 mx-auto mb-2 text-orange-500" />
                      <p className="newq text-sm">Danger Alert</p>
                    </div>
                    <div className="bg-white p-4 text-center">
                      <Lock className="w-12 h-12 mx-auto mb-2 text-red-600" />
                      <p className="newq text-sm">Lock & Key</p>
                    </div>
                    <div className="bg-white p-4 text-center">
                      <Eye className="w-12 h-12 mx-auto mb-2 text-purple-600" />
                      <p className="newq text-sm">Secret Spy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="mt-16 bg-blue-50 py-12 px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-4xl newq text-blue-900">20+</div>
                  <p className="text-blue-700 newq">Years Fighting Malware</p>
                </div>
                <div>
                  <div className="text-4xl newq text-blue-900">1M+</div>
                  <p className="text-blue-700 newq">Viruses Found Daily</p>
                </div>
                <div>
                  <div className="text-4xl newq text-blue-900">150+</div>
                  <p className="text-blue-700 newq">Countries Protected</p>
                </div>
                <div>
                  <div className="text-4xl newq text-blue-900">99%</div>
                  <p className="text-blue-700 newq">Detection Rate</p>
                </div>
              </div>
            </div>
          </section>

          {/* What is Malware Section */}
          <section id="what-is-malware" className="py-16">
            <h1 className="text-4xl newq text-blue-900 mb-4">What is Malware?</h1>
            
            {/* Simple Explanation */}
            <div className="bg-blue-100 p-8 mb-12">
              <p className="text-xl newq text-blue-900 leading-relaxed">
                Imagine if someone put a tiny germ on your favorite toy. When you play with it, 
                the germ makes your toy act weird or break! Malware is like those germs, but for computers.
              </p>
            </div>

            {/* The Germ Analogy */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="bg-red-100 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-5xl">🦠</span>
                </div>
                <h3 className="text-xl newq text-red-800 mb-2">Step 1: The Germ</h3>
                <p className="text-red-700 newq">Bad guys create computer germs (malware)</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-5xl">📧</span>
                </div>
                <h3 className="text-xl newq text-yellow-800 mb-2">Step 2: Hidden Delivery</h3>
                <p className="text-yellow-700 newq">Germ hides in emails, games, or websites</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-5xl">💻</span>
                </div>
                <h3 className="text-xl newq text-orange-800 mb-2">Step 3: Computer Gets Sick</h3>
                <p className="text-orange-700 newq">Your computer starts acting strange</p>
              </div>
            </div>

            {/* How Malware Gets In */}
            <h2 className="text-3xl newq text-blue-900 mb-8">How Do Computer Germs Get Inside?</h2>
            
            <div className="space-y-6 mb-16">
              <div className="bg-blue-50 p-6 flex items-start">
                <div className="bg-blue-200 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-2xl">💌</span>
                </div>
                <div>
                  <h3 className="text-xl newq text-blue-800 mb-2">Tricky Emails</h3>
                  <p className="text-blue-700 newq">
                    Like getting a letter that looks like it's from your friend, but it's actually from a germ! 
                    The email might say "Click here for a free game!" but clicking it lets the germ in.
                  </p>
                </div>
              </div>
              <div className="bg-blue-50 p-6 flex items-start">
                <div className="bg-blue-200 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-2xl">🎮</span>
                </div>
                <div>
                  <h3 className="text-xl newq text-blue-800 mb-2">Fake Games</h3>
                  <p className="text-blue-700 newq">
                    Some websites say "Play this game for free!" but the game has hidden germs. 
                    When you download it, the germs jump into your computer!
                  </p>
                </div>
              </div>
              <div className="bg-blue-50 p-6 flex items-start">
                <div className="bg-blue-200 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-2xl">🔌</span>
                </div>
                <div>
                  <h3 className="text-xl newq text-blue-800 mb-2">USB Sticks</h3>
                  <p className="text-blue-700 newq">
                    Remember when your friend gave you a USB with cool pictures? 
                    Sometimes germs can hide on USBs and jump to your computer when you plug them in.
                  </p>
                </div>
              </div>
            </div>

            {/* Famous Attacks */}
            <h2 className="text-3xl newq text-blue-900 mb-8">Real Monster Stories (Famous Attacks)</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-red-50 p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-red-200 w-12 h-12 rounded-full flex items-center justify-center mr-3">
                    <span className="text-2xl">💰</span>
                  </div>
                  <h3 className="text-2xl newq text-red-800">WannaCry (2017)</h3>
                </div>
                <p className="text-red-700 newq mb-4">
                  This monster locked up computers in 150 countries! It was like someone came into 
                  your room and locked all your toy boxes, then asked for money to unlock them.
                </p>
                <div className="bg-red-100 p-4">
                  <p className="text-red-800 newq font-bold">200,000+ computers got sick!</p>
                </div>
              </div>
              <div className="bg-purple-50 p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-200 w-12 h-12 rounded-full flex items-center justify-center mr-3">
                    <span className="text-2xl">🕵️</span>
                  </div>
                  <h3 className="text-2xl newq text-purple-800">SolarWinds (2020)</h3>
                </div>
                <p className="text-purple-700 newq mb-4">
                  Imagine if someone snuck into a toy factory and put germs in every toy before 
                  they were shipped to stores. That's what happened here!
                </p>
                <div className="bg-purple-100 p-4">
                  <p className="text-purple-800 newq font-bold">18,000 companies affected!</p>
                </div>
              </div>
            </div>

            {/* Protection Tips */}
            <div className="bg-green-50 p-8">
              <h2 className="text-3xl newq text-green-800 mb-6">How to Stay Safe (Like Washing Your Hands!)</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-green-200 w-20 h-20 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-3xl">🔐</span>
                  </div>
                  <p className="newq text-green-800">Don't click strange links</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-200 w-20 h-20 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-3xl">🛡️</span>
                  </div>
                  <p className="newq text-green-800">Use antivirus (computer soap!)</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-200 w-20 h-20 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-3xl">👨‍👩‍👧</span>
                  </div>
                  <p className="newq text-green-800">Ask parents before downloading</p>
                </div>
              </div>
            </div>
          </section>

          {/* Types of Malware Section */}
          <section id="types" className="py-16">
            <h1 className="text-4xl newq text-blue-900 mb-4">Meet the Malware Family</h1>
            <p className="text-xl newq text-blue-700 mb-12">
              Just like there are different kinds of germs (like cold germs and tummy ache germs), 
              there are different kinds of malware too! Let's meet them all.
            </p>

            {/* Malware Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {malwareTypes.map((type) => (
                <div 
                  key={type.name}
                  className={`bg-${type.color}-50 p-6 cursor-pointer`}
                  onClick={() => setActiveType(activeType === type.name ? null : type.name)}
                >
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-3">{type.emoji}</span>
                    <h2 className={`text-2xl newq text-${type.color}-800`}>{type.name}</h2>
                  </div>
                  <p className={`text-${type.color}-700 newq mb-4`}>
                    {type.realLifeExample}
                  </p>
                  {activeType === type.name && (
                    <div className={`mt-4 pt-4 border-t-2 border-${type.color}-200`}>
                      <div className="mb-3">
                        <h3 className={`newq font-bold text-${type.color}-900`}>How it works:</h3>
                        <p className={`text-${type.color}-700 newq`}>{type.howItWorks}</p>
                      </div>
                      <div>
                        <h3 className={`newq font-bold text-${type.color}-900`}>Fun Fact:</h3>
                        <p className={`text-${type.color}-700 newq`}>{type.funFact}</p>
                      </div>
                    </div>
                  )}
                  <p className={`text-${type.color}-600 newq text-sm mt-3`}>
                    Click to {activeType === type.name ? 'show less' : 'learn more'}!
                  </p>
                </div>
              ))}
            </div>

            {/* Visual Comparison */}
            <div className="mt-16 bg-yellow-50 p-8">
              <h2 className="text-3xl newq text-yellow-800 mb-6">Think of It Like Your Body!</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl newq text-yellow-800 mb-4">Body Germs</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="w-8 h-8 bg-yellow-200 rounded-full flex items-center justify-center mr-3">🤧</span>
                      <span className="newq text-yellow-800">Cold virus - makes you sneeze</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-8 h-8 bg-yellow-200 rounded-full flex items-center justify-center mr-3">🤢</span>
                      <span className="newq text-yellow-800">Stomach bug - tummy ache</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-8 h-8 bg-yellow-200 rounded-full flex items-center justify-center mr-3">🌡️</span>
                      <span className="newq text-yellow-800">Fever germ - makes you hot</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl newq text-yellow-800 mb-4">Computer Germs</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="w-8 h-8 bg-yellow-200 rounded-full flex items-center justify-center mr-3">🦠</span>
                      <span className="newq text-yellow-800">Virus - makes files sick</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-8 h-8 bg-yellow-200 rounded-full flex items-center justify-center mr-3">💰</span>
                      <span className="newq text-yellow-800">Ransomware - locks your stuff</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-8 h-8 bg-yellow-200 rounded-full flex items-center justify-center mr-3">👀</span>
                      <span className="newq text-yellow-800">Spyware - watches you</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Matching Game */}
            <div className="mt-16 bg-green-50 p-8">
              <h2 className="text-3xl newq text-green-800 mb-6">Can You Match Them?</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4">
                  <p className="newq text-green-800 font-bold mb-2">Your computer shows many pop-ups →</p>
                  <p className="newq text-green-600">That's Adware!</p>
                </div>
                <div className="bg-white p-4">
                  <p className="newq text-green-800 font-bold mb-2">Your files are locked and ask for money →</p>
                  <p className="newq text-green-600">That's Ransomware!</p>
                </div>
                <div className="bg-white p-4">
                  <p className="newq text-green-800 font-bold mb-2">Your computer is very slow and someone is watching →</p>
                  <p className="newq text-green-600">That's Spyware!</p>
                </div>
                <div className="bg-white p-4">
                  <p className="newq text-green-800 font-bold mb-2">A game that secretly does bad things →</p>
                  <p className="newq text-green-600">That's a Trojan Horse!</p>
                </div>
              </div>
            </div>
          </section>

          {/* Malware Analysis Section */}
          <section id="analysis" className="py-16">
            <h1 className="text-4xl newq text-blue-900 mb-4">How Do We Study Computer Germs?</h1>
            <p className="text-xl newq text-blue-700 mb-12">
              Just like doctors study germs to make medicine, computer detectives study malware to protect computers!
            </p>

            {/* Analysis Tabs */}
            <div className="mb-8">
              <div className="flex space-x-2">
                <button
                  className={`px-6 py-3 newq text-lg ${activeTab === 'static' ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800'}`}
                  onClick={() => setActiveTab('static')}
                >
                  <Search className="inline w-5 h-5 mr-2" />
                  Static Analysis
                </button>
                <button
                  className={`px-6 py-3 newq text-lg ${activeTab === 'dynamic' ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800'}`}
                  onClick={() => setActiveTab('dynamic')}
                >
                  <Activity className="inline w-5 h-5 mr-2" />
                  Dynamic Analysis
                </button>
                <button
                  className={`px-6 py-3 newq text-lg ${activeTab === 'code' ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800'}`}
                  onClick={() => setActiveTab('code')}
                >
                  <Code className="inline w-5 h-5 mr-2" />
                  Code Analysis
                </button>
              </div>
            </div>

            {/* Static Analysis */}
            {activeTab === 'static' && (
              <div className="bg-blue-50 p-8">
                <div className="flex items-center mb-6">
                  <Search className="w-10 h-10 text-blue-600 mr-3" />
                  <h2 className="text-3xl newq text-blue-800">Static Analysis</h2>
                </div>
                <p className="text-lg newq text-blue-700 mb-8">
                  Like looking at a wrapped gift without opening it! We examine the malware without running it.
                </p>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white p-6">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <span className="text-3xl">🎁</span>
                    </div>
                    <h3 className="text-xl newq text-blue-800 mb-2">Real Life Example</h3>
                    <p className="text-blue-700 newq">
                      Imagine getting a present. Before opening it, you shake it, look at the wrapping paper, 
                      and try to guess what's inside. That's static analysis!
                    </p>
                  </div>
                  <div className="bg-white p-6">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <span className="text-3xl">🔍</span>
                    </div>
                    <h3 className="text-xl newq text-blue-800 mb-2">What We Look For</h3>
                    <ul className="space-y-2 text-blue-700 newq">
                      <li>• File name and size (like reading the gift tag!)</li>
                      <li>• What it says it does (like reading the toy instructions)</li>
                      <li>• Hidden messages inside the code</li>
                      <li>• What other programs it wants to talk to</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-blue-100 p-6">
                  <h3 className="text-xl newq text-blue-800 mb-3">Tools We Use</h3>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-white p-3">CFF Explorer</div>
                    <div className="bg-white p-3">PE Internals</div>
                    <div className="bg-white p-3">PPEE</div>
                  </div>
                </div>
              </div>
            )}

            {/* Dynamic Analysis */}
            {activeTab === 'dynamic' && (
              <div className="bg-green-50 p-8">
                <div className="flex items-center mb-6">
                  <Activity className="w-10 h-10 text-green-600 mr-3" />
                  <h2 className="text-3xl newq text-green-800">Dynamic Analysis</h2>
                </div>
                <p className="text-lg newq text-green-700 mb-8">
                  Like opening the gift in a special safe room to see what it does!
                </p>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white p-6">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <span className="text-3xl">🏃</span>
                    </div>
                    <h3 className="text-xl newq text-green-800 mb-2">Real Life Example</h3>
                    <p className="text-green-700 newq">
                      Imagine watching a new toy in a glass box. You can see it move and make sounds, 
                      but it can't hurt you. That's dynamic analysis!
                    </p>
                  </div>
                  <div className="bg-white p-6">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <span className="text-3xl">🎬</span>
                    </div>
                    <h3 className="text-xl newq text-green-800 mb-2">What We Watch</h3>
                    <ul className="space-y-2 text-green-700 newq">
                      <li>• What files it tries to change</li>
                      <li>• What websites it wants to visit</li>
                      <li>• What other programs it talks to</li>
                      <li>• If it tries to copy itself</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-green-100 p-6">
                  <h3 className="text-xl newq text-green-800 mb-3">The Special Safe Room (Sandbox)</h3>
                  <p className="text-green-700 newq">
                    We create a fake computer that looks real to the malware. It's like a play computer 
                    where malware can run but can't escape to hurt real computers!
                  </p>
                </div>
              </div>
            )}

            {/* Code Analysis */}
            {activeTab === 'code' && (
              <div className="bg-purple-50 p-8">
                <div className="flex items-center mb-6">
                  <Code className="w-10 h-10 text-purple-600 mr-3" />
                  <h2 className="text-3xl newq text-purple-800">Code Analysis</h2>
                </div>
                <p className="text-lg newq text-purple-700 mb-8">
                  Like being a toy doctor who understands exactly how every gear and spring works!
                </p>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white p-6">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <span className="text-3xl">🔧</span>
                    </div>
                    <h3 className="text-xl newq text-purple-800 mb-2">Real Life Example</h3>
                    <p className="text-purple-700 newq">
                      Imagine taking apart a remote control car to see how each wire and battery makes it move. 
                      That's code analysis!
                    </p>
                  </div>
                  <div className="bg-white p-6">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <span className="text-3xl">📖</span>
                    </div>
                    <h3 className="text-xl newq text-purple-800 mb-2">Two Ways to Analyze Code</h3>
                    <ul className="space-y-2 text-purple-700 newq">
                      <li className="font-bold">Static Code Analysis:</li>
                      <li className="ml-4">Reading the instructions like a recipe book</li>
                      <li className="font-bold mt-2">Dynamic Code Analysis:</li>
                      <li className="ml-4">Watching each instruction run, step by step</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-purple-100 p-6">
                  <h3 className="text-xl newq text-purple-800 mb-3">Why It's Hard (But Cool!)</h3>
                  <p className="text-purple-700 newq">
                    Like solving a giant puzzle where each piece is a tiny instruction. 
                    But when you solve it, you know exactly how the malware works!
                  </p>
                </div>
              </div>
            )}

            {/* Detective Rules */}
            <div className="mt-12 bg-yellow-50 p-8">
              <h2 className="text-3xl newq text-yellow-800 mb-6">Rules for Malware Detectives</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4">
                  <span className="text-2xl block mb-2">🧩</span>
                  <p className="newq text-yellow-800">Don't need to understand everything - start with the big picture!</p>
                </div>
                <div className="bg-white p-4">
                  <span className="text-2xl block mb-2">🛠️</span>
                  <p className="newq text-yellow-800">Try different tools if one doesn't work</p>
                </div>
                <div className="bg-white p-4">
                  <span className="text-2xl block mb-2">⏭️</span>
                  <p className="newq text-yellow-800">If stuck on one thing, move on and come back later</p>
                </div>
              </div>
            </div>

            {/* Goals */}
            <div className="mt-12 bg-red-50 p-8">
              <h2 className="text-3xl newq text-red-800 mb-6">Why Do We Analyze Malware?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-red-200 w-20 h-20 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-3xl">🔍</span>
                  </div>
                  <p className="newq text-red-800">Find all infected computers</p>
                </div>
                <div className="text-center">
                  <div className="bg-red-200 w-20 h-20 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-3xl">🛡️</span>
                  </div>
                  <p className="newq text-red-800">Create vaccines (signatures)</p>
                </div>
                <div className="text-center">
                  <div className="bg-red-200 w-20 h-20 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-3xl">🚫</span>
                  </div>
                  <p className="newq text-red-800">Stop future attacks</p>
                </div>
              </div>
            </div>
          </section>

          {/* Malware Packing Section */}
          <section id="packing" className="py-16">
            <h1 className="text-4xl newq text-blue-900 mb-4">What is Malware Packing?</h1>
            
            {/* IKEA Analogy */}
            <div className="bg-orange-50 p-8 mb-12">
              <p className="text-xl newq text-orange-800 mb-6">
                Imagine buying a toy from IKEA. It comes in a flat box with instructions. 
                You need to build it before you can play with it. That's exactly how packed malware works!
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6">
                  <div className="flex items-center mb-4">
                    <Package className="w-8 h-8 text-orange-600 mr-2" />
                    <h3 className="text-xl newq text-orange-800">Packed Malware</h3>
                  </div>
                  <div className="bg-orange-100 p-4">
                    <div className="border-2 border-dashed border-orange-300 p-3">
                      <p className="text-orange-700 newq text-center">📦 Flat Pack (Compressed)</p>
                      <p className="text-orange-600 newq text-sm text-center">+ Instructions (Stub)</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6">
                  <div className="flex items-center mb-4">
                    <Unlock className="w-8 h-8 text-green-600 mr-2" />
                    <h3 className="text-xl newq text-green-800">Unpacked Malware</h3>
                  </div>
                  <div className="bg-green-100 p-4">
                    <div className="p-3">
                      <p className="text-green-700 newq text-center">🧸 Built Toy (Working Malware)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Packing Process */}
            <h2 className="text-3xl newq text-blue-900 mb-6">The Packing Process</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-blue-50 p-6 text-center">
                <div className="bg-blue-200 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">1️⃣</span>
                </div>
                <h3 className="text-xl newq text-blue-800 mb-2">Write Malware</h3>
                <p className="text-blue-700 newq">Bad guy writes the nasty code</p>
              </div>
              <div className="bg-blue-50 p-6 text-center">
                <div className="bg-blue-200 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">2️⃣</span>
                </div>
                <h3 className="text-xl newq text-blue-800 mb-2">Pack It</h3>
                <p className="text-blue-700 newq">Use a packer (like UPX) to compress it</p>
              </div>
              <div className="bg-blue-50 p-6 text-center">
                <div className="bg-blue-200 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">3️⃣</span>
                </div>
                <h3 className="text-xl newq text-blue-800 mb-2">Hide It</h3>
                <p className="text-blue-700 newq">Now antivirus can't see it easily!</p>
              </div>
            </div>

            {/* Why Pack */}
            <div className="bg-purple-50 p-8 mb-12">
              <h2 className="text-3xl newq text-purple-800 mb-6">Why Do Bad Guys Pack Malware?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6">
                  <span className="text-4xl block mb-3">🎭</span>
                  <h3 className="text-xl newq text-purple-800 mb-2">Different Look</h3>
                  <p className="text-purple-700 newq">
                    Like wearing a disguise! Packed malware looks different from the original, 
                    so antivirus might not recognize it.
                  </p>
                </div>
                <div className="bg-white p-6">
                  <span className="text-4xl block mb-3">🏃</span>
                  <h3 className="text-xl newq text-purple-800 mb-2">Tricks Sandboxes</h3>
                  <p className="text-purple-700 newq">
                    Remember the safe room? Packed malware needs to unpack first, 
                    which can trick automatic detectors!
                  </p>
                </div>
                <div className="bg-white p-6">
                  <span className="text-4xl block mb-3">📦</span>
                  <h3 className="text-xl newq text-purple-800 mb-2">Smaller Size</h3>
                  <p className="text-purple-700 newq">
                    Just like vacuum-packing clothes! Makes it smaller and easier to send.
                  </p>
                </div>
              </div>
            </div>

            {/* UPX Example */}
            <div className="bg-green-50 p-8 mb-12">
              <h2 className="text-3xl newq text-green-800 mb-6">Meet UPX - The Popular Packer</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="bg-white p-4 mb-4">
                    <h3 className="text-lg newq text-green-800 mb-2">Before Packing:</h3>
                    <p className="font-mono bg-green-100 p-2 text-green-800">600 KB - unpacked_malware</p>
                    <p className="text-green-700 newq mt-2">Big and easy to see!</p>
                  </div>
                  <div className="bg-white p-4">
                    <h3 className="text-lg newq text-green-800 mb-2">After Packing:</h3>
                    <p className="font-mono bg-green-100 p-2 text-green-800">272 KB - packed_malware</p>
                    <p className="text-green-700 newq mt-2">Smaller and disguised!</p>
                  </div>
                </div>
                <div className="bg-white p-6">
                  <h3 className="text-xl newq text-green-800 mb-4">What's Inside Packed File?</h3>
                  <div className="space-y-3">
                    <div className="bg-green-100 p-2">
                      <span className="font-bold">1. Stub</span> - The instructions to unpack
                    </div>
                    <div className="bg-green-100 p-2">
                      <span className="font-bold">2. Compressed Malware</span> - The squeezed germ
                    </div>
                    <div className="bg-green-100 p-2">
                      <span className="font-bold">3. Empty Space</span> - Room for unpacking later
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Unpacking */}
            <div className="bg-blue-50 p-8 mb-12">
              <h2 className="text-3xl newq text-blue-800 mb-6">Try It: Unpack the Malware!</h2>
              <button
                className="bg-blue-600 text-white px-6 py-3 newq text-lg mb-6"
                onClick={() => setShowUnpacked(!showUnpacked)}
              >
                {showUnpacked ? 'Hide Unpacked Version' : 'Click to Unpack!'}
              </button>
              {!showUnpacked ? (
                <div className="bg-gray-100 p-8 text-center">
                  <Package className="w-16 h-16 mx-auto text-gray-600 mb-3" />
                  <p className="newq text-gray-800 text-xl">🔒 Packed Malware</p>
                  <p className="newq text-gray-600">Can't see inside - it's compressed!</p>
                </div>
              ) : (
                <div className="bg-green-100 p-8">
                  <Unlock className="w-16 h-16 mx-auto text-green-600 mb-3" />
                  <p className="newq text-green-800 text-xl mb-4">🔓 Unpacked Malware</p>
                  <div className="bg-white p-4">
                    <p className="font-mono text-sm text-gray-800">
                      Now we can see the nasty code!<br/>
                      It tries to:<br/>
                      • Steal passwords<br/>
                      • Send spam emails<br/>
                      • Lock your files
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Packers Comparison */}
            <div className="bg-yellow-50 p-8">
              <h2 className="text-3xl newq text-yellow-800 mb-6">Types of Packers</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4">
                  <h3 className="text-xl newq text-yellow-800 mb-3">ZIP</h3>
                  <p className="text-yellow-700 newq mb-2">Like putting toys in a zipper bag</p>
                  <p className="text-sm text-yellow-600">Used by: Various malware</p>
                </div>
                <div className="bg-white p-4">
                  <h3 className="text-xl newq text-yellow-800 mb-3">SFX</h3>
                  <p className="text-yellow-700 newq mb-2">Self-opening package</p>
                  <p className="text-sm text-yellow-600">Used by: LuluBot</p>
                </div>
                <div className="bg-white p-4">
                  <h3 className="text-xl newq text-yellow-800 mb-3">UPX</h3>
                  <p className="text-yellow-700 newq mb-2">Super packer - compresses AND encrypts</p>
                  <p className="text-sm text-yellow-600">Used by: AgentTesla, Gh0stRAT</p>
                </div>
              </div>
            </div>

            {/* Detective Challenge */}
            <div className="mt-12 bg-red-50 p-8">
              <h2 className="text-3xl newq text-red-800 mb-6">🧐 Detective Challenge</h2>
              <p className="text-red-700 newq text-lg mb-4">
                Can you spot the packed malware? (Hint: Look for the unpacking instructions!)
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4">
                  <Code className="w-6 h-6 inline mr-2" />
                  <span className="newq">normal_program.exe</span>
                  <p className="text-sm text-gray-600 mt-2">Size: 600KB, many imports visible</p>
                </div>
                <div className="bg-white p-4 border-2 border-red-300">
                  <Lock className="w-6 h-6 inline mr-2 text-red-600" />
                  <span className="newq text-red-800">suspicious_program.exe</span>
                  <p className="text-sm text-red-600 mt-2">Size: 272KB, few imports, has UPX section!</p>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-16 bg-white">
            <h2 className="text-3xl newq text-blue-900 mb-8 text-center">
              What Our Junior Detectives Say
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6">
                <p className="text-blue-700 newq mb-4">
                  "I learned how to spot computer germs! Now I help my mom keep her laptop safe."
                </p>
                <p className="newq text-blue-900 font-bold">- Sarah, Age 9</p>
              </div>
              <div className="bg-blue-50 p-6">
                <p className="text-blue-700 newq mb-4">
                  "The toy example helped me understand how viruses hide. So cool!"
                </p>
                <p className="newq text-blue-900 font-bold">- Michael, Age 8</p>
              </div>
              <div className="bg-blue-50 p-6">
                <p className="text-blue-700 newq mb-4">
                  "Now I know why we need antivirus - it's like a doctor for computers!"
                </p>
                <p className="newq text-blue-900 font-bold">- David, Age 10</p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="bg-blue-900 text-white py-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg newq mb-2">Malware Detectives</h3>
                <p className="text-blue-200 newq text-sm">
                  Making computer security fun for kids!
                </p>
              </div>
              <div>
                <h3 className="text-lg newq mb-2">Quick Links</h3>
                <ul className="space-y-1">
                  <li><a href="#what-is-malware" className="text-blue-200 newq text-sm">What is Malware?</a></li>
                  <li><a href="#types" className="text-blue-200 newq text-sm">Types of Malware</a></li>
                  <li><a href="#analysis" className="text-blue-200 newq text-sm">Analysis</a></li>
                  <li><a href="#packing" className="text-blue-200 newq text-sm">Packing</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg newq mb-2">Contact</h3>
                <p className="text-blue-200 newq text-sm">Learn with us and stay safe!</p>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-blue-800 text-center">
              <p className="text-blue-300 newq text-sm">
                © 2024 Malware Detectives - Making Cybersecurity Fun
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}