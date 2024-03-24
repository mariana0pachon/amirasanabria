import { Work } from "../../components/Work";

const photos = [
  new URL(`../../assets/images/movies/0_los_iniciados/0.png`, import.meta.url),
  new URL(`../../assets/images/movies/0_los_iniciados/1.jpg`, import.meta.url),
  new URL(`../../assets/images/movies/0_los_iniciados/2.jpg`, import.meta.url),
  new URL(`../../assets/images/movies/0_los_iniciados/3.jpg`, import.meta.url),
  new URL(`../../assets/images/movies/0_los_iniciados/4.jpg`, import.meta.url),
  new URL(`../../assets/images/movies/0_los_iniciados/5.jpg`, import.meta.url),
  new URL(`../../assets/images/movies/0_los_iniciados/6.png`, import.meta.url),
];

export function LosIniciados() {
  const title = "Los Iniciados";
  const subtitle =
    "ART DEPARTMENT ASSISTANT\nDESIGNED BY SARA MILLAN\nDIRECTED BY JUAN FELIPE OROZCO";

  return <Work title={title} subtitle={subtitle} photos={photos} />;
}
