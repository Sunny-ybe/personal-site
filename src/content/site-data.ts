/**
 * All page content lives here. To add, remove, or reorder anything on
 * the site, edit the arrays below; no component needs to change.
 *
 * Entries render in array order. Anything with `published: false`
 * stays in this file but is not shown. A section whose entries are all
 * unpublished disappears from the page and from the nav.
 */

export type Link = {
  label: string;
  href: string;
};

/** Shipped = real users. Built = working, no users. */
export type Status = "Shipped" | "Built" | "Prototype" | "In Progress";

/* ---------------------------------------------------------------
   Person / hero
----------------------------------------------------------------- */
export const person = {
  name: "Sashikant Kumar",
  shortName: "Sunny",
  headline: "Computer Science & Mathematics @ ASU",
  description:
    "I build AI products, developer tools, and automation systems, from browser extensions to apps used by real people.",
  availability: "Open to Summer 2027 Software Engineering & AI internships",
  location: "Tempe, Arizona",
  /** Small proof line under the description. */
  proof: [
    "1st place, ASU Principled Innovation Academy",
    "2 production workflow systems at ASU",
    "Shipped to 15 users across the US and India",
  ],
  /** Paths under /public, e.g. ["/me.webp"]. List more than one to get
   *  a carousel. */
  photos: ["/me.webp"],
  email: "sashikant877@gmail.com",
  /** Path under /public, e.g. "/resume.pdf". Leave empty to hide every
   *  resume link until the PDF is in /public. */
  resumeHref: "",
  socials: [
    { label: "GitHub", href: "https://github.com/Sunny-ybe" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sashikant-kumar-2004951b4/" },
  ] satisfies Link[],
};

/* ---------------------------------------------------------------
   Featured work — the large cards
----------------------------------------------------------------- */
export type ProjectDetails = {
  /** Every field is optional: a subsection with no content is hidden. */
  problem?: string;
  built?: string;
  architecture?: { part: string; detail: string }[];
  challenges?: string[];
  outcome?: string;
};

export type FeaturedProject = {
  name: string;
  tagline: string;
  category: string;
  status: Status;
  /** Short qualifier shown next to the status, e.g. "in daily personal use". */
  statusNote?: string;
  summary: string;
  /** One standout fact, shown emphasized on the card. */
  stat?: string;
  highlights: string[];
  stack: string[];
  /** Paths under /public. More than one becomes a carousel; none hides
   *  the media slot. */
  images?: string[];
  /** CSS aspect-ratio of the media frame, e.g. "9 / 16" for phone
   *  screenshots. Defaults to "16 / 10". */
  mediaAspect?: string;
  links: Link[];
  details?: ProjectDetails;
  published: boolean;
};

export const featuredProjects: FeaturedProject[] = [
  {
    name: "Ambi",
    tagline: "Personal Browser Memory & Search",
    category: "AI / Information Retrieval",
    status: "Built",
    summary:
      "A privacy-conscious browser memory that helps you rediscover pages you've visited, using semantic search, keywords, recency, and browsing context.",
    highlights: [
      "Chrome extension that saves useful browsing context locally instead of uploading personal history to a cloud service.",
      "Retrieval combining semantic and keyword search with recency and time-spent signals.",
      "Privacy controls: delete saved data, exclude incognito pages, filter sensitive content before storage.",
    ],
    stack: ["JavaScript", "FastAPI", "ChromaDB", "Chrome Extensions"],
    links: [{ label: "Source", href: "https://github.com/Sunny-ybe/Ambi-local" }],
    details: {
      built:
        "A Chrome extension that saves browsing context locally, and a search layer for finding those pages again.",
      architecture: [
        { part: "Capture", detail: "Chrome extension (JavaScript) that stores browsing context locally, not in a cloud service." },
        { part: "Retrieval", detail: "Semantic and keyword search, combined with recency and time-spent signals." },
        { part: "Privacy", detail: "Delete saved data, exclude incognito pages, and filter sensitive content before storage." },
        { part: "Backend & data", detail: "FastAPI and ChromaDB." },
      ],
      outcome: "Working build. The source is public on GitHub.",
    },
    published: true,
  },
  {
    name: "ConSnow",
    tagline: "Consent-Native Ambient Social App",
    category: "Mobile / Full-Stack",
    status: "Shipped",
    summary:
      "A location-aware social app that lets your 5 to 10 closest people share everyday context without posting updates. Co-founded, built, and shipped to 15 TestFlight users across the US and India.",
    stat: "15 real TestFlight users across the US and India",
    highlights: [
      "FastAPI + MongoDB backend deployed on Railway, using Google Places geocoding to interpret raw location data.",
      "Place learning: Home, Work, Frequent, and Occasional classification.",
      "Location accuracy pipeline: GPS drift filtering, stationary lock, timezone-aware timestamps; iOS (TestFlight) and Android builds.",
    ],
    stack: ["React Native", "Expo", "FastAPI", "MongoDB", "Railway"],
    images: [
      "/screenshots/consnow1.webp",
      "/screenshots/consnow2.webp",
      "/screenshots/consnow3.webp",
      "/screenshots/consnow4.webp",
    ],
    mediaAspect: "9 / 16",
    links: [],
    details: {
      built:
        "Co-founded and built a location-aware social app for sharing everyday context with your 5 to 10 closest people, with iOS (TestFlight) and Android builds.",
      architecture: [
        { part: "App", detail: "React Native with Expo. iOS (TestFlight) and Android builds." },
        { part: "Backend", detail: "FastAPI and MongoDB, deployed on Railway." },
        { part: "Location", detail: "Google Places geocoding to interpret raw location data, with GPS drift filtering, stationary lock, and timezone-aware timestamps." },
        { part: "Place learning", detail: "Classifies places as Home, Work, Frequent, or Occasional." },
      ],
      outcome: "Shipped to 15 TestFlight users across the US and India.",
    },
    published: true,
  },
  {
    name: "Focus Lock",
    tagline: "Daily-Use Productivity Extension",
    category: "Developer Tools / Productivity",
    status: "Built",
    statusNote: "in daily personal use",
    summary:
      "A browser extension I use every day that blocks distracting sites, survives browser restarts, and turns on Apple Focus.",
    highlights: [
      "Focus sessions persist across browser restarts.",
      "Locks can't be ended early.",
      "macOS Shortcuts integration enables Apple Focus across devices.",
    ],
    stack: ["JavaScript", "Python", "Chrome Extensions MV3"],
    images: ["/screenshots/focuslock-static.webp", "/screenshots/focuslock-running.webp"],
    mediaAspect: "3 / 4",
    links: [{ label: "Demo video", href: "https://www.loom.com/share/7e273f907d154a8981d91e6de48e0de2" }],
    details: {
      built: "A Chrome extension (Manifest V3) that runs focus sessions and blocks distracting sites while one is active.",
      architecture: [
        { part: "Extension", detail: "Chrome Extensions Manifest V3, written in JavaScript." },
        { part: "Sessions", detail: "Persist across browser restarts, and a lock can't be ended early." },
        { part: "Apple Focus", detail: "macOS Shortcuts integration turns on Apple Focus across devices." },
      ],
      outcome: "In daily personal use.",
    },
    published: true,
  },
];

/* ---------------------------------------------------------------
   Experience
----------------------------------------------------------------- */
export type Experience = {
  role: string;
  org: string;
  /** e.g. "March 2025 – Present" */
  period: string;
  /** Heading for the chip row: "Tools" or "Stack". */
  toolsLabel: string;
  tools: string[];
  description?: string;
  /** Distinct systems built in this role, each shown as a mini case study. */
  caseStudies?: { title: string; points: string[] }[];
  highlights?: string[];
  /** Sanitized screenshots or diagrams under /public. None hides the
   *  media slot. Never include real organizational data. */
  images?: string[];
  published: boolean;
};

export const experience: Experience[] = [
  {
    role: "Software Developer, Data & Automation",
    org: "Ira A. Fulton Schools of Engineering, Arizona State University",
    period: "March 2025 – Present",
    toolsLabel: "Tools",
    tools: ["Microsoft Forms", "SharePoint", "Power Automate", "Airtable"],
    description:
      "I design and build workflow and automation systems for project operations and administrative processes at ASU's Fulton Schools of Engineering.",
    caseStudies: [
      {
        title: "SSE Project Tracking System",
        points: [
          "A three-tool project intake and tracking workflow: Microsoft Forms, SharePoint, and Power Automate.",
          "Built for the SSE Data Workgroup.",
          "Live in production.",
        ],
      },
      {
        title: "EPICS Purchase & Reimbursement Workflow",
        points: [
          "Airtable pipeline with 2 public intake forms, 5 relational tables, and 11 status values.",
          "Routing across 3 campus coordinators.",
          "Live per-team budget rollups.",
          "Tested end to end with a real submission, status update, and confirmation email.",
        ],
      },
    ],
    published: true,
  },
  {
    role: "Undergraduate Research Assistant",
    org: "Complex Adaptive Systems Initiative (CASI), Arizona State University",
    period: "May 2025 – August 2025",
    toolsLabel: "Stack",
    tools: ["Python", "Pandas", "NumPy", "FastAI"],
    highlights: [
      "Automated monthly progress audits with Pandas and NumPy and generated visual reports for three student research assistants.",
      "Fine-tuned ResNet18 with FastAI for binary classification experiments and summarized results for a research feasibility assessment.",
    ],
    published: true,
  },
];

/* ---------------------------------------------------------------
   Research & analysis — hidden until an entry is published
----------------------------------------------------------------- */
export type ResearchEntry = {
  title: string;
  question: string;
  method: string;
  findings: string;
  technologies?: string[];
  /** Path under /public, e.g. "/research/my-paper.pdf". */
  pdf?: string;
  /** Charts or figures under /public. */
  images?: string[];
  published: boolean;
};

export const research: ResearchEntry[] = [
  // Add an entry once there is a real paper or analysis to show. Drop
  // the PDF in /public/research and set `published: true`.
];

/* ---------------------------------------------------------------
   More things I've built — the compact cards
----------------------------------------------------------------- */
export type MoreProject = {
  name: string;
  tagline?: string;
  status?: Status;
  description: string;
  stack?: string[];
  /** Paths under /public. More than one becomes a carousel. */
  images?: string[];
  links?: Link[];
  published: boolean;
};

export const moreProjects: MoreProject[] = [
  {
    name: "Ember",
    tagline: "Grief Companion App",
    status: "Prototype",
    description: "Won 1st place at ASU's Principled Innovation Academy.",
    published: true,
  },
  {
    name: "Portfolio Bot",
    status: "In Progress",
    description:
      "Ask questions about someone's work and get answers grounded in their real projects, with citations.",
    stack: ["RAG"],
    images: ["/portfoliobot.webp"],
    published: true,
  },
  {
    name: "Cleanthon",
    // Needs scale before publishing: cities, participants, whatever
    // proves it was real.
    description: "Hackathon-style cleaning competition run on Instagram across India.",
    published: false,
  },
  {
    name: "Caliber",
    // Needs current status before publishing.
    description: "A PageRank-style credibility graph for technical experts. Concept for a new venture.",
    published: false,
  },
  {
    name: "Udhaar Khata",
    description:
      "Android app that digitizes a kirana shopkeeper's credit ledger, built for a friend's actual store.",
    stack: ["Android", "Kotlin"],
    published: false,
  },
];

/* ---------------------------------------------------------------
   Skills & education
----------------------------------------------------------------- */
export const skills: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["Python", "JavaScript", "TypeScript", "C++", "Java", "SQL", "MATLAB"] },
  { label: "Frontend & Mobile", items: ["React", "React Native", "Expo", "Chrome Extensions"] },
  { label: "Backend & Data", items: ["FastAPI", "PostgreSQL", "MongoDB", "Supabase", "ChromaDB"] },
  {
    label: "Infrastructure & Tools",
    items: ["Docker", "GitHub Actions", "Railway", "Git", "Playwright", "Pytest", "Power Automate", "Airtable"],
  },
  {
    label: "Areas",
    items: ["Information Retrieval", "RAG", "Machine Learning", "REST APIs", "Automation", "Testing"],
  },
];

export const education = {
  school: "Arizona State University",
  degree: "B.S. Computer Science & B.S. Mathematics",
  expected: "Expected May 2028",
  gpa: "GPA 3.90/4.00",
  honors: ["Dean's List every semester", "New American University Scholar, Provost Distinction Award"],
  activities: [
    { label: "Hackathons", items: ["HackAZona", "ASA DataFest (solo)"] },
    { label: "Clubs", items: ["SODA", "DevLabs", "Claude Builder's Club"] },
  ],
};

/* ---------------------------------------------------------------
   Field notes — hidden until an entry is published
----------------------------------------------------------------- */
export type FieldNote = {
  title: string;
  date?: string;
  story: string;
  lesson?: string;
  link?: Link;
  published: boolean;
};

export const fieldNotes: FieldNote[] = [
  {
    title: "Reversing the coffee decision",
    story:
      "TODO: tighten this up. The gist — a team decided to cut the office coffee, you thought it was the wrong call, made the case, and got it reversed. Tell it as a specific moment: what you noticed, what you did, what changed.",
    published: false,
  },
];
