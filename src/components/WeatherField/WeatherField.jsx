import {
  weatherSelector,
  weatherSelectorMainInfo,
  weatherSelectorWeatherInfo,
  weatherSelectorWind,
} from "../../redux/weather/sellectors";
import { WeatherFieldSpan } from "./WeatherField.styled";
import { useDispatch, useSelector } from "react-redux";
import { WiDaySunny } from "weather-icons-react";
import { Formik, Field, Form } from "formik";
import { fetchUserWeather } from "../../redux/weather/weatherOperations";

const WeatherField = () => {
  const dispatch = useDispatch();
  const weatherSelectorData = useSelector(weatherSelector);
  const weatherSelectorMainInfoData = useSelector(weatherSelectorMainInfo);
  const weatherSelectorWindData = useSelector(weatherSelectorWind);
  const weatherSelectorWeatherInfoData = useSelector(
    weatherSelectorWeatherInfo
  );
  // console.log("weatherSelectorData: ", weatherSelectorData);

  const temper = weatherSelectorMainInfoData.temp;

  return (
    <>
      <h2>Weather</h2>
      <WeatherFieldSpan>
        <Formik
          style={{ gridArea: "i" }}
          initialValues={{
            city: "",
          }}
          onSubmit={
            // (city) => console.log(city.city)
            (value) => dispatch(fetchUserWeather(value.city))
          }
        >
          <Form>
            <label htmlFor="city">City</label>
            <Field id="city" name="city" placeholder="Kyiv" />

            <button type="submit">Submit</button>
          </Form>
        </Formik>
        <div
          style={{
            gridArea: "p",
            alignSelf: "center",
            justifySelf: "center",
            justifyItems: "center",
            display: "grid",
            // backgroundColor: "white",
          }}
        >
          <WiDaySunny size={128} color="yellow" />
          {/* <img src={`${weatherSelectorWeatherInfoData[0]?.icon}`} /> */}
          <span>{weatherSelectorWeatherInfoData[0]?.main}</span>
          <span style={{ fontWeight: "200", fontSize: "12px" }}>
            {weatherSelectorWeatherInfoData[0]?.description}
          </span>
        </div>
        <div>
          <h3 style={{ gridArea: "w", justifySelf: "center" }}>
            {weatherSelectorData.city}
          </h3>
          <div style={{ display: "flex", gap: "16px" }}>
            <span>temp: {Math.round(temper)}</span>
            <span>pressure: {weatherSelectorMainInfoData.pressure}</span>
            <span>humidity: {weatherSelectorMainInfoData.humidity}</span>
            <span>Wind Speed: {weatherSelectorWindData.speed}</span>
          </div>
        </div>
      </WeatherFieldSpan>
    </>
  );
};

export default WeatherField;
