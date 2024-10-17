"use client";
import Blog from "@/components/Blog";
import { ReferenceItem } from "@/components/Reference";

import { references } from "./optimal-transport-references";
import OptimalTransport from "./blog";

export default function OptimalTransportBlog() {
  function renderOptimalTransport(
    readingList: ReferenceItem[],
    readingListHandler: any
  ) {
    return (
      <OptimalTransport
        readingList={readingList}
        readingListHandler={readingListHandler}
      />
    );
  }

  return (
    <Blog
      referenceList={references}
      renderChildren={renderOptimalTransport}
      title={"Exposition"}
    ></Blog>
  );
}

