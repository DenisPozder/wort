import RefreshScroll from "@/Components/RefreshScroll";
import Hero from "./Components/Hero/Hero";
import RecentProjects from "./Components/RecentProjects/RecentProjects";
import AboutSection from "./Components/AboutSection/AboutSection";

export default function Home() {
  return (
    <main className="page_section">
      <RefreshScroll />
      <Hero />
      <RecentProjects />
      <AboutSection />
    </main>
  );
}
