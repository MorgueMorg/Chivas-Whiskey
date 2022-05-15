import React from "react";
import Cards from "react-credit-cards";
import axios from "axios";
import { newApi } from "../../helpers/newApi";

export default class PaymentForm extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  postMoney = async (state) => {
    await axios.post(newApi, this.state);
  };

  render() {
    return (
      <div className="card-form">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form onSubmit={this.postMoney}>
          <input
            type="tel"
            name="number"
            placeholder="Номер карты"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <input
            type="string"
            name="name"
            placeholder="Имя владельца"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <input
            type="tel"
            name="expiry"
            placeholder="Дата карты"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <input
            type="tel"
            name="cvc"
            placeholder="Код карты"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <button type="submit" className="pay-btn">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}
