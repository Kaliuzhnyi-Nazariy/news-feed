import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  fatchLastNews,
  newsFatchByLanguage,
} from "./redux/news/newsOperations";
// import { newsSelector } from "./redux/news/sellectors";
import { useEffect } from "react";
// import { weatherSelector } from "./redux/weather/sellectors";
import { fetchWeather } from "./redux/weather/weatherOperations";
import WeatherField from "./components/WeatherField/WeatherField";
// import { newsSelector } from "./redux/news/sellectors";
import NewsFied from "./components/NewsField/NewsFied";
import { newsSelector } from "./redux/news/sellectors";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fatchLastNews(1));
    dispatch(fetchWeather());
  }, []);

  const newsSelectorData = useSelector(newsSelector);
  console.log(newsSelectorData);
  // const weatherSelectorData = useSelector(weatherSelector);
  // console.log("weatherSelectorData: ", weatherSelectorData);
  // // console.log(newsOperations);
  return (
    <>
      <WeatherField />
      <NewsFied />
    </>
  );
}

export default App;
