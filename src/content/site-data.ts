/**
 * All page content lives here. To add a new piece of work, add an
 * object to the relevant array below — nothing else needs to change.
 * Entries render in array order (most recent first is the convention
 * used below, but it's not enforced).
 */

export type Link = {
  label: string;
  href: string;
};

export type Entry = {
  /** Catalog code shown in the margin, e.g. "SWE 01". Keep the prefix
   *  consistent within a section; bump the number for new entries. */
  code: string;
  title: string;
  org?: string;
  /** e.g. "Apr 2026 — Present" or "2025" */
  period: string;
  summary: string;
  stack?: string[];
  links?: Link[];
};

export type ScreenshotProject = {
  title: string;
  period: string;
  description: string;
  /** Paths under /public, e.g. ["/screenshots/consnow-1.png"]. Leave
   *  empty to show a placeholder tile; list more than one to get a
   *  carousel. */
  images?: string[];
  stack?: string[];
  links?: Link[];
};

export type FieldNote = {
  title: string;
  body: string;
};

export const person = {
  name: "Sashikant Kumar",
  shortName: "Sunny",
  tagline:
    "Math & CS Undergrad @ ASU. I build data systems, ship small products end to end, and write up what I learn.",
  location: "Tempe, AZ",
  /** Paths under /public, e.g. ["/me.jpg"]. Leave empty to show a
   *  placeholder; list more than one to get a carousel. */
  photos: ["/me.webp"],
  // Fill these in with the addresses you actually want public.
  email: "sashikant877@gmail.com",
  resumeHref: "/resume.pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/sunny-ybe" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sashikant-kumar-2004951b4/" },
  ] satisfies Link[],
};

/* ---------------------------------------------------------------
   Software engineering work
----------------------------------------------------------------- */
export const sweWork: Entry[] = [
  {
    code: "SWE 02",
    title: "Software Developer",
    org: "ASU Fulton Schools of Engineering",
    period: "Apr 2026 — Present",
    summary:
      // TODO: swap in the real one- or two-sentence description of what
      // you built — the EPICS reimbursement system or whatever you're
      // shipping now, and the concrete impact (time saved, people served).
      "Building internal data and automation tooling for ASU Fulton. Add the specific system you shipped and its impact here.",
    stack: ["TODO: stack"],
    links: [],
  },
  {
    code: "SWE 01",
    title: "Undergraduate Research Assistant",
    org: "Complex Adaptive Systems Initiative (CASI) — ASU",
    period: "Mar 2025 — Apr 2026",
    summary:
      "TODO: one or two sentences on what you built or analyzed at CASI and why it mattered.",
    stack: ["TODO: stack"],
    links: [],
  },
];

/* ---------------------------------------------------------------
   Data analyst work
----------------------------------------------------------------- */
export const dataWork: Entry[] = [
  {
    code: "DA 01",
    title: "TODO: title of a specific data analysis project",
    org: "TODO: org or course",
    period: "TODO: dates",
    summary:
      "TODO: the question you were answering, the data you used, and the finding or decision it drove. Specific numbers read better than adjectives.",
    stack: ["TODO: tools"],
    links: [],
  },
];

/* ---------------------------------------------------------------
   Research
----------------------------------------------------------------- */
export const research: Entry[] = [
  {
    code: "RES 01",
    title: "TODO: paper title",
    org: "TODO: course, lab, or conference",
    period: "TODO: date",
    summary:
      "TODO: one or two sentences — the question, the method, the finding. Link the PDF below once it's in /public.",
    links: [{ label: "Read the PDF", href: "/research/your-paper.pdf" }],
  },
];

/* ---------------------------------------------------------------
   Vibe-coded / shipped apps — screenshots do the talking here.
----------------------------------------------------------------- */
export const vibeProjects: ScreenshotProject[] = [
  {
    title: "Consnow",
    period: "2026",
    description:
      "Consent-native, passive ambient social app — shipped to real users on TestFlight across the US and India.",
    stack: ["React Native", "Jetpack Compose", "NestJS"],
    images: ["/screenshots/consnow1.webp","/screenshots/consnow2.webp","/screenshots/consnow3.webp","/screenshots/consnow4.webp"],
    links: [],
  },
  // {
  //   title: "Udhaar Khata",
  //   period: "2026",
  //   description:
  //     "Android app that digitizes a kirana shopkeeper's credit ledger, built for a friend's actual store.",
  //   stack: ["Android", "Kotlin"],
  //   links: [],
  // },
  {
    title: "Ember",
    period: "2025",
    description:
      "A grief companion app — won 1st place at the ASU Principled Innovation Academy.",
    links: [],
  },
  {
    title: "Portfolio Bot",
    period: "2026",
    description:
      "Query someone's work instead of browsing their résumé: upload artifacts, get grounded answers with citations back to the source.",
    stack: ["RAG"],
    links: [],
    images:["/portfoliobot.webp"]
  },
  // Add more as you ship them. Drop a screenshot in /public/screenshots
  // and reference it as `images: ["/screenshots/your-file.png"]`.
];

/* ---------------------------------------------------------------
   Community / business efforts
----------------------------------------------------------------- */
export const community: Entry[] = [
  {
    code: "COM 01",
    title: "Cleanthon",
    period: "2026",
    summary:
      "Hackathon-style cleaning competition run on Instagram across India. TODO: add scale — cities, participants, whatever proves it was real.",
    links: [],
  },
  {
    code: "COM 02",
    title: "Caliber",
    period: "2026",
    summary:
      "A PageRank-style credibility graph for technical experts — concept for a new venture. TODO: add current status.",
    links: [],
  },
];

/* ---------------------------------------------------------------
   Field notes — small, specific stories that don't fit a resume
   line but say something real about how you operate. Keep these
   short: three or four sentences, one concrete moment each.
----------------------------------------------------------------- */
export const fieldNotes: FieldNote[] = [
  {
    title: "Reversing the coffee decision",
    body:
      "TODO: tighten this up. The gist — a team decided to cut the office coffee, you thought it was the wrong call, made the case, and got it reversed. Tell it as a specific moment: what you noticed, what you did, what changed.",
  },
];
