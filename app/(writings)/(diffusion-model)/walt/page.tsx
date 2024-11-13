"use client";
import Blog from "@/components/Blog";
import { ReferenceItem } from "@/components/Reference";

// import references and blog
import { references } from "./walt-references";
import JEPA from "./blog";

export default function JEPABlog() {
  function renderJEPA(
    readingList: ReferenceItem[],
    readingListHandler: any
  ) {
    return (
      <JEPA
        readingList={readingList}
        readingListHandler={readingListHandler}
      />
    );
  }

  return (
    <Blog referenceList={references} renderChildren={renderJEPA}></Blog>
  );
}
