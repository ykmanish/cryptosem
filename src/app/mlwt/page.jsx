'use client'
import React, { useState } from 'react';
import Head from 'next/head';
import { 
  Shield, 
  Search, 
  FileText, 
  Fingerprint,
  Hash,
  Type,
  Lock,
  Unlock,
  Home,
  ChevronRight,
  Menu,
  X,
  Eye,
  Code,
  Table,
  Clock,
  Image as ImageIcon,
  GitBranch,
  Filter
} from 'lucide-react';

export default function StaticAnalysis() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTool, setActiveTool] = useState('hxd');
  const [showUnpacked, setShowUnpacked] = useState(false);
  const [activeStringExample, setActiveStringExample] = useState('normal');

  return (
    <>
      <Head>
        <title>Static Analysis - Malware Detectives Unit 2</title>
        <meta name="description" content="Learn static malware analysis in a fun way!" />
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
          .border-red-300 { border: 2px solid #fca5a5; }
          .border-green-200 { border: 2px solid #bbf7d0; }
          .border-dashed { border-style: dashed; }
          .min-h-screen { min-height: 100vh; }
          .max-w-6xl { max-width: 72rem; }
          .mx-auto { margin-left: auto; margin-right: auto; }
          .px-4 { padding-left: 1rem; padding-right: 1rem; }
          .py-16 { padding-top: 4rem; padding-bottom: 4rem; }
          .py-12 { padding-top: 3rem; padding-bottom: 3rem; }
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
          .mt-6 { margin-top: 1.5rem; }
          .mt-4 { margin-top: 1rem; }
          .mt-3 { margin-top: 0.75rem; }
          .mt-2 { margin-top: 0.5rem; }
          .mb-16 { margin-bottom: 4rem; }
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
          .space-x-6 > * + * { margin-left: 1.5rem; }
          .space-x-4 > * + * { margin-left: 1rem; }
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
          .cursor-pointer { cursor: pointer; }
          .w-full { width: 100%; }
          .overflow-x-auto { overflow-x: auto; }
          .whitespace-nowrap { white-space: nowrap; }

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
            .lg\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
          }
        `}</style>
      </Head>

      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="bg-blue-50 p-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-blue-600" />
              <span className="text-xl newq text-blue-800">Malware Detectives - Unit 2</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <a href="#intro" className="text-blue-700 newq">Intro</a>
              <a href="#file-type" className="text-blue-600 newq">File Type</a>
              <a href="#fingerprint" className="text-blue-600 newq">Fingerprint</a>
              <a href="#strings" className="text-blue-600 newq">Strings</a>
              <a href="#packing" className="text-blue-600 newq">Packing</a>
              <a href="#pe-header" className="text-blue-600 newq">PE Header</a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 space-y-2">
              <a href="#intro" className="block p-2 text-blue-700 newq">Intro</a>
              <a href="#file-type" className="block p-2 text-blue-600 newq">File Type</a>
              <a href="#fingerprint" className="block p-2 text-blue-600 newq">Fingerprint</a>
              <a href="#strings" className="block p-2 text-blue-600 newq">Strings</a>
              <a href="#packing" className="block p-2 text-blue-600 newq">Packing</a>
              <a href="#pe-header" className="block p-2 text-blue-600 newq">PE Header</a>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4">

          {/* Introduction Section */}
          <section id="intro" className="py-16">
            <h1 className="text-4xl newq text-blue-900 mb-4">Static Analysis: Being a File Detective</h1>
            
            <div className="bg-blue-100 p-8 mb-8">
              <p className="text-xl newq text-blue-900 leading-relaxed">
                Imagine you're a detective who needs to examine a mysterious package WITHOUT opening it. 
                You can look at the outside, check the weight, read the labels, and use special tools to 
                peek inside. That's exactly what static analysis does with computer files!
              </p>
            </div>

            {/* Steps Overview */}
            <div className="grid md:grid-cols-4 gap-4 mb-12">
              <div className="bg-blue-50 p-4 text-center">
                <div className="bg-blue-200 w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-2xl">1️⃣</span>
                </div>
                <h3 className="newq text-blue-800 font-bold">Identify File Type</h3>
                <p className="text-sm text-blue-600">What kind of file is it?</p>
              </div>
              <div className="bg-blue-50 p-4 text-center">
                <div className="bg-blue-200 w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-2xl">2️⃣</span>
                </div>
                <h3 className="newq text-blue-800 font-bold">Fingerprint</h3>
                <p className="text-sm text-blue-600">Give it a unique ID</p>
              </div>
              <div className="bg-blue-50 p-4 text-center">
                <div className="bg-blue-200 w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-2xl">3️⃣</span>
                </div>
                <h3 className="newq text-blue-800 font-bold">Extract Strings</h3>
                <p className="text-sm text-blue-600">Find hidden messages</p>
              </div>
              <div className="bg-blue-50 p-4 text-center">
                <div className="bg-blue-200 w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-2xl">4️⃣</span>
                </div>
                <h3 className="newq text-blue-800 font-bold">Check Packing</h3>
                <p className="text-sm text-blue-600">Is it wrapped?</p>
              </div>
            </div>

            {/* Real Life Example */}
            <div className="bg-yellow-50 p-8">
              <h2 className="text-2xl newq text-yellow-800 mb-4">Real Life Example: The Mystery Box</h2>
              <div className="flex items-start">
                <span className="text-4xl mr-4">📦</span>
                <div>
                  <p className="text-yellow-700 newq mb-3">
                    You find a box on your doorstep. Before opening it, you can:
                  </p>
                  <ul className="list-disc pl-5 text-yellow-700 newq space-y-1">
                    <li>Look at the box size and shape (File Type)</li>
                    <li>Check for a tracking number (Fingerprint/Hash)</li>
                    <li>Read the shipping labels (Strings)</li>
                    <li>See if it's wrapped in extra layers (Packing)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* File Type Identification Section */}
          <section id="file-type" className="py-16">
            <h2 className="text-3xl newq text-blue-900 mb-6">Step 1: What Kind of File Is It?</h2>
            
            <div className="bg-orange-50 p-8 mb-8">
              <div className="flex items-center mb-4">
                <FileText className="w-8 h-8 text-orange-600 mr-2" />
                <h3 className="text-2xl newq text-orange-800">Don't Trust the Name Tag!</h3>
              </div>
              <p className="text-orange-700 newq mb-4">
                Just like someone might put a "Toy" label on a box containing something else, 
                malware authors change file extensions to trick you. A file named "cat.jpg" might 
                actually be a dangerous program!
              </p>
              
              <div className="bg-white p-6">
                <h4 className="newq font-bold text-orange-800 mb-3">The Secret Signature:</h4>
                <p className="text-orange-700 newq mb-4">
                  Every file type has a secret signature (like a fingerprint) at the very beginning. 
                  For Windows programs (EXE files), the signature is "MZ" or "4D 5A" in hex.
                </p>
                <div className="bg-orange-100 p-4 font-mono text-center">
                  <span className="text-orange-800">First 2 bytes: </span>
                  <span className="bg-white p-2 mx-1">4D</span>
                  <span className="bg-white p-2 mx-1">5A</span>
                  <span className="text-orange-600 ml-2">= "MZ" = Windows Executable!</span>
                </div>
              </div>
            </div>

            {/* Tools Tabs */}
            <h3 className="text-2xl newq text-blue-800 mb-4">Tools to Identify File Type</h3>
            
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                <button
                  className={`px-4 py-2 newq ${activeTool === 'hxd' ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800'}`}
                  onClick={() => setActiveTool('hxd')}
                >
                  HxD (Hex Editor)
                </button>
                <button
                  className={`px-4 py-2 newq ${activeTool === 'cff' ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800'}`}
                  onClick={() => setActiveTool('cff')}
                >
                  CFF Explorer
                </button>
                <button
                  className={`px-4 py-2 newq ${activeTool === 'exeinfo' ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800'}`}
                  onClick={() => setActiveTool('exeinfo')}
                >
                  Exeinfo PE
                </button>
                <button
                  className={`px-4 py-2 newq ${activeTool === 'pestudio' ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800'}`}
                  onClick={() => setActiveTool('pestudio')}
                >
                  PEStudio
                </button>
              </div>
            </div>

            {/* Tool Details */}
            {activeTool === 'hxd' && (
              <div className="bg-gray-50 p-6">
                <h4 className="text-xl newq text-gray-800 mb-3">HxD - The Magnifying Glass</h4>
                <p className="text-gray-700 newq mb-4">
                  A hex editor lets you see every single byte in a file - like looking at a book 
                  through a microscope to see each letter!
                </p>
                <div className="bg-white p-4 font-mono text-sm overflow-x-auto">
                  <pre className="whitespace-nowrap">
{`Offset      0  1  2  3  4  5  6  7  8  9  A  B  C  D  E  F
00000000   4D 5A 90 00 03 00 00 00 04 00 00 00 FF FF 00 00   MZ..............
00000010   B8 00 00 00 00 00 00 00 40 00 00 00 00 00 00 00   ........@.......
^^ First two bytes: 4D 5A = MZ = This is an EXE file!`}
                  </pre>
                </div>
                <p className="text-green-600 newq mt-3">
                  🔍 Found the secret signature! This is definitely a Windows program.
                </p>
              </div>
            )}

            {activeTool === 'cff' && (
              <div className="bg-gray-50 p-6">
                <h4 className="text-xl newq text-gray-800 mb-3">CFF Explorer - The File Inspector</h4>
                <p className="text-gray-700 newq mb-4">
                  Like having x-ray goggles for files! Shows you all the hidden structures inside.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-3">
                    <p className="font-bold newq">File Header:</p>
                    <p className="font-mono text-sm">Machine: 014C (Intel 386)</p>
                    <p className="font-mono text-sm">Number of Sections: 3</p>
                    <p className="font-mono text-sm">Time Stamp: 4A5BCB3F</p>
                  </div>
                  <div className="bg-white p-3">
                    <p className="font-bold newq">What this tells us:</p>
                    <p>✓ It's a Windows program</p>
                    <p>✓ Has 3 sections inside</p>
                    <p>✓ When it was compiled</p>
                  </div>
                </div>
              </div>
            )}

            {activeTool === 'exeinfo' && (
              <div className="bg-gray-50 p-6">
                <h4 className="text-xl newq text-gray-800 mb-3">Exeinfo PE - The Quick Scanner</h4>
                <p className="text-gray-700 newq mb-4">
                  Like a supermarket barcode scanner for executables!
                </p>
                <div className="bg-white p-4">
                  <p className="font-mono text-sm">📄 File: suspicious.exe</p>
                  <p className="font-mono text-sm">📏 Size: 272 KB</p>
                  <p className="font-mono text-sm">🎯 Entry Point: 0001A3B0</p>
                  <p className="font-mono text-sm">📦 Packer: UPX (Detected!)</p>
                  <p className="text-red-600 newq mt-2">⚠️ This file is packed with UPX - suspicious!</p>
                </div>
              </div>
            )}

            {activeTool === 'pestudio' && (
              <div className="bg-gray-50 p-6">
                <h4 className="text-xl newq text-gray-800 mb-3">PEStudio - The Security Scanner</h4>
                <p className="text-gray-700 newq mb-4">
                  Like a doctor checking your file for symptoms of being sick!
                </p>
                <div className="bg-white p-4">
                  <p className="font-bold newq text-red-600">Suspicious Indicators Found:</p>
                  <ul className="list-disc pl-5 mt-2">
                    <li>🔴 Network functions detected</li>
                    <li>🔴 Registry modifications</li>
                    <li>🔴 Anti-debugging techniques</li>
                    <li>🟡 Suspicious section names</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Fun Activity */}
            <div className="mt-8 bg-green-50 p-6">
              <h4 className="text-xl newq text-green-800 mb-3">🎮 Try It Yourself!</h4>
              <p className="text-green-700 newq mb-3">
                Can you spot the real EXE file? Look for the MZ signature!
              </p>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="bg-white p-3 font-mono text-sm">
                  File1.jpg: <span className="text-gray-400">FF D8 FF E0</span>
                </div>
                <div className="bg-white p-3 font-mono text-sm border-2 border-red-300">
                  File2.exe: <span className="text-red-600 font-bold">4D 5A</span> 90 00
                </div>
                <div className="bg-white p-3 font-mono text-sm">
                  File3.pdf: <span className="text-gray-400">25 50 44 46</span>
                </div>
              </div>
              <p className="text-green-600 newq mt-3">✅ File2.exe is the real executable!</p>
            </div>
          </section>

          {/* Fingerprinting Section */}
          <section id="fingerprint" className="py-16">
            <h2 className="text-3xl newq text-blue-900 mb-6">Step 2: Giving the File a Fingerprint</h2>
            
            <div className="bg-purple-50 p-8 mb-8">
              <div className="flex items-center mb-4">
                <Fingerprint className="w-8 h-8 text-purple-600 mr-2" />
                <h3 className="text-2xl newq text-purple-800">Hashing = Digital Fingerprint</h3>
              </div>
              
              <p className="text-purple-700 newq mb-6">
                Just like every person has unique fingerprints, every file gets a unique 
                hash (like MD5, SHA1, or SHA256). Even changing ONE letter in the file makes 
                the hash completely different!
              </p>

              {/* Hash Example */}
              <div className="bg-white p-6">
                <h4 className="font-bold newq text-purple-800 mb-3">Real Example:</h4>
                <div className="space-y-3">
                  <div className="bg-purple-100 p-3">
                    <p className="font-mono text-sm">File: "hello.txt" (says "Hello World")</p>
                    <p className="font-mono text-sm">MD5: <span className="bg-white p-1">ed076287532e86365e841e92bfc50d8c</span></p>
                  </div>
                  <div className="bg-purple-100 p-3">
                    <p className="font-mono text-sm">File: "hello2.txt" (says "Hello World!")</p>
                    <p className="font-mono text-sm">MD5: <span className="bg-white p-1">7b5020c7fab9e59c9d7ddf8e3b5b9f9f</span></p>
                  </div>
                  <p className="text-purple-600 newq">✨ See how different they are? Just one tiny change!</p>
                </div>
              </div>

              {/* VirusTotal */}
              <div className="mt-6 bg-blue-50 p-4">
                <div className="flex items-start">
                  <Hash className="w-6 h-6 text-blue-600 mr-2 mt-1" />
                  <div>
                    <h4 className="font-bold newq text-blue-800">VirusTotal - The Wanted Poster Database</h4>
                    <p className="text-blue-700 newq">
                      Take your file's fingerprint and check if other detectives have seen it before!
                      It's like checking if someone's fingerprint is in the police database.
                    </p>
                    <div className="bg-white p-3 mt-3 font-mono text-sm">
                      Check hash: 44d88612fea8a8f36de82e1278abb02f
                      <span className="text-red-600 block mt-1">⚠️ Found in 58 virus databases!</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fuzzy Hashing - The Cousin Detector */}
            <div className="bg-indigo-50 p-6 mt-6">
              <h4 className="text-xl newq text-indigo-800 mb-3">Fuzzy Hashing - Finding Cousins</h4>
              <p className="text-indigo-700 newq mb-3">
                Regular hashing finds identical twins. Fuzzy hashing finds cousins - files that are similar 
                but not exactly the same!
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-3">
                  <p className="font-bold">ssdeep output:</p>
                  <p className="font-mono text-sm">aiggs.exe matches jnas.exe (99%)</p>
                  <p className="font-mono text-sm">crop.exe matches aiggs.exe (0%)</p>
                </div>
                <div className="bg-white p-3">
                  <p className="font-bold">What this means:</p>
                  <p>✓ aiggs.exe and jnas.exe are 99% similar</p>
                  <p>✗ crop.exe is completely different</p>
                </div>
              </div>
            </div>

            {/* Import Hash */}
            <div className="bg-pink-50 p-6 mt-6">
              <h4 className="text-xl newq text-pink-800 mb-3">Import Hash - Same Recipe, Different Cake</h4>
              <p className="text-pink-700 newq">
                If two programs use the same ingredients (import the same functions) in the same order, 
                they probably came from the same kitchen (malware family)!
              </p>
              <div className="bg-white p-3 mt-3 font-mono text-sm">
                <p>maxe.exe imphash: b722c33458882a1ab65a13e99efe357e</p>
                <p>sent.exe imphash: b722c33458882a1ab65a13e99efe357e</p>
                <p className="text-pink-600">✨ Same import hash - probably related!</p>
              </div>
            </div>
          </section>

          {/* String Analysis Section */}
          <section id="strings" className="py-16">
            <h2 className="text-3xl newq text-blue-900 mb-6">Step 3: Finding Hidden Messages</h2>
            
            <div className="bg-green-50 p-8 mb-8">
              <div className="flex items-center mb-4">
                <Type className="w-8 h-8 text-green-600 mr-2" />
                <h3 className="text-2xl newq text-green-800">String Analysis - Reading the Secret Notes</h3>
              </div>
              
              <p className="text-green-700 newq mb-6">
                Programs have text hidden inside them - like secret notes in a bottle. These strings can 
                tell us what the malware might do, what websites it visits, or what files it creates!
              </p>

              {/* Toggle between examples */}
              <div className="mb-4">
                <button
                  className={`px-4 py-2 newq mr-2 ${activeStringExample === 'normal' ? 'bg-green-600 text-white' : 'bg-green-100 text-green-800'}`}
                  onClick={() => setActiveStringExample('normal')}
                >
                  Normal Program
                </button>
                <button
                  className={`px-4 py-2 newq ${activeStringExample === 'malware' ? 'bg-green-600 text-white' : 'bg-green-100 text-green-800'}`}
                  onClick={() => setActiveStringExample('malware')}
                >
                  Malware
                </button>
              </div>

              {activeStringExample === 'normal' ? (
                <div className="bg-white p-4">
                  <p className="font-mono text-sm whitespace-pre">
{`C:>strings notepad.exe
!This program cannot be run in DOS mode.
Microsoft Notepad
File &Edit
.txt
.rtf
Save As...
Print...
Page Setup...
GetOpenFileName
GetSaveFileName`}
                  </p>
                  <p className="text-green-600 newq mt-2">Looks normal - just text editor functions!</p>
                </div>
              ) : (
                <div className="bg-white p-4">
                  <p className="font-mono text-sm whitespace-pre">
{`C:>strings malware.exe
!This program cannot be run in DOS mode.
128.91.34.188
http://evil-command.com/payload
Software\\Microsoft\\Windows\\CurrentVersion\\Run
CreateRemoteThread
WriteProcessMemory
ws2_32.dll
connect
send
recv
password.txt
keylog.log`}
                  </p>
                  <div className="text-red-600 newq mt-3">
                    <p>🔴 Suspicious findings:</p>
                    <ul className="list-disc pl-5">
                      <li>IP address: 128.91.34.188 (Command & Control server)</li>
                      <li>Registry Run key (starts when Windows starts)</li>
                      <li>Network functions (sends stolen data)</li>
                      <li>password.txt, keylog.log (steals passwords)</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Unicode Example */}
              <div className="mt-6 bg-yellow-50 p-4">
                <h4 className="font-bold newq text-yellow-800 mb-2">Unicode Strings - The Secret Code</h4>
                <p className="text-yellow-700 newq mb-2">
                  Sometimes strings are hidden in Unicode (2 bytes per character). Use -el flag to find them!
                </p>
                <div className="bg-white p-3 font-mono text-sm">
                  <p>strings -el malware.exe</p>
                  <p>AppData\Roaming\Microsoft\Windows\Start Menu</p>
                  <p>haixxdrekt.dyndns.hu</p>
                  <p>Software\Microsoft\Windows\CurrentVersion\Run</p>
                </div>
              </div>
            </div>

            {/* Real Detective Story */}
            <div className="bg-blue-50 p-6">
              <h4 className="text-xl newq text-blue-800 mb-3">🕵️ Real Detective Story: The PDB Path</h4>
              <p className="text-blue-700 newq">
                Once, detectives found this string in malware:
              </p>
              <div className="bg-white p-3 font-mono my-3">
                C:\crysis\Release\PDB\payload.pdb
              </div>
              <p className="text-blue-700 newq">
                This path told them the malware was from the "Crysis" ransomware family - 
                like finding the manufacturer's label on a toy!
              </p>
            </div>
          </section>

          {/* Packing Detection Section */}
          <section id="packing" className="py-16">
            <h2 className="text-3xl newq text-blue-900 mb-6">Step 4: Is It Wrapped in Layers?</h2>
            
            <div className="bg-red-50 p-8 mb-8">
              <div className="flex items-center mb-4">
                <Lock className="w-8 h-8 text-red-600 mr-2" />
                <h3 className="text-2xl newq text-red-800">Packed vs Unpacked - The Wrapped Gift</h3>
              </div>

              <p className="text-red-700 newq mb-6">
                Malware authors wrap their code in layers (packing) to hide what's inside. 
                It's like wrapping a gift in many boxes - you can't see the actual toy inside!
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Unpacked Example */}
                <div className="bg-white p-4">
                  <div className="flex items-center mb-3">
                    <Unlock className="w-5 h-5 text-green-600 mr-2" />
                    <h4 className="font-bold newq text-green-800">Normal (Unpacked) Program</h4>
                  </div>
                  <div className="bg-green-100 p-3 font-mono text-sm">
                    <p>📦 Many strings visible:</p>
                    <p>• GetWindowText</p>
                    <p>• CreateFile</p>
                    <p>• WriteFile</p>
                    <p>• InternetOpen</p>
                    <p>• ... and 500 more!</p>
                  </div>
                  <p className="text-green-600 newq mt-2">Lots of visible functions</p>
                </div>

                {/* Packed Example */}
                <div className="bg-white p-4">
                  <div className="flex items-center mb-3">
                    <Lock className="w-5 h-5 text-red-600 mr-2" />
                    <h4 className="font-bold newq text-red-800">Packed Program</h4>
                  </div>
                  <div className="bg-red-100 p-3 font-mono text-sm">
                    <p>📦 Only a few strings:</p>
                    <p>• !This program cannot be run...</p>
                    <p>• UPX0</p>
                    <p>• UPX1</p>
                    <p>• .rsrc</p>
                    <p>• ... that's it!</p>
                  </div>
                  <p className="text-red-600 newq mt-2">Very few strings - suspicious!</p>
                </div>
              </div>

              {/* Comparison Button */}
              <button
                className="mt-6 bg-red-600 text-white px-6 py-3 newq"
                onClick={() => setShowUnpacked(!showUnpacked)}
              >
                {showUnpacked ? 'Hide Details' : 'Click to Compare Sizes'}
              </button>

              {showUnpacked && (
                <div className="mt-4 bg-white p-4">
                  <p className="font-mono text-sm">Original (unpacked) size: <span className="text-green-600">600 KB</span></p>
                  <p className="font-mono text-sm">Packed size: <span className="text-red-600">272 KB (compressed!)</span></p>
                  <p className="text-gray-700 newq mt-2">
                    The packed version is smaller AND hides its true purpose - sneaky!
                  </p>
                </div>
              )}

              {/* Packer Detection Tools */}
              <div className="mt-6 bg-orange-50 p-4">
                <h4 className="font-bold newq text-orange-800 mb-2">Tools to Detect Packers:</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  <div className="bg-white p-2 text-center">PEiD</div>
                  <div className="bg-white p-2 text-center">Exeinfo PE</div>
                  <div className="bg-white p-2 text-center">Detect It Easy</div>
                  <div className="bg-white p-2 text-center">RDG Packer Detector</div>
                </div>
              </div>
            </div>
          </section>

          {/* PE Header Section */}
          <section id="pe-header" className="py-16">
            <h2 className="text-3xl newq text-blue-900 mb-6">Step 5: Reading the File's ID Card</h2>
            
            <div className="bg-purple-50 p-8">
              <div className="flex items-center mb-4">
                <Table className="w-8 h-8 text-purple-600 mr-2" />
                <h3 className="text-2xl newq text-purple-800">PE Header - The Program's Birth Certificate</h3>
              </div>

              <p className="text-purple-700 newq mb-6">
                Every Windows program has a special section at the beginning called the PE Header. 
                It's like an ID card telling us everything about the program!
              </p>

              {/* Sections Table */}
              <div className="overflow-x-auto mb-6">
                <table className="w-full bg-white">
                  <thead className="bg-purple-100">
                    <tr>
                      <th className="p-2 text-left newq">Section Name</th>
                      <th className="p-2 text-left newq">Purpose</th>
                      <th className="p-2 text-left newq">Suspicious Signs</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="p-2 font-mono">.text</td>
                      <td className="p-2">Program code</td>
                      <td className="p-2 text-green-600">Normal</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-2 font-mono">.data</td>
                      <td className="p-2">Program data</td>
                      <td className="p-2 text-green-600">Normal</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-2 font-mono">.rdata</td>
                      <td className="p-2">Read-only data</td>
                      <td className="p-2 text-green-600">Normal</td>
                    </tr>
                    <tr className="border-t bg-red-50">
                      <td className="p-2 font-mono font-bold">UPX0</td>
                      <td className="p-2">Packer section</td>
                      <td className="p-2 text-red-600 font-bold">⚠️ Packed with UPX!</td>
                    </tr>
                    <tr className="border-t bg-red-50">
                      <td className="p-2 font-mono font-bold">UPX1</td>
                      <td className="p-2">Packer section</td>
                      <td className="p-2 text-red-600 font-bold">⚠️ Contains unpacking code</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Section Size Discrepancy */}
              <div className="bg-yellow-50 p-4 mb-6">
                <h4 className="font-bold newq text-yellow-800 mb-2">🔍 The Size Mystery</h4>
                <p className="text-yellow-700 newq mb-3">
                  In packed files, sections have strange sizes:
                </p>
                <div className="bg-white p-3 font-mono">
                  <p>Section UPX0: Raw Size = <span className="text-red-600">0 bytes</span>, Virtual Size = <span className="text-red-600">127 KB</span></p>
                </div>
                <p className="text-yellow-700 newq mt-2">
                  This means the section is empty on disk but grows huge in memory - 
                  like a balloon that's flat until you blow it up!
                </p>
              </div>

              {/* Timestamp */}
              <div className="bg-blue-50 p-4 mb-6">
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-blue-600 mr-2 mt-1" />
                  <div>
                    <h4 className="font-bold newq text-blue-800">Compile Timestamp</h4>
                    <p className="text-blue-700 newq">
                      When was this program "born"? The timestamp can help build a timeline:
                    </p>
                    <div className="bg-white p-2 mt-2 font-mono">
                      TimeDateStamp: 0x4A5BCB3F = Tue Jul 14 10:30:00 2009
                    </div>
                  </div>
                </div>
              </div>

              {/* Resources */}
              <div className="bg-green-50 p-4">
                <div className="flex items-start">
                  <ImageIcon className="w-5 h-5 text-green-600 mr-2 mt-1" />
                  <div>
                    <h4 className="font-bold newq text-green-800">Resources - Hidden Surprises</h4>
                    <p className="text-green-700 newq">
                      Malware often hides extra files in the Resource section:
                    </p>
                    <div className="bg-white p-3 mt-2">
                      <p>🔍 Found in .rsrc section:</p>
                      <ul className="list-disc pl-5">
                        <li>Icon that looks like Excel (trick)</li>
                        <li>Hidden DLL file (extra malware)</li>
                        <li>Encrypted configuration data</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* YARA Rules Section */}
          <section className="py-16">
            <h2 className="text-3xl newq text-blue-900 mb-6">Bonus: YARA Rules - Creating a Wanted Poster</h2>
            
            <div className="bg-indigo-50 p-8">
              <div className="flex items-center mb-4">
                <Filter className="w-8 h-8 text-indigo-600 mr-2" />
                <h3 className="text-2xl newq text-indigo-800">YARA Rules - Like a Police Sketch Artist</h3>
              </div>

              <p className="text-indigo-700 newq mb-6">
                YARA lets you create "wanted posters" for malware - if a file matches the description, 
                you've found your culprit!
              </p>

              <div className="bg-white p-6">
                <h4 className="font-bold newq text-indigo-800 mb-3">Simple YARA Rule:</h4>
                <pre className="bg-gray-100 p-4 font-mono text-sm">
{`rule suspicious_strings {
    strings:
        $a = "Synflooding"
        $b = "Keylogger"
        $c = "Backdoor"
    condition:
        any of them
}`}
                </pre>
                <p className="text-indigo-600 newq mt-2">
                  This rule catches any file containing "Synflooding", "Keylogger", OR "Backdoor"
                </p>
              </div>

              <div className="bg-white p-6 mt-4">
                <h4 className="font-bold newq text-indigo-800 mb-3">Running YARA:</h4>
                <pre className="bg-gray-100 p-2 font-mono text-sm">
yara -r suspicious.yara samples/
                </pre>
                <pre className="bg-gray-100 p-2 font-mono text-sm mt-2">
suspicious_strings samples//spybot.exe
suspicious_strings samples//wuamqr.exe
                </pre>
                <p className="text-green-600 newq mt-2">✅ Found 2 matching files!</p>
              </div>

              {/* Rule Components */}
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white p-3">
                  <span className="text-2xl block mb-2">📝</span>
                  <h5 className="font-bold">Rule Identifier</h5>
                  <p className="text-sm">Name of your rule (like "Synflooding_Detector")</p>
                </div>
                <div className="bg-white p-3">
                  <span className="text-2xl block mb-2">🔤</span>
                  <h5 className="font-bold">String Definition</h5>
                  <p className="text-sm">What to look for (words, hex patterns, etc.)</p>
                </div>
                <div className="bg-white p-3">
                  <span className="text-2xl block mb-2">⚖️</span>
                  <h5 className="font-bold">Condition</h5>
                  <p className="text-sm">When does it match? (any, all, count, etc.)</p>
                </div>
              </div>
            </div>
          </section>

          {/* Virtual Machine Network Settings */}
          <section className="py-16">
            <h2 className="text-3xl newq text-blue-900 mb-6">Safety First: Virtual Machine Networks</h2>
            
            <div className="bg-gray-50 p-8">
              <p className="text-gray-700 newq mb-6">
                When analyzing malware, we use special "pretend computers" called Virtual Machines. 
                They have different network settings like different types of fences!
              </p>

              <div className="overflow-x-auto">
                <table className="w-full bg-white">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="p-2 text-left">Network Type</th>
                      <th className="p-2 text-left">Talk to other VMs?</th>
                      <th className="p-2 text-left">Talk to Internet?</th>
                      <th className="p-2 text-left">Best for...</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="p-2 font-bold">Host-only</td>
                      <td className="p-2">✅ Yes</td>
                      <td className="p-2">❌ No</td>
                      <td className="p-2">Safe analysis, no escape</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-2 font-bold">NAT/Shared</td>
                      <td className="p-2">✅ Yes</td>
                      <td className="p-2">✅ Yes (shared)</td>
                      <td className="p-2">Controlled internet access</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-2 font-bold">Bridged</td>
                      <td className="p-2">✅ Yes</td>
                      <td className="p-2">✅ Yes (direct)</td>
                      <td className="p-2">Looks like real computer</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 bg-yellow-50 p-4">
                <h4 className="font-bold newq text-yellow-800">Safety Rules:</h4>
                <ul className="list-disc pl-5 text-yellow-700">
                  <li>Disable shared folders (no passing notes to real computer!)</li>
                  <li>Use host-only for dangerous malware</li>
                  <li>Update your virtualization software</li>
                  <li>Don't use personal info in the VM</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Summary Section */}
          <section className="py-16 bg-blue-50">
            <h2 className="text-3xl newq text-blue-900 mb-6">What We Learned Today</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-4">
                <span className="text-3xl block mb-2">1️⃣</span>
                <h3 className="font-bold newq">File Type</h3>
                <p className="text-sm">Look for "MZ" signature, don't trust extensions</p>
              </div>
              <div className="bg-white p-4">
                <span className="text-3xl block mb-2">2️⃣</span>
                <h3 className="font-bold newq">Fingerprint</h3>
                <p className="text-sm">MD5/SHA1/SHA256 for exact matches, fuzzy hashing for cousins</p>
              </div>
              <div className="bg-white p-4">
                <span className="text-3xl block mb-2">3️⃣</span>
                <h3 className="font-bold newq">Strings</h3>
                <p className="text-sm">Find IPs, domains, registry keys, functions</p>
              </div>
              <div className="bg-white p-4">
                <span className="text-3xl block mb-2">4️⃣</span>
                <h3 className="font-bold newq">Packing</h3>
                <p className="text-sm">Few strings + strange sections = packed malware</p>
              </div>
            </div>

            {/* Detective Badge */}
            <div className="mt-8 bg-yellow-100 p-6 text-center">
              <span className="text-5xl block mb-3">🕵️</span>
              <h3 className="text-2xl newq text-yellow-800">Congratulations!</h3>
              <p className="text-yellow-700 newq">
                You've completed Unit 2: Static Analysis! You're now a Level 2 Malware Detective!
              </p>
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
                  Making cybersecurity fun for kids!
                </p>
              </div>
              <div>
                <h3 className="text-lg newq mb-2">Unit 2 Topics</h3>
                <ul className="space-y-1">
                  <li><a href="#file-type" className="text-blue-200 newq text-sm">File Type Identification</a></li>
                  <li><a href="#fingerprint" className="text-blue-200 newq text-sm">Fingerprinting</a></li>
                  <li><a href="#strings" className="text-blue-200 newq text-sm">String Analysis</a></li>
                  <li><a href="#packing" className="text-blue-200 newq text-sm">Packing Detection</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg newq mb-2">Tools Learned</h3>
                <p className="text-blue-200 newq text-sm">HxD, CFF Explorer, Exeinfo PE, PEStudio, ssdeep, YARA</p>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-blue-800 text-center">
              <p className="text-blue-300 newq text-sm">
                © 2024 Malware Detectives - Unit 2: Static Analysis
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}