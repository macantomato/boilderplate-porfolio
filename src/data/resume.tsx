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
      company: "Blekinge Institute of Technology",
      href: "https://www.bth.se/",
      badges: ["Teaching Assistant"],
      location: "Karlskrona, Sweden",
      title: "Teaching Assistant - Software Engineering",
      logoUrl: "",
      start: "Aug 2024",
      end: "Present",
      description:
        "Support first-year programming courses by hosting weekly labs, reviewing student code, and coaching teams on version control best practices.",
    },
  ],
  education: [
    {
      school: "Blekinge Institute of Technology",
      href: "https://www.bth.se/",
      degree: "M.Sc. Eng. Software Engineering",
      logoUrl: "",
      start: "2021",
      end: "Expected 2026",
    },
  ],
  projects: [
    {
      title: "Agent Playground",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Experimental toolkit for orchestrating MCP-based personas with CrewAI to test autonomous agent workflows for Ericsson use cases.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "CrewAI",
        "OpenAI",
        "TailwindCSS",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/macantomato",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Habit Compass",
      href: "#",
      dates: "2023",
      active: false,
      description:
        "Mobile-first habit tracking app that blends wearable data with reflection prompts to help users build sustainable routines.",
      technologies: ["React Native", "TypeScript", "Expo", "Supabase"],
      links: [
        {
          type: "Case Study",
          href: "#",
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
