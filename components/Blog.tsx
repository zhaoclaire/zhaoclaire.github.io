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
  Box,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import BlogTitle from "./BlogTitle";
import styles from "./Blog.module.css";
import { ReferenceItem } from "./Reference";
import { ExternalLinkIcon, LinkIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  // Useful API for opening all links in reading list
  // window.open('https://google.com', '_blank');

  function NavBar() {
    return (
      <SimpleGrid columns={2} spacing={10}>
        <Button variant={"outline"} onClick={() => router.push("/")}>
          🏠 Home
        </Button>
        <Button variant={"outline"} onClick={() => onOpen()}>
          <Text as="b">
            📚 Reading List{" "}
            {readingList.length < 1 ? "" : `(${readingList.length})`}
          </Text>
        </Button>
      </SimpleGrid>
    );
  }

  return (
    <>
      <Center flexDirection={"column"}>
        <Heading className={styles.heading}>
          {title ? title : "Paper Reading Notes"}
        </Heading>
        <Box mt={"2vh"}>
          <NavBar />
        </Box>
      </Center>
      {children}
      <Center height="20vh">
        <NavBar />
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
