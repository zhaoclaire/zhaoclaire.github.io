import Paragraph from "@/components/Paragraph";
import SectionTitle from "@/components/SectionTitle";
import { ReferenceItem } from "@/components/Reference";
import InlineReference from "@/components/InlineReference";
import { references } from "./jepa-references";

export default function JEPA({
  readingList,
  readingListHandler,
}: {
  readingList: ReferenceItem[];
  readingListHandler: any;
}) {
  return (
    <>
      <SectionTitle title="Overview" />
      <Paragraph>Deep dive about joint-embedding predictive architecture (JEPA) inspired by a talk. 
      <InlineReference
          reference={references[0]}
          readingList={readingList}
          readingListHandler={readingListHandler}
        ></InlineReference>
      </Paragraph>
    </>
  );
}
