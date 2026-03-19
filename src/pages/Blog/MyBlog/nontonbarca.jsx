// src/pages/Blog/MyBlog/nontonbarca.jsx
import barca from "../../../assets/barca.jpg";

export default function NontonBarca() {
  return (
    <div>
      <h1>My Dream to Watch Barcelona Live</h1>
      <p className="date">Published in 2026</p>

      <img src={barca} alt="Barcelona" />

      <p>
        For a long time, I have dreamed of watching a Barcelona match live in
        the stadium. It’s not just about the game, but about feeling the
        atmosphere of Camp Nou, surrounded by passionate fans.
      </p>

      <p>
        I want to hear the roar of the crowd when a goal is scored, sing chants
        with thousands of supporters, and see my favorite players with my own
        eyes.
      </p>

      <p>
        For me, this is more than just football. It’s a dream that I hope to
        achieve someday.
      </p>
    </div>
  );
}
