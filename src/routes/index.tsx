import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Achievements } from "@/components/portfolio/Achievements";
import { GitHubActivity } from "@/components/portfolio/GitHubActivity";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dhushyandh — Full Stack Developer Portfolio" },
      {
        name: "description",
        content:
          "Full stack developer building scalable software with React, Node.js, cloud infrastructure and AI. Projects, experience, skills and contact.",
      },
      { property: "og:title", content: "Dhushyandh — Full Stack Developer Portfolio" },
      {
        property: "og:description",
        content: "Projects, experience and skills of Dhushyandh, full stack developer.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Achievements />
        <GitHubActivity />
        <Contact />
      </main>
      <footer className="border-t border-border py-10">
        <div className="mx-auto max-w-6xl px-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Dhushyandh. Built with care.
        </div>
      </footer>
    </div>
  );
}
