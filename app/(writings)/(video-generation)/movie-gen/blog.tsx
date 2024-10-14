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
        When stiching these segments together, weighted blending is applied to
        adjacent segments i and i+1
        <DisplayMath latex="w^j_{\text{blend}}=\sum_j\left[w^jx^j_i+(1-w^j)x^j_{i+1}\right]" />
        The sum is taken over all N overlapping segments, and{" "}
        <MathEndsSentence latex="w^j=j/N" />
      </Paragraph>
      <Paragraph>
        The video generation model is trained through flow matching. This
        technique is about learning the velocity
        <DisplayMath latex="\mathbf{V}_t = \frac{d\b{X}_t}{dt}" />
        tha transports a Gaussian random variable{" "}
        <Math latex="\b{X}_0\sim \mathcal{N}(0, \op{I})" />
        into a data point <Math latex="\b{X}_1" /> in latent space. During train
        time a time parameter <Math latex="t\in[0,1]" /> is sampled from a
        logistic normal distribution, and an intermediate{" "}
        <Math latex="\b{X}_t" />
        is constructed via
        <DisplayMath latex="\b{X}_t = t\b{X}_1 + \left[1-(1-\sigma_{\t{min}})t\right]\b{X}_0" />
        The training loss is the expected square-error between the model and the
        ground truth velocity derived from the interpolation formula above. The
        time parameter t here controls the signal to noise ratio (SNR). The
        above interpolation allos zero terminal SNR and this turns out to be
        crucial.
      </Paragraph>
      <Paragraph>
        Inference consists of solving the inital value problem given a sample
        from the standard normal distribution with time derivative parametrized
        by the neural network.
      </Paragraph>
    </>
  );
}
