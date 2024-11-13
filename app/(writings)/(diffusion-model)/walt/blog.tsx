import Paragraph from "@/components/Paragraph";
import SectionTitle from "@/components/SectionTitle";
import { ReferenceItem } from "@/components/Reference";
import InlineReference from "@/components/InlineReference";
import { references } from "./walt-references";

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
    </>
  );
}
