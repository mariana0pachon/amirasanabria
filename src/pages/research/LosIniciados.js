import { Work } from "../../components/Work";

const photos = [
  new URL(
    `../../assets/images/research/3_los_iniciados/0.png`,
    import.meta.url
  ),
  new URL(
    `../../assets/images/research/3_los_iniciados/1.png`,
    import.meta.url
  ),
  new URL(
    `../../assets/images/research/3_los_iniciados/2.png`,
    import.meta.url
  ),
  new URL(
    `../../assets/images/research/3_los_iniciados/3.png`,
    import.meta.url
  ),
  new URL(
    `../../assets/images/research/3_los_iniciados/4.png`,
    import.meta.url
  ),
  new URL(
    `../../assets/images/research/3_los_iniciados/5.png`,
    import.meta.url
  ),
  new URL(
    `../../assets/images/research/3_los_iniciados/6.png`,
    import.meta.url
  ),
  new URL(
    `../../assets/images/research/3_los_iniciados/7.png`,
    import.meta.url
  ),
];

export function LosIniciados() {
  const title = "Los Iniciados";
  const subtitle = "Visual research";

  return <Work title={title} subtitle={subtitle} photos={photos} />;
}
