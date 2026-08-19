export type Project = {
  id: string;
  index: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  cover: string;
  accent: string;
  tags: string[];
  overview: string;
  process: string;
  research: string;
  wireframes: string;
  ui: string;
  prototype: string;
  results: string;
};

export const projects: Project[] = [
  {
    id: 'nebula',
    index: '01',
    title: 'Nebula Finance',
    category: 'Fintech Dashboard',
    year: '2025',
    summary:
      'A next-gen wealth dashboard turning complex portfolio data into a calm, glanceable experience.',
    cover:
      'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1600',
    accent: '#7c3aed',
    tags: ['UI Design', 'Design System', 'Data Viz', 'React'],
    overview:
      'Nebula reimagines personal finance for a generation that grew up on apps, not spreadsheets. The dashboard surfaces net worth, allocation, and cash flow as living, breathing visualizations.',
    process:
      'Eight weeks from kickoff to handoff. Bi-weekly stakeholder reviews, a living Figma library, and a motion spec delivered alongside the production build.',
    research:
      'Interviews with 14 investors aged 22–38 revealed a shared anxiety: tools built for traders felt hostile to long-term thinkers. We designed for calm confidence instead.',
    wireframes:
      'Low-fidelity flows mapped every account state — empty, loading, error, reconciling — before a single pixel of color was placed.',
    ui:
      'A deep-space palette with a single luminous accent. Numbers use a tabular variant so columns never twitch on update.',
    prototype:
      'Interactive Figma prototype with real data plugged in via a JSON fixture, used for usability testing with 9 participants.',
    results:
      'Daily active sessions up 63%, support tickets about "where is my money" down 41% in the first quarter after launch.',
  },
  {
    id: 'pulse',
    index: '02',
    title: 'Pulse Health',
    category: 'Mobile App',
    year: '2024',
    summary:
      'A mindful wellness companion that makes habit-building feel like a gentle ritual, not a chore.',
    cover:
      'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1600',
    accent: '#22d3ee',
    tags: ['UX Research', 'Mobile', 'Prototyping', 'Animation'],
    overview:
      'Pulse helps people build wellness habits through ambient nudges, gentle streaks, and a breathing rhythm that adapts to the time of day.',
    process:
      'Six sprints with a clinical advisor. Every interaction was reviewed against accessibility WCAG AA and tested one-handed.',
    research:
      'Diary studies with 20 users over two weeks showed guilt was the number one reason people abandoned habit apps. We removed streaks-as-pressure entirely.',
    wireframes:
      'Three core flows — morning check-in, midday breath, evening reflection — sketched as a continuous loop, not separate screens.',
    ui:
      'Soft gradients shift hue with the sun. Typography breathes; nothing snaps. The whole interface moves at 0.7x normal speed on purpose.',
    prototype:
      'A click-through plus a haptic prototype on TestFlight so we could feel the vibration patterns in hand, not just on screen.',
    results:
      '30-day retention hit 58% (industry avg ~23%), and the average session length fell — which we celebrated, because it meant people got what they needed faster.',
  },
  {
    id: 'forge',
    index: '03',
    title: 'Forge Studio',
    category: 'Brand & Web',
    year: '2024',
    summary:
      'Identity and marketing site for an indie game studio that wanted to feel like the games they make — bold, strange, alive.',
    cover:
      'https://images.pexels.com/photos/316466/pexels-photo-316466.jpeg?auto=compress&cs=tinysrgb&w=1600',
    accent: '#3b82f6',
    tags: ['Brand Identity', 'Landing Page', 'WebGL', 'Art Direction'],
    overview:
      'Forge needed a presence that signaled craft without taking itself seriously. We built a system that bends, glitches, and winks.',
    process:
      'A two-week sprint pairing identity design with a prototype site so the brand and the experience evolved together, not in sequence.',
    research:
      'We audited 30 indie studio sites. The memorable ones all had one thing in common: they let personality override polish in at least one place.',
    wireframes:
      'The hero was storyboarded as a film before it was wireframed as a page — motion came first, layout second.',
    ui:
      'A heavy display face paired with a razor-thin body. Neon edges on near-black. The logo morphs between three states depending on scroll position.',
    prototype:
      'A live coded prototype with real shaders, so stakeholders felt the weight of the page rather than imagining it from a Figma mock.',
    results:
      'Launch week drove a 4x increase in demo requests and got featured on two design galleries.',
  },
  {
    id: 'terra',
    index: '04',
    title: 'Terra Maps',
    category: 'Product Design',
    year: '2023',
    summary:
      'A collaborative mapping tool for field researchers who work offline more often than on.',
    cover:
      'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1600',
    accent: '#a855f7',
    tags: ['Product Design', 'Offline-First', 'UX', 'Systems'],
    overview:
      'Terra gives field teams a shared map that syncs when it can and never loses data when it can\'t. Designed for mud, not just meetings.',
    process:
      'Three months, with two designers embedded in field trials for a week each. Nothing teaches you offline UX like losing signal yourself.',
    research:
      'We shadowed biologists, surveyors, and disaster-relief mappers. Their number one complaint: every "offline" app they\'d tried silently lied about what it had saved.',
    wireframes:
      'Every screen had a dual state — connected and severed — designed side by side so the offline experience was a first-class citizen, not a fallback.',
    ui:
      'High-contrast outdoor palette that switches to a dark, battery-saving mode automatically after sunset.',
    prototype:
      'A working offline prototype on a low-end Android device, tested in actual field conditions, not just on a desk.',
    results:
      'Adopted by 12 field teams in year one; the offline sync reliability rating hit 99.2% in real-world use.',
  },
];
