import { Header } from "./components/Header";
import { About } from "./pages/About";
import { Research } from "./pages/Research";
import { Cueros } from "./pages/research/Cueros";
import { VolverAPasarPorElCorazon } from "./pages/research/VolverAPasarPorElCorazon";
import { ArtifactHunters } from "./pages/research/ArtifactHunters";
import { LosIniciados as LosIniciadosResearch } from "./pages/research/LosIniciados";
import { Movies } from "./pages/Movies";
import { LosIniciados as LosIniciadosMovies } from "./pages/movies/LosIniciados";
import { Echo3 } from "./pages/movies/Echo3";
import { Jenny } from "./pages/movies/Jenny";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function App() {
  return (
    <>
      <Header />
      <div className='page-content'>
        <BrowserRouter>
          <Routes path='/' element={<Research />}>
            <Route index element={<Research />} />
            <Route path='research' element={<Research />} />
            <Route path='research/cueros' element={<Cueros />} />

            <Route
              path='research/volver_a_pasar_por_el_corazon'
              element={<VolverAPasarPorElCorazon />}
            />
            <Route
              path='research/artifact_hunters'
              element={<ArtifactHunters />}
            />
            <Route
              path='research/los_iniciados'
              element={<LosIniciadosResearch />}
            />
            <Route path='movies' element={<Movies />} />
            <Route
              path='movies/los_iniciados'
              element={<LosIniciadosMovies />}
            />
            <Route path='movies/echo_3' element={<Echo3 />} />
            <Route path='movies/jenny' element={<Jenny />} />
            <Route path='about' element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
