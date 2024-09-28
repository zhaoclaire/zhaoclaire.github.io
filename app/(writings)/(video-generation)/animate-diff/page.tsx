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

export default function GuidedVideoSynthesis() {
  const references = [
    {
      title:
        "AnimateDiff: Animate Your Personalized Text-to-Image Diffusion Models without Specific Tuning",
      url: "https://animatediff.github.io",
    },
  ];
  return (
    <Blog>
      <BlogTitle title="Paper Reading Notes" />
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
