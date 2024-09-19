import { Center, Heading } from "@chakra-ui/react";
import styles from "./BlogTitle.module.css";

export default function BlogTitle({ title }: { title?: string }) {
  return (
    <>
      <Center>
        <Heading className={styles.heading}>
          {title ? title : "Paper Reading Notes"}
        </Heading>
      </Center>
    </>
  );
}
