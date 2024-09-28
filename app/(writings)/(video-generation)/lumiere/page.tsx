import Blog from "@/components/Blog";
import BlogTitle from "@/components/BlogTitle";
import Items from "@/components/Items";
import Math from "@/components/Math";
import Paragraph from "@/components/Paragraph";
import Reference from "@/components/Reference";
import SectionTitle from "@/components/SectionTitle";
import { Container, List, ListItem, OrderedList, Text } from "@chakra-ui/react";

export default function Lumiere() {
  const references = [
    {
      title: "Lumiere: A Space-Time Diffusion Model for Video Generation",
      url: 'https://arxiv.org/pdf/2401.12945'
    }
  ];
  return (
    <Blog>
      <BlogTitle title="Paper Reading Notes" />
      <SectionTitle title="Overview" />
      <Paragraph>Lumiere</Paragraph>

      <Reference referenceList={references} />
    </Blog>
  );
}
