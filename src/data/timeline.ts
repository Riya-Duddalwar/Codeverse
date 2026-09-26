export interface TimelineEvent {
  phase: string;
  time: string;
  date: string;
  title: string;
  description: string;
  status: 'upcoming' | 'active' | 'completed';
}

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    phase: "PHASE 01",
    time: "10:00 AM IST",
    date: "OCTOBER 24, 2026",
    title: "Mission Briefing & Check-in",
    description: "Opening keynote by The Professor, squad check-in, credentials verification, and secret theme reveal.",
    status: "upcoming"
  },
  {
    phase: "PHASE 02",
    time: "12:00 PM IST",
    date: "OCTOBER 24, 2026",
    title: "The Mainframe Breach Begins",
    description: "Hacking officially kicks off. Repositories initialize, cloud credit redemption unlocks, and mentors enter squad channels.",
    status: "upcoming"
  },
  {
    phase: "PHASE 03",
    time: "08:00 PM IST",
    date: "OCTOBER 24, 2026",
    title: "Checkpoint 1: Architecture Review",
    description: "Mentors review squad blueprints, API integrations, and give strategic direction.",
    status: "upcoming"
  },
  {
    phase: "PHASE 04",
    time: "02:00 AM IST",
    date: "OCTOBER 25, 2026",
    title: "Midnight Heist Mini-Games & Red Bull Rush",
    description: "Cyber CTF challenges, gaming tournaments, midnight pizza, and surprise speed-coding bounties.",
    status: "upcoming"
  },
  {
    phase: "PHASE 05",
    time: "12:00 PM IST",
    date: "OCTOBER 25, 2026",
    title: "Checkpoint 2: Prototype Alpha Freeze",
    description: "Mid-way progress demo and pitch coaching with venture scouts and senior architects.",
    status: "upcoming"
  },
  {
    phase: "PHASE 06",
    time: "11:59 PM IST",
    date: "OCTOBER 25, 2026",
    title: "Code Freeze & Final Vault Commit",
    description: "All GitHub repositories lock. Video demos and pitch decks must be submitted to the vault portal.",
    status: "upcoming"
  },
  {
    phase: "PHASE 07",
    time: "10:00 AM IST",
    date: "OCTOBER 26, 2026",
    title: "Live Grand Pitch & Victory Heist Ceremony",
    description: "Top 10 finalist squads present live to the jury. Winners crowned and bounties disbursed.",
    status: "upcoming"
  }
];
