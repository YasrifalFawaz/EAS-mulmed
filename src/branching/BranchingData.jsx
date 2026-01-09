const branchingData = {
  intro: {
    video: "https://drive.google.com/file/d/1KZYAvWCJn3zPzOZt0usaGKQ6NBStpzd9/preview",
    duration:0,
    choices: [
      { text: "Membela", next: "duaA" },
      { text: "Ikut membully", next: "duaB" },
      { text: "Diam saja", next: "duaC" },
    ],
  },

  duaA: {
    video: "https://drive.google.com/file/d/1mGokbd0CarWjmmcQ943PNgVPNLmFR4Wj/preview",
    duration: 0,
    choices: [
      { text: "Tarik Rio Pergi", next: "duaAsatu" },
      { text: "Laporkan ke Satgas", next: "duaAdua" },
    ],
  },

  duaAsatu: {
    video: "https://drive.google.com/file/d/1rhaPitkst2FqZb71EpWlrDPdqPVJ5wio/preview",
    duration:0,
    choices: [
    ],
  },

  duaAdua: {
    video: "https://drive.google.com/file/d/1DAui_qVPgpJ91qesAJK2wV3bhmfJwOYD/preview",
    duration:0,
    choices: [],
  },

  duaB: {
    video: "https://drive.google.com/file/d/1Q-YRh4GRNtsWSU5xV8c9Rh3nUknu9Myw/preview",
    duration:0,
    choices: [
    ],
  },

  duaC: {
    video: "https://drive.google.com/file/d/1-Y3APVJrdbltpzJE21Khx8dMi7hymsvP/preview",
    duration:0,
    choices: [
      { text: "Mengantar dan Meminta Maaf", next: "duaCsatu" },
      { text: "Pergi Tanpa Membantu", next: "duaCdua" },
    ],
  },

  duaCsatu: {
    video: "https://drive.google.com/file/d/1ygoJ1YZr1-ItOzcHNU6oXZK4SszF3NM_/preview",
    duration:0,
    choices: [],
  },

  duaCdua: {
    video: "https://drive.google.com/file/d/1HhyyiadAVcSo5gW_HS5fEmg0PMukNQt-/preview",
    duration:0,
    choices: [],
  },
};

export default branchingData;
