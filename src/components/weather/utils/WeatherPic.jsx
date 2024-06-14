import {
  WiCloudy,
  WiDaySunny,
  WiRain,
  WiSnow,
  WiThunderstorm,
  WiTornado,
} from "weather-icons-react";

import "./weatherPic.css";

const WeatherPic = ({ inf }) => {
  return (
    <>
      {inf === "Clear" ? <WiDaySunny className="sun" /> : <></>}
      {inf === "Clouds" ? <WiCloudy className="clouds" /> : <></>}
      {inf === "Rain" ? <WiRain className="rain" /> : <></>}
      {inf === "Thunderstorm" ? (
        <WiThunderstorm className="thunderstorm" />
      ) : (
        <></>
      )}
      {inf === "Snow" ? <WiSnow className="snow" /> : <></>}
      {inf === "Tornado" ? <WiTornado className="tornado" /> : <></>}
    </>
  );
};

export default WeatherPic;
