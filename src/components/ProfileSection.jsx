// src/components/ProfileSection.jsx
import React from "react";
import { motion } from "framer-motion";
import profileLeft from "../assets/profile-left.png";
import profileRight from "../assets/profile-right.png";

export default function ProfileSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 12 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.5 },
    }),
  };

  return (
    // .profile-section
    <section
      className="relative w-full overflow-hidden box-border bg-white px-8 pt-8 pb-20"
      aria-labelledby="profil-singkat-title"
    >
      {/* .profile-inner */}
      <div className="relative max-w-[1856px] mx-auto">
        {/* Header badge + rule (.profile-header) */}
        {/* [FIX] z-index tidak lagi diperlukan */}
        <div className="flex w-full items-center gap-6 mb-6 box-border max-lg:flex-col max-lg:items-start max-lg:gap-3">
          {/* .badge */}
          <motion.div
            className="inline-flex flex-none items-center rounded-full bg-[#2E90FA] py-3.5 px-7 font-['Poppins'] text-[40px] font-semibold text-white max-lg:py-3 max-lg:px-5 max-lg:text-[36px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            Profil Singkat
          </motion.div>

          {/* .divider */}
          <motion.hr
            className="h-px flex-1 border-0 bg-black max-lg:w-full"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            viewport={{ once: true }}
            style={{ transformOrigin: "left" }}
          />
        </div>

        <div className="flex items-start gap-6 mt-6 max-lg:flex-col">
          {/* Left column: teks panjang (.left-col) */}
          <motion.div
            className="w-[602px] max-h-[calc(100vh-260px)] overflow-auto pr-2 box-border max-lg:w-full max-lg:max-h-none max-lg:overflow-visible max-lg:pr-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.08}
          >
            {/* .lead */}
            <p className="m-0 font-['Poppins'] text-xl leading-7 text-[#080808]">
              Program Studi Sistem Informasi Universitas Tanjungpura merupakan salah satu program
              studi strata 1 (S-1) yang berada di Fakultas Matematika dan Ilmu Pengetahuan Alam
              (FMIPA). Fokus pendidikan dan pembelajaran pada Program Studi Sistem Informasi
              Universitas Tanjungpura pada bidang keahlian Manajemen Sistem Informasi, Intelejensi
              Bisnis, dan Pengembangan Perangkat Lunak.
            </p>
          </motion.div>

          {/* Middle column: oval image + kualifikasi (.middle-col) */}
          <div className="flex w-[602px] flex-col gap-6 max-lg:w-full">
            {/* .oval-image */}
            <motion.div
              className="relative h-[301px] w-full overflow-hidden rounded-full bg-gray-200"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src={profileLeft}
                alt="Kegiatan mahasiswa"
                className="absolute inset-0 block h-full w-full object-cover object-center"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/602x301";
                }}
              />
            </motion.div>

            {/* .kualifikasi */}
            <motion.div
              className="box-border max-h-[calc(100vh-320px)] overflow-auto max-lg:max-h-none max-lg:overflow-visible"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0.12}
            >
              <h3 className="m-0 mb-2 font-['Poppins'] text-[32px] font-semibold text-[#080808]">
                Kualifikasi Dosen
              </h3>
              <p className="m-0 font-['Poppins'] text-xl leading-7 text-justify text-[#080808]">
                Dosen Program Studi Sistem Informasi memiliki latar belakang pendidikan strata 2
                (S-2) di bidang informatika, manajemen sistem informasi, matematika dan ilmu
                komputer, informatika dan sistem informasi, teknik dan teknologi informasi.
              </p>
            </motion.div>
          </div>

          {/* Right column: akreditasi + oval image (.right-col) */}
          <div className="flex w-[602px] flex-col gap-6 max-lg:w-full">
            {/* .akreditasi */}
            <motion.div
              className="box-border max-h-[calc(100vh-320px)] overflow-auto max-lg:max-h-none max-lg:overflow-visible"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0.14}
            >
              <h3 className="m-0 mb-2 font-['Poppins'] text-[32px] font-semibold text-[#080808]">
                Akreditasi
              </h3>
              <p className="m-0 font-['Poppins'] text-xl leading-7 text-justify text-[#080808]">
                Program studi Sistem Informasi mendapatkan predikat akreditasi (BAIK SEKALI) oleh
                Lembaga Akreditasi Mandiri Informatika dan Komputer No. SK :
                077/SK/LAM-INFOKOM/Ak/S/VIII/2023
              </p>
            </motion.div>

            {/* .oval-image */}
            <motion.div
              className="relative h-[301px] w-full overflow-hidden rounded-full bg-gray-200"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src={profileRight}
                alt="Acara akbar / seminar"
                className="absolute inset-0 block h-full w-full object-cover object-center"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/602x301";
                }}
              />
            </motion.div>
          </div>
        </div>

        <motion.div
          className="w-full text-center mt-24 max-lg:hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          aria-hidden="true"
        >
          <span className="inline-block origin-left-top font-['Inter'] text-[clamp(120px,30vw,580px)] font-bold italic leading-[0.85] text-[#080808]">
            SIS
          </span>
          <span className="ml-2 inline-block font-['Inter'] text-[clamp(120px,30vw,580px)] font-normal italic leading-[0.85] text-[#080808]">
            FO
          </span>
        </motion.div>
      </div>
    </section>
  );
}
