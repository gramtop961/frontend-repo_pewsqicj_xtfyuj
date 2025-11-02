import React from 'react';
import { Target, Map, Shield, Users } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Responsive Gunplay',
    desc: 'Tight recoil patterns, crisp hit feedback, and smooth ADS transitions for precision firefights.'
  },
  {
    icon: Map,
    title: 'Dynamic Maps',
    desc: 'Interactive cover, destructible elements, and flanking routes that reward smart positioning.'
  },
  {
    icon: Shield,
    title: 'Tactical Utilities',
    desc: 'Deploy drones, smokes, and sensor beacons to gain intel and swing key engagements.'
  },
  {
    icon: Users,
    title: 'Teamplay Focused',
    desc: 'Ping system, quick comms, and role-based perks that amplify coordination and strategy.'
  }
];

export default function FeatureHighlights() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Built for Competitive Play</h2>
        <p className="mt-3 text-white/70">
          Every mechanic is tuned for skill expression: movement, aim, map knowledge, and timing.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group rounded-xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10 text-white">
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
