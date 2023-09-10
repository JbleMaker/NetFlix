import { useQuery } from "@tanstack/react-query";
import {
  IAiringToday,
  airingToday,
  onTheAir,
  popularTv,
  topRatedTv,
} from "../Api/TvApi";
import {
  Banner,
  Loader,
  Overview,
  Title,
  Wrapper,
} from "../style/styledComponents/Home-styled";
import { makeImagePath } from "../utils";
import SliderTv from "../components/SliderTv";

function Tv() {
  //onTheAir,popularTv,topRatedTv
  const { data: todayTv, isLoading } = useQuery<IAiringToday>(
    ["airingToday", "airingTodayTv"],
    airingToday
  );

  const { data: onTheAirTvSerise } = useQuery<IAiringToday>(
    ["onTheAir", "onTheAirTv"],
    onTheAir
  );

  const { data: popularTvSerise } = useQuery<IAiringToday>(
    ["popular", "popularTv"],
    popularTv
  );

  const { data: topRatedTvSerise } = useQuery<IAiringToday>(
    ["topRated", "topRatedTv"],
    topRatedTv
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
              todayTv?.results[0].backdrop_path
                ? todayTv?.results[0].backdrop_path
                : todayTv?.results[0].poster_path || ""
            )}>
            <Title>{todayTv?.results[0].name}</Title>
            <Overview>{todayTv?.results[0].overview}</Overview>
          </Banner>
          {/* 슬라이더 영역 */}
          <SliderTv
            data={todayTv as IAiringToday}
            title={"오늘방송"}
            category={"today"}
          />
          <SliderTv
            data={onTheAirTvSerise as IAiringToday}
            title={"방송중"}
            category={"today"}
          />
          <SliderTv
            data={popularTvSerise as IAiringToday}
            title={"인기있는"}
            category={"today"}
          />
          <SliderTv
            data={topRatedTvSerise as IAiringToday}
            title={"평점이 높은"}
            category={"today"}
          />
        </>
      )}
    </Wrapper>
  );
}

export default Tv;
