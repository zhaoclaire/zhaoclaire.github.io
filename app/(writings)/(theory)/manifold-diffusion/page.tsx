"use client";
import Blog from "@/components/Blog";
import { ReferenceItem } from "@/components/Reference";

import { references } from "./manifold-diffusion-references";
import ManifoldDiffusion from "./blog";

export default function ManifoldDiffusionBlog() {
  function renderManifoldDiffusion(
    readingList: ReferenceItem[],
    readingListHandler: any
  ) {
    return (
      <ManifoldDiffusion
        readingList={readingList}
        readingListHandler={readingListHandler}
      />
    );
  }

  return (
    <Blog
      referenceList={references}
      renderChildren={renderManifoldDiffusion}
      title={"Exposition"}
    ></Blog>
  );
}

