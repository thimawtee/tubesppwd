import React from "react";
import { motion } from "framer-motion";

export default function StatsSection() {
  const reveal = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i = 1) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: 0.1 * i, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="w-full bg-white py-20">
      {/* Desktop Layout */}
      <div className="hidden lg:block max-w-[1800px] mx-auto relative h-[680px] px-10">
        <div className="relative w-full h-full">
          {/* Background Panel */}
          <div className="absolute -left-10 -right-10 top-0 bottom-0 bg-[#cfebd1] rounded-xl z-0" />

          {/* Bubble Mahasiswa (Center Top) */}
          <motion.div
            className="absolute rounded-full flex items-center justify-center z-[2] shadow-[0_0_0_8px_#cfebd1_inset]"
            style={{
              width: "500px",
              height: "500px",
              background: "#0c7a13",
              left: "38%",
              top: "30px",
              transform: "translateX(-50%)",
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={reveal}
            custom={1}
          >
            <div
              className="text-white text-[72px] font-normal leading-[80px]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              344
            </div>
          </motion.div>

          {/* Label Mahasiswa */}
          <div
            className="absolute flex items-center gap-6 z-[3]"
            style={{ right: "15%", top: "200px" }}
          >
            <div className="h-px bg-[#031f05] min-w-[100px] flex-1" />
            <div
              className="text-[#095c0e] text-4xl font-semibold min-w-[200px] whitespace-nowrap"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Mahasiswa
            </div>
          </div>

          {/* Bubble Lulusan */}
          <motion.div
            className="absolute rounded-full flex items-center justify-center z-[2] shadow-[0_0_0_8px_#cfebd1_inset]"
            style={{
              width: "400px",
              height: "400px",
              background: "#0f9918",
              left: "25%",
              top: "220px",
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={reveal}
            custom={2}
          >
            <div
              className="text-white text-[72px] font-normal leading-[80px]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              194
            </div>
          </motion.div>

          {/* Label Lulusan */}
          <div
            className="absolute flex items-center gap-6 z-[3] justify-end"
            style={{ left: "8%", top: "390px", width: "350px" }}
          >
            <div
              className="text-[#0c7a13] text-4xl font-semibold min-w-[200px] whitespace-nowrap text-right"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Lulusan
            </div>
            <div className="h-px bg-[#031f05] min-w-[100px] flex-1" />
          </div>

          {/* Bubble Dosen */}
          <motion.div
            className="absolute rounded-full flex items-center justify-center z-[2] shadow-[0_0_0_8px_#cfebd1_inset]"
            style={{
              width: "300px",
              height: "300px",
              background: "#3fad46",
              right: "25%",
              top: "350px",
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={reveal}
            custom={3}
          >
            <div
              className="text-white text-[72px] font-normal leading-[80px]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              7
            </div>
          </motion.div>

          {/* Label Dosen */}
          <div
            className="absolute flex items-center gap-6 z-[3]"
            style={{ right: "7%", top: "440px" }}
          >
            <div className="h-px bg-[#031f05] min-w-[100px] flex-1" />
            <div
              className="text-[#0f9918] text-4xl font-semibold min-w-[200px] whitespace-nowrap"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Dosen
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout - Vertical Stack */}
      <div className="lg:hidden px-6 py-8">
        <div className="bg-[#cfebd1] rounded-2xl p-8 space-y-8">
          {/* Mahasiswa */}
          <motion.div
            className="flex flex-col items-center gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={reveal}
            custom={1}
          >
            <div className="w-40 h-40 rounded-full bg-[#0c7a13] flex items-center justify-center shadow-[0_0_0_6px_#cfebd1_inset]">
              <div
                className="text-white text-5xl font-normal"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                344
              </div>
            </div>
            <div
              className="text-[#095c0e] text-2xl font-semibold"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Mahasiswa
            </div>
          </motion.div>

          {/* Lulusan */}
          <motion.div
            className="flex flex-col items-center gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={reveal}
            custom={2}
          >
            <div className="w-36 h-36 rounded-full bg-[#0f9918] flex items-center justify-center shadow-[0_0_0_6px_#cfebd1_inset]">
              <div
                className="text-white text-5xl font-normal"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                194
              </div>
            </div>
            <div
              className="text-[#0c7a13] text-2xl font-semibold"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Lulusan
            </div>
          </motion.div>

          {/* Dosen */}
          <motion.div
            className="flex flex-col items-center gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={reveal}
            custom={3}
          >
            <div className="w-32 h-32 rounded-full bg-[#3fad46] flex items-center justify-center shadow-[0_0_0_6px_#cfebd1_inset]">
              <div
                className="text-white text-5xl font-normal"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                7
              </div>
            </div>
            <div
              className="text-[#0f9918] text-2xl font-semibold"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Dosen
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
