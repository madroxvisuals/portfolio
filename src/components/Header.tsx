"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MadroxLogo } from "./MadroxLogo";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      data-testid="site-navbar"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div
        className={`mx-auto transition-all duration-500 ${
          scrolled ? "mt-3 max-w-5xl" : "mt-5 max-w-6xl"
        }`}
        style={{
          background: scrolled ? "rgba(10,10,10,0.55)" : "rgba(10,10,10,0.28)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 999,
        }}
      >
        <div className="flex items-center justify-between px-5 sm:px-7 py-3">
          <a
            href="#top"
            data-testid="navbar-logo-link"
            className="flex items-center gap-3"
          >
            <MadroxLogo size={38} wordmark={false} testId="navbar-logo" />
            <span
              className="font-bold-h text-white text-[11px] sm:text-xs"
              style={{ letterSpacing: "0.4em" }}
            >
              MADROX VISUALS
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-testid={`nav-link-${l.label.toLowerCase()}`}
                className="font-sm text-[11px] uppercase text-white/70 hover:text-[color:var(--madrox-gold)] px-3 py-2 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            data-testid="mobile-nav-toggle"
            aria-label="Toggle menu"
            className="md:hidden w-9 h-9 grid place-items-center rounded-full border border-white/15 text-white"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="block w-4 h-[1.5px] bg-white relative before:content-[''] before:absolute before:-top-[5px] before:left-0 before:w-4 before:h-[1.5px] before:bg-white after:content-[''] after:absolute after:top-[5px] after:left-0 after:w-4 after:h-[1.5px] after:bg-white" />
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              key="m-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden px-5 pb-4"
              data-testid="mobile-nav-panel"
            >
              <div className="grid gap-1 pt-2 border-t border-white/10">
                {LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    data-testid={`mobile-nav-link-${l.label.toLowerCase()}`}
                    className="font-sm text-xs uppercase text-white/80 py-3 tracking-widest"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
