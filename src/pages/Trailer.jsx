import { useNavigate } from "react-router-dom";

export default function Trailer() {
  const navigate = useNavigate();

  const trailerEmbed =
    "https://drive.google.com/file/d/1QXHBAGoQuG-Qf_s_z2mn2Wt26SR9ItEg/preview";

  return (
    <div className="video-page">
      <button
        className="btn-home"
        onClick={() => navigate("/home")}
      >
        ⬅ Home
      </button>

      <div className="video-wrapper">
        <iframe
          src={trailerEmbed}
          allow="autoplay"
          allowFullScreen
          title="Trailer"
        />
      </div>
    </div>
  );
}
