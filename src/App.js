import React, { Component } from "react";
import Header from "./components/Header";
import Description from "./components/Description";
import Table from "./components/Table";
import Links from "./components/Links";
import Simulator from "./components/Simulator";
import Footer from "./components/Footer";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Header />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <Description />
              <Table />
            </div>
            <div className="col-4">
              <Links />
              <Simulator />
            </div>
          </div>
        </div>
        <div className="container">
          <Footer />
        </div>
      </div>
    );
  }
}
