import React, { Component } from "react";
import axios from "axios";

export default class Table extends Component {
  state = {
    cryptocoins: []
  };

  async componentDidMount() {
    const cryptocoins = await axios.get(
      "https://api.coinmarketcap.com/v1/ticker/?convert=BRL&limit=10"
    );
    this.setState({ cryptocoins: cryptocoins.data });
  }

  render() {
    const { cryptocoins } = this.state;

    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Rank</th>
            <th scope="col">Nome</th>
            <th scope="col">Simbolo</th>
            <th scope="col">R$</th>
            <th scope="col">US$</th>
          </tr>
        </thead>
        <tbody>
          {cryptocoins.length > 0 &&
            cryptocoins.map(item => {
              // console.log("item: ", item); 
              return (
                <tr key={item.rank}>
                  <th scope="col">{item.rank}</th>
                  <td scope="col">{item.name}</td>
                  <td scope="col">{item.symbol}</td>
                  <td scope="col">{item.price_brl}</td>
                  <td scope="col">{item.price_usd}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    );
  }
}
