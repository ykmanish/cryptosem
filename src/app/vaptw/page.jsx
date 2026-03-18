'use client'
import React, { useState } from 'react';
import Head from 'next/head';
import { 
  Search, 
  Map, 
  Globe, 
  Mail, 
  Users, 
  Share2,
  ChevronRight,
  Menu,
  X,
  Shield,
  AlertTriangle,
  Lock,
  Eye,
  Network,
  Server,
  Database,
  Fingerprint,
  Key,
  Wifi,
  Smartphone,
  Laptop,
  Building,
  MapPin,
  FileText,
  Link,
  Inbox,
  Send,
  Clock,
  UserCheck,
  UserX,
  Code,
  Terminal,
  Package,
  Layers,
  Cpu,
  HardDrive,
  Radio,
  Satellite,
  Activity,
  Zap,
  AlertOctagon,
  BookOpen,
  Award
} from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFootprintingMethod, setActiveFootprintingMethod] = useState(null);
  const [activeScanType, setActiveScanType] = useState(null);
  const [activeDNSRecord, setActiveDNSRecord] = useState(null);
  const [activeSocialEngineering, setActiveSocialEngineering] = useState(null);
  const [showGoogleOperators, setShowGoogleOperators] = useState(false);
  const [showGHDB, setShowGHDB] = useState(false);
  const [showTraceroute, setShowTraceroute] = useState(false);
  const [showIdleScan, setShowIdleScan] = useState(false);
  const [selectedPort, setSelectedPort] = useState(null);

  const footprintingMethods = [
    {
      name: "Search Engines",
      emoji: "🔍",
      color: "blue",
      description: "Like using Google to find information about someone!",
      techniques: [
        "Find company websites and public URLs",
        "Location information from maps",
        "Financial information from Google Finance",
        "Job postings revealing company details",
        "Set up alerts to monitor target",
        "Information from forums and blogs"
      ],
      tools: ["Google", "Bing", "Google Finance", "Google Alerts"],
      icon: "🌐"
    },
    {
      name: "Google Hacking",
      emoji: "🎯",
      color: "red",
      description: "Using special Google tricks to find hidden information!",
      techniques: [
        "Advanced search operators",
        "Find specific file types (PDFs, docs)",
        "Search in specific websites",
        "Find login pages",
        "Discover exposed directories",
        "Google Hacking Database (GHDB)"
      ],
      tools: ["site:", "filetype:", "intitle:", "inurl:", "cache:", "related:"],
      icon: "🔎"
    },
    {
      name: "Social Networks",
      emoji: "👥",
      color: "purple",
      description: "Finding information on Facebook, LinkedIn, Twitter!",
      techniques: [
        "Profile photos and personal info",
        "Contact numbers and emails",
        "Work history and education",
        "Friends and family information",
        "Current location and activities",
        "Interests and technology used"
      ],
      platforms: ["LinkedIn", "Facebook", "Twitter", "Instagram"],
      icon: "🤝"
    },
    {
      name: "Website Footprinting",
      emoji: "🌐",
      color: "green",
      description: "Examining websites to find hidden details!",
      techniques: [
        "Find software and versions",
        "Identify operating system",
        "Discover sub-directories",
        "Mirror entire website",
        "Check archived versions",
        "Monitor website changes"
      ],
      tools: ["Netcraft", "HTTrack", "Burp Suite", "Archive.org"],
      icon: "💻"
    },
    {
      name: "Email Footprinting",
      emoji: "📧",
      color: "orange",
      description: "Tracking emails to find information!",
      techniques: [
        "Analyze email headers",
        "Track email path (hops)",
        "Find IP addresses",
        "Discover email servers",
        "Track if emails are read",
        "Extract hidden information"
      ],
      tools: ["Email Tracker Pro", "Polite Mail", "Yesware", "Read Notify"],
      icon: "✉️"
    },
    {
      name: "DNS Footprinting",
      emoji: "🔤",
      color: "teal",
      description: "Finding information about domain names!",
      techniques: [
        "Find IP addresses",
        "Discover mail servers",
        "Identify name servers",
        "Find subdomains",
        "Get host information",
        "DNS zone transfers"
      ],
      records: ["A", "MX", "NS", "CNAME", "TXT", "SOA"],
      icon: "📡"
    },
    {
      name: "Network Footprinting",
      emoji: "🕸️",
      color: "indigo",
      description: "Mapping the target's network!",
      techniques: [
        "Find network ranges",
        "Discover live hosts",
        "Trace network paths",
        "Identify operating systems",
        "Find open ports",
        "Map network topology"
      ],
      tools: ["Traceroute", "Ping", "Nmap", "Netstat"],
      icon: "🌍"
    },
    {
      name: "Social Engineering",
      emoji: "🎭",
      color: "pink",
      description: "Tricking people to give information!",
      techniques: [
        "Eavesdropping - listening to conversations",
        "Shoulder surfing - looking over shoulders",
        "Dumpster diving - searching trash",
        "Impersonation - pretending to be someone",
        "Phishing - fake emails",
        "Pretending to be help desk"
      ],
      risks: ["Human is the weakest link!", "Easy to trick people"],
      icon: "👥"
    }
  ];

  const googleOperators = [
    { operator: "site:", description: "Search within a specific website", example: "site:example.com" },
    { operator: "filetype:", description: "Find specific file types", example: "filetype:pdf" },
    { operator: "intitle:", description: "Find words in page title", example: "intitle:\"login page\"" },
    { operator: "inurl:", description: "Find words in URL", example: "inurl:admin" },
    { operator: "cache:", description: "See cached version", example: "cache:example.com" },
    { operator: "related:", description: "Find similar sites", example: "related:example.com" },
    { operator: "link:", description: "Find sites linking to page", example: "link:example.com" },
    { operator: "allintext:", description: "Find words in page text", example: "allintext:password" },
    { operator: "allintitle:", description: "Multiple words in title", example: "allintitle:admin panel" },
    { operator: "allinurl:", description: "Multiple words in URL", example: "allinurl:wp-admin" }
  ];

  const dnsRecords = [
    { type: "A", name: "Address Record", purpose: "Points domain to IP address", emoji: "🏠", example: "google.com → 172.217.16.46" },
    { type: "MX", name: "Mail Exchange", purpose: "Where to send emails", emoji: "📧", example: "mail.google.com" },
    { type: "NS", name: "Name Server", purpose: "Which DNS server knows this domain", emoji: "📋", example: "ns1.google.com" },
    { type: "CNAME", name: "Canonical Name", purpose: "Alias for another domain", emoji: "🔗", example: "www → @ (main domain)" },
    { type: "SOA", name: "Start of Authority", purpose: "Main information about domain", emoji: "📌", example: "Primary DNS server" },
    { type: "TXT", name: "Text Record", purpose: "Any text information", emoji: "📝", example: "Verification codes" },
    { type: "PTR", name: "Pointer", purpose: "IP address to domain (reverse)", emoji: "↩️", example: "172.217.16.46 → google.com" },
    { type: "HINFO", name: "Host Information", purpose: "OS and CPU info", emoji: "💻", example: "Linux, Intel" },
    { type: "SRV", name: "Service Record", purpose: "Location of services", emoji: "⚙️", example: "_sip._tcp.example.com" },
    { type: "RP", name: "Responsible Person", purpose: "Who manages this", emoji: "👤", example: "admin@example.com" }
  ];

  const socialEngineeringTypes = [
    {
      name: "Eavesdropping",
      emoji: "👂",
      color: "gray",
      description: "Secretly listening to conversations",
      example: "Hiding near someone's desk to hear phone calls",
      prevention: "Speak quietly in public, use private rooms"
    },
    {
      name: "Shoulder Surfing",
      emoji: "👀",
      color: "orange",
      description: "Looking over someone's shoulder",
      example: "Watching someone type their password",
      prevention: "Use privacy screens, be aware of surroundings"
    },
    {
      name: "Dumpster Diving",
      emoji: "🗑️",
      color: "brown",
      description: "Searching through trash for information",
      example: "Finding printed passwords in office trash",
      prevention: "Shred all documents before throwing"
    },
    {
      name: "Impersonation",
      emoji: "🎭",
      color: "purple",
      description: "Pretending to be someone else",
      example: "Fake IT support asking for password",
      prevention: "Verify identity before giving information"
    },
    {
      name: "Phishing",
      emoji: "🎣",
      color: "red",
      description: "Fake emails that look real",
      example: "Email that looks from bank asking to login",
      prevention: "Check email addresses carefully, don't click suspicious links"
    }
  ];

  const scanningObjectives = [
    { name: "Find Live Hosts", emoji: "💚", description: "See which computers are turned on" },
    { name: "Find Open Ports", emoji: "🚪", description: "See which doors are open" },
    { name: "Identify OS", emoji: "💻", description: "Find what operating system they use" },
    { name: "Find Services", emoji: "⚙️", description: "See what programs are running" },
    { name: "Find Firewalls", emoji: "🔥", description: "Discover security devices" },
    { name: "Find Vulnerabilities", emoji: "🕳️", description: "Find weak spots" }
  ];

  const scanTypes = [
    {
      name: "TCP Connect Scan",
      emoji: "🤝",
      color: "green",
      description: "Like knocking on a door and waiting for answer!",
      howItWorks: "Completes full handshake: SYN → SYN-ACK → ACK",
      advantage: "Reliable, works without special permissions",
      disadvantage: "Easy to detect (leaves logs)",
      icon: "🔌"
    },
    {
      name: "Stealth Scan (Half-Open)",
      emoji: "🥷",
      color: "purple",
      description: "Like knocking but running away before they open!",
      howItWorks: "SYN → SYN-ACK → RST (never completes connection)",
      advantage: "Harder to detect, doesn't complete connection",
      disadvantage: "Needs special permissions",
      icon: "👻"
    },
    {
      name: "XMAS Scan",
      emoji: "🎄",
      color: "red",
      description: "Like sending a package with ALL the flags!",
      howItWorks: "Sends packet with FIN, URG, PUSH flags set",
      advantage: "Can bypass some firewalls",
      disadvantage: "Doesn't work on Windows",
      icon: "✨"
    },
    {
      name: "FIN Scan",
      emoji: "🏁",
      color: "blue",
      description: "Sending 'finish' signal to start a conversation!",
      howItWorks: "Sends only FIN flag",
      advantage: "Can pass through firewalls",
      disadvantage: "Open ports don't respond (silent)",
      icon: "🔚"
    },
    {
      name: "NULL Scan",
      emoji: "⚫",
      color: "gray",
      description: "Sending a package with no flags at all!",
      howItWorks: "No flags set",
      advantage: "Can bypass some filters",
      disadvantage: "Easily detected (no reason to send empty)",
      icon: "0️⃣"
    },
    {
      name: "ACK Scan",
      emoji: "✅",
      color: "yellow",
      description: "Checking what firewalls allow through!",
      howItWorks: "Sends ACK flag, gets RST from unfiltered ports",
      advantage: "Maps firewall rules",
      disadvantage: "Doesn't show open/closed, only filtered/unfiltered",
      icon: "🔍"
    },
    {
      name: "IDLE Scan",
      emoji: "😴",
      color: "indigo",
      description: "Using a sleeping computer (Zombie) to scan!",
      howItWorks: "Bounces packets through another computer",
      advantage: "Completely anonymous",
      disadvantage: "Complex, needs zombie computer",
      icon: "🧟"
    }
  ];

  const commonPorts = [
    { port: 21, service: "FTP", description: "File Transfer", emoji: "📁" },
    { port: 22, service: "SSH", description: "Secure Shell", emoji: "🔐" },
    { port: 23, service: "Telnet", description: "Remote Login", emoji: "💻" },
    { port: 25, service: "SMTP", description: "Email Send", emoji: "📤" },
    { port: 53, service: "DNS", description: "Domain Names", emoji: "🔤" },
    { port: 80, service: "HTTP", description: "Websites", emoji: "🌐" },
    { port: 110, service: "POP3", description: "Email Receive", emoji: "📥" },
    { port: 443, service: "HTTPS", description: "Secure Websites", emoji: "🔒" },
    { port: 3306, service: "MySQL", description: "Database", emoji: "🗄️" },
    { port: 3389, service: "RDP", description: "Remote Desktop", emoji: "🖥️" }
  ];

  const websiteMirroringTools = [
    "HTTrack Website Copier",
    "SurfOffline Professional",
    "Black Widow",
    "NCollector Studio",
    "Website Ripper Copier",
    "Teleport Pro",
    "Offline Explorer",
    "GNU Wget",
    "PageNest",
    "Backstreet Browser"
  ];

  const emailTrackingTools = [
    "Polite Mail", "Email Tracker Pro", "Email Lookup", "Yesware",
    "Who Read Me", "Contact Monkey", "Read Notify", "Did They Read It",
    "Get Notify", "Point of Mail", "Trace Email", "G-Lock Analytics"
  ];

  const websiteMonitoringTools = [
    "Change Detection", "Follow That Page", "Page2RSS", "Watch That Page",
    "Check4Change", "OnWebChange", "Infominder", "TrackedContent",
    "Websnitcher", "Update Scanner", "Website-Watcher"
  ];

  return (
    <>
      <Head>
        <title>Footprinting & Scanning - Cyber Detective School</title>
        <meta name="description" content="Learn how cyber detectives gather information and scan networks!" />
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
          .bg-blue-700 { background-color: #1d4ed8; }
          .bg-blue-800 { background-color: #1e40af; }
          .bg-blue-900 { background-color: #1e3a8a; }
          .bg-green-50 { background-color: #f0fdf4; }
          .bg-green-100 { background-color: #dcfce7; }
          .bg-green-200 { background-color: #bbf7d0; }
          .bg-green-600 { background-color: #16a34a; }
          .bg-green-700 { background-color: #15803d; }
          .bg-green-800 { background-color: #166534; }
          .bg-red-50 { background-color: #fef2f2; }
          .bg-red-100 { background-color: #fee2e2; }
          .bg-red-200 { background-color: #fecaca; }
          .bg-red-600 { background-color: #dc2626; }
          .bg-red-700 { background-color: #b91c1c; }
          .bg-red-800 { background-color: #991b1b; }
          .bg-yellow-50 { background-color: #fefce8; }
          .bg-yellow-100 { background-color: #fef9c3; }
          .bg-yellow-200 { background-color: #fef08a; }
          .bg-yellow-600 { background-color: #ca8a04; }
          .bg-yellow-700 { background-color: #a16207; }
          .bg-yellow-800 { background-color: #854d0e; }
          .bg-purple-50 { background-color: #faf5ff; }
          .bg-purple-100 { background-color: #f3e8ff; }
          .bg-purple-200 { background-color: #e9d5ff; }
          .bg-purple-600 { background-color: #9333ea; }
          .bg-purple-700 { background-color: #7e22ce; }
          .bg-purple-800 { background-color: #6b21a8; }
          .bg-orange-50 { background-color: #fff7ed; }
          .bg-orange-100 { background-color: #ffedd5; }
          .bg-orange-200 { background-color: #fed7aa; }
          .bg-orange-600 { background-color: #ea580c; }
          .bg-orange-700 { background-color: #c2410c; }
          .bg-orange-800 { background-color: #9a3412; }
          .bg-pink-50 { background-color: #fdf2f8; }
          .bg-pink-100 { background-color: #fce7f3; }
          .bg-pink-200 { background-color: #fbcfe8; }
          .bg-pink-600 { background-color: #db2777; }
          .bg-pink-700 { background-color: #be185d; }
          .bg-pink-800 { background-color: #9d174d; }
          .bg-gray-50 { background-color: #f9fafb; }
          .bg-gray-100 { background-color: #f3f4f6; }
          .bg-gray-200 { background-color: #e5e7eb; }
          .bg-gray-600 { background-color: #4b5563; }
          .bg-gray-700 { background-color: #374151; }
          .bg-gray-800 { background-color: #1f2937; }
          .bg-white { background-color: #ffffff; }
          .bg-indigo-50 { background-color: #eef2ff; }
          .bg-indigo-100 { background-color: #e0e7ff; }
          .bg-indigo-200 { background-color: #c7d2fe; }
          .bg-indigo-600 { background-color: #4f46e5; }
          .bg-indigo-700 { background-color: #4338ca; }
          .bg-indigo-800 { background-color: #3730a3; }
          .bg-teal-50 { background-color: #f0fdfa; }
          .bg-teal-100 { background-color: #ccfbf1; }
          .bg-teal-200 { background-color: #99f6e4; }
          .bg-teal-600 { background-color: #0d9488; }
          .bg-teal-700 { background-color: #0f766e; }
          .bg-teal-800 { background-color: #115e59; }
          
          .text-blue-50 { color: #eff6ff; }
          .text-blue-100 { color: #dbeafe; }
          .text-blue-200 { color: #bfdbfe; }
          .text-blue-600 { color: #2563eb; }
          .text-blue-700 { color: #1d4ed8; }
          .text-blue-800 { color: #1e40af; }
          .text-blue-900 { color: #1e3a8a; }
          .text-green-50 { color: #f0fdf4; }
          .text-green-100 { color: #dcfce7; }
          .text-green-200 { color: #bbf7d0; }
          .text-green-600 { color: #16a34a; }
          .text-green-700 { color: #15803d; }
          .text-green-800 { color: #166534; }
          .text-red-50 { color: #fef2f2; }
          .text-red-100 { color: #fee2e2; }
          .text-red-200 { color: #fecaca; }
          .text-red-600 { color: #dc2626; }
          .text-red-700 { color: #b91c1c; }
          .text-red-800 { color: #991b1b; }
          .text-yellow-50 { color: #fefce8; }
          .text-yellow-100 { color: #fef9c3; }
          .text-yellow-200 { color: #fef08a; }
          .text-yellow-600 { color: #ca8a04; }
          .text-yellow-700 { color: #a16207; }
          .text-yellow-800 { color: #854d0e; }
          .text-purple-50 { color: #faf5ff; }
          .text-purple-100 { color: #f3e8ff; }
          .text-purple-200 { color: #e9d5ff; }
          .text-purple-600 { color: #9333ea; }
          .text-purple-700 { color: #7e22ce; }
          .text-purple-800 { color: #6b21a8; }
          .text-orange-50 { color: #fff7ed; }
          .text-orange-100 { color: #ffedd5; }
          .text-orange-200 { color: #fed7aa; }
          .text-orange-600 { color: #ea580c; }
          .text-orange-700 { color: #c2410c; }
          .text-orange-800 { color: #9a3412; }
          .text-pink-50 { color: #fdf2f8; }
          .text-pink-100 { color: #fce7f3; }
          .text-pink-200 { color: #fbcfe8; }
          .text-pink-600 { color: #db2777; }
          .text-pink-700 { color: #be185d; }
          .text-pink-800 { color: #9d174d; }
          .text-gray-50 { color: #f9fafb; }
          .text-gray-100 { color: #f3f4f6; }
          .text-gray-200 { color: #e5e7eb; }
          .text-gray-600 { color: #4b5563; }
          .text-gray-700 { color: #374151; }
          .text-gray-800 { color: #1f2937; }
          .text-white { color: #ffffff; }
          .text-indigo-50 { color: #eef2ff; }
          .text-indigo-100 { color: #e0e7ff; }
          .text-indigo-200 { color: #c7d2fe; }
          .text-indigo-600 { color: #4f46e5; }
          .text-indigo-700 { color: #4338ca; }
          .text-indigo-800 { color: #3730a3; }
          .text-teal-50 { color: #f0fdfa; }
          .text-teal-100 { color: #ccfbf1; }
          .text-teal-200 { color: #99f6e4; }
          .text-teal-600 { color: #0d9488; }
          
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
          .mt-6 { margin-top: 1.5rem; }
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
          .text-base { font-size: 1rem; }
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
          .w-24 { width: 6rem; }
          .w-32 { width: 8rem; }
          .h-5 { height: 1.25rem; }
          .h-6 { height: 1.5rem; }
          .h-8 { height: 2rem; }
          .h-10 { height: 2.5rem; }
          .h-12 { height: 3rem; }
          .h-16 { height: 4rem; }
          .h-20 { height: 5rem; }
          .h-24 { height: 6rem; }
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
          .border-b-2 { border-bottom-width: 2px; }
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
            .md\:w-1\/3 { width: 33.333333%; }
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

      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="bg-blue-50 p-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Search className="w-8 h-8 text-blue-600" />
              <span className="text-xl newq text-blue-800">Cyber Detective School</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="text-blue-700 newq">Home</a>
              <a href="#footprinting" className="text-blue-600 newq">Footprinting</a>
              <a href="#scanning" className="text-blue-600 newq">Scanning</a>
              <a href="#countermeasures" className="text-blue-600 newq">Stay Safe</a>
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
              <a href="#footprinting" className="block p-2 text-blue-600 newq">Footprinting</a>
              <a href="#scanning" className="block p-2 text-blue-600 newq">Scanning</a>
              <a href="#countermeasures" className="block p-2 text-blue-600 newq">Stay Safe</a>
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
                  Welcome to Cyber Detective School!
                </h1>
                <p className="text-lg text-blue-800 newq mb-6">
                  Today we'll learn how detectives gather clues (Footprinting) and scan for hidden doors (Scanning)!
                </p>
                <a href="#footprinting" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 newq text-lg">
                  Start Investigating
                  <ChevronRight className="ml-2 w-5 h-5" />
                </a>
              </div>
              <div className="md:w-1/2">
                <div className="bg-blue-200 p-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 text-center">
                      <Search className="w-12 h-12 mx-auto mb-2 text-blue-600" />
                      <p className="newq text-sm">Footprinting</p>
                      <p className="text-xs text-gray-600">Gather clues</p>
                    </div>
                    <div className="bg-white p-4 text-center">
                      <Radio className="w-12 h-12 mx-auto mb-2 text-green-600" />
                      <p className="newq text-sm">Scanning</p>
                      <p className="text-xs text-gray-600">Find doors</p>
                    </div>
                    <div className="bg-white p-4 text-center">
                      <Map className="w-12 h-12 mx-auto mb-2 text-purple-600" />
                      <p className="newq text-sm">Mapping</p>
                      <p className="text-xs text-gray-600">Draw network</p>
                    </div>
                    <div className="bg-white p-4 text-center">
                      <Shield className="w-12 h-12 mx-auto mb-2 text-orange-600" />
                      <p className="newq text-sm">Protect</p>
                      <p className="text-xs text-gray-600">Stay safe</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footprinting Section */}
          <section id="footprinting" className="py-16 bg-blue-50">
            <h1 className="text-4xl newq text-blue-900 mb-4">What is Footprinting?</h1>
            
            <div className="bg-white p-8 mb-8">
              <p className="text-xl newq text-blue-800 leading-relaxed">
                Imagine you want to learn about someone before meeting them. You might look at their social media, 
                ask friends about them, or search online. That's footprinting - gathering information about a target!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-green-50 p-6">
                <h2 className="text-2xl newq text-green-800 mb-4">🎯 Objectives of Footprinting</h2>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center mr-3">1</span>
                    <span className="text-green-700 newq">Know security posture - How well are they protected?</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center mr-3">2</span>
                    <span className="text-green-700 newq">Reduce focus area - Narrow down where to look</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center mr-3">3</span>
                    <span className="text-green-700 newq">Identify vulnerabilities - Find weak spots</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center mr-3">4</span>
                    <span className="text-green-700 newq">Draw network map - See how everything connects</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6">
                <h2 className="text-2xl newq text-purple-800 mb-4">🔍 What Can We Find?</h2>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white p-2 text-center">Names</div>
                  <div className="bg-white p-2 text-center">Emails</div>
                  <div className="bg-white p-2 text-center">Phone numbers</div>
                  <div className="bg-white p-2 text-center">Addresses</div>
                  <div className="bg-white p-2 text-center">Job details</div>
                  <div className="bg-white p-2 text-center">Technology used</div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl newq text-blue-900 mb-6">8 Ways to Gather Information</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {footprintingMethods.map((method) => (
                <div 
                  key={method.name}
                  className={`bg-${method.color}-50 p-6 cursor-pointer`}
                  onClick={() => setActiveFootprintingMethod(activeFootprintingMethod === method.name ? null : method.name)}
                >
                  <div className="flex items-center mb-3">
                    <span className="text-3xl mr-2">{method.emoji}</span>
                    <h3 className={`text-xl newq text-${method.color}-800 font-bold`}>{method.name}</h3>
                  </div>
                  <p className={`text-${method.color}-700 newq mb-2`}>{method.description}</p>
                  {activeFootprintingMethod === method.name && (
                    <div className={`mt-3 pt-3 border-t-2 border-${method.color}-200`}>
                      <h4 className={`newq font-bold text-${method.color}-900`}>Techniques:</h4>
                      <ul className={`text-${method.color}-700 newq text-sm list-none mt-2`}>
                        {method.techniques && method.techniques.map((tech, i) => (
                          <li key={i} className="flex items-start mb-1">
                            <span className="mr-2">•</span>
                            <span>{tech}</span>
                          </li>
                        ))}
                      </ul>
                      {method.tools && (
                        <>
                          <h4 className={`newq font-bold text-${method.color}-900 mt-2`}>Tools:</h4>
                          <p className={`text-${method.color}-700 newq text-sm`}>{method.tools.join(", ")}</p>
                        </>
                      )}
                      {method.platforms && (
                        <>
                          <h4 className={`newq font-bold text-${method.color}-900 mt-2`}>Platforms:</h4>
                          <p className={`text-${method.color}-700 newq text-sm`}>{method.platforms.join(", ")}</p>
                        </>
                      )}
                      {method.records && (
                        <>
                          <h4 className={`newq font-bold text-${method.color}-900 mt-2`}>Record Types:</h4>
                          <p className={`text-${method.color}-700 newq text-sm`}>{method.records.join(", ")}</p>
                        </>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Google Hacking Deep Dive */}
            <div className="bg-red-50 p-8 mb-12">
              <div className="flex items-center mb-4">
                <Search className="w-8 h-8 text-red-600 mr-2" />
                <h2 className="text-3xl newq text-red-800">Google Hacking - Secret Search Tricks</h2>
              </div>
              
              <button
                className="bg-red-600 text-white px-4 py-2 newq mb-4"
                onClick={() => setShowGoogleOperators(!showGoogleOperators)}
              >
                {showGoogleOperators ? 'Hide Search Operators' : 'Show Secret Google Tricks'}
              </button>

              {showGoogleOperators && (
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {googleOperators.map((op, index) => (
                    <div key={index} className="bg-white p-4">
                      <h3 className="text-lg newq text-red-800 font-mono">{op.operator}</h3>
                      <p className="text-red-700 newq text-sm">{op.description}</p>
                      <p className="text-red-600 newq text-xs mt-1">Example: {op.example}</p>
                    </div>
                  ))}
                </div>
              )}

              <button
                className="bg-red-600 text-white px-4 py-2 newq"
                onClick={() => setShowGHDB(!showGHDB)}
              >
                {showGHDB ? 'Hide GHDB' : 'What is Google Hacking Database (GHDB)?'}
              </button>

              {showGHDB && (
                <div className="mt-4 bg-white p-6">
                  <h3 className="text-xl newq text-red-800 mb-2">Google Hacking Database (GHDB)</h3>
                  <p className="text-red-700 newq">
                    A collection of special Google searches that find security holes! 
                    Created by Johnny Long. Like a treasure map for finding hidden information!
                  </p>
                  <div className="mt-3 bg-red-50 p-3">
                    <p className="text-red-800 newq font-bold">Example Dorks:</p>
                    <p className="text-red-700 newq">"intitle:index.of" - Finds open directories</p>
                    <p className="text-red-700 newq">"filetype:sql password" - Finds password files</p>
                  </div>
                </div>
              )}
            </div>

            {/* DNS Records */}
            <div className="bg-teal-50 p-8 mb-12">
              <h2 className="text-3xl newq text-teal-800 mb-4">DNS Records - The Internet's Phonebook</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {dnsRecords.map((record) => (
                  <div 
                    key={record.type}
                    className="bg-white p-4 cursor-pointer"
                    onClick={() => setActiveDNSRecord(activeDNSRecord === record.type ? null : record.type)}
                  >
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">{record.emoji}</span>
                      <h3 className="text-lg newq text-teal-800 font-bold">{record.type}</h3>
                    </div>
                    <p className="text-teal-700 newq text-sm">{record.name}</p>
                    {activeDNSRecord === record.type && (
                      <div className="mt-2 pt-2 border-t-2 border-teal-200">
                        <p className="text-teal-700 newq text-sm">{record.purpose}</p>
                        <p className="text-teal-600 newq text-xs mt-1">Example: {record.example}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Website Mirroring Tools */}
            <div className="bg-green-50 p-8 mb-12">
              <h2 className="text-2xl newq text-green-800 mb-4">📋 Website Mirroring Tools</h2>
              <p className="text-green-700 newq mb-4">
                Like taking a photo of a whole website to study it offline!
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {websiteMirroringTools.map((tool, index) => (
                  <div key={index} className="bg-white p-2 text-center text-sm newq text-green-700">
                    {tool}
                  </div>
                ))}
              </div>
            </div>

            {/* Email Tracking Tools */}
            <div className="bg-orange-50 p-8 mb-12">
              <h2 className="text-2xl newq text-orange-800 mb-4">📧 Email Tracking Tools</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {emailTrackingTools.map((tool, index) => (
                  <div key={index} className="bg-white p-2 text-center text-sm newq text-orange-700">
                    {tool}
                  </div>
                ))}
              </div>
            </div>

            {/* Website Monitoring Tools */}
            <div className="bg-purple-50 p-8 mb-12">
              <h2 className="text-2xl newq text-purple-800 mb-4">👀 Website Monitoring Tools</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {websiteMonitoringTools.map((tool, index) => (
                  <div key={index} className="bg-white p-2 text-center text-sm newq text-purple-700">
                    {tool}
                  </div>
                ))}
              </div>
            </div>

            {/* Social Engineering */}
            <div className="bg-pink-50 p-8 mb-12">
              <h2 className="text-3xl newq text-pink-800 mb-4">🎭 Social Engineering - Tricking People</h2>
              <p className="text-pink-700 newq text-lg mb-6">
                Sometimes the easiest way to get information is to ask people for it!
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {socialEngineeringTypes.map((type) => (
                  <div 
                    key={type.name}
                    className={`bg-${type.color}-50 p-4 cursor-pointer`}
                    onClick={() => setActiveSocialEngineering(activeSocialEngineering === type.name ? null : type.name)}
                  >
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-2">{type.emoji}</span>
                      <h3 className={`text-lg newq text-${type.color}-800 font-bold`}>{type.name}</h3>
                    </div>
                    <p className={`text-${type.color}-700 newq text-sm`}>{type.description}</p>
                    {activeSocialEngineering === type.name && (
                      <div className={`mt-2 pt-2 border-t-2 border-${type.color}-200`}>
                        <p className={`text-${type.color}-800 newq text-sm font-bold`}>Example:</p>
                        <p className={`text-${type.color}-700 newq text-sm`}>{type.example}</p>
                        <p className={`text-${type.color}-800 newq text-sm font-bold mt-1`}>Prevention:</p>
                        <p className={`text-${type.color}-700 newq text-sm`}>{type.prevention}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Scanning Section */}
          <section id="scanning" className="py-16 bg-green-50">
            <h1 className="text-4xl newq text-green-900 mb-4">Network Scanning - Finding Open Doors</h1>
            
            <div className="bg-white p-8 mb-8">
              <p className="text-xl newq text-green-800 leading-relaxed">
                After gathering information (footprinting), we now scan to find which computers are alive, 
                which doors (ports) are open, and what's running inside!
              </p>
            </div>

            <h2 className="text-3xl newq text-green-800 mb-6">What Do We Want to Find?</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {scanningObjectives.map((obj, index) => (
                <div key={index} className="bg-white p-4 flex items-center">
                  <span className="text-3xl mr-3">{obj.emoji}</span>
                  <div>
                    <h3 className="text-lg newq text-green-800 font-bold">{obj.name}</h3>
                    <p className="text-green-700 newq text-sm">{obj.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl newq text-green-800 mb-6">Types of Scans</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {scanTypes.map((scan) => (
                <div 
                  key={scan.name}
                  className={`bg-${scan.color}-50 p-6 cursor-pointer`}
                  onClick={() => setActiveScanType(activeScanType === scan.name ? null : scan.name)}
                >
                  <div className="flex items-center mb-3">
                    <span className="text-3xl mr-2">{scan.emoji}</span>
                    <h3 className={`text-xl newq text-${scan.color}-800 font-bold`}>{scan.name}</h3>
                  </div>
                  <p className={`text-${scan.color}-700 newq`}>{scan.description}</p>
                  {activeScanType === scan.name && (
                    <div className={`mt-3 pt-3 border-t-2 border-${scan.color}-200`}>
                      <p className={`text-${scan.color}-800 newq font-bold`}>How it works:</p>
                      <p className={`text-${scan.color}-700 newq text-sm mb-2`}>{scan.howItWorks}</p>
                      <p className={`text-${scan.color}-800 newq font-bold`}>Advantage:</p>
                      <p className={`text-${scan.color}-700 newq text-sm`}>{scan.advantage}</p>
                      <p className={`text-${scan.color}-800 newq font-bold mt-1`}>Disadvantage:</p>
                      <p className={`text-${scan.color}-700 newq text-sm`}>{scan.disadvantage}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Common Ports */}
            <h2 className="text-3xl newq text-green-800 mb-6">Common Ports (Doors)</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {commonPorts.map((port) => (
                <div 
                  key={port.port}
                  className="bg-white p-4 cursor-pointer"
                  onClick={() => setSelectedPort(selectedPort === port.port ? null : port.port)}
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-2">{port.emoji}</span>
                    <div>
                      <h3 className="text-lg newq text-green-800">
                        Port {port.port}: {port.service}
                      </h3>
                      {selectedPort === port.port && (
                        <p className="text-green-600 newq text-sm mt-1">{port.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* TCP Flags */}
            <div className="bg-blue-50 p-8 mb-12">
              <h2 className="text-2xl newq text-blue-800 mb-4">🚩 TCP Flags - Special Signals</h2>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                <div className="bg-white p-3 text-center">
                  <span className="text-xl block">SYN</span>
                  <span className="text-xs text-gray-600">Start connection</span>
                </div>
                <div className="bg-white p-3 text-center">
                  <span className="text-xl block">ACK</span>
                  <span className="text-xs text-gray-600">Acknowledge</span>
                </div>
                <div className="bg-white p-3 text-center">
                  <span className="text-xl block">FIN</span>
                  <span className="text-xs text-gray-600">Finish</span>
                </div>
                <div className="bg-white p-3 text-center">
                  <span className="text-xl block">RST</span>
                  <span className="text-xs text-gray-600">Reset</span>
                </div>
                <div className="bg-white p-3 text-center">
                  <span className="text-xl block">PSH</span>
                  <span className="text-xs text-gray-600">Push data</span>
                </div>
                <div className="bg-white p-3 text-center">
                  <span className="text-xl block">URG</span>
                  <span className="text-xs text-gray-600">Urgent</span>
                </div>
              </div>
            </div>

            {/* Traceroute */}
            <div className="bg-orange-50 p-8 mb-12">
              <h2 className="text-2xl newq text-orange-800 mb-4">🛤️ Traceroute - Following the Path</h2>
              
              <button
                className="bg-orange-600 text-white px-4 py-2 newq mb-4"
                onClick={() => setShowTraceroute(!showTraceroute)}
              >
                {showTraceroute ? 'Hide Path' : 'Show How Traceroute Works'}
              </button>

              {showTraceroute && (
                <div className="bg-white p-6">
                  <p className="text-orange-700 newq mb-4">
                    Like following a letter's journey through post offices to reach its destination!
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <div className="bg-orange-200 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-xl">🏠</span>
                      </div>
                      <p className="text-xs">Your Computer</p>
                    </div>
                    <ChevronRight className="text-orange-400" />
                    <div className="text-center">
                      <div className="bg-orange-200 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-xl">🏢</span>
                      </div>
                      <p className="text-xs">Hop 1</p>
                    </div>
                    <ChevronRight className="text-orange-400" />
                    <div className="text-center">
                      <div className="bg-orange-200 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-xl">🏢</span>
                      </div>
                      <p className="text-xs">Hop 2</p>
                    </div>
                    <ChevronRight className="text-orange-400" />
                    <div className="text-center">
                      <div className="bg-orange-200 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-xl">🎯</span>
                      </div>
                      <p className="text-xs">Target</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* IDLE Scan - Advanced */}
            <div className="bg-purple-50 p-8 mb-12">
              <h2 className="text-2xl newq text-purple-800 mb-4">😴 IDLE Scan - The Zombie Scan</h2>
              
              <button
                className="bg-purple-600 text-white px-4 py-2 newq mb-4"
                onClick={() => setShowIdleScan(!showIdleScan)}
              >
                {showIdleScan ? 'Hide Zombie Scan' : 'Show How Zombie Scan Works'}
              </button>

              {showIdleScan && (
                <div className="bg-white p-6">
                  <p className="text-purple-700 newq mb-4">
                    Like using a sleeping computer (zombie) to do your scanning so no one knows it's you!
                  </p>
                  <div className="space-y-4">
                    <div className="bg-purple-50 p-3">
                      <p className="text-purple-800 newq font-bold">Step 1:</p>
                      <p className="text-purple-700 newq">Check zombie's ID number (IPID)</p>
                    </div>
                    <div className="bg-purple-50 p-3">
                      <p className="text-purple-800 newq font-bold">Step 2:</p>
                      <p className="text-purple-700 newq">Send fake packet to target pretending to be zombie</p>
                    </div>
                    <div className="bg-purple-50 p-3">
                      <p className="text-purple-800 newq font-bold">Step 3:</p>
                      <p className="text-purple-700 newq">Check zombie's ID again - if it changed by 2, port is open!</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Countermeasures Section */}
          <section id="countermeasures" className="py-16 bg-red-50">
            <h1 className="text-4xl newq text-red-900 mb-4">How to Stay Safe</h1>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6">
                <h2 className="text-2xl newq text-red-800 mb-4">🛡️ For Organizations</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-red-700 newq">Restrict social media access from work computers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-red-700 newq">Configure devices to prevent data leaks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-red-700 newq">Train employees about footprinting dangers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-red-700 newq">Don't share sensitive info in press releases</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-red-700 newq">Stop search engines from caching your pages</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6">
                <h2 className="text-2xl newq text-red-800 mb-4">👤 For Individuals</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-red-700 newq">Be careful what you share on social media</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-red-700 newq">Use privacy screens in public</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-red-700 newq">Shred documents before throwing away</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-red-700 newq">Don't click suspicious email links</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-red-700 newq">Verify who you're talking to before sharing info</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 p-8">
              <h2 className="text-2xl newq text-yellow-800 mb-4">🌟 Remember This!</h2>
              <p className="text-yellow-700 newq text-lg">
                "The weakest link in security is often the human" - always be careful what you share!
              </p>
            </div>
          </section>

          {/* Quiz Section */}
          <section className="py-16 bg-blue-50">
            <h2 className="text-3xl newq text-blue-900 mb-8 text-center">Test Your Detective Skills!</h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6">
                <p className="text-lg newq text-blue-800 mb-4">❓ What is footprinting?</p>
                <div className="space-y-2">
                  <div className="bg-green-50 p-3">A) Gathering information about a target (Correct! ✅)</div>
                  <div className="bg-red-50 p-3">B) Stealing passwords (Wrong! ❌)</div>
                  <div className="bg-red-50 p-3">C) Deleting files (Wrong! ❌)</div>
                </div>
              </div>
              
              <div className="bg-white p-6">
                <p className="text-lg newq text-blue-800 mb-4">❓ What does a SYN scan do?</p>
                <div className="space-y-2">
                  <div className="bg-red-50 p-3">A) Sends Christmas presents (Wrong! ❌)</div>
                  <div className="bg-green-50 p-3">B) Starts a connection to check if port is open (Correct! ✅)</div>
                  <div className="bg-red-50 p-3">C) Deletes files (Wrong! ❌)</div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="bg-blue-900 text-white py-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg newq mb-2">Cyber Detective School</h3>
                <p className="text-blue-200 newq text-sm">
                  Learning cybersecurity one clue at a time!
                </p>
              </div>
              <div>
                <h3 className="text-lg newq mb-2">Learn More</h3>
                <ul className="space-y-1">
                  <li><a href="#footprinting" className="text-blue-200 newq text-sm">Footprinting</a></li>
                  <li><a href="#scanning" className="text-blue-200 newq text-sm">Network Scanning</a></li>
                  <li><a href="#countermeasures" className="text-blue-200 newq text-sm">Stay Safe</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg newq mb-2">Remember</h3>
                <p className="text-blue-200 newq text-sm">
                  Always get permission before investigating! Ethical hackers are the good guys.
                </p>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-blue-800 text-center">
              <p className="text-blue-300 newq text-sm">
                © 2024 Cyber Detective School - Learning Ethical Hacking is Fun!
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}