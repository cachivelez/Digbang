import React from 'react';
import PropTypes from 'prop-types';
import style from './hello-world.scss';
import SliderComponent from '../slider';

// Por problemas al compilar jsx, armo templates con js plano :(
const HelloWorld = ({ title }) => (
  React.createElement('div', {className:style.card},
    React.createElement('h1', {className:style.h1Styles}, 'Simulá tu crédito'),
    React.createElement('div', null,
      React.createElement(SliderComponent, null, null)
    ),
    React.createElement('div', {className:style.total},
      React.createElement('h3', null, 'CUOTA FIJA POR MES'),
      React.createElement('h2', null, '$2.000')
    ),
    React.createElement('div', {className:style.btnContent},
      React.createElement('button', {type:"button", className: style.btnOk}, 'OBTENÉ CRÉDITO'),
      React.createElement('button', {className:"button", className: style.btnDetails}, 'VER DETALLE DE CUOTAS')
    ),
  )
);

HelloWorld.propTypes = {
  title: PropTypes.string,
};

export default HelloWorld;
