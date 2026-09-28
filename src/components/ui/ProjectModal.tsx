import React, { useEffect } from 'react';
import type { ProjectItem } from '../../data/projectsData';
import { X, ExternalLink, Sparkles } from 'lucide-react';
import { GlowButton } from './GlowButton';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenInquiry: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenInquiry,
}) => {
  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl bg-[#0b0d18] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.95)] max-h-[90vh] overflow-y-auto cursor-default"
      >
        {/* Close Button - High Z-Index & Clear Contrast */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          aria-label="Close Modal"
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 text-gray-200 hover:text-white rounded-full bg-black/70 hover:bg-black border border-white/20 hover:border-gold/60 transition-all z-40 shadow-xl group cursor-pointer"
        >
          <X className="w-5 h-5 group-hover:scale-110 transition-transform text-gray-200 group-hover:text-gold" />
        </button>

        {/* Header Preview Banner */}
        <div className="w-full h-48 sm:h-64 rounded-2xl border border-white/10 flex flex-col justify-end relative overflow-hidden mb-6 bg-[#090a12] p-6">
          {project.screenshotUrl ? (
            <img
              src={project.screenshotUrl}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover object-top z-0"
            />
          ) : (
            <div className={`absolute inset-0 bg-gradient-to-br ${project.imageGradient} z-0`} />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40 z-10" />

          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/75 border border-white/20 text-xs font-semibold text-gold z-20">
            {project.category}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white z-20 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            {project.title}
          </h2>
        </div>

        {/* Project Content */}
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> Overview & Impact
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              {project.fullDescription}
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
            {project.metrics.map((m, i) => (
              <div key={i} className="text-center sm:text-left">
                <span className="block text-2xl sm:text-3xl font-extrabold text-gold">{m.value}</span>
                <span className="text-xs text-gray-400 font-medium">{m.label}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
              Project Highlights
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <GlowButton
              variant="gold"
              size="md"
              showArrow={false}
              onClick={() => {
                onClose();
                onOpenInquiry();
              }}
              className="w-full sm:w-auto"
            >
              Build a Similar Solution →
            </GlowButton>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-sm flex items-center justify-center gap-2 hover:bg-white/20 transition-all"
              >
                <ExternalLink className="w-4 h-4" /> Visit Live Website
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
