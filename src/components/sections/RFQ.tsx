"use client";

import { useState } from "react";
import GradientText from "@/components/react-bits/GradientText";
import FadeContent from "@/components/react-bits/FadeContent";

export default function RFQ() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    application: "",
    quantity: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="rfq" className="relative py-24 sm:py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-deep via-sky-deep/95 to-sky-deep" />
      <div className="relative max-w-4xl mx-auto">
        <FadeContent blur duration={800} className="text-center mb-12">
          <GradientText
            colors={["#48CAE4", "#00A8E8", "#0077B6", "#90E0EF"]}
            animationSpeed={4}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter mb-4"
          >
            Request a Quote
          </GradientText>
          <p className="text-sky-text-muted text-lg">
            Tell us about your project. Our engineering team responds within 24 hours.
          </p>
        </FadeContent>

        <FadeContent blur delay={0.2}>
          {submitted ? (
            <div className="text-center p-12 rounded-3xl border border-sky-electric/40 bg-sky-glass/20 backdrop-blur-sm">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-sky-electric/20 border border-sky-electric/40 flex items-center justify-center">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#48CAE4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Quote Request Received</h3>
              <p className="text-sky-text-muted">
                Our engineering team will review your requirements and respond within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-3xl border border-sky-border bg-gradient-to-br from-sky-glass/40 to-sky-deep/80 backdrop-blur-sm p-8 sm:p-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-sky-text-muted mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-sky-deep/80 border border-sky-border text-white placeholder-sky-text-muted/50 focus:border-sky-electric focus:outline-none focus:ring-1 focus:ring-sky-electric/50 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-sky-text-muted mb-2">Company *</label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-sky-deep/80 border border-sky-border text-white placeholder-sky-text-muted/50 focus:border-sky-electric focus:outline-none focus:ring-1 focus:ring-sky-electric/50 transition-all"
                    placeholder="Company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-sky-text-muted mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-sky-deep/80 border border-sky-border text-white placeholder-sky-text-muted/50 focus:border-sky-electric focus:outline-none focus:ring-1 focus:ring-sky-electric/50 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-sky-text-muted mb-2">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-sky-deep/80 border border-sky-border text-white placeholder-sky-text-muted/50 focus:border-sky-electric focus:outline-none focus:ring-1 focus:ring-sky-electric/50 transition-all"
                    placeholder="+86 138 xxxx xxxx"
                  />
                </div>
                <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-sky-text-muted mb-2">Country</label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-sky-deep/80 border border-sky-border text-white placeholder-sky-text-muted/50 focus:border-sky-electric focus:outline-none focus:ring-1 focus:ring-sky-electric/50 transition-all"
                      placeholder="e.g. Germany"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-sky-text-muted mb-2">Application</label>
                    <select
                      name="application"
                      value={formData.application}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-sky-deep/80 border border-sky-border text-white placeholder-sky-text-muted/50 focus:border-sky-electric focus:outline-none focus:ring-1 focus:ring-sky-electric/50 transition-all appearance-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%238ba4be' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 16px center",
                      }}
                    >
                      <option value="">Select application</option>
                      <option value="crane">Crane & Lifting</option>
                      <option value="marine">Marine & Offshore</option>
                      <option value="mining">Mining Machinery</option>
                      <option value="agricultural">Agricultural</option>
                      <option value="uav">UAV Ground Control</option>
                      <option value="forklift">Forklift & AGV</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-sky-text-muted mb-2">Expected Qty</label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-sky-deep/80 border border-sky-border text-white placeholder-sky-text-muted/50 focus:border-sky-electric focus:outline-none focus:ring-1 focus:ring-sky-electric/50 transition-all"
                      placeholder="e.g. 500 pcs/year"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-sky-text-muted mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-sky-deep/80 border border-sky-border text-white placeholder-sky-text-muted/50 focus:border-sky-electric focus:outline-none focus:ring-1 focus:ring-sky-electric/50 transition-all resize-none"
                    placeholder="Describe your requirements — axis config, output type, IP rating, quantity…"
                  />
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-sky-electric hover:bg-sky-azure text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-sky-electric/25 hover:shadow-sky-electric/40 hover:scale-105"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  Submit Inquiry
                </button>
                <p className="text-xs text-sky-text-muted">
                  We respect your privacy. Your information is never shared.
                </p>
              </div>
            </form>
          )}
        </FadeContent>
      </div>
    </section>
  );
}
