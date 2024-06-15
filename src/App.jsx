import { useDispatch } from "react-redux";
import "./App.css";
import { fatchLastNews } from "./redux/news/newsOperations";
import { useEffect } from "react";
import { fetchWeather } from "./redux/weather/weatherOperations";
import WeatherField from "./components/weather/WeatherField/WeatherField";
import NewsFied from "./components/news/NewsField/NewsFied";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fatchLastNews(1));
    dispatch(fetchWeather());
  }, [dispatch]);

  return (
    <>
      <WeatherField />
      <NewsFied />
    </>
  );
}

export default App;
