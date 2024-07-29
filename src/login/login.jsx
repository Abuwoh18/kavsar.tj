import React from "react";
import { saveToken } from "../utils/token/token";
import { Field, Form, Formik } from "formik";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { axiosRequest } from "../utils/axiosRequest/axiosRequest";

const Login = () => {
  const { t, i18n } = useTranslation();
  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
  }
  const navigate = useNavigate();

  function pop() {
    if (localStorage.getItem("access_token")) {
      navigate("/");
    }
  }

  async function login(obj) {
    try {
      let { data } = await axiosRequest.post(`/Account/login`, obj);
      saveToken(data?.data);
      pop();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="relative w-full h-screen">
      <img
        className="absolute w-full h-full object-cover"
        src="https://ivdel-dveri.ru/wp-content/uploads/2019/05/maintenance_page_bg-1536x864.jpg"
        alt=""
      />
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="flex items-center justify-center h-full">
        <div className="bg-white p-10 rounded-lg shadow-lg w-96 z-10 animate-fade-in-up absolute left-[750px]">
          <Formik
            initialValues={{
              userName: "",
              password: "",
            }}
            onSubmit={async (values) => {
              login(values);
            }}
          >
            <Form>
              <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
                {t("Login")}
              </h1>
              <Field
                className="w-full mb-4 p-4 rounded bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-200"
                name="userName"
                placeholder="Username"
              />
              <Field
                className="w-full mb-4 p-4 rounded bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-200"
                name="password"
                placeholder="Password"
                type="password"
              />
              <Button
                sx={{
                  width: "100%",
                  height: "50px",
                  marginTop: "10px",
                  background: "linear-gradient(to right, #667eea, #764ba2)",
                  color: "#fff",
                  boxShadow: "0 4px 14px 0 rgba(118, 75, 162, 0.39)",
                  "&:hover": {
                    background: "linear-gradient(to right, #764ba2, #667eea)",
                    transform: "scale(1.05)",
                    transition: "transform 0.3s ease",
                  },
                }}
                type="submit"
                variant="contained"
              >
                {t("Login")}
              </Button>
              <div className="text-center mt-4">
                <p className="text-gray-500">
                  {t("Not a member?")}{" "}
                  <a href="#" className="text-blue-500 hover:underline">
                    {t("Sign Up")}
                  </a>
                </p>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;






