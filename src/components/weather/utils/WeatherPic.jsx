import {
  WiCloudy,
  WiDaySunny,
  WiRain,
  WiSnow,
  WiThunderstorm,
  WiTornado,
} from "weather-icons-react";

const WeatherPic = ({ inf }) => {
  return (
    <>
      {inf === "Clear" ? <WiDaySunny size={128} color="yellow" /> : <></>}
      {inf === "Clouds" ? <WiCloudy size={128} color="gray" /> : <></>}
      {inf === "Rain" ? <WiRain size={128} color="blue" /> : <></>}
      {inf === "Thunderstorm" ? (
        <WiThunderstorm size={128} color="darkblue" />
      ) : (
        <></>
      )}
      {inf === "Snow" ? <WiSnow size={128} color="blue" /> : <></>}
      {inf === "Tornado" ? <WiTornado size={128} color="blue" /> : <></>}
    </>
  );
};

export default WeatherPic;
