"use client";

import GradientText from "@/components/react-bits/GradientText";
import FadeContent from "@/components/react-bits/FadeContent";
import TiltedCard from "@/components/react-bits/TiltedCard";

const products = [
  {
    title: "Hall Effect Joystick",
    desc: "Contactless magnetic sensing. 1/2/3 axis config. 10M+ cycle life.",
    icon: "◈",
    gradient: "from-sky-electric/20 to-sky-azure/5",
    border: "border-sky-electric/30",
  },
  {
    title: "Industrial Joystick",
    desc: "IP67/IP68 rated. Rugged metal housing. -40°C to +85°C operating.",
    icon: "⬡",
    gradient: "from-sky-azure/20 to-sky-deep/5",
    border: "border-sky-azure/30",
  },
  {
    title: "CAN Bus Controller",
    desc: "J1939/CANopen protocol. Integrated HMI. Real-time diagnostics.",
    icon: "◎",
    gradient: "from-sky-glow/20 to-sky-azure/5",
    border: "border-sky-glow/30",
  },
  {
    title: "Rugged HMI Panel",
    desc: "Sunlight-readable display. IP65 front panel. Multi-touch interface.",
    icon: "▣",
    gradient: "from-sky-electric/20 to-sky-steel/5",
    border: "border-sky-border",
  },
  {
    title: "Operator Armrest",
    desc: "Ergonomic design. Integrated joystick + switches. Vehicle mounting.",
    icon: "⏣",
    gradient: "from-sky-azure/20 to-sky-electric/5",
    border: "border-sky-azure/30",
  },
];

export default function ProductCategories() {
  return (
    <section id="products" className="relative py-24 sm:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <FadeContent blur duration={800} className="text-center mb-16">
          <GradientText
            colors={["#48CAE4", "#00A8E8", "#0077B6", "#90E0EF"]}
            animationSpeed={4}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter mb-4"
          >
            Product Portfolio
          </GradientText>
          <p className="text-sky-text-muted text-lg max-w-2xl mx-auto">
            From precision Hall effect sensors to rugged CAN bus controllers — engineered
            for the world&apos;s most demanding industrial environments.
          </p>
        </FadeContent>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[280px]">
          {/* Featured large card - spans 2 columns on lg */}
          <FadeContent blur delay={0.1} className="lg:col-span-2 lg:row-span-2">
            <div
              className={`relative h-full rounded-2xl border border-sky-electric/30 bg-gradient-to-br from-sky-electric/10 via-sky-deep/80 to-sky-deep overflow-hidden group cursor-pointer`}
            >
              {/* Icon background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-sky-electric/20 to-transparent rounded-bl-full" />
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div>
                  <span className="text-3xl">◈</span>
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mt-4 tracking-tight">
                    Hall Effect Joystick
                  </h3>
                  <p className="text-sky-text-muted mt-3 max-w-md leading-relaxed">
                    Our flagship contactless joystick series. Available in 1-axis, 2-axis,
                    and 3-axis configurations with analog (0-5V), USB, or CAN bus output.
                    Eliminates mechanical wear for over 10 million operating cycles.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["1/2/3 Axis", "0-5V Analog", "USB HID", "CAN J1939", "IP67", "10M+ Cycles"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono rounded-full border border-sky-border bg-sky-glass text-sky-glow"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </FadeContent>

          {/* Remaining product cards */}
          {products.slice(1).map((product, i) => (
            <FadeContent key={product.title} blur delay={0.15 + i * 0.1}>
              <div
                className={`relative h-full rounded-2xl border ${product.border} bg-gradient-to-br ${product.gradient} via-sky-deep/90 to-sky-deep overflow-hidden group cursor-pointer hover:border-sky-electric/50 transition-all duration-500`}
              >
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-2xl">{product.icon}</span>
                    <h3 className="text-xl font-bold text-white mt-3 tracking-tight">
                      {product.title}
                    </h3>
                    <p className="text-sky-text-muted text-sm mt-2 leading-relaxed">
                      {product.desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sky-glow text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>View Details</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>
              </div>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}
