import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { api } from "./../../service/api";
import "./filme.css";

export function Filme() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [filme, setFilme] = useState({});

  const [favoritado, setFavoritado] = useState(false);

  useEffect(() => {
    async function loadApi() {
      try {
        const resFilme = await api.get(`movie/${id}`, {
          params: { language: "pt-BR" },
        });
        setFilme(resFilme.data);
      } catch (error) {
        console.log("Erro ao buscar dados do filme", error);
        navigate("/", { replace: true });
      }
    }

    loadApi();
  }, [id, navigate]);

  if (!filme || !filme.title) {
    return (
      <div className="loading">
        <h1>Carregando filme...</h1>
      </div>
    );
  }

  const notaFormatada = filme.vote_average
    ? filme.vote_average.toFixed(1)
    : "N/A";

  function salvarFilme() {
    setFavoritado(!favoritado);
    const filmeStorage = localStorage.getItem("@primeflix");
    const minhaLista = JSON.parse(filmeStorage) || [];

    let hasFilme = minhaLista.some(
      (filmeStorage) => filmeStorage.id === filme.id,
    );

    if (hasFilme) return;

    minhaLista.push(filme);
    localStorage.setItem("@primeflix", JSON.stringify(minhaLista));
  }

  return (
    <div className="movie-container">
      <div className="movie-content">
        <div className="movie-poster-area">
          <img
            src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`}
            alt={filme.title}
            className="movie-poster"
          />
        </div>

        <div className="movie-info">
          <h1 className="movie-title">{filme.title}</h1>

          {filme.tagline && (
            <em className="movie-tagline">"{filme.tagline}"</em>
          )}

          <div className="movie-meta">
            <span className="movie-badge badge-rating">⭐ {notaFormatada}</span>
            <span className="movie-badge">{filme.runtime} min</span>
            <span className="movie-badge">
              {new Date(filme.release_date).toLocaleDateString("pt-BR")}
            </span>
          </div>

          <div className="movie-overview">
            <h2>Sinopse</h2>
            <p>{filme.overview || "Sinopse não disponível para este filme."}</p>
          </div>

          <div className="movie-actions">
            <a
              href={`https://www.youtube.com/results?search_query=${filme.title}`}
              target="_blank"
              rel="noreferrer"
              className="btn-movie btn-trailer"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              Ver Trailer
            </a>

            <button
              onClick={salvarFilme}
              className={`btn-movie btn-save ${favoritado ? "active" : ""}`}
            >
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              {favoritado ? "Favoritado!" : "Favoritar"}
            </button>

            <Link to="/" className="btn-movie btn-back">
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Voltar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
