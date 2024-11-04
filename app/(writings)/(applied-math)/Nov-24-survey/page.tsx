"use client";
import Blog from "@/components/Blog";
import { ReferenceItem } from "@/components/Reference";

// import references and blog
import { references } from "./nov-24-survey-references";
import Nov24Survey from "./blog";

export default function Nov24SurveyBlog() {
  function renderNov24Survey(
    readingList: ReferenceItem[],
    readingListHandler: any
  ) {
    return (
      <Nov24Survey
        readingList={readingList}
        readingListHandler={readingListHandler}
      />
    );
  }

  return (
    <Blog referenceList={references} renderChildren={renderNov24Survey}></Blog>
  );
}
