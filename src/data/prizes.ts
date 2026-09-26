export interface PrizeItem {
  id: string;
  rank: string;
  title: string;
  amount: string;
  badge: string;
  perks: string[];
  highlight?: boolean;
}

export const PRIZES_DATA: PrizeItem[] = [
  {
    id: "grand-heist",
    rank: "1st Place",
    title: "The Master Heist Bounty",
    amount: "₹2,00,000",
    badge: "GRAND CHAMPION",
    highlight: true,
    perks: [
      "₹2,00,000 Direct Cash Prize",
      "Direct Interview Fast-Track with VC & Tier-1 Sponsors",
      "Custom Engraved Heist Trophy & Gold Medals",
      "Exclusive Codeverse 2.0 Operative Swag Box",
      "Cloud Credits worth $10,000"
    ]
  },
  {
    id: "second-heist",
    rank: "2nd Place",
    title: "The Syndicate Runner-Up",
    amount: "₹1,25,000",
    badge: "SILVER VAULT",
    perks: [
      "₹1,25,000 Direct Cash Prize",
      "Direct Sponsor Mentorship & Fast-Track Interviews",
      "Custom Silver Medals & Official Certificates",
      "Exclusive Cyber Swag Kit",
      "Cloud Credits worth $5,000"
    ]
  },
  {
    id: "third-heist",
    rank: "3rd Place",
    title: "The Cyber Safe-Cracker",
    amount: "₹75,000",
    badge: "BRONZE VAULT",
    perks: [
      "₹75,000 Direct Cash Prize",
      "Sponsor Goodies & Swag Hampers",
      "Custom Bronze Medals & Official Certificates",
      "Cloud Credits worth $2,500"
    ]
  },
  {
    id: "all-women-heist",
    rank: "Special Bounty",
    title: "Best All-Women Squad",
    amount: "₹35,000",
    badge: "WOMEN IN TECH",
    perks: [
      "₹35,000 Cash Prize",
      "Leadership Mentorship Sessions",
      "Exclusive Swag & Pro Subscriptions"
    ]
  },
  {
    id: "best-beginner",
    rank: "Special Bounty",
    title: "Best Rookie Squad",
    amount: "₹25,000",
    badge: "RISING HACKERS",
    perks: [
      "₹25,000 Cash Prize",
      "Starter Developer Kits & Courses",
      "Official Merit Certificates"
    ]
  },
  {
    id: "most-innovative",
    rank: "Special Bounty",
    title: "Most Disruptive UI/UX",
    amount: "₹20,000",
    badge: "DESIGN MASTERY",
    perks: [
      "₹20,000 Cash Prize",
      "Design Tool Pro Licenses & Badges"
    ]
  }
];
