import { IconType } from "react-icons";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiVite,
  SiTailwindcss,
  SiShadcnui,
  SiAntdesign,
  SiShopify,
  SiFirebase,
  SiNodedotjs,
  SiMongodb,
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiGit,
} from "react-icons/si";

type SkillsProps = {
  icon: IconType;
  color: string;
  skill: string;
  ext: string;
};

export const SkillsList: SkillsProps[] = [
  { icon: SiHtml5, color: "#E34F26", skill: "HTML", ext: ".html" },
  { icon: SiCss, color: "#1572B6", skill: "CSS", ext: ".css" },
  { icon: SiJavascript, color: "#F7DF1E", skill: "JavaScript", ext: ".js" },
  { icon: SiReact, color: "#61DAFB", skill: "React", ext: ".jsx" },
  { icon: SiNextdotjs, color: "#EEF2F0", skill: "Next.js", ext: ".tsx" },
  { icon: SiGit, color: "#F05032", skill: "Git", ext: "vcs" },
  { icon: SiVite, color: "#646CFF", skill: "Vite", ext: "build" },
  { icon: SiTailwindcss, color: "#06B6D4", skill: "Tailwind", ext: ".css" },
  { icon: SiShadcnui, color: "#EEF2F0", skill: "shadcn/ui", ext: "ui" },
  { icon: SiAntdesign, color: "#0170FE", skill: "Ant Design", ext: "ui" },
  { icon: SiNodedotjs, color: "#5FA04E", skill: "NodeJs", ext: ".js" },
  { icon: SiShopify, color: "#7AB55C", skill: "Shopify", ext: "cms" },
  { icon: SiFirebase, color: "#FFCA28", skill: "Firebase", ext: "db" },
  { icon: SiMongodb, color: "#47A248", skill: "MongoDB", ext: "db" },
  {
    icon: SiGoogleanalytics,
    color: "#E37400",
    skill: "Analytics (GA4)",
    ext: "data",
  },
  {
    icon: SiGoogletagmanager,
    color: "#246FDB",
    skill: "Tag Manager",
    ext: "data",
  },
];
