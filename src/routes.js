const {
  addNoteHandler, // Handler untuk menambahkan note baru
  getAllNotesHandler, // Handler untuk mengambil semua note
  getNotesByIdHandler, // Handler untuk mengambil note berdasarkan id
  editNoteByIdHandler, // Handler untuk mengedit note berdasarkan id
  deleteNoteByIdHandler, // Handler untuk menghapus note berdasarkan id
} = require('./handler');

// Definisi semua routes (endpoint) yang tersedia di API
const routes = [
  {
    method: 'POST', // HTTP method POST untuk membuat data baru
    path: '/notes', // Endpoint: /notes
    handler: addNoteHandler, // Fungsi handler yang dijalankan saat request masuk
  },
  {
    method: 'GET', // HTTP method GET untuk membaca data
    path: '/notes', // Endpoint: /notes
    handler: getAllNotesHandler, // Handler untuk mengembalikan semua catatan
  },
  {
    method: 'GET', // HTTP method GET
    path: '/notes/{id}', // Endpoint: /notes/{id}, {id} adalah parameter dinamis
    handler: getNotesByIdHandler, // Handler untuk ambil note berdasarkan id
  },
  {
    method: 'PUT', // HTTP method PUT untuk update data
    path: '/notes/{id}', // Endpoint: /notes/{id}
    handler: editNoteByIdHandler, // Handler untuk mengedit catatan sesuai id
  },
  {
    method: 'DELETE', // HTTP method DELETE untuk hapus data
    path: '/notes/{id}', // Endpoint: /notes/{id}
    handler: deleteNoteByIdHandler, // Handler untuk menghapus catatan sesuai id
  },
];

// Mengekspor routes agar bisa digunakan di server.js
module.exports = routes;
