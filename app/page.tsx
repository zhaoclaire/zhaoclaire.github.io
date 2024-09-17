"use client";
import { Heading, Text } from "@chakra-ui/react";
import Math from "@/components/Math";

export default function Home() {
  return (
    <>
      <Heading>{' { Blog }'}</Heading>
      <Text fontSize={'3xl'}>ABC abc</Text>
      Hello world <Math latex='\int xyz \sum' display={ false }></Math>
    </>
  );
}
