import React, { useState, useEffect, useRef } from 'react';
import './Image.css';

import Legend from './Legend';
import If from './If';

export default (props) => {
  const imgUrl = [
    'https://images.freeimages.com/images/large-previews/a61/vikingland-1316664.jpg',
    'https://cdn.pixabay.com/photo/2021/11/22/16/46/nature-6816877_960_720.jpg',
  ];

  return (
    <div className="fundo">
      <img src={imgUrl[0]} alt="Imagem" />
      <If test={props.legenda}>
        <Legend visible={true} text={props.legenda} />
      </If>
    </div>
  );
};
