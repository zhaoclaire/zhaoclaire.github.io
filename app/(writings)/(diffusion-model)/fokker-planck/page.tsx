"use client";
import Blog from "@/components/Blog";
import BlogTitle from "@/components/BlogTitle";
import HeadingLinkable from "@/components/HeadingLinkable";
import InlineReference from "@/components/InlineReference";
import Items from "@/components/Items";
import Math from "@/components/Math";
import Paragraph from "@/components/Paragraph";
import ReadingList from "@/components/ReadingList";
import Reference, { ReferenceItem } from "@/components/Reference";
import SectionTitle from "@/components/SectionTitle";
import { Heading, ListItem, OrderedList, Text } from "@chakra-ui/react";
import { useState } from "react";

import { references } from "./fokker-plank-references";

export default function FokkerPlanck() {
  // template code for reading list ________________________________________
  const [readingList, setReadingList] = useState<ReferenceItem[]>([]);
  const [idList, setIdList] = useState<number[]>([])

  function readingListHandler(id: number, inReadingList: boolean) {
    if (inReadingList) {
      // we must add reference to reading list if it is not present

      let present = false;
      readingList.forEach((reference) => {
        if (reference.id == id) {
          present = true;
        }
      });

      if (!present) {
        // search for ref of given id

        let ref: ReferenceItem;
        references.forEach((reference) => {
          if (reference.id == id) {
            ref = reference;
            setReadingList([...readingList, ref]);
            setIdList([...idList, id])
            return;
          }
        });
      }
    } else {
      // remove reference
      setReadingList(readingList.filter((reference) => reference.id !== id));
      setIdList(idList.filter((n) => n !== id))
    }
  }
  // ________________________________________________________________________

  let dummyRef: ReferenceItem = {
    title:
      "Y. Song et al., Score-Based Generative Modeling through Stochastic Differential Equations",
    url: "https://arxiv.org/pdf/2011.13456",
    id: 4,
    annotation: "fundamental paper",
  };
  let dummyRef2: ReferenceItem = {
    title:
      "2Y. Song et al., Score-Based Generative Modeling through Stochastic Differential Equations",
    url: "https://arxiv.org/pdf/2011.13456",
    id: 3,
    annotation: "fundamental paper2",
  };
  return (
    <Blog readingList={readingList}>
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
          Duplicate <InlineReference
          reference={dummyRef}
          readingList={readingList}
          readingListHandler={readingListHandler}
        ></InlineReference>
        <InlineReference
          reference={dummyRef2}
          readingList={readingList}
          readingListHandler={readingListHandler}
        ></InlineReference>
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
      <Reference referenceList={references} idList={idList}/>
    </Blog>
  );
}
