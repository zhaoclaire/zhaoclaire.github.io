"use client";
import { Box } from "@chakra-ui/react";

export default function Blog(props: any) {
  return (
    <>
      {props.children}
      <Box height="15vh" />
    </>
  );
}
