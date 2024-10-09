"use client";
import Math from "@/components/Math";
import Paragraph from "@/components/Paragraph";
import { ReferenceItem } from "@/components/Reference";
import SectionTitle from "@/components/SectionTitle";
import { Text } from "@chakra-ui/react";
import InlineReference from "@/components/InlineReference";
import { references } from "./optimal-transport-references";
import Highlighter from "@/components/Highlighter";

export default function OptimalTransport({
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
        Each Feller process with continuous paths has its associated
        Fokker-Planck equation
        <Math
          latex="\frac{d}{dt}P_t(x, \, \cdot\, )= A^* P_t(x, \, \cdot\, )"
          display={true}
        />
        for a second order differential operator <Math latex="A" /> that
        generates the process. In particular for standard Brownian motion on
        euclidean spaces the generator bares an intimate relationship with the
        Laplacian operator
        <Math latex="A=\frac{1}{2}\Delta" display={true} />
        This was discussed in detail in my previous blog. Here we consider the
        so called <Text as="b">Langevin process</Text>, which is the solution of
        the stochastic differential equation
        <Math latex="dX_t=\nabla f(X_t)\, dt + dB_t" display={true} />
        where the drift is a gradient. It turns out that for this process the
        solution of the associated Fokker-Planck equation is the minimizer of an
        action. This variational formulation originated in
        <InlineReference
          reference={references[5]}
          readingList={readingList}
          readingListHandler={readingListHandler}
        ></InlineReference>
      </Paragraph>
      <Paragraph>
        The optimization can be done with gradient descent in an appropriate
        metric space called Wasserstein space, whose elements are probability
        measures, and the metric is given by a transportation cost. Rather than
        discussing the variational formulation of the Fokker-Planck equation
        associated with the Langevin equation above, we will first dive into the
        general theory of <Highlighter>optimial transportation</Highlighter>
        which will give us a better picture of the underlying concept of
        Wasserstein space and related theorems.
      </Paragraph>
      <SectionTitle title="Elements of Optimal Transportation" />
      <Paragraph>
        In some sense <Highlighter>diffusion models</Highlighter> transport an
        unknown data distribution into a familiar distribution, the Gaussian
        distribution. So let us discuss transportation with respect to the
        standard Gaussian measure <Math latex="\gamma" /> on{" "}
        <Math latex="\mathbb{R}^d" />
        <Math
          display={true}
          latex="\gamma(A)=(2\pi)^{-\frac{n}{2}}\int_A e^{-|x|^2} \,dx"
        />{" "}
      </Paragraph>
      <Paragraph>
        First some backgrounds. Let <Math latex="\Omega" /> be a measurable
        space and let <Math latex="w(\omega,\omega')" /> be a function on the
        space <Math latex="\Omega \times \Omega" /> that measures the cost of
        transporting one unit of mass from <Math latex="\omega" /> to{" "}
        <Math latex="\omega'" padding={false} />. We define the{" "}
        <Highlighter>transportation cost</Highlighter>
        <Math latex="T_w(\mu, \nu)" /> of a probability measure{" "}
        <Math latex="\mu" /> on <Math latex="\Omega" /> to another probability
        measure <Math latex="\nu" /> on <Math latex="\Omega" display={false} />
        as the infimum of the integral
        <Math
          latex="\int_{\Omega \times \Omega} w(\omega,\omega')\, d\pi(\omega,\omega')"
          display={true}
        />
        over all probability measures <Math latex="\pi" /> on{" "}
        <Math latex="\Omega \times \Omega" /> such that
        <Math latex="\mu" /> is the first marginal and <Math latex="\nu" /> the
        second marginal of <Math latex="\pi" padding={false} />.
      </Paragraph>
      <Paragraph>
        Something interesting occurs when{" "}
        <Math latex="w(\omega,\omega')=d(\omega,\omega')" /> for a metric{" "}
        <Math latex="d" />
        on
        <Math latex="\Omega" />
        <Math
          latex="T_d(\mu, \nu) = \sup \left|\int f\, d\mu - \int f\, d\nu\right|"
          display={true}
        />
        where the supremum is taken over all <Math latex="f" /> on{" "}
        <Math latex="\Omega" /> such that
        <Math
          latex="|f(\omega)-f(\omega')|\leq d(\omega, \omega')"
          display={true}
        />{" "}
        for all <Math latex="\omega,\, \omega'\in\Omega" />.
      </Paragraph>
      <SectionTitle title="Gaussian Transport Inequalities of Talagrand" />
      <Paragraph>
        Let <Math latex="w(x,y)=\sum_i(x_i-y_i)^2" /> be the square of the usual
        distance on euclidean space. An interesting inequality due to M.
        Talagrand{" "}
        <InlineReference
          reference={references[6]}
          readingList={readingList}
          readingListHandler={readingListHandler}
        ></InlineReference>{" "}
        states that for any measure <Math latex="\mu" /> on{" "}
        <Math latex="\mathbb{R}^d" />
        that is absolutely continuous with <Math latex="\gamma" /> then we have
        the following upper bound on the transport cost
        <Math
          latex="T_w(\mu, \gamma)\leq 2\int_{\mathbb{R}^d} \log\frac{d\mu}{d\gamma}d\mu"
          display={true}
        />
        where <Math latex="d\mu / d\gamma " /> is the Radon-Nikodym derivative
        (aka the density of <Math latex="\mu" /> with respect to{" "}
        <Math latex="\gamma" padding={false} />) and the right hand integral is
        the relative entropy, or KL-divergence of the measures. In Wasserstein
        distance this says
        <Math
          latex="W(\mu, \gamma)\leq \sqrt{2\int_{\mathbb{R}^d}\log\frac{d\mu}{d\gamma}\,d\mu}"
          display={true}
        />
      </Paragraph>
      <Paragraph>
        Let <Math latex="S(x)=x-1+e^{-x}" display={true} />
        <Math latex="w_\alpha(x,y)=\sum_i S(\alpha|x_i-y_i|)" display={true} />
        Likewise if <Math latex="\mu" /> and <Math latex="\nu" /> and both are
        measures on <Math latex="\mathbb{R}^d" /> and the former absolutely
        continuous with the latter, then
        <Math
          latex="T_{w_\alpha}(\mu, \nu)\leq \frac{\alpha}{1-\alpha}\int_{\mathbb{R}^d} \log \frac{d\mu}{d\nu}\, d\mu"
          display={true}
        />
      </Paragraph>
      <SectionTitle title="Quadratic Cost Transportation" />
      <Paragraph>
        If the cost function <Math latex="w = d^2" /> is the square of some
        metric <Math latex="d" /> on <Math latex="\Omega" /> then the square
        root of the transportation cost
        <Math display={true} latex="W(\mu, \nu)=\sqrt{T_w(\mu, \nu)}" /> is a
        metric between pairs of probability measures <Math latex="\Omega" /> and
        it called the <Highlighter>Wasserstein distance</Highlighter>.
        <Math latex="W" /> metrizes the <Text as="b">weak-star topology</Text>{" "}
        on the space <Math latex="\mathcal{P}_2 (\Omega)" />
        of probability measures <Math latex="\mu" /> on <Math latex="\Omega" />{" "}
        with finite second moment, that is for any <Math latex="a\in\Omega" />
        <Math
          latex="\int_\Omega d(a, x)^2 \, d\mu(x) < \infty"
          display={true}
        />
        In other words, convergence <Math latex="W(\mu_n,\mu)\rightarrow 0" />{" "}
        of measures under the Wasserstein-2 distance above is equivalent to weak
        convergence of measure
        <Math latex="\mu_n\rightarrow \mu" /> in the sense that{" "}
        <Math
          display={true}
          latex="\int_\Omega f \,d\mu_n \rightarrow \int_\Omega f \, d\mu"
        />{" "}
        for every bounded continuous function <Math latex="f" /> on{" "}
        <Math latex="\Omega" padding={false} />.
      </Paragraph>
      <SectionTitle title="Information Theory Concepts" />
      <Paragraph>
        The relative entropy between measures
        <Math
          display={true}
          latex="H(\mu|\nu)=\int_\Omega \log \frac{d\mu}{d\nu}d\mu=\int_\Omega \frac{d\mu}{d\nu}\log \frac{d\mu}{d\nu} \,d\nu"
        />
        The relative Fisher information
        <Math
          display={true}
          latex="I(\mu|\nu)=\int_\Omega \left|\nabla\log \frac{d\mu}{d\nu}\right|^2d\mu=4\int_\Omega \left|\nabla\sqrt{\frac{d\mu}{d\nu}}\right|^2 \,d\nu"
        />
        The probability measure <Math latex="\nu" /> satisfies a logarithmic
        Sobolev inequality with constant <Math latex="\rho >0" />, denoted LSI(
        <Math latex="\rho" padding={false} />) if for every probability measure{" "}
        <Math latex="\mu" /> on <Math latex="\Omega" />
        absolutely continuous with <Math latex="\nu" />
        <Math display={true} latex="H(\mu|\nu)\leq\frac{1}{2\rho}I(\mu|\nu)" />
        The probability measure <Math latex="\nu" /> satisfies a Talagrand
        inequality with constant <Math latex="\rho >0" />, denoted T(
        <Math latex="\rho" padding={false} />) if for every probability measure{" "}
        <Math latex="\mu" /> on <Math latex="\Omega" />
        absolutely continuous with <Math latex="\nu" />
        with finite second moments,
        <Math
          display={true}
          latex="W(\mu,\nu)\leq\sqrt{\frac{2H(\mu|\nu)}{\rho}}"
        />
        The probability measure <Math latex="\nu" /> satisfies LSI + T(
        <Math latex="\rho" padding={false} />) if for every probability measure{" "}
        <Math latex="\mu" /> on <Math latex="\Omega" />
        absolutely continuous with <Math latex="\nu" />
        <Math
          display={true}
          latex="W(\mu,\nu)\leq\frac{1}{\rho}\sqrt{I(\mu|\nu)}"
        />
      </Paragraph>
      <SectionTitle title="Theorem of Otto and Villani " />
      <Paragraph>
        Let <Math latex="M" /> be a n-dimensional smooth and complete Riemmanian
        manifold, with <Math latex="\text{Ric}" /> denoting the Ricci curvature
        tensor. Let <Math latex="d\nu=e^{\Psi}\, dx" />
        be a probability measure with finite second order moment, where{" "}
        <Math latex="\Psi\in \mathscr{C}^2(M)" />
        and <Math display={true} latex="D^2\Psi+ \text{Ric}\geq -CI_n" /> for a{" "}
        <Math latex="C\in\mathbb{R}" padding={false} />. If <Math latex="\nu" />
        satisfies denoted LSI(
        <Math latex="\rho" padding={false} />) for some{" "}
        <Math latex="\rho > 0" padding={false} />
        ), then it also satisfies T(
        <Math latex="\rho" padding={false} />) and LSI + T(
        <Math latex="\rho" padding={false} />){" "}
        <InlineReference
          reference={references[0]}
          readingList={readingList}
          readingListHandler={readingListHandler}
        ></InlineReference>{" "}
      </Paragraph>
      <SectionTitle title="HWI Inequality" />
      <Paragraph>
        Let <Math latex="d\nu=e^{\Psi}\, dx" />
        be a probability measure on <Math latex="\mathbb{R}^d" /> with finite
        second order moment, where{" "}
        <Math latex="\Psi\in \mathscr{C}^2(\mathbb{R}^d)" />
        and <Math display={true} latex="D^2\Psi\geq KI_d" /> for a{" "}
        <Math latex="K\in\mathbb{R}" padding={false} />. Then for all
        probability measures on <Math latex="\mathbb{R}^d" /> absolutely
        continuous with
        <Math latex="\nu" />
        <Math
          display={true}
          latex="H(\mu|\nu)\leq W(\mu,\nu)\sqrt{I(\mu|\nu)}-\frac{K}{2}W(\mu,\nu)"
        />
        In particular if <Math latex="\Psi" /> is convex, then
        <Math
          display={true}
          latex="H(\mu|\nu)\leq W(\mu,\nu)\sqrt{I(\mu|\nu)}"
        />
        See the discussion in{" "}
        <InlineReference
          reference={references[0]}
          readingList={readingList}
          readingListHandler={readingListHandler}
        ></InlineReference>
      </Paragraph>
    </>
  );
}
