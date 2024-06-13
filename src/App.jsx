import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { fatchLastNews } from "./redux/news/newsOperations";
import { useEffect } from "react";
import { fetchWeather } from "./redux/weather/weatherOperations";
import WeatherField from "./components/weather/WeatherField/WeatherField";
import NewsFied from "./components/NewsField/NewsFied";
// import { newsSelector } from "./redux/news/sellectors";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fatchLastNews(1));
    dispatch(fetchWeather());
  }, [dispatch]);

  // const newsSelectorData = useSelector(newsSelector);
  // console.log(newsSelectorData);
  return (
    <>
      <WeatherField />
      {/* <NewsFied /> */}
    </>
  );
}

export default App;
