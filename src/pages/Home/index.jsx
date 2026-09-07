import { useEffect, useState } from "react";
import { api } from "../../service/api";
import "./home.css"; // Vamos criar este arquivo abaixo

export function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function loadApi() {
      try {
        const res = await api.get("movie/now_playing", {
          params: { language: "pt-BR" },
        });
        setFilmes(res.data.results);
      } catch (error) {
        console.error("Erro ao buscar filme", error);
      }
    }
    loadApi();
  }, []);

  return (
    <div className="container">
      <h1 className="titulo">Filmes em Cartaz</h1>

      <div className="grid-filmes">
        {filmes.map((filme) => (
          <div key={filme.id} className="card-filme">
            <img
              src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`}
              alt={filme.title}
              className="poster-filme"
            />
            <div className="info-filme">
              <span className="nome-filme">{filme.title}</span>
              <span className="nota-filme">
                ⭐ {filme.vote_average.toFixed(1)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
