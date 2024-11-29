"use client";
import Blog from "@/components/Blog";
import { ReferenceItem } from "@/components/Reference";

import { references } from "./gromov-wasserstein-distance-references";
import GromovWassersteinDistance from "./blog";

export default function GromovWassersteinDistanceBlog() {
  function renderGromovWassersteinDistance(
    readingList: ReferenceItem[],
    readingListHandler: any
  ) {
    return (
      <GromovWassersteinDistance
        readingList={readingList}
        readingListHandler={readingListHandler}
      />
    );
  }

  return (
    <Blog
      referenceList={references}
      renderChildren={renderGromovWassersteinDistance}
      title={"Exposition"}
    ></Blog>
  );
}

