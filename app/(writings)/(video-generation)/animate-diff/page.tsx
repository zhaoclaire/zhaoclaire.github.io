import Blog from "@/components/Blog";
import BlogTitle from "@/components/BlogTitle";
import Items from "@/components/Items";
import Math from "@/components/Math";
import Paragraph from "@/components/Paragraph";
import Reference from "@/components/Reference";
import SectionTitle from "@/components/SectionTitle";
import { Container, List, ListItem, OrderedList, Text } from "@chakra-ui/react";

export default function GuidedVideoSynthesis() {
  const references = [
    "AnimateDiff: Animate Your Personalized Text-to-Image Diffusion Models without Specific Tuning",
  ];
  return (
    <Blog>
      <BlogTitle title="Paper Reading Notes" />
      <SectionTitle title="Overview" />
      <Paragraph>AnimateDiff</Paragraph>

      <Reference referenceList={references} />
    </Blog>
  );
}
