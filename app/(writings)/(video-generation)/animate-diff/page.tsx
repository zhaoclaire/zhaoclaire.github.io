import Blog from "@/components/Blog";
import BlogTitle from "@/components/BlogTitle";
import Highlighter from "@/components/Highlighter";
import Items from "@/components/Items";
import Math from "@/components/Math";
import Paragraph from "@/components/Paragraph";
import PopUp from "@/components/PopUp";
import Reference from "@/components/Reference";
import SectionTitle from "@/components/SectionTitle";
import {
  Container,
  List,
  ListItem,
  OrderedList,
  Text,
  Highlight,
} from "@chakra-ui/react";
import { title } from "process";
import { references } from "./animate-diff-references";
export default function GuidedVideoSynthesis() {

  return (
    <Blog>
      <SectionTitle title="Overview" />
      <Paragraph>
        <PopUp displayText="AnimateDiff" modalTitle="main paper">
          <Text>{references[0].title}</Text>
        </PopUp>
      </Paragraph>

      <Reference referenceList={references} />
    </Blog>
  );
}
