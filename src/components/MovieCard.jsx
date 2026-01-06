import { useNavigate } from "react-router-dom";
import poster from "../assets/poster.jpeg";

export default function MovieCard() {
  const navigate = useNavigate();

  return (
    <div className="movie-card">
      <img
        src={poster}
        alt="Poster Film"
        className="movie-poster"
      />

      <div className="movie-content">
        <h1 className="movie-title">
          BERANI BICARA <br />
          BERANI PEDULI
        </h1>

        <p className="movie-desc">
          Ini adalah film interaktif tentang seorang mahasiswi yang dibuli
          oleh kakak tingkatnya. Resti, teman dari mahasiswi tersebut, berusaha
          membantu temannya menghadapi masalah ini. Setiap pilihan yang diambil
          penonton akan mempengaruhi jalannya cerita.  
          <br /><br />
          Akankah Resti berhasil membantu temannya?
          <strong> Pilihan ada di tangan Anda!</strong>
        </p>

        <div className="movie-buttons">
          <button
            className="btn-play"
            onClick={() => navigate("/video")}
          >
            ▶ Mulai Cerita
          </button>

          <button
            className="btn-trailer"
            onClick={() => navigate("/trailer")}
          >
            🎞 Trailer
          </button>
        </div>
      </div>
    </div>
  );
}
