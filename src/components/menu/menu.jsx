import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { useTranslation } from "react-i18next";

export function NestedMenu() {
  const { t, i18n } = useTranslation();
  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
  }

  const [openMenu, setOpenMenu] = React.useState(false);

  const handleMenuToggle = () => {
    setOpenMenu(!openMenu);
  };

  const [openMenu1, setOpenMenu1] = React.useState(false);

  const handleMenuToggle1 = () => {
    setOpenMenu1(!openMenu1);
  };

  const [openMenu2, setOpenMenu2] = React.useState(false);

  const handleMenuToggle2 = () => {
    setOpenMenu2(!openMenu2);
  };
  const [openMenu3, setOpenMenu3] = React.useState(false);

  const handleMenuToggle3 = () => {
    setOpenMenu3(!openMenu3);
  };
  const [openMenu4, setOpenMenu4] = React.useState(false);

  const handleMenuToggle4 = () => {
    setOpenMenu4(!openMenu4);
  };
  const [openMenu5, setOpenMenu5] = React.useState(false);

  const handleMenuToggle5 = () => {
    setOpenMenu5(!openMenu5);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Menu className="relative">
      <MenuHandler>
        <Button className="flex items-center justify-between text-[#1a3274] w-[120px] py-[12px] bg-[white] border border-gray-300 shadow-md text-[16px] font-mono dark:bg-[#080F1D] dark:text-[white] ab1:hidden">
          <span className="flex items-center px-[10px]">
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              ></path>
            </svg>
            {t("Katalog")}
          </span>
        </Button>
      </MenuHandler>
      <div className="relative z-10">
        <MenuList className="mt-[40px] absolute top-0 left-0">
          <Menu
            placement="right-start"
            open={openMenu}
            handler={setOpenMenu}
            allowHover
          >
            <MenuHandler>
              <MenuItem
                className="flex items-center justify-between w-[200px] py-[6px]"
                onClick={handleMenuToggle}
              >
                Дом
                <ChevronRightIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    openMenu ? "rotate-90" : ""
                  }`}
                />
              </MenuItem>
            </MenuHandler>
            <MenuList className="w-[700px] flex justify-between">
              <MenuItem>
                <div className="text-left ml-[20px]">
                  <h1 className="mb-[15px] mt-[10px]">кухня</h1>
                  <p className="py-[6px]">аксусуари и напитки</p>
                  <p className="py-[6px]">бакали и стакани</p>
                  <p className="py-[6px]">кружки</p>
                  <p className="py-[6px]">каструли и скаваротки</p>
                  <p className="py-[6px]">сервизи и набори </p>
                  <p className="py-[6px]">ножи</p>
                </div>
              </MenuItem>
              <MenuItem>
                <div className="text-left ml-[20px]">
                  <h1 className="mb-[15px] mt-[10px]">ванная</h1>
                  <p className="py-[6px]">аксусуари и напитки</p>
                  <p className="py-[6px]">бакали и стакани</p>
                  <p className="py-[6px]">кружки</p>
                  <p className="py-[6px]">каструли и скаваротки</p>
                  <p className="py-[6px]">сервизи и набори </p>
                  <p className="py-[6px]">ножи</p>
                </div>
              </MenuItem>
              <MenuItem>
                <div className="text-left ml-[20px]">
                  <h1 className="mb-[15px] mt-[10px]">садовая техника</h1>
                  <p className="py-[6px]">аксусуари и напитки</p>
                  <p className="py-[6px]">бакали и стакани</p>
                  <p className="py-[6px]">кружки</p>
                  <p className="py-[6px]">каструли и скаваротки</p>
                  <p className="py-[6px]">сервизи и набори </p>
                  <p className="py-[6px]">ножи</p>
                </div>
              </MenuItem>
            </MenuList>
          </Menu>

          <Menu
            placement="right-start"
            open={openMenu1}
            handler={setOpenMenu1}
            allowHover
            offset={15}
          >
            <MenuHandler>
              <MenuItem
                className="flex items-center justify-between w-[200px] py-[6px]"
                onClick={handleMenuToggle1}
              >
                аксесуари
                <ChevronRightIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    openMenu1 ? "rotate-90" : ""
                  }`}
                />
              </MenuItem>
            </MenuHandler>
            <MenuList className="w-[700px] flex justify-between">
              <MenuItem>
                <div className="text-left ml-[20px]">
                  <h1 className="mb-[15px] mt-[10px]">кухня</h1>
                  <p className="py-[6px]">аксусуари и напитки</p>
                  <p className="py-[6px]">бакали и стакани</p>
                  <p className="py-[6px]">кружки</p>
                  <p className="py-[6px]">каструли и скаваротки</p>
                  <p className="py-[6px]">сервизи и набори </p>
                  <p className="py-[6px]">ножи</p>
                </div>
              </MenuItem>
              <MenuItem>
                <div className="text-left ml-[20px]">
                  <h1 className="mb-[15px] mt-[10px]">ванная</h1>
                  <p className="py-[6px]">аксусуари и напитки</p>
                  <p className="py-[6px]">бакали и стакани</p>
                  <p className="py-[6px]">кружки</p>
                  <p className="py-[6px]">каструли и скаваротки</p>
                  <p className="py-[6px]">сервизи и набори </p>
                  <p className="py-[6px]">ножи</p>
                </div>
              </MenuItem>
              <MenuItem>
                <div className="text-left ml-[20px]">
                  <h1 className="mb-[15px] mt-[10px]">садовая техника</h1>
                  <p className="py-[6px]">аксусуари и напитки</p>
                  <p className="py-[6px]">бакали и стакани</p>
                  <p className="py-[6px]">кружки</p>
                  <p className="py-[6px]">каструли и скаваротки</p>
                  <p className="py-[6px]">сервизи и набори </p>
                  <p className="py-[6px]">ножи</p>
                </div>
              </MenuItem>
            </MenuList>
          </Menu>

          <Menu
            placement="right-start"
            open={openMenu2}
            handler={setOpenMenu2}
            allowHover
            offset={15}
          >
            <MenuHandler>
              <MenuItem
                className="flex items-center justify-between w-[200px] py-[6px]"
                onClick={handleMenuToggle2}
              >
                електроника
                <ChevronRightIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    openMenu2 ? "rotate-90" : ""
                  }`}
                />
              </MenuItem>
            </MenuHandler>
            <MenuList className="w-[700px] flex justify-between">
              <MenuItem>
                <div className="text-left ml-[20px]">
                  <h1 className="mb-[15px] mt-[10px]">кухня</h1>
                  <p className="py-[6px]">аксусуари и напитки</p>
                  <p className="py-[6px]">бакали и стакани</p>
                  <p className="py-[6px]">кружки</p>
                  <p className="py-[6px]">каструли и скаваротки</p>
                  <p className="py-[6px]">сервизи и набори </p>
                  <p className="py-[6px]">ножи</p>
                </div>
              </MenuItem>
              <MenuItem>
                <div className="text-left ml-[20px]">
                  <h1 className="mb-[15px] mt-[10px]">ванная</h1>
                  <p className="py-[6px]">аксусуари и напитки</p>
                  <p className="py-[6px]">бакали и стакани</p>
                  <p className="py-[6px]">кружки</p>
                  <p className="py-[6px]">каструли и скаваротки</p>
                  <p className="py-[6px]">сервизи и набори </p>
                  <p className="py-[6px]">ножи</p>
                </div>
              </MenuItem>
              <MenuItem>
                <div className="text-left ml-[20px]">
                  <h1 className="mb-[15px] mt-[10px]">садовая техника</h1>
                  <p className="py-[6px]">аксусуари и напитки</p>
                  <p className="py-[6px]">бакали и стакани</p>
                  <p className="py-[6px]">кружки</p>
                  <p className="py-[6px]">каструли и скаваротки</p>
                  <p className="py-[6px]">сервизи и набори </p>
                  <p className="py-[6px]">ножи</p>
                </div>
              </MenuItem>
            </MenuList>
          </Menu>

          <Menu
            placement="right-start"
            open={openMenu3}
            handler={setOpenMenu3}
            allowHover
            offset={15}
          >
            <MenuHandler>
              <MenuItem
                className="flex items-center justify-between w-[200px] py-[6px]"
                onClick={handleMenuToggle3}
              >
                мебель
                <ChevronRightIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    openMenu3 ? "rotate-90" : ""
                  }`}
                />
              </MenuItem>
            </MenuHandler>
            <MenuList className="w-[700px] flex justify-between">
              <MenuItem>
                <div className="text-left ml-[20px]">
                  <h1 className="mb-[15px] mt-[10px]">кухня</h1>
                  <p className="py-[6px]">аксусуари и напитки</p>
                  <p className="py-[6px]">бакали и стакани</p>
                  <p className="py-[6px]">кружки</p>
                  <p className="py-[6px]">каструли и скаваротки</p>
                  <p className="py-[6px]">сервизи и набори </p>
                  <p className="py-[6px]">ножи</p>
                </div>
              </MenuItem>
              <MenuItem>
                <div className="text-left ml-[20px]">
                  <h1 className="mb-[15px] mt-[10px]">ванная</h1>
                  <p className="py-[6px]">аксусуари и напитки</p>
                  <p className="py-[6px]">бакали и стакани</p>
                  <p className="py-[6px]">кружки</p>
                  <p className="py-[6px]">каструли и скаваротки</p>
                  <p className="py-[6px]">сервизи и набори </p>
                  <p className="py-[6px]">ножи</p>
                </div>
              </MenuItem>
              <MenuItem>
                <div className="text-left ml-[20px]">
                  <h1 className="mb-[15px] mt-[10px]">садовая техника</h1>
                  <p className="py-[6px]">аксусуари и напитки</p>
                  <p className="py-[6px]">бакали и стакани</p>
                  <p className="py-[6px]">кружки</p>
                  <p className="py-[6px]">каструли и скаваротки</p>
                  <p className="py-[6px]">сервизи и набори </p>
                  <p className="py-[6px]">ножи</p>
                </div>
              </MenuItem>
            </MenuList>
          </Menu>
        </MenuList>
      </div>
    </Menu>
  );
}
