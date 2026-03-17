'use client'
import React, { useState } from 'react';
import Head from 'next/head';
import { 
  Shield, 
  AlertTriangle, 
  Bell,
  Eye,
  Home,
  Menu,
  X,
  FileText,
  Fingerprint,
  Network,
  Clock,
  RefreshCw,
  CheckCircle,
  HelpCircle,
  BookOpen,
  Target,
  Zap,
  Filter,
  Search,
  Activity,
  Users,
  Server,
  Mail,
  Lock,
  Unlock,
  Database,
  Globe,
  Radio,
  BarChart
} from 'lucide-react';

export default function IncidentResponseQA() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
        <title>Incident Response Q&A - Study Guide</title>
        <meta name="description" content="Comprehensive study guide for incident response questions" />
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
          .bg-indigo-50 { background-color: #eef2ff; }
          .bg-indigo-100 { background-color: #e0e7ff; }
          .bg-indigo-600 { background-color: #4f46e5; }
          .bg-indigo-800 { background-color: #3730a3; }
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
          .text-indigo-600 { color: #4f46e5; }
          .text-indigo-700 { color: #4338ca; }
          .text-indigo-800 { color: #3730a3; }
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
          .grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
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
          .border-l-4 { border-left-width: 4px; }
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
            .md\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
            .md\:text-5xl { font-size: 3rem; }
            .md\:mb-0 { margin-bottom: 0; }
          }

          @media (min-width: 1024px) {
            .lg\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
            .lg\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
          }
        `}</style>
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-red-900 text-white p-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Bell className="w-8 h-8 text-red-200" />
              <span className="text-xl newq">Incident Response Q&A Study Guide</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <a href="#q1" className="text-red-200 newq hover:text-white">Q.1</a>
              <a href="#q2" className="text-red-200 newq hover:text-white">Q.2</a>
              <a href="#q3" className="text-red-200 newq hover:text-white">Q.3</a>
              <a href="#q4" className="text-red-200 newq hover:text-white">Q.4</a>
              <a href="#q5" className="text-red-200 newq hover:text-white">Q.5</a>
              <a href="#q6" className="text-red-200 newq hover:text-white">Q.6</a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 space-y-2">
              <a href="#q1" className="block p-2 text-red-200 newq">Q.1</a>
              <a href="#q2" className="block p-2 text-red-200 newq">Q.2</a>
              <a href="#q3" className="block p-2 text-red-200 newq">Q.3</a>
              <a href="#q4" className="block p-2 text-red-200 newq">Q.4</a>
              <a href="#q5" className="block p-2 text-red-200 newq">Q.5</a>
              <a href="#q6" className="block p-2 text-red-200 newq">Q.6</a>
            </div>
          )}
        </nav>

        {/* Header */}
        <div className="bg-red-600 text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl newq mb-4">Incident Response</h1>
            <p className="text-xl text-red-100 newq">Complete Question & Answer Study Guide</p>
            <p className="text-lg text-red-200 newq mt-4">Learn how to handle security emergencies like a pro!</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 py-12">

          {/* Q.1 - 5 Marks */}
          <section id="q1" className="mb-12 bg-white p-8">
            <div className="flex items-center mb-6 border-b-2 border-red-200 pb-4">
              <span className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold mr-3">1</span>
              <h2 className="text-3xl newq text-red-900">Question 1 (5 Marks)</h2>
            </div>
            
            <div className="border-l-4 border-red-400 pl-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl newq text-red-800 font-bold mb-3">What is incident response?</h3>
                <button 
                  onClick={() => toggleAnswer('q1')}
                  className="bg-red-100 text-red-800 px-4 py-2 newq text-sm flex items-center"
                >
                  <HelpCircle className="w-4 h-4 mr-1" />
                  {showAnswers.q1 ? 'Hide Answer' : 'Show Answer'}
                </button>
              </div>
              
              {showAnswers.q1 && (
                <div className="bg-red-50 p-6 mt-4">
                  <div className="flex items-center mb-4">
                    <Bell className="w-8 h-8 text-red-600 mr-2" />
                    <h4 className="text-xl newq text-red-800">Incident Response Defined</h4>
                  </div>

                  <p className="text-red-700 newq mb-4 text-lg">
                    <span className="font-bold">Incident Response (IR)</span> is like a fire drill for computer emergencies - 
                    it's a structured approach to handling and managing security breaches or cyber attacks.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-4">
                      <span className="text-3xl block mb-2">🚒</span>
                      <h5 className="font-bold newq text-red-800 mb-2">Real Life Analogy:</h5>
                      <p className="text-sm">Just like firefighters have a plan when they get an alarm (get dressed, get on the truck, put out fire, investigate cause), incident response is the plan for computer emergencies!</p>
                    </div>

                    <div className="bg-white p-4">
                      <span className="text-3xl block mb-2">🎯</span>
                      <h5 className="font-bold newq text-red-800 mb-2">Main Goals:</h5>
                      <ul className="list-disc pl-5 text-sm">
                        <li>Stop the attack quickly</li>
                        <li>Minimize damage</li>
                        <li>Get systems back to normal</li>
                        <li>Prevent it from happening again</li>
                      </ul>
                    </div>
                  </div>

                  <h5 className="font-bold newq text-red-800 mb-3">Key Components of Incident Response:</h5>
                  
                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="bg-white p-3">
                      <span className="font-bold">1. Preparation</span>
                      <p className="text-xs">Having tools and plans ready</p>
                    </div>
                    <div className="bg-white p-3">
                      <span className="font-bold">2. Detection</span>
                      <p className="text-xs">Realizing something is wrong</p>
                    </div>
                    <div className="bg-white p-3">
                      <span className="font-bold">3. Containment</span>
                      <p className="text-xs">Stopping it from spreading</p>
                    </div>
                    <div className="bg-white p-3">
                      <span className="font-bold">4. Eradication</span>
                      <p className="text-xs">Removing the threat</p>
                    </div>
                    <div className="bg-white p-3">
                      <span className="font-bold">5. Recovery</span>
                      <p className="text-xs">Getting back to normal</p>
                    </div>
                    <div className="bg-white p-3">
                      <span className="font-bold">6. Lessons Learned</span>
                      <p className="text-xs">Improving for next time</p>
                    </div>
                  </div>

                  <div className="mt-6 bg-blue-50 p-4">
                    <p className="text-blue-700 newq text-sm">
                      <span className="font-bold">📝 Definition:</span> Incident response is the systematic approach to managing 
                      the aftermath of a security breach or cyber attack, with the goal of handling the situation to limit damage 
                      and reduce recovery time and costs.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Q.2 - 5 Marks */}
          <section id="q2" className="mb-12 bg-white p-8">
            <div className="flex items-center mb-6 border-b-2 border-blue-200 pb-4">
              <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold mr-3">2</span>
              <h2 className="text-3xl newq text-blue-900">Question 2 (5 Marks)</h2>
            </div>
            
            <div className="border-l-4 border-blue-400 pl-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl newq text-blue-800 font-bold mb-3">What do you mean by IoC and explain how does it works?</h3>
                <button 
                  onClick={() => toggleAnswer('q2')}
                  className="bg-blue-100 text-blue-800 px-4 py-2 newq text-sm flex items-center"
                >
                  <HelpCircle className="w-4 h-4 mr-1" />
                  {showAnswers.q2 ? 'Hide Answer' : 'Show Answer'}
                </button>
              </div>
              
              {showAnswers.q2 && (
                <div className="bg-blue-50 p-6 mt-4">
                  <div className="flex items-center mb-4">
                    <Fingerprint className="w-8 h-8 text-blue-600 mr-2" />
                    <h4 className="text-xl newq text-blue-800">IoC - Indicators of Compromise</h4>
                  </div>

                  <p className="text-blue-700 newq mb-4">
                    <span className="font-bold">IoC (Indicators of Compromise)</span> are like digital fingerprints or clues 
                    that show a computer system has been hacked or infected with malware.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-4">
                      <span className="text-3xl block mb-2">🔍</span>
                      <h5 className="font-bold newq text-blue-800 mb-2">Real Life Analogy:</h5>
                      <p className="text-sm">If someone breaks into your house, they might leave clues: muddy footprints, a broken window, missing cookies. IoCs are those clues for computer break-ins!</p>
                    </div>

                    <div className="bg-white p-4">
                      <span className="text-3xl block mb-2">📋</span>
                      <h5 className="font-bold newq text-blue-800 mb-2">Common IoC Examples:</h5>
                      <ul className="list-disc pl-5 text-sm">
                        <li>Suspicious IP addresses</li>
                        <li>Malicious file hashes (MD5/SHA256)</li>
                        <li>Domain names of C2 servers</li>
                        <li>Registry key changes</li>
                        <li>Unusual network traffic</li>
                      </ul>
                    </div>
                  </div>

                  <h5 className="font-bold newq text-blue-800 mb-3">How IoC Works:</h5>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4">
                      <div className="flex items-center mb-2">
                        <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-2">1</span>
                        <h6 className="font-bold newq">Collection</h6>
                      </div>
                      <p className="text-sm pl-8">Security researchers find new malware and extract its unique indicators (file hashes, IPs it calls home to, etc.)</p>
                    </div>

                    <div className="bg-white p-4">
                      <div className="flex items-center mb-2">
                        <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-2">2</span>
                        <h6 className="font-bold newq">Distribution</h6>
                      </div>
                      <p className="text-sm pl-8">These indicators are shared with security tools (like sharing wanted posters with police stations)</p>
                    </div>

                    <div className="bg-white p-4">
                      <div className="flex items-center mb-2">
                        <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-2">3</span>
                        <h6 className="font-bold newq">Monitoring</h6>
                      </div>
                      <p className="text-sm pl-8">Security tools constantly check for these indicators in your system</p>
                    </div>

                    <div className="bg-white p-4">
                      <div className="flex items-center mb-2">
                        <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-2">4</span>
                        <h6 className="font-bold newq">Alert</h6>
                      </div>
                      <p className="text-sm pl-8">If an indicator is found, an alert is triggered (like an alarm going off)</p>
                    </div>
                  </div>

                  {/* Example Table */}
                  <div className="mt-6 bg-white p-4">
                    <h5 className="font-bold newq text-blue-800 mb-3">Example IoC in Action:</h5>
                    <table className="w-full">
                      <thead className="bg-blue-100">
                        <tr>
                          <th className="p-2 text-left">IoC Type</th>
                          <th className="p-2 text-left">Example</th>
                          <th className="p-2 text-left">What It Indicates</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t">
                          <td className="p-2">File Hash</td>
                          <td className="p-2 font-mono">44d88612fea8a8f3...</td>
                          <td className="p-2">Known malware file</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-2">IP Address</td>
                          <td className="p-2 font-mono">185.130.5.133</td>
                          <td className="p-2">Command & Control server</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-2">Domain</td>
                          <td className="p-2 font-mono">evil-malware.com</td>
                          <td className="p-2">Malware download site</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Q.3 - 5 Marks (OR for Q.2) */}
          <section id="q3" className="mb-12 bg-white p-8">
            <div className="flex items-center mb-6 border-b-2 border-green-200 pb-4">
              <span className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold mr-3">3</span>
              <h2 className="text-3xl newq text-green-900">Question 3 (5 Marks) - OR</h2>
            </div>
            
            <div className="border-l-4 border-green-400 pl-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl newq text-green-800 font-bold mb-3">What do you mean by host based indicator and network based indicator? List down examples of each.</h3>
                <button 
                  onClick={() => toggleAnswer('q3')}
                  className="bg-green-100 text-green-800 px-4 py-2 newq text-sm flex items-center"
                >
                  <HelpCircle className="w-4 h-4 mr-1" />
                  {showAnswers.q3 ? 'Hide Answer' : 'Show Answer'}
                </button>
              </div>
              
              {showAnswers.q3 && (
                <div className="bg-green-50 p-6 mt-4">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {/* Host-based Indicators */}
                    <div className="bg-white p-5">
                      <div className="flex items-center mb-3">
                        <Server className="w-6 h-6 text-green-600 mr-2" />
                        <h4 className="text-lg newq text-green-800 font-bold">Host-based Indicators</h4>
                      </div>
                      <p className="text-sm text-green-700 mb-3">
                        Clues found ON the computer itself - like evidence found inside your house after a break-in.
                      </p>
                      <h5 className="font-bold newq text-green-800 mb-2">Examples:</h5>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">📁</span>
                          <div>
                            <span className="font-bold">File modifications:</span>
                            <p className="text-xs">New files created, existing files changed</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">📋</span>
                          <div>
                            <span className="font-bold">Registry changes:</span>
                            <p className="text-xs">New Run keys for persistence</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">🔄</span>
                          <div>
                            <span className="font-bold">Processes:</span>
                            <p className="text-xs">Unusual processes running</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">📊</span>
                          <div>
                            <span className="font-bold">File hashes:</span>
                            <p className="text-xs">MD5/SHA256 of malicious files</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">👤</span>
                          <div>
                            <span className="font-bold">User accounts:</span>
                            <p className="text-xs">New user accounts created</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">🔌</span>
                          <div>
                            <span className="font-bold">Services:</span>
                            <p className="text-xs">New Windows services installed</p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Network-based Indicators */}
                    <div className="bg-white p-5">
                      <div className="flex items-center mb-3">
                        <Network className="w-6 h-6 text-green-600 mr-2" />
                        <h4 className="text-lg newq text-green-800 font-bold">Network-based Indicators</h4>
                      </div>
                      <p className="text-sm text-green-700 mb-3">
                        Clues found IN the network traffic - like watching suspicious cars driving around your neighborhood.
                      </p>
                      <h5 className="font-bold newq text-green-800 mb-2">Examples:</h5>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">🌐</span>
                          <div>
                            <span className="font-bold">IP addresses:</span>
                            <p className="text-xs">Known malicious C2 servers</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">🔗</span>
                          <div>
                            <span className="font-bold">Domains:</span>
                            <p className="text-xs">evil-malware.com, bad-site.net</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">📡</span>
                          <div>
                            <span className="font-bold">URLs:</span>
                            <p className="text-xs">http://malware.com/payload.exe</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">📦</span>
                          <div>
                            <span className="font-bold">Network protocols:</span>
                            <p className="text-xs">Unusual port usage, abnormal DNS queries</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">✉️</span>
                          <div>
                            <span className="font-bold">Email patterns:</span>
                            <p className="text-xs">Phishing emails, spam campaigns</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">📊</span>
                          <div>
                            <span className="font-bold">Traffic patterns:</span>
                            <p className="text-xs">Beaconing, data exfiltration</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Comparison Table */}
                  <div className="bg-white p-4">
                    <h5 className="font-bold newq text-green-800 mb-3">Quick Comparison:</h5>
                    <table className="w-full">
                      <thead className="bg-green-100">
                        <tr>
                          <th className="p-2 text-left">Aspect</th>
                          <th className="p-2 text-left">Host-based</th>
                          <th className="p-2 text-left">Network-based</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t">
                          <td className="p-2 font-bold">Where found</td>
                          <td className="p-2">On the computer itself</td>
                          <td className="p-2">In network traffic</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-2 font-bold">Detection tools</td>
                          <td className="p-2">Antivirus, EDR</td>
                          <td className="p-2">Firewall, IDS/IPS</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-2 font-bold">Persistence</td>
                          <td className="p-2">Survives reboot</td>
                          <td className="p-2">Only while communicating</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Real Example */}
                  <div className="mt-6 bg-yellow-50 p-4">
                    <h5 className="font-bold newq text-yellow-800 mb-2">📖 Real Example: WannaCry Ransomware</h5>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-bold text-sm">Host-based IoCs:</p>
                        <ul className="list-disc pl-5 text-xs">
                          <li>Files encrypted with .wncry extension</li>
                          <li>Ransom note @PleaseReadMe@.txt</li>
                          <li>Registry changes for persistence</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-bold text-sm">Network-based IoCs:</p>
                        <ul className="list-disc pl-5 text-xs">
                          <li>Connection to kill switch domain</li>
                          <li>SMB protocol exploitation</li>
                          <li>Port 445 scanning activity</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Q.4 - 5 Marks */}
          <section id="q4" className="mb-12 bg-white p-8">
            <div className="flex items-center mb-6 border-b-2 border-purple-200 pb-4">
              <span className="bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold mr-3">4</span>
              <h2 className="text-3xl newq text-purple-900">Question 4 (5 Marks)</h2>
            </div>
            
            <div className="border-l-4 border-purple-400 pl-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl newq text-purple-800 font-bold mb-3">Explain life cycle of indicator generation.</h3>
                <button 
                  onClick={() => toggleAnswer('q4')}
                  className="bg-purple-100 text-purple-800 px-4 py-2 newq text-sm flex items-center"
                >
                  <HelpCircle className="w-4 h-4 mr-1" />
                  {showAnswers.q4 ? 'Hide Answer' : 'Show Answer'}
                </button>
              </div>
              
              {showAnswers.q4 && (
                <div className="bg-purple-50 p-6 mt-4">
                  <p className="text-purple-700 newq mb-4">
                    The indicator life cycle is like a recipe for creating and using digital fingerprints to catch bad guys!
                  </p>

                  {/* Life Cycle Diagram */}
                  <div className="relative mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
                      <div className="bg-purple-200 p-3 text-center">
                        <span className="text-2xl block mb-1">1️⃣</span>
                        <span className="font-bold">Collection</span>
                      </div>
                      <div className="bg-purple-200 p-3 text-center">
                        <span className="text-2xl block mb-1">2️⃣</span>
                        <span className="font-bold">Analysis</span>
                      </div>
                      <div className="bg-purple-200 p-3 text-center">
                        <span className="text-2xl block mb-1">3️⃣</span>
                        <span className="font-bold">Validation</span>
                      </div>
                      <div className="bg-purple-200 p-3 text-center">
                        <span className="text-2xl block mb-1">4️⃣</span>
                        <span className="font-bold">Sharing</span>
                      </div>
                      <div className="bg-purple-200 p-3 text-center">
                        <span className="text-2xl block mb-1">5️⃣</span>
                        <span className="font-bold">Retirement</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Step 1 */}
                    <div className="bg-white p-4">
                      <div className="flex items-center mb-2">
                        <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span>
                        <h5 className="text-lg newq text-purple-800 font-bold">Collection / Discovery</h5>
                      </div>
                      <p className="text-sm pl-11">Finding potential indicators from various sources:</p>
                      <ul className="list-disc pl-16 text-sm mt-2">
                        <li>Malware analysis (file hashes, IPs, domains)</li>
                        <li>Incident response (artifacts from attacks)</li>
                        <li>Threat intelligence feeds</li>
                        <li>Honeypots and sensors</li>
                      </ul>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-white p-4">
                      <div className="flex items-center mb-2">
                        <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                        <h5 className="text-lg newq text-purple-800 font-bold">Analysis & Enrichment</h5>
                      </div>
                      <p className="text-sm pl-11">Examining indicators to ensure they're useful:</p>
                      <ul className="list-disc pl-16 text-sm mt-2">
                        <li>Verify they're truly malicious (not false positives)</li>
                        <li>Add context (what malware family, when seen)</li>
                        <li>Determine confidence level</li>
                        <li>Check if they're still active</li>
                      </ul>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white p-4">
                      <div className="flex items-center mb-2">
                        <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                        <h5 className="text-lg newq text-purple-800 font-bold">Validation & Testing</h5>
                      </div>
                      <p className="text-sm pl-11">Making sure indicators work correctly:</p>
                      <ul className="list-disc pl-16 text-sm mt-2">
                        <li>Test in controlled environment</li>
                        <li>Check for false positives</li>
                        <li>Validate against known samples</li>
                        <li>Ensure they're specific enough</li>
                      </ul>
                    </div>

                    {/* Step 4 */}
                    <div className="bg-white p-4">
                      <div className="flex items-center mb-2">
                        <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                        <h5 className="text-lg newq text-purple-800 font-bold">Deployment & Sharing</h5>
                      </div>
                      <p className="text-sm pl-11">Getting indicators to where they're needed:</p>
                      <ul className="list-disc pl-16 text-sm mt-2">
                        <li>Push to security tools (SIEM, EDR, firewalls)</li>
                        <li>Share with threat intelligence platforms</li>
                        <li>Distribute to partners/customers</li>
                        <li>Publish in feeds (if appropriate)</li>
                      </ul>
                    </div>

                    {/* Step 5 */}
                    <div className="bg-white p-4">
                      <div className="flex items-center mb-2">
                        <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">5</span>
                        <h5 className="text-lg newq text-purple-800 font-bold">Maintenance & Retirement</h5>
                      </div>
                      <p className="text-sm pl-11">Keeping indicators current:</p>
                      <ul className="list-disc pl-16 text-sm mt-2">
                        <li>Monitor for expiry (IPs change, domains expire)</li>
                        <li>Update with new information</li>
                        <li>Remove false positives</li>
                        <li>Retire old/unreliable indicators</li>
                      </ul>
                    </div>
                  </div>

                  {/* Visual Timeline */}
                  <div className="mt-6 bg-white p-4">
                    <h5 className="font-bold newq text-purple-800 mb-2">Indicator Lifecycle Timeline:</h5>
                    <div className="flex items-center">
                      <div className="bg-green-500 h-2 flex-1"></div>
                      <div className="bg-yellow-500 h-2 flex-1"></div>
                      <div className="bg-orange-500 h-2 flex-1"></div>
                      <div className="bg-red-500 h-2 flex-1"></div>
                    </div>
                    <div className="flex justify-between text-xs mt-1">
                      <span>Birth (Active)</span>
                      <span>Mature</span>
                      <span>Aging</span>
                      <span>Retired</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Q.5 - 10 Marks */}
          <section id="q5" className="mb-12 bg-white p-8">
            <div className="flex items-center mb-6 border-b-2 border-orange-200 pb-4">
              <span className="bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold mr-3">5</span>
              <h2 className="text-3xl newq text-orange-900">Question 5 (10 Marks)</h2>
            </div>
            
            <div className="border-l-4 border-orange-400 pl-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl newq text-orange-800 font-bold mb-3">Explain methods for detecting security incident.</h3>
                <button 
                  onClick={() => toggleAnswer('q5')}
                  className="bg-orange-100 text-orange-800 px-4 py-2 newq text-sm flex items-center"
                >
                  <HelpCircle className="w-4 h-4 mr-1" />
                  {showAnswers.q5 ? 'Hide Answer' : 'Show Answer'}
                </button>
              </div>
              
              {showAnswers.q5 && (
                <div className="bg-orange-50 p-6 mt-4">
                  <p className="text-orange-700 newq mb-4">
                    Detecting security incidents is like having multiple alarm systems in your house - 
                    different methods catch different types of intruders!
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {/* Method 1 */}
                    <div className="bg-white p-4">
                      <div className="flex items-center mb-3">
                        <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-2">1</span>
                        <h5 className="font-bold newq text-orange-800">Signature-based Detection</h5>
                      </div>
                      <p className="text-sm mb-2">Like a wanted poster matching system</p>
                      <ul className="list-disc pl-5 text-xs space-y-1">
                        <li><span className="font-bold">How it works:</span> Compares against known attack patterns</li>
                        <li><span className="font-bold">Example:</span> Antivirus looking for known malware hashes</li>
                        <li><span className="font-bold">Pros:</span> Accurate for known threats</li>
                        <li><span className="font-bold">Cons:</span> Misses new/unknown attacks</li>
                      </ul>
                    </div>

                    {/* Method 2 */}
                    <div className="bg-white p-4">
                      <div className="flex items-center mb-3">
                        <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-2">2</span>
                        <h5 className="font-bold newq text-orange-800">Anomaly-based Detection</h5>
                      </div>
                      <p className="text-sm mb-2">Like noticing someone walking differently than usual</p>
                      <ul className="list-disc pl-5 text-xs space-y-1">
                        <li><span className="font-bold">How it works:</span> Learns normal behavior, flags deviations</li>
                        <li><span className="font-bold">Example:</span> User downloading 100GB at 3 AM</li>
                        <li><span className="font-bold">Pros:</span> Can detect new attacks</li>
                        <li><span className="font-bold">Cons:</span> May have false positives</li>
                      </ul>
                    </div>

                    {/* Method 3 */}
                    <div className="bg-white p-4">
                      <div className="flex items-center mb-3">
                        <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-2">3</span>
                        <h5 className="font-bold newq text-orange-800">Behavioral Analysis</h5>
                      </div>
                      <p className="text-sm mb-2">Like watching what someone actually does</p>
                      <ul className="list-disc pl-5 text-xs space-y-1">
                        <li><span className="font-bold">How it works:</span> Monitors actions and intent</li>
                        <li><span className="font-bold">Example:</span> Program trying to encrypt many files</li>
                        <li><span className="font-bold">Pros:</span> Catches ransomware behavior</li>
                        <li><span className="font-bold">Cons:</span> Resource intensive</li>
                      </ul>
                    </div>

                    {/* Method 4 */}
                    <div className="bg-white p-4">
                      <div className="flex items-center mb-3">
                        <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-2">4</span>
                        <h5 className="font-bold newq text-orange-800">Threat Intelligence</h5>
                      </div>
                      <p className="text-sm mb-2">Like getting warnings from neighbors about suspicious people</p>
                      <ul className="list-disc pl-5 text-xs space-y-1">
                        <li><span className="font-bold">How it works:</span> Uses external threat data</li>
                        <li><span className="font-bold">Example:</span> Blocking known malicious IPs</li>
                        <li><span className="font-bold">Pros:</span> Proactive defense</li>
                        <li><span className="font-bold">Cons:</span> Depends on timely updates</li>
                      </ul>
                    </div>

                    {/* Method 5 */}
                    <div className="bg-white p-4">
                      <div className="flex items-center mb-3">
                        <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-2">5</span>
                        <h5 className="font-bold newq text-orange-800">Log Analysis</h5>
                      </div>
                      <p className="text-sm mb-2">Like reading a detailed diary of everything that happened</p>
                      <ul className="list-disc pl-5 text-xs space-y-1">
                        <li><span className="font-bold">How it works:</span> Reviews system/application logs</li>
                        <li><span className="font-bold">Example:</span> Finding multiple failed logins</li>
                        <li><span className="font-bold">Pros:</span> Provides detailed evidence</li>
                        <li><span className="font-bold">Cons:</span> Can be overwhelming</li>
                      </ul>
                    </div>

                    {/* Method 6 */}
                    <div className="bg-white p-4">
                      <div className="flex items-center mb-3">
                        <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-2">6</span>
                        <h5 className="font-bold newq text-orange-800">Honeypots</h5>
                      </div>
                      <p className="text-sm mb-2">Like setting up a fake treasure to catch thieves</p>
                      <ul className="list-disc pl-5 text-xs space-y-1">
                        <li><span className="font-bold">How it works:</span> Decoy systems to attract attackers</li>
                        <li><span className="font-bold">Example:</span> Fake database with tempting data</li>
                        <li><span className="font-bold">Pros:</span> Catches attackers in act</li>
                        <li><span className="font-bold">Cons:</span> Requires maintenance</li>
                      </ul>
                    </div>
                  </div>

                  {/* Detection Tools Table */}
                  <div className="bg-white p-4 mt-4">
                    <h5 className="font-bold newq text-orange-800 mb-3">Common Detection Tools & Methods:</h5>
                    <table className="w-full">
                      <thead className="bg-orange-100">
                        <tr>
                          <th className="p-2 text-left">Tool/System</th>
                          <th className="p-2 text-left">Detection Method</th>
                          <th className="p-2 text-left">What It Detects</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t">
                          <td className="p-2 font-bold">Antivirus</td>
                          <td className="p-2">Signature + Heuristic</td>
                          <td className="p-2">Known malware</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-2 font-bold">IDS/IPS</td>
                          <td className="p-2">Signature + Anomaly</td>
                          <td className="p-2">Network attacks</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-2 font-bold">SIEM</td>
                          <td className="p-2">Correlation + Rules</td>
                          <td className="p-2">Complex attacks across systems</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-2 font-bold">EDR</td>
                          <td className="p-2">Behavioral + IoCs</td>
                          <td className="p-2">Endpoint threats</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Detection Pyramid */}
                  <div className="mt-6 bg-yellow-50 p-4">
                    <h5 className="font-bold newq text-yellow-800 mb-2">Detection Difficulty Pyramid:</h5>
                    <div className="space-y-1">
                      <div className="bg-red-500 text-white p-2 text-center text-sm">Most Difficult - Unknown Attacks</div>
                      <div className="bg-orange-500 text-white p-2 text-center text-sm">Behavioral Anomalies</div>
                      <div className="bg-yellow-500 text-white p-2 text-center text-sm">Heuristic Detection</div>
                      <div className="bg-green-500 text-white p-2 text-center text-sm">Signature-based (Easiest)</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Q.6 - 10 Marks */}
          <section id="q6" className="mb-12 bg-white p-8">
            <div className="flex items-center mb-6 border-b-2 border-indigo-200 pb-4">
              <span className="bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold mr-3">6</span>
              <h2 className="text-3xl newq text-indigo-900">Question 6 (10 Marks)</h2>
            </div>
            
            <div className="border-l-4 border-indigo-400 pl-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl newq text-indigo-800 font-bold mb-3">Explain incident response process in detail.</h3>
                <button 
                  onClick={() => toggleAnswer('q6')}
                  className="bg-indigo-100 text-indigo-800 px-4 py-2 newq text-sm flex items-center"
                >
                  <HelpCircle className="w-4 h-4 mr-1" />
                  {showAnswers.q6 ? 'Hide Answer' : 'Show Answer'}
                </button>
              </div>
              
              {showAnswers.q6 && (
                <div className="bg-indigo-50 p-6 mt-4">
                  <p className="text-indigo-700 newq mb-4">
                    The incident response process is like a emergency response plan - it guides you through 
                    what to do when something bad happens to your computer systems.
                  </p>

                  {/* NIST 6-Step Process */}
                  <div className="relative mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-1">
                      <div className="bg-indigo-200 p-3 text-center text-sm font-bold">1. Preparation</div>
                      <div className="bg-indigo-200 p-3 text-center text-sm font-bold">2. Detection</div>
                      <div className="bg-indigo-200 p-3 text-center text-sm font-bold">3. Containment</div>
                      <div className="bg-indigo-200 p-3 text-center text-sm font-bold">4. Eradication</div>
                      <div className="bg-indigo-200 p-3 text-center text-sm font-bold">5. Recovery</div>
                      <div className="bg-indigo-200 p-3 text-center text-sm font-bold">6. Lessons Learned</div>
                    </div>
                  </div>

                  {/* Detailed Steps */}
                  <div className="space-y-6">
                    {/* Step 1 */}
                    <div className="bg-white p-5">
                      <div className="flex items-center mb-3">
                        <span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span>
                        <h5 className="text-lg newq text-indigo-800 font-bold">Preparation</h5>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">Getting ready before anything happens</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="list-disc pl-5 text-sm">
                          <li>Create incident response team</li>
                          <li>Develop response playbooks</li>
                          <li>Set up monitoring tools</li>
                          <li>Train staff on procedures</li>
                        </ul>
                        <ul className="list-disc pl-5 text-sm">
                          <li>Establish communication channels</li>
                          <li>Create backup systems</li>
                          <li>Document all systems/assets</li>
                          <li>Practice with drills</li>
                        </ul>
                      </div>
                      <div className="bg-indigo-50 p-2 mt-2 text-xs">
                        <span className="font-bold">Analogy:</span> Like having fire extinguishers, smoke alarms, and fire drills ready before a fire starts.
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-white p-5">
                      <div className="flex items-center mb-3">
                        <span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                        <h5 className="text-lg newq text-indigo-800 font-bold">Detection & Analysis</h5>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">Realizing something is wrong and figuring out what</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="list-disc pl-5 text-sm">
                          <li>Monitor alerts from security tools</li>
                          <li>Analyze logs for anomalies</li>
                          <li>Verify if it's a real incident</li>
                          <li>Determine scope and impact</li>
                        </ul>
                        <ul className="list-disc pl-5 text-sm">
                          <li>Collect initial evidence</li>
                          <li>Document everything found</li>
                          <li>Classify incident severity</li>
                          <li>Notify appropriate people</li>
                        </ul>
                      </div>
                      <div className="bg-indigo-50 p-2 mt-2 text-xs">
                        <span className="font-bold">Analogy:</span> Like smelling smoke, finding where it's coming from, and calling 911.
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white p-5">
                      <div className="flex items-center mb-3">
                        <span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                        <h5 className="text-lg newq text-indigo-800 font-bold">Containment</h5>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">Stopping it from spreading further</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="list-disc pl-5 text-sm">
                          <li>Isolate affected systems</li>
                          <li>Disable compromised accounts</li>
                          <li>Block malicious IPs/domains</li>
                          <li>Take systems offline if needed</li>
                        </ul>
                        <ul className="list-disc pl-5 text-sm">
                          <li>Short-term vs long-term containment</li>
                          <li>Preserve evidence for analysis</li>
                          <li>Apply temporary fixes</li>
                        </ul>
                      </div>
                      <div className="bg-indigo-50 p-2 mt-2 text-xs">
                        <span className="font-bold">Analogy:</span> Like closing doors to stop fire from spreading to other rooms.
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="bg-white p-5">
                      <div className="flex items-center mb-3">
                        <span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                        <h5 className="text-lg newq text-indigo-800 font-bold">Eradication</h5>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">Removing the threat completely</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="list-disc pl-5 text-sm">
                          <li>Remove malware from systems</li>
                          <li>Patch vulnerabilities exploited</li>
                          <li>Delete malicious files</li>
                          <li>Reset compromised credentials</li>
                        </ul>
                        <ul className="list-disc pl-5 text-sm">
                          <li>Clean affected systems</li>
                          <li>Update security controls</li>
                          <li>Verify threat is completely gone</li>
                        </ul>
                      </div>
                      <div className="bg-indigo-50 p-2 mt-2 text-xs">
                        <span className="font-bold">Analogy:</span> Like putting out the fire completely and removing anything that could reignite.
                      </div>
                    </div>

                    {/* Step 5 */}
                    <div className="bg-white p-5">
                      <div className="flex items-center mb-3">
                        <span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">5</span>
                        <h5 className="text-lg newq text-indigo-800 font-bold">Recovery</h5>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">Getting back to normal operations</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="list-disc pl-5 text-sm">
                          <li>Restore systems from clean backups</li>
                          <li>Bring systems back online</li>
                          <li>Monitor for any recurrence</li>
                          <li>Verify systems are functioning</li>
                        </ul>
                        <ul className="list-disc pl-5 text-sm">
                          <li>Communicate restoration to users</li>
                          <li>Test systems thoroughly</li>
                          <li>Gradual return to operations</li>
                        </ul>
                      </div>
                      <div className="bg-indigo-50 p-2 mt-2 text-xs">
                        <span className="font-bold">Analogy:</span> Like repairing fire damage, rebuilding, and moving back in.
                      </div>
                    </div>

                    {/* Step 6 */}
                    <div className="bg-white p-5">
                      <div className="flex items-center mb-3">
                        <span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">6</span>
                        <h5 className="text-lg newq text-indigo-800 font-bold">Lessons Learned</h5>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">Improving for next time</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="list-disc pl-5 text-sm">
                          <li>Conduct post-incident meeting</li>
                          <li>Document what happened</li>
                          <li>Identify what worked/didn't</li>
                          <li>Update response procedures</li>
                        </ul>
                        <ul className="list-disc pl-5 text-sm">
                          <li>Share lessons with team</li>
                          <li>Implement improvements</li>
                          <li>Update training materials</li>
                        </ul>
                      </div>
                      <div className="bg-indigo-50 p-2 mt-2 text-xs">
                        <span className="font-bold">Analogy:</span> Like a fire department reviewing after a fire to improve their response.
                      </div>
                    </div>
                  </div>

                  {/* Incident Response Team Structure */}
                  <div className="mt-6 bg-yellow-50 p-4">
                    <h5 className="font-bold newq text-yellow-800 mb-2">Incident Response Team (IRT) Roles:</h5>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      <div className="bg-white p-2 text-center text-sm">Team Lead</div>
                      <div className="bg-white p-2 text-center text-sm">Technical Analyst</div>
                      <div className="bg-white p-2 text-center text-sm">Communications Lead</div>
                      <div className="bg-white p-2 text-center text-sm">Legal Counsel</div>
                      <div className="bg-white p-2 text-center text-sm">HR Representative</div>
                      <div className="bg-white p-2 text-center text-sm">PR Representative</div>
                      <div className="bg-white p-2 text-center text-sm">IT Support</div>
                      <div className="bg-white p-2 text-center text-sm">Management</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Q.5 OR - Attack Life Cycle (10 Marks) */}
          <section id="q5-or" className="mb-12 bg-white p-8">
            <div className="flex items-center mb-6 border-b-2 border-pink-200 pb-4">
              <span className="bg-pink-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold mr-3">5(OR)</span>
              <h2 className="text-3xl newq text-pink-900">Question 5 (OR) - 10 Marks</h2>
            </div>
            
            <div className="border-l-4 border-pink-400 pl-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl newq text-pink-800 font-bold mb-3">Explain Attack life cycle in detail.</h3>
                <button 
                  onClick={() => toggleAnswer('q5or')}
                  className="bg-pink-100 text-pink-800 px-4 py-2 newq text-sm flex items-center"
                >
                  <HelpCircle className="w-4 h-4 mr-1" />
                  {showAnswers.q5or ? 'Hide Answer' : 'Show Answer'}
                </button>
              </div>
              
              {showAnswers.q5or && (
                <div className="bg-pink-50 p-6 mt-4">
                  <p className="text-pink-700 newq mb-4">
                    The attack life cycle (also called Cyber Kill Chain) is like a burglar's step-by-step plan 
                    for breaking into a house - understanding it helps us stop them at each stage!
                  </p>

                  {/* Kill Chain Diagram */}
                  <div className="relative mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-7 gap-1">
                      <div className="bg-pink-200 p-2 text-center text-xs font-bold">1. Recon</div>
                      <div className="bg-pink-200 p-2 text-center text-xs font-bold">2. Weaponize</div>
                      <div className="bg-pink-200 p-2 text-center text-xs font-bold">3. Deliver</div>
                      <div className="bg-pink-200 p-2 text-center text-xs font-bold">4. Exploit</div>
                      <div className="bg-pink-200 p-2 text-center text-xs font-bold">5. Install</div>
                      <div className="bg-pink-200 p-2 text-center text-xs font-bold">6. C2</div>
                      <div className="bg-pink-200 p-2 text-center text-xs font-bold">7. Act</div>
                    </div>
                  </div>

                  {/* Detailed Stages */}
                  <div className="space-y-4">
                    {/* Stage 1 */}
                    <div className="bg-white p-4">
                      <div className="flex items-center mb-2">
                        <span className="bg-pink-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span>
                        <h5 className="text-lg newq text-pink-800 font-bold">Reconnaissance (Research)</h5>
                      </div>
                      <p className="text-sm pl-11">Attackers gather information about the target</p>
                      <div className="grid md:grid-cols-2 gap-2 pl-11 mt-2">
                        <ul className="list-disc pl-5 text-xs">
                          <li>Scan websites for vulnerabilities</li>
                          <li>Research employees on LinkedIn</li>
                          <li>Find email addresses</li>
                        </ul>
                        <ul className="list-disc pl-5 text-xs">
                          <li>Identify technologies used</li>
                          <li>Map network infrastructure</li>
                          <li>Social media profiling</li>
                        </ul>
                      </div>
                      <div className="bg-pink-50 p-2 mt-2 text-xs ml-11">
                        <span className="font-bold">Analogy:</span> Burglar casing the neighborhood, watching when you leave for work.
                      </div>
                    </div>

                    {/* Stage 2 */}
                    <div className="bg-white p-4">
                      <div className="flex items-center mb-2">
                        <span className="bg-pink-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                        <h5 className="text-lg newq text-pink-800 font-bold">Weaponization (Preparing the Attack)</h5>
                      </div>
                      <p className="text-sm pl-11">Creating the malware or exploit</p>
                      <ul className="list-disc pl-16 text-xs mt-2">
                        <li>Combine exploit with backdoor</li>
                        <li>Create malicious documents (PDFs, Word files)</li>
                        <li>Set up phishing email templates</li>
                        <li>Prepare command & control infrastructure</li>
                      </ul>
                      <div className="bg-pink-50 p-2 mt-2 text-xs ml-11">
                        <span className="font-bold">Analogy:</span> Burglar preparing lock picks and crowbar.
                      </div>
                    </div>

                    {/* Stage 3 */}
                    <div className="bg-white p-4">
                      <div className="flex items-center mb-2">
                        <span className="bg-pink-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                        <h5 className="text-lg newq text-pink-800 font-bold">Delivery (Getting it to the Target)</h5>
                      </div>
                      <p className="text-sm pl-11">Sending the weapon to the victim</p>
                      <ul className="list-disc pl-16 text-xs mt-2">
                        <li>Phishing emails with attachments</li>
                        <li>Malicious links</li>
                        <li>USB drops in parking lots</li>
                        <li>Drive-by downloads from websites</li>
                      </ul>
                      <div className="bg-pink-50 p-2 mt-2 text-xs ml-11">
                        <span className="font-bold">Analogy:</span> Burglar approaching your door and trying the handle.
                      </div>
                    </div>

                    {/* Stage 4 */}
                    <div className="bg-white p-4">
                      <div className="flex items-center mb-2">
                        <span className="bg-pink-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                        <h5 className="text-lg newq text-pink-800 font-bold">Exploitation (Getting In)</h5>
                      </div>
                      <p className="text-sm pl-11">Triggering the vulnerability</p>
                      <ul className="list-disc pl-16 text-xs mt-2">
                        <li>User opens malicious attachment</li>
                        <li>Exploit targets software vulnerability</li>
                        <li>Code executes on victim's machine</li>
                      </ul>
                      <div className="bg-pink-50 p-2 mt-2 text-xs ml-11">
                        <span className="font-bold">Analogy:</span> Burglar picking the lock and opening the door.
                      </div>
                    </div>

                    {/* Stage 5 */}
                    <div className="bg-white p-4">
                      <div className="flex items-center mb-2">
                        <span className="bg-pink-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">5</span>
                        <h5 className="text-lg newq text-pink-800 font-bold">Installation (Setting Up)</h5>
                      </div>
                      <p className="text-sm pl-11">Installing malware on the victim's system</p>
                      <ul className="list-disc pl-16 text-xs mt-2">
                        <li>Download additional payloads</li>
                        <li>Install backdoor for persistence</li>
                        <li>Create registry keys to survive reboot</li>
                        <li>Disable security software</li>
                      </ul>
                      <div className="bg-pink-50 p-2 mt-2 text-xs ml-11">
                        <span className="font-bold">Analogy:</span> Burglar hiding inside your house and setting up a hiding spot.
                      </div>
                    </div>

                    {/* Stage 6 */}
                    <div className="bg-white p-4">
                      <div className="flex items-center mb-2">
                        <span className="bg-pink-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">6</span>
                        <h5 className="text-lg newq text-pink-800 font-bold">Command & Control (C2)</h5>
                      </div>
                      <p className="text-sm pl-11">Establishing communication with attacker</p>
                      <ul className="list-disc pl-16 text-xs mt-2">
                        <li>Malware "calls home" to C2 server</li>
                        <li>Receive commands from attacker</li>
                        <li>Send stolen data back</li>
                      </ul>
                      <div className="bg-pink-50 p-2 mt-2 text-xs ml-11">
                        <span className="font-bold">Analogy:</span> Burglar using a walkie-talkie to talk to their partner outside.
                      </div>
                    </div>

                    {/* Stage 7 */}
                    <div className="bg-white p-4">
                      <div className="flex items-center mb-2">
                        <span className="bg-pink-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">7</span>
                        <h5 className="text-lg newq text-pink-800 font-bold">Actions on Objectives</h5>
                      </div>
                      <p className="text-sm pl-11">Achieving the attacker's goal</p>
                      <ul className="list-disc pl-16 text-xs mt-2">
                        <li>Data theft/exfiltration</li>
                        <li>Ransomware encryption</li>
                        <li>System destruction</li>
                        <li>Lateral movement to other systems</li>
                      </ul>
                      <div className="bg-pink-50 p-2 mt-2 text-xs ml-11">
                        <span className="font-bold">Analogy:</span> Burglar stealing your valuables and leaving.
                      </div>
                    </div>
                  </div>

                  {/* Defense Opportunities */}
                  <div className="mt-6 bg-green-50 p-4">
                    <h5 className="font-bold newq text-green-800 mb-2">🛡️ Where to Stop the Attack:</h5>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      <div className="bg-white p-2 text-center text-xs">
                        <span className="font-bold">Recon:</span> Hide info, monitor scans
                      </div>
                      <div className="bg-white p-2 text-center text-xs">
                        <span className="font-bold">Delivery:</span> Email filtering, block malicious sites
                      </div>
                      <div className="bg-white p-2 text-center text-xs">
                        <span className="font-bold">Exploit:</span> Patch systems, disable macros
                      </div>
                      <div className="bg-white p-2 text-center text-xs">
                        <span className="font-bold">C2:</span> Block malicious domains, network monitoring
                      </div>
                    </div>
                  </div>

                  {/* Real Example */}
                  <div className="mt-6 bg-yellow-50 p-4">
                    <h5 className="font-bold newq text-yellow-800 mb-2">📖 Real Example: Target Data Breach (2013)</h5>
                    <p className="text-xs">Attackers followed the kill chain: Recon (studied Target's HVAC vendor) → Weaponized (created malware) → Delivered (phished HVAC employee) → Exploited → Installed malware on POS systems → C2 (exfiltrated data) → Act (stole 40 million credit cards)</p>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Q.6 OR - Common Types of Security Incidents (10 Marks) */}
          <section id="q6-or" className="mb-12 bg-white p-8">
            <div className="flex items-center mb-6 border-b-2 border-teal-200 pb-4">
              <span className="bg-teal-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold mr-3">6(OR)</span>
              <h2 className="text-3xl newq text-teal-900">Question 6 (OR) - 10 Marks</h2>
            </div>
            
            <div className="border-l-4 border-teal-400 pl-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl newq text-teal-800 font-bold mb-3">Explain common types of security incidents and how to prevent them.</h3>
                <button 
                  onClick={() => toggleAnswer('q6or')}
                  className="bg-teal-100 text-teal-800 px-4 py-2 newq text-sm flex items-center"
                >
                  <HelpCircle className="w-4 h-4 mr-1" />
                  {showAnswers.q6or ? 'Hide Answer' : 'Show Answer'}
                </button>
              </div>
              
              {showAnswers.q6or && (
                <div className="bg-teal-50 p-6 mt-4">
                  <p className="text-teal-700 newq mb-4">
                    Security incidents are like different types of emergencies - each needs its own prevention strategy!
                  </p>

                  <div className="space-y-6">
                    {/* Malware Infection */}
                    <div className="bg-white p-5">
                      <div className="flex items-center mb-3">
                        <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-2">1</span>
                        <h5 className="text-lg newq text-teal-800 font-bold">Malware Infection</h5>
                      </div>
                      <p className="text-sm mb-2">Computer gets infected with viruses, ransomware, etc.</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="font-bold text-xs">Examples:</p>
                          <ul className="list-disc pl-5 text-xs">
                            <li>Ransomware encrypting files</li>
                            <li>Spyware stealing passwords</li>
                            <li>Trojans creating backdoors</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-bold text-xs">Prevention:</p>
                          <ul className="list-disc pl-5 text-xs">
                            <li>Use antivirus software</li>
                            <li>Keep systems patched</li>
                            <li>Don't click suspicious links</li>
                            <li>Use application whitelisting</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Phishing */}
                    <div className="bg-white p-5">
                      <div className="flex items-center mb-3">
                        <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-2">2</span>
                        <h5 className="text-lg newq text-teal-800 font-bold">Phishing Attacks</h5>
                      </div>
                      <p className="text-sm mb-2">Fake emails tricking users to reveal info or click malicious links</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="font-bold text-xs">Examples:</p>
                          <ul className="list-disc pl-5 text-xs">
                            <li>Email from "bank" asking login</li>
                            <li>"Your package failed delivery"</li>
                            <li>Fake invoice attachments</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-bold text-xs">Prevention:</p>
                          <ul className="list-disc pl-5 text-xs">
                            <li>User security awareness training</li>
                            <li>Email filtering</li>
                            <li>Multi-factor authentication</li>
                            <li>Check sender addresses carefully</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* DDoS Attacks */}
                    <div className="bg-white p-5">
                      <div className="flex items-center mb-3">
                        <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-2">3</span>
                        <h5 className="text-lg newq text-teal-800 font-bold">DDoS (Denial of Service)</h5>
                      </div>
                      <p className="text-sm mb-2">Overwhelming systems with traffic to make them unavailable</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="font-bold text-xs">Examples:</p>
                          <ul className="list-disc pl-5 text-xs">
                            <li>Website flooded with traffic</li>
                            <li>Network bandwidth exhaustion</li>
                            <li>Application-layer attacks</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-bold text-xs">Prevention:</p>
                          <ul className="list-disc pl-5 text-xs">
                            <li>DDoS mitigation services</li>
                            <li>Rate limiting</li>
                            <li>Load balancing</li>
                            <li>Traffic filtering</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Data Breach */}
                    <div className="bg-white p-5">
                      <div className="flex items-center mb-3">
                        <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-2">4</span>
                        <h5 className="text-lg newq text-teal-800 font-bold">Data Breach</h5>
                      </div>
                      <p className="text-sm mb-2">Unauthorized access and theft of sensitive data</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="font-bold text-xs">Examples:</p>
                          <ul className="list-disc pl-5 text-xs">
                            <li>Customer database stolen</li>
                            <li>Intellectual property theft</li>
                            <li>Credentials leaked</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-bold text-xs">Prevention:</p>
                          <ul className="list-disc pl-5 text-xs">
                            <li>Encrypt sensitive data</li>
                            <li>Access controls</li>
                            <li>Monitor data access</li>
                            <li>Regular security audits</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Insider Threat */}
                    <div className="bg-white p-5">
                      <div className="flex items-center mb-3">
                        <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-2">5</span>
                        <h5 className="text-lg newq text-teal-800 font-bold">Insider Threat</h5>
                      </div>
                      <p className="text-sm mb-2">Current or former employees causing harm</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="font-bold text-xs">Examples:</p>
                          <ul className="list-disc pl-5 text-xs">
                            <li>Employee stealing data</li>
                            <li>Accidental data exposure</li>
                            <li>Sabotage by disgruntled worker</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-bold text-xs">Prevention:</p>
                          <ul className="list-disc pl-5 text-xs">
                            <li>Principle of least privilege</li>
                            <li>Monitor user activity</li>
                            <li>Background checks</li>
                            <li>Exit procedures (revoke access)</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Man-in-the-Middle */}
                    <div className="bg-white p-5">
                      <div className="flex items-center mb-3">
                        <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-2">6</span>
                        <h5 className="text-lg newq text-teal-800 font-bold">Man-in-the-Middle (MitM)</h5>
                      </div>
                      <p className="text-sm mb-2">Attacker intercepts communication between two parties</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="font-bold text-xs">Examples:</p>
                          <ul className="list-disc pl-5 text-xs">
                            <li>Evil twin WiFi networks</li>
                            <li>Session hijacking</li>
                            <li>SSL stripping</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-bold text-xs">Prevention:</p>
                          <ul className="list-disc pl-5 text-xs">
                            <li>Use HTTPS everywhere</li>
                            <li>VPN for public WiFi</li>
                            <li>Certificate validation</li>
                            <li>Encrypted communications</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Prevention Summary Table */}
                  <div className="mt-6 bg-white p-4">
                    <h5 className="font-bold newq text-teal-800 mb-3">Quick Prevention Reference:</h5>
                    <table className="w-full">
                      <thead className="bg-teal-100">
                        <tr>
                          <th className="p-2 text-left">Incident Type</th>
                          <th className="p-2 text-left">Key Prevention</th>
                          <th className="p-2 text-left">Priority Level</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t">
                          <td className="p-2">Malware</td>
                          <td className="p-2">Antivirus + Patching</td>
                          <td className="p-2 text-red-600">High</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-2">Phishing</td>
                          <td className="p-2">User Training + MFA</td>
                          <td className="p-2 text-red-600">High</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-2">DDoS</td>
                          <td className="p-2">Mitigation Services</td>
                          <td className="p-2 text-orange-600">Medium</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-2">Data Breach</td>
                          <td className="p-2">Encryption + Access Control</td>
                          <td className="p-2 text-red-600">High</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-2">Insider Threat</td>
                          <td className="p-2">Monitoring + Least Privilege</td>
                          <td className="p-2 text-orange-600">Medium</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Q.7 OR - Incident Classification Framework (10 Marks) */}
          <section id="q7-or" className="mb-12 bg-white p-8">
            <div className="flex items-center mb-6 border-b-2 border-amber-200 pb-4">
              <span className="bg-amber-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold mr-3">7(OR)</span>
              <h2 className="text-3xl newq text-amber-900">Question 7 (OR) - 10 Marks</h2>
            </div>
            
            <div className="border-l-4 border-amber-400 pl-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl newq text-amber-800 font-bold mb-3">Explain Incident classification framework.</h3>
                <button 
                  onClick={() => toggleAnswer('q7or')}
                  className="bg-amber-100 text-amber-800 px-4 py-2 newq text-sm flex items-center"
                >
                  <HelpCircle className="w-4 h-4 mr-1" />
                  {showAnswers.q7or ? 'Hide Answer' : 'Show Answer'}
                </button>
              </div>
              
              {showAnswers.q7or && (
                <div className="bg-amber-50 p-6 mt-4">
                  <p className="text-amber-700 newq mb-4">
                    Incident classification is like a hospital triage system - it helps prioritize which incidents 
                    need immediate attention and which can wait.
                  </p>

                  {/* Classification Pyramid */}
                  <div className="flex justify-center mb-8">
                    <div className="w-64">
                      <div className="bg-red-600 text-white p-3 text-center font-bold">Critical (P1)</div>
                      <div className="bg-orange-500 text-white p-3 text-center font-bold">High (P2)</div>
                      <div className="bg-yellow-500 text-white p-3 text-center font-bold">Medium (P3)</div>
                      <div className="bg-green-500 text-white p-3 text-center font-bold">Low (P4)</div>
                      <div className="bg-blue-500 text-white p-3 text-center font-bold">Informational (P5)</div>
                    </div>
                  </div>

                  <h5 className="font-bold newq text-amber-800 mb-3">Common Classification Frameworks:</h5>

                  {/* NIST Framework */}
                  <div className="bg-white p-5 mb-4">
                    <h6 className="font-bold newq text-amber-800 mb-2">1. NIST Classification Categories</h6>
                    <table className="w-full">
                      <thead className="bg-amber-100">
                        <tr>
                          <th className="p-2 text-left">Category</th>
                          <th className="p-2 text-left">Description</th>
                          <th className="p-2 text-left">Example</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t">
                          <td className="p-2 font-bold">Category 1</td>
                          <td className="p-2">Exercises/Drills</td>
                          <td className="p-2">Planned security tests</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-2 font-bold">Category 2</td>
                          <td className="p-2">Attacks/Attempts</td>
                          <td className="p-2">Port scans, failed logins</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-2 font-bold">Category 3</td>
                          <td className="p-2">Malicious Code</td>
                          <td className="p-2">Virus, worm, Trojan</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-2 font-bold">Category 4</td>
                          <td className="p-2">Unauthorized Access</td>
                          <td className="p-2">Hacked accounts</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-2 font-bold">Category 5</td>
                          <td className="p-2">Inappropriate Usage</td>
                          <td className="p-2">Policy violations</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Priority-Based Classification */}
                  <div className="bg-white p-5 mb-4">
                    <h6 className="font-bold newq text-amber-800 mb-2">2. Priority-Based Classification (P1-P5)</h6>
                    
                    <div className="space-y-3">
                      <div className="border-l-4 border-red-600 pl-3">
                        <p className="font-bold">P1 - Critical (Immediate response required)</p>
                        <ul className="list-disc pl-5 text-sm">
                          <li>Active ransomware infection</li>
                          <li>Data breach in progress</li>
                          <li>Critical system unavailable</li>
                          <li>Response time: <span className="font-bold">Immediate</span></li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-orange-500 pl-3">
                        <p className="font-bold">P2 - High (Urgent)</p>
                        <ul className="list-disc pl-5 text-sm">
                          <li>Malware detected on multiple systems</li>
                          <li>Phishing campaign targeting employees</li>
                          <li>Unauthorized access attempt</li>
                          <li>Response time: <span className="font-bold">Within 4 hours</span></li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-yellow-500 pl-3">
                        <p className="font-bold">P3 - Medium (Normal priority)</p>
                        <ul className="list-disc pl-5 text-sm">
                          <li>Single workstation infected</li>
                          <li>Suspicious network activity</li>
                          <li>Policy violation (first offense)</li>
                          <li>Response time: <span className="font-bold">Within 24 hours</span></li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-green-500 pl-3">
                        <p className="font-bold">P4 - Low (Can wait)</p>
                        <ul className="list-disc pl-5 text-sm">
                          <li>Spam emails</li>
                          <li>Low-risk vulnerability scan findings</li>
                          <li>Informational alerts</li>
                          <li>Response time: <span className="font-bold">Within 1 week</span></li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-blue-500 pl-3">
                        <p className="font-bold">P5 - Informational (No action needed)</p>
                        <ul className="list-disc pl-5 text-sm">
                          <li>Scheduled scans</li>
                          <li>Normal system events</li>
                          <li>Test alerts</li>
                          <li>Response time: <span className="font-bold">Log only</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Impact vs Urgency Matrix */}
                  <div className="bg-white p-5">
                    <h6 className="font-bold newq text-amber-800 mb-2">3. Impact vs Urgency Matrix</h6>
                    <table className="w-full">
                      <thead className="bg-amber-100">
                        <tr>
                          <th className="p-2"></th>
                          <th className="p-2">Low Impact</th>
                          <th className="p-2">Medium Impact</th>
                          <th className="p-2">High Impact</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t">
                          <td className="p-2 font-bold">High Urgency</td>
                          <td className="p-2 bg-yellow-100">P3</td>
                          <td className="p-2 bg-orange-100">P2</td>
                          <td className="p-2 bg-red-100">P1</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-2 font-bold">Medium Urgency</td>
                          <td className="p-2 bg-green-100">P4</td>
                          <td className="p-2 bg-yellow-100">P3</td>
                          <td className="p-2 bg-orange-100">P2</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-2 font-bold">Low Urgency</td>
                          <td className="p-2 bg-blue-100">P5</td>
                          <td className="p-2 bg-green-100">P4</td>
                          <td className="p-2 bg-yellow-100">P3</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Classification Factors */}
                  <div className="mt-6 bg-purple-50 p-4">
                    <h6 className="font-bold newq text-purple-800 mb-2">Factors Determining Classification:</h6>
                    <div className="grid md:grid-cols-3 gap-2">
                      <div className="bg-white p-2 text-xs">• Number of systems affected</div>
                      <div className="bg-white p-2 text-xs">• Sensitivity of data involved</div>
                      <div className="bg-white p-2 text-xs">• Business impact</div>
                      <div className="bg-white p-2 text-xs">• Regulatory requirements</div>
                      <div className="bg-white p-2 text-xs">• Time of day</div>
                      <div className="bg-white p-2 text-xs">• Attack vector</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Study Tips Section */}
          <section className="bg-blue-50 p-8 mb-8">
            <h2 className="text-2xl newq text-blue-800 mb-4">📚 Study Tips for Incident Response</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4">
                <span className="text-2xl block mb-2">🎯</span>
                <h3 className="font-bold newq">Remember the 6 Steps</h3>
                <p className="text-sm">Preparation → Detection → Containment → Eradication → Recovery → Lessons Learned</p>
              </div>
              <div className="bg-white p-4">
                <span className="text-2xl block mb-2">🔑</span>
                <h3 className="font-bold newq">Key Acronyms</h3>
                <p className="text-sm">IoC (Indicators of Compromise), IR (Incident Response), C2 (Command & Control)</p>
              </div>
              <div className="bg-white p-4">
                <span className="text-2xl block mb-2">🛡️</span>
                <h3 className="font-bold newq">Kill Chain Phases</h3>
                <p className="text-sm">Recon → Weaponize → Deliver → Exploit → Install → C2 → Act</p>
              </div>
            </div>
          </section>

          {/* Success Message */}
          <div className="bg-red-600 text-white p-8 text-center">
            <CheckCircle className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl newq mb-2">Good Luck with Your Incident Response Exam!</h2>
            <p className="text-xl newq text-red-100">You're now ready to handle any security emergency</p>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-red-900 text-white py-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg newq mb-2">Incident Response Q&A</h3>
                <p className="text-red-200 newq text-sm">
                  Complete study guide for exams (5 & 10 mark questions)
                </p>
              </div>
              <div>
                <h3 className="text-lg newq mb-2">Quick Navigation</h3>
                <ul className="space-y-1">
                  <li><a href="#q1" className="text-red-200 newq text-sm">Q.1 (5 marks) - Incident Response</a></li>
                  <li><a href="#q2" className="text-red-200 newq text-sm">Q.2 (5 marks) - IoC</a></li>
                  <li><a href="#q3" className="text-red-200 newq text-sm">Q.3 (5 marks) - Host/Network Indicators</a></li>
                  <li><a href="#q4" className="text-red-200 newq text-sm">Q.4 (5 marks) - Indicator Lifecycle</a></li>
                  <li><a href="#q5" className="text-red-200 newq text-sm">Q.5 (10 marks) - Detection Methods</a></li>
                  <li><a href="#q6" className="text-red-200 newq text-sm">Q.6 (10 marks) - IR Process</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg newq mb-2">Topics Covered</h3>
                <p className="text-red-200 newq text-sm">Incident Response, IoC, Indicators, Detection Methods, IR Process, Attack Life Cycle, Incident Types, Classification Frameworks</p>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-red-800 text-center">
              <p className="text-red-300 newq text-sm">
                © 2024 Incident Response Study Guide - Complete Answers for All Questions
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}