import { Reveal } from "@/components/reveal";
import { profile } from "@/lib/data";
export function About() {
  return (
    <section
      id="about"
      className="border-y border-[var(--line)] bg-white/35 py-24 dark:bg-white/[.02]"
    >
      <div className="shell grid gap-10 md:grid-cols-[.7fr_1.3fr]">
        <Reveal>
          <p className="eyebrow">01 / About</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="section-title max-w-2xl">
            A builder who cares about both the system and the screen.
          </h2>
          <p className="section-copy mt-7 max-w-2xl">{profile.about}</p>
          <div className="mt-10 grid max-w-xl grid-cols-2 gap-3">
            <div className="rounded-2xl border border-[var(--line)] p-5">
              <p className="font-mono text-2xl font-bold text-[var(--accent)]">
                2+
              </p>
              <p className="mt-1 text-sm text-[var(--muted)]">
                years learning and shipping
              </p>
            </div>
            {/* <div className="rounded-2xl border border-[var(--line)] p-5">
              <p className="font-mono text-2xl font-bold text-[var(--accent)]">
                2
              </p>
              <p className="mt-1 text-sm text-[var(--muted)]">
                front-end ecosystems
              </p>
            </div> */}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
