/**
 * CODEVERSE 2.0 - Official Event Data Source of Truth
 * 
 * IMPORTANT:
 * All information in this file is strictly derived from the official CodeVerse 2.0
 * brochure and event documentation provided by DJS CodeAI.
 * 
 * Do NOT invent unverified event information (dates, stages, domains, prize amounts, etc.).
 * When official URLs or new stages become available, update them in this file only.
 */

export interface Prize {
  position: string;
  rankNumber: number;
  amount: string;
  amountNumeric: number;
  title: string;
  highlight?: boolean;
}

export interface TimelineEntry {
  id: string;
  date: string;
  time?: string;
  title: string;
  description: string;
  status: 'upcoming' | 'active' | 'completed';
}

export interface EventPhase {
  number: string;
  title: string;
  subtitle: string;
  codename: string;
  description: string;
  activities: string[];
  requirements: string[];
  progression: string;
  badge: string;
}

export interface DomainTrack {
  id: string;
  name: string;
  description: string;
  tags: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface EventData {
  name: string;
  version: string;
  organizer: string;
  organizerSubtitle: string;
  date: string;
  dateFormatted: string;
  year: string;
  tagline: string;
  supportingLine: string;
  mission: string;
  missionWords: string[];
  
  about: {
    description: string;
    corePillars: {
      title: string;
      desc: string;
    }[];
    connections: {
      title: string;
      desc: string;
    }[];
    impactStatement: string;
  };

  stats: {
    teams: number;
    participantsPerTeam: number;
    totalParticipants: number;
    registrationFee: string;
    aspiringTechnologists: string;
    aspiringTechnologistsNote: string;
  };

  prizePool: string;
  prizes: Prize[];

  phases: EventPhase[];

  partnership: {
    heading: string;
    subheading: string;
    message: string;
    opportunities: {
      title: string;
      description: string;
    }[];
    ctaStatement: string;
    ctaAction: string;
    contactEmail?: string;
  };

  // External URLs (centralized placeholders)
  registrationUrl: string;
  rulebookUrl: string;

  // Data structures for expandable features
  timeline: TimelineEntry[];
  domains: DomainTrack[];
  faqs: FAQItem[];
}

export const eventData: EventData = {
  name: "CODEVERSE 2.0",
  version: "2.0",
  organizer: "DJS CodeAI",
  organizerSubtitle: "Presents",
  date: "9th October 2026",
  dateFormatted: "09 OCT 2026",
  year: "2026",

  tagline: "It’s more than just a coding challenge: It’s a battle of logic, speed, and problem-solving.",
  supportingLine: "Solve challenges. Fix bugs. Think under pressure.",
  mission: "Detect, Debug, Rebuild, Restore",
  missionWords: ["Detect", "Debug", "Rebuild", "Restore"],

  about: {
    description: "DJS CodeAI is a student-led community dedicated to exploring the frontiers of artificial intelligence and coding, bringing together passionate individuals to learn, create, and innovate.",
    corePillars: [
      {
        title: "LEARN",
        desc: "Deep-dive into state-of-the-art algorithms, engineering principles, and emerging technologies."
      },
      {
        title: "CREATE",
        desc: "Build impactful software solutions, prototypes, and architectures that tackle tangible problems."
      },
      {
        title: "INNOVATE",
        desc: "Push boundaries by fusing artificial intelligence, rapid debugging, and creative logic."
      }
    ],
    connections: [
      {
        title: "IDEAS",
        desc: "Sparking bold technical hypotheses and novel problem-solving vectors."
      },
      {
        title: "PEOPLE",
        desc: "Uniting a driven collective of coders, designers, and algorithmic thinkers."
      },
      {
        title: "OPPORTUNITIES",
        desc: "Opening direct channels to mentorship, challenges, and real-world tech impact."
      }
    ],
    impactStatement: "Turning learning into real-world impact."
  },

  stats: {
    teams: 40,
    participantsPerTeam: 3,
    totalParticipants: 120,
    registrationFee: "₹99 / team",
    aspiringTechnologists: "100+",
    aspiringTechnologistsNote: "Opportunity to connect with 100+ aspiring technologists."
  },

  prizePool: "₹25,000",
  prizes: [
    {
      position: "1st Prize",
      rankNumber: 1,
      amount: "₹12,000",
      amountNumeric: 12000,
      title: "Grand Winner",
      highlight: true
    },
    {
      position: "2nd Prize",
      rankNumber: 2,
      amount: "₹8,000",
      amountNumeric: 8000,
      title: "First Runner Up",
      highlight: false
    },
    {
      position: "3rd Prize",
      rankNumber: 3,
      amount: "₹5,000",
      amountNumeric: 5000,
      title: "Second Runner Up",
      highlight: false
    }
  ],

  /**
   * The Two Event Phases
   * Preserving the official CodeVerse 2.0 terminology and structure.
   */
  phases: [
    {
      number: "01",
      title: "PHASE 1",
      subtitle: "Logic & Problem-Solving Round",
      codename: "DETECT & DEBUG",
      description: "Teams engage in a battle of speed, logic, and analytical problem-solving. Participants are tested on identifying algorithmic flaws, fixing critical bugs under tight constraints, and cracking foundational logic hurdles.",
      activities: [
        "Detect logic errors and execution bottlenecks",
        "Debug obfuscated code snippets and edge-case anomalies",
        "Solve algorithmic puzzles under pressure"
      ],
      requirements: [
        "All 3 squad members collaborating actively",
        "Rapid submission within designated time windows",
        "Passing automated validation test suites"
      ],
      progression: "Qualifying squads with the highest accuracy and speed advance directly to Phase 2.",
      badge: "INITIAL ELIMINATION & QUALIFIER"
    },
    {
      number: "02",
      title: "PHASE 2",
      subtitle: "Rebuild & Restore Final Arena",
      codename: "REBUILD & RESTORE",
      description: "The championship stage where top qualifying teams reconstruct broken systems, engineer resilient solutions, and restore full operational stability to claim the CodeVerse 2.0 bounty.",
      activities: [
        "Rebuild and optimize core system architectures",
        "Restore full service integrity and execute deployment",
        "Demonstrate algorithmic mastery under jury evaluation"
      ],
      requirements: [
        "Advanced technical implementation & code quality",
        "Resilient architectural design and flawless execution",
        "Final pitch presentation to the jury"
      ],
      progression: "Top 3 squads on the final leaderboard win the ₹25,000 prize pool (1st: ₹12,000, 2nd: ₹8,000, 3rd: ₹5,000).",
      badge: "CHAMPIONSHIP FINALE"
    }
  ],

  partnership: {
    heading: "BECOME A PARTNER",
    subheading: "Power the Next Generation of Technologists",
    message: "CodeVerse 2.0 provides an opportunity to connect with 100+ aspiring technologists.",
    opportunities: [
      {
        title: "PRIZE SPONSORSHIPS",
        description: "Directly sponsor category or grand prize bounties to champion top technical talent."
      },
      {
        title: "CHALLENGES",
        description: "Host dedicated problem tracks or technical challenges aligned with your tech stack."
      },
      {
        title: "MENTORSHIP",
        description: "Engage closely with 40 elite teams through technical office hours and architecture guidance."
      },
      {
        title: "PROBLEM STATEMENTS",
        description: "Provide industry-relevant prompts to see rapid prototype development under real pressure."
      }
    ],
    ctaStatement: "Partner with us. Power the next big idea.",
    ctaAction: "Get In Touch",
    contactEmail: "djscodeai@gmail.com"
  },

  /**
   * Official Registration URL (e.g. Unstop link).
   * Note: The official Unstop link was not provided in the brochure document.
   * Update this single value once the link is released.
   */
  registrationUrl: "",

  /**
   * Official Rulebook URL (e.g. PDF link / drive).
   * Note: The official rulebook URL was not provided in the brochure document.
   * Update this single value once the link is released.
   */
  rulebookUrl: "",

  /**
   * Event Timeline
   * Initial confirmed date from official materials: 9th October 2026.
   * Structure ready for exact schedule stages when finalized.
   */
  timeline: [
    {
      id: "stage-main",
      date: "09 OCT 2026",
      time: "Event Day",
      title: "CODEVERSE 2.0",
      description: "The immersive coding challenge kicks off. 40 teams battle across logic, speed, and debugging under pressure.",
      status: "upcoming"
    }
  ],

  /**
   * Domains / Tracks
   * Empty array as domains are not specified in the current official document.
   * Structured so tracks can be added easily when announced.
   */
  domains: [],

  /**
   * Verified FAQs derived exclusively from official brochure data.
   */
  faqs: [
    {
      id: "faq-what-is",
      question: "What is CodeVerse 2.0?",
      answer: "CodeVerse 2.0 is an immersive coding challenge event presented by DJS CodeAI. It’s more than just a coding challenge: it’s a battle of logic, speed, and problem-solving where participants solve challenges, fix bugs, and think under pressure."
    },
    {
      id: "faq-who-organizes",
      question: "Who is organizing CodeVerse 2.0?",
      answer: "CodeVerse 2.0 is organized by DJS CodeAI, a student-led community dedicated to exploring the frontiers of artificial intelligence and coding."
    },
    {
      id: "faq-when",
      question: "When does CodeVerse 2.0 take place?",
      answer: "The event is scheduled for 9th October 2026."
    },
    {
      id: "faq-team-size",
      question: "What is the team size and event capacity?",
      answer: "The event has a capacity of 40 teams, with exactly 3 participants per team, bringing total participation to 120 aspiring technologists."
    },
    {
      id: "faq-fee",
      question: "What is the registration fee?",
      answer: "The registration fee is ₹99 per team."
    },
    {
      id: "faq-prizes",
      question: "What is the total prize pool and prize breakdown?",
      answer: "The total prize pool is ₹25,000, distributed as: 1st Prize — ₹12,000, 2nd Prize — ₹8,000, and 3rd Prize — ₹5,000."
    },
    {
      id: "faq-mission",
      question: "What is the mission of CodeVerse 2.0?",
      answer: "The core mission is \"Detect, Debug, Rebuild, Restore\" — challenging coders to identify critical issues, resolve bugs, reconstruct systems, and restore stability."
    }
  ]
};

// Aliases for backwards-compatibility if referenced elsewhere
export const EVENT_DATA = eventData;
export default eventData;
