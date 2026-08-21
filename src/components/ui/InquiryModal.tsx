import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Sparkles, Code, Rocket } from 'lucide-react';
import confetti from 'canvas-confetti';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: 'project' | 'developer';
  initialService?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  initialType = 'project',
  initialService = '',
}) => {
  const [inquiryType, setInquiryType] = useState<'project' | 'developer'>(initialType);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    serviceRequired: initialService || 'Website Development',
    projectType: 'Project Based',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const apiKey = import.meta.env.VITE_BREVO_API_KEY;
      const response = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
        body: JSON.stringify({
          sender: {
            name: "UpgradeX Agency Website",
            email: "upgradexagency@gmail.com",
          },
          to: [
            {
              email: "upgradexagency@gmail.com",
              name: "UpgradeX Agency",
            },
          ],
          replyTo: {
            email: formData.email,
            name: formData.name,
          },
          subject: `New [${inquiryType.toUpperCase()}] Inquiry: ${formData.serviceRequired} from ${formData.name}`,
          htmlContent: `
            <div style="font-family: sans-serif; padding: 20px; color: #333;">
              <h2 style="color: #d4af37;">New Inquiry Received (${inquiryType === 'developer' ? 'Hire Developer' : 'Project'})</h2>
              <p><strong>Name:</strong> ${formData.name}</p>
              <p><strong>Email:</strong> ${formData.email}</p>
              <p><strong>Phone:</strong> ${formData.phone || 'N/A'}</p>
              <p><strong>Business Name:</strong> ${formData.businessName || 'N/A'}</p>
              <p><strong>Service Required:</strong> ${formData.serviceRequired}</p>
              <p><strong>Engagement Model:</strong> ${formData.projectType}</p>
              <p><strong>Message:</strong></p>
              <p style="background: #f4f4f4; padding: 15px; border-radius: 8px;">${formData.message || 'No message provided.'}</p>
            </div>
          `,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email via Brevo');
      }
    } catch (error) {
      console.error("Error sending email via Brevo:", error);
    } finally {
      setIsSubmitting(false);
      setIsSuccess(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#d4af37', '#00f2fe', '#6366f1'],
      });
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-[#0a0c16] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden cursor-default"
      >
        {/* Top Glow bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-gold to-cyan" />

        {/* Close Button */}
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

        {isSuccess ? (
          <div className="py-12 text-center space-y-5">
            <div className="w-16 h-16 mx-auto rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center text-gold">
              <CheckCircle2 className="w-10 h-10 animate-bounce" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Request Received Successfully!
            </h3>
            <p className="text-gray-300 max-w-md mx-auto text-sm sm:text-base">
              Thank you, <span className="text-gold font-semibold">{formData.name}</span>. Our technical leads at Upgradex Agency will review your request and reach out within 2 hours.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-8 py-3 rounded-full bg-gold text-black font-extrabold hover:brightness-110 transition-all shadow-[0_0_20px_rgba(212,175,55,0.4)]"
              >
                Close & Return
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6 space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" /> UPGRADEX HIGH-SPEED INQUIRY
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {inquiryType === 'developer' ? 'Hire Dedicated Developers' : 'Start Your Next Digital Project'}
              </h2>
              <p className="text-gray-400 text-sm">
                Fill in your details below and our solution architects will provide an execution roadmap.
              </p>

              {/* Toggle Switch */}
              <div className="flex p-1 bg-white/5 rounded-xl border border-white/10 mt-4">
                <button
                  type="button"
                  onClick={() => setInquiryType('project')}
                  className={`flex-1 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                    inquiryType === 'project'
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Rocket className="w-4 h-4" /> Start a Project
                </button>
                <button
                  type="button"
                  onClick={() => setInquiryType('developer')}
                  className={`flex-1 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                    inquiryType === 'developer'
                      ? 'bg-gradient-to-r from-amber-500 to-gold text-black font-extrabold shadow-md'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Code className="w-4 h-4" /> Hire a Developer
                </button>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gold/60 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Work Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gold/60 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gold/60 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Business Name</label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="Company or Startup Name"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gold/60 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Service Required</label>
                  <select
                    value={formData.serviceRequired}
                    onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#121422] border border-white/10 text-white focus:outline-none focus:border-gold/60 text-sm"
                  >
                    <option value="Website Development">Website Development</option>
                    <option value="Full-Stack & Web Applications">Full-Stack & Web Applications</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="AI Solutions & Automations">AI Solutions & Automations</option>
                    <option value="SEO & Digital Growth">SEO & Digital Growth</option>
                    <option value="Dedicated Developer Hiring">Dedicated Developer Hiring</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Engagement Model</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#121422] border border-white/10 text-white focus:outline-none focus:border-gold/60 text-sm"
                  >
                    <option value="Project Based">Project Based (Fixed Deliverable)</option>
                    <option value="Dedicated Developer">Dedicated Developer (Full-time / Part-time)</option>
                    <option value="Long-Term Development">Long-Term Product Partnership</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Project Details / Requirements</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us briefly about your goals, timeline, and tech stack expectations..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gold/60 text-sm"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-gold to-yellow-500 text-black font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-[0_0_25px_rgba(212,175,55,0.4)] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Send Request to Upgradex →
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
