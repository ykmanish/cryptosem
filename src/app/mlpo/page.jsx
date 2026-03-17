'use client'
import React, { useState } from 'react';
import Head from 'next/head';
import { 
  Shield, 
  AlertTriangle, 
  Lock, 
  Eye, 
  Home,
  Menu,
  X,
  FileText,
  Fingerprint,
  Hash,
  Type,
  Package,
  Network,
  Code,
  Clock,
  Image as ImageIcon,
  Download,
  Upload,
  Search,
  Activity,
  BookOpen,
  CheckCircle,
  HelpCircle
} from 'lucide-react';

export default function MalwareAnalysisQA() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [showAnswers, setShowAnswers] = useState({});

  const toggleAnswer = (questionId) => {
    setShowAnswers(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  return (
    <>
      <Head>
        <title>Malware Analysis Q&A - Study Guide</title>
        <meta name="description" content="Comprehensive study guide for malware analysis questions" />
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
            background-color: #f5f5f5;
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
          .bg-gray-50 { background-color: #f9fafb; }
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
          .text-left { text-align: left; }
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
          .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
          .grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
          .gap-8 { gap: 2rem; }
          .gap-6 { gap: 1.5rem; }
          .gap-4 { gap: 1rem; }
          .gap-3 { gap: 0.75rem; }
          .gap-2 { gap: 0.5rem; }
          .font-mono { font-family: monospace; }
          .border-t { border-top-width: 2px; }
          .border-t-2 { border-top-width: 2px; }
          .border-b { border-bottom-width: 2px; }
          .border-b-2 { border-bottom-width: 2px; }
          .pt-4 { padding-top: 1rem; }
          .pb-4 { padding-bottom: 1rem; }
          .pl-4 { padding-left: 1rem; }
          .pr-4 { padding-right: 1rem; }
          .cursor-pointer { cursor: pointer; }
          .w-full { width: 100%; }
          .overflow-x-auto { overflow-x: auto; }
          .whitespace-nowrap { white-space: nowrap; }
          .list-disc { list-style-type: disc; }
          .list-decimal { list-style-type: decimal; }
          .pl-5 { padding-left: 1.25rem; }
          .pl-6 { padding-left: 1.5rem; }

          @media (min-width: 768px) {
            .md\:flex { display: flex; }
            .md\:hidden { display: none; }
            .md\:w-1\/2 { width: 50%; }
            .md\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
            .md\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
            .md\:text-5xl { font-size: 3rem; }
            .md\:mb-0 { margin-bottom: 0; }
          }

          @media (min-width: 1024px) {
            .lg\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
          }
        `}</style>
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-blue-900 text-white p-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-8 h-8 text-blue-200" />
              <span className="text-xl newq">Malware Analysis Q&A Study Guide</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <a href="#q1" className="text-blue-200 newq hover:text-white">Q.1</a>
              <a href="#q2" className="text-blue-200 newq hover:text-white">Q.2</a>
              <a href="#q3" className="text-blue-200 newq hover:text-white">Q.3</a>
              <a href="#q4" className="text-blue-200 newq hover:text-white">Q.4</a>
              <a href="#q5" className="text-blue-200 newq hover:text-white">Q.5</a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 space-y-2">
              <a href="#q1" className="block p-2 text-blue-200 newq">Q.1</a>
              <a href="#q2" className="block p-2 text-blue-200 newq">Q.2</a>
              <a href="#q3" className="block p-2 text-blue-200 newq">Q.3</a>
              <a href="#q4" className="block p-2 text-blue-200 newq">Q.4</a>
              <a href="#q5" className="block p-2 text-blue-200 newq">Q.5</a>
            </div>
          )}
        </nav>

        {/* Header */}
        <div className="bg-blue-600 text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl newq mb-4">Malware Analysis</h1>
            <p className="text-xl text-blue-100 newq">Comprehensive Question & Answer Study Guide</p>
            <p className="text-lg text-blue-200 newq mt-4">Complete answers with real-life examples and easy explanations</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 py-12">

          {/* Q.1 */}
          <section id="q1" className="mb-16 bg-white p-8">
            <div className="flex items-center mb-6 border-b-2 border-blue-200 pb-4">
              <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold mr-3">1</span>
              <h2 className="text-3xl newq text-blue-900">Question 1</h2>
            </div>
            
            <p className="text-lg newq text-gray-700 mb-6">Attempt the following (Any Two)</p>

            {/* Q.1 (a) */}
            <div className="mb-8 border-l-4 border-blue-400 pl-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl newq text-blue-800 font-bold mb-3">(a) Define malware and explain various ways through which a malware infection typically occurs.</h3>
                <button 
                  onClick={() => toggleAnswer('q1a')}
                  className="bg-blue-100 text-blue-800 px-4 py-2 newq text-sm flex items-center"
                >
                  <HelpCircle className="w-4 h-4 mr-1" />
                  {showAnswers.q1a ? 'Hide Answer' : 'Show Answer'}
                </button>
              </div>
              
              {showAnswers.q1a && (
                <div className="bg-blue-50 p-6 mt-4">
                  <div className="flex items-center mb-4">
                    <AlertTriangle className="w-6 h-6 text-blue-600 mr-2" />
                    <h4 className="text-lg newq text-blue-800 font-bold">Definition:</h4>
                  </div>
                  <p className="text-blue-700 newq mb-4">
                    Malware (Malicious Software) is like a computer germ - any software intentionally designed 
                    to harm, exploit, or compromise devices, networks, or data. It's like someone putting a 
                    virus in your food, but for computers!
                  </p>

                  <h4 className="text-lg newq text-blue-800 font-bold mb-3">Ways Malware Infects Computers:</h4>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4">
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-2">📧</span>
                        <h5 className="font-bold newq text-blue-800">1. Phishing Attacks</h5>
                      </div>
                      <p className="text-blue-700 newq text-sm">
                        Emails disguised as legitimate messages containing malicious links/attachments.
                        <br/><span className="text-blue-600">Example: "Click here to claim your prize!" email with virus attached.</span>
                      </p>
                    </div>

                    <div className="bg-white p-4">
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-2">🔌</span>
                        <h5 className="font-bold newq text-blue-800">2. Removable Drives</h5>
                      </div>
                      <p className="text-blue-700 newq text-sm">
                        Malware spreads via USB drives or external hard drives. Auto-installs when connected.
                        <br/><span className="text-blue-600">Example: Friend's USB with "cool photos" actually has hidden malware.</span>
                      </p>
                    </div>

                    <div className="bg-white p-4">
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-2">🌐</span>
                        <h5 className="font-bold newq text-blue-800">3. Infected Websites</h5>
                      </div>
                      <p className="text-blue-700 newq text-sm">
                        Drive-by downloads happen without user approval.
                        <br/><span className="text-blue-600">Example: Visiting a website automatically downloads malware.</span>
                      </p>
                    </div>

                    <div className="bg-white p-4">
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-2">🎭</span>
                        <h5 className="font-bold newq text-blue-800">4. Obfuscation Techniques</h5>
                      </div>
                      <p className="text-blue-700 newq text-sm">
                        Malware uses evasion tactics like web proxies, polymorphic malware.
                        <br/><span className="text-blue-600">Example: Malware that changes its appearance each time.</span>
                      </p>
                    </div>

                    <div className="bg-white p-4">
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-2">📦</span>
                        <h5 className="font-bold newq text-blue-800">5. Third-Party Software</h5>
                      </div>
                      <p className="text-blue-700 newq text-sm">
                        Malware installs alongside other programs from untrusted sources.
                        <br/><span className="text-blue-600">Example: Downloading a free game that installs adware too.</span>
                      </p>
                    </div>

                    <div className="bg-white p-4">
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-2">⚠️</span>
                        <h5 className="font-bold newq text-blue-800">6. PUPs</h5>
                      </div>
                      <p className="text-blue-700 newq text-sm">
                        Potentially Unwanted Programs installed unknowingly.
                        <br/><span className="text-blue-600">Example: Clicking "Next" without reading installs toolbar.</span>
                      </p>
                    </div>
                  </div>

                  {/* Real Life Story */}
                  <div className="mt-6 bg-yellow-50 p-4">
                    <h5 className="font-bold newq text-yellow-800 mb-2">📖 Real Life Example: WannaCry (2017)</h5>
                    <p className="text-yellow-700 newq text-sm">
                      This ransomware infected 200,000+ computers in 150 countries by spreading through email 
                      phishing and unpatched Windows vulnerabilities. It locked hospital computers in the UK, 
                      showing how dangerous malware infections can be!
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Q.1 (b) */}
            <div className="mb-8 border-l-4 border-green-400 pl-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl newq text-green-800 font-bold mb-3">(b) List and explain significance of the commonly found tables and sections in the Portable Executable (PE) header.</h3>
                <button 
                  onClick={() => toggleAnswer('q1b')}
                  className="bg-green-100 text-green-800 px-4 py-2 newq text-sm flex items-center"
                >
                  <HelpCircle className="w-4 h-4 mr-1" />
                  {showAnswers.q1b ? 'Hide Answer' : 'Show Answer'}
                </button>
              </div>
              
              {showAnswers.q1b && (
                <div className="bg-green-50 p-6 mt-4">
                  <p className="text-green-700 newq mb-4">
                    The PE header is like a file's ID card or birth certificate. It tells Windows how to load 
                    and run the program. Think of it like the instruction manual for a toy!
                  </p>

                  <h4 className="text-lg newq text-green-800 font-bold mb-3">Common PE Sections:</h4>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full bg-white">
                      <thead className="bg-green-200">
                        <tr>
                          <th className="p-3 text-left newq">Section Name</th>
                          <th className="p-3 text-left newq">Purpose</th>
                          <th className="p-3 text-left newq">Significance</th>
                          <th className="p-3 text-left newq">Suspicious Signs</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t">
                          <td className="p-3 font-mono font-bold">.text</td>
                          <td className="p-3">Contains executable code</td>
                          <td className="p-3">Where the program instructions live</td>
                          <td className="p-3 text-green-600">Normal section</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-3 font-mono font-bold">.data</td>
                          <td className="p-3">Initialized data (global variables)</td>
                          <td className="p-3">Stores program data that changes</td>
                          <td className="p-3 text-green-600">Normal section</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-3 font-mono font-bold">.rdata</td>
                          <td className="p-3">Read-only data</td>
                          <td className="p-3">Constants, strings, import tables</td>
                          <td className="p-3 text-green-600">Normal section</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-3 font-mono font-bold">.rsrc</td>
                          <td className="p-3">Resources (icons, menus, dialogs)</td>
                          <td className="p-3">Contains embedded files, icons</td>
                          <td className="p-3 text-yellow-600">May hide extra malware</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-3 font-mono font-bold">.reloc</td>
                          <td className="p-3">Relocation information</td>
                          <td className="p-3">Helps load at different addresses</td>
                          <td className="p-3 text-green-600">Normal section</td>
                        </tr>
                        <tr className="border-t bg-red-50">
                          <td className="p-3 font-mono font-bold">UPX0, UPX1</td>
                          <td className="p-3">Packer sections</td>
                          <td className="p-3">Contain compressed/encrypted code</td>
                          <td className="p-3 text-red-600 font-bold">⚠️ Packed malware!</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h4 className="text-lg newq text-green-800 font-bold mt-6 mb-3">Important PE Tables:</h4>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4">
                      <h5 className="font-bold newq text-green-800 mb-2">📋 Import Table</h5>
                      <p className="text-green-700 text-sm">
                        Lists all DLLs and functions the program uses from other files.
                        <br/><span className="text-green-600">Example: If it imports network functions, it probably connects to internet.</span>
                      </p>
                    </div>

                    <div className="bg-white p-4">
                      <h5 className="font-bold newq text-green-800 mb-2">📤 Export Table</h5>
                      <p className="text-green-700 text-sm">
                        Functions the program provides for other programs to use.
                        <br/><span className="text-green-600">Example: DLLs export functions that other programs call.</span>
                      </p>
                    </div>

                    <div className="bg-white p-4">
                      <h5 className="font-bold newq text-green-800 mb-2">📦 Resource Table</h5>
                      <p className="text-green-700 text-sm">
                        Stores icons, images, strings, and embedded files.
                        <br/><span className="text-green-600">Example: Malware might hide extra DLLs here.</span>
                      </p>
                    </div>

                    <div className="bg-white p-4">
                      <h5 className="font-bold newq text-green-800 mb-2">⏰ Time Date Stamp</h5>
                      <p className="text-green-700 text-sm">
                        When the file was compiled.
                        <br/><span className="text-green-600">Example: Helps build attack timeline.</span>
                      </p>
                    </div>
                  </div>

                  {/* Detective Tip */}
                  <div className="mt-6 bg-blue-50 p-4">
                    <h5 className="font-bold newq text-blue-800 mb-2">🔍 Detective Tip:</h5>
                    <p className="text-blue-700 newq">
                      If you see unusual section names (like UPX0, UPX1, .themida) or sections with 
                      Raw Size = 0 but large Virtual Size, the file is likely packed with malware!
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Q.1 (c) */}
            <div className="mb-8 border-l-4 border-purple-400 pl-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl newq text-purple-800 font-bold mb-3">(c) Explain the importance of hash values, fuzzy hashes, import hashes, and section hashes in comparing and classifying malware samples.</h3>
                <button 
                  onClick={() => toggleAnswer('q1c')}
                  className="bg-purple-100 text-purple-800 px-4 py-2 newq text-sm flex items-center"
                >
                  <HelpCircle className="w-4 h-4 mr-1" />
                  {showAnswers.q1c ? 'Hide Answer' : 'Show Answer'}
                </button>
              </div>
              
              {showAnswers.q1c && (
                <div className="bg-purple-50 p-6 mt-4">
                  <p className="text-purple-700 newq mb-4">
                    Hashes are like fingerprints for files. Different types of hashes help us identify 
                    different relationships between malware samples.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Regular Hash */}
                    <div className="bg-white p-5">
                      <div className="flex items-center mb-3">
                        <Fingerprint className="w-6 h-6 text-purple-600 mr-2" />
                        <h4 className="text-lg newq text-purple-800 font-bold">1. Cryptographic Hashes</h4>
                      </div>
                      <p className="text-purple-700 text-sm mb-2">(MD5, SHA1, SHA256)</p>
                      <ul className="list-disc pl-5 text-purple-700 text-sm space-y-1">
                        <li><span className="font-bold">Purpose:</span> Unique identifier for exact file matches</li>
                        <li><span className="font-bold">Analogy:</span> Like DNA - 100% identical or not</li>
                        <li><span className="font-bold">Example:</span> 
                          <div className="bg-purple-100 p-2 mt-1 font-mono text-xs">
                            malware.exe MD5: 44d88612fea8a8f36de82e1278abb02f
                          </div>
                        </li>
                        <li><span className="font-bold">Use:</span> VirusTotal lookups, IOC sharing</li>
                      </ul>
                    </div>

                    {/* Fuzzy Hash */}
                    <div className="bg-white p-5">
                      <div className="flex items-center mb-3">
                        <Hash className="w-6 h-6 text-purple-600 mr-2" />
                        <h4 className="text-lg newq text-purple-800 font-bold">2. Fuzzy Hashing (ssdeep)</h4>
                      </div>
                      <p className="text-purple-700 text-sm mb-2">Context-triggered piecewise hashes</p>
                      <ul className="list-disc pl-5 text-purple-700 text-sm space-y-1">
                        <li><span className="font-bold">Purpose:</span> Find similar but not identical files</li>
                        <li><span className="font-bold">Analogy:</span> Like finding cousins in a family</li>
                        <li><span className="font-bold">Example:</span> 
                          <div className="bg-purple-100 p-2 mt-1 font-mono text-xs">
                            aiggs.exe matches jnas.exe (99%)
                          </div>
                        </li>
                        <li><span className="font-bold">Use:</span> Grouping malware variants</li>
                      </ul>
                    </div>

                    {/* Import Hash */}
                    <div className="bg-white p-5">
                      <div className="flex items-center mb-3">
                        <Download className="w-6 h-6 text-purple-600 mr-2" />
                        <h4 className="text-lg newq text-purple-800 font-bold">3. Import Hash (imphash)</h4>
                      </div>
                      <p className="text-purple-700 text-sm mb-2">Hash of import table (DLLs & functions)</p>
                      <ul className="list-disc pl-5 text-purple-700 text-sm space-y-1">
                        <li><span className="font-bold">Purpose:</span> Identify files from same source code</li>
                        <li><span className="font-bold">Analogy:</span> Same recipe, different bakers</li>
                        <li><span className="font-bold">Example:</span> 
                          <div className="bg-purple-100 p-2 mt-1 font-mono text-xs">
                            Both files: b722c33458882a1ab65a13e99efe357e
                          </div>
                        </li>
                        <li><span className="font-bold">Use:</span> Linking malware families</li>
                      </ul>
                    </div>

                    {/* Section Hash */}
                    <div className="bg-white p-5">
                      <div className="flex items-center mb-3">
                        <Upload className="w-6 h-6 text-purple-600 mr-2" />
                        <h4 className="text-lg newq text-purple-800 font-bold">4. Section Hashes</h4>
                      </div>
                      <p className="text-purple-700 text-sm mb-2">MD5 of each PE section</p>
                      <ul className="list-disc pl-5 text-purple-700 text-sm space-y-1">
                        <li><span className="font-bold">Purpose:</span> Compare individual parts of files</li>
                        <li><span className="font-bold">Analogy:</span> Matching Lego blocks</li>
                        <li><span className="font-bold">Example:</span> 
                          <div className="bg-purple-100 p-2 mt-1 font-mono text-xs">
                            .text: a1b2c3..., .data: d4e5f6...
                          </div>
                        </li>
                        <li><span className="font-bold">Use:</span> Identify shared code between samples</li>
                      </ul>
                    </div>
                  </div>

                  {/* Summary Table */}
                  <div className="mt-6 bg-white p-4">
                    <h4 className="font-bold newq text-purple-800 mb-3">When to Use Which Hash:</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-purple-100">
                          <tr>
                            <th className="p-2 text-left">Hash Type</th>
                            <th className="p-2 text-left">Matches</th>
                            <th className="p-2 text-left">Ignores</th>
                            <th className="p-2 text-left">Best For</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-t">
                            <td className="p-2 font-bold">MD5/SHA</td>
                            <td>Exact copies</td>
                            <td>1 byte change = different hash</td>
                            <td>VirusTotal, IOC sharing</td>
                          </tr>
                          <tr className="border-t">
                            <td className="p-2 font-bold">Fuzzy Hash</td>
                            <td>Similar files</td>
                            <td>Minor changes</td>
                            <td>Finding variants</td>
                          </tr>
                          <tr className="border-t">
                            <td className="p-2 font-bold">Import Hash</td>
                            <td>Same imports order</td>
                            <td>Code differences</td>
                            <td>Same compiler/author</td>
                          </tr>
                          <tr className="border-t">
                            <td className="p-2 font-bold">Section Hash</td>
                            <td>Same sections</td>
                            <td>Different sections</td>
                            <td>Code reuse detection</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Q.2 */}
          <section id="q2" className="mb-16 bg-white p-8">
            <div className="flex items-center mb-6 border-b-2 border-green-200 pb-4">
              <span className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold mr-3">2</span>
              <h2 className="text-3xl newq text-green-900">Question 2</h2>
            </div>
            
            <p className="text-lg newq text-gray-700 mb-6">Attempt the following (Any Two)</p>

            {/* Q.2 (a) */}
            <div className="mb-8 border-l-4 border-orange-400 pl-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl newq text-orange-800 font-bold mb-3">(a) Explain the term : Packer, Crypter, Obfuscation.</h3>
                <button 
                  onClick={() => toggleAnswer('q2a')}
                  className="bg-orange-100 text-orange-800 px-4 py-2 newq text-sm flex items-center"
                >
                  <HelpCircle className="w-4 h-4 mr-1" />
                  {showAnswers.q2a ? 'Hide Answer' : 'Show Answer'}
                </button>
              </div>
              
              {showAnswers.q2a && (
                <div className="bg-orange-50 p-6 mt-4">
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Packer */}
                    <div className="bg-white p-5">
                      <div className="flex items-center mb-3">
                        <Package className="w-8 h-8 text-orange-600 mr-2" />
                        <h4 className="text-xl newq text-orange-800 font-bold">Packer</h4>
                      </div>
                      <p className="text-orange-700 newq mb-3">
                        A program that compresses an executable to hide its contents.
                      </p>
                      <div className="bg-orange-100 p-3 mb-3">
                        <p className="font-bold text-sm">Real Life Analogy:</p>
                        <p className="text-sm">IKEA furniture - comes in a flat box (compressed) with instructions (stub). You need to build it before using!</p>
                      </div>
                      <ul className="list-disc pl-5 text-sm text-orange-700">
                        <li><span className="font-bold">Example:</span> UPX, ASPack</li>
                        <li><span className="font-bold">How it works:</span> Compresses original code, adds unpacking stub</li>
                        <li><span className="font-bold">Detection:</span> Few strings, unusual section names</li>
                      </ul>
                    </div>

                    {/* Crypter */}
                    <div className="bg-white p-5">
                      <div className="flex items-center mb-3">
                        <Lock className="w-8 h-8 text-orange-600 mr-2" />
                        <h4 className="text-xl newq text-orange-800 font-bold">Crypter</h4>
                      </div>
                      <p className="text-orange-700 newq mb-3">
                        Similar to packer but uses encryption instead of compression.
                      </p>
                      <div className="bg-orange-100 p-3 mb-3">
                        <p className="font-bold text-sm">Real Life Analogy:</p>
                        <p className="text-sm">A locked diary with a key. You need the key (decryption routine) to read the secrets inside!</p>
                      </div>
                      <ul className="list-disc pl-5 text-sm text-orange-700">
                        <li><span className="font-bold">Example:</span> Crypters in malware kits</li>
                        <li><span className="font-bold">How it works:</span> Encrypts malware, decrypts at runtime</li>
                        <li><span className="font-bold">Purpose:</span> Bypass signature-based detection</li>
                      </ul>
                    </div>

                    {/* Obfuscation */}
                    <div className="bg-white p-5">
                      <div className="flex items-center mb-3">
                        <Eye className="w-8 h-8 text-orange-600 mr-2" />
                        <h4 className="text-xl newq text-orange-800 font-bold">Obfuscation</h4>
                      </div>
                      <p className="text-orange-700 newq mb-3">
                        Making code confusing and hard to read/understand.
                      </p>
                      <div className="bg-orange-100 p-3 mb-3">
                        <p className="font-bold text-sm">Real Life Analogy:</p>
                        <p className="text-sm">Writing a secret message in code that only you understand, or using invisible ink!</p>
                      </div>
                      <ul className="list-disc pl-5 text-sm text-orange-700">
                        <li><span className="font-bold">Techniques:</span> XOR encryption, code transposition, junk code insertion</li>
                        <li><span className="font-bold">Purpose:</span> Slow down analysis, evade detection</li>
                      </ul>
                    </div>
                  </div>

                  {/* Comparison Table */}
                  <div className="mt-6 bg-white p-4">
                    <h4 className="font-bold newq text-orange-800 mb-3">Quick Comparison:</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-orange-100">
                          <tr>
                            <th className="p-2 text-left">Technique</th>
                            <th className="p-2 text-left">What it does</th>
                            <th className="p-2 text-left">Detection Difficulty</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-t">
                            <td className="p-2 font-bold">Packer</td>
                            <td>Compresses code</td>
                            <td>Medium - identifiable by UPX signatures</td>
                          </tr>
                          <tr className="border-t">
                            <td className="p-2 font-bold">Crypter</td>
                            <td>Encrypts code</td>
                            <td>High - needs decryption key</td>
                          </tr>
                          <tr className="border-t">
                            <td className="p-2 font-bold">Obfuscation</td>
                            <td>Makes code confusing</td>
                            <td>Very High - code is readable but meaningless</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Q.2 (b) */}
            <div className="mb-8 border-l-4 border-teal-400 pl-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl newq text-teal-800 font-bold mb-3">(b) Examining importance of checking compile time and resource utilization of suspected malware file.</h3>
                <button 
                  onClick={() => toggleAnswer('q2b')}
                  className="bg-teal-100 text-teal-800 px-4 py-2 newq text-sm flex items-center"
                >
                  <HelpCircle className="w-4 h-4 mr-1" />
                  {showAnswers.q2b ? 'Hide Answer' : 'Show Answer'}
                </button>
              </div>
              
              {showAnswers.q2b && (
                <div className="bg-teal-50 p-6 mt-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Compile Time */}
                    <div className="bg-white p-5">
                      <div className="flex items-center mb-3">
                        <Clock className="w-6 h-6 text-teal-600 mr-2" />
                        <h4 className="text-lg newq text-teal-800 font-bold">Compile Time Importance</h4>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-teal-600 mr-2">⏰</span>
                          <div>
                            <span className="font-bold">Build Timeline:</span>
                            <p className="text-sm">Shows when malware was created, helps track attack campaigns</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-teal-600 mr-2">🔍</span>
                          <div>
                            <span className="font-bold">Fake Timestamps:</span>
                            <p className="text-sm">Attackers may fake timestamps - suspicious if date is in future or very old</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-teal-600 mr-2">📅</span>
                          <div>
                            <span className="font-bold">Correlation:</span>
                            <p className="text-sm">Match with known attack dates to identify campaigns</p>
                          </div>
                        </li>
                      </ul>
                      <div className="bg-teal-100 p-3 mt-3">
                        <p className="font-mono text-xs">Example: Timestamp 0x4A5BCB3F = Tue Jul 14 2009</p>
                      </div>
                    </div>

                    {/* Resource Utilization */}
                    <div className="bg-white p-5">
                      <div className="flex items-center mb-3">
                        <ImageIcon className="w-6 h-6 text-teal-600 mr-2" />
                        <h4 className="text-lg newq text-teal-800 font-bold">Resource Utilization Importance</h4>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-teal-600 mr-2">🖼️</span>
                          <div>
                            <span className="font-bold">Hidden Files:</span>
                            <p className="text-sm">Malware hides extra DLLs, executables in resources</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-teal-600 mr-2">🎭</span>
                          <div>
                            <span className="font-bold">Disguises:</span>
                            <p className="text-sm">Uses legitimate icons (PDF, Excel) to look safe</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-teal-600 mr-2">📊</span>
                          <div>
                            <span className="font-bold">Configuration:</span>
                            <p className="text-sm">Stores C2 servers, encryption keys in resources</p>
                          </div>
                        </li>
                      </ul>
                      <div className="bg-teal-100 p-3 mt-3">
                        <p className="text-sm">Example: Malware using Excel icon to trick users into clicking</p>
                      </div>
                    </div>
                  </div>

                  {/* Real Example */}
                  <div className="mt-6 bg-yellow-50 p-4">
                    <h5 className="font-bold newq text-yellow-800 mb-2">📖 Real Case: Ransomware Hidden in Resources</h5>
                    <p className="text-yellow-700 newq text-sm">
                      A malware sample appeared as a Word document (had Word icon in resources), but the resource 
                      section actually contained an encrypted ransomware payload that would decrypt and run when opened!
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Q.2 (c) */}
            <div className="mb-8 border-l-4 border-indigo-400 pl-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl newq text-indigo-800 font-bold mb-3">(c) List and explain any two tools for determining the file type of a suspected malware file.</h3>
                <button 
                  onClick={() => toggleAnswer('q2c')}
                  className="bg-indigo-100 text-indigo-800 px-4 py-2 newq text-sm flex items-center"
                >
                  <HelpCircle className="w-4 h-4 mr-1" />
                  {showAnswers.q2c ? 'Hide Answer' : 'Show Answer'}
                </button>
              </div>
              
              {showAnswers.q2c && (
                <div className="bg-indigo-50 p-6 mt-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Tool 1: HxD */}
                    <div className="bg-white p-5">
                      <div className="flex items-center mb-3">
                        <FileText className="w-8 h-8 text-indigo-600 mr-2" />
                        <h4 className="text-xl newq text-indigo-800 font-bold">1. HxD (Hex Editor)</h4>
                      </div>
                      <p className="text-indigo-700 newq mb-3">
                        A hex editor that lets you see every byte of a file - like a microscope for files!
                      </p>
                      <div className="bg-indigo-100 p-3 mb-3">
                        <p className="font-bold text-sm">How it works:</p>
                        <p className="text-sm">Shows raw hexadecimal values and ASCII representation of files.</p>
                      </div>
                      <ul className="list-disc pl-5 text-sm text-indigo-700">
                        <li><span className="font-bold">Look for:</span> First 2 bytes "4D 5A" (MZ) for EXE files</li>
                        <li><span className="font-bold">Other signatures:</span> 
                          <ul className="pl-4 mt-1">
                            <li>PDF: 25 50 44 46 (%PDF)</li>
                            <li>ZIP: 50 4B 03 04 (PK..)</li>
                            <li>ELF: 7F 45 4C 46</li>
                          </ul>
                        </li>
                      </ul>
                      <div className="bg-gray-100 p-2 mt-3 font-mono text-xs">
                        Offset: 0  1  2  3<br/>
                        0000: 4D 5A 90 00  ← EXE file!
                      </div>
                    </div>

                    {/* Tool 2: Exeinfo PE */}
                    <div className="bg-white p-5">
                      <div className="flex items-center mb-3">
                        <Search className="w-8 h-8 text-indigo-600 mr-2" />
                        <h4 className="text-xl newq text-indigo-800 font-bold">2. Exeinfo PE</h4>
                      </div>
                      <p className="text-indigo-700 newq mb-3">
                        A specialized tool for analyzing Windows executables - like a scanner that reads file's ID card!
                      </p>
                      <div className="bg-indigo-100 p-3 mb-3">
                        <p className="font-bold text-sm">What it shows:</p>
                        <p className="text-sm">File type, entry point, section info, packer detection, and more.</p>
                      </div>
                      <ul className="list-disc pl-5 text-sm text-indigo-700">
                        <li><span className="font-bold">File info:</span> Name, size, hash values</li>
                        <li><span className="font-bold">Entry point:</span> First instruction address</li>
                        <li><span className="font-bold">Sections:</span> Lists all sections with details</li>
                        <li><span className="font-bold">Packer detection:</span> Identifies UPX, ASPack, etc.</li>
                        <li><span className="font-bold">Imports/Exports:</span> Shows DLL dependencies</li>
                      </ul>
                      <div className="bg-gray-100 p-2 mt-3 text-xs">
                        📄 suspicious.exe<br/>
                        📦 Detected: UPX packed!<br/>
                        📏 Size: 272 KB<br/>
                        🎯 Entry: 0001A3B0
                      </div>
                    </div>
                  </div>

                  {/* Bonus Tool */}
                  <div className="mt-6 bg-yellow-50 p-4">
                    <h5 className="font-bold newq text-yellow-800 mb-2">🔧 Bonus Tool: PEStudio</h5>
                    <p className="text-yellow-700 newq text-sm">
                      Another great tool that scans executables for suspicious artifacts, highlights potentially 
                      malicious indicators in red/yellow, and shows imports, strings, and resources all in one place.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Q.3 */}
          <section id="q3" className="mb-16 bg-white p-8">
            <div className="flex items-center mb-6 border-b-2 border-purple-200 pb-4">
              <span className="bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold mr-3">3</span>
              <h2 className="text-3xl newq text-purple-900">Question 3</h2>
            </div>
            
            <p className="text-lg newq text-gray-700 mb-6">Attempt the following (Any Two)</p>

            {/* Q.3 (a) */}
            <div className="mb-8 border-l-4 border-pink-400 pl-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl newq text-pink-800 font-bold mb-3">(a) How does fingerprinting a malware sample help in identifying its behavior or origin?</h3>
                <button 
                  onClick={() => toggleAnswer('q3a')}
                  className="bg-pink-100 text-pink-800 px-4 py-2 newq text-sm flex items-center"
                >
                  <HelpCircle className="w-4 h-4 mr-1" />
                  {showAnswers.q3a ? 'Hide Answer' : 'Show Answer'}
                </button>
              </div>
              
              {showAnswers.q3a && (
                <div className="bg-pink-50 p-6 mt-4">
                  <p className="text-pink-700 newq mb-4">
                    Fingerprinting malware is like taking a criminal's fingerprints - it helps identify who they are, 
                    if they've committed crimes before, and connects them to their criminal family!
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Identifying Behavior */}
                    <div className="bg-white p-5">
                      <h4 className="text-lg newq text-pink-800 font-bold mb-3">🔍 Identifying Behavior</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-pink-600 mr-2">📋</span>
                          <div>
                            <span className="font-bold">Import Hash (imphash):</span>
                            <p className="text-sm">If malware imports network functions (socket, connect, send), it likely communicates over network</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-pink-600 mr-2">🔤</span>
                          <div>
                            <span className="font-bold">Strings:</span>
                            <p className="text-sm">Contains URLs, IPs, registry keys showing what it does</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-pink-600 mr-2">📦</span>
                          <div>
                            <span className="font-bold">Packer fingerprints:</span>
                            <p className="text-sm">Specific packers indicate certain capabilities</p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Identifying Origin */}
                    <div className="bg-white p-5">
                      <h4 className="text-lg newq text-pink-800 font-bold mb-3">🌍 Identifying Origin</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-pink-600 mr-2">👪</span>
                          <div>
                            <span className="font-bold">Fuzzy hashes:</span>
                            <p className="text-sm">Matches with known malware families (99% match to Loki bot)</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-pink-600 mr-2">🛤️</span>
                          <div>
                            <span className="font-bold">PDB paths:</span>
                            <p className="text-sm">C:\crysis\Release\PDB\payload.pdb identifies Crysis ransomware</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-pink-600 mr-2">⏰</span>
                          <div>
                            <span className="font-bold">Compile timestamps:</span>
                            <p className="text-sm">Matches attack campaign timelines</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Real Example */}
                  <div className="mt-6 bg-yellow-50 p-4">
                    <h5 className="font-bold newq text-yellow-800 mb-2">📖 Real Example: WannaCry Fingerprinting</h5>
                    <p className="text-yellow-700 newq text-sm">
                      Security researchers used fuzzy hashing and import hashing to link different WannaCry variants 
                      together, showing they came from the same threat group even though file names and MD5 hashes were different.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Q.3 (b) */}
            <div className="mb-8 border-l-4 border-amber-400 pl-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl newq text-amber-800 font-bold mb-3">(b) What information can be derived by inspecting file dependencies, imports and exports?</h3>
                <button 
                  onClick={() => toggleAnswer('q3b')}
                  className="bg-amber-100 text-amber-800 px-4 py-2 newq text-sm flex items-center"
                >
                  <HelpCircle className="w-4 h-4 mr-1" />
                  {showAnswers.q3b ? 'Hide Answer' : 'Show Answer'}
                </button>
              </div>
              
              {showAnswers.q3b && (
                <div className="bg-amber-50 p-6 mt-4">
                  <p className="text-amber-700 newq mb-4">
                    Inspecting dependencies, imports, and exports is like looking at what tools a burglar carries 
                    and what locks they know how to pick!
                  </p>

                  <div className="grid md:grid-cols-3 gap-4">
                    {/* Dependencies */}
                    <div className="bg-white p-4">
                      <h4 className="font-bold newq text-amber-800 mb-2">📚 File Dependencies</h4>
                      <p className="text-amber-700 text-sm mb-2">Which DLLs the file needs:</p>
                      <ul className="list-disc pl-5 text-sm">
                        <li>kernel32.dll - Core Windows functions</li>
                        <li>ws2_32.dll - Network capabilities</li>
                        <li>advapi32.dll - Registry access</li>
                        <li>user32.dll - GUI interactions</li>
                      </ul>
                      <p className="text-amber-600 text-xs mt-2">👉 If it needs network DLLs, it probably connects to internet</p>
                    </div>

                    {/* Imports */}
                    <div className="bg-white p-4">
                      <h4 className="font-bold newq text-amber-800 mb-2">⬇️ Imports</h4>
                      <p className="text-amber-700 text-sm mb-2">Specific functions used:</p>
                      <ul className="list-disc pl-5 text-sm">
                        <li>CreateFile, WriteFile - File operations</li>
                        <li>RegSetValue - Registry modifications</li>
                        <li>socket, connect - Network communication</li>
                        <li>CreateRemoteThread - Process injection</li>
                      </ul>
                      <p className="text-amber-600 text-xs mt-2">👉 Reveals exact capabilities</p>
                    </div>

                    {/* Exports */}
                    <div className="bg-white p-4">
                      <h4 className="font-bold newq text-amber-800 mb-2">⬆️ Exports</h4>
                      <p className="text-amber-700 text-sm mb-2">Functions it provides:</p>
                      <ul className="list-disc pl-5 text-sm">
                        <li>DLLs export functions for others</li>
                        <li>May be disguised with fake names</li>
                        <li>Can reveal DLL's purpose</li>
                      </ul>
                      <p className="text-amber-600 text-xs mt-2">👉 Shows what services it offers to other malware</p>
                    </div>
                  </div>

                  {/* Example Table */}
                  <div className="mt-6 bg-white p-4">
                    <h4 className="font-bold newq text-amber-800 mb-3">Example: Malware Import Analysis</h4>
                    <table className="w-full">
                      <thead className="bg-amber-100">
                        <tr>
                          <th className="p-2 text-left">DLL</th>
                          <th className="p-2 text-left">Imported Functions</th>
                          <th className="p-2 text-left">What It Reveals</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t">
                          <td className="p-2 font-mono">ws2_32.dll</td>
                          <td className="p-2 font-mono">socket, connect, send, recv</td>
                          <td className="p-2">Network communication - C2 server connection</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-2 font-mono">advapi32.dll</td>
                          <td className="p-2 font-mono">RegSetValue, RegCreateKey</td>
                          <td className="p-2">Registry persistence - survives reboot</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-2 font-mono">kernel32.dll</td>
                          <td className="p-2 font-mono">CreateFile, WriteFile, DeleteFile</td>
                          <td className="p-2">File operations - drops or modifies files</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>

            {/* Q.3 (c) */}
            <div className="mb-8 border-l-4 border-cyan-400 pl-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl newq text-cyan-800 font-bold mb-3">(c) Explain network settings Host-only mode, NAT/Shared mode, and Bridge mode in virtual machines.</h3>
                <button 
                  onClick={() => toggleAnswer('q3c')}
                  className="bg-cyan-100 text-cyan-800 px-4 py-2 newq text-sm flex items-center"
                >
                  <HelpCircle className="w-4 h-4 mr-1" />
                  {showAnswers.q3c ? 'Hide Answer' : 'Show Answer'}
                </button>
              </div>
              
              {showAnswers.q3c && (
                <div className="bg-cyan-50 p-6 mt-4">
                  <p className="text-cyan-700 newq mb-4">
                    Think of virtual machines like having a play computer inside your real computer. Network settings 
                    control how this play computer can talk to the outside world.
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    {/* Host-only */}
                    <div className="bg-white p-4">
                      <h4 className="font-bold newq text-cyan-800 mb-2">🏠 Host-only Mode</h4>
                      <p className="text-cyan-700 text-sm mb-2">Like a private room with no windows!</p>
                      <ul className="list-disc pl-5 text-sm">
                        <li>Can talk to host computer</li>
                        <li>Can talk to other VMs</li>
                        <li>❌ NO internet access</li>
                        <li>❌ No outside communication</li>
                      </ul>
                      <p className="text-cyan-600 text-xs mt-2">Best for: Analyzing dangerous malware safely</p>
                    </div>

                    {/* NAT/Shared */}
                    <div className="bg-white p-4">
                      <h4 className="font-bold newq text-cyan-800 mb-2">🌐 NAT/Shared Mode</h4>
                      <p className="text-cyan-700 text-sm mb-2">Like sharing a phone line with your family!</p>
                      <ul className="list-disc pl-5 text-sm">
                        <li>Shares host's internet connection</li>
                        <li>Has its own IP but appears as host</li>
                        <li>✅ Can access internet</li>
                        <li>❌ Outside can't directly connect</li>
                      </ul>
                      <p className="text-cyan-600 text-xs mt-2">Best for: Controlled internet access</p>
                    </div>

                    {/* Bridged */}
                    <div className="bg-white p-4">
                      <h4 className="font-bold newq text-cyan-800 mb-2">🌉 Bridged Mode</h4>
                      <p className="text-cyan-700 text-sm mb-2">Like having its own house and phone line!</p>
                      <ul className="list-disc pl-5 text-sm">
                        <li>Gets own IP on the network</li>
                        <li>Looks like real computer</li>
                        <li>✅ Full internet access</li>
                        <li>✅ Outside can connect directly</li>
                      </ul>
                      <p className="text-cyan-600 text-xs mt-2">Best for: Malware that needs to look real</p>
                    </div>
                  </div>

                  {/* Comparison Table */}
                  <div className="overflow-x-auto bg-white p-4">
                    <table className="w-full">
                      <thead className="bg-cyan-100">
                        <tr>
                          <th className="p-2 text-left">Feature</th>
                          <th className="p-2 text-left">Host-only</th>
                          <th className="p-2 text-left">NAT/Shared</th>
                          <th className="p-2 text-left">Bridged</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t">
                          <td className="p-2 font-bold">VMs can talk to each other</td>
                          <td className="p-2">✅ Yes</td>
                          <td className="p-2">✅ Yes</td>
                          <td className="p-2">✅ Yes</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-2 font-bold">VMs can talk to host</td>
                          <td className="p-2">✅ Yes</td>
                          <td className="p-2">✅ Yes</td>
                          <td className="p-2">✅ Yes</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-2 font-bold">VMs can access internet</td>
                          <td className="p-2">❌ No</td>
                          <td className="p-2">✅ Yes</td>
                          <td className="p-2">✅ Yes</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-2 font-bold">Outside can access VMs</td>
                          <td className="p-2">❌ No</td>
                          <td className="p-2">❌ No</td>
                          <td className="p-2">✅ Yes</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Safety Tips */}
                  <div className="mt-6 bg-red-50 p-4">
                    <h5 className="font-bold newq text-red-800 mb-2">⚠️ Safety Rules for Malware Analysis:</h5>
                    <ul className="list-disc pl-5 text-red-700 text-sm">
                      <li>Use Host-only for extremely dangerous malware</li>
                      <li>Disable shared folders between host and VM</li>
                      <li>Take snapshots before running malware</li>
                      <li>Never use personal information in the VM</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Q.4 */}
          <section id="q4" className="mb-16 bg-white p-8">
            <div className="flex items-center mb-6 border-b-2 border-red-200 pb-4">
              <span className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold mr-3">4</span>
              <h2 className="text-3xl newq text-red-900">Question 4</h2>
            </div>

            {/* Q.4 (a) */}
            <div className="mb-8 border-l-4 border-red-400 pl-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl newq text-red-800 font-bold mb-3">(a) What is string analysis? What types of strings are typically extracted from a malware sample, and what can these strings reveal about its functionality?</h3>
                <button 
                  onClick={() => toggleAnswer('q4a')}
                  className="bg-red-100 text-red-800 px-4 py-2 newq text-sm flex items-center"
                >
                  <HelpCircle className="w-4 h-4 mr-1" />
                  {showAnswers.q4a ? 'Hide Answer' : 'Show Answer'}
                </button>
              </div>
              
              {showAnswers.q4a && (
                <div className="bg-red-50 p-6 mt-4">
                  <div className="flex items-center mb-4">
                    <Type className="w-8 h-8 text-red-600 mr-2" />
                    <h4 className="text-xl newq text-red-800">String Analysis Explained</h4>
                  </div>
                  
                  <p className="text-red-700 newq mb-4">
                    String analysis is like finding hidden messages in a file. Programs contain readable text 
                    (strings) that can tell us what the program does, who made it, and where it wants to connect.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Types of Strings */}
                    <div className="bg-white p-4">
                      <h5 className="font-bold newq text-red-800 mb-3">📝 Types of Strings Found:</h5>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-red-600 mr-2">🌐</span>
                          <div>
                            <span className="font-bold">IP Addresses:</span>
                            <p className="text-sm">192.168.1.100, 45.33.22.11 - C2 servers</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-600 mr-2">🔗</span>
                          <div>
                            <span className="font-bold">Domain Names:</span>
                            <p className="text-sm">evil-command.com, malware-update.net</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-600 mr-2">📋</span>
                          <div>
                            <span className="font-bold">Registry Paths:</span>
                            <p className="text-sm">Software\Microsoft\Windows\CurrentVersion\Run</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-600 mr-2">📁</span>
                          <div>
                            <span className="font-bold">File Names:</span>
                            <p className="text-sm">password.txt, keylog.log, ransom_note.txt</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-600 mr-2">⚙️</span>
                          <div>
                            <span className="font-bold">API Functions:</span>
                            <p className="text-sm">CreateFile, WriteProcessMemory, socket</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-600 mr-2">🚫</span>
                          <div>
                            <span className="font-bold">Error Messages:</span>
                            <p className="text-sm">"Failed to send email", "Connection timeout"</p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* What They Reveal */}
                    <div className="bg-white p-4">
                      <h5 className="font-bold newq text-red-800 mb-3">🔍 What Strings Reveal:</h5>
                      <ul className="space-y-3">
                        <li className="bg-red-50 p-2">
                          <span className="font-bold">Network activity:</span> URLs, IPs, domains, user-agent strings
                        </li>
                        <li className="bg-red-50 p-2">
                          <span className="font-bold">Persistence:</span> Run keys, service names, startup folders
                        </li>
                        <li className="bg-red-50 p-2">
                          <span className="font-bold">File operations:</span> Files to create, modify, or delete
                        </li>
                        <li className="bg-red-50 p-2">
                          <span className="font-bold">Capabilities:</span> Keylogging, screenshot, encryption
                        </li>
                        <li className="bg-red-50 p-2">
                          <span className="font-bold">Identity:</span> PDB paths, author names, version info
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Example */}
                  <div className="mt-6 bg-gray-100 p-4">
                    <h5 className="font-bold newq text-gray-800 mb-2">Example: Strings from Spybot Malware</h5>
                    <pre className="bg-white p-3 font-mono text-xs overflow-x-auto">
{`128.91.34.188
Software\Microsoft\Windows\CurrentVersion\Run
CreateRemoteThread
WriteProcessMemory
keylog.dll
password.txt
FTP Upload failed
http://malware-update.com/payload`}
                    </pre>
                    <p className="text-red-600 newq text-sm mt-2">
                      This reveals: C2 server at 128.91.34.188, registry persistence, process injection capabilities, 
                      keylogging, password stealing, and update mechanism!
                    </p>
                  </div>

                  {/* Unicode Note */}
                  <div className="mt-4 bg-blue-50 p-3">
                    <p className="text-blue-700 newq text-sm">
                      <span className="font-bold">💡 Note:</span> Use 'strings -el' to extract Unicode strings (2-byte characters) 
                      which may hide additional information!
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Q.4 (b) */}
            <div className="mb-8 border-l-4 border-orange-400 pl-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl newq text-orange-800 font-bold mb-3">(b) What are the different types of malware analysis, and how do they differ from each other?</h3>
                <button 
                  onClick={() => toggleAnswer('q4b')}
                  className="bg-orange-100 text-orange-800 px-4 py-2 newq text-sm flex items-center"
                >
                  <HelpCircle className="w-4 h-4 mr-1" />
                  {showAnswers.q4b ? 'Hide Answer' : 'Show Answer'}
                </button>
              </div>
              
              {showAnswers.q4b && (
                <div className="bg-orange-50 p-6 mt-4">
                  <p className="text-orange-700 newq mb-4">
                    Just like doctors have different ways to examine patients (looking, scanning, testing), 
                    malware analysts have different methods to examine malicious software.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Static Analysis */}
                    <div className="bg-white p-5">
                      <div className="flex items-center mb-3">
                        <Search className="w-6 h-6 text-orange-600 mr-2" />
                        <h4 className="text-lg newq text-orange-800 font-bold">Static Analysis</h4>
                      </div>
                      <p className="text-sm text-orange-700 mb-2">Examining without running the file</p>
                      <ul className="list-disc pl-5 text-xs space-y-1">
                        <li>Check file type (MZ signature)</li>
                        <li>Calculate hashes (MD5, SHA1)</li>
                        <li>Extract strings</li>
                        <li>Check imports/exports</li>
                        <li>Detect packers</li>
                      </ul>
                      <div className="bg-orange-100 p-2 mt-2 text-xs">
                        🎯 Analogy: Looking at a wrapped gift without opening it
                      </div>
                    </div>

                    {/* Dynamic Analysis */}
                    <div className="bg-white p-5">
                      <div className="flex items-center mb-3">
                        <Activity className="w-6 h-6 text-orange-600 mr-2" />
                        <h4 className="text-lg newq text-orange-800 font-bold">Dynamic Analysis</h4>
                      </div>
                      <p className="text-sm text-orange-700 mb-2">Running malware in safe environment</p>
                      <ul className="list-disc pl-5 text-xs space-y-1">
                        <li>Run in sandbox/VM</li>
                        <li>Monitor file changes</li>
                        <li>Watch registry modifications</li>
                        <li>Capture network traffic</li>
                        <li>Observe process behavior</li>
                      </ul>
                      <div className="bg-orange-100 p-2 mt-2 text-xs">
                        🎯 Analogy: Opening gift in a glass box to see what it does
                      </div>
                    </div>

                    {/* Code Analysis */}
                    <div className="bg-white p-5">
                      <div className="flex items-center mb-3">
                        <Code className="w-6 h-6 text-orange-600 mr-2" />
                        <h4 className="text-lg newq text-orange-800 font-bold">Code Analysis</h4>
                      </div>
                      <p className="text-sm text-orange-700 mb-2">Reverse engineering the code</p>
                      <ul className="list-disc pl-5 text-xs space-y-1">
                        <li>Disassemble with IDA Pro/Ghidra</li>
                        <li>Debug with x64dbg/OllyDbg</li>
                        <li>Understand algorithms</li>
                        <li>Find encryption keys</li>
                        <li>Extract configuration</li>
                      </ul>
                      <div className="bg-orange-100 p-2 mt-2 text-xs">
                        🎯 Analogy: Taking apart a toy to see how every gear works
                      </div>
                    </div>
                  </div>

                  {/* Comparison Table */}
                  <div className="mt-6 bg-white p-4">
                    <h4 className="font-bold newq text-orange-800 mb-3">Comparison of Analysis Types:</h4>
                    <table className="w-full">
                      <thead className="bg-orange-100">
                        <tr>
                          <th className="p-2 text-left">Aspect</th>
                          <th className="p-2 text-left">Static</th>
                          <th className="p-2 text-left">Dynamic</th>
                          <th className="p-2 text-left">Code</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t">
                          <td className="p-2 font-bold">Run the file?</td>
                          <td className="p-2">❌ No</td>
                          <td className="p-2">✅ Yes</td>
                          <td className="p-2">✅ Yes (debug)</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-2 font-bold">Time required</td>
                          <td className="p-2">Fast</td>
                          <td className="p-2">Medium</td>
                          <td className="p-2">Slow</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-2 font-bold">Skill level</td>
                          <td className="p-2">Beginner</td>
                          <td className="p-2">Intermediate</td>
                          <td className="p-2">Advanced</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-2 font-bold">Best for</td>
                          <td className="p-2">Quick triage</td>
                          <td className="p-2">Behavioral analysis</td>
                          <td className="p-2">Deep understanding</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-2 font-bold">Limitation</td>
                          <td className="p-2">Misses runtime behavior</td>
                          <td className="p-2">Malware may detect VM</td>
                          <td className="p-2">Time-consuming</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Real Workflow */}
                  <div className="mt-6 bg-green-50 p-4">
                    <h5 className="font-bold newq text-green-800 mb-2">Typical Analysis Workflow:</h5>
                    <div className="flex flex-wrap items-center justify-center gap-2">
                      <span className="bg-green-200 px-3 py-1 text-sm">1. Static Analysis</span>
                      <span className="text-green-600">→</span>
                      <span className="bg-green-200 px-3 py-1 text-sm">2. Dynamic Analysis</span>
                      <span className="text-green-600">→</span>
                      <span className="bg-green-200 px-3 py-1 text-sm">3. Code Analysis</span>
                    </div>
                    <p className="text-green-700 text-sm mt-2 text-center">
                      Start with static, move to dynamic if needed, deep dive with code analysis
                    </p>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Q.5 */}
          <section id="q5" className="mb-16 bg-white p-8">
            <div className="flex items-center mb-6 border-b-2 border-indigo-200 pb-4">
              <span className="bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold mr-3">5</span>
              <h2 className="text-3xl newq text-indigo-900">Question 5</h2>
            </div>

            {/* Q.5 (a) */}
            <div className="mb-8 border-l-4 border-indigo-400 pl-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl newq text-indigo-800 font-bold mb-3">(a) Why is malware analysis important in the context of cybersecurity?</h3>
                <button 
                  onClick={() => toggleAnswer('q5a')}
                  className="bg-indigo-100 text-indigo-800 px-4 py-2 newq text-sm flex items-center"
                >
                  <HelpCircle className="w-4 h-4 mr-1" />
                  {showAnswers.q5a ? 'Hide Answer' : 'Show Answer'}
                </button>
              </div>
              
              {showAnswers.q5a && (
                <div className="bg-indigo-50 p-6 mt-4">
                  <p className="text-indigo-700 newq mb-4">
                    Malware analysis is like having detectives who study criminals to prevent future crimes. 
                    It's crucial for cybersecurity for many reasons!
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-white p-4">
                      <span className="text-2xl block mb-2">🔍</span>
                      <h4 className="font-bold newq text-indigo-800">1. Incident Response</h4>
                      <p className="text-sm">Understand what happened, what was damaged, and how to clean it up</p>
                    </div>

                    <div className="bg-white p-4">
                      <span className="text-2xl block mb-2">🛡️</span>
                      <h4 className="font-bold newq text-indigo-800">2. Create Signatures</h4>
                      <p className="text-sm">Develop antivirus signatures to detect the malware everywhere</p>
                    </div>

                    <div className="bg-white p-4">
                      <span className="text-2xl block mb-2">🚫</span>
                      <h4 className="font-bold newq text-indigo-800">3. Prevent Future Attacks</h4>
                      <p className="text-sm">Learn techniques used to block similar attacks</p>
                    </div>

                    <div className="bg-white p-4">
                      <span className="text-2xl block mb-2">📊</span>
                      <h4 className="font-bold newq text-indigo-800">4. Assess Damage</h4>
                      <p className="text-sm">Determine what data was stolen or systems compromised</p>
                    </div>

                    <div className="bg-white p-4">
                      <span className="text-2xl block mb-2">👥</span>
                      <h4 className="font-bold newq text-indigo-800">5. Threat Intelligence</h4>
                      <p className="text-sm">Identify attackers, their methods, and motivations</p>
                    </div>

                    <div className="bg-white p-4">
                      <span className="text-2xl block mb-2">⚖️</span>
                      <h4 className="font-bold newq text-indigo-800">6. Legal Evidence</h4>
                      <p className="text-sm">Provide evidence for prosecution of cybercriminals</p>
                    </div>
                  </div>

                  {/* Real Impact */}
                  <div className="bg-yellow-50 p-4">
                    <h5 className="font-bold newq text-yellow-800 mb-2">Real Impact Example:</h5>
                    <p className="text-yellow-700 newq text-sm">
                      After WannaCry ransomware attacked hospitals in 2017, malware analysis helped researchers 
                      find a kill switch domain that stopped the spread, and later helped identify the attackers 
                      and prevent similar attacks.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Q.5 (b) */}
            <div className="mb-8 border-l-4 border-pink-400 pl-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl newq text-pink-800 font-bold mb-3">(b) Explain any two dynamic analysis tools for examining Malware.</h3>
                <button 
                  onClick={() => toggleAnswer('q5b')}
                  className="bg-pink-100 text-pink-800 px-4 py-2 newq text-sm flex items-center"
                >
                  <HelpCircle className="w-4 h-4 mr-1" />
                  {showAnswers.q5b ? 'Hide Answer' : 'Show Answer'}
                </button>
              </div>
              
              {showAnswers.q5b && (
                <div className="bg-pink-50 p-6 mt-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Tool 1: Process Monitor */}
                    <div className="bg-white p-5">
                      <div className="flex items-center mb-3">
                        <Activity className="w-8 h-8 text-pink-600 mr-2" />
                        <h4 className="text-xl newq text-pink-800 font-bold">1. Process Monitor (ProcMon)</h4>
                      </div>
                      <p className="text-pink-700 newq text-sm mb-3">
                        Like a security camera that watches everything a program does in real-time!
                      </p>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        <li><span className="font-bold">Monitors:</span> File system, Registry, Process/Thread activity</li>
                        <li><span className="font-bold">Shows:</span> Every file opened, every registry key accessed</li>
                        <li><span className="font-bold">Filters:</span> Can focus on specific processes</li>
                        <li><span className="font-bold">Example:</span> See when malware writes to RUN registry key</li>
                      </ul>
                      <div className="bg-pink-100 p-2 mt-3 text-xs">
                        🔍 Captures: CreateFile, RegSetValue, Process Create events
                      </div>
                    </div>

                    {/* Tool 2: Wireshark */}
                    <div className="bg-white p-5">
                      <div className="flex items-center mb-3">
                        <Network className="w-8 h-8 text-pink-600 mr-2" />
                        <h4 className="text-xl newq text-pink-800 font-bold">2. Wireshark</h4>
                      </div>
                      <p className="text-pink-700 newq text-sm mb-3">
                        Like a telephone wiretap - captures all network traffic!
                      </p>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        <li><span className="font-bold">Captures:</span> All network packets</li>
                        <li><span className="font-bold">Shows:</span> IPs, protocols, data being sent</li>
                        <li><span className="font-bold">Filters:</span> Focus on specific ports or IPs</li>
                        <li><span className="font-bold">Example:</span> See malware calling home to C2 server</li>
                      </ul>
                      <div className="bg-pink-100 p-2 mt-3 text-xs">
                        📡 Captures: DNS queries, HTTP requests, raw data transfers
                      </div>
                    </div>
                  </div>

                  {/* Additional Tools */}
                  <div className="mt-6 bg-blue-50 p-4">
                    <h5 className="font-bold newq text-blue-800 mb-2">🔧 Other Dynamic Analysis Tools:</h5>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      <div className="bg-white p-2 text-center text-sm">API Monitor</div>
                      <div className="bg-white p-2 text-center text-sm">Regshot</div>
                      <div className="bg-white p-2 text-center text-sm">Process Explorer</div>
                      <div className="bg-white p-2 text-center text-sm">FakeNet</div>
                      <div className="bg-white p-2 text-center text-sm">Cuckoo Sandbox</div>
                      <div className="bg-white p-2 text-center text-sm">INetSim</div>
                      <div className="bg-white p-2 text-center text-sm">Noriben</div>
                      <div className="bg-white p-2 text-center text-sm">APIMonitor</div>
                    </div>
                  </div>

                  {/* Tool Usage Example */}
                  <div className="mt-6 bg-gray-100 p-4">
                    <h5 className="font-bold newq text-gray-800 mb-2">Typical Dynamic Analysis Setup:</h5>
                    <pre className="bg-white p-3 text-xs">
{`1. Start ProcMon to log all activity
2. Start Wireshark to capture network
3. Run malware in VM
4. Stop captures after malware runs
5. Analyze logs for:
   - Files created/modified
   - Registry changes
   - Network connections
   - New processes spawned`}
                    </pre>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Study Tips Section */}
          <section className="bg-green-50 p-8 mb-8">
            <h2 className="text-2xl newq text-green-800 mb-4">📚 Study Tips</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4">
                <span className="text-2xl block mb-2">🎯</span>
                <h3 className="font-bold newq">Remember the 4 Steps</h3>
                <p className="text-sm">File Type → Fingerprint → Strings → Packing</p>
              </div>
              <div className="bg-white p-4">
                <span className="text-2xl block mb-2">🛠️</span>
                <h3 className="font-bold newq">Key Tools</h3>
                <p className="text-sm">HxD, PEStudio, Exeinfo PE, ProcMon, Wireshark</p>
              </div>
              <div className="bg-white p-4">
                <span className="text-2xl block mb-2">🔑</span>
                <h3 className="font-bold newq">Key Concepts</h3>
                <p className="text-sm">MZ signature, Hash types, Imports vs Exports, VM modes</p>
              </div>
            </div>
          </section>

          {/* Success Message */}
          <div className="bg-blue-600 text-white p-8 text-center">
            <CheckCircle className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl newq mb-2">Good Luck with Your Studies!</h2>
            <p className="text-xl newq text-blue-100">You've got all the answers you need</p>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-blue-900 text-white py-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg newq mb-2">Malware Analysis Q&A</h3>
                <p className="text-blue-200 newq text-sm">
                  Complete study guide for exams
                </p>
              </div>
              <div>
                <h3 className="text-lg newq mb-2">Quick Navigation</h3>
                <ul className="space-y-1">
                  <li><a href="#q1" className="text-blue-200 newq text-sm">Question 1</a></li>
                  <li><a href="#q2" className="text-blue-200 newq text-sm">Question 2</a></li>
                  <li><a href="#q3" className="text-blue-200 newq text-sm">Question 3</a></li>
                  <li><a href="#q4" className="text-blue-200 newq text-sm">Question 4</a></li>
                  <li><a href="#q5" className="text-blue-200 newq text-sm">Question 5</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg newq mb-2">Topics Covered</h3>
                <p className="text-blue-200 newq text-sm">Malware Types, PE Header, Hashing, Packers, Analysis Methods, Tools</p>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-blue-800 text-center">
              <p className="text-blue-300 newq text-sm">
                © 2024 Malware Analysis Study Guide - Complete Answers for All Questions
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}