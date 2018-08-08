import React, { Component } from "react";

import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/actions";

class Table extends Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.getCryptocoins();
  }

  render() {
    const { cryptocoins } = this.props;

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

Table.propTypes = {
  actions: PropTypes.object.isRequired,
  cryptocoins: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    cryptocoins: state.reducer.cryptocoins
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
)(Table);
