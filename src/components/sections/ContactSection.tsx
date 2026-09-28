import React, { useState } from 'react';
import { Mail, Globe, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    serviceRequired: 'Website Development',
    projectType: 'Project Based',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

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
          subject: `New Project Inquiry: ${formData.serviceRequired} from ${formData.name}`,
          htmlContent: `
            <div style="font-family: sans-serif; padding: 20px; color: #333;">
              <h2 style="color: #d4af37;">New Website Inquiry Received</h2>
              <p><strong>Name:</strong> ${formData.name}</p>
              <p><strong>Email:</strong> ${formData.email}</p>
              <p><strong>Phone:</strong> ${formData.phone || 'N/A'}</p>
              <p><strong>Business Name:</strong> ${formData.businessName || 'N/A'}</p>
              <p><strong>Service Required:</strong> ${formData.serviceRequired}</p>
              <p><strong>Project Type:</strong> ${formData.projectType}</p>
              <p><strong>Message:</strong></p>
              <p style="background: #f4f4f4; padding: 15px; border-radius: 8px;">${formData.message || 'No message provided.'}</p>
            </div>
          `,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email via Brevo');
      }

      setIsSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.7 },
        colors: ['#d4af37', '#00f2fe', '#6366f1'],
      });
    } catch (error) {
      console.error("Error sending email via Brevo:", error);
      setSubmitError('The form could not be sent. Message us on WhatsApp and we will reply there.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-28 relative bg-[#040509]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold">
            GET IN TOUCH
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let’s Build Something Great.
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Have a project in mind or need dedicated technical talent? Send us your requirements below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-[#090b14] border border-white/10 space-y-8 shadow-2xl">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Upgradex Agency</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  A digital marketing agency for websites, UI/UX, apps, AI, SEO, and the campaigns that grow a brand.
                </p>
              </div>

              {/* Direct Channels */}
              <div className="space-y-4">
                <a
                  href="mailto:upgradexagency@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/40 hover:bg-white/10 transition-all text-gray-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-mono">Email Us</span>
                    <span className="text-sm font-bold text-white group-hover:text-gold transition-colors">
                      upgradexagency@gmail.com
                    </span>
                  </div>
                </a>

                <a
                  href="https://wa.me/919153276992?text=Hello%20UpgradeX%20Agency,%20I'm%20interested%20in%20your%20services!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#25D366]/40 hover:bg-white/10 transition-all text-gray-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-mono">Call / WhatsApp Us</span>
                    <span className="text-sm font-bold text-white group-hover:text-[#25D366] transition-colors">
                      +91 91532 76992
                    </span>
                  </div>
                </a>

                <a
                  href="https://upgradexagency.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/40 hover:bg-white/10 transition-all text-gray-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan group-hover:scale-110 transition-transform">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-mono">Official Website</span>
                    <span className="text-sm font-bold text-white group-hover:text-cyan transition-colors">
                      upgradexagency.in
                    </span>
                  </div>
                </a>
              </div>

              <div className="space-y-3 pt-2 border-t border-white/10">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">What happens next</p>
                {[
                  'You tell us the goal, the service, and a rough timeline.',
                  'We reply on email or WhatsApp with questions, not a generic pitch.',
                  'You get a clear plan before any build starts.',
                ].map((step, index) => (
                  <div key={step} className="flex gap-3 text-sm text-gray-300">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-[11px] font-bold text-gold">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 block mb-3">
                  Connect With Us
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.linkedin.com/company/117074268/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-gold/40 hover:bg-gold/10 transition-all font-mono text-xs font-bold"
                  >
                    IN
                  </a>
                  <a
                    href="https://www.instagram.com/upgradex_agency"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-gold/40 hover:bg-gold/10 transition-all font-mono text-xs font-bold"
                  >
                    IG
                  </a>
                  <a
                    href="https://github.com/upgradex-agency"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-gold/40 hover:bg-gold/10 transition-all font-mono text-xs font-bold"
                  >
                    GH
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#090b14] border border-white/10 shadow-2xl relative">
              {isSubmitted ? (
                <div className="py-16 text-center space-y-5">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gold/20 border border-gold flex items-center justify-center text-gold">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Project Request Sent!</h3>
                  <p className="text-gray-300 max-w-md mx-auto text-sm sm:text-base">
                    Thank you, <span className="text-gold font-bold">{formData.name}</span>. Our technical leads will get back to you within 2 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gold/60 text-sm transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rahul@gmail.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gold/60 text-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gold/60 text-sm transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">Business Name</label>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="Sharma Enterprises"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gold/60 text-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">Service Required</label>
                      <select
                        value={formData.serviceRequired}
                        onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#101222] border border-white/10 text-white focus:outline-none focus:border-gold/60 text-sm transition-colors"
                      >
                        <option value="Website Development">Website Development</option>
                        <option value="Full-Stack & Web Applications">Full-Stack & Web Applications</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="AI Solutions & Automations">AI Solutions & Automations</option>
                        <option value="SEO & Digital Growth">SEO & Digital Growth</option>
                        <option value="Business Automation">Business Automation</option>
                        <option value="Dedicated Developer Hiring">Dedicated Developer Hiring</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">Project Type</label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#101222] border border-white/10 text-white focus:outline-none focus:border-gold/60 text-sm transition-colors"
                      >
                        <option value="Project Based">Project Based</option>
                        <option value="Dedicated Developer">Dedicated Developer</option>
                        <option value="Long-Term Development">Long-Term Partnership</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">Tell us about your project</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your goals, target audience, preferred tech stack, or timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gold/60 text-sm transition-colors"
                    />
                  </div>

                  {submitError && (
                    <p className="text-sm text-rose-300">
                      {submitError}{' '}
                      <a
                        href="https://wa.me/919153276992?text=Hello%20UpgradeX%20Agency,%20I%20want%20to%20talk%20about%20a%20project."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-[#25D366] underline"
                      >
                        Open WhatsApp
                      </a>
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-gold to-yellow-500 text-black font-extrabold text-base flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-[0_0_25px_rgba(212,175,55,0.4)] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-5 h-5" /> Send Project Request →
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
