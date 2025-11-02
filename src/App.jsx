import React from 'react';
import HeroScene from './components/HeroScene';
import FeatureHighlights from './components/FeatureHighlights';
import ModesAndObjectives from './components/ModesAndObjectives';
import LoadoutCustomizer from './components/LoadoutCustomizer';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#0A0A0B] to-[#0F1115] text-white">
      <HeroScene />
      <FeatureHighlights />
      <ModesAndObjectives />
      <LoadoutCustomizer />
      <footer className="mx-auto max-w-6xl px-6 py-12 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Ravenfield: Tactical Ops — Pre-Alpha Build
      </footer>
    </div>
  );
}
