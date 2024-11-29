"use client";
import Blog from "@/components/Blog";
import { ReferenceItem } from "@/components/Reference";

import { references } from "./information-divergences-references";
import InformationDivergences from "./blog";

export default function InformationDivergencesBlog() {
  function renderInformationDivergences(
    readingList: ReferenceItem[],
    readingListHandler: any
  ) {
    return (
      <InformationDivergences
        readingList={readingList}
        readingListHandler={readingListHandler}
      />
    );
  }

  return (
    <Blog
      referenceList={references}
      renderChildren={renderInformationDivergences}
      title={"Exposition"}
    ></Blog>
  );
}

