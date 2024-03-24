import { WorkMenu } from "../components/WorkMenu.js";

const covers = {
  cueros: new URL(`../assets/images/research/0_cueros/0.png`, import.meta.url),
  volver_a_pasar_por_el_corazon: new URL(
    `../assets/images/research/1_volver_a_pasar_por_el_corazon/0.png`,
    import.meta.url
  ),
  artifact_hunters: new URL(
    `../assets/images/research/2_artifact_hunters/0.png`,
    import.meta.url
  ),
  los_iniciados: new URL(
    `../assets/images/research/3_los_iniciados/0.png`,
    import.meta.url
  ),
};

export function Research() {
  return <WorkMenu workType={"research"} covers={covers} />;
}
