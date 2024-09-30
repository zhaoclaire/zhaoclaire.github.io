"use client";
import Blog from "@/components/Blog";
import { ReferenceItem } from "@/components/Reference";

import { references } from "./animate-diff-references";
import AnimateDiff from "./blog";

export default function AnimateDiffBlog() {
  function renderAnimateDiff(
    readingList: ReferenceItem[],
    readingListHandler: any
  ) {
    return (
      <AnimateDiff
        readingList={readingList}
        readingListHandler={readingListHandler}
      />
    );
  }

  return (
    <Blog referenceList={references} renderChildren={renderAnimateDiff}></Blog>
  );
}
