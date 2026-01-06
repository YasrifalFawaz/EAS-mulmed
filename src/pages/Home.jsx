import MovieCard from "../components/MovieCard";
import background from "../assets/background.jpg";

export default function Home() {
  return (
    <div
      className="home-hero"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="overlay" />
      <MovieCard />
    </div>
  );
}
