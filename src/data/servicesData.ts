export interface ServiceItem {
  id: string;
  number: string;
  title: string;
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
    description: "Modern, responsive and conversion-focused websites for businesses, startups, portfolios and personal brands.",
    longDescription: "We engineer pixel-perfect, lightning-fast websites powered by modern frameworks like React and Next.js. Engineered for search engines, high conversion rates, and seamless mobile responsiveness.",
    iconName: "Globe",
    features: [
      "Custom React & Next.js Architecture",
      "High-Conversion UI/UX Layouts",
      "Mobile-First Responsive Design",
      "Sub-second Load Times & Core Web Vitals"
    ],
    gradient: "from-amber-500/20 to-gold/10",
    accentColor: "#d4af37"
  },
  {
    id: "web-applications",
    number: "02",
    title: "Web Applications",
    description: "Powerful dashboards, SaaS platforms, admin panels, customer portals and custom web applications.",
    longDescription: "End-to-end full-stack development tailored to scale your product operations. From real-time data visualizers to multi-tenant SaaS platforms built on secure, scalable cloud architectures.",
    iconName: "Layout",
    features: [
      "SaaS Architecture & Multi-Tenancy",
      "Interactive Real-Time Analytics Dashboards",
      "RESTful & GraphQL API Integrations",
      "Role-Based Access & Authentication"
    ],
    gradient: "from-cyan-500/20 to-blue-600/10",
    accentColor: "#00f2fe"
  },
  {
    id: "ui-ux-design",
    number: "03",
    title: "UI/UX Design",
    description: "Modern interfaces, interactive user journeys, prototypes and high-converting digital experiences.",
    longDescription: "Design systems that create emotional resonance and effortless user flows. We blend aesthetic visual design with data-backed user experience research to maximize engagement.",
    iconName: "Figma",
    features: [
      "Comprehensive Design Systems",
      "Interactive Wireframes & High-Fidelity Prototypes",
      "User Journey & Conversion Rate Optimization",
      "Design-to-Code Seamless Hand-off"
    ],
    gradient: "from-violet-500/20 to-purple-600/10",
    accentColor: "#8b5cf6"
  },
  {
    id: "ai-solutions",
    number: "04",
    title: "AI Solutions",
    description: "AI chatbots, intelligent automation, AI-powered workflows and custom AI engine integrations.",
    longDescription: "Supercharge your business efficiency with modern generative AI, custom fine-tuned LLMs, automated agentic pipelines, and conversational AI interfaces tailored for client engagement.",
    iconName: "Cpu",
    features: [
      "Custom LLM & OpenAI Engine Integrations",
      "24/7 Intelligent AI Customer Support Agents",
      "Automated Document Processing & Extraction",
      "Predictive Analytics & Smart Workflows"
    ],
    gradient: "from-emerald-500/20 to-teal-600/10",
    accentColor: "#10b981"
  },
  {
    id: "seo-digital-growth",
    number: "05",
    title: "SEO & Digital Growth",
    description: "Technical SEO, on-page optimization, content strategy and digital growth solutions.",
    longDescription: "Capture high-intent organic search traffic and outperform competitors. We implement technical SEO foundations, content velocity strategy, and conversion rate optimization.",
    iconName: "TrendingUp",
    features: [
      "Deep Technical SEO & Architecture Audits",
      "On-Page Optimization & Schema Microdata",
      "High-Authority Backlink & Content Strategy",
      "Search Engine Result Page (SERP) Domination"
    ],
    gradient: "from-blue-500/20 to-indigo-600/10",
    accentColor: "#3b82f6"
  },
  {
    id: "business-automation",
    number: "06",
    title: "Business Automation",
    description: "Automate repetitive processes and build smarter, frictionless digital workflows.",
    longDescription: "Eliminate repetitive manual tasks and operational bottlenecks. Connect CRMs, payment gateways, webhooks, and third-party tools into automated background pipelines.",
    iconName: "Zap",
    features: [
      "Custom API Webhooks & Middleware",
      "CRM & Lead Pipeline Automated Syncing",
      "Automated Customer Onboarding Flows",
      "Operational Cost & Time Reduction"
    ],
    gradient: "from-rose-500/20 to-orange-600/10",
    accentColor: "#f43f5e"
  }
];
