import "./App.css";
import logo from "./assets/logo.png";

function App() {
  return (
    <div className="page">
      
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">
        <img src={logo} alt="SportsRef Redesign Logo" />
        </div>

        <nav className="nav-links">

  <div className="dropdown">
    <a href="#">Sports ▾</a>

    <div className="dropdown-content">
      <a href="#">Basketball</a>
      <a href="#">Football</a>
      <a href="#">Baseball</a>
      <a href="#">Hockey</a>
      <a href="#">Soccer</a>
      <a href="#">Golf</a>
      <a href="#">Tennis</a>
      <a href="#">Olympics</a>
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
        <h1>Find Stats. Fast.</h1>
        <p>Search players, teams, and seasons across all major leagues.</p>

        <input
          className="search"
          placeholder="Search player, team, or league..."
        />
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
    ].map((item) => (
    <div
      key={item.name}
      className="card"
      style={{ borderColor: item.color }}
    >
      <img src={item.img} alt={item.name} className="card-icon" />
      <div className="card-title" style={{ color: item.color }}>
        {item.name}
      </div>
    </div>
      ))}
    </section>

      {/* Footer Cards */}
      <section className="featured">

        <div className="footer-grid">
          <div className="card">Trending</div>
          <div className="card">Stathead</div>
          <div className="card">Immaculate Grid</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Sports Reference Redesign</p>
      </footer>

    </div>
  );
}

export default App;