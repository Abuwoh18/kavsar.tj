import { lazy } from "react";

export const Login = lazy(()=> import('../login/login'))
export const Home = lazy(() => import("../pages/home/home"));
export const Cart = lazy(() => import("../pages/cart/cart"));
export const Layout = lazy(() => import("../pages/layout/layout"));
export const GetById = lazy(() => import("../pages/getById/getById"));
export const Product = lazy(() => import("../pages/product/product"));