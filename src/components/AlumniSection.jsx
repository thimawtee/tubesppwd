import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Marsha",
    title: "Bekerja di PT. Surya Madistrindo",
    quote:
      '"Jurusan Sistem Informasi telah membekali saya skill untuk menghadapi tantangan dalam pekerjaan, seperti merancang solusi yang efisien, dan berkomunikasi dengan berbagai pihak terkait. Semua ini tentunya tak lepas dari dukungan dan bimbingan dari dosen-dosen yang berpengalaman dan lingkungan belajar yang inovatif di Jurusan Sistem Informasi Untan"',
    avatar:
      "https://res.cloudinary.com/symphony24/image/upload/v1750336637/Desain_tanpa_judu1l_v4fgs4.png",
    rotate: 3,
    bg: "#1C5696",
  },
  {
    id: 2,
    name: "Nadin",
    title:
      "Bekerja di Institut Shanti Bhuana dan Mahasiswa Magister di Universitas Kristen Satya Wacana",
    quote:
      '"Kuliah di Sistem Informasi Untan itu pilihan yang tepat. Karena, pertama di Prodi Sistem Informasi kita tidak hanya belajar IT atau teknologi, melainkan ada Entreprenurship, manajemen, dan penerapan teknologinya sendiri sehingga saling berkaitan dan relevan dengan dunia pekerjaan di semua sektor."',
    avatar:
      "https://res.cloudinary.com/symphony24/image/upload/v1750336634/erzw04xmnvabnjw0a9ci.jpg",
    rotate: -3,
    bg: "#2E90FA",
  },
  {
    id: 3,
    name: "Niki",
    title: "Bekerja di PT. Surya Madistrindo",
    quote:
      '"Jurusan Sistem Informasi telah membekali saya skill untuk menghadapi tantangan dalam pekerjaan, seperti merancang solusi yang efisien, dan berkomunikasi dengan berbagai pihak terkait. Semua ini tentunya tak lepas dari dukungan dan bimbingan dari dosen-dosen yang berpengalaman dan lingkungan belajar yang inovatif di Jurusan Sistem Informasi Untan"',
    avatar:
      "https://res.cloudinary.com/symphony24/image/upload/v1750336634/niki_zefanya_lockscreen_pvosja.jpg",
    rotate: 1,
    bg: "#2573C8",
  },
];

export default function AlumniSection() {
  return (
    <section
      className="w-full bg-white box-border"
      style={{ paddingTop: "74px", paddingBottom: "60px" }}
    >
      <div className="max-w-[1920px] mx-auto px-8 flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 md:gap-8">
          <div
            className="bg-[#2e90fa] text-white rounded-full inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <span className="text-[32px] md:text-5xl font-semibold leading-10 md:leading-[56px]">
              Alumni Sukses
            </span>
          </div>
          <p
            className="text-[#080808] text-base md:text-xl font-normal leading-6 md:leading-7 m-0 md:w-[445px] md:text-right"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Program Studi Sistem Informasi mengahasilkan lulusan yang bermutu tinggi
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-black opacity-20" />

        {/* Cards Container - Desktop Only (3 cards with rotation) */}
        <div className="hidden xl:block relative w-full" style={{ height: "680px" }}>
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ gap: "10px" }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="p-8 rounded-[32px] flex flex-col justify-between box-border cursor-pointer"
                style={{
                  width: "627px",
                  height: "603px",
                  background: testimonial.bg,
                  transformOrigin: "center center",
                  transition: "all 0.3s ease",
                }}
                initial={{
                  opacity: 0,
                  y: 20,
                  rotate: testimonial.rotate,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotate: testimonial.rotate,
                }}
                whileHover={{
                  rotate: 0,
                  scale: 1.03,
                }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Profile Section */}
                <div className="flex items-center gap-6">
                  <div
                    className="w-[84.56px] h-[84.56px] bg-white rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center"
                    style={{ outline: "4px solid white" }}
                  >
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    <h3
                      className="text-white text-[32px] font-semibold leading-10 m-0"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {testimonial.name}
                    </h3>
                    <p
                      className="text-white text-xl font-normal leading-7 m-0"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {testimonial.title}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <blockquote
                  className="text-white text-2xl font-normal leading-8 m-0"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {testimonial.quote}
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Cards Container - Tablet & Mobile (vertical stack) */}
        <div className="flex xl:hidden flex-col gap-6 items-center w-full">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="w-full max-w-[627px] p-6 md:p-8 rounded-3xl md:rounded-[32px] flex flex-col justify-between gap-6"
              style={{
                background: testimonial.bg,
                minHeight: "400px",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Profile Section */}
              <div className="flex items-center gap-6">
                <div
                  className="w-[84.56px] h-[84.56px] bg-white rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center"
                  style={{ outline: "4px solid white" }}
                >
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <h3
                    className="text-white text-2xl md:text-[28px] font-semibold leading-8 md:leading-9 m-0"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {testimonial.name}
                  </h3>
                  <p
                    className="text-white text-base md:text-xl font-normal leading-6 md:leading-7 m-0"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {testimonial.title}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <blockquote
                className="text-white text-lg md:text-xl font-normal leading-[26px] md:leading-7 m-0"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {testimonial.quote}
              </blockquote>
            </motion.div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center">
          <button
            className="group flex-1 bg-white border border-black flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-black h-[60px] md:h-20 px-6 rounded-full"
            style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
          >
            <span
              className="text-[#080808] group-hover:text-white text-base md:text-xl font-normal leading-6 md:leading-7 transition-colors duration-300"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Lihat Lainnya
            </span>
          </button>
          <button
            className="group bg-white border border-black border-l-0 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-black w-[60px] h-[60px] md:w-20 md:h-20 p-6 rounded-full"
            style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
            aria-label="Go to alumni page"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#080808] group-hover:text-white transition-colors duration-300"
            >
              <path d="M7 17L17 7M17 7H11M17 7V13" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
