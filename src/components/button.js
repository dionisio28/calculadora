import React from 'react';
import { TouchableOpacity } from 'react-native';
import {TitleButton} from './styles';

export default ({label = '', onPress = () => null, width = 1, operation = false}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => onPress(label)}>
      <TitleButton operation={operation} width={width}>{label}</TitleButton>
    </TouchableOpacity>
  );
};
