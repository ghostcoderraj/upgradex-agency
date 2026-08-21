import React, { useState } from 'react';
import { projectsData } from '../../data/projectsData';
import type { ProjectItem } from '../../data/projectsData';
import { ArrowUpRight, Lock } from 'lucide-react';

interface FeaturedWorkSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const FeaturedWorkSection: React.FC<FeaturedWorkSectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'E-Commerce Platform', 'Education Platform', 'Industrial Portal', 'IT & Business Services', 'Tech & Service Website'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-28 relative bg-[#040509] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold">
            FEATURED PORTFOLIO
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Ideas We Turned Into Reality.
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            A selection of digital experiences we’ve designed and developed.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gold text-black font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                  : 'bg-white/5 text-gray-400 border border-white/10 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group relative rounded-3xl bg-[#090a12] border border-white/10 overflow-hidden cursor-pointer hover:border-gold/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            >
              {/* Project Mockup Container */}
              <div className="w-full h-56 relative overflow-hidden bg-[#090a12] flex flex-col justify-between p-4 sm:p-6">
                {/* Website Home Screenshot */}
                {project.screenshotUrl ? (
                  <img
                    src={project.screenshotUrl}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 z-0"
                    loading="lazy"
                  />
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.imageGradient} z-0`} />
                )}

                {/* Dark Gradient Overlay for text readability and glass header contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/50 z-10" />

                {/* Simulated Glass Browser Window Top with Real Website URL Textbox */}
                <div className="flex items-center justify-between bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 w-full relative z-20 shadow-lg">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  
                  {/* Address Textbox with Lock Icon */}
                  <div className="flex-1 mx-2 px-2 py-0.5 rounded-md bg-white/10 border border-white/10 text-[9px] sm:text-[10px] text-gray-200 font-mono truncate text-center flex items-center justify-center gap-1 shadow-inner">
                    <Lock className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                    <span className="truncate">{project.demoUrl ? project.demoUrl.replace("https://", "").replace("http://", "").replace(/\/$/, "") : project.title}</span>
                  </div>

                  <span className="text-[8px] sm:text-[9px] font-mono text-gold px-2 py-0.5 rounded-md bg-gold/10 border border-gold/20 shrink-0 font-semibold">
                    {project.category}
                  </span>
                </div>

                <div className="relative z-20">
                  <span className="text-2xl font-black text-white group-hover:text-gold transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    {project.title}
                  </span>
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="p-6 space-y-4">
                <p className="text-gray-300 text-sm line-clamp-2 leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-white/5 text-[11px] font-mono text-gray-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 rounded-md bg-white/5 text-[11px] font-mono text-gold">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* View Project Action Line */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-gold group-hover:text-white transition-colors">
                  <span>View Case Study & Metrics</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
