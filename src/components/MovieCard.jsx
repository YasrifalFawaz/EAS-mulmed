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
        <h1>BERANI BICARA<br></br>
            BERANI PEDULI
        </h1>
        <p>
          Ini adalah film interaktif tentang seorang mahasiswi yang dibuli
          oleh kaka tingkatnya. Resti, teman dari mahasiswi tersebut, berusaha
          untuk membantu temannya menghadapi masalah ini.Setiap pilihan 
          yang diambil penonton akan mempengaruhi jalannya cerita. 
          Akankah Resti berhasil membantu
          temannya? Pilihan ada di tangan Anda!
        </p>

        <div className="movie-buttons">
          <button className="btn-play" onClick={() => navigate("/video")}>
            ▶ Play Video
          </button>

          <button className="btn-trailer" onClick={() => navigate("/trailer")}>
            🎞 Tonton Trailer
          </button>
        </div>
      </div>
    </div>
  );
}
