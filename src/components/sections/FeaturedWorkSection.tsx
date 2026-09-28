import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { projectsData } from '../../data/projectsData';
import type { ProjectItem } from '../../data/projectsData';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface FeaturedWorkSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

const FILTERS = [
  { label: 'All', value: 'All' },
  { label: 'Commerce', value: 'E-Commerce Platform' },
  { label: 'Education', value: 'Education Platform' },
  { label: 'Industrial', value: 'Industrial Portal' },
  { label: 'Business', value: 'IT & Business Services' },
  { label: 'Service sites', value: 'Tech & Service Website' },
];

const SLIDE_MS = 5600;

const Shot: React.FC<{ project: ProjectItem; className?: string }> = ({ project, className = '' }) => (
  <>
    {project.screenshotUrl ? (
      <img
        src={project.screenshotUrl}
        alt=""
        className={`h-full w-full object-cover object-top ${className}`}
        loading="lazy"
      />
    ) : (
      <div className={`h-full w-full bg-gradient-to-br ${project.imageGradient} ${className}`} />
    )}
  </>
);

export const FeaturedWorkSection: React.FC<FeaturedWorkSectionProps> = ({ onSelectProject }) => {
  const reduce = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState('All');
  const [index, setIndex] = useState(0);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((project) => project.category === activeCategory);

  const count = filteredProjects.length;
  const slideIndex = count === 0 ? 0 : Math.min(index, count - 1);
  const project = filteredProjects[slideIndex];

  useEffect(() => {
    if (reduce || paused || count < 2) return;
    const timer = window.setInterval(() => {
      setDirection(1);
      setIndex((current) => (current + 1) % count);
    }, SLIDE_MS);
    return () => window.clearInterval(timer);
  }, [reduce, paused, count, index]);

  useEffect(() => {
    if (reduce) {
      setVisibleIndex(slideIndex);
      return;
    }
    const timer = window.setTimeout(() => setVisibleIndex(slideIndex), 400);
    return () => window.clearTimeout(timer);
  }, [reduce, slideIndex]);

  const show = (nextIndex: number, dir: 1 | -1) => {
    if (count < 1) return;
    setDirection(dir);
    setIndex((nextIndex + count) % count);
  };

  const selectCategory = (value: string) => {
    setActiveCategory(value);
    setDirection(1);
    setIndex(0);
    setVisibleIndex(0);
  };

  return (
    <section id="work" className="relative scroll-mt-28 border-t border-white/5 bg-[#040509] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">Selected work</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Work clients can open.
            </h2>
            <p className="text-base text-gray-300 sm:text-lg">
              One project at a time. Slide through the work, or open the live site.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((filter) => {
              const selected = activeCategory === filter.value;
              return (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => selectCategory(filter.value)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    selected
                      ? 'bg-[#f3d068] text-black'
                      : 'border border-white/10 bg-white/5 text-gray-300 hover:text-white'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {project && (
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="relative">
              <AnimatePresence mode="wait" custom={direction} initial={false}>
                <motion.article
                  key={project.id}
                  className="group relative grid cursor-pointer overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#090b14] lg:grid-cols-12"
                  onClick={() => onSelectProject(project)}
                  custom={direction}
                  variants={{
                    enter: (dir: number) => (reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: dir * 56 }),
                    center: { opacity: 1, x: 0 },
                    exit: (dir: number) => (reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: dir * -56 }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: reduce ? 0 : 0.38, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="relative h-72 overflow-hidden lg:col-span-7 lg:h-[420px]">
                    <Shot project={project} />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    {count > 1 && (
                      <>
                        <button
                          type="button"
                          aria-label="Previous project"
                          onClick={(event) => {
                            event.stopPropagation();
                            show(slideIndex - 1, -1);
                          }}
                          className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/70 text-white backdrop-blur-sm transition-colors hover:border-[#f3d068] hover:text-[#f3d068] sm:left-4"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                          type="button"
                          aria-label="Next project"
                          onClick={(event) => {
                            event.stopPropagation();
                            show(slideIndex + 1, 1);
                          }}
                          className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/70 text-white backdrop-blur-sm transition-colors hover:border-[#f3d068] hover:text-[#f3d068] sm:right-4"
                        >
                          <ChevronRight className="h-5 w-5" />
                        </button>
                      </>
                    )}
                  </div>
                  <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-5">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                        {String(slideIndex + 1).padStart(2, '0')} · {project.category}
                      </p>
                      <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{project.title}</h3>
                      <p className="mt-4 text-base leading-relaxed text-gray-300">{project.shortDescription}</p>
                    </div>
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold">
                        View the project <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(event) => event.stopPropagation()}
                          className="text-sm font-semibold text-gray-300 underline-offset-4 hover:text-white hover:underline"
                        >
                          Open live site
                        </a>
                      )}
                    </div>
                  </div>
                  {!reduce && !paused && count > 1 && (
                    <motion.span
                      className="absolute bottom-0 left-0 h-[3px] bg-[#f3d068]"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: SLIDE_MS / 1000, ease: 'linear' }}
                    />
                  )}
                </motion.article>
              </AnimatePresence>

            </div>

            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-semibold tracking-widest text-gray-400">
                <span className="text-white">{String(visibleIndex + 1).padStart(2, '0')}</span>
                <span className="mx-1 text-gray-600">/</span>
                {String(count).padStart(2, '0')}
              </p>
              <div className="flex flex-wrap gap-2">
                {filteredProjects.map((item, itemIndex) => {
                  const active = itemIndex === visibleIndex;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      aria-label={`Show ${item.title}`}
                      aria-current={active ? 'true' : undefined}
                      onClick={() => show(itemIndex, itemIndex >= slideIndex ? 1 : -1)}
                      className={`h-2 rounded-full transition-all ${
                        active ? 'w-8 bg-[#f3d068]' : 'w-2 bg-white/25 hover:bg-white/50'
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
