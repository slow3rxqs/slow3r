"use client";

import { motion } from "framer-motion";
import { referansList } from "./referansList";

export default function Page() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center p-4 bg-gradient-to-br from-gray-900 to-black"
    >
      {/* Başlık ve Açıklama */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-12 max-w-2xl mt-32"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text">
          Referanslar
        </h1>
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
          Hizmet verdiğimiz iş ortaklarımızdan bazıları. Başarılı iş birliklerimiz
          kalitemizi ve güvenilirliğimizi yansıtıyor..
        </p>
      </motion.div>

      {/* Kartlar */}
      <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {referansList.map((referans, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3 + index * 0.1,
              ease: "easeOut",
            }}
            className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl hover:scale-[1.02] transition-all duration-300 ease-out p-8 w-[360px] shadow-xl hover:shadow-2xl hover:bg-white/10"
          >
            <div className="flex flex-col items-center text-white">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.5 + index * 0.1,
                }}
                className="relative mb-6"
              >
                <img
                  src={referans.image}
                  alt="Avatar"
                  className="w-28 h-28 rounded-full border-4 border-white/20 shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </motion.div>

              <h3 className="text-xl font-semibold text-center mb-2 leading-tight">
                {referans.name}
              </h3>

              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent mb-4"></div>

              <p className="text-gray-300 text-sm text-center mb-6 leading-relaxed">
                {referans.description}
              </p>
            </div>

            <div className="absolute bottom-4 left-6">
              <a
                href={referans.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200 group"
              >
                <svg
                  className="w-4 h-4 group-hover:scale-110 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                    clipRule="evenodd"
                  />
                </svg>
                Website
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
