import Blog from "@/components/Blog";
import BlogTitle from "@/components/BlogTitle";
import Items from "@/components/Items";
import Math from "@/components/Math";
import Paragraph from "@/components/Paragraph";
import Reference from "@/components/Reference";
import SectionTitle from "@/components/SectionTitle";
import { Container, List, ListItem, OrderedList, Text } from "@chakra-ui/react";
import { references } from "./lumiere-references";
export default function Lumiere() {

  return (
    <Blog>
      <SectionTitle title="Overview" />
      <Paragraph>Lumiere</Paragraph>

      <Reference referenceList={references} />
    </Blog>
  );
}
