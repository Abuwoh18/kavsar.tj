import React, { useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { DeleteCart, getCart, PostCart } from "../../reducer/cart/cartSlice";
import { getData } from "../../reducer/category/categorySlice";
import { useTranslation } from "react-i18next";

const Product = () => {
  const { t, i18n } = useTranslation();
  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
  }
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
    dispatch(getCart());
  }, []);
  let data = useSelector((state) => state.category.data);
  let data2 = useSelector((state) => state.todoList.data);
  let data1 = useSelector((state) => state.cart.data1);
  let pathname = useLocation();
  let [status,setStatus] = useState(false)

  let [cat, SetCat] = useState("");

  return (
    <>
      <div className="flex w-full justify-between py-[70px] px-[20px]">
        <div className="flex w-[250px] h-[270px] sticky top-56 rounded-lg shadow-lg ml-[30px] dark:bg-[white]">
          <div className="">
            {data?.map((el) => {
              return (
                <div
                  key={el.id}
                  className={`w-[250px] py-[10.5px] px-[25px] ${
                    cat == el.id && "bg-[#d8d7d7] text-[#1a3274]"
                  }`}
                >
                  <h1
                    className="text-[16px] font-bold"
                    onClick={() => {SetCat(el.id), setStatus(true)}}
                  >
                    {el.title}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>

        {/* ]  [data2 == ''{
          return (
            <div className="flex justify-center items-center h-[200px] text-gray-700 text-[15px]">
              <p>{t("No product found")}</p>
            </div>
          );
        }:null} */}
        {status == false && (
          <div>
            <div className="flex justify-center items-center h-[200px] text-gray-700 text-[15px]">
              <p>{t("No product found")}</p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-3 justify-center gap-6 px-[25px] mb-[20px] text-left mt-[10px] dark:bg-[#080F1D]">
          {data2
            .filter((e) => {
              return e.categoryId == cat;
            })
            ?.map((el) => (
              <div
                key={el.id}
                className="relative overflow-hidden w-[250px] transform rounded-xl bg-white shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105"
              >
                <div className="relative">
                  <img
                    className="w-full h-48 object-cover rounded-t-xl"
                    src={el.avatar}
                    alt={el.name}
                  />
                  <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 hover:opacity-90 transition-opacity duration-500">
                    <div className="absolute top-2 right-2">
                      <button
                        onClick={() => {
                          data1.find((elem) => elem.name === el.name)
                            ? dispatch(
                                DeleteCart(
                                  data1.find((elem) => elem.name === el.name).id
                                )
                              )
                            : dispatch(PostCart(el));
                        }}
                      >
                        {data1.find((elem) => elem.name === el.name) ? (
                          <ShoppingCartIcon className="w-10 h-10 text-[lightgreen] mt-[15px] mr-[15px]" />
                        ) : (
                          <ShoppingCartIcon className="w-10 h-10 text-[#161f53] mt-[15px] mr-[15px]" />
                        )}
                      </button>
                    </div>
                    <div className="text-white text-xs font-semibold">
                      <Link
                        className={pathname === "/"}
                        to={`/getbyid/${el.id}`}
                      >
                        {data1.find((elem) => elem.name === el.name) ? (
                          <button className="bg-[lightgreen] text-[white] w-[260px] px-[5px] py-[5px] relative top-[85px]">
                            {t("Quick view")}
                          </button>
                        ) : (
                          <button className="bg-[#161f53] text-white w-[260px] px-[5px] py-[5px] relative top-[85px]">
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
      </div>
    </>
  );
};

export default Product;
