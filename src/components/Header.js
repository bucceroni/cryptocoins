import React from "react";
import logo from "../img/bitcoin.png";

const Header = () => {
  return (
    <div className="row justify-content-around align-items-center bg-secondary py-2 mb-5">
      <img style={{ width: "100px" }} alt="logo" src={logo} />
      <h1>Criptomoedas</h1>
    </div>
  );
};

export default Header;
