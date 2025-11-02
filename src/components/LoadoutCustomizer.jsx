import React, { useMemo, useState } from 'react';
import { Settings } from 'lucide-react';

const WEAPONS = {
  Rifle: ['Red Dot', 'Holo', '4x Scope'],
  SMG: ['Red Dot', 'Holo'],
  Marksman: ['4x Scope', '6x Scope'],
};

const ATTACHMENTS = ['Suppressor', 'Compensator', 'Extended Mag', 'Vertical Grip', 'Laser'];

export default function LoadoutCustomizer() {
  const [weaponClass, setWeaponClass] = useState('Rifle');
  const [optic, setOptic] = useState('Red Dot');
  const [attachment, setAttachment] = useState('Suppressor');
  const [secondary, setSecondary] = useState('Pistol');
  const optics = useMemo(() => WEAPONS[weaponClass] || [], [weaponClass]);

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-8 flex items-center gap-3">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10">
          <Settings size={20} />
        </div>
        <div>
          <h2 className="text-3xl font-bold md:text-4xl">Customize Your Loadout</h2>
          <p className="text-white/70">Fine-tune your kit for range, recoil, and mobility.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h3 className="mb-4 font-semibold">Primary Weapon</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-white/70">Class</label>
              <select
                className="w-full rounded-md border border-white/10 bg-black/40 p-2 outline-none"
                value={weaponClass}
                onChange={(e) => setWeaponClass(e.target.value)}
              >
                {Object.keys(WEAPONS).map((w) => (
                  <option key={w} value={w}>{w}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm text-white/70">Optic</label>
              <select
                className="w-full rounded-md border border-white/10 bg-black/40 p-2 outline-none"
                value={optic}
                onChange={(e) => setOptic(e.target.value)}
              >
                {optics.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm text-white/70">Attachment</label>
              <div className="flex flex-wrap gap-2">
                {ATTACHMENTS.map((a) => (
                  <button
                    key={a}
                    onClick={() => setAttachment(a)}
                    className={`rounded-md border px-3 py-1 text-sm transition ${
                      attachment === a
                        ? 'border-emerald-400 bg-emerald-400/10 text-emerald-300'
                        : 'border-white/10 bg-white/5 text-white/80 hover:bg-white/10'
                    }`}
                  >
                    {a}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h3 className="mb-4 font-semibold">Secondary & Equipment</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-white/70">Secondary</label>
              <select
                className="w-full rounded-md border border-white/10 bg-black/40 p-2 outline-none"
                value={secondary}
                onChange={(e) => setSecondary(e.target.value)}
              >
                {['Pistol', 'Revolver'].map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm text-white/70">Tactical</label>
              <select className="w-full rounded-md border border-white/10 bg-black/40 p-2 outline-none">
                {['Smoke', 'Flash', 'Sensor'].map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm text-white/70">Lethal</label>
              <select className="w-full rounded-md border border-white/10 bg-black/40 p-2 outline-none">
                {['Frag', 'Semtex', 'Thermite'].map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h3 className="mb-4 font-semibold">Build Summary</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between"><span className="text-white/70">Primary:</span> <span>{weaponClass}</span></li>
            <li className="flex justify-between"><span className="text-white/70">Optic:</span> <span>{optic}</span></li>
            <li className="flex justify-between"><span className="text-white/70">Attachment:</span> <span>{attachment}</span></li>
            <li className="flex justify-between"><span className="text-white/70">Secondary:</span> <span>{secondary}</span></li>
          </ul>
          <div className="mt-6 rounded-lg bg-black/40 p-4">
            <h4 className="mb-2 text-xs uppercase tracking-wide text-white/60">Est. Performance</h4>
            <div className="grid grid-cols-3 gap-3 text-center text-sm">
              <div>
                <p className="text-white/60">Range</p>
                <p className="font-semibold">{weaponClass === 'Marksman' ? 'High' : 'Mid'}</p>
              </div>
              <div>
                <p className="text-white/60">Mobility</p>
                <p className="font-semibold">{weaponClass === 'SMG' ? 'High' : 'Mid'}</p>
              </div>
              <div>
                <p className="text-white/60">Control</p>
                <p className="font-semibold">{attachment === 'Compensator' ? 'High' : 'Balanced'}</p>
              </div>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-white px-4 py-2 font-medium text-black transition hover:bg-white/90">Save Loadout</button>
        </div>
      </div>
    </section>
  );
}
