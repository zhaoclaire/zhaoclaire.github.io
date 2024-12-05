"use client";
import Math from "@/components/Math";
import Paragraph from "@/components/Paragraph";
import { ReferenceItem } from "@/components/Reference";
import SectionTitle from "@/components/SectionTitle";
import { List, ListIcon, ListItem, OrderedList, Text } from "@chakra-ui/react";
import InlineReference from "@/components/InlineReference";
import { references } from "./primal-dual-langevin-mc-references";
import Highlighter from "@/components/Highlighter";
import MathEndsSentence from "@/components/MathEndsSentence";
import DisplayMath from "@/components/DisplayMath";

export default function PrimalDualLangevinMC({
  readingList,
  readingListHandler,
}: {
  readingList: ReferenceItem[];
  readingListHandler: any;
}) {
  return (
    <>
      <SectionTitle title="Problem Setup" />
      <Paragraph>
        Let <Math latex="\pi" /> be a probability measure on <Math latex="\rd" /> and let
        <Math latex="\mathcal{P}_2(\rd)" /> be the set of probability measures on <Math latex="\rd" />
        with bounded second moment. Let <Math latex="\{g_i\}_{i=1}^I" /> and <Math latex="\{h_j\}_{j=1}^J" />
        be real valued functions on <MathEndsSentence latex="\rd" />
      </Paragraph>
      <Paragraph>
        The paper proposes a primal-dual Langevin Monte carlo algorithm to <Highlighter>sample</Highlighter> from the measure <Math latex="\mu^\star" /> that solves
        <DisplayMath latex="\min_{\substack{\mu\in\mathcal{P}_2(\rd)\\ f_i,\, g_j \text{ integrable against }\mu}} \text{KL}(\mu||\pi)" />
        <DisplayMath latex="\E_{x\sim \mu}[g_i] \leq 0" />
        <DisplayMath latex="\E_{x\sim \mu}[h_j] = 0" />
      </Paragraph>
      <Paragraph>
        The constrained sampling problem encompasses a number of practical problems such as
        sampling from convex sets, by sampling from
        <DisplayMath latex="\mu^\star \in \argmin \text{KL}(\mu||\pi)" />
        <DisplayMath latex="\mathcal{P}_{x\sim \mu}[x\in C] = 1" />
        for a close convex set <MathEndsSentence latex="C\subset\rd" />
        Rate constrained Bayesian models
        <DisplayMath latex="\min \text{KL}(\mu||\pi)" />
        <DisplayMath latex="\E_{x, \theta\sim \mu}[q(x;\theta) | \mathcal{G}]\geq \E_{x, \theta\sim \mu}[q(x;\theta)]-\delta" />

      </Paragraph>
      <SectionTitle title="Background" />
      <Paragraph>
        Let <MathEndsSentence latex="f" /> be a smooth and strongly convex function. To the measure <Math latex="\pi\in\pp" />
        with density <Math latex="e^{-f(x)}/\mathcal{Z}" /> we can associate a diffusion process called Langevin diffusion, defined
        through the SDE
        <DisplayMath latex="dX_t = -\nabla f(X_t) \,dt + \sqrt{2}\, dB_t" />

        The density <Math latex="\mu=\mu(t,x)" /> of <Math latex="X_t" /> satisfies the Fokker-Planck equation
        <DisplayMath latex="\partial_t \mu = \text{div}\left(\mu \nabla_{W_2}\text{KL}(\mu||\pi)\right)" />

        In particular the KL divergence has the form

        <DisplayMath latex="\kl{\mu}{\pi} = \underbrace{\int f \,d\mu}_{\text{potential energy}\, \mathcal{V}(\mu)}+ \underbrace{\int \log(\mu)\,d\mu}_{\text{negative entropy}\,\mathcal{H}(\mu)} - \log(\mathcal{Z})" />
        In some sense the Fokker-Planck equation is the gradient flow of KL divergence in 2-Wasserstein space. The diffusion
        brings the distribution <Math latex="\mu_t" /> of <Math latex="X_t" /> closer to the measure <Math latex="\pi" /> from which we wish to draw samples.

      </Paragraph>
      <Paragraph>
        Discretization of the SDE through the forward Euler-Maruyama method leads to the Langevin Monte Carlo algorithm
        <DisplayMath latex="x_{k+1}=x_k-\gamma_k\nabla f(x_k) + \sqrt{2\gamma_k} Z_k\qquad Z_k \overset{iid}{\sim} \mathcal{N}(0, I_d) " />
        whereby <Math latex="\gamma_k > 0" /> is the size of the <Math latex="k^{\text{th}}" /> step. The convergence rate of this discretization 
        has been established for potentials satisfying various smoothness and convexity conditions, or the measure <Math latex="\pi" /> satisfies 
        appropriate LSI condition.
      </Paragraph>
    </>
  );
}
