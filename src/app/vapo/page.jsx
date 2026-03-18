'use client'
import React, { useState } from 'react';
import Head from 'next/head';
import { 
  Shield, 
  AlertTriangle, 
  Lock, 
  Eye, 
  Globe,
  Search,
  Activity,
  Code,
  Package,
  Unlock,
  ChevronRight,
  Menu,
  X,
  Users,
  Target,
  Zap,
  Wifi,
  Database,
  Key,
  Fingerprint,
  Server,
  Cloud,
  Smartphone,
  House,
  Mail,
  UserCheck,
  UserX,
  Clock,
  BookOpen,
  Award,
  FileText,
  Layers,
  Network,
  Cpu,
  HardDrive,
  MousePointer,
  Link,
  ShieldOff
} from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHackerType, setActiveHackerType] = useState(null);
  const [activeAttackVector, setActiveAttackVector] = useState(null);
  const [activeThreatCategory, setActiveThreatCategory] = useState(null);
  const [activePentestType, setActivePentestType] = useState(null);
  const [activeOwasp, setActiveOwasp] = useState(null);
  const [showPhases, setShowPhases] = useState(false);
  const [showVulnerabilityPhases, setShowVulnerabilityPhases] = useState(false);
  const [showSecurityPolicy, setShowSecurityPolicy] = useState(null);

  const hackerTypes = [
    {
      name: "White Hat Hackers",
      emoji: "👨‍⚕️",
      color: "green",
      description: "The Good Doctors",
      realLifeExample: "Like a friendly doctor who checks if you're healthy!",
      howItWorks: "They have permission to test computers and find problems to fix them.",
      funFact: "Also called ethical hackers - they help keep us safe!",
      icon: "⚕️"
    },
    {
      name: "Black Hat Hackers",
      emoji: "🎩",
      color: "red",
      description: "The Bad Guys",
      realLifeExample: "Like a sneaky thief who tries to steal your toys!",
      howItWorks: "Break into computers without permission to steal or cause trouble.",
      funFact: "Also called crackers - they break security for bad reasons!",
      icon: "🖤"
    },
    {
      name: "Gray Hat Hackers",
      emoji: "🌫️",
      color: "gray",
      description: "In-Between Hackers",
      realLifeExample: "Like someone who finds your lost toy but wants a reward to give it back!",
      howItWorks: "Sometimes break rules, but might help fix problems too.",
      funFact: "They're like a mix of good and bad - it depends on their mood!",
      icon: "⚪"
    }
  ];

  const owaspRisks = [
    {
      id: 1,
      name: "Broken Access Control",
      emoji: "🚪",
      color: "red",
      realLifeExample: "Like a classroom where kids can go into the teacher's desk and see secret stuff!",
      howItWorks: "Bad guys can see or change things they shouldn't be allowed to.",
      prevention: "Give each person their own special key (permission) and check it every time.",
      icon: "🔓"
    },
    {
      id: 2,
      name: "Cryptographic Failures",
      emoji: "🔐",
      color: "purple",
      realLifeExample: "Like writing a secret message in invisible ink that anyone can see under a light!",
      howItWorks: "Secret information isn't properly hidden, so bad guys can read it.",
      prevention: "Use strong secret codes (encryption) to hide information.",
      icon: "🔏"
    },
    {
      id: 3,
      name: "Injection",
      emoji: "💉",
      color: "orange",
      realLifeExample: "Like someone whispering fake commands to a robot and making it do bad things!",
      howItWorks: "Bad guys trick computers by sending special commands in forms or search boxes.",
      prevention: "Check everything users type - like a guard checking IDs!",
      icon: "⚠️"
    },
    {
      id: 4,
      name: "Insecure Design",
      emoji: "🏗️",
      color: "yellow",
      realLifeExample: "Like building a treehouse with a weak branch that anyone can break!",
      howItWorks: "The way the app is built has problems from the start.",
      prevention: "Plan carefully before building, like drawing a safe treehouse first!",
      icon: "📐"
    },
    {
      id: 5,
      name: "Security Misconfiguration",
      emoji: "⚙️",
      color: "blue",
      realLifeExample: "Like leaving all your windows open when you go on vacation!",
      howItWorks: "Settings aren't set up safely, leaving doors open for bad guys.",
      prevention: "Check all settings are safe, like locking all doors and windows.",
      icon: "🔧"
    },
    {
      id: 6,
      name: "Vulnerable Components",
      emoji: "🧩",
      color: "pink",
      realLifeExample: "Like using broken LEGO pieces that can fall apart anytime!",
      howItWorks: "Using old, broken parts in your program that bad guys know how to break.",
      prevention: "Always use new, fixed parts and update them regularly.",
      icon: "🔨"
    },
    {
      id: 7,
      name: "Identification Failures",
      emoji: "🆔",
      color: "indigo",
      realLifeExample: "Like someone using your friend's name tag to get into a party!",
      howItWorks: "Bad guys can pretend to be you because login isn't strong enough.",
      prevention: "Use strong passwords and double checks (like a secret handshake).",
      icon: "👤"
    },
    {
      id: 8,
      name: "Integrity Failures",
      emoji: "📦",
      color: "teal",
      realLifeExample: "Like someone swapping your lunch with a spoiled sandwich!",
      howItWorks: "Bad guys change software or data when you're not looking.",
      prevention: "Check that everything is still good, like checking food before eating.",
      icon: "🔄"
    },
    {
      id: 9,
      name: "Logging Failures",
      emoji: "📝",
      color: "amber",
      realLifeExample: "Like not having a camera in your room so you don't know if someone came in!",
      howItWorks: "Not watching what happens, so bad guys can sneak in unnoticed.",
      prevention: "Keep a diary of everything that happens and watch for problems.",
      icon: "📋"
    },
    {
      id: 10,
      name: "SSRF",
      emoji: "🌐",
      color: "rose",
      realLifeExample: "Like tricking your friend to go into a haunted house for you!",
      howItWorks: "Trick the server into going places it shouldn't.",
      prevention: "Check where servers are allowed to go, like a map of safe places.",
      icon: "🕸️"
    }
  ];

  const attackVectors = [
    {
      name: "Cloud Computing Threats",
      emoji: "☁️",
      color: "sky",
      realLifeExample: "Like storing your toys in a cloud-shaped box that someone might peek into!",
      howItWorks: "Bad guys try to steal information stored in the cloud (online storage).",
      examples: "Data leaks, account theft",
      icon: "☁️"
    },
    {
      name: "Advanced Persistent Threats",
      emoji: "🕵️",
      color: "purple",
      realLifeExample: "Like a spy who hides in your room for months, watching everything!",
      howItWorks: "Bad guys sneak in and stay hidden for a long time, stealing slowly.",
      examples: "Government secrets theft, company data stealing",
      icon: "👁️"
    },
    {
      name: "Viruses and Worms",
      emoji: "🦠",
      color: "green",
      realLifeExample: "Like a cold that spreads to all your friends at school!",
      howItWorks: "Viruses need help to spread (like sharing files), worms spread by themselves.",
      examples: "Computer colds that make computers sick",
      icon: "🪱"
    },
    {
      name: "Insider Attack",
      emoji: "👥",
      color: "orange",
      realLifeExample: "Like your brother taking your cookies when mom's not looking!",
      howItWorks: "Someone you trust (like employees) does bad things.",
      examples: "Stealing secrets, breaking things on purpose",
      icon: "🏠"
    },
    {
      name: "Botnets",
      emoji: "🤖",
      color: "gray",
      realLifeExample: "Like a remote-controlled army of toy robots doing bad things!",
      howItWorks: "Bad guys take over many computers and make them all work together.",
      examples: "Sending spam, attacking websites together",
      icon: "⚙️"
    }
  ];

  const threatCategories = {
    network: [
      "Information gathering - Like spying on someone",
      "Sniffing & Eavesdropping - Like listening through walls",
      "Spoofing - Like wearing a disguise",
      "Session hijacking - Like stealing someone's ticket",
      "Man-in-the-Middle Attack - Like reading someone's mail",
      "DNS & ARP Poisoning - Like changing street signs",
      "Password-based Attacks - Like guessing locker combinations",
      "Denial-of-Services Attacks - Like blocking the door",
      "Compromised Key Attacks - Like copying someone's key",
      "Firewall & IDS Attacks - Like tricking the guard"
    ],
    host: [
      "Malware Attacks - Computer germs",
      "Footprinting - Like following footprints",
      "Password Attacks - Guessing secrets",
      "Denial-of-Services - Blocking the way",
      "Arbitrary code execution - Making computer do bad things",
      "Unauthorized Access - Sneaking in",
      "Privilege Escalation - Getting a better key",
      "Backdoor Attacks - Secret entrances",
      "Physical Security Threats - Stealing the actual computer"
    ],
    application: [
      "Improper Data Validation - Not checking what goes in",
      "Authentication & Authorization Attack - Fake IDs",
      "Security Misconfiguration - Leaving doors open",
      "Information Disclosure - Telling secrets",
      "Broken Session Management - Losing your place in line",
      "Buffer Overflow Issues - Too much water in a cup",
      "Cryptography Attacks - Breaking secret codes",
      "SQL Injection - Tricking the database",
      "Improper Error handling - Telling too much when something breaks"
    ]
  };

  const pentestTypes = [
    {
      name: "Black Box",
      emoji: "⬛",
      color: "gray",
      description: "Like exploring a dark room with no lights!",
      knowledge: "No information given - must find everything yourself",
      difficulty: "Hardest - like finding treasure with no map!",
      icon: "🖤"
    },
    {
      name: "Gray Box",
      emoji: "🌫️",
      color: "blue",
      description: "Like exploring with a small flashlight!",
      knowledge: "Some information given (like IP addresses)",
      difficulty: "Medium - like having a partial map",
      icon: "⚪"
    },
    {
      name: "White Box",
      emoji: "⬜",
      color: "green",
      description: "Like exploring with all lights on and a map!",
      knowledge: "Everything is known - full information given",
      difficulty: "Easier - can focus on finding problems quickly",
      icon: "💡"
    }
  ];

  const securityPolicies = [
    {
      name: "Promiscuous Policy",
      emoji: "🦋",
      color: "pink",
      description: "Everything is allowed - like a playground with no rules!",
      restriction: "No restrictions at all",
      example: "Everyone can do anything anytime"
    },
    {
      name: "Permissive Policy",
      emoji: "👍",
      color: "yellow",
      description: "Only stop really bad things - like 'don't hit others'",
      restriction: "Blocks only dangerous known attacks",
      example: "Most things allowed, but stop big problems"
    },
    {
      name: "Prudent Policy",
      emoji: "🧐",
      color: "blue",
      description: "Very careful - like having many safety rules",
      restriction: "Maximum security, but allows known safe things",
      example: "Everything is logged and checked"
    },
    {
      name: "Paranoid Policy",
      emoji: "🔒",
      color: "purple",
      description: "Nothing is allowed - like a locked room!",
      restriction: "Deny everything, no internet allowed",
      example: "Super strict - safest but can't do much"
    }
  ];

  const dataBreaches = [
    {
      name: "eBay Breach (2014)",
      emoji: "🛒",
      color: "blue",
      victims: "145 million people",
      story: "Bad guys tricked a few eBay workers into giving them passwords, then stole customer names, addresses, and encrypted passwords!",
      lesson: "Even one tricked employee can cause big problems"
    },
    {
      name: "Google Play Hack",
      emoji: "📱",
      color: "green",
      victims: "Many Android users",
      story: "A Turkish hacker found problems in Google's system and tested them twice to make sure they worked!",
      lesson: "Hackers can be very patient and thorough"
    },
    {
      name: "Home Depot Breach",
      emoji: "🏪",
      color: "orange",
      victims: "Store customers",
      story: "Bad guys stole a worker's password, then used a Windows problem to sneak in and put malware on cash registers!",
      lesson: "One weak password can lead to big problems"
    }
  ];

  const hackingPhases = [
    {
      phase: 1,
      name: "Reconnaissance",
      emoji: "🔍",
      color: "blue",
      description: "Like a detective watching someone before following them!",
      active: "Calling them, sending emails",
      passive: "Looking at their social media, public info",
      icon: "👀"
    },
    {
      phase: 2,
      name: "Scanning",
      emoji: "📡",
      color: "green",
      description: "Like checking all doors and windows to see which are open!",
      tools: "Port scanners, network mappers",
      finds: "Open doors (ports), computer type, live machines",
      icon: "🔄"
    },
    {
      phase: 3,
      name: "Gaining Access",
      emoji: "🚪",
      color: "orange",
      description: "Like actually sneaking through an open window!",
      methods: "Using found weaknesses to get in",
      result: "Now inside the computer/system",
      icon: "🔑"
    },
    {
      phase: 4,
      name: "Maintaining Access",
      emoji: "🏠",
      color: "yellow",
      description: "Like building a secret hideout so you can come back anytime!",
      methods: "Leaving backdoors, special programs",
      goal: "Keep control even if被发现",
      icon: "🔄"
    },
    {
      phase: 5,
      name: "Clearing Tracks",
      emoji: "🧹",
      color: "red",
      description: "Like wiping your footprints so no one knows you were there!",
      methods: "Erasing logs, covering evidence",
      goal: "Stay hidden forever",
      icon: "🗑️"
    }
  ];

  const vulnerabilityPhases = [
    {
      phase: 1,
      name: "Acquisition",
      emoji: "📋",
      color: "blue",
      description: "Gather all rules and past problems - like reading old report cards!"
    },
    {
      phase: 2,
      name: "Identification",
      emoji: "🔎",
      color: "green",
      description: "Talk to people who built it to understand how it works - like asking how a toy works!"
    },
    {
      phase: 3,
      name: "Analyzing",
      emoji: "🧮",
      color: "yellow",
      description: "Review all information and check risks - like deciding if a game is safe!"
    },
    {
      phase: 4,
      name: "Evaluation",
      emoji: "📊",
      color: "orange",
      description: "Find problems and decide what needs fixing - like finding broken toys!"
    },
    {
      phase: 5,
      name: "Generating Reports",
      emoji: "📝",
      color: "purple",
      description: "Write down everything found for future - like a doctor's notes!"
    }
  ];

  const essentialTerms = [
    {
      term: "Hack Value",
      emoji: "💎",
      color: "purple",
      meaning: "How much a hacker wants to attack something - like how cool a toy looks!",
      example: "Bank computers have high hack value (more money to steal!)"
    },
    {
      term: "Zero-Day Attack",
      emoji: "0️⃣",
      color: "red",
      meaning: "Attacking before anyone knows there's a problem - like finding a secret passage no one knows about!",
      example: "No time to prepare defense!"
    },
    {
      term: "Vulnerability",
      emoji: "🕳️",
      color: "orange",
      meaning: "A weak spot or hole in security - like a loose window lock!",
      example: "Bad guys look for these to get in"
    },
    {
      term: "Daisy Chaining",
      emoji: "⛓️",
      color: "yellow",
      meaning: "Using one hack to do another hack - like climbing stairs one step at a time!",
      example: "Get one computer, use it to get another"
    },
    {
      term: "Exploit",
      emoji: "💥",
      color: "red",
      meaning: "Actually using a weakness to break in - like using a found key!",
      example: "Making the vulnerability work for you"
    },
    {
      term: "Doxing",
      emoji: "📄",
      color: "blue",
      meaning: "Finding and sharing someone's private information - like putting their address online!",
      example: "Collecting from social media"
    },
    {
      term: "Payload",
      emoji: "📦",
      color: "green",
      meaning: "The bad part of a hack that does the damage - like the explosion in a firework!",
      example: "What actually steals or breaks things"
    },
    {
      term: "Bot",
      emoji: "🤖",
      color: "gray",
      meaning: "A robot program that does tasks automatically - like a toy that follows commands!",
      example: "Can be good (chatbots) or bad (spam bots)"
    }
  ];

  const securityElements = [
    {
      name: "Confidentiality",
      emoji: "🔒",
      color: "blue",
      meaning: "Only people who should see things can see them - like a diary with a lock!",
      example: "Your secrets stay secret"
    },
    {
      name: "Integrity",
      emoji: "✓",
      color: "green",
      meaning: "Nothing gets changed without permission - like no one can change your drawing!",
      example: "Information stays correct"
    },
    {
      name: "Availability",
      emoji: "⏰",
      color: "yellow",
      meaning: "You can use things when you need them - like your favorite toy is always there!",
      example: "Computers work when you need them"
    },
    {
      name: "Authenticity",
      emoji: "🆔",
      color: "purple",
      meaning: "Making sure someone is really who they say - like checking a ID card!",
      example: "No one can pretend to be you"
    },
    {
      name: "Non-Repudiation",
      emoji: "📜",
      color: "orange",
      meaning: "Can't say 'I didn't do that' if you really did - like a camera recording!",
      example: "Proof of who did what"
    }
  ];

  const attackTypes = [
    {
      name: "Buffer Overflow",
      emoji: "💧",
      color: "blue",
      explanation: "Like pouring too much water in a cup until it spills everywhere!",
      result: "Computer crashes or lets bad guys in",
      fix: "Check how much data can go in"
    },
    {
      name: "Bugs in Software",
      emoji: "🐛",
      color: "green",
      explanation: "Mistakes when writing code - like a wrong step in a recipe!",
      result: "Bad guys can use these mistakes",
      fix: "Test code carefully and fix bugs"
    },
    {
      name: "Unpatched System",
      emoji: "🩹",
      color: "orange",
      explanation: "Not fixing known problems - like not putting a bandaid on a cut!",
      result: "Bad guys can use known holes",
      fix: "Always update and patch"
    }
  ];

  return (
    <>
      <Head>
        <title>Ethical Hacking Adventures - Learn Like a 5-Year-Old!</title>
        <meta name="description" content="Learn about ethical hacking and cybersecurity in a fun, simple way!" />
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
          .bg-amber-50 { background-color: #fffbeb; }
          .bg-amber-100 { background-color: #fef3c7; }
          .bg-amber-200 { background-color: #fde68a; }
          .bg-amber-600 { background-color: #d97706; }
          .bg-rose-50 { background-color: #fff1f2; }
          .bg-rose-100 { background-color: #ffe4e6; }
          .bg-rose-200 { background-color: #fecdd3; }
          .bg-rose-600 { background-color: #e11d48; }
          .bg-sky-50 { background-color: #f0f9ff; }
          .bg-sky-100 { background-color: #e0f2fe; }
          .bg-sky-200 { background-color: #bae6fd; }
          .bg-sky-600 { background-color: #0284c7; }
          
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
              <Shield className="w-8 h-8 text-blue-600" />
              <span className="text-xl newq text-blue-800">Ethical Hacking Adventures</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="text-blue-700 newq">Home</a>
              <a href="#basics" className="text-blue-600 newq">Basics</a>
              <a href="#hackers" className="text-blue-600 newq">Hackers</a>
              <a href="#owasp" className="text-blue-600 newq">OWASP Top 10</a>
              <a href="#attacks" className="text-blue-600 newq">Attacks</a>
              <a href="#testing" className="text-blue-600 newq">Testing</a>
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
              <a href="#basics" className="block p-2 text-blue-600 newq">Basics</a>
              <a href="#hackers" className="block p-2 text-blue-600 newq">Hackers</a>
              <a href="#owasp" className="block p-2 text-blue-600 newq">OWASP Top 10</a>
              <a href="#attacks" className="block p-2 text-blue-600 newq">Attacks</a>
              <a href="#testing" className="block p-2 text-blue-600 newq">Testing</a>
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
                  Welcome to Ethical Hacking!
                </h1>
                <p className="text-lg text-blue-800 newq mb-6">
                  Imagine being a superhero who finds problems in computers before the bad guys do! 
                  That's what ethical hackers do - they're the good guys who keep us safe online.
                </p>
                <a href="#basics" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 newq text-lg">
                  Start Learning
                  <ChevronRight className="ml-2 w-5 h-5" />
                </a>
              </div>
              <div className="md:w-1/2">
                <div className="bg-blue-200 p-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 text-center">
                      <Shield className="w-12 h-12 mx-auto mb-2 text-blue-600" />
                      <p className="newq text-sm">Protection</p>
                    </div>
                    <div className="bg-white p-4 text-center">
                      <Search className="w-12 h-12 mx-auto mb-2 text-green-600" />
                      <p className="newq text-sm">Find Problems</p>
                    </div>
                    <div className="bg-white p-4 text-center">
                      <Lock className="w-12 h-12 mx-auto mb-2 text-purple-600" />
                      <p className="newq text-sm">Keep Safe</p>
                    </div>
                    <div className="bg-white p-4 text-center">
                      <Award className="w-12 h-12 mx-auto mb-2 text-yellow-600" />
                      <p className="newq text-sm">Be a Hero</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Information Security Overview */}
          <section id="basics" className="py-16 bg-blue-50">
            <h1 className="text-4xl newq text-blue-900 mb-4">Information Security - Keeping Secrets Safe</h1>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8">
                <div className="flex items-center mb-4">
                  <ShieldOff className="w-8 h-8 text-red-600 mr-3" />
                  <h2 className="text-2xl newq text-red-800">Without Security Rules</h2>
                </div>
                <p className="text-red-700 newq text-lg">
                  Like leaving your house with all doors open! Bad guys can walk in and take anything.
                </p>
                <div className="mt-4 bg-red-50 p-4">
                  <p className="text-red-800 newq">❌ No rules = Big danger!</p>
                  <p className="text-red-700 newq">❌ Secrets can be stolen</p>
                  <p className="text-red-700 newq">❌ Anyone can see private things</p>
                </div>
              </div>
              
              <div className="bg-white p-8">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-green-600 mr-3" />
                  <h2 className="text-2xl newq text-green-800">With Security Rules</h2>
                </div>
                <p className="text-green-700 newq text-lg">
                  Like having locks, alarms, and guards! Only good people can get in.
                </p>
                <div className="mt-4 bg-green-50 p-4">
                  <p className="text-green-800 newq">✅ Clear rules = Safe!</p>
                  <p className="text-green-700 newq">✅ Secrets stay secret</p>
                  <p className="text-green-700 newq">✅ Only authorized people can see</p>
                </div>
              </div>
            </div>

            {/* Data Breaches */}
            <h2 className="text-3xl newq text-blue-900 mb-6">Real Stories: When Bad Guys Got In</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {dataBreaches.map((breach) => (
                <div key={breach.name} className={`bg-${breach.color}-50 p-6`}>
                  <div className="flex items-center mb-3">
                    <span className="text-3xl mr-2">{breach.emoji}</span>
                    <h3 className={`text-xl newq text-${breach.color}-800`}>{breach.name}</h3>
                  </div>
                  <p className={`text-${breach.color}-700 newq mb-2`}>
                    <span className="font-bold">{breach.victims}</span> affected
                  </p>
                  <p className={`text-${breach.color}-700 newq text-sm mb-3`}>
                    {breach.story}
                  </p>
                  <div className={`bg-${breach.color}-100 p-3`}>
                    <p className={`text-${breach.color}-800 newq text-sm`}>
                      💡 {breach.lesson}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Essential Terminology */}
            <h2 className="text-3xl newq text-blue-900 mb-6">Important Words to Know</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {essentialTerms.map((term) => (
                <div key={term.term} className={`bg-${term.color}-50 p-4`}>
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">{term.emoji}</span>
                    <h3 className={`text-lg newq text-${term.color}-800 font-bold`}>{term.term}</h3>
                  </div>
                  <p className={`text-${term.color}-700 newq text-sm mb-2`}>{term.meaning}</p>
                  <p className={`text-${term.color}-600 newq text-sm italic`}>Example: {term.example}</p>
                </div>
              ))}
            </div>

            {/* Elements of Information Security */}
            <h2 className="text-3xl newq text-blue-900 mb-6">The 5 Rules of Keeping Information Safe</h2>
            
            <div className="grid md:grid-cols-5 gap-4 mb-12">
              {securityElements.map((element) => (
                <div key={element.name} className={`bg-${element.color}-50 p-4 text-center`}>
                  <div className={`bg-${element.color}-200 w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center`}>
                    <span className="text-2xl">{element.emoji}</span>
                  </div>
                  <h3 className={`text-lg newq text-${element.color}-800 font-bold mb-2`}>{element.name}</h3>
                  <p className={`text-${element.color}-700 newq text-sm mb-2`}>{element.meaning}</p>
                  <p className={`text-${element.color}-600 newq text-xs`}>{element.example}</p>
                </div>
              ))}
            </div>

            {/* Security Policies */}
            <h2 className="text-3xl newq text-blue-900 mb-6">Different Types of Security Rules</h2>
            
            <div className="grid md:grid-cols-4 gap-4 mb-12">
              {securityPolicies.map((policy) => (
                <div 
                  key={policy.name} 
                  className={`bg-${policy.color}-50 p-4 cursor-pointer`}
                  onClick={() => setShowSecurityPolicy(showSecurityPolicy === policy.name ? null : policy.name)}
                >
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">{policy.emoji}</span>
                    <h3 className={`text-lg newq text-${policy.color}-800`}>{policy.name}</h3>
                  </div>
                  <p className={`text-${policy.color}-700 newq text-sm mb-2`}>{policy.description}</p>
                  {showSecurityPolicy === policy.name && (
                    <div className={`mt-2 pt-2 border-t-2 border-${policy.color}-200`}>
                      <p className={`text-${policy.color}-800 newq text-sm font-bold`}>Restriction: {policy.restriction}</p>
                      <p className={`text-${policy.color}-700 newq text-sm`}>Example: {policy.example}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Physical Security */}
            <div className="bg-gray-50 p-8 mb-12">
              <div className="flex items-center mb-4">
                <House className="w-10 h-10 text-gray-700 mr-3" />
                <h2 className="text-3xl newq text-gray-800">Physical Security - The First Shield</h2>
              </div>
              <p className="text-gray-700 newq text-lg mb-6">
                Before protecting computers online, we need to protect them in real life!
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4">
                  <span className="text-2xl block mb-2">🚪</span>
                  <p className="newq text-gray-800 font-bold">Locked Doors</p>
                  <p className="text-gray-600 text-sm">Keep bad guys out of server rooms</p>
                </div>
                <div className="bg-white p-4">
                  <span className="text-2xl block mb-2">📹</span>
                  <p className="newq text-gray-800 font-bold">Cameras</p>
                  <p className="text-gray-600 text-sm">Watch who comes and goes</p>
                </div>
                <div className="bg-white p-4">
                  <span className="text-2xl block mb-2">🌧️</span>
                  <p className="newq text-gray-800 font-bold">Protection from Weather</p>
                  <p className="text-gray-600 text-sm">Keep computers safe from rain, fire, dust</p>
                </div>
              </div>
            </div>

            {/* Incident Management */}
            <div className="bg-orange-50 p-8">
              <h2 className="text-3xl newq text-orange-800 mb-4">What to Do When Something Bad Happens</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-4">
                  <span className="text-2xl block mb-2">1️⃣</span>
                  <h3 className="text-lg newq text-orange-800 mb-2">Find the Problem</h3>
                  <p className="text-orange-700 text-sm">Like noticing your toy is missing!</p>
                </div>
                <div className="bg-white p-4">
                  <span className="text-2xl block mb-2">2️⃣</span>
                  <h3 className="text-lg newq text-orange-800 mb-2">Stop It From Getting Worse</h3>
                  <p className="text-orange-700 text-sm">Like locking all doors after a break-in</p>
                </div>
                <div className="bg-white p-4">
                  <span className="text-2xl block mb-2">3️⃣</span>
                  <h3 className="text-lg newq text-orange-800 mb-2">Fix Everything</h3>
                  <p className="text-orange-700 text-sm">Like repairing broken locks</p>
                </div>
              </div>
            </div>
          </section>

          {/* Hackers Section */}
          <section id="hackers" className="py-16">
            <h1 className="text-4xl newq text-blue-900 mb-4">Meet the Hackers</h1>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {hackerTypes.map((hacker) => (
                <div 
                  key={hacker.name}
                  className={`bg-${hacker.color}-50 p-6 cursor-pointer`}
                  onClick={() => setActiveHackerType(activeHackerType === hacker.name ? null : hacker.name)}
                >
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-3">{hacker.emoji}</span>
                    <h2 className={`text-2xl newq text-${hacker.color}-800`}>{hacker.name}</h2>
                  </div>
                  <p className={`text-${hacker.color}-700 newq mb-3 text-lg`}>{hacker.description}</p>
                  <p className={`text-${hacker.color}-700 newq`}>{hacker.realLifeExample}</p>
                  {activeHackerType === hacker.name && (
                    <div className={`mt-4 pt-4 border-t-2 border-${hacker.color}-200`}>
                      <h3 className={`newq font-bold text-${hacker.color}-900`}>How they work:</h3>
                      <p className={`text-${hacker.color}-700 newq mb-2`}>{hacker.howItWorks}</p>
                      <h3 className={`newq font-bold text-${hacker.color}-900`}>Fun Fact:</h3>
                      <p className={`text-${hacker.color}-700 newq`}>{hacker.funFact}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Hacking Phases */}
            <h2 className="text-3xl newq text-blue-900 mb-6">The 5 Steps Hackers Take</h2>
            
            <button
              className="bg-blue-600 text-white px-6 py-3 newq text-lg mb-6"
              onClick={() => setShowPhases(!showPhases)}
            >
              {showPhases ? 'Hide Phases' : 'Show Hacking Steps'}
            </button>

            {showPhases && (
              <div className="space-y-4 mb-12">
                {hackingPhases.map((phase) => (
                  <div key={phase.phase} className={`bg-${phase.color}-50 p-6`}>
                    <div className="flex items-start">
                      <div className={`bg-${phase.color}-200 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0`}>
                        <span className="text-2xl">{phase.emoji}</span>
                      </div>
                      <div className="flex-grow">
                        <h3 className={`text-2xl newq text-${phase.color}-800 mb-2`}>
                          Phase {phase.phase}: {phase.name}
                        </h3>
                        <p className={`text-${phase.color}-700 newq mb-3`}>{phase.description}</p>
                        <div className="grid md:grid-cols-2 gap-4 mt-3">
                          {phase.tools && (
                            <div className={`bg-${phase.color}-100 p-3`}>
                              <p className={`text-${phase.color}-800 newq font-bold`}>Tools:</p>
                              <p className={`text-${phase.color}-700 newq`}>{phase.tools}</p>
                            </div>
                          )}
                          {phase.finds && (
                            <div className={`bg-${phase.color}-100 p-3`}>
                              <p className={`text-${phase.color}-800 newq font-bold`}>Finds:</p>
                              <p className={`text-${phase.color}-700 newq`}>{phase.finds}</p>
                            </div>
                          )}
                          {phase.active && (
                            <div className={`bg-${phase.color}-100 p-3`}>
                              <p className={`text-${phase.color}-800 newq font-bold`}>Active:</p>
                              <p className={`text-${phase.color}-700 newq`}>{phase.active}</p>
                            </div>
                          )}
                          {phase.passive && (
                            <div className={`bg-${phase.color}-100 p-3`}>
                              <p className={`text-${phase.color}-800 newq font-bold`}>Passive:</p>
                              <p className={`text-${phase.color}-700 newq`}>{phase.passive}</p>
                            </div>
                          )}
                          {phase.methods && (
                            <div className={`bg-${phase.color}-100 p-3`}>
                              <p className={`text-${phase.color}-800 newq font-bold`}>Methods:</p>
                              <p className={`text-${phase.color}-700 newq`}>{phase.methods}</p>
                            </div>
                          )}
                          {phase.goal && (
                            <div className={`bg-${phase.color}-100 p-3`}>
                              <p className={`text-${phase.color}-800 newq font-bold`}>Goal:</p>
                              <p className={`text-${phase.color}-700 newq`}>{phase.goal}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* OWASP Top 10 Section */}
          <section id="owasp" className="py-16 bg-purple-50">
            <h1 className="text-4xl newq text-purple-900 mb-4">The Top 10 Computer Dangers</h1>
            <p className="text-xl newq text-purple-700 mb-8">
              OWASP made a list of the 10 biggest problems in websites and apps!
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {owaspRisks.map((risk) => (
                <div 
                  key={risk.id}
                  className={`bg-${risk.color}-50 p-6 cursor-pointer`}
                  onClick={() => setActiveOwasp(activeOwasp === risk.id ? null : risk.id)}
                >
                  <div className="flex items-center mb-3">
                    <span className="text-3xl mr-2">{risk.emoji}</span>
                    <h2 className={`text-xl newq text-${risk.color}-800 font-bold`}>
                      {risk.id}. {risk.name}
                    </h2>
                  </div>
                  <p className={`text-${risk.color}-700 newq`}>{risk.realLifeExample}</p>
                  {activeOwasp === risk.id && (
                    <div className={`mt-3 pt-3 border-t-2 border-${risk.color}-200`}>
                      <p className={`text-${risk.color}-800 newq font-bold`}>How it works:</p>
                      <p className={`text-${risk.color}-700 newq mb-2`}>{risk.howItWorks}</p>
                      <p className={`text-${risk.color}-800 newq font-bold`}>How to stop it:</p>
                      <p className={`text-${risk.color}-700 newq`}>{risk.prevention}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-white p-8">
              <h2 className="text-2xl newq text-purple-800 mb-4">The OWASP Memory Game</h2>
              <p className="text-purple-700 newq mb-4">
                Can you remember the top 3 dangers?
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-red-50 p-3 text-center">
                  <span className="text-2xl block mb-2">🚪</span>
                  <p className="newq text-red-800">1. Broken Access Control</p>
                </div>
                <div className="bg-purple-50 p-3 text-center">
                  <span className="text-2xl block mb-2">🔐</span>
                  <p className="newq text-purple-800">2. Cryptographic Failures</p>
                </div>
                <div className="bg-orange-50 p-3 text-center">
                  <span className="text-2xl block mb-2">💉</span>
                  <p className="newq text-orange-800">3. Injection</p>
                </div>
              </div>
            </div>
          </section>

          {/* Attack Vectors Section */}
          <section id="attacks" className="py-16">
            <h1 className="text-4xl newq text-blue-900 mb-4">How Bad Guys Attack</h1>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {attackVectors.map((vector) => (
                <div 
                  key={vector.name}
                  className={`bg-${vector.color}-50 p-6 cursor-pointer`}
                  onClick={() => setActiveAttackVector(activeAttackVector === vector.name ? null : vector.name)}
                >
                  <div className="flex items-center mb-3">
                    <span className="text-3xl mr-2">{vector.emoji}</span>
                    <h2 className={`text-xl newq text-${vector.color}-800`}>{vector.name}</h2>
                  </div>
                  <p className={`text-${vector.color}-700 newq`}>{vector.realLifeExample}</p>
                  {activeAttackVector === vector.name && (
                    <div className={`mt-3 pt-3 border-t-2 border-${vector.color}-200`}>
                      <p className={`text-${vector.color}-800 newq font-bold`}>How it works:</p>
                      <p className={`text-${vector.color}-700 newq mb-2`}>{vector.howItWorks}</p>
                      <p className={`text-${vector.color}-800 newq font-bold`}>Examples:</p>
                      <p className={`text-${vector.color}-700 newq`}>{vector.examples}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Threat Categories */}
            <h2 className="text-3xl newq text-blue-900 mb-6">Different Types of Threats</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-blue-50 p-6">
                <div className="flex items-center mb-4">
                  <Network className="w-8 h-8 text-blue-700 mr-2" />
                  <h3 className="text-xl newq text-blue-800">Network Threats</h3>
                </div>
                <ul className="space-y-2">
                  {threatCategories.network.map((threat, index) => (
                    <li key={index} className="text-blue-700 newq text-sm flex items-start">
                      <span className="mr-2">•</span>
                      <span>{threat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-green-50 p-6">
                <div className="flex items-center mb-4">
                  <Cpu className="w-8 h-8 text-green-700 mr-2" />
                  <h3 className="text-xl newq text-green-800">Host Threats</h3>
                </div>
                <ul className="space-y-2">
                  {threatCategories.host.map((threat, index) => (
                    <li key={index} className="text-green-700 newq text-sm flex items-start">
                      <span className="mr-2">•</span>
                      <span>{threat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-orange-50 p-6">
                <div className="flex items-center mb-4">
                  <Code className="w-8 h-8 text-orange-700 mr-2" />
                  <h3 className="text-xl newq text-orange-800">Application Threats</h3>
                </div>
                <ul className="space-y-2">
                  {threatCategories.application.map((threat, index) => (
                    <li key={index} className="text-orange-700 newq text-sm flex items-start">
                      <span className="mr-2">•</span>
                      <span>{threat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Operating System Attacks */}
            <h2 className="text-3xl newq text-blue-900 mb-6">Attacks on Operating Systems</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {attackTypes.map((attack) => (
                <div key={attack.name} className={`bg-${attack.color}-50 p-6`}>
                  <div className="flex items-center mb-3">
                    <span className="text-3xl mr-2">{attack.emoji}</span>
                    <h3 className={`text-xl newq text-${attack.color}-800`}>{attack.name}</h3>
                  </div>
                  <p className={`text-${attack.color}-700 newq mb-2`}>{attack.explanation}</p>
                  <div className={`bg-${attack.color}-100 p-3 mt-3`}>
                    <p className={`text-${attack.color}-800 newq text-sm font-bold`}>Result: {attack.result}</p>
                    <p className={`text-${attack.color}-700 newq text-sm`}>Fix: {attack.fix}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Penetration Testing Section */}
          <section id="testing" className="py-16 bg-green-50">
            <h1 className="text-4xl newq text-green-900 mb-4">Penetration Testing - Practice Hacking</h1>
            <p className="text-xl newq text-green-700 mb-8">
              Like firefighters practicing putting out fires, ethical hackers practice finding problems!
            </p>

            {/* Types of Pen Testing */}
            <h2 className="text-3xl newq text-green-800 mb-6">3 Ways to Test</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {pentestTypes.map((type) => (
                <div 
                  key={type.name}
                  className={`bg-${type.color}-50 p-6 cursor-pointer`}
                  onClick={() => setActivePentestType(activePentestType === type.name ? null : type.name)}
                >
                  <div className="flex items-center mb-3">
                    <span className="text-3xl mr-2">{type.emoji}</span>
                    <h3 className={`text-xl newq text-${type.color}-800`}>{type.name}</h3>
                  </div>
                  <p className={`text-${type.color}-700 newq mb-2`}>{type.description}</p>
                  {activePentestType === type.name && (
                    <div className={`mt-3 pt-3 border-t-2 border-${type.color}-200`}>
                      <p className={`text-${type.color}-800 newq font-bold`}>Knowledge: {type.knowledge}</p>
                      <p className={`text-${type.color}-700 newq`}>Difficulty: {type.difficulty}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Phases of Pen Testing */}
            <h2 className="text-3xl newq text-green-800 mb-6">The 3 Phases of Testing</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">1️⃣</span>
                </div>
                <h3 className="text-xl newq text-blue-800 mb-2">Pre-Attack Phase</h3>
                <p className="text-blue-700 newq">Plan and prepare - like drawing a map before a treasure hunt!</p>
              </div>
              <div className="bg-white p-6">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">2️⃣</span>
                </div>
                <h3 className="text-xl newq text-orange-800 mb-2">Attack Phase</h3>
                <p className="text-orange-700 newq">Try to find problems - like actually looking for treasure!</p>
              </div>
              <div className="bg-white p-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">3️⃣</span>
                </div>
                <h3 className="text-xl newq text-green-800 mb-2">Post-Attack Phase</h3>
                <p className="text-green-700 newq">Clean up and report - like putting everything back and telling what you found!</p>
              </div>
            </div>

            {/* Testing Methodologies */}
            <h2 className="text-3xl newq text-green-800 mb-6">Popular Testing Methods</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6">
                <h3 className="text-xl newq text-blue-800 mb-3">OWASP</h3>
                <p className="text-gray-700 newq">Best for testing websites and web apps</p>
              </div>
              <div className="bg-white p-6">
                <h3 className="text-xl newq text-blue-800 mb-3">OSSTMM</h3>
                <p className="text-gray-700 newq">Tests everything - networks, people, places!</p>
              </div>
              <div className="bg-white p-6">
                <h3 className="text-xl newq text-blue-800 mb-3">ISAF</h3>
                <p className="text-gray-700 newq">Checks if security rules are working</p>
              </div>
              <div className="bg-white p-6">
                <h3 className="text-xl newq text-blue-800 mb-3">EC-Council LPT</h3>
                <p className="text-gray-700 newq">Advanced testing for experts</p>
              </div>
            </div>
          </section>

          {/* Vulnerability Assessment Section */}
          <section className="py-16 bg-yellow-50">
            <h1 className="text-4xl newq text-yellow-900 mb-4">Vulnerability Assessment - Finding Weak Spots</h1>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6">
                <h2 className="text-2xl newq text-yellow-800 mb-4">Types of Assessment</h2>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-yellow-50 p-2 text-center">Active</div>
                  <div className="bg-yellow-50 p-2 text-center">Passive</div>
                  <div className="bg-yellow-50 p-2 text-center">Host-based</div>
                  <div className="bg-yellow-50 p-2 text-center">Internal</div>
                  <div className="bg-yellow-50 p-2 text-center">External</div>
                  <div className="bg-yellow-50 p-2 text-center">Network</div>
                  <div className="bg-yellow-50 p-2 text-center">Wireless</div>
                  <div className="bg-yellow-50 p-2 text-center">Application</div>
                </div>
              </div>
              
              <div className="bg-white p-6">
                <h2 className="text-2xl newq text-yellow-800 mb-4">The 5 Assessment Phases</h2>
                <button
                  className="bg-yellow-600 text-white px-4 py-2 newq mb-4"
                  onClick={() => setShowVulnerabilityPhases(!showVulnerabilityPhases)}
                >
                  {showVulnerabilityPhases ? 'Hide Phases' : 'Show Phases'}
                </button>
                
                {showVulnerabilityPhases && (
                  <div className="space-y-3">
                    {vulnerabilityPhases.map((phase) => (
                      <div key={phase.phase} className={`bg-${phase.color}-50 p-3`}>
                        <div className="flex items-center">
                          <span className="text-xl mr-2">{phase.emoji}</span>
                          <h3 className={`text-lg newq text-${phase.color}-800 font-bold`}>
                            Phase {phase.phase}: {phase.name}
                          </h3>
                        </div>
                        <p className={`text-${phase.color}-700 newq text-sm mt-1`}>{phase.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="bg-white p-8">
              <h2 className="text-2xl newq text-yellow-800 mb-4">What's in a Vulnerability Report?</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full mr-2"></span>
                    <span className="text-gray-700 newq">What each team member did</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full mr-2"></span>
                    <span className="text-gray-700 newq">Tools and methods used</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full mr-2"></span>
                    <span className="text-gray-700 newq">What problems were found</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full mr-2"></span>
                    <span className="text-gray-700 newq">Recommendations to fix</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full mr-2"></span>
                    <span className="text-gray-700 newq">Information collected</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full mr-2"></span>
                    <span className="text-gray-700 newq">Stored for future checks</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Fun Quiz Section */}
          <section className="py-16 bg-blue-50">
            <h2 className="text-3xl newq text-blue-900 mb-8 text-center">Test Your Knowledge!</h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6">
                <p className="text-lg newq text-blue-800 mb-4">❓ What do white hat hackers do?</p>
                <div className="space-y-2">
                  <div className="bg-green-50 p-3">A) Help find and fix problems (Correct! ✅)</div>
                  <div className="bg-red-50 p-3">B) Steal information (Wrong! ❌)</div>
                  <div className="bg-red-50 p-3">C) Break computers (Wrong! ❌)</div>
                </div>
              </div>
              
              <div className="bg-white p-6">
                <p className="text-lg newq text-blue-800 mb-4">❓ What is OWASP Top 10?</p>
                <div className="space-y-2">
                  <div className="bg-red-50 p-3">A) Top 10 video games (Wrong! ❌)</div>
                  <div className="bg-green-50 p-3">B) Top 10 web dangers (Correct! ✅)</div>
                  <div className="bg-red-50 p-3">C) Top 10 movies (Wrong! ❌)</div>
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
                <h3 className="text-lg newq mb-2">Ethical Hacking Adventures</h3>
                <p className="text-blue-200 newq text-sm">
                  Making cybersecurity fun and easy for everyone!
                </p>
              </div>
              <div>
                <h3 className="text-lg newq mb-2">Learn More</h3>
                <ul className="space-y-1">
                  <li><a href="#basics" className="text-blue-200 newq text-sm">Security Basics</a></li>
                  <li><a href="#hackers" className="text-blue-200 newq text-sm">Types of Hackers</a></li>
                  <li><a href="#owasp" className="text-blue-200 newq text-sm">OWASP Top 10</a></li>
                  <li><a href="#testing" className="text-blue-200 newq text-sm">Penetration Testing</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg newq mb-2">Remember</h3>
                <p className="text-blue-200 newq text-sm">
                  Stay safe online and always ask an adult before downloading anything!
                </p>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-blue-800 text-center">
              <p className="text-blue-300 newq text-sm">
                © 2024 Ethical Hacking Adventures - Learning Cybersecurity is Fun!
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}