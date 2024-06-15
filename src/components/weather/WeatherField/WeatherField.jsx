import { useSelector } from "react-redux";
import FindCity from "../FindCity/FindCity";
import InfoField from "../InfoField/InfoField";
import PictureInfo from "../PictureInfo/PictureInfo";
import {
  BackSpan,
  SectionTitle,
  WeatherFieldSpan,
} from "./WeatherField.styled";

import { DotLoader } from "react-spinners";
import {
  errorWeather,
  loadingWeather,
} from "../../../redux/weather/sellectors";

import "./loader.css";
import toast, { Toaster } from "react-hot-toast";

const WeatherField = () => {
  const loadingWeatherData = useSelector(loadingWeather);
  const errorWeatherData = useSelector(errorWeather);

  if (errorWeatherData) {
    toast.error("City not found!");
  }
  return (
    <>
      <SectionTitle className="section-title">Weather</SectionTitle>
      <BackSpan>
        <WeatherFieldSpan>
          <FindCity />
          {loadingWeatherData ? (
            <div className="loader">
              <DotLoader color={"orange"} />
            </div>
          ) : (
            <>
              <PictureInfo />
              <InfoField />
            </>
          )}
        </WeatherFieldSpan>
      </BackSpan>
      <Toaster />
    </>
  );
};

export default WeatherField;
