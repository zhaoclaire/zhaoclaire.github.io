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
  Tooltip,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import styles from "./Blog.module.css";
import { ReferenceItem } from "./Reference";
import { LinkIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import Reference from "./Reference";

import { QuestionOutlineIcon } from "@chakra-ui/icons";

export default function Blog({
  title,
  renderChildren,
  referenceList = [],
}: {
  renderChildren: any;
  referenceList?: ReferenceItem[];
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

  const [readingList, setReadingList] = useState<ReferenceItem[]>([]);
  const [idList, setIdList] = useState<number[]>([]);

  function readingListHandler(id: number, inReadingList: boolean) {
    if (inReadingList) {
      // we must add reference to reading list if it is not present

      let present = false;
      readingList.forEach((reference) => {
        if (reference.id == id) {
          present = true;
        }
      });

      if (!present) {
        // search for ref of given id

        let ref: ReferenceItem;
        referenceList.forEach((reference) => {
          if (reference.id == id) {
            ref = reference;
            setReadingList([...readingList, ref]);
            setIdList([...idList, id]);
            return;
          }
        });
      }
    } else {
      // remove reference
      setReadingList(readingList.filter((reference) => reference.id !== id));
      setIdList(idList.filter((n) => n !== id));
    }
  }

  function openAllLinks() {
    for (const ref of readingList) {
      if (ref.url) {
        window.open(ref.url, "_blank");
      }
    }
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
      {renderChildren(readingList, readingListHandler)}
      {/* {cloneElement(children, { readingList, readingListHandler })} */}
      {referenceList.length > 0 && (
        <Reference referenceList={referenceList} idList={idList} />
      )}
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
          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              colorScheme="blue"
              onClick={openAllLinks}
              isDisabled={readingList.length == 0}
            >
              Open All Links
            </Button>
            <Tooltip
              label="(1) Enable pop-up (2) Reading list is not saved when navigating away from this blog page."
              fontSize="md"
            >
              <QuestionOutlineIcon ml={5} />
            </Tooltip>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
