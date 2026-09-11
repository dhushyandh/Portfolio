import { createFileRoute } from "@tanstack/react-router";
import profile from "@/assets/profile-img.png";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Achievements } from "@/components/portfolio/Achievements";
import { GitHubActivity } from "@/components/portfolio/GitHubActivity";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ChatWidget } from "@/components/portfolio/ChatWidget";
import { CursorGlow } from "@/components/portfolio/CursorGlow";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dhushyandh | MERN Stack Developer" },
      {
        name: "description",
        content:
          "Dhushyandh is a MERN Stack Developer specializing in React, Next.js, Node.js, Express, MongoDB and modern web applications. Explore 8 projects, case studies, skills and get in touch.",
      },
      {
        name: "keywords",
        content:
          "Dhushyandh, dhushyandh n, dhushy, dhushyanth, CAHCET, cahcet, MERN Stack Developer, React Developer, Next.js Developer, Node.js Developer, Express.js, MongoDB, JavaScript, Full Stack Developer, Portfolio, India, Software Engineer, Web Portfolio, React Portfolio, Next.js Portfolio, Frontend Developer, Backend Developer, Open Source",
      },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { property: "og:title", content: "Dhushyandh | MERN Stack Developer" },
      {
        property: "og:description",
        content:
          "Modern full-stack web applications built using React, Next.js, Node.js, Express & MongoDB. Projects, case studies, experience and contact.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Dhushyandh" },
      { property: "og:url", content: "https://dhushyandh.in/" },
      { property: "og:image", content: "https://dhushyandh.in/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Dhushyandh Portfolio" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Dhushyandh | MERN Stack Developer" },
      {
        name: "twitter:description",
        content:
          "Modern full-stack web applications built using React, Next.js, Node.js, Express & MongoDB.",
      },
      { name: "twitter:image", content: "https://dhushyandh.in/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://dhushyandh.in/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              name: "Dhushyandh N",
              alternateName: "Dhushyandh",
              jobTitle: "MERN Stack Developer",
              url: "https://dhushyandh.in",
              image: profile,
              email: "mailto:dhushyandhneduncheziyan4896@gmail.com",
              description:
                "MERN Stack Developer specializing in React, Next.js, Node.js, Express.js and MongoDB.",
              knowsAbout: [
                "React",
                "Next.js",
                "Node.js",
                "Express.js",
                "TypeScript",
                "MongoDB",
                "PostgreSQL",
                "Tailwind CSS",
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
              name: "Dhushyandh",
              url: "https://dhushyandh.in",
              inLanguage: "en",
              about: { "@type": "Person", name: "Dhushyandh N" },
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
      <CursorGlow />
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
      <Footer />
      <ChatWidget />
    </div>
  );
}
