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
    <>
      <div className="bg-[url('../../src/assets/images/abstract-digital-technology-background-with-concept-security-vector.jpg')] w-[100%] h-[100vh] bg-no-repeat bg-center">
        <div className="flex justify-between px-[100px] py-[140px] text-white">
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
              <div>
                <h1 className="text-[25px] text-center mb-[15px] font-[650]">
                  {t("Login")}
                </h1>
                <Field
                  className="w-[400px] mb-[20px] py-[14px] px-[20px] rounded-md shadow-md text-[17px] font-[600] bg-transparent border-[white] border-[1px] border-[solid]"
                  name="userName"
                  placeholder="Acount"
                />{" "}
                <br />
                <Field
                  className="w-[400px] mb-[15px] py-[14px] px-[20px] rounded-md shadow-md text-[17px] font-[600] bg-transparent border-[white] border-[1px] border-[solid]"
                  name="password"
                  placeholder="password"
                  type="password"
                />{" "}
                <br />
                <h1 className="text-[17px] mb-[15px] font-[700] w-[420px]">
                  {t("By using this form you agree  with our terms of use")}
                </h1>
                <p className="mb-[15px] text-[15px] text-[white]">
                  {t("Login by phone number")}
                </p>
                <div className="flex items-center mb-[15px]">
                  <p className="w-[160px] border-[1px]  border-[#white]"></p>
                  <p className="text-[20px] font-[700] mx-[20px] text-[white]">
                    {t("or")}
                  </p>
                  <p className="w-[160px] border-[1px] border-[#white]"></p>
                </div>
                {
                  <Button
                    sx={{ width: "400px", height: "50px" }}
                    type="submit"
                    variant="contained"
                  >
                    {t("Log In")}
                  </Button>
                }
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Login;
