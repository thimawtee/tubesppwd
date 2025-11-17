// src/components/ProfileSection.jsx
import React from "react";
import { motion } from "framer-motion";
import "../styles/profile.css";

/*
  Komponen: ProfileSection
  - Stateless functional component
  - Mengikuti layout Figma:
    left: teks panjang (profil singkat)
    middle: gambar oval + Kualifikasi Dosen text
    right: Akreditasi text + gambar oval
  - Menggunakan framer-motion untuk entrance animation sederhana
*/

export default function ProfileSection() {
  // simple motion variants untuk reuse
  const fadeUp = {
    hidden: { opacity: 0, y: 12 },
    visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { delay, duration: 0.5 } }),
  };

  return (
    <section className="profile-section" aria-labelledby="profil-singkat-title">
      <div className="profile-inner">
        {/* Header badge + rule */}
        <div className="profile-header">
          <motion.div
            className="badge"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            Profil Singkat
          </motion.div>

          <motion.hr
            className="divider"
            initial={{ opacity: 0, scaleX: 0 }} /* Diubah dari width: 0 */
            whileInView={{ opacity: 1, scaleX: 1 }} /* Diubah dari width: "100%" */
            transition={{ duration: 0.5, delay: 0.06 }}
            viewport={{ once: true }}
          />
        </div>

        {/* Content row */}
        <div className="profile-row">
          {/* Left column: teks panjang */}
          <motion.div
            className="col left-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.08}
          >
            <p className="lead">
              Program Studi Sistem Informasi Universitas Tanjungpura merupakan salah satu program
              studi strata 1 (S-1) yang berada di Fakultas Matematika dan Ilmu Pengetahuan Alam
              (FMIPA). Fokus pendidikan dan pembelajaran pada Program Studi Sistem Informasi
              Universitas Tanjungpura pada bidang keahlian Manajemen Sistem Informasi, Intelejensi
              Bisnis, dan Pengembangan Perangkat Lunak.
            </p>
          </motion.div>

          {/* Middle column: oval image + kualifikasi */}
          <div className="col middle-col">
            <motion.div
              className="oval-image oval-mid"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img src="/src/assets/profile-left.png" alt="Kegiatan mahasiswa" />
            </motion.div>

            <motion.div
              className="kualifikasi"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0.12}
            >
              <h3>Kualifikasi Dosen</h3>
              <p>
                Dosen Program Studi Sistem Informasi memiliki latar belakang pendidikan strata 2
                (S-2) di bidang informatika, manajemen sistem informasi, matematika dan ilmu
                komputer, informatika dan sistem informasi, teknik dan teknologi informasi.
              </p>
            </motion.div>
          </div>

          {/* Right column: akreditasi + oval image */}
          <div className="col right-col">
            <motion.div
              className="akreditasi"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0.14}
            >
              <h3>Akreditasi</h3>
              <p>
                Program studi Sistem Informasi mendapatkan predikat akreditasi (BAIK SEKALI) oleh
                Lembaga Akreditasi Mandiri Informatika dan Komputer No. SK :
                077/SK/LAM-INFOKOM/Ak/S/VIII/2023
              </p>
            </motion.div>

            <motion.div
              className="oval-image oval-right"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img src="/src/assets/profile-right.png" alt="Acara akbar / seminar" />
            </motion.div>
          </div>
        </div>

        {/* Big decorative SISFO text */}
        <motion.div
          className="big-sisfo"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          aria-hidden="true"
        >
          <span className="sis">SIS</span>
          <span className="fo">FO</span>
        </motion.div>
      </div>
    </section>
  );
}
