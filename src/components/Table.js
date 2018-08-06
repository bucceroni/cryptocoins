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
              return (
                <tr key={item.id}>
                  <th scope="row">{item.rank}</th>
                  <td>{item.name}</td>
                  <td>{item.symbol}</td>
                  <td>{item.price_brl}</td>
                  <td>{item.price_usd}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    );
  }
}
