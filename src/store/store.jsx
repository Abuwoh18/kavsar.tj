import { configureStore } from "@reduxjs/toolkit";
import todoListSlice from "../reducer/todoList/todoListSlice";
import cartSlice from "../reducer/cart/cartSlice";
import categorySlice from "../reducer/category/categorySlice";

export const store = configureStore({
  reducer: {
    todoList: todoListSlice,
    cart: cartSlice,
    category: categorySlice
  },
});
