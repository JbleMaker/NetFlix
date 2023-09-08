import { useQuery } from "@tanstack/react-query";
import {
  IGetMovie,
  getNowplayingMovie,
  getPopularMovie,
  getUpcomingMovie,
  getTopRatedMovie,
} from "../api";
import {
  Loader,
  Wrapper,
  Banner,
  Title,
  Overview,
} from "../style/styledComponents/Home-styled";
import { makeImagePath } from "../utils";
import SliderMovie from "../components/SliderMovie";

function Home() {
  const { data: nowPlaying, isLoading } = useQuery<IGetMovie>(
    ["nowPlaying", "nowplayingMovie"],
    getNowplayingMovie
  );

  const { data: popularMovie } = useQuery(
    ["popular", "popularMovie"],
    getPopularMovie
  );

  const { data: upcomingMovie } = useQuery(
    ["upcoming", "upcomingMovie"],
    getUpcomingMovie
  );

  const { data: topratedMovie } = useQuery(
    ["topRated", "topRatedMovie"],
    getTopRatedMovie
  );

  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner
            $bgPhoto={makeImagePath(
              nowPlaying?.results[0].backdrop_path || ""
            )}>
            <Title>{nowPlaying?.results[0].title}</Title>
            <Overview>{nowPlaying?.results[0].overview}</Overview>
          </Banner>

          <SliderMovie data={nowPlaying as IGetMovie} title={"현재상영작"} />
          {/* <SliderMovie data={popularMovie as IGetMovie} title={"인기상영작"} />
          <SliderMovie data={upcomingMovie as IGetMovie} title={"개봉예정작"} />
          <SliderMovie
            data={topratedMovie as IGetMovie}
            title={"평점이 높은 작품"} */}
          {/* /> */}
        </>
      )}
    </Wrapper>
  );
}

export default Home;
