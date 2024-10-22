"use client";
import Blog from "@/components/Blog";
import { ReferenceItem } from "@/components/Reference";

import { references } from "./mean-field-references";
import MeanFieldTheory from "./blog";

export default function MeanFieldTheoryBlog() {
  function renderMeanFieldTheory(
    readingList: ReferenceItem[],
    readingListHandler: any
  ) {
    return (
      <MeanFieldTheory
        readingList={readingList}
        readingListHandler={readingListHandler}
      />
    );
  }

  return (
    <Blog
      referenceList={references}
      renderChildren={renderMeanFieldTheory}
      title={"Exposition"}
    ></Blog>
  );
}

