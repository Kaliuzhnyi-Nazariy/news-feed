import {
  DescriptionWeatherInfo,
  MainWeatherInfo,
  PictureInfoField,
} from "./PictureInfo.style";
import WeatherPic from "../utils/WeatherPic";

import { useSelector } from "react-redux";
import { weatherSelectorWeatherInfo } from "../../../redux/weather/sellectors";

const PictureInfo = () => {
  const weatherSelectorWeatherInfoData = useSelector(
    weatherSelectorWeatherInfo
  );

  const picInfo = weatherSelectorWeatherInfoData[0]?.main;
  return (
    <PictureInfoField>
      <WeatherPic inf={picInfo} />
      <MainWeatherInfo>
        {weatherSelectorWeatherInfoData[0]?.main}
      </MainWeatherInfo>
      <DescriptionWeatherInfo>
        {weatherSelectorWeatherInfoData[0]?.description}
      </DescriptionWeatherInfo>
    </PictureInfoField>
  );
};

export default PictureInfo;
