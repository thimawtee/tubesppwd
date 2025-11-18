import React from "react";
import { motion } from "framer-motion";

const CtaPill = ({ children }) => (
  <button
    className="h-20 flex-1 inline-flex items-center justify-center rounded-full bg-white text-xl text-black outline outline-1 -outline-offset-1 outline-zinc-800 cursor-pointer transition-all duration-150 hover:bg-black hover:text-white hover:outline-black focus:bg-black focus:text-white focus:outline-black max-md:h-16 max-md:text-base"
    style={{ fontFamily: "Poppins, sans-serif" }}
  >
    {children}
  </button>
);

const CtaArrow = ({ label }) => (
  <button
    className="h-20 w-20 inline-flex items-center justify-center rounded-full bg-white text-black outline outline-1 -outline-offset-1 outline-zinc-800 cursor-pointer transition-all duration-150 hover:bg-black hover:text-white hover:outline-black focus:bg-black focus:text-white focus:outline-black max-md:h-16 max-md:w-16"
    aria-label={label}
  >
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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

export default function VideoSection() {
  const YOUTUBE_VIDEO_ID = "STDD73vhRhs";

  return (
    <section
      className="w-full box-border bg-white py-9 px-8 max-md:px-4 max-md:py-6"
      aria-labelledby="video-profil"
    >
      <div className="max-w-[1856px] mx-auto box-border">
        {/* Header */}
        <div className="mb-2 flex items-center justify-start gap-4">
          <motion.div
            className="rounded-full bg-[#2E90FA] py-4 px-7 text-5xl font-semibold text-white max-md:text-3xl max-md:py-3 max-md:px-5"
            style={{ fontFamily: "Poppins, sans-serif" }}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
            viewport={{ once: true }}
          >
            Video Profil
          </motion.div>
        </div>

        {/* Divider */}
        <hr className="mt-4 mb-6 h-px border-0 bg-zinc-800" />

        {/* Content Row */}
        <div className="flex flex-wrap items-stretch justify-center gap-7 box-border max-lg:flex-col max-lg:items-stretch">
          {/* Video Container */}
          <motion.div
            className="flex-[0_0_48%] max-w-[800px] min-w-[300px] h-[500px] rounded-[32px] overflow-hidden box-border max-lg:flex-[0_0_100%] max-lg:max-w-full max-lg:h-[400px] max-md:h-[400px]"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
          >
            {/* YouTube Embed */}
            <iframe
              className="w-full h-full rounded-[32px]"
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0`}
              title="Video Profil Program Studi Sistem Informasi"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="flex-[0_0_48%] max-w-[800px] min-w-[300px] h-[400px] flex flex-col justify-between gap-6 box-border max-lg:flex-[0_0_100%] max-lg:max-w-full max-lg:h-auto"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.06 }}
            viewport={{ once: true }}
          >
            {/* Description Card */}
            <div className="flex h-[calc(100%-100px)] items-start overflow-auto rounded-[18px] bg-white p-6 box-border outline outline-1 outline-zinc-800 -outline-offset-1 max-lg:h-auto max-lg:p-5 max-md:p-4">
              <p
                className="m-0 text-[28px] leading-[36px] text-[#080808] max-lg:text-xl max-lg:leading-7 max-md:text-base max-md:leading-6"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Video singkat Profil Program Studi Sistem Informasi oleh Himpunan Mahasiswa Sistem
                Informasi dalam rangka memperkenalkan Program Studi Sistem Informasi secara luas
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center justify-start gap-3 box-border max-lg:justify-stretch">
              <CtaPill>Subscribe Channel</CtaPill>
              <CtaArrow label="Subscribe" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
