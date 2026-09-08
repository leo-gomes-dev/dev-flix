import { Link } from "react-router-dom";
import "./NotFound.css";

export function NotFound() {
  return (
    <div className="not-found-container">
      <h1 className="not-found-code">404</h1>
      <h2 className="not-found-title">
        Pipoca estourada, mas página não encontrada!
      </h2>
      <p className="not-found-text">
        O filme ou a página que você está procurando não existe ou mudou de
        lugar.
      </p>
      <Link to="/" className="not-found-btn">
        Voltar para o Início
      </Link>
    </div>
  );
}
