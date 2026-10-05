"use client";

import SoftAurora from "@/components/react-bits/SoftAurora";
import BlurText from "@/components/react-bits/BlurText";
import Magnet from "@/components/react-bits/Magnet";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden flex items-center justify-center">
      {/* Aurora background */}
      <div className="absolute inset-0 z-0">
        <SoftAurora
          color1="#0077B6"
          color2="#48CAE4"
          speed={0.35}
          brightness={0.7}
          noiseFrequency={2.8}
          noiseAmplitude={1.0}
          bandHeight={0.42}
          bandSpread={1.2}
          octaveDecay={0.12}
          mouseInfluence={0.25}
        />
      </div>

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-sky-deep/40 to-sky-deep" />

      {/* Grid lines pattern for cockpit feel */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(72,202,228,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(72,202,228,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Scanline overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.04] pointer-events-none"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(72,202,228,0.15) 2px,
            rgba(72,202,228,0.15) 4px
          )`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-6xl mx-auto w-full">
        {/* Subheadline */}
        <div className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-border bg-sky-glass backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-sky-electric animate-pulse" />
          <span className="text-xs tracking-[0.2em] uppercase text-sky-glow font-mono">
            OEM / ODM Industrial Control Solutions
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-white mb-6">
          <BlurText
            text="Precision Control"
            delay={80}
            animateBy="letters"
            direction="top"
            stepDuration={0.3}
            className="justify-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter"
          />
          <span className="block mt-2 gradient-sky">
            <BlurText
              text="Industrial Joystick & HMI"
              delay={80}
              animateBy="letters"
              direction="top"
              stepDuration={0.3}
              className="justify-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter gradient-sky"
            />
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-sky-text-muted max-w-2xl mb-10 leading-relaxed">
          Hall effect joystick controllers, CAN bus systems, and rugged HMI panels
          engineered for cranes, marine vessels, mining machinery, and UAV ground
          control stations.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Magnet padding={80} magnetStrength={3}>
            <a
              href="#rfq"
              className="inline-flex items-center gap-2 px-8 py-4 bg-sky-electric hover:bg-sky-azure text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-sky-electric/25 hover:shadow-sky-electric/40 hover:scale-105"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
              Request Quote
            </a>
          </Magnet>
          <Magnet padding={80} magnetStrength={3}>
            <a
              href="#products"
              className="inline-flex items-center gap-2 px-8 py-4 border border-sky-border bg-sky-glass backdrop-blur-sm text-sky-cloud font-semibold rounded-xl transition-all duration-300 hover:bg-sky-glass/20 hover:border-sky-electric/40"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
              Product Catalog
            </a>
          </Magnet>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-sky-text-muted/60">
          <span className="text-xs tracking-[0.3em] uppercase font-mono">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-sky-border flex items-start justify-center p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-sky-glow animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
