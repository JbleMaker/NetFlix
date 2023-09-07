import { useQuery } from "@tanstack/react-query";
import { IGetMovie, IMovieDeatil, getMovie, getMovieDetail } from "../api";
import {
  Loader,
  Wrapper,
  Banner,
  Title,
  Overview,
  Slider,
  Row,
  MovieBox,
  movieBoxVar,
  Overlay,
  Deatil,
} from "../style/styledComponents/Home-styled";
import { makeImagePath } from "../utils";
import { useState } from "react";
import { AnimatePresence, useScroll } from "framer-motion";
import useWindowDimensions from "../useWindowDimensions";
import { useMatch, useNavigate } from "react-router-dom";

const offset = 6;
function Home() {
  const history = useNavigate();
  const movieMatch = useMatch("/movie/:movieId");
  const { data, isLoading } = useQuery<IGetMovie>(
    ["movies", "nowplaying"],
    getMovie
  );
  const windowWidth = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);

  const clickMovie =
    movieMatch?.params.movieId &&
    data?.results.find((movie) => movie.id === +movieMatch.params.movieId!);

  const onClickSlide = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      const totalMovies = data.results.length - 1;
      const maxIndex = Math.floor(totalMovies / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };

  const toggleLeaving = () => setLeaving((prev) => !prev);

  const onMovieClick = (movieId: number) => {
    history(`/movie/${movieId}`);
  };

  const { scrollY } = useScroll();
  const onOverlay = () => history(-1);

  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner
            onClick={onClickSlide}
            $bgPhoto={makeImagePath(data?.results[0].backdrop_path || "")}>
            <Title>{data?.results[0].title}</Title>
            <Overview>{data?.results[0].overview}</Overview>
          </Banner>
          <Slider>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <Row
                initial={{ x: windowWidth + 13 }}
                animate={{ x: 0 }}
                exit={{ x: -windowWidth - 13 }}
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
                      transition={{ type: "tween" }}
                    />
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
                <Deatil
                  style={{ top: scrollY.get() + 100 }}
                  layoutId={movieMatch.params.movieId}></Deatil>
              </>
            ) : null}
          </AnimatePresence>
        </>
      )}
    </Wrapper>
  );
}

export default Home;
