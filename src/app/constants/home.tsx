import {
  VscAccount,
  VscBriefcase,
  VscCode,
  VscTools,
} from "react-icons/vsc";

export const palettes = {
  dark: {
    foreground: "#cccccc",
    description: "#9d9d9d",
    link: "#4daafc",
    tileBackground: "#2b2b2b",
    tileBorder: "rgba(255, 255, 255, 0.1)",
    tileHover: "#323232",
    badgeBackground: "#0078d4",
    badgeForeground: "#ffffff",
  },
  light: {
    foreground: "#3b3b3b",
    description: "#616161",
    link: "#005fb8",
    tileBackground: "#f3f3f3",
    tileBorder: "#e5e5e5",
    tileHover: "#e8e8e8",
    badgeBackground: "#005fb8",
    badgeForeground: "#ffffff",
  },
};

export const walkthroughs = [
  {
    route: "/overview",
    title: "Get to Know Me",
    description: "A quick overview of who I am and what I do.",
    icon: <VscAccount />,
    badge: "Start Here",
  },
  {
    route: "/experience",
    title: "Explore My Experience",
    description: "Roles, responsibilities, and the work I've delivered.",
    icon: <VscBriefcase />,
  },
  {
    route: "/personalprojects",
    title: "Browse My Projects",
    description: "Personal and group projects I've built.",
    icon: <VscCode />,
  },
  {
    route: "/skills",
    title: "Discover My Skills",
    description: "Languages, frameworks, and tools I work with.",
    icon: <VscTools />,
  },
];

export const RECENT_LIMIT = 5;
