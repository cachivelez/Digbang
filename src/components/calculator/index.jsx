import React from 'react';
import Currency from 'react-currency-formatter';
import style from './styles.scss';
import SliderComponent from '../slider';

// Formato moneda

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalAmount: 5000,
      term: 3,
      valuePerMonth: 0,
    };
    this.setTotalAmount = this.setTotalAmount.bind(this);
    this.setTerm = this.setTerm.bind(this);
    this.setValuePerMonth = this.setValuePerMonth.bind(this);
  }

  setTotalAmount(value) {
    const { totalAmount, term } = this.state;
    this.setState(() => ({ totalAmount: value }));
    this.setValuePerMonth(totalAmount, term);
  }

  setTerm(value) {
    const { totalAmount, term } = this.state;
    this.setState(() => ({ term: value }));
    this.setValuePerMonth(totalAmount, term);
  }

  setValuePerMonth(totalAmount, term) {
    this.setState(() => ({ valuePerMonth: totalAmount / term }));
  }

  componentDidMount() {
    const { totalAmount, term } = this.state;
    this.setValuePerMonth(totalAmount, term);
  }

  render() {
    const { totalAmount, term, valuePerMonth } = this.state;
    return (
      <div className={style.card}>
        <h1 className={style.h1Styles}>Simulá tu crédito</h1>
        <div>
          <SliderComponent
            value={totalAmount}
            setMethod={this.setTotalAmount}
            min={5000}
            max={50000}
            minText="$5.000"
            maxText="$50.000"
            title="MONTO TOTAL"
            currency
          />
          <SliderComponent
            value={term}
            setMethod={this.setTerm}
            min={3}
            max={24}
            minText="3"
            maxText="24"
            title="PLAZO"
            currency={false}
          />
        </div>
        <div className={style.total}>
          <h3>CUOTA FIJA POR MES</h3>
          <h2>
            <Currency quantity={valuePerMonth} currency="ARS" />
          </h2>
        </div>
        <div className={style.btnContent}>
          <button type="button" className={style.btnOk}>
            OBTENÉ CRÉDITO
          </button>
          <button type="button" className={style.btnDetails}>
            VER DETALLE DE CUOTAS
          </button>
        </div>
      </div>
    );
  }
}

Calculator.propTypes = {};

export default Calculator;
