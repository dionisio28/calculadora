import React from 'react';
import {Display, DisplayValue} from './styles';

export default ({value}) => {
  return (
    <Display>
      <DisplayValue numberOfLines={1}>{value}</DisplayValue>
    </Display>
  );
};
