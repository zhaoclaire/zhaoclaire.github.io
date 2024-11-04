"use client";
import Blog from "@/components/Blog";
import { ReferenceItem } from "@/components/Reference";

import { references } from "./theory-survey-references";
import TheorySurveyNov2024 from "./blog";

export default function TheorySurveyNov2024Blog() {
  function renderTheorySurveyNov2024(
    readingList: ReferenceItem[],
    readingListHandler: any
  ) {
    return (
      <TheorySurveyNov2024
        readingList={readingList}
        readingListHandler={readingListHandler}
      />
    );
  }

  return (
    <Blog
      referenceList={references}
      renderChildren={renderTheorySurveyNov2024}
      title={"Survey"}
    ></Blog>
  );
}

