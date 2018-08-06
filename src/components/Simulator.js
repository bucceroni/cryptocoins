import React, { Component } from "react";
import axios from "axios";

export default class Simulator extends Component {
  state = {
    cryptocoins: [],
    selectCoin: "Choose",
    inputValue: "",
    result: ""
  };

  async componentDidMount() {
    const cryptocoins = await axios.get(
      "https://api.coinmarketcap.com/v1/ticker/?convert=BRL&limit=10"
    );
    this.setState({ cryptocoins: cryptocoins.data });
  }

  handleInputValue = event => {
    this.setState({
      inputValue: event.target.value,
      result: ""
    });
  };

  handleSelectCoin = event => {
    this.setState({
      selectCoin: event.target.value,
      result: ""
    });
  };

  handleConvertValue = () => {
    const { cryptocoins, inputValue, selectCoin } = this.state;

    let coin = cryptocoins.filter(item => {
      if (item.id === selectCoin) {
        return item;
      } else {
      }
    });

    let result = inputValue / coin[0].price_brl;
    this.setState({ result: result });
  };

  render() {
    const { cryptocoins, inputValue, selectCoin, result } = this.state;
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
            type="number"
            className="form-control"
            onChange={event => this.handleInputValue(event)}
            value={inputValue}
            aria-label="Amount (to the nearest dollar)"
          />
          <div className="input-group-append">
            <span className="input-group-text">,00</span>
          </div>
        </div>

        {/* Select */}
        <select
          className="form-control mb-3"
          onChange={event => this.handleSelectCoin(event)}
          value={selectCoin}
        >
          <option value="Choose">Choose</option>
          {cryptocoins.length > 0 &&
            cryptocoins.map(item => {
              return (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              );
            })}
        </select>

        {/* Button */}
        <button
          id="conversor-button"
          disabled={inputValue === "" || selectCoin === "Choose"}
          onClick={this.handleConvertValue}
          type="button"
          className="btn btn-info btn-block mb-3"
        >
          Converter
        </button>

        {/* Result */}
        <strong>Resultado: </strong>
        <span>{result}</span>
      </div>
    );
  }
}
