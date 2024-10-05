import Paragraph from "@/components/Paragraph";
import SectionTitle from "@/components/SectionTitle";
import { ReferenceItem } from "@/components/Reference";

export default function MovieGen({
  readingList,
  readingListHandler,
}: {
  readingList: ReferenceItem[];
  readingListHandler: any;
}) {
  return (
    <>
      <SectionTitle title="Overview" />
      <Paragraph>
        The pretrained Movie Gen text-to-video model possess various visual
        reasoning capability on object motion, subject-object interaction,
        geometry, camera motion, physics. The audio model generates sound
        effects synchronized to video, and conditioned on a text prompt. The
        audio model learns the association between visual scenes and their
        emtional connotations. In post training, the video model learns to edit
        video following text instruction. For efficiency, generation happens in
        a latent space. A temproal autoencoder performs the mapping between high
        resolution space and compressed latent space.
      </Paragraph>
    </>
  );
}
