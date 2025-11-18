// src/components/FocusSection.jsx
import React from "react";
import { motion } from "framer-motion";

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
    // .focus-section
    <section className="w-full box-border bg-white py-12 px-8" aria-labelledby="fokus-keahlian">
      {/* .focus-inner */}
      <div className="max-w-[1856px] mx-auto">
        {/* .focus-header & @media (max-width: 1100px) */}
        <div className="mb-3 flex items-end justify-between gap-6 max-[1100px]:flex-col max-[1100px]:items-start max-[1100px]:gap-3">
          {/* .focus-badge */}
          <motion.div
            className="w-fit rounded-full bg-[#2E90FA] py-4 px-7 font-['Poppins'] text-5xl font-semibold text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
            custom={0}
          >
            Fokus Keahlian
          </motion.div>

          <motion.div
            className="max-w-[760px] font-['Poppins'] text-xl leading-7 text-[#080808] text-right max-[1100px]:text-left"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.06 }}
            viewport={{ once: true }}
          >
            Program Studi Sistem Informasi Universitas Tanjungpura memfokuskan tiga keahlian yang
            dapat menjadi bekal mahasiswa untuk terjun ke dunia kerja.
          </motion.div>
        </div>

        <hr className="mt-4 mb-7 h-px border-0 bg-zinc-800" />

        {/* .skills-grid & @media (max-width: 1100px) */}
        <div className="flex flex-wrap items-stretch justify-between gap-6 max-[1100px]:flex-col">
          {skills.map((s, idx) => (
            <motion.article
              key={s.id}
              className="flex-1 basis-[calc(33.333%-16px)] flex min-w-[260px] flex-col gap-3 overflow-hidden rounded-[32px] box-border p-8 text-white max-[1100px]:w-full max-[1100px]:basis-auto"
              style={{ background: s.bg }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={reveal}
              custom={idx + 1}
            >
              {/* .skill-title */}
              <h4 className="m-0 font-['Poppins'] text-3xl font-semibold">{s.title}</h4>
              {/* .skill-body */}
              <p className="m-0 font-['Poppins'] text-xl font-normal leading-7 text-justify">
                {s.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
