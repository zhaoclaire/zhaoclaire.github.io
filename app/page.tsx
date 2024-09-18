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
        {/* TODO standardize blog entry into a component */}
        <Container maxW="container.lg" fontSize="xl">
          1.{" "}
          <Link as={NextLink} href="/video-poet">
            Reading of the VideoPoet paper on LLM video generation.
          </Link>
        </Container>
        <Container maxW="container.lg" fontSize="xl">
          2.{" "}
          <Link as={NextLink} href="/stable-video-diffusion">
            Stable video diffusion paper reading.
          </Link>
        </Container>
      </VStack>
    </>
  );
}
