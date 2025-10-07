import { Icons } from "@/components/icons";
import { Briefcase, FolderGit2, GraduationCap, HomeIcon } from "lucide-react";

export const DATA = {
  name: "Marcus Thomaeus",
  initials: "MT",
  url: "https://marcusthomaeus.dev",
  location: "Karlskrona, Sweden",
  locationLink: "https://www.google.com/maps/place/Karlskrona",
  description:
    "Software engineering student focused on cloud-native systems, developer tooling, and AI-assisted workflows.",
  summary:
    "I'm a fourth-year M.Sc. Eng. Software Engineering student at Blekinge Institute of Technology. I enjoy building reliable backend services, diving into data-intensive projects, and experimenting with modern AI agent tooling. When I'm not shipping features, you'll find me iterating on side projects or refining my developer workflow.",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "TypeScript",
    "JavaScript",
    "SQL",
    "C++",
    "React",
    "Next.js",
    "Node.js",
    "Docker",
    "Kubernetes",
    "Git",
    "CI/CD",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/#work", icon: Briefcase, label: "Experience" },
    { href: "/#projects", icon: FolderGit2, label: "Projects" },
    { href: "/#education", icon: GraduationCap, label: "Education" },
  ],
  contact: {
    email: "m.thomaeus@live.se",
    tel: "+46 76 303 55 18",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/macantomato",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/marcus-thomaeus-659b2a1a3/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Email: {
        name: "Email",
        url: "mailto:m.thomaeus@live.se",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Ericsson",
      href: "https://www.ericsson.com/",
      badges: ["Internship"],
      location: "Karlskrona, Sweden (Hybrid)",
      title: "Software Engineering Intern",
      logoUrl: "",
      start: "Sep 2025",
      end: "Jan 2026",
      description:
        "Joining the Applied Intelligence team to explore MCP, agent-to-agent collaboration, and CrewAI workflows that support network operators.",
    },
    {
      company: "KomTek",
      href: "https://komtek.se/",
      badges: ["Teaching Youth Programming"],
      location: "Falkenberg, Sweden",
      title: "Taught programming fundamentals for children aged 11-14",
      logoUrl: "",
      start: "Feb 2020",
      end: "Mar 2020",
      description:
        "As my High-School project, I taught programming funamentals to children aged 11-14 using Scratch and Python.",
    },
  ],
  education: [
    {
      school: "Blekinge Institute of Technology",
      href: "https://www.bth.se/",
      degree: "M.Sc. Eng. Software Engineering",
      logoUrl: "",
      start: "2022",
      end: "Expected 2027",
    },
  ],
  projects: [
    {
      title: "Ai-Financial-Advisor",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "Experimental solo-developed project exploring free tiers of LLM API's to build a personal finance advisor, alongside a graph database to store and query financial data.",
      technologies: [
        "Cypher (Neo4j)",
        "Python",
        "Javascript",
        "LLM rationales",
        "Prompt engineering",
        "Frontend development",
        "FastAPI",
        "Docker",
        "Cloudflare",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/macantomato/AI-driven-investment-advisory",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Frontend",
          href: "https://advisor-worker.m-thomaeus.workers.dev/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "Front-Page.png",
      video: "",
    },
    {
      title: "Flashcard Web App",
      href: "https://d7c81862.flashcards-ev0.pages.dev/",
      dates: "2025",
      active: true,
      description:
        "A full front-end flashcard application built with Javascript, HTML and css, featuring locally stored decks, spaced repetition, and a clean user interface.",
      technologies: ["Javascript", "HTML", "CSS"],
      links: [
        {
          type: "FlashCards",
          href: "https://d7c81862.flashcards-ev0.pages.dev/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [],
  blog: [],
} as const;
