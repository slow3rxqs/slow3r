"use client";

import { Mail, Github, Linkedin, Code2, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen bg-gradient-to-br text-white p-6 flex items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="mt-20 max-w-3xl w-full bg-white/5 rounded-2xl p-6 border border-white/10 shadow-lg"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            src="/slow3rxq.webp"
            alt="Profil Fotoğrafı"
            className="w-25 rounded-full object-cover shadow"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/fallback-avatar.png";
            }}
          />
          <div>
            <h1 className="text-2xl font-bold mb-1">Abdulrahman Emin</h1>
            <p className="text-sm text-gray-400 mb-2">Full Stack Web Geliştiricisi</p>
            <p className="text-sm text-gray-300 leading-relaxed font-inter">
              Merhaba! Ben web teknolojilerine tutkuyla bağlı bir geliştiriciyim. Modern,
              kullanıcı dostu ve yüksek performanslı web uygulamaları geliştiriyorum. React,
              Node.js, JavaScript ve C# ile çalışmanın yanı sıra özel projeler geliştirmekten
              de keyif alıyorum.
            </p>
          </div>
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2, delayChildren: 0.6 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6"
        >
          {[
            { title: "Uzmanlık Alanlarım", value: "React, Node.js, C++, C#" },
            { title: "Deneyimlerim", value: "+4 year" },
            { title: "Durum", value: "Webuna Software" },
          ].map((card, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="bg-white/10 border border-white/10 rounded-xl p-4 text-center"
            >
              <h3 className="text-sm text-gray-400 mb-1">{card.title}</h3>
              <p className="text-base font-semibold text-white">{card.value}</p>
            </motion.div>
          ))}
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/slow3rxqs"
              target="_blank"
              className="text-gray-300 hover:text-white transition flex items-center gap-1 text-sm"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/abdulrahman-emin-85954b32b/"
              target="_blank"
              className="text-gray-300 hover:text-white transition flex items-center gap-1 text-sm"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
          <div className="text-xs text-gray-500 flex items-center gap-1">
            <Code2 className="w-3 h-3" />
            Son Güncelleme: Eylül 2025
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
