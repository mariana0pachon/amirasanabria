import { Header } from "./components/Header";
import { About } from "./pages/About";
import { Research } from "./pages/Research";
import { Movies } from "./pages/Movies";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes path='/' element={<Research />}>
          <Route index element={<Research />} />
          <Route path='research' element={<Research />} />
          <Route path='movies' element={<Movies />} />
          <Route path='about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
