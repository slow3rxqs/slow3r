"use client";

import { useEffect, useState, useRef } from "react";
import { Github, Code } from "lucide-react";
import { FaDiscord, FaSpotify, FaInstagram, FaKickstarter } from "react-icons/fa";

// Kullanıcı ID'nizi buraya yazın
const userId = "979762331879895102";

const fetchLanyard = async () => {
  const res = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
  const json = await res.json();
  return json.data;
};

const customGameIcons = {
  "Counter-Strike 2": "/cs2-icon.png",
  "Valorant": "/valorant-icon.png",
  "ROBLOX": "/roblox-icon.png",
  "EA Sports FC 24": "/fc-24.png"
};

export default function LanyardCard() {
  const [data, setData] = useState(null);
  const [time, setTime] = useState(Date.now());
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongTitle, setCurrentSongTitle] = useState("");

  useEffect(() => {
    const getData = async () => {
      const result = await fetchLanyard();
      setData(result);
    };
    getData();
    const fetchInterval = setInterval(getData, 5000);
    const timeInterval = setInterval(() => setTime(Date.now()), 1000);

    return () => {
      clearInterval(fetchInterval);
      clearInterval(timeInterval);
    };
  }, []);

  const handlePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.play();
      setIsPlaying(true);
      setCurrentSongTitle("🎵 Aydilge - Aşk Paylaşılmaz");

      audio.onended = () => {
        setIsPlaying(false);
        setCurrentSongTitle("");
      };
    }
  };

  const handlePause = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const skills = ['JavaScript', 'Python', 'React', 'Node.js', 'CSS', 'C#'];

  if (!data) return <p className="text-white text-center mt-[450px]">Yükleniyor...</p>;

  const user = data.discord_user;
  const avatarUrl = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`;
  const statusColors = {
    online: "bg-green-500",
    idle: "bg-yellow-500",
    dnd: "bg-red-500",
    offline: "bg-gray-500",
  };

  const formatTime = (start, end) => {
    const totalSec = Math.floor((end - start) / 1000);
    const min = Math.floor(totalSec / 60);
    const sec = totalSec % 60;
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  let spotifyProgress = 0;
  if (data.spotify) {
    spotifyProgress =
      ((time - data.spotify.timestamps.start) /
        (data.spotify.timestamps.end - data.spotify.timestamps.start)) *
      100;
  }

  const activeApp = data.activities.find((activity) => activity.name === "Visual Studio Code");
  const gameActivity = data.activities?.find((a) => a.type === 0);
  const currentActivity = gameActivity || activeApp;

  const activityName = currentActivity?.name;
  const activityDetails = currentActivity?.details?.replace(/\n/g, " ");
  const activityState = currentActivity?.state?.replace(/\n/g, " ");
  const applicationId = currentActivity?.application_id;
  const imageKey = currentActivity?.assets?.large_image;

  const imageUrl =
    customGameIcons[activityName] ??
    (applicationId && imageKey
      ? `https://cdn.discordapp.com/app-assets/${applicationId}/${imageKey}.png`
      : "/fallback.png");

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start bg-gradient-to-br from-gray-900 to-black py-16">
      <div className="flex flex-col lg:flex-row gap-6 mt-40">
        <div className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 w-[360px] shadow-xl">
          <div className="flex flex-col items-center text-white">
            <div className="relative">
              <img
                src={avatarUrl}
                alt="Avatar"
                className="w-24 h-24 rounded-full border-4 border-white/10 shadow-md"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/fallback-avatar.png";
                }}
              />
              <span
                className={`absolute bottom-1 right-1 w-4 h-4 rounded-full border-2 border-gray-900 ${statusColors[data.discord_status]}`}
              />
            </div>
            <h2 className="text-xl mt-3 font-semibold">Abdulrahman Emin</h2>
            <p className="text-gray-600 text-sm">@{user.username}</p>
            <p className="mt-3 px-4 text-sm text-gray-300 text-center font-sans">
              Merhaba! Ben React ve Discord botlarıyla uğraşmayı seven bir geliştiriciyim.
            </p>

            <div className="mt-4 flex justify-center gap-3 text-white">
              {[{ title: "TR", label: "Konum" }, { title: "18", label: "Yaş" }].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-xs w-20 text-center">
                  <span className="text-base font-semibold">{item.title}</span>
                  <span className="block text-[10px] text-gray-400 uppercase">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex gap-3">
              {[
                { href: "https://www.instagram.com/slow3rxq/", icon: <FaInstagram className="w-6 h-6" /> },
                { href: "https://github.com/slow3rxqs", icon: <Github className="w-6 h-6" /> },
                { href: "https://discord.gg/DRCE9wCn4K", icon: <FaDiscord className="w-6 h-6" /> },
                { href: "https://open.spotify.com/user/31frrqycxg4cxv6etvvfsu3tyfdm", icon: <FaSpotify className="w-6 h-6" /> },
                { href: "https://kick.com/slow3rxq", icon: <FaKickstarter className="w-6 h-6" /> },
              ].map(({ href, icon }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                  className="bg-white/5 border border-white/10 rounded-lg p-2 text-white">
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 w-[360px]">
          {data.listening_to_spotify && data.spotify ? (
            <div className="bg-gradient-to-br from-green-900/10 to-green-900/20 rounded-xl p-4 text-white shadow-md">
              <p className="text-green-400 font-semibold text-sm mb-3">🎵 Şu Anda Dinliyor</p>
              <div className="flex gap-4">
                <img src={data.spotify.album_art_url} alt="Album Art" className="w-14 h-14 rounded-md shadow" />
                <div className="flex-1">
                  <p className="text-sm font-semibold">{data.spotify.song}</p>
                  <p className="text-xs text-gray-400">{data.spotify.artist}</p>
                </div>
              </div>
              <div className="mt-3">
                <div className="w-full h-1.5 bg-gray-700 rounded-full">
                  <div className="h-1.5 bg-green-500 rounded-full" style={{ width: `${spotifyProgress}%` }} />
                </div>
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>{formatTime(data.spotify.timestamps.start, Date.now())}</span>
                  <span>{formatTime(data.spotify.timestamps.start, data.spotify.timestamps.end)}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gray-800/50 rounded-xl p-4 text-gray-300 text-sm text-center shadow-inner">
              {isPlaying ? (
                <p className="mb-3">
                  Şu anda çalan şarkı: <span className="font-semibold text-white">{currentSongTitle}</span>
                </p>
              ) : (
                <p className="mb-3">Şu anda şarkı çalmıyor. Dinlemek istersen butona bas!</p>
              )}
              <div className="flex justify-center space-x-4">
                <button onClick={handlePlay} className="bg-white/5 border border-white/10 text-white px-5 py-2 rounded-lg">
                  Şarkıyı Çal
                </button>
                <button onClick={handlePause} className="bg-white/5 border border-white/10 text-white px-5 py-2 rounded-lg">
                  Durdur
                </button>
              </div>
              <audio ref={audioRef} src="/muzikler/ornek.mp3" preload="auto" />
            </div>
          )}
          {currentActivity ? (
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-white shadow-md flex items-center gap-4">
              <img src={imageUrl} alt={activityName} className="w-14 h-14 rounded-md object-cover shadow" />
              <div>
                <p className="text-sm font-semibold">{activityName}</p>
                {activityDetails && <p className="text-xs text-gray-400">{activityDetails}</p>}
                {activityState && <p className="text-xs text-gray-400">{activityState}</p>}

                {currentActivity?.timestamps?.start && (
                  <p className="text-xs text-gray-400 ">
                    Oynama süresi: {formatTime(currentActivity.timestamps.start, Date.now())}
                  </p>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-gray-800/50 rounded-xl p-4 text-gray-300 text-sm text-center shadow-inner">
              Şu anda herhangi bir uygulama açık değil.
            </div>
          )}
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-5 shadow-xl">
            <div className="flex items-center gap-2 mb-4">
              <Code className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">Beceri ve Teknolojiler</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {skills.map((skill, index) => (
                <div key={index} className="bg-white/10 border border-white/10 rounded-lg p-2 text-xs font-medium text-white text-center">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <footer className="mt-40 text-center text-xs text-gray-500">
        <div className="w-[1000px] h-px bg-white/10 mb-6 mx-auto" />
        <p>© {new Date().getFullYear()} Abdulrahman Emin. Tüm Hakları Saklıdır.</p>
      </footer>
    </div>
  );
}
