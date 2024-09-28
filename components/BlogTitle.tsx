import { Box, Center, Text, Heading } from "@chakra-ui/react";
import styles from "./BlogTitle.module.css";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

export default function BlogTitle({ title }: { title?: string }) {
  return (
    <>
      <Center flexDirection={'column'}>
        <Heading className={styles.heading}>
          {title ? title : "Paper Reading Notes"}
        </Heading>
        <Box>
        <Link as={NextLink} href="/">
            <Text as='b'>Home 🏠</Text>
        </Link>
        </Box>
      </Center>
    </>
  );
}
