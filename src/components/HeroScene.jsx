import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Play } from 'lucide-react';

export default function HeroScene() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/5YxL7sRKqGZo4PMQ/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient + vignette overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-0" style={{ boxShadow: 'inset 0 0 200px rgba(0,0,0,0.6)' }} />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Live Pre-Alpha Gameplay Preview
        </div>
        <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
          Tactical FPS. Cinematic Action.
        </h1>
        <p className="mt-4 max-w-2xl text-white/80">
          A fast-paced first-person shooter with fluid movement, responsive gunplay, and modern tactics. Master the map, secure the objective, and outplay the opposition.
        </p>
        <div className="mt-8 flex gap-3">
          <button className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 font-medium text-black transition hover:bg-white/90">
            <Play size={18} />
            Play Demo
          </button>
          <button className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-4 py-2 font-medium text-white transition hover:bg-white/10">
            Learn More
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
