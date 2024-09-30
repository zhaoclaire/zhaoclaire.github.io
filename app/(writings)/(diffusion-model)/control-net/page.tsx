import Blog from "@/components/Blog";
import BlogTitle from "@/components/BlogTitle";
import Items from "@/components/Items";
import Math from "@/components/Math";
import Paragraph from "@/components/Paragraph";
import Reference from "@/components/Reference";
import SectionTitle from "@/components/SectionTitle";
import { Container, List, ListItem, OrderedList, Text } from "@chakra-ui/react";

import { references } from "./control-net-references";
export default function ControlNet() {

  return (
    <Blog>
      <SectionTitle title="Overview" />
      <Paragraph>Control Net</Paragraph>
      <Reference referenceList={references} />
    </Blog>
  );
}
