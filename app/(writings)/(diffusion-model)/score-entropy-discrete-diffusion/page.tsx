import Blog from "@/components/Blog";
import BlogTitle from "@/components/BlogTitle";
import Math from "@/components/Math";
import Paragraph from "@/components/Paragraph";
import Reference from "@/components/Reference";
import SectionTitle from "@/components/SectionTitle";
import { Text } from "@chakra-ui/react";
import { references } from "./score-entropy-discrete-diffusion-references";
export default function SEDD() {

  return (
    <Blog>
      <SectionTitle title="Overview" />
      <Paragraph>
        This work is what one may call diffusion language model, an alternative
        to the usual autoregressiv LLMs, based on diffusion on discrete
        structures like languge. This approach is compared to GPT-2 whereby the
        diffusion outperforms autoregressive generation on zero-shot perplexity.
        {/* This work proposes an alternative to the autoregressive generation of
        language used by current language models. It proposes a loss called
        score entropy (related to Bregman divergence in a technical way) which
        is analogous to score matching, such a loss enables diffusion models to
        be applied to discrete structures. The technique is studied with a
        diffusion language model that outperforms an autoregressive model like
        GPT-2 on zero-shot perplexity tasks. */}
      </Paragraph>
      <SectionTitle title="Discrete Diffusion" />
      <Paragraph>
        The modelling in the paper reminds me of continuous time Markov chain.
        Specifically, as is stated in the paper, to a finite set{" "}
        <Math latex="\mathcal{X}" /> of <Math latex="N" /> elements is
        associated a probability vector <Math latex="p_t\in\mathbb{R}^N" />{" "}
        which is evovled in time <Math latex="t" />
        by the forward equation
        <Math display={true} latex="\frac{dp_t}{dt}=Q_tp_t" />
        for a diffusion matrix <Math latex="Q_t" />, whereby at each time{" "}
        <Math latex="t" padding={false} />, the off-diagonal entries are
        non-negative and the columns sum to 0. As an ansatz the diffusion matrix
        takes the form <Math latex="Q_t=\sigma(t)Q" /> for some scalar function{" "}
        <Math padding={false} latex="\sigma(t)" /> such that{" "}
        <Math latex="p_t" /> attains a stationary distribution in the limit. The authors 
        also mentions the time reversal process  <Math latex="q_t=p_{T-t}"/> at time being described by  
        <Math display={true} latex="\frac{dq_t}{dt}=R_{t}q_t" />
        where the matrix <Math display={false} latex="R_{t}" /> has off-diagonal components in row <Math latex="x"/> and column 
        <Math latex="y"/>
        <Math display={true} latex="R_{t}(x,y)=\frac{p_t(x)}{p_t(y)}Q_t(y,x)"/>
        and the diagonal entries are defined so the columns sum to zero
        <Math display={true} latex="R_{t}(x,x)=-\sum_{y, y\neq x} R_{t}(x,y)"/>

      </Paragraph>

      <Paragraph>
        By analogy to the score function <Math latex="\nabla_x \log p_t(x)"/> in the continuous diffusion process, the ratio 
        <Math latex="\frac{p_t(x)}{p_t(y)}" /> occuring in the matrix <Math latex="R_t" /> above are called <Text as='b'>concrete score</Text>.
        The neural network learns the concrete score. In the the first author&apos;s blog, another motivation for learning the concrete score is given:
        a nerual network <Math latex="f_\theta" /> can parametrize the probability distribution as in an energy based model <Math latex="p_\theta(x)=e^{f_\theta(x)}/\mathcal{Z}" />.
        The partition function <Math latex="\mathcal{Z}" /> is intractable, so a better idea is to work with the ratios, which is the concrete score
        <Math latex="\frac{p_t(x)}{p_t(y)}=\frac{e^{f_\theta(x)}/\mathcal{Z}}{e^{f_\theta(y)}/\mathcal{Z}}" display={true}/>
      </Paragraph>

      <Paragraph>
        After the author considers why previous approaches lead to underperforming models, they propose the <Text as='b'>score entropy</Text>
        <Math display={true} latex="\mathcal{L}_{\text{SE}}=\mathbb{E}_{x\sim p}\left[\, \sum_{y, y\neq x} w_{xy}\left(s_\theta(x)_y-\frac{p(y)}{p(x)}\log s_\theta(x)_y + K\left(\frac{p(y)}{p(x)}\right)\right)\right]"/>
        for a function <Math latex="K(x)=x(\log x - 1)" />. This loss is inspired by the Bregman divergence <Math latex='D_F\left(s_\theta(x)_y, \frac{p(x)}{p(y)}\right)' /> where <Math latex="F(x)=-\log(x)" />.
        Thus the score entropy is <Text as ='u'>non-negative</Text>, <Text as ='u'>symmetric</Text>, and <Text as ='u'>convex</Text>.
      </Paragraph>
      <SectionTitle title="Denoising Score Entropy" />
      <SectionTitle title="Likelihood Bound" />
      <SectionTitle title="Simulating Reverse Diffusion" />
      <SectionTitle title="Implementation" />
      <Reference referenceList={references} />
    </Blog>
  );
}
