const branchingData = {
  intro: {
    video: "https://drive.google.com/file/d/1C4QAw0nHw7F1QzcKFjIhRPLTY5i-JzQO/preview",
    duration:26,
    choices: [
      { text: "Membela", next: "duaA" },
      { text: "Ikut membully", next: "duaB" },
      { text: "Diam saja", next: "duaC" },
    ],
  },

  duaA: {
    video: "https://drive.google.com/file/d/FOREST_ID/preview",
    duration: 0,
    choices: [
      { text: "Tario Rio Pergi", next: "duaAsatu" },
      { text: "Laporkan ke Satgas", next: "duaAdua" },

    ],
  },

  duaAsatu: {
    video: "https://drive.google.com/file/d/CITY_ID/preview",
    duration:0,
    choices: [
      { text: " ", next: "" },
      { text: "", next: "" },
    ],
  },

  duaAdua: {
    video: "https://drive.google.com/file/d/HOUSE_ID/preview",
    duration:0,
    choices: [],
  },

  duaB: {
    video: "https://drive.google.com/file/d/BUILDING_ID/preview",
    duration:0,
    choices: [
      { text: "", next: "" },
      { text: "", next: "" },
    ],
  },

  duaC: {
    video: "https://drive.google.com/file/d/CITY_ID/preview",
    duration:0,
    choices: [
      { text: "Mengantar dan Meminta Maaf", next: "duaCsatu" },
      { text: "Pergi Tanpa Membantu", next: "duaCdua" },
    ],
  },

  duaCsatu: {
    video: "https://drive.google.com/file/d/HOUSE_ID/preview",
    duration:0,
    choices: [],
  },

  duaCdua: {
    video: "https://drive.google.com/file/d/BUILDING_ID/preview",
    duration:0,
    choices: [],
  },
};

export default branchingData;
