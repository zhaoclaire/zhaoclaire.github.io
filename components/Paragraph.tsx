"use client";
import { Container, Text } from "@chakra-ui/react";

export default function Paragraph({
  children,
  indent = true,
}: {
  children: any;
  indent?: boolean;
}) {
  return (
    <Container fontSize="xl" maxW={"container.lg"} mt="1em">
      {indent && <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>}
      {children}
    </Container>
  );
}
