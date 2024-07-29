import React, { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import PlaceIcon from "@mui/icons-material/Place";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Person2Icon from "@mui/icons-material/Person2";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import Menu from "@mui/material/Menu";
import Fade from "@mui/material/Fade";
import { Button, MenuItem } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { destroyToken } from "../../utils/token/token";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { NestedMenu } from "../../components/menu/menu";
import { setSearch } from "../../reducer/todoList/todoListSlice";
import Switcher from "../../switcher/switcher";

const Layout = () => {
  const { t, i18n } = useTranslation();
  function TranslateClick(lang) {
    i18next.changeLanguage(lang);
  }

  let data1 = useSelector((state) => state.cart.data1);
  let pathname = useLocation();
  let navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open1 = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl(null);
  };

  const [anchorEl11, setAnchorEl11] = React.useState(null);
  const open11 = Boolean(anchorEl11);
  const handleClick11 = (event) => {
    setAnchorEl11(event.currentTarget);
  };
  const handleClose11 = () => {
    setAnchorEl11(null);
  };
  const [openMenu, setOpenMenu] = React.useState(false);

  let search = useSelector((state) => state.todoList.search);
  let dispatch = useDispatch();

  return (
    <div>
      <div className="bg-[#1a3274] w-[100%] px-[10px] py-[10px] flex items-center text-[white] justify-between dark:bg-[#080F1D]">
        <div className="flex items-center ml-[15px]">
          <button className="mr-[10px]">
            <PlaceIcon sx={{ width: "20px", height: "20px" }} />
          </button>
          <p className="text-[13px] text-[white] font-semibold">
            {t("Dushanbe")}
          </p>
        </div>

        <div className="flex items-center">
          <div className="flex items-center">
            <button className="mr-[10px]">
              <LocalPhoneIcon sx={{ width: "20px", height: "20px" }} />
            </button>
            <p className="text-[13px] text-[white] font-semibold">2022</p>
          </div>
          <div className="flex items-center px-[35px]">
            <button className="mr-[10px]">
              <MarkunreadIcon sx={{ width: "20px", height: "20px" }} />
            </button>
            <p className="text-[13px] text-[white] font-semibold">
              {t("support@kavsar.tj")}
            </p>
          </div>
        </div>
      </div>

      <div className="px-[25px] py-[10px] bg-[white] flex items-center justify-between shadow-md w-[100%] sticky top-[0] z-[10] dark:bg-[#080F1D]">
        <div className="flex items-center">
          <Link to={"/"}>
            <img
              className="w-[100px] h-[80px] mr-[50px] lg1:mr-[0px]"
              src={"src/assets/images/logo.svg"}
              alt=""
            />
          </Link>

          <NestedMenu />

          <div className="w-[600px] ab:w-[560px] lg:w-[450px] lg1:w-[400px] md:w-[350px] sm1:hidden">
            <Paper
              component="form"
              sx={{
                p: "1px 4px",
                display: "flex",
                alignItems: "center",
                borderRadius: "7px",
                width: "100%",
                marginLeft: "30px",
                marginRight: "20px",
              }}
            >
              <IconButton
                sx={{ p: "12px", color: "#1a3274" }}
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <InputBase
                value={search}
                onChange={(el) => dispatch(setSearch(el.target.value))}
                sx={{ ml: 1, flex: 1, color: "#1a3274" }}
                placeholder={t("Search")}
                inputProps={{ "aria-label": "search google maps" }}
              />
              <IconButton
                type="button"
                sx={{ p: "10px", color: "#1a3274" }}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
            </Paper>
          </div>
        </div>
        <div className="flex items-center text-center">
          <Switcher />
          <div>
            <div>
              <Button
                id="fade-button"
                aria-controls={open11 ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open11 ? "true" : undefined}
                onClick={handleClick11}
              >
                <GTranslateIcon
                  sx={{ width: "30px", height: "35px", color: "lightblue" }}
                />
              </Button>
            </div>
            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl11}
              open={open11}
              onClose={handleClose11}
              TransitionComponent={Fade}
            >
              <MenuItem
                value="en"
                onClick={() => {
                  TranslateClick("en"), handleClose11();
                }}
              >
                En{" "}
                <img
                  className="w-[30px] h-[30px] rounded-full ml-[30px]"
                  src="data:image/png;base64,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"
                  alt=""
                />
              </MenuItem>
              <MenuItem
                value="ru"
                onClick={() => {
                  TranslateClick("ru"), handleClose11();
                }}
              >
                Ru
                <img
                  className="w-[30px] h-[30px] rounded-full ml-[30px]"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAD1BMVEX///8AOabVKx4AMqTTKxXmvQ9FAAAA9UlEQVR4nO3QsQGAMAzAsBT4/2b2eOwqnaAZAAAAAAAAAAAAAAAAAAAAAK69bHPYnJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JS87HNw+aknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk/oBg6TI4mvpq6EAAAAASUVORK5CYII="
                  alt=""
                />
              </MenuItem>
              <MenuItem
                value="tj"
                onClick={() => {
                  TranslateClick("tj"), handleClose11();
                }}
              >
                Tj{" "}
                <img
                  className="w-[30px] h-[30px] rounded-full ml-[38px]"
                  src="data:image/png;base64,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"
                  alt=""
                />
              </MenuItem>
            </Menu>
          </div>

          <div className="mx-[2px]">
            <Link to={"/cart"}>
              <button>
                <ShoppingCartIcon
                  sx={{ width: "35px", height: "35px", color: "#0F3460" }}
                />
              </button>
              <p className="absolute top-[17px] right-[76px] bg-[red] text-[white] w-[17px] h-[17px] rounded-full text-[12px] text-center">
                {data1.length}
              </p>
            </Link>
          </div>

          <div>
            <Button
              id="fade-button"
              aria-controls={open1 ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open1 ? "true" : undefined}
              onClick={handleClick}
            >
              <AccountCircleIcon
                sx={{ width: "35px", height: "35px", color: "lightblue" }}
              />
            </Button>
            <Menu
              onChange={(e) => TranslateClick(el.target.value)}
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={open1}
              onClose={handleClose1}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleClose1}>{t("Profile")}</MenuItem>
              <MenuItem
                onClick={() => {
                  destroyToken(), handleClose1(), navigate("/login");
                }}
              >
                {t("Logout")}
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>

      <Outlet />

      <div className="text-white p-10 w-[100%] h-[660px] py-[130px] bg-[#0F3460] dark:bg-[#0e1524]">
        <div className="flex">
          <div className="mr-[50px] flex lg:flex-wrap">
            <div className="space-y-5 w-[20%] mr-[50px] lg:w-[35%] md:w-[25%] sm:w-[30%]">
              <h2 className="font-bold text-[20px]">{t("About Us")}</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    {t("Career")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    {t("Our stores")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    {t("Terms and Conditions")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    {t("Privacy Policy")}
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4 w-[35%] mr-[50px] lg:w-[42%] md:w-[35%] md:relative left-[40px] sm2:w-[40%]">
              <h2 className="font-bold text-[20px]">{t("For buyers")}</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    {t("Help Center")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    {t("How to buy")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    {t("Track your order")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    {t("Corporate and wholesale purchases")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    {t("Returns and Refunds")}
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-5 w-[30%] lg:mt-[30px] lg:w-[50%]">
              <h2 className="font-bold text-[20px]">{t("Contact")}</h2>
              <address className="not-italic space-y-2">
                <p>{t("734000 Dushanbe Nusratullo Mahsum 9")}</p>
                <p>
                  {t("Email")}:{" "}
                  <a
                    href="mailto:support@kavsar.tj"
                    className="hover:underline"
                  >
                    {t("support@kavsar.tj")}
                  </a>
                </p>
                <p>+992 307 300 300</p>
              </address>
              <div className="flex space-x-4">
                <a
                  href="#"
                  aria-label="Twitter"
                  className="hover:text-gray-400"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="hover:text-gray-400"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="w-[430px] border-[1px] border-[solid] border-[grey] rounded-3xl py-[30px] ab:w-[350px] lg:w-[250px] p-[30px] lg:h-[400px] sm:hidden">
            <img
              className="w-[100%] h-[250px] relative mb-[5px] rounded-xl"
              src="../../../src/assets/images/masterok-mobile.png"
              alt=""
            />
            <p className="text-center relative w-[300px] mt-[30px] lg:w-[200px]">
              {t("Point your camera and download the free MasterOK app")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
