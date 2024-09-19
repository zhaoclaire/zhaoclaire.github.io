"use client";

import { Container, Link, VStack } from "@chakra-ui/react";

import NextLink from "next/link";

interface Post {
  url: string;
  title: string;
}

export default function BlogList({ posts }: { posts: Post[] }) {
  return (
    <VStack>
      {posts
        .slice()
        .reverse()
        .map((post, index) => (
          <Container maxW="container.lg" fontSize="xl" key={index}>
            {index + 1}.{" "}
            <Link as={NextLink} href={post.url}>
              {post.title}
            </Link>
          </Container>
        ))}
    </VStack>
  );
}
