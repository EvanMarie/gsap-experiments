import FlexFull from "~/components/buildingBlocks/flexFull";
import Text from "~/components/buildingBlocks/text";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import DescriptionModalContent, {
  headingStyles,
  sectionStyles,
  textStyles,
} from "../descriptionModalContent";
import CodeExample from "~/components/buildingBlocks/codeExample";

export default function ComponentExplainedTemplate() {
  return (
    <DescriptionModalContent heading="heading">
      <CodeExample>code</CodeExample>
      <Text className={headingStyles}></Text>
      <VStackFull className={sectionStyles}>
        <Text className={textStyles}></Text>
      </VStackFull>
      <Text className={headingStyles}></Text>
      <VStackFull className={sectionStyles}>
        <Text className={textStyles}></Text>
        <VStackFull className={sectionStyles}>
          <Text className={textStyles}></Text>
          <Text className={textStyles}></Text>
          <Text className={textStyles}></Text>
          <Text className={textStyles}></Text>
          <Text className={textStyles}></Text>
          <Text className={textStyles}></Text>
        </VStackFull>
      </VStackFull>
      <Text className={headingStyles}></Text>
      <VStackFull className={sectionStyles}>
        <Text className={textStyles}></Text>
        <Text className={textStyles}></Text>
        <VStackFull className={sectionStyles}>
          <Text className={textStyles}></Text>
          <Text className={textStyles}></Text>
          <Text className={textStyles}></Text>
          <Text className={textStyles}></Text>
          <Text className={textStyles}></Text>
          <Text className={textStyles}></Text>
        </VStackFull>
      </VStackFull>
      <Text className={headingStyles}></Text>
      <VStackFull className={sectionStyles}>
        <Text className={textStyles}></Text>
      </VStackFull>
    </DescriptionModalContent>
  );
}
