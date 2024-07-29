import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import '../../pages/getById/getById.css'
import { EffectCube, Pagination } from "swiper/modules";
import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DeleteCart, getCart, PostCart } from "../../reducer/cart/cartSlice";
import { useTranslation } from "react-i18next";

const GetById = () => {
  const { t, i18n } = useTranslation();
  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
  }

  let { id } = useParams();
  let [data, setData] = useState([]);
  let dispatch = useDispatch();
  async function getData() {
    try {
      let { data } = await axios.get(`http://localhost:3000/data/${id}`);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    dispatch(getCart());
    getData();
  }, []);
  let data1 = useSelector((state) => state.cart.data1);

  return (
    <>
      <div className="flex py-[25px] justify-center items-center">
        <div className="mr-[70px]">
          <Swiper
            effect="cube"
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className="mySwiperCube"
          >
            <SwiperSlide>
              <img
                className="w-[200px] h-[200px]"
                src={data.avatar}
                alt="empty"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-[200px] h-[200px]"
                src={data.avatar1}
                alt="empty"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="overflow-hidden w-[400px] h-[440px]">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-[white]">
              {data.name}
            </h1>
            <div className="flex items-center">
              <span className="text-yellow-500">
                <div className="flex mt-[10px]">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </span>
              <span className="ml-2 text-gray-600 dark:text-[white]">
                / {data.reviews} {t("reviews")}
              </span>
            </div>
            <p className="text-red-500 text-2xl mt-2 dark:text-[orange]">
              {data.price} с.
            </p>
            <button
              className="w-[375px]"
              onClick={() => {
                data1.find((elem) => elem.name == data.name)
                  ? dispatch(
                      DeleteCart(
                        data1.find((elem) => elem.name == data.name).id
                      )
                    )
                  : dispatch(PostCart(data));
              }}
            >
              {data1.find((elem) => elem.name == data.name) ? (
                <button className="mt-3 w-full bg-[lightgreen] text-white py-2 rounded-lg shadow-md text-[17px] font-semibold">
                  {t("Add to Cart")}
                </button>
              ) : (
                <button className="mt-3 w-full bg-[#fc3434] text-white py-2 rounded-lg shadow-md text-[17px] font-semibold">
                  {t("Add to Cart")}
                </button>
              )}
            </button>
          </div>
          <div className="ml-[25px]">
            <h2 className="text-[20px] font-semibold text-[#641a69] dark:text-[white]">
              {t("About the product")}
            </h2>
            <div className="text-gray-600 mt-[10px] dark:text-[white]">
              <div className="py-[7px] flex justify-between">
                <span className="text-[#aaaaaa] font-[550] dark:text-[white]">
                  {t("Country")}:{" "}
                </span>
                <p className="text-right">{data.country}</p>
              </div>
              <div className="py-[5px] flex items-center justify-between">
                <span className="text-[#8e8d8d] font-[550] dark:text-[white]">
                  {t("Color")}:{" "}
                </span>
                <p>{data.color}</p>
              </div>
            </div>
            <a className="block mt-4 text-pink-500 text-left dark:text-[orange]">
              {t("All characteristics and description")}
            </a>
          </div>
        </div>
      </div>

      <div className="p-6 bg-white shadow-lg rounded-lg mt-[20px] dark:bg-[#080F1D]">
        <h1 className="text-xl font-bold text-red-600 dark:text-[orange]">
          {t("Description")}
        </h1>
        <h2 className="mt-4 text-lg font-semibold dark:text-[white]">
          {data.name}
        </h2>
        <p className="mt-2 text-gray-700 dark:text-[white]">
          {data.description}
        </p>

        <div className="mt-6">
          <h2 className="text-lg font-bold dark:text-[white]">
            {t("About the product")}
          </h2>
          <div className="mt-2">
            <div className="flex justify-between border-t border-b py-2">
              <span className="font-semibold dark:text-[white]">
                {t("Type")}
              </span>
              <span className="text-[black] dark:text-[white]">
                {data.type}
              </span>
            </div>
            <div className="flex justify-between border-b py-2">
              <span className="font-semibold dark:text-[white]">
                {t("Price")}
              </span>
              <span className="text-[black] dark:text-[white]">
                {data.price}
              </span>
            </div>
            <div className="flex justify-between border-b py-2">
              <span className="font-semibold dark:text-[white]">
                {t("Width")}
              </span>
              <span className="text-[black] dark:text-[white]">
                {data.Width}
              </span>
            </div>
            <div className="flex justify-between border-b py-2">
              <span className="font-semibold dark:text-[white]">
                {t("Height")}
              </span>
              <span className="text-[black] dark:text-[white]">
                {data.Height}
              </span>
            </div>
            <div className="flex justify-between border-b py-2">
              <span className="font-semibold dark:text-[white]">
                {t("Power")}
              </span>
              <span className="text-[black] dark:text-[white]">
                {data.Power}
              </span>
            </div>
            <div className="flex justify-between border-b py-2">
              <span className="font-semibold dark:text-[white]">
                {t("Nutrition")}
              </span>
              <span className="text-[black] dark:text-[white]">
                {data.Nutrition}
              </span>
            </div>
            <div className="flex justify-between border-b py-2">
              <span className="font-semibold dark:text-[white]">
                {t("Material")}
              </span>
              <span className="text-[black] dark:text-[white]">
                {data.Material}
              </span>
            </div>
            <div className="flex justify-between border-b py-2">
              <span className="font-semibold dark:text-[white]">
                {t("Country")}
              </span>
              <span className="text-[black] dark:text-[white]">
                {data.country}
              </span>
            </div>
            <div className="flex justify-between border-b py-2">
              <span className="font-semibold dark:text-[white]">
                {t("Color")}
              </span>
              <span className="text-[black] dark:text-[white]">
                {data.color}
              </span>
            </div>
            <div className="flex justify-between border-b py-2">
              <span className="font-semibold dark:text-[white]">
                {t("Diameter")}
              </span>
              <span className="text-[black] dark:text-[white]">
                {data.Diameter}
              </span>
            </div>
            <div className="flex justify-between border-b py-2">
              <span className="font-semibold dark:text-[white]">
                {t("Peculiarities")}
              </span>
              <span className="text-[black] dark:text-[white]">
                {data.Peculiarities}
              </span>
            </div>
            <div className="flex justify-between border-b py-2">
              <span className="font-semibold dark:text-[white]">
                {t("Model")}
              </span>
              <span className="text-[black] dark:text-[white]">
                {data.model}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetById;
