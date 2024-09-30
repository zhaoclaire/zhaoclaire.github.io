"use client";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { useDisclosure } from "@chakra-ui/react";

export default function PopUp({
  displayText,
  modalTitle = "",
  children,
}: {
  displayText: string;
  modalTitle?: string;
  children: any;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <span>&nbsp;</span>
      <Button onClick={onOpen} colorScheme={"teal"} variant="link">
        {displayText}
      </Button>
      <span>&nbsp;</span>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {modalTitle.charAt(0).toUpperCase() + modalTitle.slice(1)}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
