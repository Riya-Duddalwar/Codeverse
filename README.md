# CODEVERSE 2.0

> **DJS CodeAI Presents**  
> *"It’s more than just a coding challenge: It’s a battle of logic, speed, and problem-solving."*

---

## About

**CodeVerse 2.0** is an immersive, high-stakes coding challenge event hosted by **DJS CodeAI** on **9th October 2026**.

**DJS CodeAI** is a student-led community dedicated to exploring the frontiers of artificial intelligence and coding, bringing together passionate individuals to:
- **LEARN**: Master algorithms, architecture, and technical problem-solving.
- **CREATE**: Engineer resilient software systems and rapid prototypes.
- **INNOVATE**: Push the boundaries of logic and computer science.

The community connects **IDEAS**, **PEOPLE**, and **OPPORTUNITIES** with the ultimate mission of **turning learning into real-world impact**.

---

## Event Details

| Detail | Official Specification |
| :--- | :--- |
| **Event Name** | CodeVerse 2.0 |
| **Organizer** | DJS CodeAI |
| **Date** | 9th October 2026 |
| **Event Capacity** | 40 Teams |
| **Team Size** | 3 Participants per Team |
| **Total Participants** | 120 Aspiring Technologists |
| **Registration Fee** | ₹99 per team |
| **Total Prize Pool** | **₹25,000** |
| **1st Prize (Grand Winner)** | ₹12,000 |
| **2nd Prize (First Runner Up)** | ₹8,000 |
| **3rd Prize (Second Runner Up)** | ₹5,000 |

---

## Mission

```
DETECT  ▸  DEBUG  ▸  REBUILD  ▸  RESTORE
```

Participants are challenged to:
1. **Solve Challenges**: Unravel complex algorithmic and architectural problems.
2. **Fix Bugs**: Trace and resolve subtle defects under high-pressure conditions.
3. **Think Under Pressure**: Collaborate rapidly with their squad as the countdown advances.

---

## Visual Direction & Aesthetic

Inspired directly by the official **CodeVerse 2.0 brochure** and the detective investigation board sequence:
- **Palette**: Deep Tactical Black (`#08080a`), Vivid CodeVerse Red (`#e50914`), and Warm Paper Cream (`#f4f0e8`).
- **Motifs**: Torn paper edges, semi-translucent scotch tape, pushpin evidence nodes, red connecting thread lines, halftone dot textures, and confidential mission dossiers.
- **Typography**: Display headlines with `Syne`, body with `Outfit`, and telemetry with `JetBrains Mono`.

---

## Frame Animation

The website's primary visual identity is powered by a scroll-controlled canvas frame sequence using the 60 high-resolution frames located in `/public/frames`:

1. **Page Load**: Starts at the initial evidence board overview.
2. **Scroll Progress**: As the user scrolls down, the sticky 100vh viewport scrubs through the 60 frames via `requestAnimationFrame` with sub-pixel DPR scaling and aspect-ratio preservation.
3. **Visual Story Unfolds**: The camera zooms across paper clippings, evidence threads, and focuses on the masked investigator character on the **LEFT** side.
4. **Cinematic Hero Reveal**: As the animation reaches completion, the event information on the **RIGHT** side reveals with a staggered blur-to-focus animation:
   - Event organizer badge
   - `CODEVERSE 2.0` title
   - Official tagline & mission
   - Event date (9th October 2026)
   - `[ REGISTER NOW ]` and `[ LEARN MORE ]` action buttons.
5. **Learn More Transition**: Clicking `[ LEARN MORE ]` smoothly scrolls the page downward, transitioning the entire hero experience upward and revealing the main website content world.

---

## Tech Stack

