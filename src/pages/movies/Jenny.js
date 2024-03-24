import { Work } from "../../components/Work";

const photos = [
  new URL(`../../assets/images/movies/2_jenny/0.png`, import.meta.url),
];

export function Jenny() {
  const title = "Jenny";
  const subtitle = "Buyer";

  return <Work title={title} subtitle={subtitle} photos={photos} />;
}
