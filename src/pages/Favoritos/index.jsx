import { useState } from "react";
import { Link } from "react-router-dom";
import "./favoritos.css";

export function Favoritos() {
  const [filmes, setFilmes] = useState(() => {
    const minhaLista = localStorage.getItem("@primeflix");
    return JSON.parse(minhaLista) || [];
  });

  const [confirmarExclusaoId, setConfirmarExclusaoId] = useState(null);

  function excluirFilme(id) {
    const filtroFilmes = filmes.filter((filme) => filme.id !== id);
    setFilmes(filtroFilmes);
    localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes));
    setConfirmarExclusaoId(null);
  }

  return (
    <div className="favoritos-container">
      <h1 className="favoritos-titulo">Meus Favoritos</h1>

      {filmes.length === 0 ? (
        <div className="favoritos-vazio">
          <p>Você não possui nenhum filme salvo na sua lista ainda...</p>
          <Link to="/" className="btn-buscar-filmes">
            Ver filmes em cartaz
          </Link>
        </div>
      ) : (
        <ul className="favoritos-lista">
          {filmes.map((filme) => (
            <li key={filme.id} className="favoritos-item">
              <div className="favoritos-filme-info">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`}
                  alt={filme.title}
                  className="favoritos-poster"
                />
                <span className="favoritos-nome">{filme.title}</span>
              </div>

              <div className="favoritos-acoes">
                {confirmarExclusaoId === filme.id ? (
                  <div className="confirmacao-container">
                    <span className="confirmacao-texto">Tem certeza?</span>
                    <button
                      className="btn-confirmar-sim"
                      onClick={() => excluirFilme(filme.id)}
                    >
                      Sim
                    </button>
                    <button
                      className="btn-confirmar-nao"
                      onClick={() => setConfirmarExclusaoId(null)}
                    >
                      Não
                    </button>
                  </div>
                ) : (
                  // UI Padrão
                  <>
                    <Link to={`/filme/${filme.id}`} className="btn-detalhes">
                      Ver Detalhes
                    </Link>
                    <button
                      className="btn-excluir"
                      onClick={() => setConfirmarExclusaoId(filme.id)}
                    >
                      Excluir
                    </button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
