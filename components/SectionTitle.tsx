"use client";
import { Container, Heading } from "@chakra-ui/react";
export default function SectionTitle({ title }: { title: string }) {
  return (
    <>
      <Container fontSize="xl" maxW={"container.lg"}>
        <Heading as="h3" size="lg" pb="0.5em" pt="1em">
          {title}
        </Heading>
      </Container>
    </>
  );
}
