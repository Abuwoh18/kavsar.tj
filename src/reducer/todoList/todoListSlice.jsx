import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const Api = "http://localhost:3000";

export const getData = createAsyncThunk("todoList/getData", async () => {
  const data = await axios.get(`${Api}/data`);
  return data.data;
});

const TodoListSlice = createSlice({
  name: "todoList",
  initialState: {
    data: [],
    search: "",
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const { setSearch } = TodoListSlice.actions;

export default TodoListSlice.reducer;
