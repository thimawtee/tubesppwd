import React from "react";
import { motion } from "framer-motion";

const links = [
  "Beranda",
  "Profil",
  "Akademik",
  "Kemahasiswaan",
  "Penelitiaan",
  "Fasilitas",
  "Penerimaan Mahasiswa Baru",
  "Tautan",
];

export default function Footer() {
  return (
    <footer
      className="w-full bg-[#2573c8] text-white py-7 pb-12 box-border"
      aria-labelledby="footer-main-title"
    >
      <div className="max-w-[1856px] mx-auto px-6 relative flex flex-col gap-7">
        <motion.div
          className="flex items-center gap-[18px] p-[18px_22px] bg-[#2573c8] rounded-[20px]"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.45 }}
        >
          <span className="inline-flex items-center justify-center">
            <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
              <path
                fill="white"
                d="M12 .587l3.668 7.431 8.2 1.193-5.93 5.78 1.4 8.17L12 18.896l-7.338 3.866 1.4-8.17L.132 9.211l8.2-1.193z"
              />
            </svg>
          </span>

          <h2
            id="footer-main-title"
            className="m-0 font-normal text-[34px] leading-[1.05] text-white lg:text-[34px] md:text-[22px]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Continuously Contributing, No Matter How Small !!!
          </h2>
        </motion.div>

        {/* Three-Column Link Area - Desktop & Tablet */}
        <motion.div
          className="hidden md:grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-9 p-6 px-4 rounded-2xl bg-transparent"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.08, duration: 0.45 }}
        >
          <div className="flex flex-col gap-3">
            {links.map((l, i) => (
              <div
                key={`l1-${i}`}
                className="font-medium text-xl text-white"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {l}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mobile Link Area - Accordion Style */}
        <motion.div
          className="flex md:hidden flex-col gap-3 p-4 rounded-2xl bg-[#1e66b0]"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.08, duration: 0.45 }}
        >
          {links.slice(0, 4).map((l, i) => (
            <div
              key={`mobile-${i}`}
              className="font-medium text-lg text-white border-b border-white/20 pb-3 last:border-b-0"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {l}
            </div>
          ))}
        </motion.div>

        {/* Giant Text Area - Desktop & Tablet */}
        <div className="relative w-full min-h-[240px] overflow-hidden hidden sm:block">
          <motion.div
            className="font-normal text-white text-left p-6 rounded-xl text-[240px] leading-[0.95] md:text-[140px]"
            style={{ fontFamily: "Inter, Poppins, sans-serif" }}
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            GREAT PEOPLE
            <br />
            GREAT FUTURE
          </motion.div>

          <motion.div
            className="absolute right-8 top-7 text-xl text-white opacity-95 md:right-4 md:top-[10px] md:text-base"
            style={{ fontFamily: "Poppins, sans-serif" }}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.45 }}
          >
            Powered by Program Studi Sistem Informasi
          </motion.div>
        </div>

        {/* Giant Text Area - Mobile Only */}
        <div className="relative w-full overflow-hidden block sm:hidden">
          <motion.div
            className="font-normal text-white text-left p-4 rounded-xl text-3xl leading-tight"
            style={{ fontFamily: "Inter, Poppins, sans-serif" }}
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            GREAT PEOPLE
            <br />
            GREAT FUTURE
          </motion.div>

          <motion.div
            className="text-sm text-white opacity-90 mt-2 px-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            Powered by Program Studi Sistem Informasi
          </motion.div>
        </div>

        {/* Bottom Row - Desktop & Tablet */}
        <div className="hidden md:flex items-center justify-between gap-4 mt-2">
          <div
            className="flex-1 p-[18px_22px] rounded-2xl bg-[#2573c8] text-lg text-white border border-black/[0.06]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Copyright © 2025 Program Studi Sistem Informasi
          </div>

          <div className="flex gap-3 items-center">
            <button
              className="px-5 py-4 rounded-[32px] bg-[#2573c8] border-0 text-white text-lg cursor-pointer shadow-none outline outline-1 outline-black/[0.06] hover:bg-[#1e66b0] transition-colors duration-300"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Kebijakan Privasi
            </button>
            <button
              className="px-5 py-4 rounded-[32px] bg-[#2573c8] border-0 text-white text-lg cursor-pointer shadow-none outline outline-1 outline-black/[0.06] hover:bg-[#1e66b0] transition-colors duration-300"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Dukungan
            </button>
            <button
              className="px-5 py-4 rounded-[32px] bg-[#2573c8] border-0 text-white text-lg cursor-pointer shadow-none outline outline-1 outline-black/[0.06] hover:bg-[#1e66b0] transition-colors duration-300"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Syarat &amp; Ketentuan
            </button>
          </div>
        </div>

        {/* Bottom Row - Mobile (Stacked) */}
        <div className="flex md:hidden flex-col items-stretch gap-3 mt-2">
          <div
            className="p-[18px_22px] rounded-2xl bg-[#2573c8] text-base text-white text-center border border-black/[0.06]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Copyright © 2025 Program Studi Sistem Informasi
          </div>

          <div className="flex flex-col gap-2 items-stretch">
            <button
              className="px-5 py-4 rounded-[32px] bg-[#1e66b0] border-0 text-white text-base cursor-pointer shadow-none outline outline-1 outline-black/[0.06]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Kebijakan Privasi
            </button>
            <button
              className="px-5 py-4 rounded-[32px] bg-[#1e66b0] border-0 text-white text-base cursor-pointer shadow-none outline outline-1 outline-black/[0.06]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Dukungan
            </button>
            <button
              className="px-5 py-4 rounded-[32px] bg-[#1e66b0] border-0 text-white text-base cursor-pointer shadow-none outline outline-1 outline-black/[0.06]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Syarat &amp; Ketentuan
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
