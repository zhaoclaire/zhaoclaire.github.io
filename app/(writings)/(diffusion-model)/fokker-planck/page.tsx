"use client";
import Blog from "@/components/Blog";
import { ReferenceItem } from "@/components/Reference";

import { references } from "./fokker-planck-references";
import FokkerPlanck from "./blog";

export default function FokkerPlanckBlog() {
  function renderFokkerPlanck(
    readingList: ReferenceItem[],
    readingListHandler: any
  ) {
    return (
      <FokkerPlanck
        readingList={readingList}
        readingListHandler={readingListHandler}
      />
    );
  }

  return (
    <Blog
      referenceList={references}
      renderChildren={renderFokkerPlanck}
      title={"Exposition"}
    ></Blog>
  );
}
