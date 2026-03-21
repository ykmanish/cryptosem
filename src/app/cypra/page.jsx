'use client'

import React, { useState } from 'react';
import Head from 'next/head';
import { 
  Shield, 
  Server, 
  Network, 
  Lock, 
  Terminal,
  GitBranch,
  Globe,
  ChevronRight,
  Menu,
  X,
  CheckCircle,
  Copy,
  Eye,
  Key,
  Database,
  Router,
  Activity,
  ArrowRightLeft,
  Layers,
  Wifi,
  Zap,
  Settings,
  User,
  Link2,
  HelpCircle,
  BookOpen,
  Award,
  Brain,
  FileText
} from 'lucide-react';

export default function NetworkConfig() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDevice, setActiveDevice] = useState('switchServer');
  const [activeStep, setActiveStep] = useState(1);
  const [copiedCommand, setCopiedCommand] = useState(null);
  const [showVerification, setShowVerification] = useState(false);
  const [showAnswers, setShowAnswers] = useState({});
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  const copyToClipboard = (command, device) => {
    navigator.clipboard.writeText(command);
    setCopiedCommand(`${device}-${command.substring(0, 30)}`);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  const toggleAnswer = (questionId) => {
    setShowAnswers(prev => ({ ...prev, [questionId]: !prev[questionId] }));
  };

  const handleQuizAnswer = (questionId, answer) => {
    setQuizAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const calculateQuizScore = () => {
    let score = 0;
    Object.keys(quizAnswers).forEach(qId => {
      if (quizAnswers[qId] === quizQuestions[qId].correct) score++;
    });
    return score;
  };

  // IP Addressing Scheme
  const ipScheme = {
    area0: {
      name: "Area 0 - Branch Network 1",
      network: "192.168.1.0/30",
      router0: { interface: "GigabitEthernet0/0", ip: "192.168.1.1/30", description: "Link to HQ" },
      router1: { interface: "GigabitEthernet0/0", ip: "192.168.1.2/30", description: "Link to Branch1" }
    },
    area1: {
      name: "Area 1 - Branch Network 2",
      network: "192.168.2.0/30",
      router1: { interface: "GigabitEthernet0/1", ip: "192.168.2.1/30", description: "Link to Branch2" },
      router2: { interface: "GigabitEthernet0/0", ip: "192.168.2.2/30", description: "Link to HQ" }
    },
    vlans: {
      vlan10: { id: 10, name: "HR", network: "172.16.10.0/24", gateway: "172.16.10.1" },
      vlan20: { id: 20, name: "Finance", network: "172.16.20.0/24", gateway: "172.16.20.1" },
      vlan30: { id: 30, name: "IT", network: "172.16.30.0/24", gateway: "172.16.30.1" }
    },
    loopbacks: {
      router0: "10.0.0.1/32",
      router2: "10.0.0.2/32"
    }
  };

  // Questions for each step
  const stepQuestions = {
    1: {
      title: "VLAN Configuration Questions",
      questions: [
        {
          id: "q1",
          question: "What is the purpose of creating VLANs in a network?",
          answer: "VLANs (Virtual Local Area Networks) segment a physical network into multiple logical networks, improving security by isolating traffic, reducing broadcast domains, and allowing better network management. Different departments (HR, Finance, IT) can be separated even if they share the same physical switches."
        },
        {
          id: "q2",
          question: "What command would you use to verify VLAN creation?",
          answer: "`show vlan brief` - This command displays all configured VLANs with their names, status, and ports assigned to them."
        },
        {
          id: "q3",
          question: "Why are VLANs 10, 20, and 30 used instead of default VLAN 1?",
          answer: "Using dedicated VLANs for specific departments provides better security and management. Default VLAN 1 should not be used for user traffic as per security best practices."
        }
      ]
    },
    2: {
      title: "VTP Configuration Questions",
      questions: [
        {
          id: "q4",
          question: "What is VTP and why is it used?",
          answer: "VTP (VLAN Trunking Protocol) allows centralized management of VLANs across multiple switches. When configured with a VTP Server, VLAN changes are automatically propagated to all VTP Clients in the same domain, ensuring consistency across the network."
        },
        {
          id: "q5",
          question: "Why is Switch0 configured as VTP Server and Switch1 as VTP Client?",
          answer: "Switch0 (Server) manages VLAN creation/deletion, while Switch1 (Client) receives VLAN information automatically. This hierarchical approach ensures centralized control and prevents inconsistencies."
        },
        {
          id: "q6",
          question: "What is the purpose of VTP password 'vtp@123'?",
          answer: "The VTP password provides authentication between VTP devices, preventing unauthorized switches from joining the VTP domain and ensuring only authenticated devices receive VLAN updates."
        }
      ]
    },
    3: {
      title: "Trunk Configuration Questions",
      questions: [
        {
          id: "q7",
          question: "What is a trunk port and why is it needed?",
          answer: "A trunk port carries traffic for multiple VLANs simultaneously between switches. It uses 802.1Q encapsulation to tag frames with VLAN IDs, allowing VLAN segmentation across multiple switches."
        },
        {
          id: "q8",
          question: "Why restrict trunk to only VLANs 10, 20, and 30?",
          answer: "Restricting trunk ports to specific VLANs (10,20,30) improves security by preventing unauthorized VLANs from traversing the trunk, reducing attack surface and unnecessary broadcast traffic."
        },
        {
          id: "q9",
          question: "What does 'switchport trunk allowed vlan 10,20,30' do?",
          answer: "This command explicitly permits only VLANs 10, 20, and 30 to pass through the trunk port. All other VLANs are blocked, enhancing security and reducing unnecessary traffic."
        }
      ]
    },
    4: {
      title: "SSH Configuration Questions",
      questions: [
        {
          id: "q10",
          question: "Why use SSH instead of Telnet for device management?",
          answer: "SSH (Secure Shell) encrypts all traffic including passwords, while Telnet sends everything in clear text. SSH provides secure remote management, preventing eavesdropping and credential theft."
        },
        {
          id: "q11",
          question: "What is the purpose of generating RSA keys?",
          answer: "RSA keys are used for SSH encryption and authentication. The public/private key pair enables secure key exchange and encrypts the session between the client and the network device."
        },
        {
          id: "q12",
          question: "Why is SSH version 2 used instead of version 1?",
          answer: "SSH version 2 is more secure than version 1, fixing known vulnerabilities and providing stronger encryption algorithms, better authentication methods, and improved security features."
        }
      ]
    },
    5: {
      title: "OSPF Configuration Questions",
      questions: [
        {
          id: "q13",
          question: "What are OSPF areas and why are they used?",
          answer: "OSPF areas segment the network to reduce routing table size, limit Link State Advertisement (LSA) flooding, and improve network stability. Area 0 is the backbone, and all other areas must connect to it."
        },
        {
          id: "q14",
          question: "Why is Router1 configured in both Area 0 and Area 1?",
          answer: "Router1 acts as an Area Border Router (ABR), connecting Area 0 (Branch Network 1) and Area 1 (Branch Network 2). It maintains separate link-state databases for each area and routes between them."
        },
        {
          id: "q15",
          question: "What does the 'network 192.168.1.0 0.0.0.3 area 0' command mean?",
          answer: "This command tells OSPF to advertise the 192.168.1.0/30 network in Area 0. The wildcard mask 0.0.0.3 matches exactly the /30 subnet, enabling OSPF on that interface."
        }
      ]
    }
  };

  // Quiz Questions
  const quizQuestions = {
    q1: {
      question: "What command is used to create VLAN 10 named HR?",
      options: ["vlan 10 name HR", "vlan 10 HR", "create vlan 10 HR", "set vlan 10 HR"],
      correct: "vlan 10 name HR"
    },
    q2: {
      question: "What is the correct VTP domain name configured in this network?",
      options: ["ENTERPRISE", "CORPORATE", "ENTERPRISE.LOCAL", "VTP_DOMAIN"],
      correct: "ENTERPRISE"
    },
    q3: {
      question: "Which VLANs are allowed on the trunk port?",
      options: ["All VLANs", "VLANs 1-1005", "VLANs 10, 20, 30 only", "VLANs 1, 10, 20, 30"],
      correct: "VLANs 10, 20, 30 only"
    },
    q4: {
      question: "What is the SSH username configured for access?",
      options: ["cisco", "admin", "manager", "root"],
      correct: "admin"
    },
    q5: {
      question: "Which OSPF areas are configured in this network?",
      options: ["Area 0 only", "Area 1 only", "Area 0 and Area 1", "Area 0, Area 1, and Area 2"],
      correct: "Area 0 and Area 1"
    },
    q6: {
      question: "What is the IP address of Router0's interface to HQ?",
      options: ["192.168.1.1/30", "192.168.1.2/30", "192.168.2.1/30", "192.168.2.2/30"],
      correct: "192.168.1.1/30"
    },
    q7: {
      question: "What command verifies OSPF neighbors?",
      options: ["show ospf neighbors", "show ip ospf neighbor", "show ip ospf", "show ospf"],
      correct: "show ip ospf neighbor"
    },
    q8: {
      question: "What is the purpose of the VTP password?",
      options: ["To encrypt VLAN data", "To authenticate VTP devices", "To secure trunk ports", "To protect SSH access"],
      correct: "To authenticate VTP devices"
    }
  };

  const stepConfigs = {
    1: {
      title: "Step 1: VLAN Configuration",
      description: "Create VLANs on both access switches for department segmentation",
      devices: ["Switch0", "Switch1"],
      commands: [
        "! ========== VLAN CONFIGURATION ==========",
        "configure terminal",
        "! Create VLAN 10 - HR Department",
        "vlan 10",
        " name HR",
        " exit",
        "! Create VLAN 20 - Finance Department",
        "vlan 20",
        " name Finance",
        " exit",
        "! Create VLAN 30 - IT Department",
        "vlan 30",
        " name IT",
        " exit",
        "! Verify VLAN configuration",
        "show vlan brief",
        "end",
        "write memory"
      ],
      learningPoints: [
        "VLANs create logical segmentation within physical switches",
        "Each department gets its own broadcast domain",
        "VLAN names help identify the purpose",
        "VLANs improve security by isolating traffic"
      ]
    },
    2: {
      title: "Step 2: VTP Configuration",
      description: "Configure VTP Server and Client for centralized VLAN management",
      devices: ["Switch0 (VTP Server)", "Switch1 (VTP Client)"],
      commands: [
        "! ========== VTP SERVER CONFIGURATION (Switch0) ==========",
        "configure terminal",
        "! Configure VTP in Server Mode",
        "vtp domain ENTERPRISE",
        "vtp version 2",
        "vtp password vtp@123",
        "vtp mode server",
        "! Verify VTP Server Status",
        "show vtp status",
        "",
        "! ========== VTP CLIENT CONFIGURATION (Switch1) ==========",
        "configure terminal",
        "! Configure VTP in Client Mode",
        "vtp domain ENTERPRISE",
        "vtp version 2",
        "vtp password vtp@123",
        "vtp mode client",
        "! Verify VTP Client Status",
        "show vtp status",
        "end",
        "write memory"
      ],
      learningPoints: [
        "VTP Server manages all VLAN configurations centrally",
        "VTP Clients receive VLAN updates automatically",
        "Domain name and password must match for synchronization",
        "VTP version 2 supports token ring VLANs and consistency checks"
      ]
    },
    3: {
      title: "Step 3: Trunk Configuration",
      description: "Configure trunk ports with VLAN restriction for security",
      devices: ["Switch0", "Switch1"],
      commands: [
        "! ========== TRUNK PORT CONFIGURATION ==========",
        "configure terminal",
        "! Configure Trunk on GigabitEthernet0/1",
        "interface GigabitEthernet0/1",
        " switchport trunk encapsulation dot1q",
        " switchport mode trunk",
        " switchport trunk allowed vlan 10,20,30",
        " description Trunk_Link_Between_Switches",
        " no shutdown",
        " exit",
        "! Verify Trunk Configuration",
        "show interfaces trunk",
        "show interfaces gigabitEthernet 0/1 switchport",
        "end",
        "write memory"
      ],
      learningPoints: [
        "Trunk ports carry multiple VLANs using 802.1Q tagging",
        "Restricting allowed VLANs improves security",
        "Trunk encapsulation must match on both ends",
        "Verify trunk status with show interfaces trunk"
      ]
    },
    4: {
      title: "Step 4: SSH Configuration",
      description: "Configure SSH for secure remote device management",
      devices: ["All Switches & Routers"],
      commands: [
        "! ========== SSH CONFIGURATION ==========",
        "configure terminal",
        "! Set Hostname",
        "hostname [DeviceName]",
        "! Configure Domain Name",
        "ip domain-name enterprise.local",
        "! Generate RSA Keys (Minimum 1024 bits)",
        "crypto key generate rsa modulus 2048",
        "! Enable SSH Version 2",
        "ip ssh version 2",
        "! Create Local User",
        "username admin secret cisco@123",
        "! Configure VTY Lines for SSH only",
        "line vty 0 15",
        " transport input ssh",
        " login local",
        " exec-timeout 5 0",
        " exit",
        "! Verify SSH Configuration",
        "show ip ssh",
        "show ssh",
        "end",
        "write memory"
      ],
      learningPoints: [
        "SSH encrypts all management traffic",
        "RSA keys are required for SSH encryption",
        "VTY lines must be configured to accept SSH only",
        "Local user database provides authentication"
      ]
    },
    5: {
      title: "Step 5: OSPF Configuration",
      description: "Configure OSPF with two areas for dynamic routing",
      devices: ["Router0", "Router1", "Router2"],
      commands: [
        "! ========== ROUTER0 - AREA 0 CONFIGURATION ==========",
        "configure terminal",
        "hostname Router0",
        "interface GigabitEthernet0/0",
        " ip address 192.168.1.1 255.255.255.252",
        " description Link_to_HQ_Area0",
        " no shutdown",
        " exit",
        "interface Loopback0",
        " ip address 10.0.0.1 255.255.255.255",
        " exit",
        "router ospf 1",
        " router-id 10.0.0.1",
        " network 192.168.1.0 0.0.0.3 area 0",
        " network 10.0.0.1 0.0.0.0 area 0",
        " exit",
        "",
        "! ========== ROUTER1 - AREA 0 & 1 CONFIGURATION ==========",
        "configure terminal",
        "hostname Router1",
        "interface GigabitEthernet0/0",
        " ip address 192.168.1.2 255.255.255.252",
        " description Link_to_Branch1_Area0",
        " no shutdown",
        " exit",
        "interface GigabitEthernet0/1",
        " ip address 192.168.2.1 255.255.255.252",
        " description Link_to_Branch2_Area1",
        " no shutdown",
        " exit",
        "router ospf 1",
        " router-id 2.2.2.2",
        " network 192.168.1.0 0.0.0.3 area 0",
        " network 192.168.2.0 0.0.0.3 area 1",
        " exit",
        "",
        "! ========== ROUTER2 - AREA 1 CONFIGURATION ==========",
        "configure terminal",
        "hostname Router2",
        "interface GigabitEthernet0/0",
        " ip address 192.168.2.2 255.255.255.252",
        " description Link_to_HQ_Area1",
        " no shutdown",
        " exit",
        "interface Loopback0",
        " ip address 10.0.0.2 255.255.255.255",
        " exit",
        "router ospf 1",
        " router-id 10.0.0.2",
        " network 192.168.2.0 0.0.0.3 area 1",
        " network 10.0.0.2 0.0.0.0 area 1",
        " exit",
        "end",
        "write memory"
      ],
      learningPoints: [
        "OSPF uses areas to scale large networks",
        "Area 0 is the backbone area",
        "Router1 is an ABR (Area Border Router)",
        "Loopback interfaces provide stable router IDs"
      ]
    }
  };

  const deviceFullConfigs = {
    switchServer: {
      name: "Switch0 - VTP Server",
      icon: <GitBranch className="w-5 h-5" />,
      commands: [
        "! ========================================",
        "! SWITCH0 - VTP SERVER COMPLETE CONFIG",
        "! ========================================",
        "configure terminal",
        "! Basic Configuration",
        "hostname Switch0",
        "enable secret cisco@123",
        "ip domain-name enterprise.local",
        "! SSH Configuration",
        "crypto key generate rsa modulus 2048",
        "ip ssh version 2",
        "username admin secret cisco@123",
        "line vty 0 15",
        " transport input ssh",
        " login local",
        " exit",
        "! VTP Configuration",
        "vtp domain ENTERPRISE",
        "vtp version 2",
        "vtp password vtp@123",
        "vtp mode server",
        "! VLAN Creation",
        "vlan 10",
        " name HR",
        " exit",
        "vlan 20",
        " name Finance",
        " exit",
        "vlan 30",
        " name IT",
        " exit",
        "! Trunk Port",
        "interface GigabitEthernet0/1",
        " switchport trunk encapsulation dot1q",
        " switchport mode trunk",
        " switchport trunk allowed vlan 10,20,30",
        " description Trunk_to_Switch1",
        " no shutdown",
        " exit",
        "! Access Ports",
        "interface FastEthernet0/1",
        " switchport mode access",
        " switchport access vlan 10",
        " description HR_PC",
        " no shutdown",
        " exit",
        "interface FastEthernet0/2",
        " switchport mode access",
        " switchport access vlan 20",
        " description Finance_PC",
        " no shutdown",
        " exit",
        "interface FastEthernet0/3",
        " switchport mode access",
        " switchport access vlan 30",
        " description IT_PC",
        " no shutdown",
        " exit",
        "end",
        "write memory"
      ]
    },
    switchClient: {
      name: "Switch1 - VTP Client",
      icon: <GitBranch className="w-5 h-5" />,
      commands: [
        "! ========================================",
        "! SWITCH1 - VTP CLIENT COMPLETE CONFIG",
        "! ========================================",
        "configure terminal",
        "! Basic Configuration",
        "hostname Switch1",
        "enable secret cisco@123",
        "ip domain-name enterprise.local",
        "! SSH Configuration",
        "crypto key generate rsa modulus 2048",
        "ip ssh version 2",
        "username admin secret cisco@123",
        "line vty 0 15",
        " transport input ssh",
        " login local",
        " exit",
        "! VTP Configuration",
        "vtp domain ENTERPRISE",
        "vtp version 2",
        "vtp password vtp@123",
        "vtp mode client",
        "! Trunk Port",
        "interface GigabitEthernet0/1",
        " switchport trunk encapsulation dot1q",
        " switchport mode trunk",
        " switchport trunk allowed vlan 10,20,30",
        " description Trunk_to_Switch0",
        " no shutdown",
        " exit",
        "! Access Ports",
        "interface FastEthernet0/1",
        " switchport mode access",
        " switchport access vlan 10",
        " description HR_PC_Client",
        " no shutdown",
        " exit",
        "interface FastEthernet0/2",
        " switchport mode access",
        " switchport access vlan 20",
        " description Finance_PC_Client",
        " no shutdown",
        " exit",
        "interface FastEthernet0/3",
        " switchport mode access",
        " switchport access vlan 30",
        " description IT_PC_Client",
        " no shutdown",
        " exit",
        "end",
        "write memory"
      ]
    },
    router0: {
      name: "Router0 - Branch Router (Area 0)",
      icon: <Router className="w-5 h-5" />,
      commands: [
        "! ========================================",
        "! ROUTER0 - AREA 0 COMPLETE CONFIG",
        "! ========================================",
        "configure terminal",
        "hostname Router0",
        "enable secret cisco@123",
        "ip domain-name enterprise.local",
        "! SSH Configuration",
        "crypto key generate rsa modulus 2048",
        "ip ssh version 2",
        "username admin secret cisco@123",
        "line vty 0 4",
        " transport input ssh",
        " login local",
        " exit",
        "! Interface Configuration",
        "interface GigabitEthernet0/0",
        " ip address 192.168.1.1 255.255.255.252",
        " description Link_to_HQ_Area0",
        " no shutdown",
        " exit",
        "interface Loopback0",
        " ip address 10.0.0.1 255.255.255.255",
        " description Management_Interface",
        " exit",
        "! OSPF Configuration",
        "router ospf 1",
        " router-id 10.0.0.1",
        " network 192.168.1.0 0.0.0.3 area 0",
        " network 10.0.0.1 0.0.0.0 area 0",
        " exit",
        "end",
        "write memory"
      ]
    },
    router1: {
      name: "Router1 - HQ Router (Area 0 & 1)",
      icon: <Server className="w-5 h-5" />,
      commands: [
        "! ========================================",
        "! ROUTER1 - HQ COMPLETE CONFIG",
        "! ========================================",
        "configure terminal",
        "hostname Router1",
        "enable secret cisco@123",
        "ip domain-name enterprise.local",
        "! SSH Configuration",
        "crypto key generate rsa modulus 2048",
        "ip ssh version 2",
        "username admin secret cisco@123",
        "line vty 0 4",
        " transport input ssh",
        " login local",
        " exit",
        "! Interface to Branch1 (Area 0)",
        "interface GigabitEthernet0/0",
        " ip address 192.168.1.2 255.255.255.252",
        " description Link_to_Branch1_Area0",
        " no shutdown",
        " exit",
        "! Interface to Branch2 (Area 1)",
        "interface GigabitEthernet0/1",
        " ip address 192.168.2.1 255.255.255.252",
        " description Link_to_Branch2_Area1",
        " no shutdown",
        " exit",
        "! OSPF Configuration",
        "router ospf 1",
        " router-id 2.2.2.2",
        " network 192.168.1.0 0.0.0.3 area 0",
        " network 192.168.2.0 0.0.0.3 area 1",
        " exit",
        "end",
        "write memory"
      ]
    },
    router2: {
      name: "Router2 - Branch Router (Area 1)",
      icon: <Router className="w-5 h-5" />,
      commands: [
        "! ========================================",
        "! ROUTER2 - AREA 1 COMPLETE CONFIG",
        "! ========================================",
        "configure terminal",
        "hostname Router2",
        "enable secret cisco@123",
        "ip domain-name enterprise.local",
        "! SSH Configuration",
        "crypto key generate rsa modulus 2048",
        "ip ssh version 2",
        "username admin secret cisco@123",
        "line vty 0 4",
        " transport input ssh",
        " login local",
        " exit",
        "! Interface Configuration",
        "interface GigabitEthernet0/0",
        " ip address 192.168.2.2 255.255.255.252",
        " description Link_to_HQ_Area1",
        " no shutdown",
        " exit",
        "interface Loopback0",
        " ip address 10.0.0.2 255.255.255.255",
        " description Management_Interface",
        " exit",
        "! OSPF Configuration",
        "router ospf 1",
        " router-id 10.0.0.2",
        " network 192.168.2.0 0.0.0.3 area 1",
        " network 10.0.0.2 0.0.0.0 area 1",
        " exit",
        "end",
        "write memory"
      ]
    }
  };

  const verificationCommands = [
    { category: "VLAN Verification", icon: <Layers className="w-4 h-4" />, commands: [
      "show vlan brief",
      "show vlan id 10",
      "show vlan id 20",
      "show vlan id 30"
    ]},
    { category: "VTP Status Verification", icon: <Database className="w-4 h-4" />, commands: [
      "show vtp status",
      "show vtp password"
    ]},
    { category: "Trunk Port Verification", icon: <Link2 className="w-4 h-4" />, commands: [
      "show interfaces trunk",
      "show interfaces gigabitEthernet 0/1 switchport"
    ]},
    { category: "SSH Access Verification", icon: <Lock className="w-4 h-4" />, commands: [
      "show ip ssh",
      "show ssh",
      "show users"
    ]},
    { category: "OSPF Verification", icon: <Network className="w-4 h-4" />, commands: [
      "show ip ospf neighbor",
      "show ip ospf interface",
      "show ip route ospf",
      "show ip ospf database"
    ]},
    { category: "Connectivity Test", icon: <Wifi className="w-4 h-4" />, commands: [
      "ping 172.16.10.1",
      "ping 172.16.20.1",
      "ping 172.16.30.1",
      "ping 192.168.2.2 source 192.168.1.1"
    ]}
  ];

  return (
    <>
      <Head>
        <title>Enterprise Network Configuration - OSPF, VTP, SSH | NFSU</title>
        <meta name="description" content="Complete step-by-step enterprise network configuration with OSPF routing, VTP VLAN management, and SSH security" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header with University Info */}
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-4">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-2xl font-bold">NATIONAL FORENSIC SCIENCES UNIVERSITY</h1>
              <p className="text-lg">MBA Cyber Security Management - Semester 1</p>
              <p className="text-md">Cyber Security Essentials | Enterprise Network Configuration</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center py-3">
              <div className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-blue-600" />
                <span className="font-bold text-gray-800">Network Configurator</span>
              </div>
              <div className="hidden md:flex space-x-6">
                <a href="#topology" className="text-gray-600 hover:text-blue-600">Topology</a>
                <a href="#ip-scheme" className="text-gray-600 hover:text-blue-600">IP Scheme</a>
                <a href="#step-by-step" className="text-gray-600 hover:text-blue-600">Step-by-Step</a>
                <a href="#configurations" className="text-gray-600 hover:text-blue-600">Configurations</a>
                <a href="#verification" className="text-gray-600 hover:text-blue-600">Verification</a>
                <a href="#quiz" className="text-gray-600 hover:text-blue-600">Quiz</a>
              </div>
              <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden px-4 pb-3 space-y-2 border-t">
              <a href="#topology" className="block py-2 text-gray-600">Topology</a>
              <a href="#ip-scheme" className="block py-2 text-gray-600">IP Scheme</a>
              <a href="#step-by-step" className="block py-2 text-gray-600">Step-by-Step</a>
              <a href="#configurations" className="block py-2 text-gray-600">Configurations</a>
              <a href="#verification" className="block py-2 text-gray-600">Verification</a>
              <a href="#quiz" className="block py-2 text-gray-600">Quiz</a>
            </div>
          )}
        </nav>

        <div className="max-w-7xl mx-auto px-4 py-6">
          
          {/* Topology Section */}
          <section id="topology" className="mb-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center border-b pb-2">
                <Network className="w-6 h-6 mr-2 text-purple-600" />
                Network Topology
              </h2>
              
              <div className="bg-gray-100 rounded-lg p-6 mb-4 overflow-x-auto">
                <div className="min-w-[700px]">
                  {/* Router Layer */}
                  <div className="flex justify-center items-center mb-8">
                    <div className="text-center w-32">
                      <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-md">
                        <Router className="w-8 h-8" />
                      </div>
                      <div className="font-semibold mt-2">Router0</div>
                      <div className="text-xs text-gray-600">Branch 1</div>
                      <div className="text-xs font-mono bg-blue-100 px-1 rounded">Area 0</div>
                    </div>
                    <div className="flex-1 h-0.5 bg-gray-400 mx-2 relative">
                      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-xs bg-white px-2 whitespace-nowrap">192.168.1.0/30</div>
                    </div>
                    <div className="text-center w-32">
                      <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-md">
                        <Server className="w-8 h-8" />
                      </div>
                      <div className="font-semibold mt-2">Router1</div>
                      <div className="text-xs text-gray-600">HQ Router</div>
                      <div className="text-xs font-mono bg-purple-100 px-1 rounded">Area 0 & 1</div>
                    </div>
                    <div className="flex-1 h-0.5 bg-gray-400 mx-2 relative">
                      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-xs bg-white px-2 whitespace-nowrap">192.168.2.0/30</div>
                    </div>
                    <div className="text-center w-32">
                      <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-md">
                        <Router className="w-8 h-8" />
                      </div>
                      <div className="font-semibold mt-2">Router2</div>
                      <div className="text-xs text-gray-600">Branch 2</div>
                      <div className="text-xs font-mono bg-green-100 px-1 rounded">Area 1</div>
                    </div>
                  </div>
                  
                  {/* Switch Layer */}
                  <div className="flex justify-center space-x-24 mt-4">
                    <div className="text-center">
                      <div className="bg-yellow-500 text-white rounded-full w-14 h-14 flex items-center justify-center mx-auto shadow">
                        <GitBranch className="w-7 h-7" />
                      </div>
                      <div className="font-semibold mt-1">Switch0</div>
                      <div className="text-xs bg-yellow-100 px-2 rounded">VTP Server</div>
                    </div>
                    <div className="text-center">
                      <div className="bg-orange-500 text-white rounded-full w-14 h-14 flex items-center justify-center mx-auto shadow">
                        <GitBranch className="w-7 h-7" />
                      </div>
                      <div className="font-semibold mt-1">Switch1</div>
                      <div className="text-xs bg-orange-100 px-2 rounded">VTP Client</div>
                    </div>
                  </div>
                  
                  {/* VLANs */}
                  <div className="grid grid-cols-3 gap-3 mt-6">
                    <div className="bg-blue-50 p-2 rounded text-center border border-blue-200">
                      <span className="font-bold">VLAN 10</span><br/>
                      <span className="text-sm">HR</span><br/>
                      <span className="text-xs font-mono">172.16.10.0/24</span>
                    </div>
                    <div className="bg-green-50 p-2 rounded text-center border border-green-200">
                      <span className="font-bold">VLAN 20</span><br/>
                      <span className="text-sm">Finance</span><br/>
                      <span className="text-xs font-mono">172.16.20.0/24</span>
                    </div>
                    <div className="bg-purple-50 p-2 rounded text-center border border-purple-200">
                      <span className="font-bold">VLAN 30</span><br/>
                      <span className="text-sm">IT</span><br/>
                      <span className="text-xs font-mono">172.16.30.0/24</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-500">
                  <strong className="text-blue-700">Area 0:</strong> Router0 ↔ Router1 (192.168.1.0/30)
                </div>
                <div className="bg-green-50 p-3 rounded border-l-4 border-green-500">
                  <strong className="text-green-700">Area 1:</strong> Router1 ↔ Router2 (192.168.2.0/30)
                </div>
              </div>
            </div>
          </section>

          {/* IP Addressing Scheme */}
          <section id="ip-scheme" className="mb-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center border-b pb-2">
                <Globe className="w-6 h-6 mr-2 text-blue-600" />
                IP Addressing Scheme
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-bold text-blue-700 mb-2">Area 0 - Branch Network 1</h3>
                  <ul className="space-y-1 text-sm">
                    <li><span className="font-mono">Router0 G0/0:</span> 192.168.1.1/30</li>
                    <li><span className="font-mono">Router1 G0/0:</span> 192.168.1.2/30</li>
                    <li><span className="font-mono">Router0 Loopback:</span> 10.0.0.1/32</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-bold text-green-700 mb-2">Area 1 - Branch Network 2</h3>
                  <ul className="space-y-1 text-sm">
                    <li><span className="font-mono">Router1 G0/1:</span> 192.168.2.1/30</li>
                    <li><span className="font-mono">Router2 G0/0:</span> 192.168.2.2/30</li>
                    <li><span className="font-mono">Router2 Loopback:</span> 10.0.0.2/32</li>
                  </ul>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h3 className="font-bold text-purple-700 mb-2">VLAN Networks</h3>
                  <ul className="space-y-1 text-sm">
                    <li><span className="font-mono">VLAN10 (HR):</span> 172.16.10.0/24 (GW: 172.16.10.1)</li>
                    <li><span className="font-mono">VLAN20 (Finance):</span> 172.16.20.0/24 (GW: 172.16.20.1)</li>
                    <li><span className="font-mono">VLAN30 (IT):</span> 172.16.30.0/24 (GW: 172.16.30.1)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Step-by-Step Configuration with Questions */}
          <section id="step-by-step" className="mb-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center border-b pb-2">
                <Settings className="w-6 h-6 mr-2 text-green-600" />
                Step-by-Step Configuration with Q&A
              </h2>
              
              {/* Step Navigation */}
              <div className="flex flex-wrap gap-2 mb-6">
                {[1, 2, 3, 4, 5].map((step) => (
                  <button
                    key={step}
                    onClick={() => setActiveStep(step)}
                    className={`px-4 py-2 rounded-lg transition ${
                      activeStep === step 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Step {step}: {stepConfigs[step].title.split(':')[0]}
                  </button>
                ))}
              </div>
              
              {/* Step Content */}
              <div className="border rounded-lg overflow-hidden mb-6">
                <div className="bg-gray-800 px-4 py-3">
                  <h3 className="text-white font-semibold">{stepConfigs[activeStep].title}</h3>
                  <p className="text-gray-300 text-sm">{stepConfigs[activeStep].description}</p>
                  <p className="text-gray-400 text-xs mt-1">Devices: {stepConfigs[activeStep].devices.join(', ')}</p>
                </div>
                <pre className="bg-gray-900 p-4 text-green-400 font-mono text-sm overflow-x-auto max-h-[400px] overflow-y-auto">
                  {stepConfigs[activeStep].commands.map((cmd, idx) => (
                    <div 
                      key={idx} 
                      className={`py-0.5 ${cmd.startsWith('!') ? 'text-gray-500' : 'hover:bg-gray-800 cursor-pointer'}`}
                      onClick={() => cmd && !cmd.startsWith('!') && cmd.trim() !== '' && copyToClipboard(cmd, `step${activeStep}`)}
                    >
                      {cmd || ' '}
                      {copiedCommand === `step${activeStep}-${cmd?.substring(0, 30)}` && (
                        <span className="text-green-400 ml-4 text-xs">✓ Copied!</span>
                      )}
                    </div>
                  ))}
                </pre>
              </div>
              
              {/* Learning Points */}
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h4 className="font-bold flex items-center mb-2">
                  <BookOpen className="w-4 h-4 mr-1 text-blue-600" />
                  Key Learning Points
                </h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {stepConfigs[activeStep].learningPoints.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
              
              {/* Questions and Answers */}
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-bold flex items-center mb-3">
                  <HelpCircle className="w-4 h-4 mr-1 text-yellow-600" />
                  {stepQuestions[activeStep].title}
                </h4>
                <div className="space-y-4">
                  {stepQuestions[activeStep].questions.map((q, idx) => (
                    <div key={q.id} className="border-b border-yellow-200 pb-3 last:border-0">
                      <p className="font-semibold text-gray-800 mb-2">
                        Q{idx + 1}: {q.question}
                      </p>
                      <button
                        onClick={() => toggleAnswer(q.id)}
                        className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
                      >
                        {showAnswers[q.id] ? <Eye className="w-3 h-3 mr-1" /> : <Eye className="w-3 h-3 mr-1" />}
                        {showAnswers[q.id] ? 'Hide Answer' : 'Show Answer'}
                      </button>
                      {showAnswers[q.id] && (
                        <div className="mt-2 p-3 bg-white rounded border border-green-200">
                          <p className="text-green-700 text-sm">{q.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Complete Device Configurations */}
          <section id="configurations" className="mb-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center border-b pb-2">
                <Terminal className="w-6 h-6 mr-2 text-orange-600" />
                Complete Device Configurations
              </h2>
              
              {/* Device Tabs */}
              <div className="flex flex-wrap gap-2 mb-4">
                {Object.entries(deviceFullConfigs).map(([key, device]) => (
                  <button
                    key={key}
                    onClick={() => setActiveDevice(key)}
                    className={`flex items-center px-3 py-2 rounded-lg text-sm transition ${
                      activeDevice === key 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {device.icon}
                    <span className="ml-2">{device.name.split(' - ')[0]}</span>
                  </button>
                ))}
              </div>
              
              {/* Configuration Display */}
              <div className="bg-gray-900 rounded-lg overflow-hidden">
                <div className="bg-gray-800 px-4 py-2 flex justify-between items-center">
                  <span className="text-white font-mono text-sm">{deviceFullConfigs[activeDevice].name}</span>
                  <button 
                    onClick={() => copyToClipboard(deviceFullConfigs[activeDevice].commands.join('\n'), activeDevice)}
                    className="text-gray-400 hover:text-white transition"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
                <pre className="p-4 text-green-400 font-mono text-sm overflow-x-auto max-h-[500px] overflow-y-auto">
                  {deviceFullConfigs[activeDevice].commands.map((cmd, idx) => (
                    <div 
                      key={idx} 
                      className={`py-0.5 ${cmd.startsWith('!') ? 'text-gray-500' : 'hover:bg-gray-800 cursor-pointer'}`}
                      onClick={() => cmd && !cmd.startsWith('!') && cmd.trim() !== '' && copyToClipboard(cmd, activeDevice)}
                    >
                      {cmd}
                      {copiedCommand === `${activeDevice}-${cmd?.substring(0, 30)}` && (
                        <span className="text-green-400 ml-4 text-xs">✓ Copied!</span>
                      )}
                    </div>
                  ))}
                </pre>
              </div>
            </div>
          </section>

          {/* Verification Commands */}
          <section id="verification" className="mb-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center border-b pb-2">
                <CheckCircle className="w-6 h-6 mr-2 text-green-600" />
                Verification Commands
              </h2>
              
              <button
                onClick={() => setShowVerification(!showVerification)}
                className="mb-4 flex items-center text-blue-600 hover:text-blue-800"
              >
                <Eye className="w-4 h-4 mr-1" />
                {showVerification ? 'Hide Expected Outputs' : 'Show Expected Outputs'}
              </button>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {verificationCommands.map((category, idx) => (
                  <div key={idx} className="border rounded-lg overflow-hidden">
                    <div className="bg-gray-100 px-3 py-2 font-semibold flex items-center">
                      {category.icon}
                      <span className="ml-2">{category.category}</span>
                    </div>
                    <div className="p-3 space-y-2">
                      {category.commands.map((cmd, cmdIdx) => (
                        <div key={cmdIdx}>
                          <code 
                            className="block bg-gray-50 p-2 rounded text-sm font-mono cursor-pointer hover:bg-gray-100"
                            onClick={() => copyToClipboard(cmd, 'verify')}
                          >
                            {cmd}
                          </code>
                          {showVerification && (
                            <div className="text-xs text-green-600 mt-1 ml-2">
                              ✓ Expected: Success
                            </div>
                          )}
                          {copiedCommand === `verify-${cmd}` && (
                            <span className="text-green-600 text-xs ml-2">Copied!</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-bold mb-2 flex items-center">
                  <CheckCircle className="w-4 h-4 mr-1 text-green-600" />
                  Verification Checklist
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>✓ <strong>show vlan brief:</strong> Should display VLANs 10, 20, 30 with names HR, Finance, IT</li>
                  <li>✓ <strong>show vtp status:</strong> Server mode on Switch0, Client mode on Switch1, Domain: ENTERPRISE</li>
                  <li>✓ <strong>show interfaces trunk:</strong> Trunk ports should allow VLANs 10,20,30 only</li>
                  <li>✓ <strong>show ip ssh:</strong> SSH version 2 should be enabled</li>
                  <li>✓ <strong>show ip ospf neighbor:</strong> OSPF neighbors should be FULL/DR state</li>
                  <li>✓ <strong>ping between VLANs:</strong> Successful connectivity across different VLANs</li>
                  <li>✓ <strong>ping between Areas:</strong> Successful connectivity between Area 0 and Area 1</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Quiz Section */}
          <section id="quiz" className="mb-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center border-b pb-2">
                <Award className="w-6 h-6 mr-2 text-yellow-600" />
                Knowledge Check Quiz
              </h2>
              <p className="text-gray-600 mb-4">Test your understanding of the network configuration concepts!</p>
              
              <div className="space-y-4">
                {Object.entries(quizQuestions).map(([qId, q], idx) => (
                  <div key={qId} className="border rounded-lg p-4 bg-gray-50">
                    <p className="font-semibold text-gray-800 mb-3">
                      {idx + 1}. {q.question}
                    </p>
                    <div className="space-y-2">
                      {q.options.map((option, optIdx) => (
                        <label key={optIdx} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="radio"
                            name={qId}
                            value={option}
                            checked={quizAnswers[qId] === option}
                            onChange={() => handleQuizAnswer(qId, option)}
                            className="w-4 h-4 text-blue-600"
                          />
                          <span className="text-sm text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                    {quizAnswers[qId] && quizAnswers[qId] !== q.correct && (
                      <p className="text-red-600 text-sm mt-2">❌ Incorrect. The correct answer is: {q.correct}</p>
                    )}
                    {quizAnswers[qId] === q.correct && (
                      <p className="text-green-600 text-sm mt-2">✓ Correct!</p>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-6 flex justify-between items-center">
                <button
                  onClick={() => {
                    setShowQuizResults(true);
                    setTimeout(() => setShowQuizResults(false), 5000);
                  }}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Submit Quiz
                </button>
                {showQuizResults && (
                  <div className="bg-green-100 p-3 rounded-lg">
                    <p className="font-bold text-green-800">
                      Your Score: {calculateQuizScore()} / {Object.keys(quizQuestions).length}
                      ({Math.round((calculateQuizScore() / Object.keys(quizQuestions).length) * 100)}%)
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Credentials Summary */}
          <section className="mb-8">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-md p-6 text-white">
              <h2 className="text-xl font-bold mb-3 flex items-center">
                <Key className="w-5 h-5 mr-2" />
                Access Credentials Summary
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/20 rounded-lg p-3">
                  <p className="font-semibold">SSH / Enable Access:</p>
                  <p className="font-mono text-sm">Username: <span className="font-bold">admin</span></p>
                  <p className="font-mono text-sm">Password: <span className="font-bold">cisco@123</span></p>
                  <p className="font-mono text-sm">Enable Secret: <span className="font-bold">cisco@123</span></p>
                </div>
                <div className="bg-white/20 rounded-lg p-3">
                  <p className="font-semibold">VTP Configuration:</p>
                  <p className="font-mono text-sm">Domain: <span className="font-bold">ENTERPRISE</span></p>
                  <p className="font-mono text-sm">Version: <span className="font-bold">2</span></p>
                  <p className="font-mono text-sm">Password: <span className="font-bold">vtp@123</span></p>
                </div>
              </div>
              <div className="mt-4 text-sm bg-blue-800/50 p-3 rounded">
                <p className="flex items-center"><Lock className="w-4 h-4 mr-1" /> Security: All VTY lines restricted to SSH only - Telnet disabled</p>
                <p className="flex items-center mt-1"><Zap className="w-4 h-4 mr-1" /> OSPF: Area 0 and Area 1 configured with OSPF ID 1</p>
              </div>
            </div>
          </section>

          {/* Configuration Summary Table */}
          <section className="mb-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center border-b pb-2">
                <Database className="w-6 h-6 mr-2 text-purple-600" />
                Configuration Summary
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="p-3 text-left">Device</th>
                      <th className="p-3 text-left">Role</th>
                      <th className="p-3 text-left">OSPF Area</th>
                      <th className="p-3 text-left">VTP Mode</th>
                      <th className="p-3 text-left">SSH</th>
                      <th className="p-3 text-left">VLANs</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-mono font-semibold">Router0</td>
                      <td>Branch Router 1</td>
                      <td><span className="bg-blue-100 px-2 py-1 rounded">Area 0</span></td>
                      <td>-</td>
                      <td><Lock className="w-4 h-4 text-green-600 inline" /> Enabled</td>
                      <td>-</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-mono font-semibold">Router1</td>
                      <td>HQ Router</td>
                      <td><span className="bg-purple-100 px-2 py-1 rounded">Area 0 & 1</span></td>
                      <td>-</td>
                      <td><Lock className="w-4 h-4 text-green-600 inline" /> Enabled</td>
                      <td>-</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-mono font-semibold">Router2</td>
                      <td>Branch Router 2</td>
                      <td><span className="bg-green-100 px-2 py-1 rounded">Area 1</span></td>
                      <td>-</td>
                      <td><Lock className="w-4 h-4 text-green-600 inline" /> Enabled</td>
                      <td>-</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-mono font-semibold">Switch0</td>
                      <td>Access Switch</td>
                      <td>-</td>
                      <td><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Server</span></td>
                      <td><Lock className="w-4 h-4 text-green-600 inline" /> Enabled</td>
                      <td>10, 20, 30</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-3 font-mono font-semibold">Switch1</td>
                      <td>Access Switch</td>
                      <td>-</td>
                      <td><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Client</span></td>
                      <td><Lock className="w-4 h-4 text-green-600 inline" /> Enabled</td>
                      <td>10, 20, 30</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-300 py-6">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-sm">NATIONAL FORENSIC SCIENCES UNIVERSITY - MBA Cyber Security Management</p>
            <p className="text-xs mt-2">Cyber Security Essentials | Enterprise Network Configuration Solution</p>
            <p className="text-xs mt-1">OSPF Dynamic Routing | VTP VLAN Management | SSH Secure Access</p>
          </div>
        </footer>
      </div>
    </>
  );
}