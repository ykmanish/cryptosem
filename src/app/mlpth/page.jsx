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
  BarChart,
  Code,
  Box,
  Cpu,
  Download,
  Upload,
  Layers,
  GitBranch,
  Terminal,
  Wrench,
  Settings,
  Scissors,
  Shield as ShieldIcon
} from 'lucide-react';

export default function MalwareAnalysisFundamentalsQA() {
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
        <title>Malware Analysis Fundamentals - Study Guide</title>
        <meta name="description" content="Comprehensive study guide for malware analysis fundamentals questions" />
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
          .bg-teal-50 { background-color: #f0fdfa; }
          .bg-teal-100 { background-color: #ccfbf1; }
          .bg-teal-600 { background-color: #0d9488; }
          .bg-teal-800 { background-color: #115e59; }
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
          .text-teal-600 { color: #0d9488; }
          .text-teal-700 { color: #0f766e; }
          .text-teal-800 { color: #115e59; }
          .text-gray-600 { color: #4b5563; }
          .text-gray-800 { color: #1f2937; }
          .text-white { color: #ffffff; }
          .border-blue-200 { border: 2px solid #bfdbfe; }
          .border-blue-800 { border: 2px solid #1e40af; }
          .border-red-300 { border: 2px solid #fca5a5; }
          .border-green-200 { border: 2px solid #bbf7d0; }
          .border-purple-200 { border: 2px solid #e9d5ff; }
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
          .pl-8 { padding-left: 2rem; }
          .pl-10 { padding-left: 2.5rem; }

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
        <nav className="bg-purple-900 text-white p-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-purple-200" />
              <span className="text-xl newq">Malware Analysis Fundamentals - Study Guide</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <a href="#q1" className="text-purple-200 newq hover:text-white">Q.1</a>
              <a href="#q2" className="text-purple-200 newq hover:text-white">Q.2</a>
              <a href="#q3" className="text-purple-200 newq hover:text-white">Q.3</a>
              <a href="#q4" className="text-purple-200 newq hover:text-white">Q.4</a>
              <a href="#q5" className="text-purple-200 newq hover:text-white">Q.5</a>
              <a href="#q6" className="text-purple-200 newq hover:text-white">Q.6</a>
              <a href="#q7" className="text-purple-200 newq hover:text-white">Q.7</a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 space-y-2">
              <a href="#q1" className="block p-2 text-purple-200 newq">Q.1</a>
              <a href="#q2" className="block p-2 text-purple-200 newq">Q.2</a>
              <a href="#q3" className="block p-2 text-purple-200 newq">Q.3</a>
              <a href="#q4" className="block p-2 text-purple-200 newq">Q.4</a>
              <a href="#q5" className="block p-2 text-purple-200 newq">Q.5</a>
              <a href="#q6" className="block p-2 text-purple-200 newq">Q.6</a>
              <a href="#q7" className="block p-2 text-purple-200 newq">Q.7</a>
            </div>
          )}
        </nav>

        {/* Header */}
        <div className="bg-purple-600 text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl newq mb-4">Malware Analysis Fundamentals</h1>
            <p className="text-xl text-purple-100 newq">Complete Question & Answer Study Guide</p>
            <p className="text-lg text-purple-200 newq mt-4">Learn the core concepts of malware analysis from the ground up!</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 py-12">

          {/* Q.1 */}
          <section id="q1" className="mb-12 bg-white p-8">
            <div className="flex items-center mb-6 border-b-2 border-purple-200 pb-4">
              <span className="bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold mr-3">1</span>
              <h2 className="text-3xl newq text-purple-900">Question 1</h2>
            </div>
            
            <div className="border-l-4 border-purple-400 pl-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl newq text-purple-800 font-bold mb-3">"The study or process of determining the functionality, origin and potential impact of a given malware sample and extracting as much information from it." – Identify and Discuss the types.</h3>
                <button 
                  onClick={() => toggleAnswer('q1')}
                  className="bg-purple-100 text-purple-800 px-4 py-2 newq text-sm flex items-center"
                >
                  <HelpCircle className="w-4 h-4 mr-1" />
                  {showAnswers.q1 ? 'Hide Answer' : 'Show Answer'}
                </button>
              </div>
              
              {showAnswers.q1 && (
                <div className="bg-purple-50 p-6 mt-4">
                  <div className="flex items-center mb-4">
                    <Search className="w-8 h-8 text-purple-600 mr-2" />
                    <h4 className="text-xl newq text-purple-800">This is the definition of <span className="font-bold">Malware Analysis</span></h4>
                  </div>

                  <p className="text-purple-700 newq mb-4">
                    Malware analysis is like being a detective who studies computer germs to understand how they work, 
                    where they came from, and how much damage they can cause!
                  </p>

                  <h5 className="font-bold newq text-purple-800 mb-3">Types of Malware Analysis:</h5>

                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    {/* Static Analysis */}
                    <div className="bg-white p-4">
                      <div className="flex items-center mb-2">
                        <FileText className="w-5 h-5 text-purple-600 mr-1" />
                        <h6 className="font-bold newq">1. Static Analysis</h6>
                      </div>
                      <p className="text-xs mb-2">Examining without running the file</p>
                      <ul className="list-disc pl-4 text-xs">
                        <li>Check file type (MZ signature)</li>
                        <li>Calculate hashes (MD5, SHA256)</li>
                        <li>Extract strings</li>
                        <li>Check imports/exports</li>
                        <li>Detect packers</li>
                      </ul>
                      <div className="bg-purple-100 p-2 mt-2 text-xs">
                        🎯 Analogy: Looking at a wrapped gift without opening it
                      </div>
                    </div>

                    {/* Dynamic Analysis */}
                    <div className="bg-white p-4">
                      <div className="flex items-center mb-2">
                        <Activity className="w-5 h-5 text-purple-600 mr-1" />
                        <h6 className="font-bold newq">2. Dynamic Analysis</h6>
                      </div>
                      <p className="text-xs mb-2">Running malware in safe environment</p>
                      <ul className="list-disc pl-4 text-xs">
                        <li>Run in sandbox/VM</li>
                        <li>Monitor file changes</li>
                        <li>Watch registry modifications</li>
                        <li>Capture network traffic</li>
                        <li>Observe process behavior</li>
                      </ul>
                      <div className="bg-purple-100 p-2 mt-2 text-xs">
                        🎯 Analogy: Opening gift in a glass box to see what it does
                      </div>
                    </div>

                    {/* Code Analysis */}
                    <div className="bg-white p-4">
                      <div className="flex items-center mb-2">
                        <Code className="w-5 h-5 text-purple-600 mr-1" />
                        <h6 className="font-bold newq">3. Code Analysis</h6>
                      </div>
                      <p className="text-xs mb-2">Reverse engineering the code</p>
                      <ul className="list-disc pl-4 text-xs">
                        <li>Disassemble with IDA Pro</li>
                        <li>Debug with x64dbg</li>
                        <li>Understand algorithms</li>
                        <li>Find encryption keys</li>
                        <li>Extract configuration</li>
                      </ul>
                      <div className="bg-purple-100 p-2 mt-2 text-xs">
                        🎯 Analogy: Taking apart a toy to see how every gear works
                      </div>
                    </div>
                  </div>

                  {/* Goals of Malware Analysis */}
                  <div className="bg-white p-4">
                    <h6 className="font-bold newq text-purple-800 mb-2">🎯 Goals of Malware Analysis:</h6>
                    <div className="grid md:grid-cols-2 gap-2">
                      <div className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span className="text-sm">Determine functionality (what it does)</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span className="text-sm">Identify origin (who made it)</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span className="text-sm">Assess potential impact (damage it can cause)</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span className="text-sm">Extract Indicators of Compromise (IoCs)</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span className="text-sm">Develop detection signatures</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span className="text-sm">Create removal/cleanup tools</span>
                      </div>
                    </div>
                  </div>

                  {/* Comparison Table */}
                  <div className="mt-4 bg-white p-4">
                    <h6 className="font-bold newq text-purple-800 mb-2">Comparison of Analysis Types:</h6>
                    <table className="w-full text-xs">
                      <thead className="bg-purple-100">
                        <tr>
                          <th className="p-2">Aspect</th>
                          <th className="p-2">Static</th>
                          <th className="p-2">Dynamic</th>
                          <th className="p-2">Code</th>
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
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Q.2 */}
          <section id="q2" className="mb-12 bg-white p-8">
            <div className="flex items-center mb-6 border-b-2 border-blue-200 pb-4">
              <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold mr-3">2</span>
              <h2 className="text-3xl newq text-blue-900">Question 2</h2>
            </div>
            
            <div className="border-l-4 border-blue-400 pl-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl newq text-blue-800 font-bold mb-3">Throw some light on the Importance of "sandboxing concept in malware analysis"</h3>
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
                    <Box className="w-8 h-8 text-blue-600 mr-2" />
                    <h4 className="text-xl newq text-blue-800">Sandboxing Concept</h4>
                  </div>

                  <p className="text-blue-700 newq mb-4">
                    A sandbox is like a special playpen where you can let a potentially dangerous toy (malware) 
                    run around safely without it escaping and causing damage to your real computer!
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-4">
                      <span className="text-3xl block mb-2">🏖️</span>
                      <h5 className="font-bold newq text-blue-800 mb-2">Real Life Analogy:</h5>
                      <p className="text-sm">Imagine you find a strange bug. Before letting it loose in your house, you put it in a glass jar to watch what it does. That's a sandbox!</p>
                    </div>

                    <div className="bg-white p-4">
                      <span className="text-3xl block mb-2">🛡️</span>
                      <h5 className="font-bold newq text-blue-800 mb-2">Why It's Important:</h5>
                      <ul className="list-disc pl-5 text-sm">
                        <li>Safe observation without risk</li>
                        <li>See malware's true behavior</li>
                        <li>Automated analysis</li>
                        <li>Repeatable testing</li>
                      </ul>
                    </div>
                  </div>

                  <h5 className="font-bold newq text-blue-800 mb-3">Key Benefits of Sandboxing:</h5>

                  <div className="space-y-4">
                    <div className="bg-white p-3">
                      <div className="flex items-center mb-1">
                        <span className="bg-blue-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mr-2">1</span>
                        <h6 className="font-bold newq">Isolation & Safety</h6>
                      </div>
                      <p className="text-sm pl-7">Malware runs in contained environment, cannot infect host system or network</p>
                    </div>

                    <div className="bg-white p-3">
                      <div className="flex items-center mb-1">
                        <span className="bg-blue-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mr-2">2</span>
                        <h6 className="font-bold newq">Behavior Observation</h6>
                      </div>
                      <p className="text-sm pl-7">Watch file changes, registry modifications, network connections, process creation</p>
                    </div>

                    <div className="bg-white p-3">
                      <div className="flex items-center mb-1">
                        <span className="bg-blue-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mr-2">3</span>
                        <h6 className="font-bold newq">Automated Analysis</h6>
                      </div>
                      <p className="text-sm pl-7">Tools like Cuckoo Sandbox automatically run and report on malware behavior</p>
                    </div>

                    <div className="bg-white p-3">
                      <div className="flex items-center mb-1">
                        <span className="bg-blue-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mr-2">4</span>
                        <h6 className="font-bold newq">Safe Network Monitoring</h6>
                      </div>
                      <p className="text-sm pl-7">Capture network traffic to see C2 communications without real risk</p>
                    </div>

                    <div className="bg-white p-3">
                      <div className="flex items-center mb-1">
                        <span className="bg-blue-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mr-2">5</span>
                        <h6 className="font-bold newq">Evasion Detection</h6>
                      </div>
                      <p className="text-sm pl-7">Some malware detects sandboxes - helps identify sophisticated threats</p>
                    </div>
                  </div>

                  {/* Popular Sandbox Tools */}
                  <div className="mt-6 bg-green-50 p-4">
                    <h6 className="font-bold newq text-green-800 mb-2">Popular Sandbox Tools:</h6>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      <div className="bg-white p-2 text-center text-xs">Cuckoo Sandbox</div>
                      <div className="bg-white p-2 text-center text-xs">Joe Sandbox</div>
                      <div className="bg-white p-2 text-center text-xs">FireEye AX</div>
                      <div className="bg-white p-2 text-center text-xs">Any.Run</div>
                      <div className="bg-white p-2 text-center text-xs">Hybrid Analysis</div>
                      <div className="bg-white p-2 text-center text-xs">VMRay</div>
                      <div className="bg-white p-2 text-center text-xs">CAPE Sandbox</div>
                      <div className="bg-white p-2 text-center text-xs">Falcon Sandbox</div>
                    </div>
                  </div>

                  {/* Sandbox Evasion Techniques */}
                  <div className="mt-4 bg-yellow-50 p-4">
                    <h6 className="font-bold newq text-yellow-800 mb-2">⚠️ Malware Sandbox Evasion Techniques:</h6>
                    <ul className="list-disc pl-5 text-sm">
                      <li>Checking for virtual machine artifacts</li>
                      <li>Delaying execution (sleep calls)</li>
                      <li>Requiring user interaction (mouse clicks)</li>
                      <li>Checking system uptime (sandboxes are often fresh)</li>
                      <li>Looking for analysis tools in memory</li>
                    </ul>
                  </div>

                  {/* Sandbox Architecture */}
                  <div className="mt-4 bg-white p-4">
                    <h6 className="font-bold newq text-blue-800 mb-2">Typical Sandbox Architecture:</h6>
                    <pre className="bg-gray-100 p-2 text-xs">
{`[Malware Sample] → [Virtual Machine/Sandbox] → [Monitoring Tools]
                             ↓
                    [File Monitor]
                    [Registry Monitor]
                    [Network Monitor]
                    [Process Monitor]
                             ↓
                    [Analysis Report]`}
                    </pre>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Q.3 */}
          <section id="q3" className="mb-12 bg-white p-8">
            <div className="flex items-center mb-6 border-b-2 border-green-200 pb-4">
              <span className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold mr-3">3</span>
              <h2 className="text-3xl newq text-green-900">Question 3</h2>
            </div>
            
            <div className="border-l-4 border-green-400 pl-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl newq text-green-800 font-bold mb-3">Understand and discuss "process of deconstructing a system, object, or software to understand its components and functionality to determine whether the source is malicious or not"</h3>
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
                  <div className="flex items-center mb-4">
                    <Scissors className="w-8 h-8 text-green-600 mr-2" />
                    <h4 className="text-xl newq text-green-800">This is <span className="font-bold">Reverse Engineering</span></h4>
                  </div>

                  <p className="text-green-700 newq mb-4">
                    Reverse engineering is like taking apart a toy to see how all the pieces work together - 
                    but for software! It helps us understand if a program is doing something sneaky.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-4">
                      <span className="text-3xl block mb-2">🔧</span>
                      <h5 className="font-bold newq text-green-800 mb-2">Real Life Analogy:</h5>
                      <p className="text-sm">Like buying a mystery box at a garage sale - you take it apart piece by piece to understand what's inside and if it's safe to use.</p>
                    </div>

                    <div className="bg-white p-4">
                      <span className="text-3xl block mb-2">🎯</span>
                      <h5 className="font-bold newq text-green-800 mb-2">Purpose:</h5>
                      <ul className="list-disc pl-5 text-sm">
                        <li>Determine if software is malicious</li>
                        <li>Understand hidden functionality</li>
                        <li>Find vulnerabilities</li>
                        <li>Recover lost source code</li>
                      </ul>
                    </div>
                  </div>

                  <h5 className="font-bold newq text-green-800 mb-3">Reverse Engineering Process:</h5>

                  <div className="space-y-3">
                    {/* Step 1 */}
                    <div className="bg-white p-3">
                      <div className="flex items-center mb-1">
                        <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-2">1</span>
                        <h6 className="font-bold newq">Information Gathering</h6>
                      </div>
                      <p className="text-sm pl-8">Collect basic file information: type, size, hashes, strings</p>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-white p-3">
                      <div className="flex items-center mb-1">
                        <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-2">2</span>
                        <h6 className="font-bold newq">Static Analysis</h6>
                      </div>
                      <p className="text-sm pl-8">Examine code without execution using disassemblers (IDA Pro, Ghidra)</p>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white p-3">
                      <div className="flex items-center mb-1">
                        <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-2">3</span>
                        <h6 className="font-bold newq">Dynamic Analysis</h6>
                      </div>
                      <p className="text-sm pl-8">Run in debugger (x64dbg, OllyDbg) to watch execution flow</p>
                    </div>

                    {/* Step 4 */}
                    <div className="bg-white p-3">
                      <div className="flex items-center mb-1">
                        <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-2">4</span>
                        <h6 className="font-bold newq">Code Deconstruction</h6>
                      </div>
                      <p className="text-sm pl-8">Break down into functions, loops, API calls, algorithms</p>
                    </div>

                    {/* Step 5 */}
                    <div className="bg-white p-3">
                      <div className="flex items-center mb-1">
                        <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-2">5</span>
                        <h6 className="font-bold newq">Identify Malicious Components</h6>
                      </div>
                      <p className="text-sm pl-8">Look for harmful behaviors: encryption, C2 communication, data theft</p>
                    </div>

                    {/* Step 6 */}
                    <div className="bg-white p-3">
                      <div className="flex items-center mb-1">
                        <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-2">6</span>
                        <h6 className="font-bold newq">Document Findings</h6>
                      </div>
                      <p className="text-sm pl-8">Create report on functionality, IoCs, and threat assessment</p>
                    </div>
                  </div>

                  {/* Tools for Reverse Engineering */}
                  <div className="mt-6 bg-yellow-50 p-4">
                    <h6 className="font-bold newq text-yellow-800 mb-2">🛠️ Reverse Engineering Tools:</h6>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      <div className="bg-white p-2 text-center text-xs">IDA Pro</div>
                      <div className="bg-white p-2 text-center text-xs">Ghidra</div>
                      <div className="bg-white p-2 text-center text-xs">x64dbg</div>
                      <div className="bg-white p-2 text-center text-xs">OllyDbg</div>
                      <div className="bg-white p-2 text-center text-xs">Radare2</div>
                      <div className="bg-white p-2 text-center text-xs">Binary Ninja</div>
                      <div className="bg-white p-2 text-center text-xs">Hopper</div>
                      <div className="bg-white p-2 text-center text-xs">Immunity Debugger</div>
                    </div>
                  </div>

                  {/* Malicious Indicators */}
                  <div className="mt-4 bg-red-50 p-4">
                    <h6 className="font-bold newq text-red-800 mb-2">🔴 Indicators of Malicious Code:</h6>
                    <ul className="list-disc pl-5 text-sm">
                      <li>Anti-debugging techniques</li>
                      <li>Obfuscated strings and APIs</li>
                      <li>Process injection code</li>
                      <li>Persistence mechanisms (registry run keys)</li>
                      <li>Network communication functions</li>
                      <li>Encryption/decryption routines</li>
                      <li>Keylogging or screen capture code</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Q.4 */}
          <section id="q4" className="mb-12 bg-white p-8">
            <div className="flex items-center mb-6 border-b-2 border-orange-200 pb-4">
              <span className="bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold mr-3">4</span>
              <h2 className="text-3xl newq text-orange-900">Question 4</h2>
            </div>
            
            <div className="border-l-4 border-orange-400 pl-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl newq text-orange-800 font-bold mb-3">A file named as "Adobe.exe" seems to be malicious. Discuss the steps of how to check the file whether it contains malware or not without executing the file.</h3>
                <button 
                  onClick={() => toggleAnswer('q4')}
                  className="bg-orange-100 text-orange-800 px-4 py-2 newq text-sm flex items-center"
                >
                  <HelpCircle className="w-4 h-4 mr-1" />
                  {showAnswers.q4 ? 'Hide Answer' : 'Show Answer'}
                </button>
              </div>
              
              {showAnswers.q4 && (
                <div className="bg-orange-50 p-6 mt-4">
                  <p className="text-orange-700 newq mb-4">
                    This is called <span className="font-bold">Static Analysis</span> - examining a file without running it. 
                    Like a doctor checking X-rays without doing surgery!
                  </p>

                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-3">🔍</span>
                    <h5 className="text-lg newq text-orange-800 font-bold">Step-by-Step Static Analysis Process:</h5>
                  </div>

                  <div className="space-y-4">
                    {/* Step 1 */}
                    <div className="bg-white p-4">
                      <div className="flex items-center mb-2">
                        <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span>
                        <h6 className="text-lg newq text-orange-800 font-bold">Check File Extension & Signature</h6>
                      </div>
                      <p className="text-sm pl-11">Don't trust the name "Adobe.exe" - check the actual file signature!</p>
                      <div className="bg-orange-100 p-2 mt-2 ml-11">
                        <p className="font-mono text-xs">Use HxD hex editor to check first 2 bytes: 4D 5A = MZ = Windows executable</p>
                        <p className="text-xs mt-1">If it claims to be Adobe but is an EXE, that's suspicious!</p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-white p-4">
                      <div className="flex items-center mb-2">
                        <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                        <h6 className="text-lg newq text-orange-800 font-bold">Calculate File Hashes</h6>
                      </div>
                      <p className="text-sm pl-11">Generate MD5, SHA1, SHA256 fingerprints</p>
                      <div className="bg-orange-100 p-2 mt-2 ml-11">
                        <p className="font-mono text-xs">sha256sum Adobe.exe</p>
                        <p className="font-mono text-xs">3e69945e5865ccc861f69b24bc1166b6...</p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white p-4">
                      <div className="flex items-center mb-2">
                        <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                        <h6 className="text-lg newq text-orange-800 font-bold">VirusTotal Lookup</h6>
                      </div>
                      <p className="text-sm pl-11">Upload hash to VirusTotal to see if others have flagged it</p>
                      <div className="bg-orange-100 p-2 mt-2 ml-11">
                        <p className="text-xs">Check if any antivirus engines detect it as malicious</p>
                        <p className="text-xs font-bold text-red-600">58/70 engines detected - definitely malicious!</p>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="bg-white p-4">
                      <div className="flex items-center mb-2">
                        <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                        <h6 className="text-lg newq text-orange-800 font-bold">Extract Strings</h6>
                      </div>
                      <p className="text-sm pl-11">Use 'strings' command to find readable text</p>
                      <div className="bg-orange-100 p-2 mt-2 ml-11">
                        <pre className="text-xs">
{`strings Adobe.exe
192.168.1.100
malware.com
CreateRemoteThread
WriteProcessMemory
Software\\Microsoft\\Windows\\CurrentVersion\\Run`}
                        </pre>
                        <p className="text-xs font-bold text-red-600 mt-1">Suspicious IPs, domains, and API calls found!</p>
                      </div>
                    </div>

                    {/* Step 5 */}
                    <div className="bg-white p-4">
                      <div className="flex items-center mb-2">
                        <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">5</span>
                        <h6 className="text-lg newq text-orange-800 font-bold">Check PE Header Information</h6>
                      </div>
                      <p className="text-sm pl-11">Use tools like PEStudio, CFF Explorer, or Exeinfo PE</p>
                      <div className="bg-orange-100 p-2 mt-2 ml-11">
                        <ul className="list-disc pl-5 text-xs">
                          <li><span className="font-bold">Entry Point:</span> Suspicious if in unusual section</li>
                          <li><span className="font-bold">Sections:</span> UPX0, UPX1 indicate packing</li>
                          <li><span className="font-bold">Imports:</span> Network functions, process injection APIs</li>
                          <li><span className="font-bold">Resources:</span> Hidden embedded files</li>
                        </ul>
                      </div>
                    </div>

                    {/* Step 6 */}
                    <div className="bg-white p-4">
                      <div className="flex items-center mb-2">
                        <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">6</span>
                        <h6 className="text-lg newq text-orange-800 font-bold">Detect Packers/Obfuscation</h6>
                      </div>
                      <p className="text-sm pl-11">Use Exeinfo PE or Detect It Easy to check for packing</p>
                      <div className="bg-orange-100 p-2 mt-2 ml-11">
                        <p className="text-xs">Packed with UPX - common malware evasion technique</p>
                        <p className="text-xs">Few imports + packed = highly suspicious</p>
                      </div>
                    </div>

                    {/* Step 7 */}
                    <div className="bg-white p-4">
                      <div className="flex items-center mb-2">
                        <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">7</span>
                        <h6 className="text-lg newq text-orange-800 font-bold">Check Compile Timestamp</h6>
                      </div>
                      <p className="text-sm pl-11">Look at when the file was supposedly compiled</p>
                      <div className="bg-orange-100 p-2 mt-2 ml-11">
                        <p className="text-xs">Timestamp: 2024 (Adobe installer should be older)</p>
                        <p className="text-xs">Future date or very old date = suspicious</p>
                      </div>
                    </div>
                  </div>

                  {/* Quick Checklist */}
                  <div className="mt-6 bg-green-50 p-4">
                    <h6 className="font-bold newq text-green-800 mb-2">✅ Quick Static Analysis Checklist:</h6>
                    <div className="grid md:grid-cols-2 gap-2">
                      <div className="flex items-center">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-sm">File signature matches extension?</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-sm">Hash matches known malware?</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-sm">Suspicious strings found?</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-sm">Packed/obfuscated?</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-sm">Suspicious imports?</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-sm">Unusual section names?</span>
                      </div>
                    </div>
                  </div>

                  {/* Example Summary */}
                  <div className="mt-4 bg-yellow-50 p-4">
                    <h6 className="font-bold newq text-yellow-800 mb-2">📊 Summary for "Adobe.exe":</h6>
                    <p className="text-sm">Based on static analysis, this file appears malicious because:</p>
                    <ul className="list-disc pl-5 text-sm mt-2">
                      <li>It's an EXE pretending to be Adobe installer</li>
                      <li>Contains network IPs and suspicious API calls</li>
                      <li>Packed with UPX (hiding true intent)</li>
                      <li>Has registry persistence imports</li>
                      <li>VirusTotal shows 58/70 detections</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Q.5 */}
          <section id="q5" className="mb-12 bg-white p-8">
            <div className="flex items-center mb-6 border-b-2 border-red-200 pb-4">
              <span className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold mr-3">5</span>
              <h2 className="text-3xl newq text-red-900">Question 5</h2>
            </div>
            
            <div className="border-l-4 border-red-400 pl-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl newq text-red-800 font-bold mb-3">Throw some light on "Forensic Importance of Malware Analysis"</h3>
                <button 
                  onClick={() => toggleAnswer('q5')}
                  className="bg-red-100 text-red-800 px-4 py-2 newq text-sm flex items-center"
                >
                  <HelpCircle className="w-4 h-4 mr-1" />
                  {showAnswers.q5 ? 'Hide Answer' : 'Show Answer'}
                </button>
              </div>
              
              {showAnswers.q5 && (
                <div className="bg-red-50 p-6 mt-4">
                  <div className="flex items-center mb-4">
                    <Fingerprint className="w-8 h-8 text-red-600 mr-2" />
                    <h4 className="text-xl newq text-red-800">Forensic Importance of Malware Analysis</h4>
                  </div>

                  <p className="text-red-700 newq mb-4">
                    Just like detectives analyze evidence at a crime scene, malware analysts examine digital evidence 
                    to understand what happened, who did it, and how to prevent it from happening again!
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-4">
                      <span className="text-3xl block mb-2">🔍</span>
                      <h5 className="font-bold newq text-red-800 mb-2">Real Life Analogy:</h5>
                      <p className="text-sm">Like forensic scientists analyzing a bullet found at a crime scene to determine what gun was used, where it came from, and who might have fired it.</p>
                    </div>

                    <div className="bg-white p-4">
                      <span className="text-3xl block mb-2">⚖️</span>
                      <h5 className="font-bold newq text-red-800 mb-2">Legal Context:</h5>
                      <p className="text-sm">Malware analysis provides evidence that can be used in court to prosecute cybercriminals.</p>
                    </div>
                  </div>

                  <h5 className="font-bold newq text-red-800 mb-3">Forensic Importance Aspects:</h5>

                  <div className="space-y-4">
                    {/* Attribution */}
                    <div className="bg-white p-3">
                      <div className="flex items-center mb-1">
                        <span className="bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-2">1</span>
                        <h6 className="font-bold newq">Attribution (Who done it?)</h6>
                      </div>
                      <ul className="list-disc pl-8 text-sm">
                        <li>Code similarities link to known threat actors</li>
                        <li>PDB paths reveal developer information</li>
                        <li>Language artifacts (comments in Russian, Chinese, etc.)</li>
                        <li>C2 infrastructure patterns</li>
                      </ul>
                    </div>

                    {/* Timeline Reconstruction */}
                    <div className="bg-white p-3">
                      <div className="flex items-center mb-1">
                        <span className="bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-2">2</span>
                        <h6 className="font-bold newq">Timeline Reconstruction (When?)</h6>
                      </div>
                      <ul className="list-disc pl-8 text-sm">
                        <li>Compile timestamps show when malware was built</li>
                        <li>File creation/modification times</li>
                        <li>Network logs showing C2 communication times</li>
                        <li>Build attack chronology</li>
                      </ul>
                    </div>

                    {/* Impact Assessment */}
                    <div className="bg-white p-3">
                      <div className="flex items-center mb-1">
                        <span className="bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-2">3</span>
                        <h6 className="font-bold newq">Impact Assessment (What damage?)</h6>
                      </div>
                      <ul className="list-disc pl-8 text-sm">
                        <li>What data was targeted/stolen?</li>
                        <li>What systems were affected?</li>
                        <li>Financial impact calculation</li>
                        <li>Recovery scope determination</li>
                      </ul>
                    </div>

                    {/* Evidence Collection */}
                    <div className="bg-white p-3">
                      <div className="flex items-center mb-1">
                        <span className="bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-2">4</span>
                        <h6 className="font-bold newq">Evidence Collection (What to preserve?)</h6>
                      </div>
                      <ul className="list-disc pl-8 text-sm">
                        <li>Malware samples (preserve with hashes)</li>
                        <li>Network traffic captures</li>
                        <li>Memory dumps</li>
                        <li>System logs and artifacts</li>
                        <li>Chain of custody documentation</li>
                      </ul>
                    </div>

                    {/* IoC Generation */}
                    <div className="bg-white p-3">
                      <div className="flex items-center mb-1">
                        <span className="bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-2">5</span>
                        <h6 className="font-bold newq">Indicator Generation (What to look for?)</h6>
                      </div>
                      <ul className="list-disc pl-8 text-sm">
                        <li>File hashes (MD5, SHA256) for detection</li>
                        <li>IP addresses and domains of C2 servers</li>
                        <li>Registry keys created/modified</li>
                        <li>File paths and names used</li>
                        <li>YARA rules for future hunting</li>
                      </ul>
                    </div>

                    {/* Legal Proceedings */}
                    <div className="bg-white p-3">
                      <div className="flex items-center mb-1">
                        <span className="bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-2">6</span>
                        <h6 className="font-bold newq">Legal Proceedings (Court evidence)</h6>
                      </div>
                      <ul className="list-disc pl-8 text-sm">
                        <li>Expert witness testimony</li>
                        <li>Forensic reports as evidence</li>
                        <li>Proving intent and capability</li>
                        <li>Damage quantification</li>
                      </ul>
                    </div>
                  </div>

                  {/* Forensic Process Flow */}
                  <div className="mt-6 bg-indigo-50 p-4">
                    <h6 className="font-bold newq text-indigo-800 mb-2">Forensic Malware Analysis Process:</h6>
                    <pre className="bg-white p-2 text-xs">
{`[Incident Detected] → [Preserve Evidence] → [Malware Analysis] → [IoC Extraction]
         ↓                   ↓                      ↓                     ↓
   [Documentation]    [Chain of Custody]    [Technical Report]    [Threat Intelligence]
                                                                           ↓
                                                              [Legal Proceedings]`}
                    </pre>
                  </div>

                  {/* Real Case Example */}
                  <div className="mt-4 bg-yellow-50 p-4">
                    <h6 className="font-bold newq text-yellow-800 mb-2">📖 Real Forensic Case: NotPetya Ransomware</h6>
                    <p className="text-sm">Malware analysis of NotPetya revealed:</p>
                    <ul className="list-disc pl-5 text-sm mt-1">
                      <li>Code similarities to previous attacks (attribution)</li>
                      <li>EternalBlue exploit used (attack vector)</li>
                      <li>Masquerading as ransomware but was wiper (true intent)</li>
                      <li>Compile timestamps linked to specific timezone</li>
                      <li>Evidence used to attribute to Russian military</li>
                    </ul>
                  </div>

                  {/* Chain of Custody */}
                  <div className="mt-4 bg-blue-50 p-4">
                    <h6 className="font-bold newq text-blue-800 mb-2">📋 Chain of Custody Requirements:</h6>
                    <div className="grid md:grid-cols-4 gap-2 text-xs">
                      <div className="bg-white p-2">Who collected it?</div>
                      <div className="bg-white p-2">When collected?</div>
                      <div className="bg-white p-2">Where stored?</div>
                      <div className="bg-white p-2">Who accessed it?</div>
                    </div>
                    <p className="text-xs mt-2 text-blue-600">Every transfer must be documented for evidence to be admissible in court!</p>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Q.6 */}
          <section id="q6" className="mb-12 bg-white p-8">
            <div className="flex items-center mb-6 border-b-2 border-teal-200 pb-4">
              <span className="bg-teal-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold mr-3">6</span>
              <h2 className="text-3xl newq text-teal-900">Question 6</h2>
            </div>
            
            <div className="border-l-4 border-teal-400 pl-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl newq text-teal-800 font-bold mb-3">Enlist and define the Open-Source Malware Analysis Tools.</h3>
                <button 
                  onClick={() => toggleAnswer('q6')}
                  className="bg-teal-100 text-teal-800 px-4 py-2 newq text-sm flex items-center"
                >
                  <HelpCircle className="w-4 h-4 mr-1" />
                  {showAnswers.q6 ? 'Hide Answer' : 'Show Answer'}
                </button>
              </div>
              
              {showAnswers.q6 && (
                <div className="bg-teal-50 p-6 mt-4">
                  <div className="flex items-center mb-4">
                    <Tool className="w-8 h-8 text-teal-600 mr-2" />
                    <h4 className="text-xl newq text-teal-800">Open-Source Malware Analysis Tools</h4>
                  </div>

                  <p className="text-teal-700 newq mb-4">
                    Open-source tools are like free detective tools that anyone can use to investigate malware. 
                    They're created by the community and shared with everyone!
                  </p>

                  <div className="space-y-6">
                    {/* Static Analysis Tools */}
                    <div className="bg-white p-4">
                      <h5 className="font-bold newq text-teal-800 mb-3 text-lg">🔍 Static Analysis Tools</h5>
                      
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="border-l-4 border-teal-400 pl-3">
                          <p className="font-bold">PEStudio</p>
                          <p className="text-xs">Scans executables for suspicious artifacts without running them. Shows imports, strings, indicators.</p>
                        </div>

                        <div className="border-l-4 border-teal-400 pl-3">
                          <p className="font-bold">Exeinfo PE</p>
                          <p className="text-xs">Detects packers, compilers, and provides file information. Great for quick triage.</p>
                        </div>

                        <div className="border-l-4 border-teal-400 pl-3">
                          <p className="font-bold">CFF Explorer</p>
                          <p className="text-xs">PE file editor and viewer. Modify and examine PE header structures.</p>
                        </div>

                        <div className="border-l-4 border-teal-400 pl-3">
                          <p className="font-bold">Detect It Easy (DIE)</p>
                          <p className="text-xs">Identifies file types, packers, and protectors with signature detection.</p>
                        </div>

                        <div className="border-l-4 border-teal-400 pl-3">
                          <p className="font-bold">PEiD</p>
                          <p className="text-xs">Detects packers, cryptors, and compilers in PE files.</p>
                        </div>

                        <div className="border-l-4 border-teal-400 pl-3">
                          <p className="font-bold">Strings (sysinternals)</p>
                          <p className="text-xs">Extracts ASCII and Unicode strings from binary files.</p>
                        </div>
                      </div>
                    </div>

                    {/* Dynamic Analysis Tools */}
                    <div className="bg-white p-4">
                      <h5 className="font-bold newq text-teal-800 mb-3 text-lg">🎬 Dynamic Analysis Tools</h5>
                      
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="border-l-4 border-teal-400 pl-3">
                          <p className="font-bold">Process Monitor (ProcMon)</p>
                          <p className="text-xs">Monitors file system, registry, and process activity in real-time.</p>
                        </div>

                        <div className="border-l-4 border-teal-400 pl-3">
                          <p className="font-bold">Process Explorer</p>
                          <p className="text-xs">Task manager replacement showing detailed process information.</p>
                        </div>

                        <div className="border-l-4 border-teal-400 pl-3">
                          <p className="font-bold">Regshot</p>
                          <p className="text-xs">Takes registry snapshots before/after malware execution to show changes.</p>
                        </div>

                        <div className="border-l-4 border-teal-400 pl-3">
                          <p className="font-bold">Wireshark</p>
                          <p className="text-xs">Network protocol analyzer to capture and inspect network traffic.</p>
                        </div>

                        <div className="border-l-4 border-teal-400 pl-3">
                          <p className="font-bold">FakeNet</p>
                          <p className="text-xs">Simulates network services to trick malware into communicating locally.</p>
                        </div>

                        <div className="border-l-4 border-teal-400 pl-3">
                          <p className="font-bold">API Monitor</p>
                          <p className="text-xs">Monitors and displays API calls made by applications.</p>
                        </div>
                      </div>
                    </div>

                    {/* Code Analysis Tools */}
                    <div className="bg-white p-4">
                      <h5 className="font-bold newq text-teal-800 mb-3 text-lg">🔧 Code Analysis Tools</h5>
                      
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="border-l-4 border-teal-400 pl-3">
                          <p className="font-bold">Ghidra</p>
                          <p className="text-xs">NSA's reverse engineering framework with disassembler and decompiler.</p>
                        </div>

                        <div className="border-l-4 border-teal-400 pl-3">
                          <p className="font-bold">x64dbg</p>
                          <p className="text-xs">Windows debugger for x64 and x86 binaries.</p>
                        </div>

                        <div className="border-l-4 border-teal-400 pl-3">
                          <p className="font-bold">Radare2</p>
                          <p className="text-xs">Reverse engineering framework with disassembler, debugger, and analysis.</p>
                        </div>

                        <div className="border-l-4 border-teal-400 pl-3">
                          <p className="font-bold">OllyDbg</p>
                          <p className="text-xs">32-bit assembler level debugger for Windows.</p>
                        </div>

                        <div className="border-l-4 border-teal-400 pl-3">
                          <p className="font-bold">dnSpy</p>
                          <p className="text-xs">.NET assembly editor, decompiler, and debugger.</p>
                        </div>

                        <div className="border-l-4 border-teal-400 pl-3">
                          <p className="font-bold">Binary Ninja (Cloud)</p>
                          <p className="text-xs">Reverse engineering platform with disassembly and analysis.</p>
                        </div>
                      </div>
                    </div>

                    {/* Sandbox Tools */}
                    <div className="bg-white p-4">
                      <h5 className="font-bold newq text-teal-800 mb-3 text-lg">🏖️ Sandbox Tools</h5>
                      
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="border-l-4 border-teal-400 pl-3">
                          <p className="font-bold">Cuckoo Sandbox</p>
                          <p className="text-xs">Automated malware analysis system. Runs files and reports behavior.</p>
                        </div>

                        <div className="border-l-4 border-teal-400 pl-3">
                          <p className="font-bold">CAPE Sandbox</p>
                          <p className="text-xs">Cuckoo fork with additional payload extraction capabilities.</p>
                        </div>

                        <div className="border-l-4 border-teal-400 pl-3">
                          <p className="font-bold">Any.Run (Free tier)</p>
                          <p className="text-xs">Interactive online malware analysis sandbox.</p>
                        </div>

                        <div className="border-l-4 border-teal-400 pl-3">
                          <p className="font-bold">Hybrid Analysis (Free)</p>
                          <p className="text-xs">Online sandbox with community submissions.</p>
                        </div>
                      </div>
                    </div>

                    {/* Memory Analysis Tools */}
                    <div className="bg-white p-4">
                      <h5 className="font-bold newq text-teal-800 mb-3 text-lg">💾 Memory Analysis Tools</h5>
                      
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="border-l-4 border-teal-400 pl-3">
                          <p className="font-bold">Volatility</p>
                          <p className="text-xs">Advanced memory forensics framework. Analyzes RAM dumps.</p>
                        </div>

                        <div className="border-l-4 border-teal-400 pl-3">
                          <p className="font-bold">Rekall</p>
                          <p className="text-xs">Memory analysis framework (Volatility fork).</p>
                        </div>

                        <div className="border-l-4 border-teal-400 pl-3">
                          <p className="font-bold">Memdump</p>
                          <p className="text-xs">Dumps process memory for analysis.</p>
                        </div>
                      </div>
                    </div>

                    {/* YARA Rules */}
                    <div className="bg-white p-4">
                      <h5 className="font-bold newq text-teal-800 mb-3 text-lg">📋 Signature Tools</h5>
                      
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="border-l-4 border-teal-400 pl-3">
                          <p className="font-bold">YARA</p>
                          <p className="text-xs">Pattern matching tool for creating malware signatures/rules.</p>
                        </div>

                        <div className="border-l-4 border-teal-400 pl-3">
                          <p className="font-bold">ssdeep</p>
                          <p className="text-xs">Fuzzy hashing for finding similar files.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tools Category Summary */}
                  <div className="mt-6 bg-yellow-50 p-4">
                    <h6 className="font-bold newq text-yellow-800 mb-2">Tool Categories Summary:</h6>
                    <table className="w-full text-xs">
                      <thead className="bg-yellow-100">
                        <tr>
                          <th className="p-2">Category</th>
                          <th className="p-2">Purpose</th>
                          <th className="p-2">Example Tools</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t">
                          <td className="p-2 font-bold">Static Analysis</td>
                          <td className="p-2">Analyze without running</td>
                          <td className="p-2">PEStudio, Exeinfo, CFF Explorer</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-2 font-bold">Dynamic Analysis</td>
                          <td className="p-2">Run and monitor</td>
                          <td className="p-2">ProcMon, Wireshark, Regshot</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-2 font-bold">Code Analysis</td>
                          <td className="p-2">Reverse engineering</td>
                          <td className="p-2">Ghidra, x64dbg, Radare2</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-2 font-bold">Sandbox</td>
                          <td className="p-2">Safe execution</td>
                          <td className="p-2">Cuckoo, CAPE</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Q.7 */}
          <section id="q7" className="mb-12 bg-white p-8">
            <div className="flex items-center mb-6 border-b-2 border-indigo-200 pb-4">
              <span className="bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold mr-3">7</span>
              <h2 className="text-3xl newq text-indigo-900">Question 7</h2>
            </div>
            
            <div className="border-l-4 border-indigo-400 pl-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl newq text-indigo-800 font-bold mb-3">Discuss "The series of steps that trace stages of a cyberattack from the early reconnaissance stages to the exfiltration of data. This kill chain helps us understand and combat ransomware, security breaches, and advanced persistent attacks"</h3>
                <button 
                  onClick={() => toggleAnswer('q7')}
                  className="bg-indigo-100 text-indigo-800 px-4 py-2 newq text-sm flex items-center"
                >
                  <HelpCircle className="w-4 h-4 mr-1" />
                  {showAnswers.q7 ? 'Hide Answer' : 'Show Answer'}
                </button>
              </div>
              
              {showAnswers.q7 && (
                <div className="bg-indigo-50 p-6 mt-4">
                  <div className="flex items-center mb-4">
                    <GitBranch className="w-8 h-8 text-indigo-600 mr-2" />
                    <h4 className="text-xl newq text-indigo-800">This is the <span className="font-bold">Cyber Kill Chain</span></h4>
                  </div>

                  <p className="text-indigo-700 newq mb-4">
                    The Cyber Kill Chain is like a burglar's step-by-step plan - understanding each step helps us 
                    stop them at any point before they complete their mission!
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-4">
                      <span className="text-3xl block mb-2">🔫</span>
                      <h5 className="font-bold newq text-indigo-800 mb-2">Why "Kill Chain"?</h5>
                      <p className="text-sm">Military term - if you break any link in the chain, the attack fails. Same with cyber attacks!</p>
                    </div>

                    <div className="bg-white p-4">
                      <span className="text-3xl block mb-2">🎯</span>
                      <h5 className="font-bold newq text-indigo-800 mb-2">Developed By:</h5>
                      <p className="text-sm">Lockheed Martin in 2011 to understand and prevent cyber intrusions.</p>
                    </div>
                  </div>

                  {/* Kill Chain Diagram */}
                  <div className="relative mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-7 gap-1">
                      <div className="bg-indigo-200 p-2 text-center text-xs font-bold">1. Recon</div>
                      <div className="bg-indigo-200 p-2 text-center text-xs font-bold">2. Weaponize</div>
                      <div className="bg-indigo-200 p-2 text-center text-xs font-bold">3. Deliver</div>
                      <div className="bg-indigo-200 p-2 text-center text-xs font-bold">4. Exploit</div>
                      <div className="bg-indigo-200 p-2 text-center text-xs font-bold">5. Install</div>
                      <div className="bg-indigo-200 p-2 text-center text-xs font-bold">6. C2</div>
                      <div className="bg-indigo-200 p-2 text-center text-xs font-bold">7. Act</div>
                    </div>
                  </div>

                  {/* Detailed Stages */}
                  <div className="space-y-4">
                    {/* Stage 1 */}
                    <div className="bg-white p-4">
                      <div className="flex items-center mb-2">
                        <span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span>
                        <h5 className="text-lg newq text-indigo-800 font-bold">Reconnaissance</h5>
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
                      <div className="bg-indigo-50 p-2 mt-2 text-xs ml-11">
                        <span className="font-bold">Analogy:</span> Burglar casing the neighborhood, watching when you leave for work.
                      </div>
                      <div className="bg-red-50 p-2 mt-1 text-xs ml-11">
                        <span className="font-bold">Detection:</span> Unusual scanning, social engineering attempts
                      </div>
                    </div>

                    {/* Stage 2 */}
                    <div className="bg-white p-4">
                      <div className="flex items-center mb-2">
                        <span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                        <h5 className="text-lg newq text-indigo-800 font-bold">Weaponization</h5>
                      </div>
                      <p className="text-sm pl-11">Creating the malware or exploit</p>
                      <ul className="list-disc pl-16 text-xs mt-2">
                        <li>Combine exploit with backdoor</li>
                        <li>Create malicious documents (PDFs, Word files)</li>
                        <li>Set up phishing email templates</li>
                        <li>Prepare command & control infrastructure</li>
                      </ul>
                      <div className="bg-indigo-50 p-2 mt-2 text-xs ml-11">
                        <span className="font-bold">Analogy:</span> Burglar preparing lock picks and crowbar.
                      </div>
                      <div className="bg-red-50 p-2 mt-1 text-xs ml-11">
                        <span className="font-bold">Detection:</span> Hard to detect - happens on attacker's system
                      </div>
                    </div>

                    {/* Stage 3 */}
                    <div className="bg-white p-4">
                      <div className="flex items-center mb-2">
                        <span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                        <h5 className="text-lg newq text-indigo-800 font-bold">Delivery</h5>
                      </div>
                      <p className="text-sm pl-11">Sending the weapon to the victim</p>
                      <ul className="list-disc pl-16 text-xs mt-2">
                        <li>Phishing emails with attachments</li>
                        <li>Malicious links</li>
                        <li>USB drops in parking lots</li>
                        <li>Drive-by downloads from websites</li>
                        <li>Watering hole attacks</li>
                      </ul>
                      <div className="bg-indigo-50 p-2 mt-2 text-xs ml-11">
                        <span className="font-bold">Analogy:</span> Burglar approaching your door and trying the handle.
                      </div>
                      <div className="bg-red-50 p-2 mt-1 text-xs ml-11">
                        <span className="font-bold">Detection:</span> Email filters, web filters, user awareness
                      </div>
                    </div>

                    {/* Stage 4 */}
                    <div className="bg-white p-4">
                      <div className="flex items-center mb-2">
                        <span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                        <h5 className="text-lg newq text-indigo-800 font-bold">Exploitation</h5>
                      </div>
                      <p className="text-sm pl-11">Triggering the vulnerability</p>
                      <ul className="list-disc pl-16 text-xs mt-2">
                        <li>User opens malicious attachment</li>
                        <li>Exploit targets software vulnerability</li>
                        <li>Code executes on victim's machine</li>
                        <li>Browser exploit via compromised site</li>
                      </ul>
                      <div className="bg-indigo-50 p-2 mt-2 text-xs ml-11">
                        <span className="font-bold">Analogy:</span> Burglar picking the lock and opening the door.
                      </div>
                      <div className="bg-red-50 p-2 mt-1 text-xs ml-11">
                        <span className="font-bold">Detection:</span> Antivirus, exploit prevention, application control
                      </div>
                    </div>

                    {/* Stage 5 */}
                    <div className="bg-white p-4">
                      <div className="flex items-center mb-2">
                        <span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">5</span>
                        <h5 className="text-lg newq text-indigo-800 font-bold">Installation</h5>
                      </div>
                      <p className="text-sm pl-11">Installing malware on the victim's system</p>
                      <ul className="list-disc pl-16 text-xs mt-2">
                        <li>Download additional payloads</li>
                        <li>Install backdoor for persistence</li>
                        <li>Create registry keys to survive reboot</li>
                        <li>Disable security software</li>
                        <li>Inject code into legitimate processes</li>
                      </ul>
                      <div className="bg-indigo-50 p-2 mt-2 text-xs ml-11">
                        <span className="font-bold">Analogy:</span> Burglar hiding inside your house and setting up a hiding spot.
                      </div>
                      <div className="bg-red-50 p-2 mt-1 text-xs ml-11">
                        <span className="font-bold">Detection:</span> File monitoring, registry monitoring, process monitoring
                      </div>
                    </div>

                    {/* Stage 6 */}
                    <div className="bg-white p-4">
                      <div className="flex items-center mb-2">
                        <span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">6</span>
                        <h5 className="text-lg newq text-indigo-800 font-bold">Command & Control (C2)</h5>
                      </div>
                      <p className="text-sm pl-11">Establishing communication with attacker</p>
                      <ul className="list-disc pl-16 text-xs mt-2">
                        <li>Malware "calls home" to C2 server</li>
                        <li>Receive commands from attacker</li>
                        <li>Send stolen data back</li>
                        <li>Beaconing at regular intervals</li>
                      </ul>
                      <div className="bg-indigo-50 p-2 mt-2 text-xs ml-11">
                        <span className="font-bold">Analogy:</span> Burglar using a walkie-talkie to talk to their partner outside.
                      </div>
                      <div className="bg-red-50 p-2 mt-1 text-xs ml-11">
                        <span className="font-bold">Detection:</span> Network monitoring, DNS monitoring, traffic analysis
                      </div>
                    </div>

                    {/* Stage 7 */}
                    <div className="bg-white p-4">
                      <div className="flex items-center mb-2">
                        <span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">7</span>
                        <h5 className="text-lg newq text-indigo-800 font-bold">Actions on Objectives</h5>
                      </div>
                      <p className="text-sm pl-11">Achieving the attacker's goal</p>
                      <ul className="list-disc pl-16 text-xs mt-2">
                        <li>Data theft/exfiltration</li>
                        <li>Ransomware encryption</li>
                        <li>System destruction</li>
                        <li>Lateral movement to other systems</li>
                        <li>Credential harvesting</li>
                      </ul>
                      <div className="bg-indigo-50 p-2 mt-2 text-xs ml-11">
                        <span className="font-bold">Analogy:</span> Burglar stealing your valuables and leaving.
                      </div>
                      <div className="bg-red-50 p-2 mt-1 text-xs ml-11">
                        <span className="font-bold">Detection:</span> Data loss prevention, endpoint detection, alerts
                      </div>
                    </div>
                  </div>

                  {/* Defense Opportunities */}
                  <div className="mt-6 bg-green-50 p-4">
                    <h6 className="font-bold newq text-green-800 mb-2">🛡️ Where to Stop the Attack:</h6>
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
                        <span className="font-bold">Install:</span> Application whitelisting
                      </div>
                      <div className="bg-white p-2 text-center text-xs">
                        <span className="font-bold">C2:</span> Block malicious domains, network monitoring
                      </div>
                      <div className="bg-white p-2 text-center text-xs">
                        <span className="font-bold">Act:</span> DLP, backups, incident response
                      </div>
                    </div>
                  </div>

                  {/* Real Example: WannaCry */}
                  <div className="mt-4 bg-yellow-50 p-4">
                    <h6 className="font-bold newq text-yellow-800 mb-2">📖 Real Example: WannaCry Ransomware (2017)</h6>
                    <table className="w-full text-xs">
                      <tbody>
                        <tr><td className="font-bold">Recon:</td><td>Scanned for vulnerable SMB services</td></tr>
                        <tr><td className="font-bold">Weaponize:</td><td>Combined EternalBlue exploit with ransomware</td></tr>
                        <tr><td className="font-bold">Deliver:</td><td>Phishing emails, worm spread</td></tr>
                        <tr><td className="font-bold">Exploit:</td><td>EternalBlue SMB vulnerability</td></tr>
                        <tr><td className="font-bold">Install:</td><td>Dropped ransomware payload</td></tr>
                        <tr><td className="font-bold">C2:</td><td>Attempted connection to kill switch domain</td></tr>
                        <tr><td className="font-bold">Act:</td><td>Encrypted files, demanded ransom</td></tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Kill Chain vs Other Models */}
                  <div className="mt-4 bg-blue-50 p-4">
                    <h6 className="font-bold newq text-blue-800 mb-2">Other Attack Lifecycle Models:</h6>
                    <ul className="list-disc pl-5 text-sm">
                      <li><span className="font-bold">MITRE ATT&CK:</span> More detailed knowledge base of adversary tactics</li>
                      <li><span className="font-bold">Unified Kill Chain:</span> Combines multiple models</li>
                      <li><span className="font-bold">Diamond Model:</span> Focuses on relationships (Adversary, Capability, Infrastructure, Victim)</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Study Tips Section */}
          <section className="bg-purple-50 p-8 mb-8">
            <h2 className="text-2xl newq text-purple-800 mb-4">📚 Study Tips for Malware Analysis</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4">
                <span className="text-2xl block mb-2">🔑</span>
                <h3 className="font-bold newq">Remember the 3 Types</h3>
                <p className="text-sm">Static → Dynamic → Code Analysis (increasing complexity)</p>
              </div>
              <div className="bg-white p-4">
                <span className="text-2xl block mb-2">🛡️</span>
                <h3 className="font-bold newq">Kill Chain Phases</h3>
                <p className="text-sm">Recon → Weaponize → Deliver → Exploit → Install → C2 → Act</p>
              </div>
              <div className="bg-white p-4">
                <span className="text-2xl block mb-2">🛠️</span>
                <h3 className="font-bold newq">Key Open-Source Tools</h3>
                <p className="text-sm">PEStudio, Ghidra, ProcMon, Wireshark, Cuckoo, Volatility</p>
              </div>
            </div>
          </section>

          {/* Success Message */}
          <div className="bg-purple-600 text-white p-8 text-center">
            <CheckCircle className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl newq mb-2">Good Luck with Your Malware Analysis Exam!</h2>
            <p className="text-xl newq text-purple-100">You're now ready to analyze any malware sample</p>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-purple-900 text-white py-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg newq mb-2">Malware Analysis Fundamentals</h3>
                <p className="text-purple-200 newq text-sm">
                  Complete study guide for all questions
                </p>
              </div>
              <div>
                <h3 className="text-lg newq mb-2">Quick Navigation</h3>
                <ul className="space-y-1">
                  <li><a href="#q1" className="text-purple-200 newq text-sm">Q.1 - Malware Analysis Types</a></li>
                  <li><a href="#q2" className="text-purple-200 newq text-sm">Q.2 - Sandboxing</a></li>
                  <li><a href="#q3" className="text-purple-200 newq text-sm">Q.3 - Reverse Engineering</a></li>
                  <li><a href="#q4" className="text-purple-200 newq text-sm">Q.4 - Static Analysis Steps</a></li>
                  <li><a href="#q5" className="text-purple-200 newq text-sm">Q.5 - Forensic Importance</a></li>
                  <li><a href="#q6" className="text-purple-200 newq text-sm">Q.6 - Open-Source Tools</a></li>
                  <li><a href="#q7" className="text-purple-200 newq text-sm">Q.7 - Cyber Kill Chain</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg newq mb-2">Topics Covered</h3>
                <p className="text-purple-200 newq text-sm">Malware Analysis Types, Sandboxing, Reverse Engineering, Static Analysis, Forensic Importance, Open-Source Tools, Cyber Kill Chain</p>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-purple-800 text-center">
              <p className="text-purple-300 newq text-sm">
                © 2024 Malware Analysis Fundamentals - Complete Answers for All Questions
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}