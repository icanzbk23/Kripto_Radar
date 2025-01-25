import React, { useEffect, useState } from "react";
import Button from "../Button";
import TemporaryDrawer from "./drawer";
import "./styles.css";
import Switch from "@mui/material/Switch";
import { toast } from "react-toastify";

function Header() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") == "dark" ? true : false
  );

  useEffect(() => {
    if (localStorage.getItem("theme") == "dark") {
      setDark();
    } else {
      setLight();
    }
  }, []);

  const changeMode = () => {
    if (localStorage.getItem("theme") != "dark") {
      setDark();
    } else {
      setLight();
    }
    setDarkMode(!darkMode);
    toast.success("Tema Değiştirildi!");
  };

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  return (
    <div className="header">
      <h1>
        KriptoRadar<span style={{ color: "var(--blue)" }}>.</span>
      </h1>
      <div className="links">
        <Switch checked={darkMode} onClick={() => changeMode()} />
        <a href="/">
          <p className="link">Ev</p>
        </a>
        <a href="/compare">
          <p className="link">Kıyas</p>
        </a>
        <a href="/watchlist">
          <p className="link">İzleme Listesi</p>
        </a>
        <a href="/dashboard">
          <Button text={"Kontrol Paneli"} />
        </a>
      </div>
      <div className="drawer-component">
        <TemporaryDrawer />
      </div>
    </div>
  );
}

export default Header;
