import { useEffect, useState } from "react";
import { api } from "../../service/api";
import "./home.css";
import { NavLink } from "react-router-dom";

export function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadApi() {
      try {
        const res = await api.get("movie/now_playing", {
          params: { language: "pt-BR" },
        });
        setFilmes(res.data.results);
      } catch (error) {
        console.error("Erro ao buscar filme", error);
      } finally {
        setLoading(false);
      }
    }
    loadApi();
  }, []);

  return (
    <div className="container">
      <h1 className="titulo">Filmes em Cartaz</h1>

      <div className="grid-filmes">
        {loading
          ? Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="card-filme skeleton-card">
                <div className="skeleton skeleton-poster" />
                <div className="info-filme">
                  <div className="skeleton skeleton-text" />
                  <div className="skeleton skeleton-badge" />
                </div>
              </div>
            ))
          : filmes.map((filme) => (
              <NavLink
                to={`/filme/${filme.id}`}
                key={filme.id}
                className="card-filme"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`}
                  alt={filme.title}
                  className="poster-filme"
                  loading="lazy"
                />
                <div className="info-filme">
                  <span className="nome-filme">{filme.title}</span>
                  <span className="nota-filme">
                    Subtitulo: ⭐{" "}
                    {filme.vote_average ? filme.vote_average.toFixed(1) : "N/A"}
                  </span>
                </div>
              </NavLink>
            ))}
      </div>
    </div>
  );
}
