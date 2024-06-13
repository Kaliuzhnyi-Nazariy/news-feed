import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getRandomCity } from "../../utils/randomizeCity";

const apiKey = "4ebe2f77a51e0a7cc1a15a3f284e6c20";
const city = getRandomCity();

export const fetchWeather = createAsyncThunk(
  "weather/defaultWeather",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      return res.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchUserWeather = createAsyncThunk(
  "weather/userWeather",
  async (city, thunkAPI) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      return res.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
