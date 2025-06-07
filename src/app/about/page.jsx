"use client";

import { Mail, Github, Linkedin, Code2 } from "lucide-react"
import { useEffect, useState } from "react";
const userId = "979762331879895102";

const fetchLanyard = async () => {
  const res = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
  const json = await res.json();
  return json.data;
};

export default function AboutPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchLanyard();
      setData(result);
    };
    getData();
    const fetchInterval = setInterval(getData, 5000);

    return () => {
      clearInterval(fetchInterval);
    };
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Yükleniyor...
      </div>
    );
  }

  const user = data.discord_user;
  const avatarUrl = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`;  
  return (
    <div className="min-h-screen bg-gradient-to-br  text-white p-6 flex items-center justify-center animate-fade-in">
      <div className="mt-20 max-w-3xl w-full bg-white/5 rounded-2xl p-6 border border-white/10 shadow-lg">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <img
            src={avatarUrl}
            alt="Profil Fotoğrafı"
            className="w-28 h-28 rounded-full object-cover border-4 border-white/10 shadow"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/fallback-avatar.png"; // public klasöründe fallback-avatar.png adında bir resim olmalı
            }}
          />
          <div>
            <h1 className="text-2xl font-bold mb-1">Abdulrahman Emin</h1>
            <p className="text-sm text-gray-400 mb-2">Full Stack Web Geliştirici</p>
            <p className="text-sm text-gray-300 leading-relaxed font-inter">
            Merhaba! Ben Abdulrahman Emin, web teknolojilerine tutkuyla bağlı bir geliştiriciyim. Modern, kullanıcı dostu ve performanslı web uygulamaları geliştiriyorum. React, Node.js, JavaScript ve C# ile çalışmayı seviyor, aynı zamanda Discord botları ve özel projeler geliştirmekten keyif alıyorum.
            </p>
          </div>
        </div>

        {/* Bilgi Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white/10 border border-white/10 rounded-xl p-4 text-center">
            <h3 className="text-sm text-gray-400 mb-1">Uzmanlıklar</h3>
            <p className="text-base font-semibold text-white">React, Node.js, C++, C#</p>
          </div>
          <div className="bg-white/10 border border-white/10 rounded-xl p-4 text-center">
            <h3 className="text-sm text-gray-400 mb-1">Deneyim</h3>
            <p className="text-base font-semibold text-white">+4 yıl</p>
          </div>
          <div className="bg-white/10 border border-white/10 rounded-xl p-4 text-center">
            <h3 className="text-sm text-gray-400 mb-1">Durum</h3>
            <p className="text-base font-semibold text-emerald-400">Freelance + Açık</p>
          </div>
        </div>

        {/* Sosyal Linkler */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">

            <a
              href="https://github.com/slow3rxq"
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
            Son güncelleme: Haziran 2025
          </div>
        </div>
      </div>
    </div>
  )
}
