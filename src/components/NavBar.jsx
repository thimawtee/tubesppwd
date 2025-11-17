// src/components/NavBar.jsx
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/Logo.png";

// --- [BARU] Icon untuk Hamburger dan Close ---
const HamburgerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-6 w-6"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// --- Item Navigasi (Tidak Berubah) ---
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

// --- Komponen Utama ---
export default function NavBar({ useRouter = false }) {
  const [openIdx, setOpenIdx] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);

  // --- [BARU] State untuk menu mobile ---
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // --- [BARU] State untuk accordion di dalam menu mobile ---
  const [mobileAccordionIdx, setMobileAccordionIdx] = useState(null);

  // --- [UPDATE] useEffect untuk 'Escape' key ---
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") {
        setOpenIdx(null); // Tutup dropdown desktop
        setIsMobileMenuOpen(false); // [BARU] Tutup menu mobile
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []); // Dependensi kosong, hanya run sekali

  // useEffect lainnya (click outside & scroll) tidak berubah
  useEffect(() => {
    function onDoc(e) {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenIdx(null);
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // --- Logika Style Header (Tidak Berubah) ---
  const headerBaseClasses =
    "sticky top-0 z-[200] w-full border-b py-3 backdrop-blur-sm transition-all duration-200 ease-in-out";
  const headerScrollClasses = isScrolled
    ? "border-transparent bg-white/65 backdrop-blur-xl backdrop-saturate-180"
    : "border-black bg-white";

  return (
    <motion.header
      className={`${headerBaseClasses} ${headerScrollClasses}`}
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      ref={navRef}
    >
      <div className="container mx-auto flex items-center justify-start px-3">
        {/* --- Brand (Tidak Berubah) --- */}
        <div className="flex flex-shrink-0 items-center gap-4">
          <img src={Logo} alt="Logo Jurusan" className="h-16 w-[65px] object-contain" />
          <div className="flex flex-col leading-none">
            <div className="font-poppins text-base font-medium text-black lg:text-lg">
              Prodi Sistem Informasi
            </div>
            <div className="font-poppins text-base font-medium text-black lg:text-lg">
              FMIPA UNTAN
            </div>
          </div>
        </div>

        {/* --- Divider (Tidak Berubah) --- */}
        <div className="ml-7 hidden h-14 w-px rounded-full bg-black lg:block" />

        {/* --- [UPDATE] Navigasi Desktop --- */}
        <nav
          // [UPDATE] 'hidden lg:flex' menyembunyikan ini di mobile
          className="ml-4 hidden min-w-0 flex-1 items-center gap-3 lg:flex lg:justify-center"
          aria-label="Primary Navigation"
        >
          {NAV_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={item.label} className="relative flex-shrink-0 whitespace-nowrap">
                {/* --- Tombol Pill (Tidak Berubah) --- */}
                <motion.button
                  className="inline-flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-full border border-black bg-transparent px-3 py-1.5 text-base font-medium text-black transition-colors hover:bg-gray-100 lg:px-4 lg:py-2 lg:text-xl"
                  onClick={(e) => {
                    if (item.hasDropdown) {
                      setOpenIdx(isOpen ? null : idx);
                      return;
                    }
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
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <span className="translate-y-px text-sm" aria-hidden>
                      ▾
                    </span>
                  )}
                </motion.button>

                {/* --- Dropdown Desktop (Tidak Berubah) --- */}
                <AnimatePresence>
                  {item.hasDropdown && isOpen && (
                    <motion.ul
                      className="absolute left-0 top-full z-[80] mt-2.5 min-w-[220px] space-y-1.5 rounded-lg bg-white p-2 shadow-lg"
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.18 }}
                      role="menu"
                    >
                      {item.items.map((sub) => (
                        <li key={sub.label} role="menuitem">
                          <a
                            href={sub.href}
                            onClick={() => setOpenIdx(null)}
                            className="block rounded-md px-3 py-2 text-black no-underline hover:bg-blue-50 focus:bg-blue-50 focus:outline-none"
                          >
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

        {/* --- [BARU] Tombol Hamburger --- */}
        <button
          className="ml-auto p-2 lg:hidden" // 'ml-auto' mendorong ke kanan, 'lg:hidden' tampil hanya di mobile
          onClick={() => {
            setIsMobileMenuOpen(true);
            setOpenIdx(null); // Tutup dropdown desktop jika ada
          }}
          aria-label="Buka menu navigasi"
          aria-expanded={isMobileMenuOpen}
        >
          <HamburgerIcon />
        </button>
      </div>

      {/* --- [BARU] Panel Menu Mobile --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[210] bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Panel Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 z-[220] h-full w-[80vw] max-w-sm overflow-y-auto bg-white shadow-xl lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Menu navigasi"
            >
              {/* Header Panel */}
              <div className="flex items-center justify-between border-b p-4">
                <span className="text-lg font-semibold">Menu</span>
                <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Tutup menu">
                  <CloseIcon />
                </button>
              </div>

              {/* Daftar Navigasi Mobile (dengan Accordion) */}
              <nav className="p-4">
                <ul className="flex flex-col space-y-2">
                  {NAV_ITEMS.map((item, idx) => (
                    <li key={item.label}>
                      {/* Jika TIDAK punya dropdown */}
                      {!item.hasDropdown ? (
                        <a
                          href={item.href}
                          className="block rounded-md px-3 py-2 text-lg hover:bg-blue-50"
                          onClick={() => setIsMobileMenuOpen(false)} // Tutup menu saat diklik
                        >
                          {item.label}
                        </a>
                      ) : (
                        // Jika PUNYA dropdown (buat accordion)
                        <div>
                          <button
                            className="flex w-full items-center justify-between rounded-md px-3 py-2 text-lg hover:bg-blue-50"
                            onClick={() =>
                              setMobileAccordionIdx(mobileAccordionIdx === idx ? null : idx)
                            }
                            aria-expanded={mobileAccordionIdx === idx}
                          >
                            <span>{item.label}</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className={`h-5 w-5 transition-transform ${
                                mobileAccordionIdx === idx ? "rotate-180" : ""
                              }`}
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>

                          {/* Sub-menu Accordion */}
                          <AnimatePresence>
                            {mobileAccordionIdx === idx && (
                              <motion.ul
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="ml-4 overflow-hidden border-l border-gray-200"
                              >
                                {item.items.map((sub) => (
                                  <li key={sub.label}>
                                    <a
                                      href={sub.href}
                                      className="block rounded-r-md px-3 py-2 text-base text-gray-700 hover:bg-blue-50"
                                      onClick={() => setIsMobileMenuOpen(false)} // Tutup menu saat diklik
                                    >
                                      {sub.label}
                                    </a>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
