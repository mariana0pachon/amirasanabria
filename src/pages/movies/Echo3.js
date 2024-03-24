import { Work } from "../../components/Work";

const photos = [
  new URL(`../../assets/images/movies/1_echo_3/0.jpg`, import.meta.url),
  new URL(`../../assets/images/movies/1_echo_3/1.png`, import.meta.url),
  new URL(`../../assets/images/movies/1_echo_3/2.png`, import.meta.url),
  new URL(`../../assets/images/movies/1_echo_3/3.jpg`, import.meta.url),
  new URL(`../../assets/images/movies/1_echo_3/4.jpg`, import.meta.url),
  new URL(`../../assets/images/movies/1_echo_3/5.jpg`, import.meta.url),
  new URL(`../../assets/images/movies/1_echo_3/6.jpg`, import.meta.url),
];

export function Echo3() {
  const title = "Echo 3";
  const subtitle = "ART PA\nDESIGNED BY IÑIGO NAVARRO\nSHOWRUNNER MARK BOAL";

  return <Work title={title} subtitle={subtitle} photos={photos} />;
}
