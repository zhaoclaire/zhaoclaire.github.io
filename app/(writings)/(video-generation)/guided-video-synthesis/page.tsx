import Blog from "@/components/Blog";
import BlogTitle from "@/components/BlogTitle";
import Items from "@/components/Items";
import Math from "@/components/Math";
import Paragraph from "@/components/Paragraph";
import Reference from "@/components/Reference";
import SectionTitle from "@/components/SectionTitle";
import { Container, List, ListItem, OrderedList, Text } from "@chakra-ui/react";
import { title } from "process";

export default function GuidedVideoSynthesis() {
  const references = [
    {
      title: "Structure and Content-Guided Video Synthesis with Diffusion Models",
      url: 'https://arxiv.org/pdf/2302.03011'
    }
  ];
  return (
    <Blog>
      <BlogTitle title="Paper Reading Notes" />
      <SectionTitle title="Overview" />
      <Paragraph>Guided video synthesis.</Paragraph>

      <Reference referenceList={references} />
    </Blog>
  );
}
