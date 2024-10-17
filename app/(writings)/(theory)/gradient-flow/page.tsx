"use client";
import Blog from "@/components/Blog";
import { ReferenceItem } from "@/components/Reference";

import { references } from "./gradient-flow-references";
import GradientFlow from "./blog";

export default function GradientFlowBlog() {
  function renderGradientFlow(
    readingList: ReferenceItem[],
    readingListHandler: any
  ) {
    return (
      <GradientFlow
        readingList={readingList}
        readingListHandler={readingListHandler}
      />
    );
  }

  return (
    <Blog
      referenceList={references}
      renderChildren={renderGradientFlow}
      title={"Exposition"}
    ></Blog>
  );
}
