import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 0,
};

const pageCountSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    nextPage: (state) => {
      state.currentPage = state.currentPage + 1;
    },
  },
});

export default pageCountSlice.reducer;
export const { nextPage } = pageCountSlice.actions;
