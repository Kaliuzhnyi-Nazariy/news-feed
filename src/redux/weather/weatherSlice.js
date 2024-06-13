import { createSlice } from "@reduxjs/toolkit";
import { fetchUserWeather, fetchWeather } from "./weatherOperations";

const initialState = {
  wholeInfo: [],
  weather: {
    city: "",
    weatherInfo: [],
    mainInfo: {},
    wind: {},
  },
  isLoading: false,
  error: "",
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.isLoading = true;
        state.error = ""; // Clear any previous errors
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.isLoading = false;
        state.wholeInfo = action.payload;
        state.weather.city = action.payload.name;
        state.weather.weatherInfo = action.payload.weather;
        state.weather.mainInfo = action.payload.main;
        state.weather.wind = action.payload.wind;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchUserWeather.pending, (state) => {
        state.isLoading = true;
        state.error = ""; // Clear any previous errors
      })
      .addCase(fetchUserWeather.fulfilled, (state, action) => {
        state.isLoading = false;
        state.wholeInfo = action.payload;
        state.weather.city = action.payload.name;
        state.weather.weatherInfo = action.payload.weather;
        state.weather.mainInfo = action.payload.main;
        state.weather.wind = action.payload.wind;
      })
      .addCase(fetchUserWeather.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const weatherSliceReducer = weatherSlice.reducer;
