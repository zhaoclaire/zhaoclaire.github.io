import { Highlight } from "@chakra-ui/react";

export default function Highlighter({
  children,
  colour = "orange.100",
  isRound = false,
}: {
  children: string;
  colour?: string;
  isRound?: boolean;
}) {
  if (isRound) {
    return (
      <>
        <Highlight
          query={children}
          styles={{ px: "2", py: "1", rounded: "full", bg: colour }}
        >
          {children}
        </Highlight>
      </>
    );
  } else {
    return (
      <>
        <Highlight query={children} styles={{ px: "1", py: "1", bg: colour }}>
          {children}
        </Highlight>
      </>
    );
  }
}
