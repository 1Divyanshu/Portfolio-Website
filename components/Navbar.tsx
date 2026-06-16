"use client";

import { useEffect, useState } from "react";
import { Sword, Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); 

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.6);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || isOpen ? "bg-paper/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          onClick={() => setIsOpen(false)}
          className={`font-display text-sm font-bold tracking-widest2 ${
            scrolled || isOpen ? "text-ink" : "text-paper"
          }`}
        >
          {"<div>"}yanshu Bhatt
        </a>

        <ul className="hidden gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href} className="relative group flex flex-col items-center">
              <a
                href={l.href}
                className={`text-sm font-medium transition-colors group-hover:text-emerald-500 ${
                  scrolled ? "text-ink/80" : "text-paper/80"
                }`}
              >
                {l.label}
              </a>
              
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 rotate-180 opacity-0 translate-y-2 pointer-events-none transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                <Sword className="w-4 h-4 text-emerald-500 rotate-[135deg]" />
              </div>
            </li>
          ))}
        </ul>
        
        <a
          href="#contact"
          className={`hidden rounded-full px-4 py-2 text-xs font-semibold md:inline-block ${
            scrolled ? "bg-ink text-paper" : "bg-haori text-ink"
          }`}
        >
          Let&rsquo;s talk
        </a>

        {/* --- MOBILE HAMBURGER BUTTON --- */}
        <button
          className={`md:hidden p-2 transition-colors cursor-pointer ${
            scrolled || isOpen ? "text-ink" : "text-paper"
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle mobile menu"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* --- MOBILE DROPDOWN MENU --- */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-paper/95 backdrop-blur-sm border-b border-zinc-200/20 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[400px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setIsOpen(false)} 
                className="text-base font-semibold text-ink/80 hover:text-emerald-500 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-ink text-paper px-6 py-2.5 text-sm font-bold mt-2 inline-block"
            >
              Let&rsquo;s talk
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}