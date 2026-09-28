export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  forClient: string;
  description: string;
  longDescription: string;
  iconName: string;
  features: string[];
  gradient: string;
  accentColor: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "website-development",
    number: "01",
    title: "Website Development",
    forClient: "A site that brings customers in",
    description: "A fast site people can trust, built so a visit turns into an enquiry.",
    longDescription: "We engineer pixel-perfect, lightning-fast websites powered by modern frameworks like React and Next.js. Engineered for search engines, high conversion rates, and seamless mobile responsiveness.",
    iconName: "Globe",
    features: [
      "Clear on every phone",
      "Laid out so people enquire",
      "Ready for search from day one"
    ],
    gradient: "from-amber-500/20 to-gold/10",
    accentColor: "#d4af37"
  },
  {
    id: "web-applications",
    number: "02",
    title: "Web Applications",
    forClient: "A product people actually use",
    description: "Dashboards, portals, and apps your team or your customers open every day.",
    longDescription: "End-to-end full-stack development tailored to scale your product operations. From real-time data visualizers to multi-tenant SaaS platforms built on secure, scalable cloud architectures.",
    iconName: "Layout",
    features: [
      "Accounts and the right access",
      "Live numbers your team can act on",
      "Room to add the next feature"
    ],
    gradient: "from-cyan-500/20 to-blue-600/10",
    accentColor: "#00f2fe"
  },
  {
    id: "ui-ux-design",
    number: "03",
    title: "UI/UX Design",
    forClient: "An interface people understand",
    description: "Screens and flows that make the next step obvious before a line of code.",
    longDescription: "Design systems that create emotional resonance and effortless user flows. We blend aesthetic visual design with data-backed user experience research to maximize engagement.",
    iconName: "Figma",
    features: [
      "A path from visit to action",
      "A prototype you can click first",
      "A look that matches the brand"
    ],
    gradient: "from-violet-500/20 to-purple-600/10",
    accentColor: "#8b5cf6"
  },
  {
    id: "ai-solutions",
    number: "04",
    title: "AI Solutions",
    forClient: "Less busywork for the team",
    description: "Chat, documents, and repeat tasks handled so people stay on the work that matters.",
    longDescription: "Supercharge your business efficiency with modern generative AI, custom fine-tuned LLMs, automated agentic pipelines, and conversational AI interfaces tailored for client engagement.",
    iconName: "Cpu",
    features: [
      "Answers on your site or in your tools",
      "Documents read and sorted",
      "Steps that run without a person each time"
    ],
    gradient: "from-emerald-500/20 to-teal-600/10",
    accentColor: "#10b981"
  },
  {
    id: "seo-digital-growth",
    number: "05",
    title: "SEO & Digital Growth",
    forClient: "Get found after the launch",
    description: "The site shows up when people search for what you sell.",
    longDescription: "Capture high-intent organic search traffic and outperform competitors. We implement technical SEO foundations, content velocity strategy, and conversion rate optimization.",
    iconName: "TrendingUp",
    features: [
      "The fixes search engines need",
      "Pages written around real searches",
      "A plan for what to publish next"
    ],
    gradient: "from-blue-500/20 to-indigo-600/10",
    accentColor: "#3b82f6"
  },
  {
    id: "business-automation",
    number: "06",
    title: "Business Automation",
    forClient: "Less copy-paste between tools",
    description: "Leads, customers, and follow-ups move without someone retyping them.",
    longDescription: "Eliminate repetitive manual tasks and operational bottlenecks. Connect CRMs, payment gateways, webhooks, and third-party tools into automated background pipelines.",
    iconName: "Zap",
    features: [
      "New leads land in the right place",
      "Customers get the next step on their own",
      "Your tools pass the work along"
    ],
    gradient: "from-rose-500/20 to-orange-600/10",
    accentColor: "#f43f5e"
  }
];
