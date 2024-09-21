import Blog from "@/components/Blog";
import BlogTitle from "@/components/BlogTitle";
import Math from "@/components/Math";
import Paragraph from "@/components/Paragraph";
import Reference from "@/components/Reference";
import SectionTitle from "@/components/SectionTitle";

export default function SEDD() {
  const references = [
    "Discrete Diffusion Modeling by Estimating the Ratios of the Data Distribution",
    "Score-based Continuous-time Discrete Diffusion Models",
    "Estimation of non-normalized statistical models by score matching",
    "Concrete Score Matching: Generalized Score Matching for Discrete Data",
  ];
  return (
    <Blog>
      <BlogTitle />
      <SectionTitle title="Overview" />
      <Paragraph>
        This work proposes a loss called score entropy (related to Bregman
        divergence in a technical way) which is analogous to score matching,
        such a loss enables diffusion models to be applied to discrete
        structures. The technique is studied with a diffusion language model
        that outperforms an autoregressive model like GPT-2 on zero-shot
        perplexity tasks.
      </Paragraph>
      <SectionTitle title="Theory" />
      <Paragraph>Work in progress.</Paragraph>
      <Reference referenceList={references} />
    </Blog>
  );
}
