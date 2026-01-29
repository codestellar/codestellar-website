import ExperienceTimeline from "./sections/ExperienceTimeline";
import GitHubStats from "../home/sections/GithubStats";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black overflow-hidden -mt-16">
      <ExperienceTimeline />
      <GitHubStats />
    </main>
  );
}
