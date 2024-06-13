import { Link } from "react-router-dom";
import auth from "../firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useContext } from "react";
import { ThemeContext } from "../ThemeProvider";

import "./Home.css";

export default function HomePage() {
  const [user, loading] = useAuthState(auth);

  const { theme } = useContext(ThemeContext);

  return (
    <div className="home-page">
      <main>
        <section>
          <h1>FlickFindr</h1>
        </section>
        <section>
          <article>
            🎬 Hey movie buffs! Ready to level up your binge-watching game? Meet{" "}
            <strong>FlickFindr</strong> – your new BFF for movie nights. 🍿✨
            Whether you're into indie flicks, blockbuster hits, or hidden gems,
            we've got you covered. Swipe, match, and discover movies tailored to
            your vibe. 📲✨ Tired of endless scrolling? FlickFindr curates the
            perfect watchlist just for you. Dive in, explore, and let the movie
            magic begin. 🚀🎥 #WatchBetter #FlickFindr Feel free to tweak it as
            needed!
          </article>

          <article>
            {loading ? null : !user ? (
              <Link to="/login">Login</Link>
            ) : (
              <Link to="/movies" className={theme}>
                Movies
              </Link>
            )}
          </article>
        </section>
      </main>
    </div>
  );
}
