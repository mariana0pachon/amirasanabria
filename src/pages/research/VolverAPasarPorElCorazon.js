import { Work } from "../../components/Work";

const photos = [
  new URL(
    `../../assets/images/research/1_volver_a_pasar_por_el_corazon/0.png`,
    import.meta.url
  ),
  new URL(
    `../../assets/images/research/1_volver_a_pasar_por_el_corazon/1.png`,
    import.meta.url
  ),
  new URL(
    `../../assets/images/research/1_volver_a_pasar_por_el_corazon/2.png`,
    import.meta.url
  ),
  new URL(
    `../../assets/images/research/1_volver_a_pasar_por_el_corazon/3.png`,
    import.meta.url
  ),
  new URL(
    `../../assets/images/research/1_volver_a_pasar_por_el_corazon/4.png`,
    import.meta.url
  ),
  new URL(
    `../../assets/images/research/1_volver_a_pasar_por_el_corazon/5.png`,
    import.meta.url
  ),
  new URL(
    `../../assets/images/research/1_volver_a_pasar_por_el_corazon/6.png`,
    import.meta.url
  ),
  new URL(
    `../../assets/images/research/1_volver_a_pasar_por_el_corazon/7.png`,
    import.meta.url
  ),
  new URL(
    `../../assets/images/research/1_volver_a_pasar_por_el_corazon/8.png`,
    import.meta.url
  ),
  new URL(
    `../../assets/images/research/1_volver_a_pasar_por_el_corazon/9.png`,
    import.meta.url
  ),
];

export function VolverAPasarPorElCorazon() {
  const title = " recordar · remember";
  const description =
    "del latín Recordari · (re) volver · (cordis) corazón ·\nVolver a pasar por el corazón\n\nthe Spanish word comes from the latin Recordari\n(re) to go back · (cordis) heart\nTo go back through the heart ";
  const conclusion =
    "The melodrama builds around itself a space of socialization that, turned into a family ritual, is installed in the sensitive Latin American imaginary. The staging of an aesthetic and a melodramatic sensitivity pleases and educates generations that will inherit and reproduce the melodrama in their daily lives. Therefore, it becomes imminent the need for a responsible transmission of content and a prompt questioning about the universe staged. This project aims to test how the space-script relationship permeates the viewer’s feelings at the time of building futures.\n\nThis is part of the visual research I did to understand how the space we design and the objects we choose, can allow the viewer to remember - to go back through their heart - the imaginary space we call home. ";

  return (
    <Work
      title={title}
      description={description}
      photos={photos}
      conclusion={conclusion}
    />
  );
}
