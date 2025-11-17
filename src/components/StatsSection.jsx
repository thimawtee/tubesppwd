import React from "react";
import { motion } from "framer-motion";
import "../styles/stats.css";

export default function StatsSection() {
  const reveal = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i = 1) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: 0.1 * i, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="stats-section">
      <div className="stats-viewport">
        <div className="stats-container">
          {/* Background Panel */}
          <div className="stats-panel" />

          {/* Bubble Mahasiswa (Center Top) */}
          <motion.div
            className="stats-bubble bubble-students"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={reveal}
            custom={1}
          >
            <div className="stats-number">344</div>
          </motion.div>

          {/* Label Mahasiswa (Right of bubble) */}
          <div className="stats-label label-students">
            <div className="label-line" />
            <div className="label-text label-students-text">Mahasiswa</div>
          </div>

          {/* Bubble Lususan (Left Bottom) */}
          <motion.div
            className="stats-bubble bubble-graduates"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={reveal}
            custom={2}
          >
            <div className="stats-number">194</div>
          </motion.div>

          {/* Label Lususan (Left of bubble) */}
          <div className="stats-label label-graduates">
            <div className="label-text label-graduates-text">Lususan</div>
            <div className="label-line" />
          </div>

          {/* Bubble Dosen (Right Bottom) */}
          <motion.div
            className="stats-bubble bubble-lecturers"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={reveal}
            custom={3}
          >
            <div className="stats-number">7</div>
          </motion.div>

          {/* Label Dosen (Right of bubble) */}
          <div className="stats-label label-lecturers">
            <div className="label-line" />
            <div className="label-text label-lecturers-text">Dosen</div>
          </div>
        </div>
      </div>
    </section>
  );
}
