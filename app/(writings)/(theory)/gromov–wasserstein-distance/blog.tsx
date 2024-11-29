"use client";
import Math from "@/components/Math";
import Paragraph from "@/components/Paragraph";
import { ReferenceItem } from "@/components/Reference";
import SectionTitle from "@/components/SectionTitle";
import { List, ListIcon, ListItem, OrderedList, Text } from "@chakra-ui/react";
import InlineReference from "@/components/InlineReference";
import { references } from "./gromov-wasserstein-distance-references";
import Highlighter from "@/components/Highlighter";

export default function GromovWassersteinDistance({
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
        Introduction to Gromov-Wasserstein distance, and discussion of such distance between spheres. 
      </Paragraph>
    </>
  );
}
