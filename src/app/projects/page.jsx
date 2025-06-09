"use client";

import { Github, ExternalLink } from "lucide-react";
import { FaNpm, FaDiscord, FaGithub } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
const projects = [
  {
    title: "lavinnia bot",
    description: "Kullanıcıların kolay kurulum ve pratik şekilde kullanımlıdır",
    tech: ["Node.js", "Discord.js", "Firebase"],
    discord: "https://discord.gg/8QMjneYC63",
    demo: null,
  },
  {
    title: "slow3rxq portfolio",
    description: "React ve Tailwind ile hazırlanmış modern kişisel web sitesi.",
    tech: ["Next.js", "Tailwind CSS"],
    website: "https://slow3r.xyz",
    demo: null,
  },
  {
    title: "netuser portfolio",
    description: "React ve Tailwind ile hazırlanmış modern kişisel web sitesi.",
    tech: ["Next.js", "Tailwind CSS"],
    website: "https://hakancanpolat.vercel.app/",
    demo: null,
  },
  {
    title: "lavinnia docs",
    description: "React ve Tailwind ile hazırlanmış modern dökümantasyon.",
    tech: ["Next.js", "Tailwind CSS"],
    github: "https://github.com/slow3rxqs/lavinnia-docs",
    demo: null,
  },
  {
    title: "kick-stream",
    description: "React ve Tailwind ile hazırlanmış modern kişisel web sitesi.",
    tech: ["Discord.js", "NPM"],
    npm: "https://www.npmjs.com/package/kick-stream",
    demo: null,
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6">
      <div className="max-w-4xl mx-auto mt-32">
        <h1 className="text-3xl font-bold mb-8 text-center">🧠 Projelerim</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition duration-300 shadow-md animate-fade-in hover:scale-[1.02] ease-out"
            >
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-sm text-gray-300 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-xs text-blue-300 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-500/10 border border-blue-500/30 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {project.discord && (
                  <a
                    href={project.discord}
                    target="_blank"
                    className="flex items-center gap-1 text-sm text-gray-300 hover:text-white"
                  >
                    <FaDiscord className="w-4 h-4" /> Discord Sunucusu
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-1 text-sm text-gray-300 hover:text-white"
                  >
                    <FaGithub className="w-4 h-4" /> Github
                  </a>
                )}
                {project.npm && (
                  <a
                    href={project.npm}
                    target="_blank"
                    className="flex items-center gap-1 text-sm text-gray-300 hover:text-white"
                  >
                    <FaNpm className="w-4 h-4" /> NPM
                  </a>
                )}
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    className="flex items-center gap-1 text-sm text-gray-300 hover:text-white"
                  >
                    <TfiWorld className="w-4 h-4" /> Website
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    className="flex items-center gap-1 text-sm text-gray-300 hover:text-white"
                  >
                    <ExternalLink className="w-4 h-4" /> Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
