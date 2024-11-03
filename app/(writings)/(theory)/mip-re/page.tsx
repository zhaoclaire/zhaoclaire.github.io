"use client";
import Blog from "@/components/Blog";
import { ReferenceItem } from "@/components/Reference";

import { references } from "./mip-re-references";
import MIPRE from "./blog";

export default function MIPREBlog() {
  function renderMIPRE(
    readingList: ReferenceItem[],
    readingListHandler: any
  ) {
    return (
      <MIPRE
        readingList={readingList}
        readingListHandler={readingListHandler}
      />
    );
  }

  return (
    <Blog
      referenceList={references}
      renderChildren={renderMIPRE}
      title={"Very Short Notes"}
    ></Blog>
  );
}

