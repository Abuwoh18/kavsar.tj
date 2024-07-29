import useDarkSide from "../../src/hook/dark.js";
import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <div>
        <DarkModeSwitch
          size={36}
          sunColor="#f8c057e0 "
          moonColor="#3686A0 "
          checked={darkSide}
          onChange={toggleDarkMode}
        />
      </div>
    </>
  );
}
