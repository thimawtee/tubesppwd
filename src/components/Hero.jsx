import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  // URL Cloudinary yang sudah dioptimasi
  const optimizedHeroUrl =
    "https://res.cloudinary.com/symphony24/image/upload/f_auto,q_auto/v1763420358/hero_gmrv6x.png";

  return (
    <section
      className="flex w-full min-h-screen justify-center overflow-hidden bg-white pb-5"
      aria-labelledby="hero-title"
    >
      <motion.div
        className="relative mx-auto flex w-full max-w-[1856px] flex-col items-center overflow-visible px-4"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Hero Card - Desktop & Tablet */}
        <div
          className="relative h-[850px] w-[1700px] scale-75 -mt-16 overflow-hidden rounded-[48px] hidden lg:block"
          role="img"
          aria-label="Gedung fakultas dan taman"
        >
          {/* Background Image */}
          <img
            // [PERUBAHAN] src diganti ke URL optimasi + lazy loading
            className="pointer-events-none absolute top-0 left-0 h-full w-full select-none rounded-[48px] object-cover object-center"
            src={optimizedHeroUrl}
            alt="Gedung Prodi Sistem Informasi"
            loading="lazy" // <-- LAZY LOADING DITAMBAHKAN
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/1861x1241";
            }}
          />

          {/* Left Panel (Tidak berubah, akan ikut mengecil karena parent-nya di-scale) */}
          <div
            className="absolute top-[35px] left-[60px] inline-flex h-[733px] w-[739px] flex-col items-center justify-center gap-2.5 p-6"
            aria-hidden="false"
          >
            {/* Inner Blur Card */}
            <div
              className="isolate flex h-[calc(100%-36px)] w-full flex-col items-center justify-between rounded-[32px] bg-[#1C5696]/50 p-6 backdrop-blur-[25px]"
              style={{ WebkitBackdropFilter: "blur(25px)" }}
            >
              {/* Welcome Text */}
              <div
                className="w-full font-normal leading-[60px] text-white"
                style={{ fontFamily: "Poppins, sans-serif", fontSize: "56px" }}
              >
                Selamat Datang Di <br /> Website Profil
              </div>

              {/* Vertical Divider */}
              <div className="h-[197px] w-1 rounded-[24px] bg-white" aria-hidden="true" />

              {/* Program Text */}
              <div
                className="w-full font-semibold leading-[60px] text-white"
                style={{ fontFamily: "Poppins, sans-serif", fontSize: "56px" }}
              >
                Program Studi Sistem <br /> Informasi
              </div>
            </div>
          </div>
        </div>

        {/* Hero Card - Mobile Only */}
        <div className="lg:hidden w-full flex flex-col gap-4">
          {/* Image */}
          <div className="w-full rounded-3xl overflow-hidden">
            <img
              className="w-full h-[220px] object-cover object-center"
              src={optimizedHeroUrl}
              alt="Gedung Prodi Sistem Informasi"
              loading="lazy" // <-- LAZY LOADING DITAMBAHKAN
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/800x600";
              }}
            />
          </div>

          {/* Content Card (Tidak berubah) */}
          <div className="w-full rounded-3xl bg-[#1C5696] p-6 flex flex-col gap-4 items-center text-center">
            {/* Welcome Text */}
            <div
              className="w-full text-white font-normal text-2xl leading-tight"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Selamat Datang Di Website Profil
            </div>

            {/* Horizontal Divider */}
            <div className="w-20 h-1 rounded-full bg-white/60" />

            {/* Program Text */}
            <div
              className="w-full text-white font-semibold text-2xl leading-tight"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Program Studi Sistem Informasi
            </div>
          </div>
        </div>

        {/* Tagline (Tidak berubah) */}
        <h2
          id="hero-title"
          className="mt-16 w-full text-center font-normal leading-[60px] text-[#080808] lg:mt-16 lg:text-[64px] md:text-5xl sm:text-3xl sm:mt-8 sm:leading-tight px-4"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Sustainabel Solutions, Digital Excellence
        </h2>
      </motion.div>
    </section>
  );
}
