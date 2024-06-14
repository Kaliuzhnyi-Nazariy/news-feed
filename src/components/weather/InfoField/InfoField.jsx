import {
  weatherSelector,
  weatherSelectorMainInfo,
  weatherSelectorWind,
} from "../../../redux/weather/sellectors";
import { useSelector } from "react-redux";
import {
  InfoFieldStyle,
  ItemOfInfo,
  ItemOfInfoSpecial,
  ListOfInfo,
} from "./InfoField.styled";
import {
  WiBarometer,
  WiCelsius,
  WiHumidity,
  WiStrongWind,
} from "weather-icons-react";
import "./textInfo.css";

const InfoField = () => {
  const weatherSelectorData = useSelector(weatherSelector);
  const weatherSelectorMainInfoData = useSelector(weatherSelectorMainInfo);
  const weatherSelectorWindData = useSelector(weatherSelectorWind);

  const temper = weatherSelectorMainInfoData.temp;
  return (
    <InfoFieldStyle>
      <h3 className="titleSect">{weatherSelectorData.city}</h3>
      <ListOfInfo>
        <ItemOfInfo>
          <WiCelsius className="pictTempField" />
          <p className="infoField">{Math.round(temper)}</p>
        </ItemOfInfo>
        <ItemOfInfoSpecial>
          <WiBarometer className="pictBaromField" />
          <p className="infoField">{weatherSelectorMainInfoData.pressure}</p>
        </ItemOfInfoSpecial>
        <ItemOfInfoSpecial>
          <WiHumidity className="pictHumField" />
          <p className="infoField">{weatherSelectorMainInfoData.humidity}</p>
        </ItemOfInfoSpecial>
        <ItemOfInfoSpecial>
          <WiStrongWind className="pictWindField" />{" "}
          <p className="infoField">{weatherSelectorWindData.speed} </p>
        </ItemOfInfoSpecial>
      </ListOfInfo>
    </InfoFieldStyle>
  );
};

export default InfoField;
