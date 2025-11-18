# Web Profil Jurusan Sistem Informasi (web-sisfo)

Selamat datang di repositori Web Profil Jurusan Sistem Informasi. Proyek ini merupakan frontend yang dibangun menggunakan React + Vite, dengan styling modern memakai Tailwind CSS dan animasi dari Framer Motion. Aplikasi juga dikonfigurasikan untuk berjalan menggunakan Docker untuk mempermudah proses pengembangan.

## 🚀 Tech Stack

- Framework: React (Vite)
- Build Tool: Vite
- Styling: Tailwind CSS v3
- Animasi: Framer Motion
- Development: Docker & Docker Compose
- Linting: ESLint

## 📁 Struktur Proyek

web-sisfo/
├── public/
├── src/
│ ├── assets/
│ ├── components/
│ ├── styles/
│ ├── App.jsx
│ ├── index.css
│ ├── main.jsx
├── .dockerignore
├── .gitignore
├── docker-compose.yml
├── Dockerfile.dev
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js

## 🏁 Memulai Proyek

### 🔧 Cara 1 — Menjalankan dengan Docker (Direkomendasikan)

1. Clone repositori:
   git clone [URL-REPOSITORI]
   cd web-sisfo

2. Bangun dan jalankan container:
   docker compose up --build -d

3. Buka aplikasi:
   http://localhost:5173

Catatan:

- Hot reload aktif otomatis.
- Jika menambah dependensi baru, jalankan ulang:
  docker compose up --build -d

### 💻 Cara 2 — Instalasi Lokal (Tanpa Docker)

1. Pastikan Node.js v18+ sudah terpasang.
2. Clone repositori:
   git clone [URL-REPOSITORI]
   cd web-sisfo
3. Install dependensi:
   npm install
4. Jalankan server development:
   npm run dev
5. Buka:
   http://localhost:5173

## 📜 Skrip (package.json)

- npm run dev — mode development
- npm run build — build produksi ke folder dist/
- npm run lint — menjalankan ESLint
- npm run preview — melihat hasil build produksi secara lokal

## 📄 Lisensi

Sesuaikan apabila proyek ini memiliki lisensi tertentu.
