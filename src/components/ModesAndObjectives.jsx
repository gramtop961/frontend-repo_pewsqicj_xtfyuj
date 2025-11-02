import React from 'react';
import { Flag, Crosshair, Trophy } from 'lucide-react';

const modes = [
  {
    icon: Flag,
    title: 'Capture Zones',
    desc: 'Fight for rotating control points that force dynamic rotations and coordinated pushes.'
  },
  {
    icon: Crosshair,
    title: 'Elimination',
    desc: 'High-stakes rounds with limited respawns. Trade efficiently and secure the round.'
  },
  {
    icon: Trophy,
    title: 'Solo Ops',
    desc: 'Cinematic missions with stealth entries, breaching, and set-piece encounters.'
  }
];

export default function ModesAndObjectives() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Modes & Objectives</h2>
        <p className="mt-3 text-white/70">
          Choose your fight: coordinated team battles or high-action solo missions.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {modes.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-6">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10">
              <Icon size={20} />
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-white/70">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
