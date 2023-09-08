import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled.div`
  background: #000000;
  margin-bottom: -25vh;
`;

export const Loader = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5vmin;
`;

export const Banner = styled.div<{ $bgPhoto: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${($props) => $props.$bgPhoto});
  background-size: cover;
`;

export const Title = styled.h2`
  font-size: 5vmin;
  margin-left: 4vmin;
  margin-bottom: 2vmin;
`;

export const Overview = styled.p`
  font-size: 1.5vmin;
  margin-left: 4vmin;
  max-width: 40%;
`;

//Slide animation
export const Slider = styled(motion.div)`
  position: relative;
  top: -20vmin;
  width: 100%;
  height: 10vmin;
  margin-bottom: 12vmin;
`;

export const Row = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(6, minmax(100pt, 1fr));
  width: 100%;
  gap: 1vmin;
  position: absolute;
`;

export const MovieBox = styled(motion.div)<{ $bgPhoto: string }>`
  background-color: white;
  background-image: url(${(props) => props.$bgPhoto});
  background-size: cover;
  background-position: center center;
  height: 15vmin;
  min-height: 15vmin;
  color: black;
  font-size: 5vmin;
  cursor: pointer;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

export const movieBoxVar = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.2,
    y: -100,
    transition: {
      delay: 0.5,
      duration: 0.3,
      type: "tween",
    },
  },
};

export const Detail = styled(motion.div)`
  position: absolute;
  width: 35vw;
  height: 80vh;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 1vmin;
  background-color: ${(props) => props.theme.black.darker};
  z-index: 2;
`;

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  z-index: 1;
`;

export const SlideTitle = styled.h1`
  font-size: 2vmin;
  margin-left: 2vmin;
  margin-bottom: 1vmin;
`;
