import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Video from "./pages/Video";
import Trailer from "./pages/Trailer";

export default function App() {
  return (
    <Routes>
      {/* Redirect default ke /home */}
      <Route path="/" element={<Navigate to="/home" />} />

      <Route path="/home" element={<Home />} />
      <Route path="/video" element={<Video />} />
      <Route path="/trailer" element={<Trailer />} />
    </Routes>
  );
}
