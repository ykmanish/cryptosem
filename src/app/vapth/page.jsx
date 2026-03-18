'use client'
import React, { useState } from 'react';
import Head from 'next/head';
import { 
  Search, 
  Lock, 
  Unlock, 
  Key, 
  Users, 
  Shield,
  ChevronRight,
  Menu,
  X,
  Database,
  Server,
  Network,
  Fingerprint,
  Eye,
  EyeOff,
  Terminal,
  Code,
  HardDrive,
  Cpu,
  Wifi,
  Mail,
  Globe,
  Map,
  AlertTriangle,
  Clock,
  UserCheck,
  UserX,
  FileText,
  Folder,
  Image,
  Video,
  Music,
  Printer,
  Router,
  Switch,
  Laptop,
  Smartphone,
  Tablet,
  Watch,
  Camera,
  Microphone,
  Radio,
  Satellite,
  Activity,
  Zap,
  AlertOctagon,
  BookOpen,
  Award,
  Trash2,
  Eraser,
  Settings,
  Sliders,
  ToggleLeft,
  ToggleRight,
  Download,
  Upload,
  Share2,
  Link,
  Package,
  Layers,
  Box,
  Archive,
  Copy,
  Scissors,
  Clipboard,
  PenTool,
  Pen,
  Pencil,
  Brush,
  Paintbrush,
  Palette,
  Droplet,
  Feather,
  Wind,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Sun,
  Moon,
  Star,
  Heart,
  Flag,
  MapPin
} from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeEnumerationMethod, setActiveEnumerationMethod] = useState(null);
  const [activePasswordAttack, setActivePasswordAttack] = useState(null);
  const [activeRootkitType, setActiveRootkitType] = useState(null);
  const [activeSteganographyType, setActiveSteganographyType] = useState(null);
  const [activeKeyloggerType, setActiveKeyloggerType] = useState(null);
  const [activeSpywareType, setActiveSpywareType] = useState(null);
  const [showPrivilegeEscalation, setShowPrivilegeEscalation] = useState(false);
  const [showNTFS, setShowNTFS] = useState(false);
  const [showSAM, setShowSAM] = useState(false);
  const [showKerberos, setShowKerberos] = useState(false);
  const [selectedPort, setSelectedPort] = useState(null);
  const [showPasswordTools, setShowPasswordTools] = useState(false);
  const [showRootkitTools, setShowRootkitTools] = useState(false);
  const [showStegoTools, setShowStegoTools] = useState(false);

  const enumerationMethods = [
    {
      name: "Email ID Enumeration",
      emoji: "📧",
      color: "blue",
      description: "Finding information from email addresses!",
      howItWorks: "Email addresses contain username and domain name. Attackers can extract these to learn more.",
      techniques: [
        "Extract username from email (name@company.com → 'name')",
        "Identify domain name to target",
        "Search for email on social media",
        "Find other accounts using same email"
      ],
      ports: [],
      icon: "✉️"
    },
    {
      name: "Default Password Enumeration",
      emoji: "🔑",
      color: "red",
      description: "Trying manufacturer's default passwords!",
      howItWorks: "Many devices come with default passwords like 'admin/admin' that people forget to change.",
      techniques: [
        "Check manufacturer websites for default passwords",
        "Use online databases like cirt.net",
        "Try common defaults: admin/admin, admin/password",
        "Search for default credentials for specific devices"
      ],
      websites: ["https://cirt.net", "https://default-password.info"],
      icon: "⚠️"
    },
    {
      name: "DNS Zone Transfer",
      emoji: "🌐",
      color: "green",
      description: "Stealing the internet phonebook!",
      howItWorks: "DNS zone transfer is how DNS servers share info. If misconfigured, anyone can request all records!",
      techniques: [
        "Request entire DNS zone",
        "Get all hostnames and IP addresses",
        "Find internal servers and systems",
        "Discover network structure"
      ],
      ports: ["TCP 53 (Zone Transfer)", "UDP 53 (DNS Queries)"],
      icon: "📡"
    },
    {
      name: "NetBIOS Enumeration",
      emoji: "🖥️",
      color: "purple",
      description: "Finding Windows computers on the network!",
      howItWorks: "NetBIOS helps computers find each other. Attackers can ask 'Who's here?' and get lists!",
      techniques: [
        "List all machines in domain",
        "Find file shares",
        "Discover printer sharing",
        "Get usernames and groups",
        "Find password policies"
      ],
      ports: ["UDP 137 (Name)", "UDP 138 (Datagram)", "TCP 139 (Session)"],
      names: ["Unique", "Group", "Domain Name", "Internet Group", "Multihomed"],
      icon: "🔌"
    },
    {
      name: "SNMP Enumeration",
      emoji: "📊",
      color: "orange",
      description: "Reading network device information!",
      howItWorks: "SNMP is used to manage network devices. Default community strings let anyone read info!",
      techniques: [
        "Find devices using default 'public' community",
        "Get system information",
        "Discover user accounts",
        "Find network shares",
        "Get device configurations"
      ],
      ports: ["UDP 161 (SNMP)", "UDP 162 (SNMP Trap)"],
      versions: [
        { v: "v1", desc: "No encryption, plain text community" },
        { v: "v2c", desc: "No encryption, better features" },
        { v: "v3", desc: "Encryption and hashing supported" }
      ],
      icon: "📈"
    },
    {
      name: "LDAP Enumeration",
      emoji: "📋",
      color: "teal",
      description: "Reading the company directory!",
      howItWorks: "LDAP is like a phonebook for organizations. Attackers can ask for all users and details!",
      techniques: [
        "Get all usernames",
        "Find contact information",
        "Discover department structure",
        "Get system information"
      ],
      ports: ["TCP/UDP 389 (LDAP)", "TCP/UDP 3268 (Global Catalog)"],
      tools: ["JXplorer", "LDAP Admin", "Active Directory Explorer"],
      icon: "📇"
    },
    {
      name: "NTP Enumeration",
      emoji: "⏰",
      color: "yellow",
      description: "Finding time servers to confuse investigators!",
      howItWorks: "NTP synchronizes clocks. Attackers can change time to hide when attacks happened!",
      techniques: [
        "Find NTP servers",
        "Get list of connected clients",
        "Change system time to mislead forensics",
        "Discover network structure"
      ],
      ports: ["UDP 123"],
      term: "Stratum - distance from accurate time source",
      icon: "🕐"
    },
    {
      name: "SMTP Enumeration",
      emoji: "📨",
      color: "pink",
      description: "Finding valid email addresses from mail servers!",
      howItWorks: "Mail servers can be asked 'Does this email exist?' and they'll tell you!",
      techniques: [
        "Use VRFY command to verify users",
        "Use EXPN to expand mailing lists",
        "Build list of valid email addresses",
        "Find email server information"
      ],
      ports: ["TCP 25 (SMTP)"],
      icon: "📬"
    },
    {
      name: "RPC Enumeration",
      emoji: "🔌",
      color: "indigo",
      description: "Finding services running on Windows!",
      howItWorks: "RPC lets programs talk to each other. Attackers can ask what's available!",
      techniques: [
        "Find RPC endpoints",
        "Discover running services",
        "Get system information",
        "Find vulnerabilities"
      ],
      ports: ["TCP/UDP 135", "TCP 139", "TCP 445"],
      icon: "🔄"
    }
  ];

  const passwordAttacks = [
    {
      name: "Non-Electronic Attacks",
      emoji: "👤",
      color: "gray",
      description: "No computers needed - just watching and listening!",
      techniques: [
        "Shoulder Surfing - Look over shoulder while typing",
        "Dumpster Diving - Search trash for passwords",
        "Social Engineering - Trick people into telling you",
        "Eavesdropping - Listen to conversations"
      ],
      example: "Stand behind someone at ATM to see PIN",
      icon: "🕵️"
    },
    {
      name: "Active Online Attacks",
      emoji: "⚡",
      color: "red",
      description: "Directly trying to break in!",
      techniques: [
        "Dictionary Attack - Try common words",
        "Brute Force Attack - Try EVERY possible combination",
        "Hash Injection - Use stolen password hashes",
        "Password Guessing - Try likely passwords"
      ],
      example: "Trying 'password123', 'admin', '123456'",
      icon: "🔨"
    },
    {
      name: "Passive Online Attacks",
      emoji: "👂",
      color: "blue",
      description: "Listening without being noticed!",
      techniques: [
        "Wire Sniffing - Capture network traffic",
        "Man-in-the-Middle - Intercept communication",
        "Replay Attack - Record and reuse login"
      ],
      example: "Listening to wifi to capture passwords",
      icon: "📡"
    },
    {
      name: "Default Password Attack",
      emoji: "🏭",
      color: "orange",
      description: "Trying manufacturer's default passwords!",
      techniques: [
        "Check manufacturer websites",
        "Use default password databases",
        "Try common defaults: admin/admin",
        "Search for device manuals"
      ],
      example: "Router default: admin/password",
      icon: "⚙️"
    },
    {
      name: "Offline Attacks",
      emoji: "💾",
      color: "purple",
      description: "Steal password file and crack at home!",
      techniques: [
        "Rainbow Tables - Pre-computed password hashes",
        "Dictionary Attack on stolen file",
        "Brute Force on stolen hash",
        "Rule-based attacks"
      ],
      example: "Steal SAM file and crack passwords slowly",
      icon: "🏠"
    },
    {
      name: "Password Guessing",
      emoji: "🤔",
      color: "yellow",
      description: "Using personal information to guess!",
      techniques: [
        "Use pet names, birthdays",
        "Try family member names",
        "Use favorite sports teams",
        "Try common patterns"
      ],
      example: "If someone likes dogs, try 'Rover123'",
      icon: "💭"
    }
  ];

  const snmpVersions = [
    { version: "v1", security: "No encryption", auth: "Plain text community string", color: "red" },
    { version: "v2c", security: "No encryption", auth: "Plain text, but better features", color: "orange" },
    { version: "v3", security: "Encryption (DES)", auth: "MD5 or SHA hashing", color: "green" }
  ];

  const snmpCommunityStrings = [
    { name: "Read-Only", desc: "Can only view information", color: "blue" },
    { name: "Read-Write", desc: "Can view AND change settings", color: "orange" },
    { name: "Trap", desc: "Sends alerts to management", color: "purple" }
  ];

  const netbiosNameTypes = [
    { hex: "00", type: "Workstation Service", desc: "Computer name" },
    { hex: "01", type: "Messenger Service", desc: "Computer name" },
    { hex: "03", type: "Messenger Service", desc: "User name" },
    { hex: "06", type: "RAS Server", desc: "Remote access" },
    { hex: "1F", type: "NetDDE Service", desc: "Network DDE" },
    { hex: "20", type: "File Server", desc: "File sharing" },
    { hex: "21", type: "RAS Client", desc: "Remote access client" },
    { hex: "22", type: "Exchange Interchange", desc: "MS Mail Connector" },
    { hex: "23", type: "Exchange Store", desc: "MS Exchange" },
    { hex: "24", type: "Exchange Directory", desc: "MS Exchange" },
    { hex: "30", type: "Modem Sharing Server", desc: "Modem sharing" },
    { hex: "31", type: "Modem Sharing Client", desc: "Modem sharing" },
    { hex: "43", type: "SMS Clients Remote Control", desc: "SMS" },
    { hex: "44", type: "SMS Admin Remote Control", desc: "SMS" },
    { hex: "45", type: "SMS Clients Remote Chat", desc: "SMS" },
    { hex: "46", type: "SMS Clients Remote Transfer", desc: "SMS" },
    { hex: "4C", type: "DEC Pathworks", desc: "TCPIP on NT" },
    { hex: "52", type: "DEC Pathworks", desc: "TCPIP on NT" },
    { hex: "67", type: "Exchange MTA", desc: "MS Exchange" },
    { hex: "68", type: "Exchange IMC", desc: "MS Exchange" },
    { hex: "69", type: "Network Monitor Agent", desc: "Monitoring" },
    { hex: "70", type: "Network Monitor App", desc: "Monitoring" },
    { hex: "73", type: "Messenger Service", desc: "Service" },
    { hex: "80", type: "Domain Name", desc: "Domain" },
    { hex: "81", type: "Domain Master Browser", desc: "Master browser" },
    { hex: "82", type: "Domain Controllers", desc: "DC" },
    { hex: "83", type: "Master Browser", desc: "Browser" },
    { hex: "84", type: "Browser Elections", desc: "Browser" },
    { hex: "85", type: "IIS", desc: "Web server" },
    { hex: "86", type: "Lotus Notes", desc: "Service" }
  ];

  const ldapTools = [
    { name: "JXplorer", url: "www.jxplorer.org" },
    { name: "LDAP Admin Tool", url: "www.ldapsoft.com" },
    { name: "LDAP Account Manager", url: "www.ldap-account-manager.org" },
    { name: "Active Directory Explorer", url: "technet.microsoft.com" },
    { name: "LDAP Administration Tool", url: "sourceforge.net" },
    { name: "LDAP Search", url: "securityexploded.com" }
  ];

  const enumerationTools = [
    { name: "SuperScan", desc: "Windows enumeration, port scanning", features: ["MAC address", "OS info", "Users", "Shares"] },
    { name: "Hyena", desc: "GUI-based NetBIOS enumeration", features: ["Shares", "User login", "System info"] },
    { name: "Winfingerprint", desc: "NetBIOS enumeration", features: ["OS", "Users", "Groups", "Shares", "Sessions"] },
    { name: "NetBIOS Enumerator", desc: "GUI-based tool", features: ["Port scanning", "OS detection", "Traceroute", "DNS"] },
    { name: "Nsauditor", desc: "Network monitoring", features: ["Services", "Connections", "Remote analysis"] },
    { name: "OpUtils", desc: "SNMP enumeration", features: ["Network devices", "SNMP info"] },
    { name: "SolarWinds Engineer's Toolset", desc: "Network management", features: ["SNMP", "Network discovery"] }
  ];

  const passwordCrackingTools = [
    "pwdump7", "fgdump", "L0phtCrack", "Ophcrack", 
    "RainbowCrack", "Cain and Abel", "John the Ripper",
    "Hashcat", "Hydra", "Medusa", "Ncrack"
  ];

  const privilegeEscalationTypes = [
    {
      name: "Horizontal Privilege Escalation",
      emoji: "↔️",
      color: "blue",
      description: "Taking over another user with SAME level of access!",
      example: "User A (can only run apps) takes over User B (also can only run apps)",
      howItWorks: "Find vulnerability to access another user's account at same privilege level",
      icon: "📊"
    },
    {
      name: "Vertical Privilege Escalation",
      emoji: "⬆️",
      color: "red",
      description: "Getting HIGHER level access (like becoming admin)!",
      example: "Regular user becomes Administrator",
      howItWorks: "Exploit system vulnerabilities to gain more privileges than you should have",
      icon: "📈"
    }
  ];

  const applicationExecutionTools = [
    {
      name: "RemoteExec",
      desc: "Remotely install and run programs",
      features: ["Deploy packages", "Remote execution", "Schedule tasks", "Registry changes", "Power control"]
    },
    {
      name: "PDQ Deploy",
      desc: "Silently install applications remotely",
      features: ["Install .exe and .msi", "Uninstall software", "Copy files", "Execute commands"]
    }
  ];

  const keyloggerTypes = {
    software: [
      { name: "Application Keyloggers", desc: "Hooks into specific applications" },
      { name: "Kernel Keyloggers", desc: "Works deep in operating system" },
      { name: "Hypervisor-based", desc: "Runs under the OS in virtual machine" },
      { name: "Form Grabbing", desc: "Captures form data before encryption" }
    ],
    hardware: [
      { name: "PC/BIOS Embedded", desc: "Built into computer's firmware" },
      { name: "Keyboard Hardware", desc: "Physical device between keyboard and computer" },
      { name: "USB Key Grabber", desc: "USB device that captures keystrokes" }
    ]
  };

  const antikeyloggerTools = [
    { name: "Zemana Anti-Keylogger", url: "https://www.zemana.com" },
    { name: "Spyshelter", url: "https://www.spyshelter.com" },
    { name: "Anti-Keylogger", url: "http://anti-keyloggers.com" }
  ];

  const spywareTypes = [
    { name: "Adware", desc: "Shows unwanted ads", emoji: "📢" },
    { name: "System Monitors", desc: "Watches computer activity", emoji: "👀" },
    { name: "Tracking Cookies", desc: "Tracks browsing habits", emoji: "🍪" },
    { name: "Trojans", desc: "Disguised as legitimate software", emoji: "🐴" }
  ];

  const spywareFeatures = [
    "Keylogging - Record what you type",
    "Website tracking - See where you go",
    "Conversation recording",
    "Block applications and services",
    "Remote log delivery",
    "Email tracking",
    "USB activity monitoring",
    "Voice recording",
    "Video recording",
    "GPS location tracking"
  ];

  const rootkitTypes = [
    {
      name: "Application Level",
      emoji: "📱",
      color: "blue",
      description: "Hides in regular programs",
      howItWorks: "Modifies application files to hide malicious code",
      detection: "Check file integrity, digital signatures"
    },
    {
      name: "Kernel Level",
      emoji: "⚙️",
      color: "red",
      description: "Hides in the core of operating system",
      howItWorks: "Replaces parts of OS kernel with malicious code",
      detection: "Memory dumps, behavioral analysis"
    },
    {
      name: "Hardware/Firmware",
      emoji: "💾",
      color: "purple",
      description: "Hides in computer hardware",
      howItWorks: "Built into BIOS, hard drive, network card",
      detection: "Very hard to detect - needs hardware inspection"
    },
    {
      name: "Hypervisor Level",
      emoji: "🖥️",
      color: "green",
      description: "Runs underneath the operating system",
      howItWorks: "Turns OS into virtual machine, rootkit is the 'real' OS",
      detection: "Check for virtualization artifacts"
    },
    {
      name: "Boot Loader Level (Bootkit)",
      emoji: "🔓",
      color: "orange",
      description: "Infects before OS even starts",
      howItWorks: "Replaces boot loader, activates before OS",
      detection: "Check MBR, boot sector, use secure boot"
    }
  ];

  const rootkitTools = [
    "Avatar", "Necurs", "Azazel", "ZeroAccess"
  ];

  const rootkitDetectionTools = {
    windows: ["Microsoft Sysinternals RootkitRevealer", "Avast Anti-Rootkit", "Sophos Anti-Rootkit"],
    linux: ["Zeppoo", "chrootkit", "Rkhunter"]
  };

  const steganographyTypes = [
    {
      name: "Whitespace Steganography",
      emoji: "⬜",
      color: "gray",
      description: "Hiding messages in extra spaces!",
      howItWorks: "Add extra spaces between words to encode secret message",
      example: "Hello   World   This   Is   Secret",
      icon: "🔄"
    },
    {
      name: "Image Steganography",
      emoji: "🖼️",
      color: "green",
      description: "Hiding messages in pictures!",
      howItWorks: "Change tiny bits of color that humans can't see",
      example: "Hide text in PNG, JPG, BMP files",
      tools: ["QuickStego", "OpenStego", "Steghide"],
      icon: "🎨"
    },
    {
      name: "Document Steganography",
      emoji: "📄",
      color: "blue",
      description: "Hiding in Word, PDF files",
      howItWorks: "Hide data in document metadata or formatting",
      example: "Hidden messages in document properties",
      icon: "📝"
    },
    {
      name: "Video Steganography",
      emoji: "🎬",
      color: "red",
      description: "Hiding in video files",
      howItWorks: "Spread secret data across video frames",
      example: "Messages hidden in each frame of video",
      icon: "📹"
    },
    {
      name: "Audio Steganography",
      emoji: "🎵",
      color: "purple",
      description: "Hiding in sound files",
      howItWorks: "Add faint sounds or change frequencies",
      example: "Secret message in MP3 files",
      icon: "🔊"
    },
    {
      name: "Folder Steganography",
      emoji: "📁",
      color: "orange",
      description: "Hiding in folder structures",
      howItWorks: "Hide files in Alternate Data Streams (ADS)",
      example: "Hidden files attached to normal files",
      icon: "🗂️"
    }
  ];

  const steganographyClassification = {
    technical: ["Invisible ink", "Microdots", "Hidden writing"],
    linguistic: ["Ciphers", "Codes", "Hidden text"]
  };

  const coveringTracksTechniques = [
    {
      name: "Disable Auditing",
      emoji: "🔇",
      color: "red",
      description: "Turn off the security cameras!",
      howItWorks: "Disable logging so no record of attack is kept",
      impact: "System can't track what happened"
    },
    {
      name: "Clear Logs",
      emoji: "🧹",
      color: "orange",
      description: "Erase all evidence!",
      howItWorks: "Delete event logs, error messages, access records",
      methods: ["Command line tools", "Control panel", "Event Viewer"],
      impact: "No trace of attacker's activities"
    },
    {
      name: "Modify Logs",
      emoji: "✏️",
      color: "yellow",
      description: "Change the records to hide tracks",
      howItWorks: "Edit log entries to remove suspicious events",
      impact: "Harder to detect than deleting"
    },
    {
      name: "Use Rootkits",
      emoji: "🎭",
      color: "purple",
      description: "Hide everything automatically",
      howItWorks: "Rootkit hides files, processes, and connections",
      impact: "Most sophisticated hiding method"
    }
  ];

  return (
    <>
      <Head>
        <title>Enumeration & System Hacking - Cyber Security Adventure</title>
        <meta name="description" content="Learn how hackers gather information and break into systems!" />
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
              <span className="text-xl newq text-blue-800">System Hacking Adventures</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="text-blue-700 newq">Home</a>
              <a href="#enumeration" className="text-blue-600 newq">Enumeration</a>
              <a href="#password" className="text-blue-600 newq">Password Cracking</a>
              <a href="#privilege" className="text-blue-600 newq">Privilege</a>
              <a href="#hiding" className="text-blue-600 newq">Hiding</a>
              <a href="#tracks" className="text-blue-600 newq">Cover Tracks</a>
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
              <a href="#enumeration" className="block p-2 text-blue-600 newq">Enumeration</a>
              <a href="#password" className="block p-2 text-blue-600 newq">Password Cracking</a>
              <a href="#privilege" className="block p-2 text-blue-600 newq">Privilege</a>
              <a href="#hiding" className="block p-2 text-blue-600 newq">Hiding</a>
              <a href="#tracks" className="block p-2 text-blue-600 newq">Cover Tracks</a>
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
                  Welcome to System Hacking!
                </h1>
                <p className="text-lg text-blue-800 newq mb-6">
                  Today we'll learn how hackers dig deeper - finding more information (Enumeration) 
                  and breaking into systems (System Hacking)!
                </p>
                <a href="#enumeration" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 newq text-lg">
                  Start Learning
                  <ChevronRight className="ml-2 w-5 h-5" />
                </a>
              </div>
              <div className="md:w-1/2">
                <div className="bg-blue-200 p-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 text-center">
                      <Search className="w-12 h-12 mx-auto mb-2 text-blue-600" />
                      <p className="newq text-sm">Enumeration</p>
                      <p className="text-xs text-gray-600">Find more details</p>
                    </div>
                    <div className="bg-white p-4 text-center">
                      <Key className="w-12 h-12 mx-auto mb-2 text-green-600" />
                      <p className="newq text-sm">Crack Passwords</p>
                      <p className="text-xs text-gray-600">Break the locks</p>
                    </div>
                    <div className="bg-white p-4 text-center">
                      <Unlock className="w-12 h-12 mx-auto mb-2 text-orange-600" />
                      <p className="newq text-sm">Get Privileges</p>
                      <p className="text-xs text-gray-600">Become admin</p>
                    </div>
                    <div className="bg-white p-4 text-center">
                      <EyeOff className="w-12 h-12 mx-auto mb-2 text-purple-600" />
                      <p className="newq text-sm">Hide Tracks</p>
                      <p className="text-xs text-gray-600">Don't get caught</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Enumeration Section */}
          <section id="enumeration" className="py-16 bg-blue-50">
            <h1 className="text-4xl newq text-blue-900 mb-4">Enumeration - Digging Deeper</h1>
            
            <div className="bg-white p-8 mb-8">
              <p className="text-xl newq text-blue-800 leading-relaxed">
                After footprinting, hackers start actually TALKING to the system to ask questions. 
                Like knocking on doors and asking "Who lives here?" and "What's inside?"
              </p>
            </div>

            <h2 className="text-2xl newq text-blue-800 mb-4">What Can We Find?</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              <div className="bg-white p-3 text-center">Routing Info</div>
              <div className="bg-white p-3 text-center">SNMP Info</div>
              <div className="bg-white p-3 text-center">DNS Info</div>
              <div className="bg-white p-3 text-center">Machine Names</div>
              <div className="bg-white p-3 text-center">Usernames</div>
              <div className="bg-white p-3 text-center">Groups</div>
              <div className="bg-white p-3 text-center">Applications</div>
              <div className="bg-white p-3 text-center">Network Shares</div>
            </div>

            <h2 className="text-3xl newq text-blue-900 mb-6">Enumeration Methods</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {enumerationMethods.map((method) => (
                <div 
                  key={method.name}
                  className={`bg-${method.color}-50 p-6 cursor-pointer`}
                  onClick={() => setActiveEnumerationMethod(activeEnumerationMethod === method.name ? null : method.name)}
                >
                  <div className="flex items-center mb-3">
                    <span className="text-3xl mr-2">{method.emoji}</span>
                    <h3 className={`text-xl newq text-${method.color}-800 font-bold`}>{method.name}</h3>
                  </div>
                  <p className={`text-${method.color}-700 newq mb-2`}>{method.description}</p>
                  {activeEnumerationMethod === method.name && (
                    <div className={`mt-3 pt-3 border-t-2 border-${method.color}-200`}>
                      <p className={`text-${method.color}-800 newq font-bold`}>How it works:</p>
                      <p className={`text-${method.color}-700 newq text-sm mb-2`}>{method.howItWorks}</p>
                      
                      {method.techniques && (
                        <>
                          <p className={`text-${method.color}-800 newq font-bold mt-2`}>Techniques:</p>
                          <ul className={`text-${method.color}-700 newq text-sm list-none`}>
                            {method.techniques.map((tech, i) => (
                              <li key={i} className="flex items-start mb-1">
                                <span className="mr-2">•</span>
                                <span>{tech}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                      
                      {method.ports && method.ports.length > 0 && (
                        <>
                          <p className={`text-${method.color}-800 newq font-bold mt-2`}>Ports:</p>
                          <p className={`text-${method.color}-700 newq text-sm`}>{method.ports.join(", ")}</p>
                        </>
                      )}
                      
                      {method.tools && (
                        <>
                          <p className={`text-${method.color}-800 newq font-bold mt-2`}>Tools:</p>
                          <p className={`text-${method.color}-700 newq text-sm`}>{method.tools.join(", ")}</p>
                        </>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* SNMP Deep Dive */}
            <div className="bg-orange-50 p-8 mb-12">
              <h2 className="text-3xl newq text-orange-800 mb-4">📊 SNMP - Network Management Protocol</h2>
              
              <h3 className="text-xl newq text-orange-700 mb-3">Community Strings (Passwords)</h3>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {snmpCommunityStrings.map((cs, index) => (
                  <div key={index} className={`bg-${cs.color}-50 p-3`}>
                    <h4 className={`text-lg newq text-${cs.color}-800 font-bold`}>{cs.name}</h4>
                    <p className={`text-${cs.color}-700 newq text-sm`}>{cs.desc}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-xl newq text-orange-700 mb-3">SNMP Versions</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {snmpVersions.map((v, index) => (
                  <div key={index} className={`bg-${v.color}-50 p-3`}>
                    <h4 className={`text-lg newq text-${v.color}-800 font-bold`}>{v.version}</h4>
                    <p className={`text-${v.color}-700 newq text-sm`}>{v.security}</p>
                    <p className={`text-${v.color}-600 newq text-xs`}>{v.auth}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* NetBIOS Names */}
            <div className="bg-purple-50 p-8 mb-12">
              <h2 className="text-3xl newq text-purple-800 mb-4">🖥️ NetBIOS Name Types</h2>
              
              <button
                className="bg-purple-600 text-white px-4 py-2 newq mb-4"
                onClick={() => setShowSAM(!showSAM)}
              >
                {showSAM ? 'Hide NetBIOS Names' : 'Show NetBIOS Name Types'}
              </button>

              {showSAM && (
                <div className="grid md:grid-cols-3 gap-3 max-h-96 overflow-y-auto">
                  {netbiosNameTypes.map((item, index) => (
                    <div key={index} className="bg-white p-2">
                      <p className="text-purple-800 newq font-bold">{item.hex}</p>
                      <p className="text-purple-700 newq text-sm">{item.type}</p>
                      <p className="text-purple-600 newq text-xs">{item.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* LDAP Tools */}
            <div className="bg-teal-50 p-8 mb-12">
              <h2 className="text-2xl newq text-teal-800 mb-4">📋 LDAP Enumeration Tools</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {ldapTools.map((tool, index) => (
                  <div key={index} className="bg-white p-3">
                    <p className="text-teal-800 newq font-bold">{tool.name}</p>
                    <p className="text-teal-600 newq text-xs">{tool.url}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Enumeration Tools */}
            <div className="bg-gray-50 p-8">
              <h2 className="text-2xl newq text-gray-800 mb-4">🛠️ Popular Enumeration Tools</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {enumerationTools.map((tool, index) => (
                  <div key={index} className="bg-white p-4">
                    <h3 className="text-lg newq text-gray-800 font-bold">{tool.name}</h3>
                    <p className="text-gray-600 newq text-sm mb-2">{tool.desc}</p>
                    <p className="text-gray-700 newq text-xs">Features: {tool.features.join(", ")}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Password Cracking Section */}
          <section id="password" className="py-16 bg-red-50">
            <h1 className="text-4xl newq text-red-900 mb-4">Password Cracking - Breaking the Locks</h1>
            
            <div className="bg-white p-8 mb-8">
              <p className="text-xl newq text-red-800 leading-relaxed">
                Passwords are like keys to your digital house. Hackers try many ways to steal or guess them!
              </p>
            </div>

            <h2 className="text-2xl newq text-red-800 mb-4">What Makes a Strong Password?</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              <div className="bg-green-100 p-3 text-center newq text-green-800">Uppercase</div>
              <div className="bg-green-100 p-3 text-center newq text-green-800">Lowercase</div>
              <div className="bg-green-100 p-3 text-center newq text-green-800">Numbers</div>
              <div className="bg-green-100 p-3 text-center newq text-green-800">Special Characters</div>
              <div className="bg-green-100 p-3 text-center newq text-green-800 col-span-2">Long (8+ characters)</div>
              <div className="bg-green-100 p-3 text-center newq text-green-800 col-span-2">Not a dictionary word</div>
            </div>

            <h2 className="text-3xl newq text-red-900 mb-6">Types of Password Attacks</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {passwordAttacks.map((attack) => (
                <div 
                  key={attack.name}
                  className={`bg-${attack.color}-50 p-6 cursor-pointer`}
                  onClick={() => setActivePasswordAttack(activePasswordAttack === attack.name ? null : attack.name)}
                >
                  <div className="flex items-center mb-3">
                    <span className="text-3xl mr-2">{attack.emoji}</span>
                    <h3 className={`text-xl newq text-${attack.color}-800 font-bold`}>{attack.name}</h3>
                  </div>
                  <p className={`text-${attack.color}-700 newq mb-2`}>{attack.description}</p>
                  {activePasswordAttack === attack.name && (
                    <div className={`mt-3 pt-3 border-t-2 border-${attack.color}-200`}>
                      <p className={`text-${attack.color}-800 newq font-bold`}>Techniques:</p>
                      <ul className={`text-${attack.color}-700 newq text-sm list-none`}>
                        {attack.techniques.map((tech, i) => (
                          <li key={i} className="flex items-start mb-1">
                            <span className="mr-2">•</span>
                            <span>{tech}</span>
                          </li>
                        ))}
                      </ul>
                      <p className={`text-${attack.color}-800 newq font-bold mt-2`}>Example:</p>
                      <p className={`text-${attack.color}-700 newq text-sm`}>{attack.example}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Password Cracking Tools */}
            <div className="bg-purple-50 p-8 mb-12">
              <h2 className="text-2xl newq text-purple-800 mb-4">🔧 Password Cracking Tools</h2>
              
              <button
                className="bg-purple-600 text-white px-4 py-2 newq mb-4"
                onClick={() => setShowPasswordTools(!showPasswordTools)}
              >
                {showPasswordTools ? 'Hide Tools' : 'Show Password Cracking Tools'}
              </button>

              {showPasswordTools && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {passwordCrackingTools.map((tool, index) => (
                    <div key={index} className="bg-white p-2 text-center newq text-purple-700">
                      {tool}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Windows Authentication */}
            <div className="bg-blue-50 p-8 mb-12">
              <h2 className="text-2xl newq text-blue-800 mb-4">🪟 Windows Authentication</h2>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4">
                  <h3 className="text-lg newq text-blue-800 font-bold mb-2">SAM Database</h3>
                  <p className="text-blue-700 newq text-sm">Stores passwords in hashed form</p>
                  <p className="text-blue-600 newq text-xs">Location: c:\windows\system32\config\SAM</p>
                  <button className="mt-2 text-blue-600 underline" onClick={() => setShowSAM(!showSAM)}>
                    {showSAM ? 'Hide' : 'Show more'}
                  </button>
                  {showSAM && (
                    <div className="mt-2 p-2 bg-blue-100">
                      <p className="text-blue-800 newq text-xs">Locked when Windows is running!</p>
                    </div>
                  )}
                </div>
                
                <div className="bg-white p-4">
                  <h3 className="text-lg newq text-blue-800 font-bold mb-2">NTLM</h3>
                  <p className="text-blue-700 newq text-sm">Windows authentication protocol</p>
                  <p className="text-blue-600 newq text-xs">Uses challenge-response with "nonce"</p>
                </div>
                
                <div className="bg-white p-4">
                  <h3 className="text-lg newq text-blue-800 font-bold mb-2">Kerberos</h3>
                  <p className="text-blue-700 newq text-sm">Newer, more secure authentication</p>
                  <button className="mt-2 text-blue-600 underline" onClick={() => setShowKerberos(!showKerberos)}>
                    {showKerberos ? 'Hide' : 'Show how it works'}
                  </button>
                  {showKerberos && (
                    <div className="mt-2 p-2 bg-blue-100">
                      <p className="text-blue-800 newq text-xs">Uses tickets like a concert!</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Password Salting */}
            <div className="bg-green-50 p-8">
              <h2 className="text-2xl newq text-green-800 mb-4">🧂 Password Salting</h2>
              <p className="text-green-700 newq mb-4">
                Adding extra random characters to passwords before hashing them!
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4">
                  <p className="text-red-700 newq font-bold">Without Salt:</p>
                  <p className="font-mono text-sm bg-red-50 p-2">23d42f5f3f66498b2c8ff4c20b8c5ac826e47146</p>
                  <p className="text-red-600 newq text-xs">Same password = Same hash</p>
                </div>
                <div className="bg-white p-4">
                  <p className="text-green-700 newq font-bold">With Salt:</p>
                  <p className="font-mono text-sm bg-green-50 p-2">87dd36bc4056720bd4c94e9e2bd165c299446287</p>
                  <p className="text-green-600 newq text-xs">Same password = Different hash!</p>
                </div>
              </div>
            </div>
          </section>

          {/* Privilege Escalation Section */}
          <section id="privilege" className="py-16 bg-yellow-50">
            <h1 className="text-4xl newq text-yellow-900 mb-4">Privilege Escalation - Getting More Power</h1>
            
            <div className="bg-white p-8 mb-8">
              <p className="text-xl newq text-yellow-800 leading-relaxed">
                Once inside, hackers want MORE access - like a regular person becoming the building manager!
              </p>
            </div>

            <button
              className="bg-yellow-600 text-white px-6 py-3 newq text-lg mb-6"
              onClick={() => setShowPrivilegeEscalation(!showPrivilegeEscalation)}
            >
              {showPrivilegeEscalation ? 'Hide Privilege Types' : 'Show Privilege Escalation Types'}
            </button>

            {showPrivilegeEscalation && (
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {privilegeEscalationTypes.map((type) => (
                  <div key={type.name} className={`bg-${type.color}-50 p-6`}>
                    <div className="flex items-center mb-3">
                      <span className="text-3xl mr-2">{type.emoji}</span>
                                         <h3 className={`text-2xl newq text-${type.color}-800`}>{type.name}</h3>
                    </div>
                    <p className={`text-${type.color}-700 newq mb-3`}>{type.description}</p>
                    <div className={`bg-${type.color}-100 p-4`}>
                      <p className={`text-${type.color}-800 newq font-bold`}>Example:</p>
                      <p className={`text-${type.color}-700 newq`}>{type.example}</p>
                      <p className={`text-${type.color}-800 newq font-bold mt-2`}>How it works:</p>
                      <p className={`text-${type.color}-700 newq`}>{type.howItWorks}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Executing Applications */}
            <h2 className="text-3xl newq text-yellow-900 mb-6 mt-12">Executing Malicious Applications</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {applicationExecutionTools.map((tool, index) => (
                <div key={index} className="bg-white p-6">
                  <h3 className="text-xl newq text-yellow-800 font-bold mb-2">{tool.name}</h3>
                  <p className="text-yellow-700 newq mb-3">{tool.desc}</p>
                  <div className="bg-yellow-50 p-3">
                    <p className="text-yellow-800 newq font-bold">Features:</p>
                    <ul className="text-yellow-700 newq text-sm">
                      {tool.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Keyloggers */}
            <h2 className="text-3xl newq text-yellow-900 mb-6">⌨️ Keyloggers - The Typing Spies</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-red-50 p-6">
                <h3 className="text-2xl newq text-red-800 mb-4 flex items-center">
                  <span className="text-3xl mr-2">💻</span>
                  Software Keyloggers
                </h3>
                <ul className="space-y-3">
                  {keyloggerTypes.software.map((kl, index) => (
                    <li key={index} className="bg-white p-3">
                      <p className="text-red-800 newq font-bold">{kl.name}</p>
                      <p className="text-red-700 newq text-sm">{kl.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6">
                <h3 className="text-2xl newq text-purple-800 mb-4 flex items-center">
                  <span className="text-3xl mr-2">🔌</span>
                  Hardware Keyloggers
                </h3>
                <ul className="space-y-3">
                  {keyloggerTypes.hardware.map((kl, index) => (
                    <li key={index} className="bg-white p-3">
                      <p className="text-purple-800 newq font-bold">{kl.name}</p>
                      <p className="text-purple-700 newq text-sm">{kl.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Anti-Keyloggers */}
            <div className="bg-green-50 p-8 mb-12">
              <h2 className="text-2xl newq text-green-800 mb-4">🛡️ Anti-Keylogger Tools</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {antikeyloggerTools.map((tool, index) => (
                  <div key={index} className="bg-white p-4">
                    <p className="text-green-800 newq font-bold">{tool.name}</p>
                    <p className="text-green-600 newq text-xs">{tool.url}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Spyware */}
            <div className="bg-pink-50 p-8 mb-12">
              <h2 className="text-3xl newq text-pink-800 mb-4">👁️ Spyware - The Digital Peeping Tom</h2>
              
              <h3 className="text-xl newq text-pink-700 mb-3">Types of Spyware</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {spywareTypes.map((type, index) => (
                  <div key={index} className="bg-white p-3 text-center">
                    <span className="text-2xl block mb-1">{type.emoji}</span>
                    <p className="text-pink-800 newq font-bold text-sm">{type.name}</p>
                    <p className="text-pink-600 newq text-xs">{type.desc}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-xl newq text-pink-700 mb-3">What Spyware Can Do</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {spywareFeatures.map((feature, index) => (
                  <div key={index} className="bg-white p-2 text-sm newq text-pink-700">
                    • {feature}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Hiding Files Section */}
          <section id="hiding" className="py-16 bg-purple-50">
            <h1 className="text-4xl newq text-purple-900 mb-4">Hiding Files - Digital Hide and Seek</h1>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* NTFS ADS */}
              <div className="bg-indigo-50 p-6">
                <h2 className="text-2xl newq text-indigo-800 mb-4">📁 NTFS Alternate Data Streams (ADS)</h2>
                <p className="text-indigo-700 newq mb-4">
                  A special way to hide files inside other files - like a secret compartment in a toy box!
                </p>
                <button
                  className="bg-indigo-600 text-white px-4 py-2 newq mb-4"
                  onClick={() => setShowNTFS(!showNTFS)}
                >
                  {showNTFS ? 'Hide How It Works' : 'Show How ADS Works'}
                </button>
                {showNTFS && (
                  <div className="bg-white p-4">
                    <p className="text-indigo-800 newq font-bold">Example:</p>
                    <p className="font-mono text-sm bg-indigo-100 p-2 mb-2">notepad.exe:hidden.txt</p>
                    <p className="text-indigo-700 newq text-sm">
                      This hides "hidden.txt" INSIDE "notepad.exe" - you can't see it normally!
                    </p>
                  </div>
                )}
              </div>

              {/* Rootkits */}
              <div className="bg-purple-50 p-6">
                <h2 className="text-2xl newq text-purple-800 mb-4">🎭 Rootkits - The Ultimate Hiders</h2>
                <p className="text-purple-700 newq mb-4">
                  Rootkits hide everything - files, processes, connections - like an invisibility cloak!
                </p>
                
                <button
                  className="bg-purple-600 text-white px-4 py-2 newq mb-4"
                  onClick={() => setShowRootkitTools(!showRootkitTools)}
                >
                  {showRootkitTools ? 'Hide Rootkit Info' : 'Show Rootkit Types'}
                </button>

                {showRootkitTools && (
                  <>
                    <div className="grid gap-4 mb-4">
                      {rootkitTypes.map((type) => (
                        <div 
                          key={type.name}
                          className={`bg-${type.color}-50 p-4 cursor-pointer`}
                          onClick={() => setActiveRootkitType(activeRootkitType === type.name ? null : type.name)}
                        >
                          <div className="flex items-center mb-2">
                            <span className="text-2xl mr-2">{type.emoji}</span>
                            <h3 className={`text-lg newq text-${type.color}-800 font-bold`}>{type.name}</h3>
                          </div>
                          <p className={`text-${type.color}-700 newq text-sm`}>{type.description}</p>
                          {activeRootkitType === type.name && (
                            <div className={`mt-2 pt-2 border-t-2 border-${type.color}-200`}>
                              <p className={`text-${type.color}-800 newq font-bold text-sm`}>How it works:</p>
                              <p className={`text-${type.color}-700 newq text-xs`}>{type.howItWorks}</p>
                              <p className={`text-${type.color}-800 newq font-bold text-sm mt-1`}>Detection:</p>
                              <p className={`text-${type.color}-700 newq text-xs`}>{type.detection}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    <h3 className="text-lg newq text-purple-800 font-bold mt-4">Rootkit Tools</h3>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {rootkitTools.map((tool, index) => (
                        <div key={index} className="bg-white p-2 text-center newq text-purple-700">
                          {tool}
                        </div>
                      ))}
                    </div>

                    <h3 className="text-lg newq text-purple-800 font-bold mt-4">Detection Tools</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="bg-white p-3">
                        <p className="text-purple-800 newq font-bold">Windows:</p>
                        <ul className="text-purple-700 newq text-sm">
                          {rootkitDetectionTools.windows.map((tool, i) => (
                            <li key={i}>• {tool}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-white p-3">
                        <p className="text-purple-800 newq font-bold">Linux:</p>
                        <ul className="text-purple-700 newq text-sm">
                          {rootkitDetectionTools.linux.map((tool, i) => (
                            <li key={i}>• {tool}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Steganography */}
            <h2 className="text-3xl newq text-purple-900 mb-6">🎨 Steganography - Hiding in Plain Sight</h2>
            
            <div className="bg-teal-50 p-8 mb-8">
              <p className="text-teal-800 newq text-lg mb-4">
                Steganography hides secret messages inside normal-looking things - like writing in invisible ink!
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-4">
                  <h3 className="text-xl newq text-teal-800 mb-3">Technical Steganography</h3>
                  <ul className="space-y-2">
                    {steganographyClassification.technical.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                        <span className="text-teal-700 newq">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white p-4">
                  <h3 className="text-xl newq text-teal-800 mb-3">Linguistic Steganography</h3>
                  <ul className="space-y-2">
                    {steganographyClassification.linguistic.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                        <span className="text-teal-700 newq">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                className="bg-teal-600 text-white px-4 py-2 newq mb-4"
                onClick={() => setShowStegoTools(!showStegoTools)}
              >
                {showStegoTools ? 'Hide Steganography Types' : 'Show Steganography Types'}
              </button>

              {showStegoTools && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {steganographyTypes.map((type) => (
                    <div 
                      key={type.name}
                      className={`bg-${type.color}-50 p-4 cursor-pointer`}
                      onClick={() => setActiveSteganographyType(activeSteganographyType === type.name ? null : type.name)}
                    >
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-2">{type.emoji}</span>
                        <h3 className={`text-lg newq text-${type.color}-800 font-bold`}>{type.name}</h3>
                      </div>
                      <p className={`text-${type.color}-700 newq text-sm`}>{type.description}</p>
                      {activeSteganographyType === type.name && (
                        <div className={`mt-2 pt-2 border-t-2 border-${type.color}-200`}>
                          <p className={`text-${type.color}-800 newq font-bold text-sm`}>How it works:</p>
                          <p className={`text-${type.color}-700 newq text-xs`}>{type.howItWorks}</p>
                          {type.tools && (
                            <>
                              <p className={`text-${type.color}-800 newq font-bold text-sm mt-1`}>Tools:</p>
                              <p className={`text-${type.color}-700 newq text-xs`}>{type.tools.join(", ")}</p>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Covering Tracks Section */}
          <section id="tracks" className="py-16 bg-gray-50">
            <h1 className="text-4xl newq text-gray-900 mb-4">Covering Tracks - The Great Escape</h1>
            
            <div className="bg-white p-8 mb-8">
              <p className="text-xl newq text-gray-800 leading-relaxed">
                After breaking in, hackers clean up all evidence - like a burglar wiping fingerprints!
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {coveringTracksTechniques.map((technique) => (
                <div key={technique.name} className={`bg-${technique.color}-50 p-6`}>
                  <div className="text-center mb-3">
                    <span className="text-4xl">{technique.emoji}</span>
                  </div>
                  <h3 className={`text-xl newq text-${technique.color}-800 font-bold text-center mb-2`}>
                    {technique.name}
                  </h3>
                  <p className={`text-${technique.color}-700 newq text-sm mb-3`}>{technique.description}</p>
                  <div className={`bg-${technique.color}-100 p-3`}>
                    <p className={`text-${technique.color}-800 newq text-sm font-bold`}>How it works:</p>
                    <p className={`text-${technique.color}-700 newq text-xs`}>{technique.howItWorks}</p>
                    {technique.methods && (
                      <>
                        <p className={`text-${technique.color}-800 newq text-sm font-bold mt-2`}>Methods:</p>
                        <ul className={`text-${technique.color}-700 newq text-xs`}>
                          {technique.methods.map((method, i) => (
                            <li key={i}>• {method}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Windows Log Locations */}
            <div className="bg-blue-50 p-8 mb-8">
              <h2 className="text-2xl newq text-blue-800 mb-4">📍 Where Logs Are Stored (Windows)</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4">
                  <p className="text-blue-800 newq font-bold">Event Viewer</p>
                  <p className="text-blue-600 newq text-sm">Control Panel → Administrative Tools</p>
                </div>
                <div className="bg-white p-4">
                  <p className="text-blue-800 newq font-bold">Security Logs</p>
                  <p className="text-blue-600 newq text-sm">%SystemRoot%\System32\winevt\Logs\Security.evtx</p>
                </div>
                <div className="bg-white p-4">
                  <p className="text-blue-800 newq font-bold">System Logs</p>
                  <p className="text-blue-600 newq text-sm">%SystemRoot%\System32\winevt\Logs\System.evtx</p>
                </div>
              </div>
            </div>

            {/* Command Line Log Clearing */}
            <div className="bg-red-50 p-8">
              <h2 className="text-2xl newq text-red-800 mb-4">⌨️ Clearing Logs with Commands</h2>
              <div className="bg-black text-green-400 p-4 font-mono text-sm">
                <p>wevtutil el (list all logs)</p>
                <p>wevtutil cl Application (clear application log)</p>
                <p>wevtutil cl System (clear system log)</p>
                <p>wevtutil cl Security (clear security log)</p>
                <p>del %WINDIR%\*.log (delete all log files)</p>
              </div>
            </div>
          </section>

          {/* System Hacking Methodology Summary */}
          <section className="py-16 bg-green-50">
            <h1 className="text-4xl newq text-green-900 mb-8 text-center">The 5 Steps of System Hacking</h1>
            
            <div className="grid md:grid-cols-5 gap-4 max-w-5xl mx-auto">
              <div className="bg-white p-4 text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">1️⃣</span>
                </div>
                <h3 className="text-lg newq text-red-800 font-bold">Password Cracking</h3>
                <p className="text-red-700 newq text-sm">Break the locks</p>
              </div>
              <div className="bg-white p-4 text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">2️⃣</span>
                </div>
                <h3 className="text-lg newq text-orange-800 font-bold">Escalate Privileges</h3>
                <p className="text-orange-700 newq text-sm">Get more power</p>
              </div>
              <div className="bg-white p-4 text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">3️⃣</span>
                </div>
                <h3 className="text-lg newq text-yellow-800 font-bold">Execute Apps</h3>
                <p className="text-yellow-700 newq text-sm">Run bad programs</p>
              </div>
              <div className="bg-white p-4 text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">4️⃣</span>
                </div>
                <h3 className="text-lg newq text-purple-800 font-bold">Hide Files</h3>
                <p className="text-purple-700 newq text-sm">Steganography</p>
              </div>
              <div className="bg-white p-4 text-center">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">5️⃣</span>
                </div>
                <h3 className="text-lg newq text-gray-800 font-bold">Cover Tracks</h3>
                <p className="text-gray-700 newq text-sm">Clear evidence</p>
              </div>
            </div>
          </section>

          {/* Quiz Section */}
          <section className="py-16 bg-indigo-50">
            <h2 className="text-3xl newq text-indigo-900 mb-8 text-center">Test Your Knowledge!</h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6">
                <p className="text-lg newq text-indigo-800 mb-4">❓ What is enumeration?</p>
                <div className="space-y-2">
                  <div className="bg-green-50 p-3">A) Actively asking the system for information (Correct! ✅)</div>
                  <div className="bg-red-50 p-3">B) Deleting files (Wrong! ❌)</div>
                  <div className="bg-red-50 p-3">C) Playing games (Wrong! ❌)</div>
                </div>
              </div>
              
              <div className="bg-white p-6">
                <p className="text-lg newq text-indigo-800 mb-4">❓ What does a rootkit do?</p>
                <div className="space-y-2">
                  <div className="bg-red-50 p-3">A) Makes computer faster (Wrong! ❌)</div>
                  <div className="bg-green-50 p-3">B) Hides malicious activities (Correct! ✅)</div>
                  <div className="bg-red-50 p-3">C) Installs games (Wrong! ❌)</div>
                </div>
              </div>

              <div className="bg-white p-6">
                <p className="text-lg newq text-indigo-800 mb-4">❓ What is steganography?</p>
                <div className="space-y-2">
                  <div className="bg-green-50 p-3">A) Hiding secrets in plain sight (Correct! ✅)</div>
                  <div className="bg-red-50 p-3">B) Typing fast (Wrong! ❌)</div>
                  <div className="bg-red-50 p-3">C) Drawing pictures (Wrong! ❌)</div>
                </div>
              </div>

              <div className="bg-white p-6">
                <p className="text-lg newq text-indigo-800 mb-4">❓ What is privilege escalation?</p>
                <div className="space-y-2">
                  <div className="bg-red-50 p-3">A) Losing access (Wrong! ❌)</div>
                  <div className="bg-green-50 p-3">B) Getting more permissions (Correct! ✅)</div>
                  <div className="bg-red-50 p-3">C) Changing password (Wrong! ❌)</div>
                </div>
              </div>
            </div>
          </section>

          {/* Resources */}
          <section className="py-16 bg-white">
            <h2 className="text-3xl newq text-blue-900 mb-8 text-center">📚 Helpful Resources</h2>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-blue-50 p-6 text-center">
                <Globe className="w-12 h-12 mx-auto mb-3 text-blue-600" />
                <h3 className="text-lg newq text-blue-800 mb-2">Default Passwords</h3>
                <a href="https://cirt.net" className="text-blue-600 underline newq">cirt.net</a>
              </div>
              <div className="bg-purple-50 p-6 text-center">
                <Key className="w-12 h-12 mx-auto mb-3 text-purple-600" />
                <h3 className="text-lg newq text-purple-800 mb-2">Rainbow Tables</h3>
                <a href="#" className="text-purple-600 underline newq">Winrtgen Tool</a>
              </div>
              <div className="bg-green-50 p-6 text-center">
                <Shield className="w-12 h-12 mx-auto mb-3 text-green-600" />
                <h3 className="text-lg newq text-green-800 mb-2">Anti-Keyloggers</h3>
                <a href="https://www.zemana.com" className="text-green-600 underline newq">Zemana</a>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg newq mb-2">System Hacking Adventures</h3>
                <p className="text-gray-400 newq text-sm">
                  Learning ethical hacking and cybersecurity!
                </p>
              </div>
              <div>
                <h3 className="text-lg newq mb-2">Topics Covered</h3>
                <ul className="space-y-1">
                  <li><a href="#enumeration" className="text-gray-400 newq text-sm">Enumeration</a></li>
                  <li><a href="#password" className="text-gray-400 newq text-sm">Password Cracking</a></li>
                  <li><a href="#privilege" className="text-gray-400 newq text-sm">Privilege Escalation</a></li>
                  <li><a href="#hiding" className="text-gray-400 newq text-sm">Hiding Files</a></li>
                  <li><a href="#tracks" className="text-gray-400 newq text-sm">Covering Tracks</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg newq mb-2">Remember</h3>
                <p className="text-gray-400 newq text-sm">
                  This is for educational purposes only! Always get permission before testing.
                </p>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-gray-800 text-center">
              <p className="text-gray-500 newq text-sm">
                © 2024 System Hacking Adventures - Learning Cybersecurity is Fun!
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}