import FindCity from "../FindCity/FindCity";
import InfoField from "../InfoField/InfoField";
import PictureInfo from "../PictureInfo/PictureInfo";
import { SectionTitle, WeatherFieldSpan } from "./WeatherField.styled";

const WeatherField = () => {
  return (
    <>
      <SectionTitle>Weather</SectionTitle>
      <WeatherFieldSpan>
        <FindCity />
        <PictureInfo />
        <InfoField />
      </WeatherFieldSpan>
    </>
  );
};

export default WeatherField;
