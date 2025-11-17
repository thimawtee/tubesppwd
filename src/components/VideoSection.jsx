// src/components/VideoSection.jsx
import React from "react";
import { motion } from "framer-motion";
import "../styles/video.css";

/*
  VideoSection
  - Left: big video placeholder (replace with iframe or react-player)
  - Right: white card with description + Subscribe CTA + arrow
*/

export default function VideoSection() {
  return (
    <section className="video-section" aria-labelledby="video-profil">
      <div className="video-inner">
        <div className="video-header">
          <motion.div
            className="badge video-badge"
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
            viewport={{ once: true }}
          >
            Video Profil
          </motion.div>
        </div>

        <hr className="video-divider" />

        <div className="video-row">
          {/* Left: video placeholder */}
          <motion.div
            className="video-left"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
          >
            {/* Replace this div with an iframe or react-player for real video */}
            <div className="video-placeholder" role="img" aria-label="video preview" />
          </motion.div>

          {/* Right: description + CTA */}
          <motion.div
            className="video-right"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.06 }}
            viewport={{ once: true }}
          >
            <div className="video-card">
              <p className="video-text">
                Video singkat Profil Program Studi Sistem Informasi oleh Himpunan Mahasiswa Sistem
                Informasi dalam rangka memperkenalkan Program Studi Sistem Informasi secara luas
              </p>
            </div>

            <div className="video-cta-row">
              <button className="cta-read video-sub">Subscribe Channel</button>
              <button className="cta-arrow video-arrow" aria-label="Subscribe">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M7 17L17 7"
                    stroke="#080808"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 7H10"
                    stroke="#080808"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 7V14"
                    stroke="#080808"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
