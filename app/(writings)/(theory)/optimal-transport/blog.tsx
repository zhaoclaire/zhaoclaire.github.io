"use client";
import Math from "@/components/Math";
import Paragraph from "@/components/Paragraph";
import { ReferenceItem } from "@/components/Reference";
import SectionTitle from "@/components/SectionTitle";
import { List, ListIcon, ListItem, OrderedList, Text } from "@chakra-ui/react";
import InlineReference from "@/components/InlineReference";
import { references } from "./optimal-transport-references";
import Highlighter from "@/components/Highlighter";
import DisplayMath from "@/components/DisplayMath";
import MathEndsSentence from "@/components/MathEndsSentence";

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
        As a fun historical fact, more than 200 years ago Monge wanted to figure
        out how to move rubble to build a fortification so as to minimize the
        cost. In his original formulation, the cost from moving{" "}
        <Math latex="m" /> units of mass from <Math latex="x" /> to{" "}
        <Math latex="y" />
        in <Math latex="\mathbb{R}^3" /> is{" "}
        <Math latex="m|x-y|" padding={false} />. Our modern day formulation
        involves two probability measures <Math latex="\mu" />{" "}
        <Math latex="\nu" /> representing the rubble and fortification defined
        on probability spaces <Math latex="X" /> and <Math latex="Y" />
        find a measurable mapping <Math latex="T:X\rightarrow Y" /> (the so
        called <Highlighter>transport map</Highlighter>) which induces the
        pushforward <Math latex="T_\sharp \mu = \nu" />
        i.e. <Math display={true} latex="\nu(A)=\mu(T^{-1}(A))" />
        so as to minimize the transportation cost
        <Math
          latex="\int_X c(x, T(x))\,d\mu(x)=\min_{\substack{S:X\rightarrow Y \\S_\sharp\mu = \nu}} \left\{\int_X c(x, S(x))\,d\mu(x)\right\}"
          display={true}
        />
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
      <SectionTitle title="Monge-Ampère Equation" />
      <Paragraph>
        Whereas the model elliptic equation <Math latex="\Delta u = f" />{" "}
        prescribes the sum of the eigenvalues of the Hessian of{" "}
        <Math latex="u" /> the Monge-Ampère Equation prescribes the product of
        its eigenvalues:
        <Math
          latex="\det D^2u = f(x, u, \nabla u)\quad \text{in}\quad \Omega"
          display={true}
        />
        for open subset <Math latex="\Omega\subset\mathbb{R}^d" /> convex
        function
        <Math latex="u:\Omega\rightarrow \mathbb{R}" /> and precribed function
        <Math
          latex="f:\Omega\times\mathbb{R}\times\mathbb{R}^d\rightarrow \mathbb{R}^+"
          padding={false}
        />
        . The <Text as="b">Gaussian curvature equation</Text> with
        <Math
          latex="f=K(x)\left(1+|\nabla u|^2\right)^{(n+2)/2}"
          display={true}
        />{" "}
        serve the basic prototype of Monge-Ampère Equation which imposes the
        Guassian curvature <Math latex="K(x)" /> of the graph of{" "}
        <Math latex="u" /> at <Math latex="(x,\, u(x))" padding={false} />.
      </Paragraph>
      <Paragraph>
        A variation of the equation
        <Math
          latex="\det\left( D^2u-\mathcal{A}(x,\nabla u)\right) = f(x, u, \nabla u)"
          display={true}
        />
        turns out to be useful for optimal transportation in the study of the
        regularity of transport maps.
      </Paragraph>
      <Paragraph>
        Studying weak solution (so called Alexandrov solutions) of the
        Monge-Ampère equaiton led to the following formulation. First recall
        some concepts. Given an open connected convex set{" "}
        <Math latex="\Omega" /> the <Text as="b">subdifferential</Text>
        of a convex function is defined{" "}
        <Math
          latex="\partial u (x)= \{p\in\mathbb{R}^d: u(y)\geq u(x)+ p^\top(y-x) \quad \forall y\in\Omega\}"
          display={true}
        />
        The Monge-Ampère measure of <Math latex="u" /> is defined for every
        Boreal set <Math latex="E\subset \Omega" />
        <Math latex="\mu_u(E)=|\partial u(E)|" display={true} />
        where <Math latex="|\cdot |" /> denotes the Lebesgue measure and
        <Math
          latex="\partial u(E)=\bigcup_{x\in E}\partial u(x)"
          display={true}
        />
        It turns out <Math latex="\mu_u=\det D^2u(x)\, dx" /> in{" "}
        <Math latex="\Omega" padding={false} />.
      </Paragraph>
      <Paragraph>
        Given an open convex set <Math latex="\Omega" /> and a Boreal measure
        <Math latex="\mu" /> on <Math latex="\Omega" padding={false} />, a
        convex function
        <Math latex="u:\Omega\rightarrow \mathbb{R}" /> is called an{" "}
        <Highlighter>Alexandrov solution</Highlighter>
        to the Monge-Ampère Equation
        <Math display={true} latex="\det D^2u = \mu " /> if{" "}
        <Math latex="\mu=\mu_u" /> as Boreal measures.
      </Paragraph>
      <Paragraph>
        The notation above is such that if <Math latex="\mu = fdx" /> then we
        say <Math latex="u" /> solves{" "}
        <Math display={!true} latex="\det D^2u = f " padding={false} />.
      </Paragraph>
      <Paragraph>
        Let <Math latex="u:\Omega\rightarrow \mathbb{R}" />
        be a convex function defined on the bounded open and connected set{" "}
        <Math latex="\Omega" />. The{" "}
        <Highlighter>Alexandrov maximum principle</Highlighter> is that if{" "}
        <Math latex="u=0" /> on <Math latex="\partial\Omega" /> then
        <Math
          display={true}
          latex="|u(x)|^d \lesssim_{d} (\text{diam}\Omega)^{d-1}\,\cdot\text{dist}(x,\partial\Omega)\,\cdot|\partial u(\Omega)|\quad \forall x\in\Omega"
        />
      </Paragraph>
      <Paragraph>
        A theorem states that for a bounded open and connected{" "}
        <Math latex="\Omega" /> and nonnegative Boreal measure{" "}
        <Math latex="\mu" /> the following problem has a Anexandrov solution
        <Math
          latex="
            \begin{cases}
              \det D^2u=\mu &\text{in } \Omega \\
                u=0 &\text{on } \partial\Omega
            \end{cases}"
          display={true}
        />
      </Paragraph>
      <Paragraph>
        It turns out that if <Math latex="\mu" /> and <Math latex="\nu" />
        are compactly supported probability measures on{" "}
        <Math latex="\mathbb{R}^d" />
        and <Math latex="\mu" /> is absolutely continuous with the Lebesgue
        measure then
        <OrderedList pl="2em" pb="1em" pt="1em">
          <ListItem>
            There <Text as="b">exists a unique solution</Text>{" "}
            <Math latex="T" /> of the optimal transport problem with quadratic
            cost (which turns out to be equivalent to the cost{" "}
            <Math latex="-x^\top y" />){" "}
            <Math display={true} latex="c(x,y)=|x-y|^2/2" />
          </ListItem>
          <ListItem>
            There exists a convex function{" "}
            <Math latex="u:\mathbb{R}^d\rightarrow\mathbb{R}" />
            such that the optimal transport map <Math latex="T" /> is given by{" "}
            <Math latex="T=\nabla u(x)" /> for{" "}
            <Math latex="\mu-" padding={false} />
            a.e. <Math latex="x" padding={false} />.
          </ListItem>
          <ListItem>
            If <Math latex="\mu(dx)=f(x)dx" /> and{" "}
            <Math latex="\nu(dy)=g(y)dy" />
            then <Math latex="T" /> is differentiable{" "}
            <Math latex="\mu-" padding={false} />
            a.e. and
            <Math
              display={true}
              latex="|\det (\nabla T(x)) |=\frac{f(x)}{(g\circ T)(x)}"
            />
            for <Math latex="\mu-" padding={false} />
            a.e.
          </ListItem>
        </OrderedList>
      </Paragraph>
      <Paragraph>
        Any convex function admits Hessian in the distributional sense. It turns
        out that <Math latex="u" /> solves the Monge-Ampère Equation
        <Math
          display={true}
          latex="\det(D^2u(x))=\frac{f(x)}{(g\circ T)(x)}\quad fdx-\text{a.e.}"
        />
        with boundary condition <Math latex="\nabla u(X)=Y" padding={false} />.
        In this case we call
        <Math latex="u" /> a <Highlighter>Brenier solution</Highlighter> of the
        Monge-Ampère Equation. More about this and the{" "}
        <Highlighter>partial transport problem</Highlighter> can be found in{" "}
        <InlineReference
          reference={references[7]}
          readingList={readingList}
          readingListHandler={readingListHandler}
        ></InlineReference>{" "}
      </Paragraph>
      <SectionTitle title="Theory on Smooth Manifold" />
      <Paragraph>
        We now sketch out some interesting ideas not too rigorouly . On a
        d-dimensional Riemmanian manifold M with metric g, and reference measure
        <Math latex="m=e^{-V} \t{Vol}" />
        with a potential function <Math latex="V: M\rightarrow \mathbb{R}" />
        we can define a differential operator{" "}
        <MathEndsSentence latex="L=\Delta-\langle\nabla V,\, \cdot \,\rangle" /> We define
        <DisplayMath latex="\mathcal{E}(f,g)=-\int_M fLg\, dm" />
        which gives rise to a quadratic energy
        <DisplayMath latex="\mathcal{E}(f)=\int_M |\nabla f|^2\, dm" />
        Moreover L generates a semigroup <Math latex="\{P_t\}_{t\geq 0}" />
        which gives rise to the solution <DisplayMath latex="f_t=P_t f" />
        of the diffusion eqution
        <DisplayMath latex="\partial_t f_t = L f_t \quad f_0=f" />
      </Paragraph>
      <Paragraph>
          When <Math latex="M=\mathbb{R}^d"/> and <Math latex="V=0"/>, then the operator L 
          is the Laplacian, and the corresponding process is heat flow. For <Math latex="V\neq 0"/>
          then we have a drift-diffusion operator. In particular the potential <DisplayMath latex="V(x) = \frac{1}{2}|x|^2+\frac{1}{2}\t{ln}(2\pi)"/>
          gives rise to a Gaussian measure <Math latex="m" /> and the corresponding <Text as='b'>Ornstein-Uhlenbeck operator</Text>
          <DisplayMath latex="Lf=\Delta f -x^\top \nabla f" />
      </Paragraph>
    </>
  );
}
