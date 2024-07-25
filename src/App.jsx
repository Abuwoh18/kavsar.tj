import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Cart, GetById, Home, Layout, Login } from "./routes/routes";
import AuthCheck from "./utils/authCheck/authCheck";
import ProtectedRout from "./utils/protectedRoutes/protectedRoutes";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <AuthCheck>
            <Login />
          </AuthCheck>
        </Suspense>
      ),
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <ProtectedRout>
                <Home />
              </ProtectedRout>
            </Suspense>
          ),
        },
        {
          path: "/cart",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Cart />
            </Suspense>
          ),
        },
        {
          path: "/getbyid/:id",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <GetById />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
