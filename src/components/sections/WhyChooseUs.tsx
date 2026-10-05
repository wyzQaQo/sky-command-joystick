"use client";

import GradientText from "@/components/react-bits/GradientText";
import FadeContent from "@/components/react-bits/FadeContent";
import Magnet from "@/components/react-bits/Magnet";

const advantages = [
  {
    title: "OEM/ODM Excellence",
    desc: "Full customization from concept to production. Our engineering team works with your specs — mechanical drawings, electrical interfaces, firmware requirements.",
    icon: "⚙",
  },
  {
    title: "Global Certifications",
    desc: "CE, RoHS, ISO 9001 certified. UL certification available on request. Every product is tested to IEC 60529 ingress protection standards.",
    icon: "✓",
  },
  {
    title: "Rapid Prototyping",
    desc: "3D printed prototypes in 5-7 days. CNC machined samples in 2-3 weeks. Iterate fast before committing to production tooling.",
    icon: "△",
  },
  {
    title: "Lifecycle Support",
    desc: "5+ year availability guarantee on all models. Replacement parts, technical documentation, and firmware updates throughout the product lifecycle.",
    icon: "↻",
  },
  {
    title: "Competitive Lead Times",
    desc: "Sample orders: 2-3 weeks. Mass production: 4-6 weeks. Dedicated project manager for every OEM account.",
    icon: "◷",
  },
  {
    title: "Engineer-to-Engineer",
    desc: "Talk directly to our engineers — not sales reps. Technical drawings, 3D models (STEP/IGES), and datasheets available for every product.",
    icon: "▤",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 sm:py-32 px-6 bg-sky-deep/60">
      <div className="max-w-7xl mx-auto">
        <FadeContent blur duration={800} className="text-center mb-16">
          <GradientText
            colors={["#48CAE4", "#00A8E8", "#0077B6", "#90E0EF"]}
            animationSpeed={4}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter mb-4"
          >
            Why Partner With Us
          </GradientText>
          <p className="text-sky-text-muted text-lg max-w-2xl mx-auto">
            We don&apos;t just sell joysticks — we build long-term engineering partnerships
            with OEMs and system integrators worldwide.
          </p>
        </FadeContent>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {advantages.map((adv, i) => (
            <FadeContent key={adv.title} blur delay={0.1 + i * 0.08}>
              <div className="group h-full p-6 rounded-2xl border border-sky-border bg-gradient-to-br from-sky-glass/30 to-transparent hover:border-sky-electric/40 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-sky-glass border border-sky-border flex items-center justify-center text-xl mb-4 group-hover:bg-sky-electric/10 group-hover:border-sky-electric/40 transition-all duration-300">
                  {adv.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                  {adv.title}
                </h3>
                <p className="text-sky-text-muted text-sm leading-relaxed">{adv.desc}</p>
              </div>
            </FadeContent>
          ))}
        </div>

        {/* CTA */}
        <FadeContent className="text-center mt-16">
          <Magnet padding={100} magnetStrength={3}>
            <a
              href="#rfq"
              className="inline-flex items-center gap-2 px-10 py-5 bg-sky-electric hover:bg-sky-azure text-white font-bold text-lg rounded-2xl transition-all duration-300 shadow-lg shadow-sky-electric/25 hover:shadow-sky-electric/40 hover:scale-105"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Talk to an Engineer
            </a>
          </Magnet>
        </FadeContent>
      </div>
    </section>
  );
}
