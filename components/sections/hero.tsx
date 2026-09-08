import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "@/components/icons";
import { profile } from "@/lib/data";
export function Hero() {
  return (
    <section
      id="top"
      className="shell relative flex min-h-[calc(100svh-4rem)] items-center py-20"
    >
      <div className="absolute right-0 top-16 -z-10 size-64 rounded-full bg-[#ff5b36]/10 blur-3xl dark:bg-[#ff7959]/10" />
      <div className="max-w-4xl">
        <p className="eyebrow mb-6">Available for thoughtful product work</p>
        <h1 className="max-w-4xl text-[clamp(3.25rem,9vw,7.5rem)] font-semibold leading-[.88] tracking-[-.075em]">
          Enterprise-ready web experiences,
          <br />
          <span className="text-[var(--accent)]">thoughtfully engineered.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
          I&apos;m {profile.name}, a front-end developer specializing in Angular
          and React ecosystems. I build scalable applications that make complex
          work feel clear.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-5 py-3 text-sm font-semibold text-[var(--paper)] transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            View projects <ArrowUpRight className="size-4" />
          </a>
          <a
            href="/resume.pdf"
            download
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-5 py-3 text-sm font-semibold transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Download resume <ArrowDown className="size-4" />
          </a>
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-4 text-[var(--muted)]">
          <span className="inline-flex items-center gap-2 text-sm">
            <MapPin className="size-4 text-[var(--accent)]" />
            {profile.location}
          </span>
          <span className="hidden h-4 border-l border-[var(--line)] sm:block" />
          <div className="flex gap-3">
            <a
              className="focus-ring hover:text-[var(--accent)]"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github className="size-5" />
            </a>
            <a
              className="focus-ring hover:text-[var(--accent)]"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-5" />
            </a>
            <a
              className="focus-ring hover:text-[var(--accent)]"
              href={`mailto:${profile.email}`}
              aria-label="Send an email"
            >
              <Mail className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
