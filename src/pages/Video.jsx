import { useState } from "react";
import { useNavigate } from "react-router-dom";
import branchingData from "../branching/BranchingData";

export default function Video() {
  const navigate = useNavigate();
  const [currentScene, setCurrentScene] = useState("intro");

  const scene = branchingData[currentScene];

  return (
    <div className="page">
      <div className="video-wrapper">
        <iframe
          src={scene.video}
          allow="autoplay"
          allowFullScreen
          title="Interactive Video"
        />
      </div>

      <div className="choices">
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
    </div>
  );
}
