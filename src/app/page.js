"use client";

import { useRef, useEffect } from "react";
import { Github, Code } from "lucide-react";
import { FaInstagram, FaKickstarter, FaSpotify } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ProfileCard() {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const skills = ["JavaScript", "Python", "React", "Node.js", "CSS", "C#"];

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start bg-gradient-to-br from-gray-900 to-black py-16">
      <div className="flex flex-col lg:flex-row gap-6 mt-40">
        
        {/* Profil Kartı */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-300 ease-out w-[360px] shadow-xl"
        >
          <div className="flex flex-col items-center text-white mt-5">
            <div className="relative">
              <img className="w-25 h-25 rounded-full" src="slow3rxq.webp" />
            </div>
            <h2 className="text-xl mt-3 font-semibold">Abdulrahman Emin</h2>
            <p className="mt-3 px-4 text-sm text-gray-300 text-center font-sans">
              Selam, Geleceğe yeni teknoloji üretmek için kendimi yazılım dillerinde geliştirmek için elimden geleni yapıyorum genelde react, javascript kullanıyorum
            </p>

            <div className="mt-4 flex justify-center gap-3 text-white">
              {[{ title: "TR", label: "Konum" }, { title: "18", label: "Yaş" }].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-xs w-20 text-center"
                >
                  <span className="text-base font-semibold">{item.title}</span>
                  <span className="block text-[10px] text-gray-400 uppercase">{item.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Sosyal Medya */}
            <div className="flex flex-col items-center gap-3 mt-6">
              <div className="mb-2 w-72 h-[1px] bg-white/20" />
              <div className="flex gap-3">
                {[
                  { icon: <FaInstagram className="w-6 h-6 text-white" />, link: "https://www.instagram.com/slow3rxq/" },
                  { icon: <Github className="w-6 h-6 text-white" />, link: "https://github.com/slow3rxqs" },
                  { icon: <FaSpotify className="w-6 h-6 text-white" />, link: "https://open.spotify.com/user/31frrqycxg4cxv6etvvfsu3tyfdm" },
                  { icon: <FaKickstarter className="w-6 h-6 text-white" />, link: "https://kick.com/slow3rxq" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 flex items-center justify-center text-xs backdrop-blur-md"
                  >
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      {item.icon}
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col gap-6 w-[380px] mt-16">
          {[
            {
              img: "/webuna.png",
              title: "Webuna Software",
              unit: "Web Geliştirme",
              pos: "Kurucu",
              link: "https://instagram.com/webunatr",
            },
          ].map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-4 text-gray-300 text-sm shadow-inner transition-all duration-300 ease-out"
            >
              <div className="flex flex-row items-center gap-4">
                <img src={proj.img} alt="Proje Görseli" className="w-24 h-24 rounded-md object-cover shadow" />
                <div className="flex flex-col items-start text-left">
                  <h3 className="text-white font-medium text-base mb-1">{proj.title}</h3>
                  <p className="text-gray-400 text-xs mb-3 whitespace-nowrap">
                    Çalıştığım Birim: <span className="text-white">{proj.unit}</span>
                  </p>
                  <p className="text-gray-400 text-xs mb-3 -mt-2">
                    Pozisyon: <span className="text-white">{proj.pos}</span>
                  </p>
                  <a href={proj.link} className="bg-white/10 hover:bg-white/20 border border-white/10 text-white px-4 py-1.5 rounded-lg text-xs transition-all duration-200">
                    Daha Fazla
                  </a>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-5 shadow-xl transition-all duration-300 ease-out"
          >
            <div className="flex items-center gap-2 mb-4">
              <Code className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">Beceriler ve Teknolojiler</span>
            </div>
            <motion.div
              className="grid grid-cols-3 gap-2"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="bg-white/5 border border-white/10 rounded-lg p-2 text-xs font-medium text-white text-center"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <footer className="mt-52 text-center text-xs text-gray-500">
        <div className="w-[1000px] h-px bg-white/10 mb-6 mx-auto" />
        <p>© {new Date().getFullYear()} Abdulrahman. Her hakkı saklıdır.</p>
      </footer>
    </div>
  );
}
