// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import "../styles/hero.css";
import heroImg from "../assets/hero.png"; // pastikan file ada, case-sensitive

export default function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <motion.div
        className="hero-container"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="hero-card" role="img" aria-label="Gedung fakultas dan taman">
          {/* gunakan <img> dengan object-fit untuk kontrol */}
          <img
            className="hero-image"
            src={heroImg}
            alt="Gedung Prodi Sistem Informasi"
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/1861x1241";
            }}
          />

          <div className="hero-left-panel" aria-hidden="false">
            <div className="hero-left-inner">
              <div className="hero-welcome">
                Selamat Datang Di <br /> Website Profil
              </div>

              <div className="hero-divider-vertical" aria-hidden />

              <div className="hero-program">
                Program Studi Sistem <br /> Informasi
              </div>
            </div>
          </div>
        </div>

        <h2 id="hero-title" className="hero-big-title">
          Sustainabel Solutions, Digital Excellence
        </h2>
      </motion.div>
    </section>
  );
}
