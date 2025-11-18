// src/components/NewsSection.jsx
import React from "react";
import { motion } from "framer-motion";
// import "../styles/news.css"; // <-- Hapus impor ini

// Data dan animasi ini tidak berubah
const newsData = [
  {
    id: 1,
    title: "Prestasi Lomba Gema Ekonomi Syariah Kalimantan Barat",
    excerpt:
      "Selamat Atas Prestasinya Farahdiba Helwa Latifah Mahasiswa Sistem Informasi Angkatan 2021 yang telah meraih juara 2 lomba Gebyar Kalbar 2024 dengan Tema Gema Ekonomi Syariah... ",
    img: "https://res.cloudinary.com/dxqr70knp/image/upload/v1763435358/WhatsApp-Image-2024-06-29-at-07.26.15-300x300_jmsdue.jpg",
  },
  {
    id: 2,
    title: "Lomba Sawit Sukses",
    excerpt:
      "Selamat Atas Prestasinya Farahdiba Helwa Latifah Mahasiswa Sistem Informasi Angkatan 2021 yang telah meraih juara 2 lomba Gebyar Kalbar 2024 dengan Tema Gema Ekonomi Syariah... ",
    img: "https://res.cloudinary.com/dxqr70knp/image/upload/v1763434897/DSC09958_2_pltwuu.jpg",
  },
  {
    id: 3,
    title: "PKM(Pengabdian Kepada Masyarakat)",
    excerpt:
      "Selamat Atas Prestasinya Farahdiba Helwa Latifah Mahasiswa Sistem Informasi Angkatan 2021 yang telah meraih juara 2 lomba Gebyar Kalbar 2024 dengan Tema Gema Ekonomi Syariah... ",
    img: "https://res.cloudinary.com/dxqr70knp/image/upload/v1763435179/IMG_2667-300x225_xmoveg.png",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 12 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * i, duration: 0.45, ease: "easeOut" },
  }),
};

// Tombol CTA untuk dipakai ulang
const CtaArrow = ({ label }) => (
  <button
    className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-white text-black outline outline-1 -outline-offset-1 outline-black transition-all duration-200 hover:bg-black hover:text-white hover:outline-black focus:bg-black focus:text-white focus:outline-black"
    aria-label={label}
  >
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7 17L17 7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 7H10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 7V14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
);

const CtaRead = ({ children, isFullWidth = false }) => (
  <button
    className={`inline-flex h-20 flex-1 items-center gap-4 rounded-full bg-white px-6 font-['Poppins'] text-xl text-black outline outline-1 -outline-offset-1 outline-black transition-all duration-200 hover:bg-black hover:text-white hover:outline-black focus:bg-black focus:text-white focus:outline-black ${
      isFullWidth ? "justify-center text-center" : "justify-start"
    }`}
  >
    {children}
  </button>
);

export default function NewsSection() {
  return (
    // .news-section
    <section
      className="relative mt-16 w-full box-border bg-white px-8 pt-12 pb-[72px]"
      aria-labelledby="berita-terkini"
    >
      {/* .news-inner */}
      <div className="relative max-w-[1856px] mx-auto">
        {/* .news-header */}
        <div className="mb-2 flex flex-col gap-6">
          {/* .badge .news-badge */}
          <motion.div
            className="inline-flex w-fit items-center rounded-full bg-[#2E90FA] py-4 px-8 font-['Poppins'] text-5xl font-semibold text-white max-lg:text-4xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
            custom={0}
          >
            Berita Terkini
          </motion.div>
        </div>

        {/* .news-list */}
        {/* [FIX] Menambahkan selector untuk border antar item */}
        <div className="mt-4 flex flex-col [&>article+article]:border-t [&>article+article]:border-zinc-800 [&>article+article]:pt-7 [&>article+article]:max-lg:pt-5">
          {newsData.map((item, idx) => (
            // .news-item
            <motion.article
              className="relative z-10 box-border flex items-center gap-6 py-6 max-lg:flex-col max-lg:items-stretch"
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={reveal}
              custom={idx + 1}
            >
              {/* .news-left */}
              <div className="w-[603px] min-w-[603px] max-lg:w-full max-lg:min-w-0">
                {/* .oval-news */}
                <div className="relative h-[340px] w-full overflow-hidden rounded-full max-lg:h-[220px]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="absolute inset-0 block h-full w-full object-cover object-center"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/603x340";
                    }}
                  />
                </div>
              </div>

              {/* .news-center */}
              <div className="w-[602px] box-border px-2 max-lg:w-full">
                {/* .news-title */}
                <h3 className="m-0 font-['Poppins'] text-[32px] font-semibold leading-[1.05] text-[#080808] max-lg:text-2xl">
                  {item.title}
                </h3>
              </div>

              {/* .news-right */}
              <div className="box-border flex w-[603px] flex-col justify-between gap-3 max-lg:w-full">
                {/* .news-excerpt */}
                <p className="m-0 h-[224px] overflow-hidden text-ellipsis font-['Poppins'] text-xl leading-7 text-[#464646] max-lg:h-auto max-lg:text-base max-lg:leading-6">
                  {item.excerpt}
                </p>

                {/* .cta-row */}
                <div className="flex items-center gap-3">
                  <CtaRead>
                    <span>Baca Selengkapnya</span>
                  </CtaRead>
                  <CtaArrow label={`Buka ${item.title}`} />
                </div>
              </div>
            </motion.article>
          ))}

          {/* .list-divider dihapus karena display: none */}

          {/* .news-footer */}
          <div className="mt-3 flex items-center gap-3 max-lg:flex-col">
            <CtaRead isFullWidth={true}>Lihat Lainnya</CtaRead>
            <CtaArrow label="Lihat lainnya" />
          </div>
        </div>
      </div>
    </section>
  );
}
