import React, { useEffect, useState } from "react";
import SwiperSlice from "../../components/swiper/swiper";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../reducer/todoList/todoListSlice";
import { Link, useLocation } from "react-router-dom";
import { DeleteCart, getCart, PostCart } from "../../reducer/cart/cartSlice";
import DoneIcon from "@mui/icons-material/Done";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation();
  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
  }
  let pathname = useLocation();
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
    dispatch(getCart());
  }, []);
  let data = useSelector((state) => state.todoList.data);
  let data1 = useSelector((state) => state.cart.data1);

    let search = useSelector((state) => state.todoList.search);
  return (
    <>
      <SwiperSlice/>

      <h1 className="text-center py-[10px] text-[30px] font-[700] text-[#c47026]">
        {t("Our Product")}
      </h1>

      <div className="grid grid-cols-5 justify-center gap-6 p-5 bg-gray-1000 px-[25px]">
        {data.filter((el) => {
          return el.name.toLowerCase().includes(search)
        })
          ?.map((el) => (
          <div
            key={el.id}
            className="overflow-hidden w-57 transform  rounded-xl"
          >
            <div>
              <img
                className="w-full h-48 object-cover relative overflow-hidden w-57 transform transition duration-1000 hover:scale-105 rounded-xl"
                src={el.avatar}
                alt={el.name}
              />
              <div className="absolute inset-0 flex justify-center items-center bg-opacity-30 opacity-0 hover:opacity-90 transition duration-700">
                <div className="absolute top-2 right-2">
                  <button
                    onClick={() => {
                      data1.find((elem) => elem.name == el.name)
                        ? dispatch(
                            DeleteCart(
                              data1.find((elem) => elem.name == el.name).id
                            )
                          )
                        : dispatch(PostCart(el));
                    }}
                  >
                    {" "}
                    {data1.find((elem) => elem.name == el.name) ? (
                      <button>
                        <ShoppingCartIcon className="w-10 h-10 text-[lightgreen] mt-[15px] mr-[15px]" />
                      </button>
                    ) : (
                      <button>
                        <ShoppingCartIcon className="w-10 h-10 text-[#161f53] mt-[15px] mr-[15px]" />
                      </button>
                    )}
                  </button>
                </div>
                <div className="text-white text-10px font-semibold">
                  <Link className={pathname == "/"} to={`/getbyid/${el.id}`}>
                    {data1.find((elem) => elem.name == el.name) ? (
                      <button className="bg-[lightgreen] text-[white] w-[260px] px-[5px] py-[5px] relative top-[15px]">
                        {t("Quick view")}
                      </button>
                    ) : (
                      <button className="bg-[#161f53] text-[white] w-[260px] px-[5px] py-[5px] relative top-[15px]">
                        {" "}
                        {t("Quick view")}
                      </button>
                    )}
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-3">
              <h1 className="text-lg font-semibold text-gray-800 h-[25px]">
                {el?.price}
              </h1>
              <p className="text-gray-600 mt-2 text-[13px] h-[13px]">
                {el.description}
              </p>
              <p className="text-[#260a2f] mt-2 font-[550] text-[15px]">
                {el.name1}
              </p>
            </div>
            <div className="flex items-center mt-2 ml-2 relative bottom-[15px]">
              <svg
                className="w-6 h-6 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927C9.469 2.027 10.531 2.027 10.951 2.927L12.317 6.162L15.903 6.635C16.901 6.771 17.307 7.933 16.597 8.603L13.983 11.084L14.61 14.681C14.767 15.682 13.752 16.403 12.846 15.935L9.5 14.267L6.154 15.935C5.248 16.403 4.233 15.682 4.39 14.681L5.017 11.084L2.403 8.603C1.693 7.933 2.099 6.771 3.097 6.635L6.683 6.162L8.049 2.927H9.049Z" />
              </svg>
              <span className="ml-1 text-gray-600">
                {el.rating} ({el.reviews} {t("Estimates")})
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
