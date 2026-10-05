"use client";

import GradientText from "@/components/react-bits/GradientText";
import FadeContent from "@/components/react-bits/FadeContent";
import CountUp from "@/components/react-bits/CountUp";

const stats = [
  { value: 50, suffix: "+", label: "Countries Exported" },
  { value: 15000, suffix: " m²", label: "Manufacturing Facility" },
  { value: 200, suffix: "+", label: "OEM/ODM Projects" },
  { value: 10, suffix: "M+", label: "Units Deployed" },
];

const specs = [
  {
    category: "Output Types",
    items: ["Analog 0-5V", "USB HID", "CAN J1939", "CANopen", "PWM", "RS-232/485"],
  },
  {
    category: "Axis Config",
    items: ["1-Axis (Throttle)", "2-Axis (XY)", "3-Axis (XYZ)", "Custom Multi-Axis"],
  },
  {
    category: "IP Ratings",
    items: ["IP65 (Dust + Jets)", "IP67 (1m Immersion)", "IP68 (Continuous Submersion)"],
  },
  {
    category: "Certifications",
    items: ["CE", "RoHS", "ISO 9001", "UL (on request)", "IEC 60529"],
  },
];

export default function TechnicalSpecs() {
  return (
    <section className="relative py-24 sm:py-32 px-6 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-sky-electric/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <FadeContent blur duration={800} className="text-center mb-16">
          <GradientText
            colors={["#48CAE4", "#00A8E8", "#0077B6", "#90E0EF"]}
            animationSpeed={4}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter mb-4"
          >
            Technical Excellence
          </GradientText>
        </FadeContent>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <FadeContent key={stat.label} blur delay={0.1 * i}>
              <div className="text-center p-6 rounded-2xl border border-sky-border bg-sky-glass/20 backdrop-blur-sm">
                <div className="text-4xl sm:text-5xl font-bold tracking-tighter text-white mb-1">
                  <CountUp
                    to={stat.value}
                    duration={2.5}
                    delay={0.2 * i}
                    className="text-4xl sm:text-5xl font-bold tracking-tighter"
                  />
                  <span className="gradient-sky">{stat.suffix}</span>
                </div>
                <div className="text-sky-text-muted text-sm mt-2">{stat.label}</div>
              </div>
            </FadeContent>
          ))}
        </div>

        {/* Specs grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {specs.map((spec, i) => (
            <FadeContent key={spec.category} blur delay={0.15 * i}>
              <div className="h-full p-6 rounded-2xl border border-sky-border bg-gradient-to-br from-sky-glass/40 to-sky-deep/60 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-sky-glow mb-4 tracking-tight font-mono uppercase text-sm">
                  {spec.category}
                </h3>
                <ul className="space-y-2">
                  {spec.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sky-text text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-electric flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}
