import React from "react";
import { motion } from "framer-motion";
import "../styles/focus.css";

const skills = [
  {
    id: 1,
    title: "Manajemen Sistem Informasi",
    body: "Mempelajari interaksi sistem-sistem informasi yang bertanggung jawab mengumpulkan dan mengolah data untuk menyediakan informasi yang berguna bagi semua tingkatan manajemen di dalam kegiatan perencanaan dan pengendalian",
    bg: "#1C5696",
  },
  {
    id: 2,
    title: "Pengembangan Perangkat Lunak",
    body: "Serangkaian aktivitas ilmu komputer yang didedikasikan untuk proses pembuatan, perancangan, penerapan, dan dukungan perangkat lunak",
    bg: "#2573C8",
  },
  {
    id: 3,
    title: "Inteligensi Bisnis",
    body: "Sekumpulan teknik dan alat yang mengkombinasikan analisis bisnis, data mining, visualisasi data, alat dan infrastruktur data, serta aplikasinya digunakan untuk mentransformasi data mentah menjadi informasi yang berguna dalam proses pengambilan keputusan bisnis.",
    bg: "#2E90FA",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 10 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * i, ease: "easeOut", duration: 0.45 },
  }),
};

export default function FocusSection() {
  return (
    <section className="focus-section" aria-labelledby="fokus-keahlian">
      <div className="focus-inner">
        <div className="focus-header">
          <motion.div
            className="badge focus-badge"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
            custom={0}
          >
            Fokus Keahlian
          </motion.div>

          <motion.div
            className="focus-desc"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.06 }}
            viewport={{ once: true }}
          >
            Program Studi Sistem Informasi Universitas Tanjungpura memfokuskan tiga keahlian yang
            dapat menjadi bekal mahasiswa untuk terjun ke dunia kerja.
          </motion.div>
        </div>

        <hr className="focus-divider" />

        <div className="skills-grid">
          {skills.map((s, idx) => (
            <motion.article
              key={s.id}
              className="skill-card"
              style={{ background: s.bg }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={reveal}
              custom={idx + 1}
            >
              <h4 className="skill-title">{s.title}</h4>
              <p className="skill-body">{s.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
