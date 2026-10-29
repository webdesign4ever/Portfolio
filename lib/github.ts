import { profile } from "@/lib/data";

export type GithubRepo = {
  id: number;
  name: string;
  title: string;
  description: string | null;
  repoUrl: string;
  liveUrl: string | null;
  language: string | null;
  topics: string[];
  stars: number;
  forks: number;
  updatedAt: string;
};

type ApiRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics?: string[];
  stargazers_count: number;
  forks_count: number;
  pushed_at: string;
  fork: boolean;
  private: boolean;
  archived: boolean;
};

export const githubUsername =
  process.env.GITHUB_USERNAME ?? profile.github.split("/").pop()!;

// "React-RTK-TS-Project" -> "React RTK TS Project"
const toTitle = (name: string) =>
  name.replace(/[-_]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

const toLiveUrl = (homepage: string | null) => {
  const url = homepage?.trim();
  if (!url) return null;
  return /^https?:\/\//.test(url) ? url : `https://${url}`;
};

export async function getGithubRepos(): Promise<GithubRepo[] | null> {
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  // Optional: raises the rate limit from 60 to 5000 requests/hour.
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const res = await fetch(
      `https://api.github.com/users/${githubUsername}/repos?type=owner&sort=pushed&per_page=100`,
      { headers, next: { revalidate: 3600 } },
    );
    if (!res.ok) return null;
    const repos: ApiRepo[] = await res.json();

    return repos
      .filter(
        (repo) =>
          !repo.fork &&
          !repo.private &&
          !repo.archived &&
          // Skip the profile README repo.
          repo.name.toLowerCase() !== githubUsername.toLowerCase(),
      )
      .map((repo) => ({
        id: repo.id,
        name: repo.name,
        title: toTitle(repo.name),
        description: repo.description,
        repoUrl: repo.html_url,
        liveUrl: toLiveUrl(repo.homepage),
        language: repo.language,
        topics: repo.topics ?? [],
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        updatedAt: repo.pushed_at,
      }))
      // Deployed projects first, otherwise keep GitHub's most-recently-pushed order.
      .sort((a, b) => Number(!!b.liveUrl) - Number(!!a.liveUrl));
  } catch {
    return null;
  }
}
