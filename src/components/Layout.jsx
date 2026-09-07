import { NavLink, Outlet, useLocation } from "react-router-dom";
import "./Layout.css";

export function Layout() {
  const location = useLocation();
  return (
    <div className="app-layout-container">
      <header className="header">
        <div className="logo-area">
          <span className="logo-badge">LIVE</span>
          <h1>Dev Flix</h1>
        </div>

        <nav className="nav">
          {location !== "/" && (
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Início
            </NavLink>
          )}
          {location !== "/filme" && (
            <NavLink
              to="/filme"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Filmes
            </NavLink>
          )}
        </nav>
      </header>

      <main className="content">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-developer-info">
            <p className="footer-brand">Leo Gomes Developer</p>
            <p className="footer-copy">© 2026 Todos os direitos reservados.</p>
          </div>

          <div className="footer-links">
            <a
              href="https://leogomesdev.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
