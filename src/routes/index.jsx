import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Home } from "../pages/Home";
import { Filme } from "../pages/Filme";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="filme" element={<Filme />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
