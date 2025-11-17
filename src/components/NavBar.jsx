// src/components/NavBar.jsx
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/nav.css";
import Logo from "../assets/Logo.png";

/**
 * Nav items format:
 * { label: "Profil", hasDropdown: true, items: [{label: "Sejarah", href:"#"} ...] }
 */
const NAV_ITEMS = [
  { label: "Beranda", href: "#home" },
  {
    label: "Profil",
    hasDropdown: true,
    items: [
      { label: "Sejarah", href: "#sejarah" },
      { label: "Visi & Misi", href: "#visi" },
    ],
  },
  {
    label: "Akademik",
    hasDropdown: true,
    items: [
      { label: "Kurikumlum", href: "#kurikulum" },
      { label: "Jadwal", href: "#jadwal" },
    ],
  },
  {
    label: "Kemahasiswaan",
    hasDropdown: true,
    items: [{ label: "Organisasi", href: "#org" }],
  },
  { label: "Penelitian", hasDropdown: true, items: [{ label: "Publikasi", href: "#pub" }] },
  { label: "Fasilitas", href: "#fasilitas" },
  { label: "Penerimaan Mahasiswa Baru", href: "#pmb" },
  { label: "Tautan", href: "#tautan" },
];

export default function NavBar({ useRouter = false }) {
  const [openIdx, setOpenIdx] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);

  // close dropdown on outside click
  useEffect(() => {
    function onDoc(e) {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenIdx(null);
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  // close on Escape
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpenIdx(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // scroll listener: toggle transparent + hide border when scrolled
  useEffect(() => {
    function onScroll() {
      // threshold can be adjusted (e.g., 12)
      setIsScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    // add scrolled class to toggle styles
    <motion.header
      className={`site-header ${isScrolled ? "scrolled" : ""}`}
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      ref={navRef}
    >
      <div className="nav-inner container">
        {/* brand kept absolutely left so nav-row can be centered */}
        <div className="brand">
          <img src={Logo} alt="Logo Jurusan" className="brand-logo" />
          <div className="brand-text">
            <div className="brand-title">Prodi Sistem Informasi</div>
            <div className="brand-sub">FMIPA UNTAN</div>
          </div>
        </div>

        {/* divider is positioned relative to brand (CSS absolute) */}
        <div className="divider" />

        {/* center the nav-row by using margin: 0 auto in CSS */}
        <nav className="nav-row" aria-label="Primary Navigation">
          {NAV_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={item.label} className="nav-item-wrapper">
                {/* pill button */}
                <motion.button
                  className="nav-pill"
                  onClick={(e) => {
                    // if item has dropdown, toggle dropdown
                    if (item.hasDropdown) {
                      setOpenIdx(isOpen ? null : idx);
                      return;
                    }
                    // if no dropdown and not using router, scroll to anchor
                    if (!item.hasDropdown && !useRouter && item.href) {
                      const el = document.querySelector(item.href);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && item.hasDropdown) setOpenIdx(isOpen ? null : idx);
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.99 }}
                  aria-expanded={isOpen ? "true" : "false"}
                  aria-haspopup={item.hasDropdown ? "menu" : undefined}
                >
                  <span className="nav-label">{item.label}</span>
                  {item.hasDropdown && (
                    <span className="caret" aria-hidden>
                      ▾
                    </span>
                  )}
                </motion.button>

                {/* dropdown (if any) */}
                <AnimatePresence>
                  {item.hasDropdown && isOpen && (
                    <motion.ul
                      className="nav-dropdown"
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.18 }}
                      role="menu"
                    >
                      {item.items.map((sub) => (
                        <li key={sub.label} role="menuitem">
                          {/* if useRouter true you'd render <Link to={...}> */}
                          <a href={sub.href} onClick={() => setOpenIdx(null)}>
                            {sub.label}
                          </a>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>
      </div>
    </motion.header>
  );
}
