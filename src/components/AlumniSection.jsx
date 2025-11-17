import React from "react";
import { motion } from "framer-motion";
import "../styles/alumni.css";

const testimonials = [
  {
    id: 1,
    name: "Ahmad Rifai",
    title: "Bekerja di PT. Surya Madistrindo",
    quote:
      '"Jurusan Sistem Informasi telah membekali saya skill untuk menghadapi tantangan dalam pekerjaan, seperti merancang solusi yang efisien, dan berkomunikasi dengan berbagai pihak terkait. Semua ini tentunya tak lepas dari dukungan dan bimbingan dari dosen-dosen yang berpengalaman dan lingkungan belajar yang inovatif di Jurusan Sistem Informasi Untan"',
    avatar: "https://placehold.co/85x85",
    rotate: 3,
    bg: "#1C5696",
  },
  {
    id: 2,
    name: "Mira",
    title:
      "Bekerja di Institut Shanti Bhuana dan Mahasiswa Magister di Universitas Kristen Satya Wacana",
    quote:
      '"Kuliah di Sistem Informasi Untan itu pilihan yang tepat. Karena, pertama di Prodi Sistem Informasi kita tidak hanya belajar IT atau teknologi, melainkan ada Entreprenurship, manajemen, dan penerapan teknologinya sendiri sehingga saling berkaitan dan relevan dengan dunia pekerjaan di semua sektor."',
    avatar: "https://placehold.co/84x84",
    rotate: -3,
    bg: "#2E90FA",
  },
  {
    id: 3,
    name: "Ahmad Rifai",
    title: "Bekerja di PT. Surya Madistrindo",
    quote:
      '"Jurusan Sistem Informasi telah membekali saya skill untuk menghadapi tantangan dalam pekerjaan, seperti merancang solusi yang efisien, dan berkomunikasi dengan berbagai pihak terkait. Semua ini tentunya tak lepas dari dukungan dan bimbingan dari dosen-dosen yang berpengalaman dan lingkungan belajar yang inovatif di Jurusan Sistem Informasi Untan"',
    avatar: "https://placehold.co/81x81",
    rotate: 1,
    bg: "#2573C8",
  },
];

export default function AlumniSection() {
  return (
    <section className="alumni-section">
      <div className="alumni-container">
        {/* Header */}
        <div className="alumni-header">
          <div className="alumni-title-badge">
            <span>Alumni Sukses</span>
          </div>
          <p className="alumni-description">
            Program Studi Sistem Informasi mengahasilkan lulusan yang bermutu tinggi
          </p>
        </div>

        {/* Separator Line */}
        <div className="alumni-divider" />

        {/* Cards Container */}
        <div className="alumni-cards-wrapper">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="alumni-card"
              style={{
                background: testimonial.bg,
              }}
            >
              {/* Profile Section */}
              <div className="card-header">
                <div className="avatar-container">
                  <img src={testimonial.avatar} alt={testimonial.name} className="avatar-image" />
                </div>
                <div className="profile-info">
                  <h3 className="profile-name">{testimonial.name}</h3>
                  <p className="profile-title">{testimonial.title}</p>
                </div>
              </div>

              {/* Quote Section */}
              <blockquote className="card-quote">{testimonial.quote}</blockquote>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="alumni-actions">
          <button className="btn-see-more">
            <span>Lihat Lainnya</span>
          </button>
          <button className="btn-icon" aria-label="Go to alumni page">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7M17 7H11M17 7V13" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
