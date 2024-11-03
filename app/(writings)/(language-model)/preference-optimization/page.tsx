"use client";
import Blog from "@/components/Blog";
import { ReferenceItem } from "@/components/Reference";

import { references } from "./preference-optimization-references";
import PreferenceOptimization from "./blog";

export default function PreferenceOptimizationBlog() {
  function renderPreferenceOptimization(readingList: ReferenceItem[], readingListHandler: any) {
    return (
      <PreferenceOptimization
        readingList={readingList}
        readingListHandler={readingListHandler}
      />
    );
  }

  return <Blog referenceList={references} renderChildren={renderPreferenceOptimization}></Blog>;
}
