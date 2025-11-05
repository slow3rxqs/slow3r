"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Circle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MinimalNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["anasayfa", "hakkımda",];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Anasayfa", href: "/" },
    { name: "Hakkımda", href: "/about" },
    { name: "Projelerim", href: "/projects" },
    { name: "Referanslar", href: "/referans" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -6 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.07 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -8 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 400, damping: 28 },
    },
  };

  const brandTextVariants = {
    hidden: { opacity: 0, y: -8 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 400, damping: 28 },
    },
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "backdrop-blur-md shadow-lg" : "backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
          <div className="relative flex items-center justify-center h-20">
            <div className="absolute left-0 flex items-center">
              <a href="/" className="flex items-center group">
                <motion.div
                  initial={{ scale: 0.96, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="relative"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <span className="text-white font-bold text-xl">A</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="ml-4"
                  initial="hidden"
                  animate="show"
                  variants={containerVariants}
                >
                  <motion.span 
                    className="text-xl font-bold text-white block"
                    variants={brandTextVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    Abdulrahman
                  </motion.span>
                  <motion.span 
                    className="block text-sm text-slate-500 -mt-1"
                    variants={brandTextVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    Web Geliştiricisi
                  </motion.span>
                </motion.div>
              </a>
            </div>

            <div className="hidden lg:block">
              <motion.div
                initial="hidden"
                animate="show"
                variants={containerVariants}
                className="flex items-center space-x-8"
              >
                {navItems.map((item) => {
                  const active = activeSection === item.href.substring(1);
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      variants={itemVariants}
                      whileHover={{ scale: 1.03 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      className={`relative text-sm font-medium transition-colors duration-300 ${
                        active
                          ? "text-white"
                          : "text-white hover:text-white"
                      }`}
                    >
                      <span className="relative inline-block">
                        {item.name}
                        <motion.span
                          className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full"
                          style={{ display: "block" }}
                          initial={false}
                          animate={{ width: active ? "100%" : "0%" }}
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                        />
                      </span>
                    </motion.a>
                  );
                })}
              </motion.div>
            </div>

            <div className="hidden md:block absolute right-0">
              <motion.a
                href="https://www.instagram.com/slow3rxq"
                target="_blank"
                className="group relative inline-flex items-center px-6 py-3 rounded-xl text-sm font-semibold text-white bg-slate-900 shadow-lg overflow-hidden"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 400, damping: 28 }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#1e293b",
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-indigo-500/20 opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.div
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  animate={{ translateX: "200%" }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    repeatDelay: 3,
                    ease: "easeInOut" 
                  }}
                />
                
                <motion.span
                  className="relative z-10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  İletişim
                </motion.span>
                
                <motion.div
                  className="relative z-10"
                  initial={{ x: 0, rotate: 0 }}
                  whileHover={{ x: 4, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.div>
              </motion.a>
            </div>

            <div className="lg:hidden absolute right-0">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-white/10 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            <motion.div
              className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
            />

            <motion.div
              className="absolute top-24 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-sm bg-white/5 rounded-2xl shadow-2xl border border-white/10"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <div className="p-6">
                <motion.div
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.06 } },
                  }}
                >
                  <div className="space-y-1">
                    {navItems.map((item) => {
                      const active = activeSection === item.href.substring(1);
                      return (
                        <motion.a
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          variants={itemVariants}
                          whileHover={{ scale: 1.02 }}
                          className={`flex items-center justify-between p-4 rounded-xl text-base font-medium transition-colors duration-200 ${
                            active
                              ? "bg-slate-50 text-slate-900"
                              : "text-white hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          <span>{item.name}</span>
                          {active && <Circle className="w-2 h-2 fill-current" />}
                        </motion.a>
                      );
                    })}
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/15">
                    <motion.a
                      href="https://instagram.com/slow3rxq"
                      target="_blank"
                      onClick={() => setIsOpen(false)}
                      className="relative flex items-center justify-center w-full py-4 px-6 rounded-xl text-base font-semibold text-white bg-slate-900 overflow-hidden"
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.03,
                        backgroundColor: "#1e293b",
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                      }}
                      whileTap={{ scale: 0.97 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 22,
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-indigo-500/20 opacity-0"
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      <motion.div
                        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        animate={{ translateX: "200%" }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          repeatDelay: 4,
                          ease: "easeInOut" 
                        }}
                      />
                      
                      <motion.span
                        className="relative z-10"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        Work With Us
                      </motion.span>
                      
                      <motion.div
                        className="relative z-10"
                        initial={{ x: 0, rotate: 0 }}
                        whileHover={{ x: 4, rotate: -5 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                      >
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </motion.div>
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
