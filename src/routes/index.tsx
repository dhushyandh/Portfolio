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
      { title: "Dhushyandh | Full Stack Developer & Cloud Engineer" },
      {
        name: "description",
        content:
          "Dhushyandh is a full stack developer specialising in React, Node.js, MongoDB, PostgreSQL, AWS and AI-powered apps. Explore 8 projects, case studies, skills and hire me.",
      },
      {
        name: "keywords",
        content:
          "Dhushyandh, full stack developer, MERN stack developer, React developer, Node.js developer, cloud engineer, AI developer portfolio, hire full stack developer",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "Dhushyandh | Full Stack Developer & Cloud Engineer" },
      {
        property: "og:description",
        content:
          "Full stack developer building scalable React, Node.js and cloud applications. Projects, case studies, experience and contact.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Dhushyandh Portfolio" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Dhushyandh | Full Stack Developer & Cloud Engineer" },
      {
        name: "twitter:description",
        content:
          "Full stack developer building scalable React, Node.js and cloud applications.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              name: "Dhushyandh Neduncheziyan",
              alternateName: "Dhushyandh",
              jobTitle: "Full Stack Developer",
              email: "mailto:dhushyandhneduncheziyan4896@gmail.com",
              description:
                "Full stack developer building scalable software with React, Node.js, cloud infrastructure and AI.",
              knowsAbout: [
                "React",
                "Next.js",
                "Node.js",
                "TypeScript",
                "MongoDB",
                "PostgreSQL",
                "AWS",
                "Docker",
                "Artificial Intelligence",
              ],
              sameAs: [
                "https://github.com/dhushyandh",
                "https://linkedin.com/in/dhushyandh",
              ],
            },
            {
              "@type": "WebSite",
              name: "Dhushyandh Portfolio",
              inLanguage: "en",
              about: { "@type": "Person", name: "Dhushyandh Neduncheziyan" },
            },
          ],
        }),
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
