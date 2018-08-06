import React from "react";

const Links = () => {
  return (
    <div>
      <div className="card mb-5">
        <div className="card-body">
          <h5 className="card-title">Links</h5>
        </div>
        <ul className="list-group">
          <li className="list-group-item">
            <a href="https://www.google.com.br/search?q=bitcoin">Bitcoin</a>
          </li>
          <li className="list-group-item">
            <a href="https://www.google.com.br/search?q=ethereum">Ethereum</a>
          </li>
          <li className="list-group-item">
            <a href="https://www.google.com.br/search?q=dogecoin">DOGE Coin</a>
          </li>
          <li className="list-group-item">
            <a href="https://www.google.com.br/search?q=cagecoin">Cage Coin</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Links;
