"use client";

import { useEffect, useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { FaNpm, FaDiscord } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { motion } from "framer-motion"; // ✅ eklendi

const languageColors = {
  JavaScript: "bg-yellow-500/20 border-yellow-400/30 text-yellow-300",
  TypeScript: "bg-blue-500/20 border-blue-400/30 text-blue-300",
  Python: "bg-green-500/20 border-green-400/30 text-green-300",
  "C#": "bg-lime-500/20 border-lime-400/30 text-lime-300",
  Java: "bg-red-500/20 border-red-400/30 text-red-300",
  HTML: "bg-orange-500/20 border-orange-400/30 text-orange-300",
  CSS: "bg-purple-500/20 border-purple-400/30 text-purple-300",
  Go: "bg-cyan-500/20 border-cyan-400/30 text-cyan-300",
  Rust: "bg-orange-600/20 border-orange-500/30 text-orange-400",
  "Next.js": "bg-black/20 border-white/30 text-white",
  React: "bg-cyan-300/20 border-cyan-300/30 text-cyan-200",
  "Tailwind CSS": "bg-teal-500/20 border-teal-400/30 text-teal-300",
  "Node.js": "bg-green-700/20 border-green-600/30 text-green-400",
  "Discord.js": "bg-indigo-600/20 border-indigo-500/30 text-indigo-300",
  Firebase: "bg-amber-400/20 border-amber-300/30 text-amber-200",
  NPM: "bg-red-600/20 border-red-500/30 text-red-300",
  default: "bg-gray-500/20 border-gray-400/30 text-gray-300",
};

const projects = [ /*{ title: "slow3rxq portfolio", description: "React ve Tailwind ile hazırlanmış modern kişisel web sitesi.", tech: ["Next.js", "Tailwind CSS"], website: "https://slow3r.xyz", },*/];

export default function ProjectsPage() {
  const [githubRepos, setGithubRepos] = useState([]);

  useEffect(() => {
    async function fetchAllRepos() {
      let allRepos = [];
      let page = 1;
      let perPage = 100;
      let hasMore = true;

      while (hasMore) {
        const res = await fetch(
          `https://api.github.com/users/slow3rxqs/repos?per_page=${perPage}&page=${page}`
        );
        const data = await res.json();

        if (data && Array.isArray(data)) {
          allRepos = [...allRepos, ...data];
          hasMore = data.length === perPage;
          page++;
        } else {
          hasMore = false;
        }
      }

      const repos = allRepos.map((repo) => ({
        title: repo.name,
        description: repo.description || "Açıklama yok.",
        tech: [repo.language],
        github: repo.html_url,
        language: repo.language || "Bilinmiyor",
      }));

      setGithubRepos(repos);
    }

    fetchAllRepos();
  }, []);

  const renderProjectCard = (project, index) => (
    <motion.div
      key={index}
      className="flex flex-col justify-between bg-white/5 border border-white/10 rounded-xl p-5 shadow-md h-full"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
      <p className="text-sm text-gray-300 mb-3">{project.description}</p>
      <div className="flex flex-wrap gap-2 text-xs mb-4">
        {project.tech?.[0] && (
          <div className="flex flex-wrap gap-2 text-xs mb-4">
            {project.tech.map((tech, i) => {
              const colorClass = languageColors[tech] || languageColors.default;
              return (
                <span
                  key={i}
                  className={`px-2 py-1 rounded-full border ${colorClass}`}
                >
                  {tech}
                </span>
              );
            })}
          </div>
        )}
      </div>
      <div className="flex flex-wrap gap-3">
        {project.discord && (
          <a
            href={project.discord}
            target="_blank"
            className="flex items-center gap-1 text-sm text-gray-300 hover:text-white"
          >
            <FaDiscord className="w-4 h-4" /> Discord
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
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            className="flex items-center gap-1 text-sm text-gray-300 hover:text-white"
          >
            <Github className="w-4 h-4" /> GitHub
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
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6">
      <div className="max-w-6xl mx-auto mt-32 space-y-16">
        {/*<section>
         <h1 className="text-3xl font-bold mb-8 text-center">🧠 Özel Projelerim</h1>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
           {projects.map((project, index) => renderProjectCard(project, index))}
          </div>
         </section>
        */}
        <section>
          <motion.h1
            className="text-3xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            🌐 GitHub Projelerim
          </motion.h1>
          {githubRepos.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {githubRepos.map((repo, index) => renderProjectCard(repo, index))}
            </div>
          ) : (
            <motion.p
              className="text-center text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Yükleniyor veya proje bulunamadı...
            </motion.p>
          )}
        </section>
      </div>
    </div>
  );
}
