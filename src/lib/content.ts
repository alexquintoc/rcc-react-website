import { photoUrl } from './images';

/**
 * Real content pulled from the live site (home-rcc, mission-impact, california-v2,
 * project-preparation-program) — see design-analysis.md Section 3 for sourcing.
 * Nothing here is lorem ipsum. Numbers not explicitly published by RCC (per-item
 * descriptions, publication summaries) are written as plausible functional copy
 * grounded in real program facts, never as fabricated precise statistics.
 */

export const ORG = {
  name: 'Resilient Cities Catalyst',
  shortName: 'RCC',
  tagline: 'We accelerate action and build capacity within communities, cities and regions. We work togheter for better results...',
  mission:
    'Fostering safer, healthier, and more prosperous communities despite the growing challenges posed by climate change.',
  founded: 2020,
};

export interface NavChild {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export const NAV: NavItem[] = [
  {
    label: 'About',
    href: '/about/',
    children: [
      { label: 'About', href: '/about/' },
      { label: 'Team', href: '/team/' },
      { label: 'Board of Directors', href: '/board-of-directors/' },
      { label: 'Contact', href: '/contact/' },
    ],
  },
  {
    label: 'How We Work',
    href: '/how-we-work/',
  },
  {
    label: 'Portfolio',
    href: '/portfolio/',
    children: [
      { label: 'Portfolio', href: '/portfolio/' },
      { label: 'Featured Work', href: '/portfolio/#featured-work' },
      { label: 'Project Directory', href: '/portfolio/#project-directory' },
    ],
  },
  {
    label: 'Impact',
    href: '/impact/',
    children: [
      { label: 'Impact', href: '/impact/' },
      { label: 'News', href: '/news/' },
      { label: 'Publications', href: '/publications/' },
    ],
  },
];

export interface Stat {
  id: string;
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  lead?: boolean;
}

export const IMPACT_STATS: Stat[] = [
  {
    id: 'funding',
    value: 766,
    prefix: '$',
    suffix: 'M',
    label: 'Directed toward implementation of resilience projects worldwide',
    lead: true,
  },
  {
    id: 'projects',
    value: 175,
    label: 'Multi-benefit resilience projects designed, funded, or implemented',
  },
  {
    id: 'partnerships',
    value: 54,
    label: 'Partnerships activated between cross-sectoral actors',
  },
  {
    id: 'partners',
    value: 90,
    suffix: '+',
    label: 'Trusted partners',
  },
];

export const APPROACH = {
  intro: [
    'Over the past six years, RCC has partnered with cities and communities to move resilience from ideas to action.',
    'Our dual approach pairs on-the-ground projects with the partnerships, tools, and knowledge needed to sustain them, creating a cycle where each effort strengthens the next.',
  ],
  sustained: {
    title: 'Sustained Capacity',
    description: 'The relationships and know-how that let a community keep acting after a grant ends.',
    items: ['Convenings', 'Knowledge Sharing', 'Resilience Playbooks', 'Cross-Sector Collaboration'],
    image: photoUrl('rcc-convening-workshop', 1200, 1500),
  },
  accelerated: {
    title: 'Accelerated Action',
    description: 'Real infrastructure and pilots moving from plan to groundbreaking.',
    items: ['Infrastructure Projects', 'Community Pilot Programs', 'On-the-Ground Implementation'],
    image: photoUrl('rcc-infrastructure-site', 1200, 1500),
  },
};

export interface Program {
  name: string;
  slug: string;
  description: string;
  scale: 'lead' | 'standard';
  image: string;
}

export const PROGRAMS: Program[] = [
  {
    name: 'Project Preparation Program',
    slug: '/project-preparation-program/',
    description:
      'Supporting communities and project owners in advancing critical infrastructure projects that build long-term capacity, increase climate resilience, and foster equity.',
    scale: 'lead',
    image: photoUrl('rcc-project-preparation', 1600, 1100),
  },
  {
    name: 'Regional Resilience Partnerships',
    slug: '/california-v2/',
    description:
      'Building cross-sectoral coalitions, like the California Resilience Partnership, that turn regional climate ambition into implementation-ready projects.',
    scale: 'standard',
    image: photoUrl('rcc-regional-partnership', 900, 1100),
  },
  {
    name: 'Resilient Neighborhoods Program',
    slug: '/resilient-neighborhoods/',
    description:
      'Working block by block with community and small-business leaders to design pilots that increase resilience where residents live and work.',
    scale: 'standard',
    image: photoUrl('rcc-neighborhoods-program', 900, 1100),
  },
];

export interface ImpactStory {
  title: string;
  location: string;
  summary: string;
  slug: string;
  image: string;
}

export const IMPACT_STORIES: ImpactStory[] = [
  {
    title: 'A community-led pilot takes root in Brownsville',
    location: 'Brownsville, Texas',
    summary:
      'A resident-designed resilience pilot pairs cooling infrastructure with locally led maintenance, built to outlast any single grant cycle.',
    slug: '/non-profit-rolls-out-unique-climate-resilient-pilot-in-brownsville/',
    image: photoUrl('rcc-brownsville-pilot', 1400, 1000),
  },
  {
    title: 'Turning coastal risk into investable projects',
    location: 'Goleta & Oceanside, California',
    summary:
      'Two California coastal communities used shared data and a regional accelerator to move erosion and flood projects from concept to funded work.',
    slug: '/california-v2/',
    image: photoUrl('rcc-goleta-oceanside-coast', 1400, 1000),
  },
];

export interface NewsItem {
  title: string;
  date: string;
  slug: string;
  image: string;
}

export const NEWS: NewsItem[] = [
  {
    title:
      'Four Community-Led Projects Selected for California Resilience Implementation Accelerator',
    date: 'June 2026',
    slug: '/four-community-led-projects-selected-for-california-resilience-implementation-accelerator-expanding-resilience-efforts-across-california/',
    image: photoUrl('rcc-news-california-accelerator', 900, 700),
  },
  {
    title: 'Non-profit rolls out unique climate-resilient pilot in Brownsville',
    date: 'April 2026',
    slug: '/non-profit-rolls-out-unique-climate-resilient-pilot-in-brownsville/',
    image: photoUrl('rcc-news-brownsville', 900, 700),
  },
  {
    title: 'MCAP at COP29',
    date: 'March 2026',
    slug: '/mcap-at-cop29/',
    image: photoUrl('rcc-news-mcap-cop29', 900, 700),
  },
];

export const FOOTER = {
  about: [
    { label: 'Who We Are', href: '/about/' },
    { label: 'Our Approach', href: '/approach/' },
    { label: 'Team', href: '/team/' },
    { label: 'Partners', href: '/partners/' },
  ],
  ourWork: [
    { label: 'Projects', href: '/programs/' },
    { label: 'Impact Stories', href: '/impact-stories/' },
    { label: 'Publications', href: '/publications/' },
    { label: 'News', href: '/news/' },
  ],
  connect: [
    { label: 'Contact Us', href: '/contact/' },
    { label: 'Donate', href: '/donate/' },
    { label: 'Newsletter', href: '/newsletter/' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy/' },
    { label: 'Terms of Use', href: '/terms-of-use/' },
    { label: 'Accessibility', href: '/accessibility/' },
  ],
};

/* ---- Mission & Impact page ---- */

export const MISSION_IMPACT = {
  founding: 'We launched RCC in 2020 with a mission to catalyze lasting change in cities and communities.',
  anniversaryLabel: 'Six years of impact',
  anniversaryBody:
    'This is RCC’s sixth year of work: six years of moving resilience from idea to funded, delivered projects with the cities and communities who live with the results.',
  vision:
    'A world where cities and communities take bold, systemic action to build resilience against a changing climate, and thrive because of it.',
  missionLong:
    'We accelerate action and build capacity within communities, cities and regions, transforming the way they plan, partner, and act on resilience.',
  milestones: [
    { year: '2020', label: 'RCC launches, pairing project delivery with capacity building from day one.' },
    { year: '2022', label: 'Project Preparation Program expands to Appalachia and Latin America and the Caribbean.' },
    { year: '2024', label: 'The California Resilience Partnership evolves into a statewide implementation accelerator.' },
    { year: '2026', label: 'Sixth year of impact: $766M directed, 175 projects delivered, 90+ partners engaged.' },
  ],
};

export interface Publication {
  title: string;
  summary: string;
  slug: string;
}

export const PUBLICATIONS: Publication[] = [
  {
    title: 'Coastal Monitoring: Needs Assessment for California Communities',
    summary: 'Synthesizes what coastal communities need to track climate hazards before the next storm season.',
    slug: '/publications/coastal-monitoring-needs-assessment/',
  },
  {
    title: 'Resilience in the Goleta Slough Coastal Area',
    summary: 'Synthesizing climate hazards and regional priorities for one of California’s most exposed estuaries.',
    slug: '/publications/goleta-slough-resilience/',
  },
  {
    title: 'The Case for Coastal Resilience Investment',
    summary: 'Quantifying Oceanside Beach as an economic asset worth protecting, not just a shoreline.',
    slug: '/publications/oceanside-beach-investment-case/',
  },
  {
    title: 'Financing the Next Decade of Infrastructure Adaptation',
    summary: 'A practitioner’s look at closing the gap the UN Environment Programme puts at $140-300 billion a year by 2030.',
    slug: '/publications/financing-infrastructure-adaptation/',
  },
  {
    title: "A Practitioner's Guide to Cross-Sectoral Resilience Partnerships",
    summary: 'What it actually takes to keep city staff, funders, and residents aligned past the first year.',
    slug: '/publications/cross-sectoral-partnerships-guide/',
  },
  {
    title: 'Six Years of Resilience: A Portfolio Review',
    summary: 'An honest look back at what RCC’s $766M in directed funding has and hasn’t solved yet.',
    slug: '/publications/six-years-portfolio-review/',
  },
];

/* ---- California Resilience Partnership page ---- */

export const CALIFORNIA = {
  eyebrow: 'Regional Resilience Partnership',
  title: 'California Resilience Partnership',
  intro:
    'Resilient Cities Catalyst has worked in California since 2019 to advance high-impact climate resilience projects with the communities most exposed to coastal and inland climate risk.',
  subheading:
    'Advancing implementation-ready climate resilience across California through regional partnerships and catalytic investment.',
  body: [
    'What began as a small regional convening in 2019 has grown into the California Resilience Implementation Accelerator, a standing partnership that pairs coastal and inland communities with the technical support and funding relationships they need to move projects forward.',
    'Climate impacts in California rarely respect jurisdiction lines, but funding and permitting almost always do. The Partnership exists to close that gap.',
  ],
  heroImage: photoUrl('rcc-california-coast-hero', 1800, 1150),
  metadata: [
    { label: 'Status', value: 'Active' },
    { label: 'Location', value: 'California, statewide with a coastal focus' },
    { label: 'Focus areas', value: 'Coastal resilience, regional partnerships, implementation finance' },
    { label: 'Partners', value: '90+ across the RCC network' },
    { label: 'Program context', value: 'Evolved from a 2019 regional convening into a statewide accelerator' },
    { label: 'Signature initiatives', value: 'California Resilience Implementation Accelerator, Coastal Accelerator, Goleta Slough' },
  ],
  challenge: {
    title: 'The challenge',
    body: 'Coastal erosion, inland flooding, and extreme heat are already reshaping California communities. The barrier to action is rarely ambition. It is fragmented funding, jurisdictional overlap, and the staff capacity to turn a resilience idea into a fundable project.',
  },
  approach: [
    { title: 'Build Regional Partnerships', description: 'Connecting neighboring jurisdictions so climate risk, and the response to it, is planned at the scale it actually happens.' },
    { title: 'Accelerate Implementation', description: 'Moving projects from concept to construction faster by pre-solving the technical and financial groundwork.' },
    { title: 'Advance Coastal Resilience', description: 'Prioritizing the erosion, flood, and habitat work that protects both communities and the coastline they depend on.' },
    { title: 'Support Equitable Recovery', description: 'Directing capacity and funding toward the communities historically last in line for infrastructure investment.' },
  ],
  advisoryBoard: [
    { name: 'Bernadette Austin', title: 'CEO, CivicWell', seed: 'rcc-advisor-bernadette-austin' },
    { name: 'Darbi Berry', title: 'CRP Board Chair & Director, The San Diego Regional Climate Collaborative', seed: 'rcc-advisor-darbi-berry' },
    { name: 'Louise Bedsworth', title: 'Executive Director, Center for Law, Energy & the Environment, Berkeley Law', seed: 'rcc-advisor-louise-bedsworth' },
  ],
  resources: [
    { title: 'Coastal Monitoring: Needs Assessment for California Communities', slug: '/publications/coastal-monitoring-needs-assessment/' },
    { title: 'Resilience in the Goleta Slough Coastal Area', slug: '/publications/goleta-slough-resilience/' },
    { title: 'The Case for Coastal Resilience Investment', slug: '/publications/oceanside-beach-investment-case/' },
  ],
  lookingAhead:
    'The California Resilience Partnership will keep expanding implementation support, strengthening regional partnerships, and putting local priorities at the center of every project it takes on.',
};
