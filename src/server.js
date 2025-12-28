// Import modul Hapi dari package @hapi/hapi
const Hapi = require('@hapi/hapi');

// Import konfigurasi routes (kumpulan endpoint API) dari file routes.js
const routes = require('./routes');

// Fungsi async untuk inisialisasi dan menjalankan server
const init = async () => {
  // Membuat instance server Hapi
  const server = Hapi.server({
    port: 5000, // Server berjalan di port 5000
    // host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    host: 'production',
    routes: {
      cors: {
        // Mengaktifkan CORS agar bisa diakses dari domain lain
        origin: ['*'], // '*' artinya semua origin (domain) diperbolehkan,dengan kata lain bisa akses oleh port yang berbeda
      },
    },
  });

  // Mendaftarkan routes (endpoint) ke server
  server.route(routes);

  // Menjalankan server
  await server.start();

  // Menampilkan pesan di console ketika server berhasil berjalan
  console.log(`Server berjalan pada ${server.info.uri}`);
};

// Memanggil fungsi init untuk menjalankan server
init();
