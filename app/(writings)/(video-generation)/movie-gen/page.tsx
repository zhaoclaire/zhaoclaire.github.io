"use client";
import Blog from "@/components/Blog";
import { ReferenceItem } from "@/components/Reference";

import { references } from "./movie-gen-references";
import MovieGen from "./blog";

export default function MovieGenBlog() {
  function renderMovieGen(
    readingList: ReferenceItem[],
    readingListHandler: any
  ) {
    return (
      <MovieGen
        readingList={readingList}
        readingListHandler={readingListHandler}
      />
    );
  }

  return (
    <Blog referenceList={references} renderChildren={renderMovieGen}></Blog>
  );
}
