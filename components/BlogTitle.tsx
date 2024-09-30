import {
  Center,
  SimpleGrid,
  Text,
  Heading,
  Button,
} from "@chakra-ui/react";
import styles from "./BlogTitle.module.css";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

// deprecated in newer blogs, see Blogs.tsx
export default function BlogTitle({
  title,
  bookNumber = 0,
}: {
  title?: string;
  bookNumber?: number;
}) {
  return (
    <>
      <Center flexDirection={"column"}>
        <Heading className={styles.heading}>
          {title ? title : "Paper Reading Notes"}
        </Heading>
        <SimpleGrid columns={2} spacing={10}>
          <Link as={NextLink} href="/">
            <Text as="b">🏠 Home</Text>
          </Link>
          <Button variant={"outline"}>
            <Text as="b">
              📚 Reading List {bookNumber < 1 ? "" : `(${bookNumber})`}
            </Text>
          </Button>
        </SimpleGrid>
      </Center>
    </>
  );
}
