"use client";

import {
  Box,
  Button,
  Checkbox,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Text,
} from "@chakra-ui/react";

import { ViewIcon, ExternalLinkIcon, LinkIcon } from "@chakra-ui/icons";
import { ReferenceItem } from "./Reference";
import { useEffect, useState } from "react";

//   // template code for reading list ________________________________________
//   const [readingList, setReadingList] = useState<number[]>([]);

//   function readingListHandler(id: number, inReadingList: boolean) {
//     if (readingList.includes(id)) {
//       setReadingList(readingList.filter((referencID) => referencID !== id));
//     } else {
//       setReadingList([...readingList, id]);
//     }
//   }
//   // ________________________________________________________________________

export default function InlineReference({
  reference,
  children = "",
  readingList = [],
  readingListHandler,
}: {
  children?: any;
  reference: ReferenceItem;
  readingList: ReferenceItem[];
  readingListHandler: any;
}) {
  let inReadingList = false;
  readingList.forEach((ref) => {
    if (ref.id == reference.id) {
      inReadingList = true;
    }
  });

  const [status, setStatus] = useState(inReadingList);

  useEffect(() => setStatus(inReadingList), [inReadingList]);

  return (
    <>
      <Popover placement="bottom">
        <PopoverTrigger>
          <Button variant={"ghost"} p={"6px"}>
            📚 [{reference.id}]{" "}
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader fontWeight="semibold">Reference</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            <Box>
              <Box>{children ? children : reference.annotation}</Box>
              {reference.url && (
                <Link href={reference.url} color={"teal.500"} isExternal>
                  Paper
                  <LinkIcon mx="2px" />
                </Link>
              )}
            </Box>
          </PopoverBody>
          <PopoverFooter>
            <Checkbox
              colorScheme="green"
              isChecked={status}
              onChange={(e) => {
                setStatus(e.target.checked);
                readingListHandler(reference.id, e.target.checked);
              }}
            >
              {!status ? "Add to reading list?" : "Added to reading list."}
            </Checkbox>{" "}
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    </>
  );
}
