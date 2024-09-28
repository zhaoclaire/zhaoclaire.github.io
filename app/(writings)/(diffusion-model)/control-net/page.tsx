import Blog from "@/components/Blog";
import BlogTitle from "@/components/BlogTitle";
import Items from "@/components/Items";
import Math from "@/components/Math";
import Paragraph from "@/components/Paragraph";
import Reference from "@/components/Reference";
import SectionTitle from "@/components/SectionTitle";
import { Container, List, ListItem, OrderedList, Text } from "@chakra-ui/react";

export default function ControlNet() {
  const references = [ 
    {
      title: "Adding Conditional Control to Text-to-Image Diffusion Models",
      url: 'https://arxiv.org/pdf/2302.05543'
    },
  ];
  return (
    <Blog>
      <BlogTitle title="Paper Reading Notes" />
      <SectionTitle title="Overview" />
      <Paragraph>Control Net</Paragraph>
      <Reference referenceList={references} />
    </Blog>
  );
}
