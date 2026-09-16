"use client";

import Image from "next/image";
import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiVuedotjs,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiDotnet,
  SiPython,
  SiPhp,
  SiLaravel,
  SiFlutter,
  SiAndroid,
  SiApple,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiLinux,
  SiFigma,
} from "@icons-pack/react-simple-icons";

/** Official brand icon + brand color, for technologies with a recognizable logo mark. */
const BRAND_ICONS: Record<string, { Icon: React.ComponentType<{ size?: number; color?: string }>; color: string }> = {
  "React.js": { Icon: SiReact, color: "#61DAFB" },
  "React Native": { Icon: SiReact, color: "#61DAFB" },
  "Next.js": { Icon: SiNextdotjs, color: "#000000" },
  "Angular": { Icon: SiAngular, color: "#DD0031" },
  "Vue.js": { Icon: SiVuedotjs, color: "#4FC08D" },
  "HTML5": { Icon: SiHtml5, color: "#E34F26" },
  "CSS3": { Icon: SiCss, color: "#663399" },
  "JavaScript": { Icon: SiJavascript, color: "#F7DF1E" },
  "TypeScript": { Icon: SiTypescript, color: "#3178C6" },
  "Node.js": { Icon: SiNodedotjs, color: "#5FA04E" },
  ".NET": { Icon: SiDotnet, color: "#512BD4" },
  "Python": { Icon: SiPython, color: "#3776AB" },
  "PHP": { Icon: SiPhp, color: "#777BB4" },
  "Laravel": { Icon: SiLaravel, color: "#FF2D20" },
  "Flutter": { Icon: SiFlutter, color: "#02569B" },
  "Android": { Icon: SiAndroid, color: "#3DDC84" },
  "iOS": { Icon: SiApple, color: "#000000" },
  "MySQL": { Icon: SiMysql, color: "#4479A1" },
  "PostgreSQL": { Icon: SiPostgresql, color: "#4169E1" },
  "MongoDB": { Icon: SiMongodb, color: "#47A248" },
  "Google Cloud": { Icon: SiGooglecloud, color: "#4285F4" },
  "Docker": { Icon: SiDocker, color: "#2496ED" },
  "Kubernetes": { Icon: SiKubernetes, color: "#326CE5" },
  "Git": { Icon: SiGit, color: "#F05032" },
  "Linux": { Icon: SiLinux, color: "#FCC624" },
  "Figma": { Icon: SiFigma, color: "#F24E1E" },
};

/** Local SVG fallback for technologies without an available brand icon (trademark-restricted or non-brand concepts). */
const TECH_LOGOS: Record<string, string> = {
  "C#": "CSharp",
  ".NET": "DotNET",
  "Java": "Java",
  "SQL Server": "SQLServer",
  "AWS": "AWS",
  "Azure": "Azure",
  "CI/CD": "CICD",
  "Adobe XD": "Adobe XD",
  "Responsive Design": "Responsive",
  "Design Systems": "Design",
  "AI/ML": "AI",
  "LLM Integration": "LLM",
  "Generative AI": "AI",
  "Computer Vision": "Vision",
  "Intelligent Automation": "Automation",
  "Manual Testing": "Testing",
  "API Testing": "API",
  "Automation": "Automation",
  "Performance": "Performance",
  "AI/ML APIs": "AI",
  "Workflow Automation": "Automation",
  "REST API": "API",
  "JSON": "JSON",
  "Third-Party APIs": "API",
  "Payment Gateways": "Payment",
  "ERP / CRM Integration": "Integration",
};

export function TechLogo({ name }: { name: string }) {
  const brand = BRAND_ICONS[name];
  const [hasError, setHasError] = React.useState(false);

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-navy-100 bg-white p-2 transition hover:border-primary-300 hover:shadow-md">
        {brand ? (
          <brand.Icon size={28} color={brand.color} />
        ) : !hasError ? (
          <Image
            src={`/tech-logos/${TECH_LOGOS[name] || name}.svg`}
            alt={name}
            width={40}
            height={40}
            className="h-8 w-8 object-contain"
            onError={() => setHasError(true)}
          />
        ) : (
          <span className="text-xs font-bold text-primary-700 text-center">{name.split(" ")[0].substring(0, 2)}</span>
        )}
      </div>
      <p className="text-xs font-semibold text-navy-700 text-center max-w-[60px]">{name}</p>
    </div>
  );
}
