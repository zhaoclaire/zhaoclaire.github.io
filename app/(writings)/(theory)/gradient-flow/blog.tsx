"use client";
import HeadingLinkable from "@/components/HeadingLinkable";
import Highlighter from "@/components/Highlighter";
import InlineReference from "@/components/InlineReference";
import Math from "@/components/Math";
import Paragraph from "@/components/Paragraph";
import { ReferenceItem } from "@/components/Reference";
import SectionTitle from "@/components/SectionTitle";
import { List, ListItem, OrderedList, Text } from "@chakra-ui/react";
import { tree } from "next/dist/build/templates/app-page";
import { references } from "./gradient-flow-references";

export default function GradientFlow({
  readingList,
  readingListHandler,
}: {
  readingList: ReferenceItem[];
  readingListHandler: any;
}) {
  
  function Cite(number: number) {
    return (
      <InlineReference
        reference={references[number - 1]}
        readingList={readingList}
        readingListHandler={readingListHandler}
      ></InlineReference>
    );
  }

  return (
    <>
      <SectionTitle title="Overview" />
      <Paragraph>
        A motivation is the study of gradient flow in Wasserstein space 
        is the surprising discovery that certain PDEs can be formulated 
        as such flows. For example the heat equation 
        <Math latex="\partial_t u = \Delta u"  /> can be formulated of as 
        a flow in a space of probablity measures whereby the action is the 
        negative of the entropy 
        <Math display={true} latex="\Phi(\rho) = \int \rho \log \rho \, dx"/>

      </Paragraph>
    </>
  );
}
