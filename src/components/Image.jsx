import React, { useState, useEffect, useRef } from 'react';
import './Image.css';

import Legend from './Legend';
import If from './If';

let imgUrl = [
  'https://images.freeimages.com/images/large-previews/a61/vikingland-1316664.jpg',
  'https://cdn.pixabay.com/photo/2021/11/22/16/46/nature-6816877_960_720.jpg',
];

export default (props) => {
  const [imgIndex, setImgIndex] = useState(0);
  const imgRef = useRef(null);

  const changeImage = () => {
    console.log('click');
    let novoIndex = 0;
    if (imgIndex < imgUrl.length - 1) novoIndex = imgIndex + 1;

    setImgIndex(novoIndex);
  };

  console.log(imgIndex);

  return (
    <div className="fundo">
      <img
        ref={imgRef}
        src={imgUrl[imgIndex]}
        alt="Imagem"
        onClick={() => changeImage()}
      />
      <img
        src={imgUrl[imgIndex]}
        alt="Imagem hidden"
        onClick={() => changeImage()}
      />
      <If test={props.legenda}>
        <Legend visible={true} text={props.legenda} />
      </If>
    </div>
  );
};
