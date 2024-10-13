import Math from "./Math";

export default function MathEndsSentence({
  latex,
  symbol = ".",
}: {
  latex: string;
  symbol?: string;
}) {
  return (
    <>
      <Math latex={latex} padding={false} />
      {symbol}
    </>
  );
}
