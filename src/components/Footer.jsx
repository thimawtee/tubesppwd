// src/components/Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import "../styles/footer.css";

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
    <footer className="site-footer" aria-labelledby="footer-main-title">
      <div className="footer-inner">
        {/* top pill with star + slogan */}
        <motion.div
          className="footer-top-pill"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.45 }}
        >
          <span className="star">
            {/* simple star svg */}
            <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
              <path
                fill="white"
                d="M12 .587l3.668 7.431 8.2 1.193-5.93 5.78 1.4 8.17L12 18.896l-7.338 3.866 1.4-8.17L.132 9.211l8.2-1.193z"
              />
            </svg>
          </span>

          <h2 id="footer-main-title" className="footer-slogan">
            Continuously Contributing, No Matter How Small !!!
          </h2>
        </motion.div>

        {/* three-column link area */}
        <motion.div
          className="footer-links-area"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.08, duration: 0.45 }}
        >
          <div className="links-col">
            {links.map((l, i) => (
              <div key={`l1-${i}`} className="footer-link">
                {l}
              </div>
            ))}
          </div>
          <div className="links-col">
            {links.map((l, i) => (
              <div key={`l2-${i}`} className="footer-link">
                {l}
              </div>
            ))}
          </div>
          <div className="links-col">
            {links.map((l, i) => (
              <div key={`l3-${i}`} className="footer-link">
                {l}
              </div>
            ))}
          </div>
        </motion.div>

        {/* giant typographic area */}
        <div className="footer-giant-wrap">
          <motion.div
            className="footer-giant"
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            GREAT PEOPLE
            <br />
            GREAT FUTURE
          </motion.div>

          <motion.div
            className="footer-powered"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.45 }}
          >
            Powered by Program Studi Sistem Informasi
          </motion.div>
        </div>

        {/* bottom row: copyright + pills */}
        <div className="footer-bottom-row">
          <div className="copyright-pill">Copyright © 2025 Program Studi Sistem Informasi</div>

          <div className="footer-actions">
            <button className="mini-pill">Kebijakan Privasi</button>
            <button className="mini-pill">Dukungan</button>
            <button className="mini-pill">Syarat &amp; Ketentuan</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
