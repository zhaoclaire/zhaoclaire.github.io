"use client";
import {
  Button,
  Center,
  Link,
  SimpleGrid,
  Text,
  Heading,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Container,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import BlogTitle from "./BlogTitle";
import styles from "./Blog.module.css";
import { ReferenceItem } from "./Reference";
import { ExternalLinkIcon, LinkIcon } from "@chakra-ui/icons";

export default function Blog({
  title,
  children,
  readingList = [],
}: {
  children: any;
  readingList?: ReferenceItem[];
  title?: any;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Center flexDirection={"column"}>
        <Heading className={styles.heading}>
          {title ? title : "Paper Reading Notes"}
        </Heading>
        <SimpleGrid columns={2} spacing={10}>
          <Link as={NextLink} href="/">
            <Text as="b">🏠 Home</Text>
          </Link>
          <Button variant={"outline"} onClick={() => onOpen()}>
            <Text as="b">
              📚 Reading List{" "}
              {readingList.length < 1 ? "" : `(${readingList.length})`}
            </Text>
          </Button>
        </SimpleGrid>
      </Center>
      {children}
      <Center height="15vh">
        <SimpleGrid columns={2} spacing={10}>
          <Link as={NextLink} href="/">
            <Text as="b">🏠 Home</Text>
          </Link>
          <Button variant={"outline"} onClick={() => onOpen()}>
            <Text as="b">
              📚 Reading List{" "}
              {readingList.length < 1 ? "" : `(${readingList.length})`}
            </Text>
          </Button>
        </SimpleGrid>
      </Center>

      <Drawer onClose={onClose} isOpen={isOpen} size={"lg"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Reading List 📚</DrawerHeader>
          <DrawerBody>
            {readingList.length == 0 && "nothing yet"}

            {readingList.map((ref, index) => (
              <Container key={index}>
                [{index + 1}] {ref.title}{" "}
                <Link as={NextLink} href={ref.url} isExternal>
                  <Text as="b">
                    <LinkIcon /> Link
                  </Text>
                </Link>
              </Container>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
