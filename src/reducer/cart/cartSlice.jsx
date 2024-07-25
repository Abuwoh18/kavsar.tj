import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let Api = "http://localhost:3000/data1";

export const getCart = createAsyncThunk("cart/getCart", async () => {
  try {
    let { data } = await axios.get(Api);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const PostCart = createAsyncThunk(
  "cart/PostCart",
  async (obj, { dispatch }) => {
    try {
      let { data } = await axios.post(Api, obj);
      dispatch(getCart());
    } catch (error) {
      console.log(error);
    }
  }
);

export const DeleteCart = createAsyncThunk(
  "cart/DeleteCart",
  async (id, { dispatch }) => {
    try {
      let { data } = await axios.delete(`${Api}/${id}`);
      dispatch(getCart());
    } catch (error) {
      console.log(error);
    }
  }
);

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    data1: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCart.fulfilled, (state, action) => {
      state.data1 = action.payload;
    });
  },
});

// export const {} = CartSlice.actions;

export default CartSlice.reducer;
