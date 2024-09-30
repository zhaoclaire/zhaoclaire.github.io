"use client";
import Blog from "@/components/Blog";
import { ReferenceItem } from "@/components/Reference";

import { references } from "./score-entropy-discrete-diffusion-references";
import SEDD from "./blog";

export default function SEDDBlog() {
  function renderSEDD(readingList: ReferenceItem[], readingListHandler: any) {
    return (
      <SEDD readingList={readingList} readingListHandler={readingListHandler} />
    );
  }

  return <Blog referenceList={references} renderChildren={renderSEDD}></Blog>;
}
