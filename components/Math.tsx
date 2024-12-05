"use client";

import katex from "katex";
import "katex/dist/katex.min.css";

import { useEffect, useRef } from "react";

// Shortcuts
const MACROS = {
  "\\E": "\\mathbb{E}",
  "\\x": "\\mathbf{x}",
  "\\b": "\\mathbf{#1}",
  "\\rd": "\\mathbb{R}^d",
  "\\t": "\\text{#1}",
  "\\op": "\\operatorname{#1}",
  "\\pp": "\\mathcal{P}_2(\\mathbb{R}^d)",

  // operators 
  "\\kl": "\\operatorname{KL}\\left(#1 || #2\\right)"
};

export default function Math({
  latex,
  display = false,
  padding = true,
}: {
  latex: string;
  display?: boolean;
  padding?: boolean;
}) {
  const mathElement = useRef(null);

  useEffect(() => {
    if (mathElement.current) {
      katex.render(latex, mathElement.current, {
        displayMode: display,
        macros: MACROS,
      });
    }
  }, [latex, display]);

  return (
    <>
      {padding && " "}
      <span ref={mathElement} />
      {padding && " "}
    </>
  );
}

// Usecases
// <Math latex="\E[X]=\mu" />
// <Math latex="\oint_C f(z)\, dz = 0 " display={true}/>
