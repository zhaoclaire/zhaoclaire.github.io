"use client";

import { Container, Badge, Link, VStack } from "@chakra-ui/react";

import NextLink from "next/link";

interface Post {
  url: string;
  title: string;
  inProgress?: boolean;
  notStarted?: boolean;
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
