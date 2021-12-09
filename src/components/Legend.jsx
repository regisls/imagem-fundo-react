import React from 'react';
import './Legend.css';

export default (props) => {
  return (
    <div className="legend">
      <div>{props.text}</div>
      <span className="hide">Esconder</span>
    </div>
  );
};
