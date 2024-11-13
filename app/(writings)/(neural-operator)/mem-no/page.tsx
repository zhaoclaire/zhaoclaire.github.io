"use client";
import Blog from "@/components/Blog";
import { ReferenceItem } from "@/components/Reference";

// import references and blog
import { references } from "./mem-no-references";
import MemNO from "./blog";

export default function MemNOBlog() {
  function renderMemNO(
    readingList: ReferenceItem[],
    readingListHandler: any
  ) {
    return (
      <MemNO
        readingList={readingList}
        readingListHandler={readingListHandler}
      />
    );
  }

  return (
    <Blog referenceList={references} renderChildren={renderMemNO}></Blog>
  );
}
