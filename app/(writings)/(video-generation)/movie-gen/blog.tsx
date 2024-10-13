import Paragraph from "@/components/Paragraph";
import SectionTitle from "@/components/SectionTitle";
import { ReferenceItem } from "@/components/Reference";

import Math from "@/components/Math";
import DisplayMath from "@/components/DisplayMath";
import MathEndsSentence from "@/components/MathEndsSentence";

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
      <SectionTitle title="Temporal Autoencoder" />
      <Paragraph>
        The role of the temporal autoencoder is to map the video into a
        compressed latent space. When performing this map, it was discovered
        emperically that more channels in the latent space correspond more
        performant reconstruction and generation. Training objective to penalize
        high norm latent tokens throught the outlier penality loss
        <DisplayMath latex="\mathcal{L}(\mathbf{X}, r)=\frac{1}{HW}\sum_{1\leq i\leq H}\sum_{1\leq j\leq W}\max\left(0, ||\mathbf{X}_{i,j}-\text{Mean}(\mathbf{X})||-r||\text{Std}(\mathbf{X})||\right)" />
        Longer videos are segmented in pieces in time, with overlapping parts. 
        When stiching these segments together, weighted blending is applied to adjacent segments i and i+1 
        <DisplayMath latex="w^j_{\text{blend}}=\sum_j\left[w^jx^j_i+(1-w^j)x^j_{i+1}\right]" /> 
        The sum is taken over all N overlapping segments, and <MathEndsSentence latex="w^j=j/N" />
      </Paragraph>
    </>
  );
}
