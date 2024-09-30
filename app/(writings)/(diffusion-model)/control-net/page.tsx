"use client";
import Blog from "@/components/Blog";
import { ReferenceItem } from "@/components/Reference";

// import references and blog
import { references } from "./control-net-references";
import ControlNet from "./blog";

export default function ControlNetBlog() {
  function renderControlNet(
    readingList: ReferenceItem[],
    readingListHandler: any
  ) {
    return (
      <ControlNet
        readingList={readingList}
        readingListHandler={readingListHandler}
      />
    );
  }

  return (
    <Blog referenceList={references} renderChildren={renderControlNet}></Blog>
  );
}
