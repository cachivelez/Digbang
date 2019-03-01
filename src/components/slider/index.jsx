import React from 'react';
import PropTypes from 'prop-types';

// Formato moneda
import Currency from 'react-currency-formatter';

// Slider de Material UI
import Slider from '@material-ui/lab/Slider';
import style from './styles.scss';

class SliderComponent extends React.Component {
  // Al modificar el slider
  handleChange = (event, value) => {
    const { setMethod } = this.props;
    setMethod(value);
  };

  // Validamos si el value del slider es de tipo moneda o no
  checkValueType = (value, currency) => {
    if (currency) {
      return <Currency quantity={value} currency="ARS" />;
    }
    return <b>{value}</b>;
  };

  render() {
    const { title, value, min, max, minText, maxText, currency } = this.props;
    return (
      <div className={style.container}>
        <div className={style.labelContainer}>
          <span>{title}</span>
          <span className={style.value}>
            {this.checkValueType(value, currency)}
          </span>
        </div>
        <Slider
          className={style.slider}
          value={value}
          onChange={this.handleChange}
          min={min}
          max={max}
          step={1}
        />
        <div className={style.labelContainer}>
          <span>{minText}</span>
          <span>{maxText}</span>
        </div>
      </div>
    );
  }
}
const { string, number, bool, func } = PropTypes;
SliderComponent.propTypes = {
  title: string,
  value: number,
  min: number,
  max: number,
  minText: string,
  maxText: string,
  currency: bool,
  setMethod: func,
};

export default SliderComponent;
