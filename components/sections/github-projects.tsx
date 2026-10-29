"use client";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { ArrowUpRight, GitFork, Github, Star } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import type { GithubRepo } from "@/lib/github";
const themes = [
  "from-orange-400/80 via-orange-200 to-[#fff0e9] dark:from-orange-500/40 dark:to-[#1c2433]",
  "from-sky-500/70 via-sky-200 to-[#e9f6ff] dark:from-sky-500/40 dark:to-[#1c2433]",
  "from-violet-500/70 via-violet-200 to-[#f3edff] dark:from-violet-500/40 dark:to-[#1c2433]",
  "from-emerald-500/70 via-emerald-200 to-[#eafff4] dark:from-emerald-500/40 dark:to-[#1c2433]",
];
// GitHub's linguist colors for the languages most likely to appear.
const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  HTML: "#e34c26",
  CSS: "#563d7c",
  SCSS: "#c6538c",
  Python: "#3572A5",
  Java: "#b07219",
  "C#": "#178600",
  Vue: "#41b883",
};
const PAGE_SIZE = 8;
const dateFormat = new Intl.DateTimeFormat("en", {
  month: "short",
  year: "numeric",
});
type Filter = "all" | "live" | (string & {});
export function GithubProjects({ repos }: { repos: GithubRepo[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [visible, setVisible] = useState(PAGE_SIZE);
  const languages = useMemo(() => {
    const counts = new Map<string, number>();
    for (const repo of repos) {
      if (repo.language)
        counts.set(repo.language, (counts.get(repo.language) ?? 0) + 1);
    }
    return [...counts.entries()].sort((a, b) => b[1] - a[1]).map(([l]) => l);
  }, [repos]);
  const liveCount = repos.filter((repo) => repo.liveUrl).length;
  const filtered = repos.filter((repo) =>
    filter === "all"
      ? true
      : filter === "live"
        ? repo.liveUrl
        : repo.language === filter,
  );
  const shown = filtered.slice(0, visible);
  const chips: { value: Filter; label: string }[] = [
    { value: "all", label: `All (${repos.length})` },
    { value: "live", label: `Live demo (${liveCount})` },
    ...languages.map((language) => ({ value: language, label: language })),
  ];
  return (
    <>
      <div className="mt-10 flex flex-wrap gap-2">
        {chips.map((chip) => (
          <button
            key={chip.value}
            type="button"
            onClick={() => {
              setFilter(chip.value);
              setVisible(PAGE_SIZE);
            }}
            aria-pressed={filter === chip.value}
            className={`focus-ring rounded-full border px-3 py-1.5 font-mono text-xs transition ${
              filter === chip.value
                ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                : "border-[var(--line)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--ink)]"
            }`}
          >
            {chip.label}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {shown.map((repo, index) => (
          <Reveal key={repo.id} delay={(index % PAGE_SIZE) * 0.06}>
            <motion.article
              whileHover={{ y: -7 }}
              transition={{ type: "spring", stiffness: 330, damping: 22 }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--paper)]"
            >
              <div
                className={`relative h-40 overflow-hidden bg-gradient-to-br ${themes[index % themes.length]}`}
              >
                <div className="absolute inset-6 rounded-xl border border-white/50 bg-white/25 p-4 backdrop-blur-sm">
                  <div className="h-2 w-16 rounded-full bg-white/65" />
                  <div className="mt-5 h-2 w-4/5 rounded-full bg-white/55" />
                  <div className="mt-3 h-2 w-3/5 rounded-full bg-white/45" />
                </div>
                {repo.liveUrl && (
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/85 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                    <span className="size-1.5 rounded-full bg-emerald-500" />
                    Live
                  </span>
                )}
                <span className="absolute right-4 top-4 font-mono text-xs font-bold text-white/80">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between gap-3 font-mono text-xs text-[var(--muted)]">
                  {repo.language ? (
                    <span className="inline-flex items-center gap-1.5">
                      <span
                        className="size-2.5 rounded-full"
                        style={{
                          backgroundColor:
                            languageColors[repo.language] ?? "var(--accent)",
                        }}
                      />
                      {repo.language}
                    </span>
                  ) : (
                    <span>Repository</span>
                  )}
                  <span className="inline-flex items-center gap-3">
                    <span
                      className="inline-flex items-center gap-1"
                      title="Stars"
                    >
                      <Star className="size-3.5" /> {repo.stars}
                    </span>
                    <span
                      className="inline-flex items-center gap-1"
                      title="Forks"
                    >
                      <GitFork className="size-3.5" /> {repo.forks}
                    </span>
                  </span>
                </div>
                <h3 className="mt-3 text-xl font-semibold tracking-tight break-words">
                  {repo.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  {repo.description ?? "No description provided yet."}
                </p>
                {repo.topics.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {repo.topics.slice(0, 5).map((topic) => (
                      <span
                        key={topic}
                        className="rounded-full bg-[var(--ink)]/[.06] px-2.5 py-1 font-mono text-[10px] text-[var(--muted)] dark:bg-white/[.08]"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}
                <p className="mt-5 font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
                  Updated {dateFormat.format(new Date(repo.updatedAt))}
                </p>
                <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6">
                  {repo.liveUrl && (
                    <a
                      href={repo.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="focus-ring inline-flex items-center gap-1 text-sm font-semibold text-[var(--ink)] transition hover:text-[var(--accent)]"
                    >
                      Live demo <ArrowUpRight className="size-4" />
                    </a>
                  )}
                  <a
                    href={repo.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--muted)] transition hover:text-[var(--accent)]"
                  >
                    <Github className="size-4" /> Source
                  </a>
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="mt-8 text-sm text-[var(--muted)]">
          No repositories match this filter.
        </p>
      )}
      {visible < filtered.length && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="focus-ring rounded-full border border-[var(--line)] px-5 py-2.5 text-sm font-semibold transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Show more ({filtered.length - visible} left)
          </button>
        </div>
      )}
    </>
  );
}
