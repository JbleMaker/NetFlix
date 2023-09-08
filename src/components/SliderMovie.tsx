import React, { useState } from "react";
import { AnimatePresence, useScroll } from "framer-motion";
import useWindowDimensions from "../useWindowDimensions";
import { useMatch, useNavigate } from "react-router-dom";
import { makeImagePath } from "../utils";
import {
  Detail,
  MovieBox,
  Overlay,
  Row,
  SlideTitle,
  Slider,
  movieBoxVar,
} from "../style/styledComponents/Home-styled";
import { IGetMovie } from "../api";
import {
  LeftMove,
  MovieBackground,
  RightMove,
  SliderTitle,
} from "../style/styledComponents/Slider-styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const offset = 6;

export interface ISlider {
  data: IGetMovie;
  title: string;
}

function SliderMovie({ data, title }: ISlider) {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [clickReverse, setClickReverse] = useState(false);

  const toggleLeaving = () => setLeaving((prev) => !prev);
  const onRightSlide = () => {
    if (data) {
      if (leaving) return;
      setClickReverse(false);
      toggleLeaving();
      const totalMovies = data.results.length - 1;
      const maxIndex = Math.floor(totalMovies / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };

  const onLeftSlide = () => {
    if (data) {
      if (leaving) return;
      setClickReverse(true);
      toggleLeaving();
      const totalMovies = data.results.length - 1;
      const maxIndex = Math.floor(totalMovies / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev - 1));
    }
  };

  const windowWidth = useWindowDimensions();

  const onMovieClick = (movieId: number) => {
    history(`/movie/${movieId}`);
  };

  const history = useNavigate();
  const movieMatch = useMatch("/movie/:movieId");
  const { scrollY } = useScroll();
  const onOverlay = () => history(-1);

  const rowVariants = {
    hidden: ({
      windowWidth,
      clickReverse,
    }: {
      windowWidth: number;
      clickReverse: boolean;
    }) => ({
      x: clickReverse ? -windowWidth - 13 : windowWidth + 13,
    }),
    visible: {
      x: 0,
    },
    exit: ({
      windowWidth,
      clickReverse,
    }: {
      windowWidth: number;
      clickReverse: boolean;
    }) => ({
      x: clickReverse ? windowWidth + 13 : -windowWidth - 13,
    }),
  };

  const movieInfo =
    movieMatch?.params.movieId &&
    data.results.find(
      (movie) => String(movie.id) === movieMatch.params.movieId
    );
  console.log(movieInfo);
  return (
    <>
      <Slider>
        <SlideTitle>{title}</SlideTitle>
        <RightMove onClick={onRightSlide}>
          <FontAwesomeIcon icon={faChevronRight} size="2x" />
        </RightMove>
        <LeftMove onClick={onLeftSlide}>
          <FontAwesomeIcon icon={faChevronLeft} size="2x" />
        </LeftMove>
        <AnimatePresence
          initial={false}
          onExitComplete={toggleLeaving}
          custom={{ windowWidth, clickReverse }}>
          <Row
            custom={{ windowWidth, clickReverse }}
            variants={rowVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "tween", duration: 1 }}
            key={index}>
            {data?.results
              .slice(1)
              .slice(offset * index, offset * index + offset)
              .map((movie) => (
                <MovieBox
                  layoutId={movie.id + ""}
                  key={movie.id}
                  onClick={() => onMovieClick(movie.id)}
                  $bgPhoto={makeImagePath(movie.backdrop_path, "w500")}
                  variants={movieBoxVar}
                  whileHover="hover"
                  initial="normal"
                  transition={{ type: "tween" }}>
                  <SliderTitle>{movie.title}</SliderTitle>
                </MovieBox>
              ))}
          </Row>
        </AnimatePresence>
      </Slider>
      <AnimatePresence>
        {movieMatch ? (
          <>
            <Overlay
              onClick={onOverlay}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <Detail
              style={{ top: scrollY.get() + 100 }}
              layoutId={movieMatch.params.movieId}>
              {movieInfo && (
                <>
                  <MovieBackground
                    style={{
                      backgroundImage: `linear-gradient(to top, black, transparent), url(${makeImagePath(
                        movieInfo.backdrop_path,
                        "w500"
                      )})`,
                    }}
                  />
                </>
              )}
            </Detail>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export default SliderMovie;
