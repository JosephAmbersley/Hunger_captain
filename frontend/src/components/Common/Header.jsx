import React from "react";
import Mainbanner from "../../assets/img/background-img.png";
import logo from "../../assets/img/logo-img.png";
import whitebanner from "../../assets/img/white-border.svg";

const Header = () => {
  return (
    <>
      <header>
        <img src={Mainbanner} alt="" />
        <img className="white-border" src={whitebanner} alt="" />
      </header>
      <section className="logo">
        <img src={logo} alt="" />
      </section>
      <section className="text">
        <p>
          Good food is <br /> The Foundation of <br />{" "}
          <span>GENUINE HAPPINESS</span>
        </p>
      </section>
    </>
  );
};

export default Header;
