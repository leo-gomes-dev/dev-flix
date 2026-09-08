import { HashRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Home } from "../pages/Home";
import { Filme } from "../pages/Filme";
import { NotFound } from "../pages/NotFound";
import { Favoritos } from "../pages/Favoritos";

export function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="filme/:id" element={<Filme />} />
          <Route path="favoritos" element={<Favoritos />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
