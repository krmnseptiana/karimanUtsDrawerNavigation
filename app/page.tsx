"use client";
import React, { useState } from "react";
import { CssBaseline } from "@mui/material";

// Import semua komponen
import Hero from "./components/hero";
import Skills from "./components/skill";
import PersonalInfo from "./components/personalinfo";
import MyGallery from "./components/hobbies";
import RiwayatPendidikan from "./components/riwayatPendidikan";
import RiwayatPekerjaan from "./components/riwayatPekerjaan";
import ContactForm from "./components/contact";
import WarnaFavorit from "./components/tema";

const drawerWidth = 240;

const Page = () => {
  const [selectedPage, setSelectedPage] = useState("profile");

  const renderContent = () => {
    switch (selectedPage) {
      case "profile":
        return <Hero />;
      case "skill":
        return <Skills />;
      case "personal info":
        return <PersonalInfo />;
      case "galery":
        return <MyGallery />;
      case "riwayatPendidikan":
        return <RiwayatPendidikan />;
      case "riwayatPekerjaan":
        return <RiwayatPekerjaan />;
      case "kontak":
        return <ContactForm />;
      case "warna favorit":
        return <WarnaFavorit />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="flex h-screen">
      {/* CssBaseline - Global Reset */}
      <CssBaseline />

      {/* AppBar */}
      <div className="fixed top-0 left-0 w-full bg-pink-700 z-50">
        <div className="p-4">
          <h1 className="text-white text-2xl">My App</h1>
        </div>
      </div>

      {/* Drawer */}
      <div
        className="fixed top-16 left-0 bottom-0 w-60 bg-black text-white p-4 overflow-auto z-40"
        style={{ height: "calc(100vh - 64px)" }}
      >
        <div className="space-y-4">
          <button
            onClick={() => setSelectedPage("profile")}
            className="w-full text-left px-4 py-2 hover:bg-gray-700 rounded"
          >
            Hero
          </button>
          <button
            onClick={() => setSelectedPage("skill")}
            className="w-full text-left px-4 py-2 hover:bg-gray-700 rounded"
          >
            Skill
          </button>
          <button
            onClick={() => setSelectedPage("personal info")}
            className="w-full text-left px-4 py-2 hover:bg-gray-700 rounded"
          >
            Personal Info
          </button>
          <button
            onClick={() => setSelectedPage("galery")}
            className="w-full text-left px-4 py-2 hover:bg-gray-700 rounded"
          >
            Gallery
          </button>
          <button
            onClick={() => setSelectedPage("riwayatPendidikan")}
            className="w-full text-left px-4 py-2 hover:bg-gray-700 rounded"
          >
            Riwayat Pendidikan
          </button>
          <button
            onClick={() => setSelectedPage("riwayatPekerjaan")}
            className="w-full text-left px-4 py-2 hover:bg-gray-700 rounded"
          >
            Riwayat Pekerjaan
          </button>
          <button
            onClick={() => setSelectedPage("kontak")}
            className="w-full text-left px-4 py-2 hover:bg-gray-700 rounded"
          >
            Kontak
          </button>
          <button
            onClick={() => setSelectedPage("warna favorit")}
            className="w-full text-left px-4 py-2 hover:bg-gray-700 rounded"
          >
            Warna Favorit
          </button>
        </div>
      </div>

      {/* Konten Utama */}
      <div className="flex-1 ml-60 mt-16 p-6 bg-pink-100 overflow-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default Page;