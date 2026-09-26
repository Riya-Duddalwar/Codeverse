export interface RuleCategory {
  category: string;
  codename: string;
  items: string[];
}

export const RULES_DATA: RuleCategory[] = [
  {
    category: "Code of Conduct & Ethics",
    codename: "HONOR AMONG THIEVES",
    items: [
      "Respect all operatives, mentors, judges, and staff. Harassment or toxic behavior will result in immediate disqualification.",
      "Collaboration and cross-squad support are welcomed, but code submissions must remain distinct and proprietary.",
      "Any form of plagiarism or pre-built complete projects is strictly forbidden."
    ]
  },
  {
    category: "Squad Formation & Logistics",
    codename: "THE HEIST CREW",
    items: [
      "Squads must consist of 2 to 4 registered operatives.",
      "Cross-institutional and international squads are fully permitted.",
      "Every operative must be present during the live online/offline verification phase."
    ]
  },
  {
    category: "Development & Submission Protocols",
    codename: "THE VAULT DRILL",
    items: [
      "All code must be authored during the 36-hour hackathon window.",
      "Open-source libraries, public frameworks, and pre-trained foundation models are permitted if declared in the README.",
      "Final submission must include a working repository link, demo video (max 3 mins), and architecture documentation."
    ]
  },
  {
    category: "Judging Matrix & Bounty Evaluation",
    codename: "THE APPRAISAL",
    items: [
      "Innovation & Originality (30%): Uniqueness and creative problem-solving.",
      "Technical Execution & Architecture (30%): Code quality, complexity, stability.",
      "Design & User Experience (20%): Polish, ergonomics, intuitive flows.",
      "Impact & Market Viability (20%): Potential real-world disruption."
    ]
  }
];
