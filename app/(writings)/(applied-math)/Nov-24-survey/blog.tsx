import Paragraph from "@/components/Paragraph";
import SectionTitle from "@/components/SectionTitle";
import { ReferenceItem } from "@/components/Reference";

export default function Nov24Survey({
  readingList,
  readingListHandler,
}: {
  readingList: ReferenceItem[];
  readingListHandler: any;
}) {
  return (
    <>
      <SectionTitle title="Overview" />
      <Paragraph>Machine learning from the applied mathematics point of view, November 2024 edition.</Paragraph>
    </>
  );
}
