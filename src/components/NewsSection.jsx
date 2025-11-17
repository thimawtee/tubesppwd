// src/components/NewsSection.jsx
import React from "react";
import { motion } from "framer-motion";
import "../styles/news.css";

/*
  NewsSection
  - Stateless component
  - Renders a header badge and a list of news items (3 by default)
  - Each item: left oval image, center title, right excerpt + CTA
  - Footer: "Lihat Lainnya" button + round arrow
*/

const newsData = [
  {
    id: 1,
    title: "Prestasi Lomba Gema Ekonomi Syariah Kalimantan Barat",
    excerpt:
      "Selamat Atas Prestasinya Farahdiba Helwa Latifah Mahasiswa Sistem Informasi Angkatan 2021 yang telah meraih juara 2 lomba Gebyar Kalbar 2024 dengan Tema Gema Ekonomi Syariah... ",
    img: "/src/assets/news1.png",
  },
  {
    id: 2,
    title: "Prestasi Lomba Gema Ekonomi Syariah Kalimantan Barat",
    excerpt:
      "Selamat Atas Prestasinya Farahdiba Helwa Latifah Mahasiswa Sistem Informasi Angkatan 2021 yang telah meraih juara 2 lomba Gebyar Kalbar 2024 dengan Tema Gema Ekonomi Syariah... ",
    img: "/src/assets/news2.png",
  },
  {
    id: 3,
    title: "Prestasi Lomba Gema Ekonomi Syariah Kalimantan Barat",
    excerpt:
      "Selamat Atas Prestasinya Farahdiba Helwa Latifah Mahasiswa Sistem Informasi Angkatan 2021 yang telah meraih juara 2 lomba Gebyar Kalbar 2024 dengan Tema Gema Ekonomi Syariah... ",
    img: "/src/assets/news3.png",
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

export default function NewsSection() {
  return (
    <section className="news-section" aria-labelledby="berita-terkini">
      <div className="news-inner">
        {/* Header */}
        <div className="news-header">
          <motion.div
            className="badge news-badge"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
            custom={0}
          >
            Berita Terkini
          </motion.div>
        </div>

        {/* News list */}
        <div className="news-list">
          {newsData.map((item, idx) => (
            <motion.article
              className="news-item"
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={reveal}
              custom={idx + 1}
            >
              {/* Left: oval image */}
              <div className="news-left">
                <div className="oval-image oval-news">
                  <img src={item.img} alt={item.title} />
                </div>
              </div>

              {/* Middle: title */}
              <div className="news-center">
                <h3 className="news-title">{item.title}</h3>
              </div>

              {/* Right: excerpt + cta */}
              <div className="news-right">
                <p className="news-excerpt">{item.excerpt}</p>

                <div className="cta-row">
                  <button className="cta-read">
                    <span>Baca Selengkapnya</span>
                  </button>

                  <button className="cta-arrow" aria-label={`Buka ${item.title}`}>
                    {/* simple SVG arrow to match outline style */}
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
              </div>
            </motion.article>
          ))}

          {/* horizontal divider after items */}
          <div className="list-divider" />

          {/* Footer actions */}
          <div className="news-footer">
            <button className="cta-read cta-full">Lihat Lainnya</button>
            <button className="cta-arrow" aria-label="Lihat lainnya">
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
        </div>
      </div>
    </section>
  );
}
