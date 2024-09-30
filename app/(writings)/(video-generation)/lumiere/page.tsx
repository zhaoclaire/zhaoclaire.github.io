"use client";
import Blog from "@/components/Blog";
import { ReferenceItem } from "@/components/Reference";

import Lumiere from "./blog";
import { references } from "./lumiere-references";

// import references and blog

export default function LumiereBlog() {
  function renderLumiere(
    readingList: ReferenceItem[],
    readingListHandler: any
  ) {
    return (
      <Lumiere
        readingList={readingList}
        readingListHandler={readingListHandler}
      />
    );
  }

  return (
    <Blog referenceList={references} renderChildren={renderLumiere}></Blog>
  );
}
