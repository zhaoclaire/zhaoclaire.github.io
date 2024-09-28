"use client";
import { Center, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Blog(props: any) {
  return (
    <>
      {props.children}
      <Center height="15vh">
      <Link as={NextLink} href="/">
            <Text as='b'>Back Home 🏠</Text>
        </Link>
      </Center>
    </>
  );
}
