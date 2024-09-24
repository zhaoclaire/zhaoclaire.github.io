import Blog from "@/components/Blog";
import BlogTitle from "@/components/BlogTitle";
import Items from "@/components/Items";
import Math from "@/components/Math";
import Paragraph from "@/components/Paragraph";
import Reference from "@/components/Reference";
import SectionTitle from "@/components/SectionTitle";
import { Container, List, ListItem, OrderedList, Text, } from "@chakra-ui/react";

export default function FokkerPlanck() {
  const references = [
    'D. Revuz, M. York, Continuous Martingales and Brownian Motion, Grundlehren der mathematischen Wissenschaften, Third Edition',
    'Y. Song et al., Score-Based Generative Modeling through Stochastic Differential Equations',
    'Y. Song et al., Consistency Models'
  ];
  return (
    <Blog>
      <BlogTitle title="Exposition"/>
      <SectionTitle title="Overview" />
      <Paragraph>
        The probability flow ordinary differential equation arises in the foundational paper on score-based 
        diffusion model, describing the time evolution of the density function
        associated with the diffusion process. This equation arises in a more general setting, and is often 
        known there as the Fokker-Planck equation. This exposition is devoted to sketching out this generalization
        without heavy proofs.
      </Paragraph>
      <SectionTitle title="Feller Processes" />
      <Paragraph>The space of continuous functions on an LCCB space E that vanishes at infinity will be denoted<Math latex="C_0(E)"/>. 
      A <Text as='b'>Feller semi-group</Text> on <Math latex="C_0(E)"/> is a family <Math latex="T_t, \, t\geq 0"/> of positive 
      linear operators on <Math latex="C_0(E)"/>  such that 

      <OrderedList pl="2em" pb="1em" pt="1em">
        <ListItem><Math latex="T_0=Id"/> and <Math latex="||T_t||\leq 1" /> for every <Math latex="t" padding={false}/>.</ListItem>
        <ListItem><Math latex="T_{t+s}=T_t\circ T_s"/> for any pair <Math latex="s,t" padding={false}/>.</ListItem>
        <ListItem><Math latex="\lim_{\downarrow 0} ||T_tf - f|| = 0"/> for every <Math latex="f\in C_0(E)." padding={false}/></ListItem>
      </OrderedList>


      
      </Paragraph>
      <Reference referenceList={references} />
    </Blog>
  );
}
