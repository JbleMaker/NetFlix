import { motion } from "framer-motion";
import { styled } from "styled-components";

export const Nav = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  min-width: 100vmin;
  background-color: black;
  z-index: 1;
`;

export const Col = styled(motion.div)`
  display: flex;
  align-items: center;
`;

// Logo, logoVariants
export const Logo = styled(motion.svg)`
  margin-right: 50px;
  width: 14vmin;
  height: 6vmin;
  margin-left: 10vmin;
  fill: ${(props) => props.theme.red} path {
    stroke-width: 0.5vmin;
    stroke: white;
  }
`;

//Items, Item, Circle
export const Items = styled(motion.ul)`
  display: flex;
  align-items: center;
`;

export const Item = styled(motion.li)`
  margin-right: 2vmin;
  color: ${(props) => props.theme.white.darker};
  transition: color 0.3s ease-in-out;
  &:hover {
    color: ${(props) => props.theme.white.lighter};
  }
  font-size: 1.4vmin;
  position: relative;
`;

export const Circle = styled(motion.span)`
  position: absolute;
  height: 0.1vmin;
  width: 2.5vmin;
  background-color: white;
  bottom: -0.7vmin;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

//Search, input
export const Search = styled(motion.span)`
  color: white;
  display: flex;
  align-items: center;
  position: relative;
  margin-right: 10vmin;
  svg {
    height: 2.5vmin;
  }
`;

export const Input = styled(motion.input)`
  border: none;
  font-size: 1.8vmin;
  transform-origin: right center;
  position: absolute;
  left: -14.5vmin;
  padding: 0.4vmin 0.8vmin;
  padding-left: 3.2vmin;
  color: white;
  z-index: -1;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.white.lighter};
`;
