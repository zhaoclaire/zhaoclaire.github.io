import Paragraph from "@/components/Paragraph";
import SectionTitle from "@/components/SectionTitle";
import { ReferenceItem } from "@/components/Reference";
import InlineReference from "@/components/InlineReference";
import { references } from "./nonlinear-diffusion-references";

export default function NonlinearDiffusion({
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
