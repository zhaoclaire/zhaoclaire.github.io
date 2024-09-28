"use client";
import { Heading, Text, Container, Link } from "@chakra-ui/react";
import NextLink from "next/link";

interface ReferenceItem {
  title: string;
  url?: string;
}

export default function Reference({
  referenceList,
}: {
  referenceList: ReferenceItem[];
}) {
  return (
    <>
      <Container fontSize="xl" maxW={"container.lg"}>
        <Heading as="h3" size="lg" pb="0.5em" pt="1em">
          References
        </Heading>
        {referenceList.map((reference, index) => (
          <div key={index}>
            {1 + index}. <span>&nbsp;</span>
            {reference.url ? (
              <Link as={NextLink} href={reference.url} isExternal>
                {reference.title}
              </Link>
            ) : (
              <Text as={"span"}>{reference.title}</Text>
            )}{" "}
          </div>
        ))}
      </Container>
    </>
  );
}
