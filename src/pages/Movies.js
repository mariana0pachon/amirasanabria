import { WorkMenu } from "../components/WorkMenu.js";

const covers = {
  los_iniciados: new URL(
    `../assets/images/movies/0_los_iniciados/0.png`,
    import.meta.url
  ),
  echo_3: new URL(`../assets/images/movies/1_echo_3/0.jpg`, import.meta.url),
  jenny: new URL(`../assets/images/movies/2_jenny/0.png`, import.meta.url),
};

export function Movies() {
  return <WorkMenu workType={"movies"} covers={covers} />;
}
