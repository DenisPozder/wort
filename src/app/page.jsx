import Hero from "./Components/Hero/Hero";
import RecentProjects from "./Components/RecentProjects/RecentProjects";

export default function Home() {
  return (
    <main className="page_section">
      <Hero />
      <RecentProjects />
    </main>
  );
}
