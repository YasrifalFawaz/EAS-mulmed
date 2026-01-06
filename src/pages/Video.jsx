import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import branchingData from "../branching/BranchingData";

export default function Video() {
  const navigate = useNavigate();
  const [currentScene, setCurrentScene] = useState("intro");
  const [showChoices, setShowChoices] = useState(false);

  const scene = branchingData[currentScene];

  useEffect(() => {
    setShowChoices(false);

    const timer = setTimeout(() => {
      setShowChoices(true);
    }, scene.duration * 1000);

    return () => clearTimeout(timer);
  }, [currentScene]);

  return (
    <div className="page video-page">
      <button
        className="btn-home"
        onClick={() => navigate("/home")}
      >
        ⬅ Home
      </button>
      <div className="video-wrapper">
        <iframe
          src={scene.video}
          allow="autoplay"
          allowFullScreen
          title="Interactive Video"
        />
      </div>

      {showChoices && (
        <div className="choices bottom">
          {scene.choices.length === 0 ? (
            <button onClick={() => navigate("/home")}>
              ⬅ Kembali ke Home
            </button>
          ) : (
            scene.choices.map((choice, index) => (
              <button
                key={index}
                onClick={() => setCurrentScene(choice.next)}
              >
                {choice.text}
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}
