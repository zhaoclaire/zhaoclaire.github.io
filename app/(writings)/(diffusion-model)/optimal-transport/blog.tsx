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
      <SectionTitle title="Transportation of Gaussian Measure" />
      <Paragraph>
        In some sense <Highlighter>diffusion models</Highlighter> transport an
        unknown data distribution into a familiar distribution, the Gaussian
        distribution. So let us discuss transportation with respect to the
        standard Gaussian measure <Math latex="\gamma" /> on{" "}
        <Math latex="\mathbb{R}^d" padding={false} />. First some backgrounds.
      </Paragraph>
      <Paragraph>
        Let <Math latex="\Omega" /> be a measurable space and let{" "}
        <Math latex="w(\omega,\omega')" /> be a function on the space{" "}
        <Math latex="\Omega \times \Omega" /> that measures the cost of
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
      <Paragraph>
        Let <Math latex="w(x,y)=\sum_i(x_i-y_i)^2" /> be the square of the usual
        distance on euclidean space. An interesting inequality due to M.
        Talagrand states that for any measure <Math latex="\mu" /> on{" "}
        <Math latex="\mathbb{R}^d" />
        that is absolutely continuous with <Math latex="\gamma" /> then we have
        the following upper bound on the transport cost
        <Math
          latex="T_w(\mu, \gamma)\leq 2\int \log\frac{d\mu}{d\gamma}d\mu"
          display={true}
        />
        where <Math latex="\frac{d\mu}{d\gamma}" /> is the radon-nikodym
        derivative and the right hand integral is the relative entropy, or
        KL-divergence of the measures.
      </Paragraph>
      <Paragraph>
        Let <Math latex="S(x)=x-1+e^{-x}" display={true} />
        <Math latex="w_\alpha(x,y)=\sum_i S(\alpha|x_i-y_i|)" display={true} />
        Likewise if <Math latex="\mu" /> and <Math latex="\nu" /> and both are
        measures on <Math latex="\mathbb{R}^d" /> and the former absolutely
        continuous with the latter, then
        <Math
          latex="T_{w_\alpha}(\mu, \gamma)\leq \frac{\alpha}{1-\alpha}\int \left(\frac{d\mu}{d\nu}\right) \log \left(\frac{d\mu}{d\nu}\right)\, d\nu"
          display={true}
        />
      </Paragraph>
      <SectionTitle title="Log Sobolev Inequality" />
      <Paragraph>
        We discuss the paper of Otto and Villani with respect to M. Talagrand&apos;s
        inequalities, outlining the connection with optimal transportation,
        Fisher information and PDE.
      </Paragraph>
    </>
  );
}
