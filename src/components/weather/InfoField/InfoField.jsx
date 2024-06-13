import {
  weatherSelector,
  weatherSelectorMainInfo,
  weatherSelectorWind,
} from "../../../redux/weather/sellectors";
import { useSelector } from "react-redux";
import { InfoFieldStyle } from "./InfoField.styled";

const InfoField = () => {
  const weatherSelectorData = useSelector(weatherSelector);
  const weatherSelectorMainInfoData = useSelector(weatherSelectorMainInfo);
  const weatherSelectorWindData = useSelector(weatherSelectorWind);

  const temper = weatherSelectorMainInfoData.temp;
  return (
    <InfoFieldStyle>
      <h3>{weatherSelectorData.city}</h3>
      <ul style={{ display: "flex", gap: "16px" }}>
        <li>temp: {Math.round(temper)}</li>
        <li>pressure: {weatherSelectorMainInfoData.pressure}</li>
        <li>humidity: {weatherSelectorMainInfoData.humidity}</li>
        <li>Wind Speed: {weatherSelectorWindData.speed}</li>
      </ul>
    </InfoFieldStyle>
  );
};

export default InfoField;
