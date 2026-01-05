import { useNavigate } from "react-router-dom";

export default function Trailer() {
  const navigate = useNavigate();

  const trailerEmbed =
    "https://drive.google.com/file/d/1kEYbZcDmhnFDJRVhkIlVmwddyPPKmM_Q/preview";

  return (
    <div className="page">
      <div className="video-wrapper">
        <iframe
          src={trailerEmbed}
          width="900"
          height="500"
          allow="autoplay"
          allowFullScreen
          title="Trailer"
        ></iframe>
      </div>

      <button onClick={() => navigate("/home")}>
        ⬅ Kembali
      </button>
    </div>
  );
}
