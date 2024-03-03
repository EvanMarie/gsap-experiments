import Flex from "~/components/buildingBlocks/flex";
import FlexFull from "~/components/buildingBlocks/flexFull";
import Text from "~/components/buildingBlocks/text";
import VStack from "~/components/buildingBlocks/vStack";
import VStackFull from "~/components/buildingBlocks/vStackFull";

export default function AnimationExample({
  id,
  text,
  animationClass,
  className,
  heading,
  description,
  code,
  dimensions = "h-[15vh] w-[15vh]",
  bg = "bg-col-700",
  textColor = "text-col-100",
}: {
  id?: string;
  text?: string;
  code?: string;
  heading?: string;
  description?: string;
  animationClass?: string;
  className?: string;
  dimensions?: string;
  bg?: string;
  textColor?: string;
}) {
  return (
    <VStack className="bg-col-200 shadowBroadLoose h-fit">
      <FlexFull className="py-[0.2vh] justify-center font-semibold bg-col-100 rounded-b-none border-b-950-md ">
        <VStackFull gap="gap-[0px]" className="px-[0.5vh]">
          <Text className="text-lg-tight">{heading}</Text>
          <Text>{description}</Text>
          <Text className="font-mono text-[1.3vh] leading-[1.9vh] tracking-tighter">
            {code}
          </Text>
        </VStackFull>
      </FlexFull>
      <Flex className="h-[20vh] w-[45vh] justify-center items-center ">
        <div
          className={`flex justify-center items-center shadowBroadNormal textShadow ${bg} ${dimensions} ${textColor} ${className} ${animationClass}`}
          id={id}
        >
          {text}
        </div>
      </Flex>
    </VStack>
  );
}
