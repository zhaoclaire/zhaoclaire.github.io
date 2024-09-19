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

import BlogList from "@/components/BlogList";
import blogPosts from "./posts";
export default function Home() {
  return (
    <>
      <Center className={styles.title}>
        <Heading>Blogs</Heading>
      </Center>
      <BlogList posts={blogPosts}/>
    </>
  );
}
