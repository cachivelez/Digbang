import React from 'react';
import PropTypes from 'prop-types';
import style from './styles.scss';

// Formato moneda
import Currency from 'react-currency-formatter';

// Slider de Material UI
import Slider from '@material-ui/lab/Slider';

// Por problemas al compilar jsx, armo templates con js plano :(
class SliderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      value: this.props.value,
      min: this.props.min,
      max: this.props.max,
      minText: this.props.minText,
      maxText: this.props.maxText,
      currency: this.props.currency
    };
    this.handleChange = this.handleChange.bind(this);
    this.checkValueType = this.checkValueType.bind(this);
  }

  // Al modificar el slider
  handleChange(event, value) {
    this.setState(state => ({
      value: value
    }));
    this.props.setMethod(parseInt(value));
  }

  // Validamos si el value del slider es de tipo moneda o no
  checkValueType(currency) {
    if (currency) {
      return React.createElement(
        Currency,
        { quantity: this.state.value, currency: 'ARS' },
        null
      );
    } else {
      return React.createElement('b', null, this.state.value);
    }
  }

  render() {
    return React.createElement(
      'div',
      { className: style.container },
      // React.createElement('h1', null, this.state.value),
      React.createElement(
        'div',
        { className: style.labelContainer },
        React.createElement('span', null, this.state.title),
        React.createElement(
          'span',
          { className: style.value },
          this.checkValueType(this.state.currency)
        )
      ),
      React.createElement(
        Slider,
        {
          className: style.slider,
          value: this.state.value,
          onChange: this.handleChange,
          min: this.state.min,
          max: this.state.max,
          step: 1
        },
        null
      ),
      React.createElement(
        'div',
        { className: style.labelContainer },
        React.createElement('span', null, `${this.state.minText}`),
        React.createElement('span', null, `${this.state.maxText}`)
      )
    );
  }
}

export default SliderComponent;
