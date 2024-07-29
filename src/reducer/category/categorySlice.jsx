import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const Api = "http://localhost:3000/category";

export const getData = createAsyncThunk("category/getData", async () => {
  const data = await axios.get(Api);
  return data.data;
});

const CategorySlice = createSlice({
  name: "category",
  initialState: {
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

// export const {} = CategorySlice.actions;

export default CategorySlice.reducer;
