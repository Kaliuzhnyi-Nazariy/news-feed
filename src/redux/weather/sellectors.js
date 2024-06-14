export const weatherSelector = (state) => state.weather.weather;
export const weatherSelectorWeatherInfo = (state) =>
  state.weather.weather.weatherInfo;
export const weatherSelectorMainInfo = (state) =>
  state.weather.weather.mainInfo;
export const weatherSelectorWind = (state) => state.weather.weather.wind;

export const loadingWeather = (state) => state.weather.isLoading;
export const errorWeather = (state) => state.weather.error;
