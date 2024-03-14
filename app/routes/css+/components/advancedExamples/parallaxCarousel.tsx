import { useState } from "react";
import Box from "~/components/buildingBlocks/box";
import Center from "~/components/buildingBlocks/center";
import Flex from "~/components/buildingBlocks/flex";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import Image from "~/components/buildingBlocks/image";
import Modal from "~/components/buildingBlocks/modal";
import ParallaxImage from "~/components/specialty/parallaxImage";
import HorizontalParallaxImage from "~/components/specialty/parallaxImage";

export default function HorizontalParallaxCarousel({
  images,
  height = "h-[75vh]",
  randomWidths = ["w-[60vh]", "w-[70vh]", "w-[80vh]", "w-[90vh]", "w-[100vh]"],
  gap = "gap-[1vh]",
  includeModal = false,
}: {
  images: string[];
  height?: string;
  randomWidths?: string[];
  gap?: string;
  includeModal?: boolean;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  function ImageComponent({
    src,
    className,
    onClick,
  }: {
    src: string;
    className?: string;
    onClick?: () => void;
  }) {
    return (
      <Flex
        className={`h-fit w-fit flex-shrink-0 }`}
        onClick={
          includeModal
            ? () => {
                setModalOpen(true);
                setSelectedImage(src);
              }
            : () => {}
        }
      >
        <ParallaxImage
          bgImage={src}
          dimensions={className}
          className={`${includeModal && "hover:cursor-pointer"}`}
        />
      </Flex>
    );
  }

  return (
    <>
      <Box className="pb-[1.5vh] overflow-x-auto overflow-y-hidden rounded-none">
        <Box className={`w-fit ${height}`}>
          <HStackFull
            className="w-maxContent rounded-none gap-[1.5vh]"
            gap={gap}
          >
            {images.map((image, index) => {
              const randomWidth =
                randomWidths[Math.floor(Math.random() * randomWidths.length)];
              return (
                <ImageComponent
                  key={index}
                  className={`${height} ${randomWidth}`}
                  src={image}
                />
              );
            })}
          </HStackFull>
        </Box>
      </Box>
      <Modal
        isOpen={modalOpen}
        setModalOpen={setModalOpen}
        onClose={() => setModalOpen(false)}
        modalSize="w-fit h-fit"
      >
        <Center className="max-w-[95vw] max-h-[90vh] overflow-hidden">
          <Image alt="modal image" src={selectedImage} />
        </Center>
      </Modal>
    </>
  );
}
