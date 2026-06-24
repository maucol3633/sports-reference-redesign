import "./App.css";
import logo from "./assets/logo.png";

function App() {
  return (
    <div className="page">

      <header className="navbar">
  <div className="logo">
    <img src={logo} alt="SportsRef Redesign Logo" />
  </div>

  <nav className="nav-links">

  <div className="dropdown">
    <a href="#">Sports ▾</a>

    <div className="dropdown-content">
      <a href="#">Baseball</a>
      <a href="#">Basketball</a>
      <a href="#">Football</a>
      <a href="#">Hockey</a>
      <a href="#">College Football</a>
      <a href="#">College Basketball</a>
    </div>
  </div>

  <a href="#">Stathead</a>
  <a href="#">Immaculate Grid</a>
  <a href="#">Blog</a>
  <a href="#">Careers</a>

</nav>
</header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">

          <div className="hero-left">
            <h1>Find Stats. Fast.</h1>

            <p>
              Search players, teams, and seasons across all major leagues.
            </p>

            <input
              className="search"
              placeholder="Search player, team, or league..."
            />
          </div>

          <div className="hero-right">
            <img
              src="/images/players-header.png"
              alt="Sports Players"
              className="hero-image"
            />
          </div>

        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="quick-links">
        {[
          { name: "Baseball", img: "/images/baseball.png", color: "#b91c1c" },
          { name: "Basketball", img: "/images/basketball.png", color: "#ff9900" },
          { name: "Football", img: "/images/football.png", color: "#065f46" },
          { name: "Hockey", img: "/images/hockey.png", color: "#80b1ff" },
          { name: "FBREF", img: "/images/fbref.png", color: "#f59e0b" },
          { name: "College Football", img: "/images/cfb.png", color: "hsl(247, 82%, 29%)" },
          { name: "College Basketball", img: "/images/cbb.png", color: "#b91c1c" },
          { name: "Shop", img: "/images/shop.png", color: "#474545" },
          { name: "Podcast", img: "/images/podcast.png", color: "#4f4f4f" },
        ].map((item) => (
          <div
            key={item.name}
            className="card"
            style={{ borderTop: `4px solid ${item.color}` }}
          >
            <img
              src={item.img}
              alt={item.name}
              className="card-icon"
            />

            <div
              className="card-title"
              style={{ color: item.color }}
            >
              {item.name}
            </div>
          </div>
        ))}
      </section>

      {/* FEATURED */}
<section className="featured">
  {[
    { name: "Trending", img: "/images/trending.png", color: "#ff8400" },
    { name: "Stathead", img: "/images/stathead.png", color: "#590182" },
    { name: "Immaculate Grid", img: "/images/grid.png", color: "#10b981" },
  ].map((item) => (
    <div
      key={item.name}
      className="card"
      style={{ borderTop: `4px solid ${item.color}` }}
    >
      <img
        src={item.img}
        alt={item.name}
        className="card-icon"
      />

      <div
        className="card-title"
        style={{ color: item.color }}
      >
        {item.name}
      </div>
    </div>
  ))}
</section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Sports Reference Redesign</p>
      </footer>

    </div>
  );
}

export default App;