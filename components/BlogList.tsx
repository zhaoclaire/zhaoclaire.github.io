"use client";

import { Container, Badge, Link, VStack } from "@chakra-ui/react";
import { read } from "fs";

import NextLink from "next/link";
import { useState, useEffect } from "react";

interface Post {
  url: string;
  title: string;
  inProgress?: boolean;
  notStarted?: boolean;
}

export default function BlogList({ posts }: { posts: Post[] }) {
  const localStore = localStorage.getItem("seenPostList");
  var seenPostList: number[] = [];

  if (localStore) {
    seenPostList = JSON.parse(localStore);
  }

  function appendPost(id: number) {
    if (!seenPostList.includes(id)) {
      seenPostList.push(id);
      localStorage.setItem("seenPostList", JSON.stringify(seenPostList));
    }
  }

  return (
    <VStack>
      {posts
        .slice()
        .reverse()
        .map((post, index) => (
          <Container
            maxW="container.lg"
            fontSize="xl"
            key={index}
            onClick={() => appendPost(index)}
          >
            {" "}
            {seenPostList.includes(index) ? `✅ ` : `${index + 1}. `}
            <Link as={NextLink} href={post.url}>
              {post.title}
            </Link>{" "}
            {post.inProgress && (
              <Badge colorScheme="orange">{"In progress"}</Badge>
            )}
            {post.notStarted && (
              <Badge colorScheme="blue">{"Coming soon"}</Badge>
            )}
          </Container>
        ))}
    </VStack>
  );
}
