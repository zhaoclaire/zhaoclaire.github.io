import Paragraph from "@/components/Paragraph";
import PopUp from "@/components/PopUp";
import SectionTitle from "@/components/SectionTitle";
import { Text } from "@chakra-ui/react";

import { ReferenceItem } from "@/components/Reference";

export default function AnimateDiff({
  readingList,
  readingListHandler,
}: {
  readingList: ReferenceItem[];
  readingListHandler: any;
}) {
  return (
    <>
      <SectionTitle title="Overview" />
      <Paragraph>
        <PopUp displayText="AnimateDiff" modalTitle="main paper">
          <Text>AnimateDiff</Text>
        </PopUp>
      </Paragraph>
    </>
  );
}
