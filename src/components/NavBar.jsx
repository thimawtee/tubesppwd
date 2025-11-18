import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Icon untuk Hamburger dan Close ---
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

// --- Item Navigasi ---
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

  // State untuk menu mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State untuk accordion di dalam menu mobile
  const [mobileAccordionIdx, setMobileAccordionIdx] = useState(null);

  // useEffect untuk 'Escape' key
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") {
        setOpenIdx(null);
        setIsMobileMenuOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Click outside
  useEffect(() => {
    function onDoc(e) {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenIdx(null);
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  // Scroll detection
  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Logika Style Header
  const headerBaseClasses =
    "sticky top-0 z-50 w-full border-b py-2.5 backdrop-blur-sm transition-all duration-200 ease-in-out";
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
      <div className="container mx-auto flex items-center justify-between px-4 max-w-screen-2xl">
        {/* Brand */}
        <div className="flex shrink-0 items-center gap-2.5">
          <img
            src="https://res.cloudinary.com/symphony24/image/upload/w_50,h_50,c_fill/Logo_mivnro.png"
            alt="Logo Jurusan"
            className="h-11 w-11 object-contain lg:h-12 lg:w-12"
          />
          <div className="flex flex-col leading-tight">
            <div
              className="text-[11px] font-medium text-black sm:text-xs lg:text-sm whitespace-nowrap gap-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Prodi Sistem Informasi
            </div>
            <div
              className="text-[11px] font-medium text-black sm:text-xs lg:text-sm whitespace-nowrap"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              FMIPA UNTAN
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="ml-3 mr-3 hidden h-11 w-px rounded-full bg-black lg:block" />

        {/* Navigasi Desktop */}
        <nav
          className="hidden min-w-0 flex-1 items-center gap-1.5 lg:flex lg:justify-center"
          aria-label="Primary Navigation"
        >
          {NAV_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={item.label} className="relative shrink-0 gap-3">
                {/* Tombol Pill */}
                <motion.button
                  className="inline-flex cursor-pointer items-center gap-1 whitespace-nowrap rounded-full border border-black bg-transparent px-2.5 py-1.5 text-xs font-medium text-black transition-colors hover:bg-gray-100 lg:text-[13px]"
                  style={{ fontFamily: "Poppins, sans-serif" }}
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
                    <span className="translate-y-px text-[10px]" aria-hidden="true">
                      ▾
                    </span>
                  )}
                </motion.button>

                {/* Dropdown Desktop */}
                <AnimatePresence>
                  {item.hasDropdown && isOpen && (
                    <motion.ul
                      className="absolute left-0 top-full z-40 mt-2 min-w-[200px] space-y-1 rounded-lg bg-white p-2 shadow-lg"
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
                            className="block rounded-md px-3 py-2 text-sm text-black no-underline hover:bg-blue-50 focus:bg-blue-50 focus:outline-none"
                            style={{ fontFamily: "Poppins, sans-serif" }}
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

        {/* Tombol Hamburger */}
        <button
          className="ml-auto p-2 lg:hidden"
          onClick={() => {
            setIsMobileMenuOpen(true);
            setOpenIdx(null);
          }}
          aria-label="Buka menu navigasi"
          aria-expanded={isMobileMenuOpen}
        >
          <HamburgerIcon />
        </button>
      </div>

      {/* Panel Menu Mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Panel Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 z-50 h-screen w-[85vw] max-w-md overflow-y-auto bg-white shadow-xl lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Menu navigasi"
            >
              {/* Header Panel */}
              <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-white p-4">
                <span
                  className="text-lg font-semibold"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Menu
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Tutup menu"
                  className="p-2 hover:bg-gray-100 rounded-md transition-colors"
                >
                  <CloseIcon />
                </button>
              </div>

              {/* Daftar Navigasi Mobile (dengan Accordion) */}
              <nav className="p-4 pb-8">
                <ul className="flex flex-col space-y-3">
                  {NAV_ITEMS.map((item, idx) => (
                    <li key={item.label}>
                      {/* Jika TIDAK punya dropdown */}
                      {!item.hasDropdown ? (
                        <a
                          href={item.href}
                          className="block rounded-lg px-4 py-3 text-base font-medium hover:bg-blue-50 transition-colors"
                          style={{ fontFamily: "Poppins, sans-serif" }}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </a>
                      ) : (
                        // Jika PUNYA dropdown (buat accordion)
                        <div>
                          <button
                            className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium hover:bg-blue-50 transition-colors"
                            style={{ fontFamily: "Poppins, sans-serif" }}
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
                              className={`h-5 w-5 transition-transform duration-200 ${
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
                                transition={{ duration: 0.2 }}
                                className="mt-2 ml-4 space-y-1 overflow-hidden border-l-2 border-blue-200 pl-3"
                              >
                                {item.items.map((sub) => (
                                  <li key={sub.label}>
                                    <a
                                      href={sub.href}
                                      className="block rounded-md px-3 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                                      style={{ fontFamily: "Poppins, sans-serif" }}
                                      onClick={() => setIsMobileMenuOpen(false)}
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
