import React from "react";
import axios from "axios"


// handleConvertValue(){
//   let valor = document.getElementById("conversor-input").value;

//   let select = document.getElementById("conversor-select");
//   let moeda = select.options[select.selectedIndex].value;

//   axios.get(
//     "https://api.coinmarketcap.com/v1/ticker/" + moeda + "/?convert=BRL");

//   let resposta = JSON.parse(request.response);
//   let total = valor / resposta[0].price_brl;
//   document.getElementById("conversor-resultado").innerText = total;
// }

const Simulator = () => {
  return (
    <div className="bg-light p-2">
      {/* title */}
      <h3>Conversor</h3>

      {/* Input */}
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">R$</span>
        </div>
        <input
          id="conversor-input"
          type="number"
          className="form-control"
          aria-label="Amount (to the nearest dollar)"
        />
        <div className="input-group-append">
          <span className="input-group-text">,00</span>
        </div>
      </div>

      {/* Select */}
      <select className="form-control mb-3" id="conversor-select">
        <option value="bitcoin">Bitcoin</option>
        <option value="ethereum">Ethereum</option>
        <option value="dogecoin">Doge Coin</option>
      </select>

      {/* Button */}
      <button
        id="conversor-button"
        onclick="converteValor()"
        type="button"
        className="btn btn-info btn-block mb-3"
      >
        Converter
      </button>

      {/* Result */}
      <strong>Resultado:</strong>
      <span id="conversor-resultado" />
    </div>
  );
};

export default Simulator;
