export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  imageGradient: string;
  accentColor: string;
  demoUrl?: string;
  screenshotUrl?: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "gle5",
    title: "GLE5",
    category: "E-Commerce Platform",
    shortDescription: "Easy EMI selling platform helping thousands buy their dream products with seamless financing pipelines.",
    fullDescription: "Developed a comprehensive EMI Selling Platform allowing users to browse, apply, and purchase consumer goods via structured installment plans. Engineered frictionless checkout flows, custom EMI calculator widgets, and instant credit eligibility evaluations.",
    tags: ["EMI Platform", "React", "Next.js", "Financial APIs", "Tailwind CSS"],
    metrics: [
      { label: "Client Sales Growth", value: "+180%" },
      { label: "Application Time", value: "< 2 mins" }
    ],
    imageGradient: "from-indigo-900/60 via-slate-900 to-indigo-600/20",
    accentColor: "#6366f1",
    demoUrl: "https://www.gle5.com/",
    screenshotUrl: "/screenshots/gle5.png"
  },
  {
    id: "dazzle-lighting",
    title: "Dazzle Lighting",
    category: "E-Commerce Platform",
    shortDescription: "Premium LED lighting showroom and online storefront combining style, high performance, and energy efficiency.",
    fullDescription: "Designed and developed a premium digital storefront for Dazzle Lighting Solutions, showcasing their architectural, commercial, and residential LED solutions. Features a dynamic catalog with advanced filtering, immersive product details, and a high-performance checkout.",
    tags: ["E-Commerce", "React", "Tailwind CSS", "Vite", "Headless Commerce"],
    metrics: [
      { label: "Product Inquiries", value: "3.5x" },
      { label: "Page Load Speed", value: "98/100" }
    ],
    imageGradient: "from-amber-900/60 via-slate-900 to-amber-600/20",
    accentColor: "#d4af37",
    demoUrl: "https://www.dazzlelighting.in/",
    screenshotUrl: "/screenshots/dazzle-lighting.png"
  },
  {
    id: "kabuliwala-co",
    title: "Kabuliwala Co",
    category: "E-Commerce Platform",
    shortDescription: "Bespoke storefront delivering premium quality dry fruits, gourmet nuts, and authentic organic delicacies.",
    fullDescription: "Designed and engineered a high-converting premium e-commerce storefront for Kabuliwala Co. Features elegant product grids, dynamic bundle selectors, optimized mobile checkouts, and custom gifting subscription builders.",
    tags: ["E-Commerce", "Next.js", "Stripe Integration", "Tailwind CSS", "Conversion Optimization"],
    metrics: [
      { label: "Conversion Rate Boost", value: "+42%" },
      { label: "Customer LTV Increase", value: "+30%" }
    ],
    imageGradient: "from-amber-950/60 via-slate-900 to-amber-700/20",
    accentColor: "#d4af37",
    demoUrl: "https://kabuliwalaco.com/",
    screenshotUrl: "/screenshots/kabuliwala-co.png"
  },
  {
    id: "rivers-aviation",
    title: "Rivers Aviation Academy",
    category: "Education Platform",
    shortDescription: "Premium academy portal preparing cabin crews and aviation management leaders for global industry careers.",
    fullDescription: "Designed and launched a sleek, conversion-optimized academy platform for Rivers Aviation Academy. Features interactive course catalogs, student application modules, admission workflows, and integrated campus tours.",
    tags: ["Academy Portal", "Next.js", "Tailwind CSS", "Online Admissions", "Framer Motion"],
    metrics: [
      { label: "Student Enrollment", value: "+160%" },
      { label: "Course Inquiries", value: "2.8x" }
    ],
    imageGradient: "from-cyan-900/60 via-slate-900 to-cyan-600/20",
    accentColor: "#00f2fe",
    demoUrl: "https://www.riversaviationacademy.co.in/",
    screenshotUrl: "/screenshots/rivers-aviation.png"
  },
  {
    id: "codemasti",
    title: "CodeMasti",
    category: "Education Platform",
    shortDescription: "Dynamic EdTech ecosystem designed to make learning code, development, and tech skills gamified and accessible.",
    fullDescription: "Built CodeMasti, a next-generation gamified EdTech platform where students learn programming interactively. Built custom course pathways, student progression metrics dashboards, and responsive classroom portals.",
    tags: ["EdTech", "React", "TypeScript", "Interactive Playgrounds", "Tailwind CSS"],
    metrics: [
      { label: "Active Student Retention", value: "89%" },
      { label: "Course Engagement", value: "3.4x" }
    ],
    imageGradient: "from-purple-900/60 via-slate-900 to-purple-600/20",
    accentColor: "#a855f7",
    demoUrl: "https://www.codemasti.com/",
    screenshotUrl: "https://api.microlink.io?url=https://www.codemasti.com/&screenshot=true&embed=screenshot.url"
  },
  {
    id: "shivshakti-plywood",
    title: "Shivshakti India Plywood",
    category: "Industrial Portal",
    shortDescription: "Industrial machinery showcase for plywood, saw mills, and wood processing equipment maximizing production.",
    fullDescription: "Developed a high-performance B2B product showcase catalog for woodworking and plywood processing machinery trusted by over 500 manufacturers. Built lead capture systems, interactive specifications sheets, and quote requesting utilities.",
    tags: ["B2B Catalog", "TypeScript", "React", "Tailwind CSS", "Lead Optimization"],
    metrics: [
      { label: "B2B Manufacturers Served", value: "500+" },
      { label: "Lead Capture Rate", value: "+115%" }
    ],
    imageGradient: "from-emerald-900/60 via-slate-900 to-emerald-600/20",
    accentColor: "#10b981",
    demoUrl: "https://www.shivtech.in/",
    screenshotUrl: "https://api.microlink.io?url=https://www.shivtech.in/&screenshot=true&embed=screenshot.url"
  },
  {
    id: "prisha-entertainment",
    title: "Prisha Entertainment",
    category: "Industrial Portal",
    shortDescription: "High-quality electrical control panels, automation systems, and custom industrial engineering services.",
    fullDescription: "Engineered a premium business portal for Prisha Entertainment, presenting custom electrical control panels, power systems, and automation services. Designed clean specs visualization and corporate inquiries forms.",
    tags: ["Automation Portal", "Vite", "Tailwind CSS", "React", "B2B Lead Generation"],
    metrics: [
      { label: "Inquiry Turnaround", value: "-40% Time" },
      { label: "SEO Visibility", value: "+210%" }
    ],
    imageGradient: "from-blue-900/60 via-slate-900 to-blue-600/20",
    accentColor: "#3b82f6",
    demoUrl: "https://www.prishaent.com/",
    screenshotUrl: "https://api.microlink.io?url=https://www.prishaent.com/&screenshot=true&embed=screenshot.url"
  },
  {
    id: "akash-ladder",
    title: "Akash Ladder",
    category: "Industrial Portal",
    shortDescription: "India's trusted manufacturer of premium industrial, commercial, and household safety ladders.",
    fullDescription: "Built a modern manufacturer showcase website for Akash Ladder, exhibiting their wide range of aluminum, fiberglass, and customized safety ladders. Implemented intuitive category navigation, durability visualizers, and bulk order quotation pipelines.",
    tags: ["Manufacturing Showcase", "React", "Tailwind CSS", "TypeScript", "Vercel"],
    metrics: [
      { label: "Bounce Rate Reduction", value: "35%" },
      { label: "Mobile Engagement", value: "+150%" }
    ],
    imageGradient: "from-rose-900/60 via-slate-900 to-rose-600/20",
    accentColor: "#f43f5e",
    demoUrl: "https://www.akashladder.in/",
    screenshotUrl: "https://api.microlink.io?url=https://www.akashladder.in/&screenshot=true&embed=screenshot.url"
  },
  {
    id: "maniik-enterprises",
    title: "Maniik Enterprises",
    category: "IT & Business Services",
    shortDescription: "Full-suite IT solutions, custom networking, web development, and corporate facility management portal.",
    fullDescription: "Architected the corporate digital ecosystem for Maniik Enterprises, offering facility management, enterprise IT, dynamic networking infrastructure, and growth marketing solutions for global businesses.",
    tags: ["IT Services Portal", "React", "Tailwind CSS", "TypeScript", "Dynamic Form Integrations"],
    metrics: [
      { label: "Client Engagement", value: "+95%" },
      { label: "Page Load Speed", value: "97/100" }
    ],
    imageGradient: "from-violet-900/60 via-slate-900 to-violet-600/20",
    accentColor: "#8b5cf6",
    demoUrl: "https://www.maniikenterprises.com/",
    screenshotUrl: "https://api.microlink.io?url=https://www.maniikenterprises.com/&screenshot=true&embed=screenshot.url"
  },
  {
    id: "kd-cleaning",
    title: "KD Cleaning Technologies",
    category: "Tech & Service Website",
    shortDescription: "Advanced residential, commercial, and high-tech drone exterior cleaning systems presentation.",
    fullDescription: "Designed a high-tech corporate showcase for KD Cleaning Technologies. Highlighted advanced water-fed poles, architectural cleaning solutions, and high-tech drone exterior cleaning integrations for large scale high-rises.",
    tags: ["Cleaning Tech", "React", "Tailwind CSS", "Service Bookings", "Framer Motion"],
    metrics: [
      { label: "Commercial Leads", value: "+180%" },
      { label: "Video Engagement", value: "+220%" }
    ],
    imageGradient: "from-sky-900/60 via-slate-900 to-sky-600/20",
    accentColor: "#38bdf8",
    demoUrl: "https://kdcleaningtechnologies.com/",
    screenshotUrl: "https://api.microlink.io?url=https://kdcleaningtechnologies.com/&screenshot=true&embed=screenshot.url"
  }
];
