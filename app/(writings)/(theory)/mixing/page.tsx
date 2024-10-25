"use client";
import Blog from "@/components/Blog";
import { ReferenceItem } from "@/components/Reference";

import { references } from "./mixing-references";
import Mixing from "./blog";

export default function MixingBlog() {
  function renderMixing(
    readingList: ReferenceItem[],
    readingListHandler: any
  ) {
    return (
      <Mixing
        readingList={readingList}
        readingListHandler={readingListHandler}
      />
    );
  }

  return (
    <Blog
      referenceList={references}
      renderChildren={renderMixing}
      title={"Exposition"}
    ></Blog>
  );
}

