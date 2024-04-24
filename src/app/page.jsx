import RefreshScroll from "@/Components/RefreshScroll";
import Hero from "./Components/Hero/Hero";
import RecentProjects from "./Components/RecentProjects/RecentProjects";
import AboutSection from "./Components/AboutSection/AboutSection";

export const metadata = {
  title: "Wort",
  description: "Welcome to Wort, where we specialize in conceptualizing and designing engaging websites and brand identities.",
};

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
