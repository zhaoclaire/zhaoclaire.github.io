"use client";
import { Heading, Text, Container } from "@chakra-ui/react";

export default function Reference({
  referenceList,
}: {
  referenceList: string[];
}) {
  return (
    <>
      <Container fontSize="xl" maxW={"container.lg"}>
        <Heading as="h3" size="lg" pb="0.5em" pt="1em">
          References
        </Heading>
        {referenceList.map((reference, index) => (
          <div>
            {1 + index}. <span>&nbsp;</span>
            <Text as="i">{reference}</Text>
          </div>
        ))}
      </Container>
    </>
  );
}
