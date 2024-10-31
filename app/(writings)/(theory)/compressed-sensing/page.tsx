"use client";
import Blog from "@/components/Blog";
import { ReferenceItem } from "@/components/Reference";

import { references } from "./compressed-sensing-references";
import CompressedSensing from "./blog";

export default function CompressedSensingBlog() {
  function renderCompressedSensing(
    readingList: ReferenceItem[],
    readingListHandler: any
  ) {
    return (
      <CompressedSensing
        readingList={readingList}
        readingListHandler={readingListHandler}
      />
    );
  }

  return (
    <Blog
      referenceList={references}
      renderChildren={renderCompressedSensing}
      title={"Exposition"}
    ></Blog>
  );
}
