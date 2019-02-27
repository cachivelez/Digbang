import 'rc-slider/assets/index.css';

import React from 'react';
import PropTypes from 'prop-types';
import style from './styles.scss';
import Slider from 'rc-slider';
import Range from 'rc-slider';


const SliderComponent = () => (
  React.createElement('div', {className:style.container},
    React.createElement(Slider, {min:5000,max:50000,defaultValue:5000}, null)
  )
);

SliderComponent.propTypes = {
};

export default SliderComponent;
