"use client";
import {
  Container,
  ListItem,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";


export default function Items({
  list,
  isOrdered = false,
}: {
  list: any[];
  isOrdered?: boolean;
}) {
  if (!isOrdered) {
    return (
      <Container fontSize="xl" maxW={"container.lg"} mt="1em">
        <UnorderedList pl="2em" pb="1em" pt="1em">
          {list.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </UnorderedList>
      </Container>
    );
  }

  return (
    <Container fontSize="xl" maxW={"container.lg"} mt="1em">
      <OrderedList pl="2em" pb="1em" pt="1em">
        {list.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </OrderedList>
    </Container>
  );
}
