import { Work } from "../../components/Work";

const photos = [
  new URL(
    `../../assets/images/research/2_artifact_hunters/1.jpg`,
    import.meta.url
  ),
  new URL(
    `../../assets/images/research/2_artifact_hunters/2.png`,
    import.meta.url
  ),
  new URL(
    `../../assets/images/research/2_artifact_hunters/3.jpg`,
    import.meta.url
  ),
  new URL(
    `../../assets/images/research/2_artifact_hunters/4.jpg`,
    import.meta.url
  ),
  new URL(
    `../../assets/images/research/2_artifact_hunters/5.png`,
    import.meta.url
  ),
  new URL(
    `../../assets/images/research/2_artifact_hunters/6.png`,
    import.meta.url
  ),
  new URL(
    `../../assets/images/research/2_artifact_hunters/7.png`,
    import.meta.url
  ),
];

export function ArtifactHunters() {
  const description =
    "Artifact Hunters is about looking at the cities we go to with different eyes. With Sara Millán we have recorded artifacts that tell the unrecorded history of cities. This visual research project returns to artifacts to understand the ways of inhabiting spaces.";

  return <Work description={description} photos={photos} halfCover={true} />;
}
