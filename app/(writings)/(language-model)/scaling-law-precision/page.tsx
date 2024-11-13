"use client";
import Blog from "@/components/Blog";
import { ReferenceItem } from "@/components/Reference";

import { references } from "./scaling-law-precision-references";
import ScalingLawPrecision from "./blog";

export default function ScalingLawPrecisionBlog() {
  function renderScalingLawPrecision(readingList: ReferenceItem[], readingListHandler: any) {
    return (
      <ScalingLawPrecision
        readingList={readingList}
        readingListHandler={readingListHandler}
      />
    );
  }

  return <Blog referenceList={references} renderChildren={renderScalingLawPrecision} title='Llama 3 Take Aways'></Blog>;
}
