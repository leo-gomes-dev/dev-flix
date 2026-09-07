import { HashRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Home } from "../pages/Home";
import { Filme } from "../pages/Filme";

export function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="filme" element={<Filme />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
