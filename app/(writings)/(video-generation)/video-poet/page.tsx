"use client";
import Blog from "@/components/Blog";
import { ReferenceItem } from "@/components/Reference";

import VideoPoet from "./blog";
import { references } from "./video-poet-references";

// import references and blog

export default function VideoPoetBlog() {
  function renderVideoPoet(
    readingList: ReferenceItem[],
    readingListHandler: any
  ) {
    return (
      <VideoPoet
        readingList={readingList}
        readingListHandler={readingListHandler}
      />
    );
  }

  return (
    <Blog referenceList={references} renderChildren={renderVideoPoet}></Blog>
  );
}
