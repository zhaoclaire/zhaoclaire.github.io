"use client";
import Blog from "@/components/Blog";
import { ReferenceItem } from "@/components/Reference";

import StableVideoDiffusion from "./blog";
import { references } from "./stable-video-diffusion-references";

// import references and blog

export default function StableVideoDiffusionBlog() {
  function renderStableVideoDiffusion(
    readingList: ReferenceItem[],
    readingListHandler: any
  ) {
    return (
      <StableVideoDiffusion
        readingList={readingList}
        readingListHandler={readingListHandler}
      />
    );
  }

  return (
    <Blog
      referenceList={references}
      renderChildren={renderStableVideoDiffusion}
    ></Blog>
  );
}
