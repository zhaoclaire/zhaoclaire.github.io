"use client";
import Math from "@/components/Math";
import Paragraph from "@/components/Paragraph";
import { ReferenceItem } from "@/components/Reference";
import SectionTitle from "@/components/SectionTitle";
import { List, ListIcon, ListItem, OrderedList, Text } from "@chakra-ui/react";
import InlineReference from "@/components/InlineReference";
import { references } from "./mip-re-references";
import Highlighter from "@/components/Highlighter";

export default function MIPRE({
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
        Follow up readings on an interesting conference talk         
        <InlineReference
          reference={references[0]}
          readingList={readingList}
          readingListHandler={readingListHandler}
        ></InlineReference> I recently heard.
      </Paragraph>
    </>
  );
}
