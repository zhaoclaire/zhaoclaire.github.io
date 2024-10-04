"use client";
import Blog from "@/components/Blog";
import { ReferenceItem } from "@/components/Reference";

import { references } from "./llama3-references";
import Llama3 from "./blog";

export default function Llama3Blog() {
  function renderLlama3(readingList: ReferenceItem[], readingListHandler: any) {
    return (
      <Llama3
        readingList={readingList}
        readingListHandler={readingListHandler}
      />
    );
  }

  return <Blog referenceList={references} renderChildren={renderLlama3} title='Llama 3 Take Aways'></Blog>;
}
