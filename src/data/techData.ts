export interface TechItem {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend & Database' | 'Deployment & Cloud' | 'AI & Tools';
  description: string;
  color: string;
}

export const techStackData: TechItem[] = [
  { id: 'react', name: 'React', category: 'Frontend', description: 'Declarative component-driven UI library', color: '#61dafb' },
  { id: 'nextjs', name: 'Next.js', category: 'Frontend', description: 'Production SSR framework for web applications', color: '#ffffff' },
  { id: 'typescript', name: 'TypeScript', category: 'Frontend', description: 'Strongly typed JavaScript at enterprise scale', color: '#3178c6' },
  { id: 'javascript', name: 'JavaScript', category: 'Frontend', description: 'Modern ESNext interactive core', color: '#f7df1e' },
  { id: 'tailwindcss', name: 'Tailwind CSS', category: 'Frontend', description: 'Utility-first CSS engine for dynamic styling', color: '#38bdf8' },
  { id: 'nodejs', name: 'Node.js', category: 'Backend & Database', description: 'High-throughput asynchronous runtime', color: '#22c55e' },
  { id: 'mongodb', name: 'MongoDB', category: 'Backend & Database', description: 'Document-oriented NoSQL database system', color: '#10b981' },
  { id: 'supabase', name: 'Supabase', category: 'Backend & Database', description: 'Scalable Postgres platform with real-time subscriptions', color: '#3ecf8e' },
  { id: 'vercel', name: 'Vercel', category: 'Deployment & Cloud', description: 'Global edge network & serverless deployment', color: '#ffffff' },
  { id: 'cloudinary', name: 'Cloudinary', category: 'Deployment & Cloud', description: 'Cloud asset optimization & dynamic delivery', color: '#3448c5' },
  { id: 'ai-engines', name: 'AI Engines', category: 'AI & Tools', description: 'Generative AI models, vector stores & automations', color: '#a855f7' },
  { id: 'threejs', name: 'Three.js', category: 'Frontend', description: 'Interactive 3D graphics & WebGL rendering', color: '#00f2fe' }
];
