"use client";

import { Container, Badge, Link, VStack, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Post {
  url: string;
  title: string;
  inProgress?: boolean;
  notStarted?: boolean;
  isNew?: boolean;
}

export default function BlogList({ posts }: { posts: Post[] }) {
  const [seenPostList, setSeenPostList] = useState<number[]>([]);
  useEffect(() => {
    const localStore = localStorage.getItem("seenPostList");

    if (localStore) {
      setSeenPostList(JSON.parse(localStore));
    }
  }, []);

  function appendPost(id: number) {
    if (!seenPostList.includes(id)) {
      seenPostList.push(id);
      localStorage.setItem("seenPostList", JSON.stringify(seenPostList));
    }
  }

  const router = useRouter();
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
            {post.isNew ? (
              <Button
                variant={"outline"}
                colorScheme="teal"
                onClick={() => router.push(post.url)}
              >
                {" "}
                {post.title}
              </Button>
            ) : (
              <Link as={NextLink} href={post.url}>
                {post.title}
              </Link>
            )}{" "}
            {post.isNew && <Badge colorScheme="green">{"New"}</Badge>}
            {post.inProgress && (
              <Badge colorScheme="orange">{"Progress"}</Badge>
            )}
            {post.notStarted && <Badge colorScheme="blue">{"Coming"}</Badge>}
          </Container>
        ))}
    </VStack>
  );
}
