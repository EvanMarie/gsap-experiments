import { HomeIcon } from "styles";
import Button from "../../../components/buildingBlocks/button";
import IconButton from "../../../components/buildingBlocks/iconButton";
import NavContainer from "../../../components/buildingBlocks/navContainer";
import HStackFull from "../../../components/buildingBlocks/hStackFull";

export default function SpringNav() {
  return (
    <NavContainer>
      <HStackFull className="px-[1vh] justify-between">
        <IconButton icon={HomeIcon} type="smallNormal" to="/" />
        <HStackFull className="h-full items-center justify-around">
          <Button to="/use-spring" buttonText="Intro" type="smallNormal" />
          <Button
            to="/use-spring/parallax-pages"
            buttonText="parallax pages"
            type="smallNormal"
          />
          {/* <Button
            to="/svg/svg-paths-intro"
            buttonText="Paths"
            type="smallNormal"
          />
          <Button
            to="/svg/svg-path-examples"
            buttonText="Playground"
            type="smallNormal"
          />
          <Button
            to="https://www.framer.com/motion/introduction/"
            buttonText="Docs"
            type="smallNormal"
            target="_blank"
          /> */}
        </HStackFull>
      </HStackFull>
    </NavContainer>
  );
}
