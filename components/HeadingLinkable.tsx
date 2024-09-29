import { Heading, Button, Box, Container } from "@chakra-ui/react";

import { useState } from "react";
import { CopyIcon } from "@chakra-ui/icons";
import { useToast } from "@chakra-ui/react";

export default function HeadingLinkable({
  id,
  as = "h1",
  size = "xl",
  children,
}: {
  id: string;
  as?: any;
  size?: string;
  children: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [text, setText] = useState(children);
  const toast = useToast();
  return (
    <>
      <Container fontSize="xl" maxW={"container.lg"}>
        <Heading
          as={as}
          size={size}
          id={id}
          _hover={{
            background: "white",
            color: "teal.500",
          }}
          onMouseOver={() => {
            setText("# " + children);
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setText(children);
            setIsHovered(false);
          }}
        >
          {text}{" "}
          {isHovered && (
            <Button
              variant="outline"
              onClick={() => {
                navigator.clipboard.writeText(window.location.href + `#${id}`);
                toast.closeAll();
                toast({
                  position: "bottom-left",
                  render: () => (
                    <Box color="white" p={3} bg="green.500">
                      Copied link to clickboard.
                    </Box>
                  ),
                });
              }}
            >
              <CopyIcon />
            </Button>
          )}
        </Heading>
      </Container>
    </>
  );
}
