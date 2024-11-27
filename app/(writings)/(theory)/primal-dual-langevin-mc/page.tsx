"use client";
import Blog from "@/components/Blog";
import { ReferenceItem } from "@/components/Reference";

import { references } from "./primal-dual-langevin-mc-references";
import PrimalDualLangevinMC from "./blog";

export default function PrimalDualLangevinMCBlog() {
  function renderPrimalDualLangevinMC(
    readingList: ReferenceItem[],
    readingListHandler: any
  ) {
    return (
      <PrimalDualLangevinMC
        readingList={readingList}
        readingListHandler={readingListHandler}
      />
    );
  }

  return (
    <Blog
      referenceList={references}
      renderChildren={renderPrimalDualLangevinMC}
    ></Blog>
  );
}

