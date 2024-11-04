"use client";
import Math from "@/components/Math";
import Paragraph from "@/components/Paragraph";
import { ReferenceItem } from "@/components/Reference";
import SectionTitle from "@/components/SectionTitle";
import { List, ListIcon, ListItem, OrderedList, Text } from "@chakra-ui/react";
import InlineReference from "@/components/InlineReference";
import { references } from "./theory-survey-references";
import Highlighter from "@/components/Highlighter";

export default function TheorySurveyNov2024({
  readingList,
  readingListHandler,
}: {
  readingList: ReferenceItem[];
  readingListHandler: any;
}) {
  return (
    <>
      <SectionTitle title="Overview" />
    </>
  );
}