- **Core**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) + [Vite 6](https://vitejs.dev/)
- **Styling**: Vanilla CSS Design System with CSS Custom Properties, modular stylesheets (`variables.css`, `globals.css`, `animations.css`, `responsive.css`)
- **Animation**: Canvas 2D frame scrubber, `requestAnimationFrame`, CSS keyframes, SVG connecting lines
- **Icons**: [Lucide React](https://lucide.dev/)
- **Audio**: Web Audio API synth feedback + ambient soundtrack player

---

## Project Structure

```
codeverse/
├── public/
│   ├── audio/                      # Ambient event audio track
│   ├── frames/                     # 60 official sequence frames (.webp)
│   ├── CodeAi Logo.png             # Official DJS CodeAI logo
│   └── favicon.svg                 # CodeVerse favicon
├── src/
│   ├── components/
│   │   ├── AboutSection.tsx        # "About CodeAI" with pillars & connections
│   │   ├── Cursor.tsx              # Tactical custom reticle cursor
│   │   ├── DomainsSection.tsx      # Data-driven domains / classified state
│   │   ├── EventOverview.tsx       # "Solve challenges, fix bugs, think under pressure"
│   │   ├── FAQSection.tsx          # Accordion with verified official Q&As
│   │   ├── Footer.tsx              # Brand footer, navigation & copyright
│   │   ├── Hero.tsx                # Cinematic canvas frame animation & reveal
│   │   ├── HomeMission.tsx         # "Detect, Debug, Rebuild, Restore"
│   │   ├── Navbar.tsx              # Floating pill navbar with persistent CTAs
│   │   ├── PartnershipSection.tsx  # "Become a Partner" & outreach
│   │   ├── PhasesSection.tsx       # Interactive dual-phase (Phase 1 & Phase 2)
│   │   ├── PrizesSection.tsx       # Official ₹25,000 prize pool podium
│   │   ├── StatsSection.tsx        # 40 teams, 120 participants, ₹99 fee
│   │   ├── TimelineSection.tsx     # 09 OCT 2026 confirmed event date
│   │   └── UrlModal.tsx            # Graceful modal for external registration / rulebook
│   ├── data/
│   │   ├── eventData.ts            # CENTRALIZED SOURCE OF TRUTH
│   │   └── framesData.ts           # 60-frame path manifest
│   ├── hooks/
│   │   ├── useAudio.ts             # Soundtrack & tactical SFX hook
│   │   ├── useFrameAnimation.ts    # High-performance canvas frame hook
│   │   └── useScrollProgress.ts    # Window scroll progress tracking
│   ├── pages/
│   │   └── Home.tsx                # Master page layout
│   ├── styles/
│   │   ├── animations.css          # Motion tokens & keyframes
│   │   ├── globals.css             # Base styles, paper effects, pushpins
│   │   ├── responsive.css          # Tablet & mobile breakpoints
│   │   └── variables.css           # Color tokens & typography
│   ├── App.tsx                     # Main application entry
│   └── main.tsx                    # React DOM root
├── index.html                      # HTML root template with Google Fonts
├── package.json                    # Dependencies and scripts
├── tsconfig.json                   # TypeScript configuration
└── vite.config.ts                  # Vite build configuration
```

---

## Centralized Event Data (`src/data/eventData.ts`)

All official event information is managed centrally in [`src/data/eventData.ts`](file:///c:/Users/Duddalwar/OneDrive/Desktop/codeverse/src/data/eventData.ts). No event details are hardcoded across disparate components.

### Updating Links

To link the official **Unstop registration** or **Rulebook PDF**, modify the following fields in `src/data/eventData.ts`:

```typescript
// src/data/eventData.ts

export const eventData = {
  // ...
  registrationUrl: "https://unstop.com/o/YOUR_CODEVERSE_LINK", // Paste official Unstop link here
  rulebookUrl: "https://your-domain.com/rulebook.pdf",          // Paste official rulebook URL here
  // ...
};
```

Once updated, both navbar buttons, hero CTAs, and footer links will automatically redirect to the designated URLs.

---

## Running Locally

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production build
```bash
npm run build
```

### 4. Preview production build
```bash
npm run preview
```

---

## License & Credits

- **Event**: CODEVERSE 2.0
- **Organizer**: DJS CodeAI
- **Date**: 9th October 2026
- **Copyright**: © 2026 DJS CodeAI. All Rights Reserved.
