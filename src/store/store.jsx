import { configureStore } from "@reduxjs/toolkit";
import todoListSlice from "../reducer/todoList/todoListSlice";
import cartSlice from "../reducer/cart/cartSlice";

export const store = configureStore({
  reducer: {
    todoList: todoListSlice,
    cart: cartSlice
  },
});
