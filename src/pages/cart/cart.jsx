import React, { useEffect, useState } from "react";
import { DeleteCart, getCart } from "../../reducer/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";

const Cart = () => {
  const { t, i18n } = useTranslation();
  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
  }

  const dispatch = useDispatch();
  const data1 = useSelector((state) => state.cart.data1);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  useEffect(() => {
    const initialQuantities = data1.reduce((acc, item) => {
      acc[item.id] = 1;
      return acc;
    }, {});
    setQuantities(initialQuantities);
  }, [data1]);

  const handleQuantityChange = (id, delta) => {
    setQuantities((prev) => {
      const newQuantity = (prev[id] || 1) + delta;
      return { ...prev, [id]: newQuantity < 1 ? 1 : newQuantity };
    });
  };

  const calculateTotalPrice = () => {
    return data1.reduce((total, item) => {
      return total + item.price * (quantities[item.id] || 1);
    }, 0);
  };

  return (
    <>
      <div className="w-full h-full bg-[#ffffffb7] flex dark:bg-[#080F1D]">
        <div className="py-8">
          {data1.map((el) => (
            <div
              className="w-[815px] h-[180px] my-12 ml-8 flex shadow-md rounded-xl bg-white"
              key={el.id}
            >
              <img
                className="w-[300px] h-full rounded-xl mr-12"
                src={el.avatar}
                alt=""
              />
              <div>
                <div className="flex items-center py-2.5 mt-4 w-[440px] justify-between mb-14 h-[50px]">
                  <h1 className="text-lg font-semibold text-[#3c3c3c]">
                    {el.name}
                  </h1>
                  <button onClick={() => dispatch(DeleteCart(el.id))}>
                    <CloseIcon />
                  </button>
                </div>
                <div>
                  <div className="flex items-center w-[440px] justify-between">
                    <h1 className="text-lg font-semibold">{el.price}c</h1>
                    <div className="flex items-center">
                      <Button
                        variant="contained"
                        onClick={() => handleQuantityChange(el.id, -1)}
                      >
                        -
                      </Button>
                      <p className="mx-4 text-lg">{quantities[el.id]}</p>
                      <Button
                        sx={{ bgcolor: "red", color: "white" }}
                        variant="contained"
                        onClick={() => handleQuantityChange(el.id, 1)}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[330px] h-[260px] ml-8 mt-[70px] bg-white shadow-md px-5 rounded-xl py-8 mb-12 sticky top-[200px]">
          <button className="w-[90%] bg-red-500 text-white py-2.5 text-lg rounded-md mx-auto ml-2.5">
            {t("Placing an order")}
          </button>
          <p className="w-[90%] ml-2.5 border-[0.5px] border-solid border-[#bcbbbb] mt-5"></p>

          <div className="flex items-center justify-between px-3.5 mt-5">
            <p className="text-sm font-bold text-[#5e5d5d]">{t("Total")}</p>
            <p className="text-base font-semibold">{calculateTotalPrice()}c</p>
          </div>

          <div className="flex items-center justify-between px-[13px] mt-[10px]">
            <p className="text-[14px] font-bold text-[#5e5d5d]">
              {t("Discount")}
            </p>
            <p className="text-[14px] font-semibold">0.00c</p>
          </div>

          <p className="w-[90%] ml-[10px] border-[0.5px] border-solid border-[#bcbbbb] mt-[20px]"></p>

          <div className="flex items-center justify-between px-[13px] mt-[20px]">
            <p className="text-[19px] font-semibold text-[#5e5d5d]">
              {t("Total")}
            </p>
            <p className="text-[19px] font-semibold">
              {calculateTotalPrice()}c
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
