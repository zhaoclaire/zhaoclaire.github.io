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
import { references } from "./compressed-sensing-references";

export default function CompressedSensing({
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
        Begining with some classical concepts in machine 
        learning, we survey regularization, sparsity, compressed sensing, random matrix theory.
      </Paragraph>
    </>
  );
}
