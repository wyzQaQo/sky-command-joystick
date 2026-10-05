"use client";

import GradientText from "@/components/react-bits/GradientText";
import FadeContent from "@/components/react-bits/FadeContent";

const industries = [
  {
    title: "Crane & Lifting",
    desc: "Precision control for overhead cranes, mobile cranes, and gantry systems. CAN bus integration for real-time load monitoring.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
        <circle cx="12" cy="12" r="4" />
        <line x1="12" y1="2" x2="12" y2="5" />
      </svg>
    ),
  },
  {
    title: "Marine & Offshore",
    desc: "IP68 waterproof joysticks for ship bridges, ROV control, and offshore platform equipment. Salt-spray resistant construction.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
        <path d="M19.5 13.5V8A1.5 1.5 0 0 0 18 6.5H6A1.5 1.5 0 0 0 4.5 8v5.5" />
      </svg>
    ),
  },
  {
    title: "Mining Machinery",
    desc: "Heavy-duty joysticks for excavators, loaders, and drill rigs. Shock-resistant up to 50G. Works in dusty, high-vibration conditions.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 10l-5 5-5-5" />
        <path d="M12 3v12" />
        <rect x="3" y="15" width="18" height="6" rx="2" />
      </svg>
    ),
  },
  {
    title: "Agricultural",
    desc: "Joystick controllers for combines, sprayers, and autonomous tractors. ISO 11783 (ISOBUS) compatible. Wide temperature range.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "UAV Ground Control",
    desc: "Precision gimbals for drone ground stations. USB HID plug-and-play. Long-throw axes for fine positioning control.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Forklift & AGV",
    desc: "Compact finger joysticks and armrest controllers for forklifts and automated guided vehicles. Ergonomic design for shift-long operation.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
  },
];

export default function Industries() {
  return (
    <section className="relative py-24 sm:py-32 px-6 bg-sky-deep/60">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(72,202,228,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(72,202,228,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <FadeContent blur duration={800} className="text-center mb-16">
          <GradientText
            colors={["#48CAE4", "#00A8E8", "#0077B6", "#90E0EF"]}
            animationSpeed={4}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter mb-4"
          >
            Industries We Serve
          </GradientText>
          <p className="text-sky-text-muted text-lg max-w-2xl mx-auto">
            Our joystick controllers are deployed across 6 continents, powering critical
            operations in the world&apos;s toughest environments.
          </p>
        </FadeContent>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((industry, i) => (
            <FadeContent key={industry.title} blur delay={0.1 + i * 0.08}>
              <div className="group relative h-full p-6 rounded-2xl border border-sky-border bg-sky-glass/30 backdrop-blur-sm hover:bg-sky-glass/50 hover:border-sky-electric/40 transition-all duration-500">
                <div className="text-sky-glow mb-4 group-hover:text-sky-electric transition-colors duration-300">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                  {industry.title}
                </h3>
                <p className="text-sky-text-muted text-sm leading-relaxed">
                  {industry.desc}
                </p>
                {/* Hover accent line */}
                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-sky-electric/0 via-sky-electric/50 to-sky-electric/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}
