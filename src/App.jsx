// src/App.jsx
import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ProfileSection from "./components/ProfileSection";
import NewsSection from "./components/NewsSection";
import FocusSection from "./components/FocusSection";
import VideoSection from "./components/VideoSection";
import StatsSection from "./components/StatsSection";
import AlumniSection from "./components/AlumniSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <ProfileSection />
        <NewsSection />
        <FocusSection />
        <VideoSection />
        <StatsSection />
        <AlumniSection />
        <Footer />
      </main>
    </>
  );
}
