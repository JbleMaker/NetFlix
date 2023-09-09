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
