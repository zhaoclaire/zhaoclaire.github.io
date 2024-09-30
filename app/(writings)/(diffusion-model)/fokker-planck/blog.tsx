"use client";
import HeadingLinkable from "@/components/HeadingLinkable";
import InlineReference from "@/components/InlineReference";
import Math from "@/components/Math";
import Paragraph from "@/components/Paragraph";
import { ReferenceItem } from "@/components/Reference";
import SectionTitle from "@/components/SectionTitle";
import { ListItem, OrderedList, Text } from "@chakra-ui/react";

export default function FokkerPlanck({
  readingList,
  readingListHandler,
}: {
  readingList: ReferenceItem[];
  readingListHandler: any;
}) {
  const dummyRef: ReferenceItem = {
    id: 1,
    title:
      "D. Revuz, M. York, Continuous Martingales and Brownian Motion, Grundlehren der mathematischen Wissenschaften, Third Edition",
    url: "https://link.springer.com/book/10.1007/978-3-662-06400-9",
  };

  const dummyRef2: ReferenceItem = {
    id: 2,
    title: "Y. Song et al., Consistency Models",
    url: "https://arxiv.org/pdf/2303.01469",
    annotation: "consistency model paper",
  };

  return (
    <>
      <SectionTitle title="Overview" />
      <Paragraph>
        The probability flow ordinary differential equation arises in the
        foundational paper on score-based diffusion model, describing the time
        evolution of the density function associated with the diffusion process.
        This equation arises in a more general setting, and is often known there
        as the Fokker-Planck equation. This exposition is devoted to sketching
        out this generalization without heavy proofs.
        <InlineReference
          reference={dummyRef}
          readingList={readingList}
          readingListHandler={readingListHandler}
        ></InlineReference>
        Duplicate{" "}
        <InlineReference
          reference={dummyRef}
          readingList={readingList}
          readingListHandler={readingListHandler}
        ></InlineReference>
        <InlineReference
          reference={dummyRef2}
          readingList={readingList}
          readingListHandler={readingListHandler}
        ></InlineReference>
        <HeadingLinkable id="hello">hello</HeadingLinkable>
      </Paragraph>
      <SectionTitle title="Feller Processes" />
      <Paragraph>
        The space of continuous functions on an LCCB space E that vanishes at
        infinity will be denoted
        <Math latex="C_0(E)" />. A <Text as="b">Feller semi-group</Text> on{" "}
        <Math latex="C_0(E)" /> is a family <Math latex="T_t, \, t\geq 0" /> of
        positive linear operators on <Math latex="C_0(E)" /> such that
        <OrderedList pl="2em" pb="1em" pt="1em">
          <ListItem>
            <Math latex="T_0=Id" /> and <Math latex="||T_t||\leq 1" /> for every{" "}
            <Math latex="t" padding={false} />.
          </ListItem>
          <ListItem>
            <Math latex="T_{t+s}=T_t\circ T_s" /> for any pair{" "}
            <Math latex="s,t" padding={false} />.
          </ListItem>
          <ListItem>
            <Math latex="\lim_{\downarrow 0} ||T_tf - f|| = 0" /> for every{" "}
            <Math latex="f\in C_0(E)." padding={false} />
          </ListItem>
        </OrderedList>
      </Paragraph>
      <SectionTitle title="Infinitesimal Generator" />
      <Paragraph>
        <Math
          latex="Af=\lim_{t\downarrow 0}\frac{1}{t}\left(P_tf - f\right)"
          display={true}
        />
        <Math latex="\frac{d}{dt}P_t f = AP_t f = P_tAf" display={true} />
        <Math
          latex="\frac{d}{dt}P_t(x,\cdot)  = A^* P_t(x,\cdot)"
          display={true}
        />
      </Paragraph>
    </>
  );
}
