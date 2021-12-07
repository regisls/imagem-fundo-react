import React from 'react';
import './style.css';

import Image from './components/Image';
import Legend from './components/Legend';

export default (props) => {
  return (
    <div>
      <Image />
      <Legend visible={true} />
    </div>
  );
};
