import { useQuery } from "@tanstack/react-query";
import {
  IGetMovie,
  getNowplayingMovie,
  getPopularMovie,
  getUpcomingMovie,
  getTopRatedMovie,
} from "../Api/MovieApi";
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
  //현재상영작
  const { data: nowPlaying, isLoading } = useQuery<IGetMovie>(
    ["nowPlaying", "nowplayingMovie"],
    getNowplayingMovie
  );

  //인기상영작
  const { data: popularMovie } = useQuery<IGetMovie>(
    ["popular", "popularMovie"],
    getPopularMovie
  );

  //개봉예정작
  const { data: upcomingMovie } = useQuery<IGetMovie>(
    ["upcoming", "upcomingMovie"],
    getUpcomingMovie
  );

  //평점높은 영화
  const { data: topratedMovie } = useQuery<IGetMovie>(
    ["topRated", "topRatedMovie"],
    getTopRatedMovie
  );

  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          {/* 배너 영역 */}
          <Banner
            $bgPhoto={makeImagePath(
              nowPlaying?.results[0].backdrop_path || ""
            )}>
            <Title>{nowPlaying?.results[0].title}</Title>
            <Overview>{nowPlaying?.results[0].overview}</Overview>
          </Banner>
          {/* 슬라이드 영역 */}
          <SliderMovie
            data={nowPlaying as IGetMovie}
            title={"현재상영작"}
            category={"now_playing"}
          />
          <SliderMovie
            data={popularMovie as IGetMovie}
            title={"인기상영작"}
            category={"popular"}
          />
          <SliderMovie
            data={topratedMovie as IGetMovie}
            title={"평점이 높은 작품"}
            category={"topRating"}
          />
          <SliderMovie
            data={upcomingMovie as IGetMovie}
            title={"개봉예정작"}
            category={"upcoming"}
          />
        </>
      )}
    </Wrapper>
  );
}

export default Home;
