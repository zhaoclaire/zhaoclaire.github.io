"use client";

import {
  Center,
  Container,
  Heading,
  Highlight,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";

import NextLink from "next/link";

import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Center className={styles.title}>
        <Heading>Blogs</Heading>
      </Center>
      <VStack>
        <Container maxW="container.lg" fontSize="xl">
          {/* <Highlight
            query={[""]}
            styles={{ px: "2", py: "1", rounded: "full", bg: "teal.100" }}
          >
            
          </Highlight> */}
          1.{" "}
          <Link as={NextLink} href="/video-poet">
            Reading of the VideoPoet paper on LLM video generation.
          </Link>
        </Container>
      </VStack>
    </>
  );
}
