export interface EventTrack {
  id: string;
  title: string;
  codename: string;
  description: string;
  icon: string;
  bounty: string;
  skills: string[];
}

export interface Sponsor {
  name: string;
  tier: 'Platinum Partner' | 'Gold Vault' | 'Silver Syndicate' | 'Community Ally';
  logo: string;
  link: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const EVENT_DATA = {
  title: "CODEVERSE 2.0",
  subtitle: "OPERATION: DIGITAL VAULT",
  tagline: "The Ultimate 36-Hour Heist Hackathon",
  date: "OCTOBER 24 - 26, 2026",
  mode: "Hybrid (In-Person & Global Remote)",
  location: "Silicon Vault HQ & Metaverse",
  totalPrizePool: "₹5,00,000+",
  participantsCount: "1,500+ Operatives",
  hoursCount: "36 Continuous Hours",
  
  about: {
    story: "The central mainframe of traditional computing is fortified, but full of vulnerabilities. Codeverse 2.0 calls upon the world's most cunning developers, designers, and cyber architects to assemble in squads, breach innovation barriers, and crack next-generation solutions.",
    mission: "Assemble your elite crew of 2-4 hackers. Execute high-impact prototypes across AI, Web3, Cyber Defense, and Spatial Computing before the 36-hour countdown reaches zero."
  },

  tracks: [
    {
      id: "track-ai",
      title: "Agentic AI & Neural Systems",
      codename: "THE MASTERMIND",
      description: "Engineer autonomous AI agents, multi-modal reasoning engines, and LLM-powered heist tools that outsmart conventional algorithms.",
      icon: "Cpu",
      bounty: "₹1,50,000",
      skills: ["LangChain", "LLMs", "Autonomous Agents", "Vector DBs"]
    },
    {
      id: "track-web3",
      title: "Decentralized Vaults & DeFi",
      codename: "THE SAFE-CRACKER",
      description: "Build censorship-resistant dApps, zero-knowledge verification protocols, and smart contracts that secure high-stakes transactions.",
      icon: "ShieldCheck",
      bounty: "₹1,25,000",
      skills: ["Solidity", "Zero-Knowledge", "Rust", "EVM"]
    },
    {
      id: "track-cyber",
      title: "Cyber Defense & Stealth Tech",
      codename: "THE GHOST PROTOCOL",
      description: "Craft zero-day defense tools, offensive security sandboxes, honey pots, and encrypted telemetry pipelines.",
      icon: "Terminal",
      bounty: "₹1,25,000",
      skills: ["Reverse Engineering", "Cryptography", "Network Security"]
    },
    {
      id: "track-open",
      title: "Open Innovation & FinTech",
      codename: "THE WILDCARD",
      description: "Disrupt modern banking, healthcare, developer tooling, or planetary computing with unorthodox breakthroughs.",
      icon: "Zap",
      bounty: "₹1,00,000",
      skills: ["Full Stack", "Cloud Native", "Fintech APIs", "Mobile"]
    }
  ] as EventTrack[],

  sponsors: [
    { name: "Apex Cloud Systems", tier: "Platinum Partner", logo: "☁️", link: "#" },
    { name: "Nova AI Labs", tier: "Platinum Partner", logo: "🤖", link: "#" },
    { name: "VaultSec Global", tier: "Gold Vault", logo: "🛡️", link: "#" },
    { name: "EtherScale", tier: "Gold Vault", logo: "💎", link: "#" },
    { name: "Supabase", tier: "Silver Syndicate", logo: "⚡", link: "#" },
    { name: "GitHub Education", tier: "Silver Syndicate", logo: "🐙", link: "#" },
    { name: "Devfolio", tier: "Community Ally", logo: "🚀", link: "#" }
  ] as Sponsor[],

  faqs: [
    {
      question: "Who is eligible to join this heist?",
      answer: "Any student, developer, designer, or tech enthusiast worldwide is eligible. Both beginners and seasoned veterans are welcome!"
    },
    {
      question: "What is the team size requirement?",
      answer: "Squads must consist of 2 to 4 members. Solo hackers can use our discord matchmaking channel to assemble their crew."
    },
    {
      question: "Is there any registration fee?",
      answer: "Zero entry fee! Codeverse 2.0 is completely free of charge thanks to our syndicate partners."
    },
    {
      question: "Are hardware projects and remote participation allowed?",
      answer: "Yes! Codeverse 2.0 is hybrid. Remote squads will have live mentor support, streaming stages, and digital submission portals."
    }
  ] as FAQItem[]
};
