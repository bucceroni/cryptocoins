import React from "react";
import logo from '../img/gama.png'

const Header = () => {
  return (
    <div className="row justify-content-around align-items-center bg-secondary py-2 mb-5">
      {/* <img className="bg-light rounded-circle" src={logo} /> */}
      <img src={logo} />
      <h1>Criptomoedas</h1>
    </div>
  );
};

export default Header;
