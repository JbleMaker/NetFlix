import { motion } from "framer-motion";
import styled from "styled-components";
import { makeImagePath } from "../../utils";

export const RightMove = styled(motion.div)`
  background-color: transparent;
  width: 5vmin;
  height: 15vmin;
  position: absolute;
  z-index: 1;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2vmin;
  cursor: pointer;
`;

export const LeftMove = styled(motion.div)`
  background-color: transparent;
  width: 5vmin;
  height: 15vmin;
  position: absolute;
  z-index: 1;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2vmin;
  cursor: pointer;
`;

export const SliderTitle = styled.div`
  width: 100%;
  height: 20%;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  bottom: 0;
  font-size: 2vmin;
  color: white;
  font-weight: 300;
  padding-left: 2vmin;
  box-sizing: border-box;
`;

export const MovieBackground = styled.div`
  width: 100%;
  height: 30vh;
  background-size: cover;
  background-position: center center;
  background-color: white;
`;
