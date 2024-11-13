"use client";
import Blog from "@/components/Blog";
import { ReferenceItem } from "@/components/Reference";

// import references and blog
import { references } from "./nonlinear-diffusion-references";
import NonlinearDiffusion from "./blog";

export default function NonlinearDiffusionBlog() {
  function renderNonlinearDiffusion(
    readingList: ReferenceItem[],
    readingListHandler: any
  ) {
    return (
      <NonlinearDiffusion
        readingList={readingList}
        readingListHandler={readingListHandler}
      />
    );
  }

  return (
    <Blog referenceList={references} renderChildren={renderNonlinearDiffusion}></Blog>
  );
}
