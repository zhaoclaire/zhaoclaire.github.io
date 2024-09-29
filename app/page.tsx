"use client";

import {
  Box,
  Button,
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

import BlogList from "@/components/BlogList";
import blogPosts from "./posts";
import { useEffect, useState } from "react";

function clearViewedPapers() {
  localStorage.setItem("seenPostList", JSON.stringify([]));
  window.location.reload();
}

export default function Home() {
  const [len, setLen] = useState(0)
  useEffect(()=>{
    const localStore = localStorage.getItem("seenPostList");
    if (localStore) {
      const seenPostList: number[] = JSON.parse(localStore);
      setLen(seenPostList.length);
    }
  }, [])
  


  return (
    <>
      <Box className={styles.blog}>
        <Center className={styles.title}>
          <Heading>Blogs</Heading>
        </Center>
        <BlogList posts={blogPosts} />
        <Center height="3vh" className={styles.clear}>
          {len > 0 && (
            <Button
              variant="link"
              colorScheme={"teal"}
              onClick={clearViewedPapers}
            >
              Reset {len} Viewed {len == 1 ? "Blog" : "Blogs"}
            </Button>
          )}
        </Center>
      </Box>
    </>
  );
}
