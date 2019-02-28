import React from 'react';
import PropTypes from 'prop-types';
import style from './styles.scss';
import SliderComponent from '../slider';

// Formato moneda
import Currency from 'react-currency-formatter';

// Por problemas al compilar jsx, armo templates con js plano :(
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalAmount: 5000,
      term: 3,
      valuePerMonth: 0
    };
    this.setTotalAmount = this.setTotalAmount.bind(this);
    this.setTerm = this.setTerm.bind(this);
    this.setValuePerMonth = this.setValuePerMonth.bind(this);
  }

  setTotalAmount(value) {
    this.setState(state => ({
      totalAmount: value
    }));
    this.setValuePerMonth(this.state.totalAmount, this.state.term);
  }
  setTerm(value) {
    this.setState(state => ({
      term: value
    }));
    this.setValuePerMonth(this.state.totalAmount, this.state.term);
  }
  setValuePerMonth(totalAmount, term) {
    this.setState(state => ({
      valuePerMonth: totalAmount / term
    }));
  }
  componentDidMount() {
    this.setValuePerMonth(this.state.totalAmount, this.state.term);
  }

  render() {
    const { totalAmount, term } = this.state;
    return React.createElement(
      'div',
      { className: style.card },
      React.createElement(
        'h1',
        { className: style.h1Styles },
        'Simulá tu crédito'
      ),
      React.createElement(
        'div',
        null,
        React.createElement(
          SliderComponent,
          {
            value: this.state.totalAmount,
            setMethod: this.setTotalAmount,
            min: 5000,
            max: 50000,
            minText: '$5.000',
            maxText: '$50.000',
            title: 'MONTO TOTAL',
            currency: true
          },
          null
        ),
        React.createElement(
          SliderComponent,
          {
            value: this.state.term,
            setMethod: this.setTerm,
            min: 3,
            max: 24,
            minText: 3,
            maxText: 24,
            title: 'PLAZO',
            currency: false
          },
          null
        )
      ),
      React.createElement(
        'div',
        { className: style.total },
        React.createElement('h3', null, 'CUOTA FIJA POR MES'),
        React.createElement(
          'h2',
          null,
          React.createElement(
            Currency,
            { quantity: this.state.valuePerMonth, currency: 'ARS' },
            null
          )
        )
      ),
      React.createElement(
        'div',
        { className: style.btnContent },
        React.createElement(
          'button',
          { type: 'button', className: style.btnOk },
          'OBTENÉ CRÉDITO'
        ),
        React.createElement(
          'button',
          { className: 'button', className: style.btnDetails },
          'VER DETALLE DE CUOTAS'
        )
      )
    );
  }
}

export default Calculator;
