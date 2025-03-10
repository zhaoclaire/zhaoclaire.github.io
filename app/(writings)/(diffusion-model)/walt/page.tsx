"use client";
import Blog from "@/components/Blog";
import { ReferenceItem } from "@/components/Reference";

// import references and blog
import { references } from "./walt-references";
import Walt from "./blog";

export default function WaltBlog() {
  function renderWalt(
    readingList: ReferenceItem[],
    readingListHandler: any
  ) {
    return (
      <Walt
        readingList={readingList}
        readingListHandler={readingListHandler}
      />
    );
  }

  return (
    <Blog referenceList={references} renderChildren={renderWalt}></Blog>
  );
}
