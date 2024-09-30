"use client";
import Blog from "@/components/Blog";
import { ReferenceItem } from "@/components/Reference";

import GuidedVideoSynthesis from "./blog";
import { references } from "./guided-video-synthesis-references";

// import references and blog

export default function GuidedVideoSynthesisBlog() {
  function renderGuidedVideoSynthesis(
    readingList: ReferenceItem[],
    readingListHandler: any
  ) {
    return (
      <GuidedVideoSynthesis
        readingList={readingList}
        readingListHandler={readingListHandler}
      />
    );
  }

  return (
    <Blog
      referenceList={references}
      renderChildren={renderGuidedVideoSynthesis}
    ></Blog>
  );
}
