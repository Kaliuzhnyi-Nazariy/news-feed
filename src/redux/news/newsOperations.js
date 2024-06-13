import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const apiKey = "wUL9o60Y-PvSlqAcUkN22s0z2mNez6JeCbmV4aMXRwrv1nIx";

export const newsFetchByWord = createAsyncThunk(
  "news/byWord",
  async ({ credentials, pageNumber }, thunkAPI) => {
    console.log(credentials);
    try {
      const res = await axios.get(
        `https://api.currentsapi.services/v1/search?keywords=${credentials}&apiKey=${apiKey}&page_number=${pageNumber}&page_size=10`
      );
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

let pageNumber = 1;

export const newsFatchByLanguage = createAsyncThunk(
  "news/byLang",
  async ({ credential, pageNumber }, thunkAPI) => {
    console.log(credential, pageNumber);
    try {
      const res = await axios.get(
        `https://api.currentsapi.services/v1/latest-news?language=${credential}&apiKey=${apiKey}&page_number=${pageNumber}&page_size=10`
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fatchLastNews = createAsyncThunk(
  "news/latest",
  async (pageNumber, thunkAPI) => {
    console.log("news/latest");
    try {
      const res = await axios.get(
        `https://api.currentsapi.services/v1/latest-news?apiKey=${apiKey}&page_number=${pageNumber}&page_size=10`
      );
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
