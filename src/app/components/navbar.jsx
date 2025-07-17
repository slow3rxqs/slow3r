"use client"

import { useState, useEffect } from "react"
import { Menu, X, ArrowRight, Circle } from "lucide-react"

export default function MinimalNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = ["home", "about", "work", "services", "contact"]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "References", href: "/referans" },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "backdrop-blur-md shadow-lg" : "backdrop-blur-sm"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
          <div className="relative flex items-center justify-center h-20">
            <div className="absolute left-0 flex items-center">
              <a href="/" className="flex items-center group">
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <span className="text-white font-bold text-xl">A</span>
                  </div>
                </div>
                <div className="ml-4">
                  <span className="text-xl font-bold text-white">Abdulrahman Emin</span>
                  <span className="block text-sm text-slate-500 -mt-1">Senior Developer</span>
                </div>
              </a>
            </div>
            <div className="hidden lg:block">
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`relative text-sm font-medium transition-colors duration-300 ${activeSection === item.href.substring(1)
                      ? "text-white"
                      : "text-white hover:text-white"
                      }`}
                  >
                    <span className="text-white">{item.name}</span>
                    {activeSection === item.href.substring(1) && (
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"></div>
                    )}
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden md:block absolute right-0">
              <a
                href="https://www.instagram.com/slow3rxq"
                target="_blank"
                className="group inline-flex items-center px-6 py-3 rounded-xl text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Work With Us
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
            <div className="lg:hidden absolute right-0">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-white/10 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      >
        <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
        <div
          className={`absolute top-24 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-sm bg-white/5 rounded-2xl shadow-2xl border border-white/10 transition-all duration-300 ${isOpen ? "scale-100 translate-y-0" : "scale-95 -translate-y-4"
            }`}
        >
          <div className="p-6">
            <div className="space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`flex items-center justify-between p-4 rounded-xl text-base font-medium transition-colors duration-200 ${activeSection === item.href.substring(1)
                    ? "bg-slate-50 text-slate-900"
                    : "text-white hover:bg-white/10 hover:text-white"
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  <span>{item.name}</span>
                  {activeSection === item.href.substring(1) && <Circle className="w-2 h-2 fill-current" />}
                </a>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-white/15">
              <a
                href="https://instagram.com/slow3rxq"
                target="_blank"
                className="flex items-center justify-center w-full py-4 px-6 rounded-xl text-base font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Work With Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
