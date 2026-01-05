const branchingData = {
  intro: {
    video: "https://drive.google.com/file/d/11H5gJFofCBcRVIkk0bFK62MMTE53neBm/preview",
    choices: [
      { text: "Ikut membela", next: "duaA" },
      { text: "Ikut membully", next: "duaB" },
      { text: "Diam saja", next: "duaC" },
    ],
  },

  duaA: {
    video: "https://drive.google.com/file/d/FOREST_ID/preview",
    choices: [
      { text: "Masuk ke hutan", next: "forest" },
      { text: "Pergi ke kota", next: "city" },

    ],
  },

  duaB: {
    video: "https://drive.google.com/file/d/CITY_ID/preview",
    choices: [
      { text: "Masuk gedung", next: "building" },
      { text: "Kembali", next: "intro" },
    ],
  },

  duaC: {
    video: "https://drive.google.com/file/d/HOUSE_ID/preview",
    choices: [],
  },

  building: {
    video: "https://drive.google.com/file/d/BUILDING_ID/preview",
    choices: [],
  },
};

export default branchingData;
