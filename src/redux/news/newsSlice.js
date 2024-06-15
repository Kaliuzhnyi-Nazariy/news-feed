import { createSlice } from "@reduxjs/toolkit";
import {
  fatchLastNews,
  newsFatchByLanguage,
  newsFetchByWord,
} from "./newsOperations";

const initialState = {
  news: [],
  isLoading: false,
  error: "",
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(newsFetchByWord.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(newsFetchByWord.fulfilled, (state, action) => {
        state.isLoading = false;
        state.news = action.payload.news;
      })
      .addCase(newsFetchByWord.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(newsFatchByLanguage.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(newsFatchByLanguage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.news = action.payload.news;
      })
      .addCase(newsFatchByLanguage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fatchLastNews.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(fatchLastNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.news = action.payload.news;
      })
      .addCase(fatchLastNews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const newsSliceReducer = newsSlice.reducer;
