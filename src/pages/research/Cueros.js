import { Work } from "../../components/Work";

const photos = [
  new URL(`../../assets/images/research/0_cueros/1.jpg`, import.meta.url),
  new URL(`../../assets/images/research/0_cueros/1.jpg`, import.meta.url),
  new URL(`../../assets/images/research/0_cueros/2.jpg`, import.meta.url),
  new URL(`../../assets/images/research/0_cueros/3.png`, import.meta.url),
  new URL(`../../assets/images/research/0_cueros/4.png`, import.meta.url),
  new URL(`../../assets/images/research/0_cueros/5.png`, import.meta.url),
];

export function Cueros() {
  const title = "Cuero\n2021 - 2022";
  const subtitle = "research work";
  const description =
    'Hide: "The skin of an animal whether raw or prepared for use —used especially of large heavy skins. The life or physical well-being of a person." (Merriam-Webster)\n\nIn Colombia, Costa Rica, and Puerto Rico, un "cuero" (hide) is an old and leathery-skinned woman. A hardened and mature woman who has thick skin, a skin made out of hide and callus. A woman hard to chew up, a woman made from strong leather.\n\nThis one is for the women raised with thick skin , to the women who carry their hide with pride, to the women who save my skin.';

  return (
    <Work
      title={title}
      subtitle={subtitle}
      description={description}
      photos={photos}
    />
  );
}
