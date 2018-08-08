import React, { Component } from "react";

import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/actions";

class Simulator extends Component {
  state = {
    selectCoin: "Choose",
    inputValue: ""
  };

  handleInputValue = event => {
    const { actions, convertResult } = this.props;

    this.setState({
      inputValue: event.target.value
    });

    if (convertResult === 0) {
      return null;
    } else {
      actions.cleanConvertCryptocoins();
    }
  };

  handleSelectCoin = event => {
    const { actions, convertResult } = this.props;

    this.setState({
      selectCoin: event.target.value
    });

    if (convertResult === 0) {
      return null;
    } else {
      actions.cleanConvertCryptocoins();
    }
  };

  handleConvertValue = () => {
    const { inputValue, selectCoin } = this.state;
    const { actions } = this.props;
    actions.convertCryptocoins(inputValue, selectCoin);
  };

  render() {
    const { inputValue, selectCoin } = this.state;
    const { cryptocoins, convertResult } = this.props;
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
        <span>{convertResult}</span>
      </div>
    );
  }
}

Simulator.propTypes = {
  actions: PropTypes.object.isRequired,
  cryptocoins: PropTypes.array.isRequired,
  convertResult: PropTypes.number.isRequired
};

const mapStateToProps = state => {
  return {
    cryptocoins: state.reducer.cryptocoins,
    convertResult: state.reducer.convertResult
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        ...actions
      },
      dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Simulator);
