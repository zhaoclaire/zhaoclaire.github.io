import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

import { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";

// deprecated in newer blogs, see ./Blogs.tsx
export default function ReadingList() {
  const [size, setSize] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (newSize: string) => {
    setSize(newSize);
    onOpen();
  };

  return (
    <>
      <Drawer onClose={onClose} isOpen={isOpen} size={"xl"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Reading List 📚</DrawerHeader>
          <DrawerBody>[1] Paper</DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
