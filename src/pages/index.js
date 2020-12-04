import React, {useState} from 'react';
import {StatusBar} from 'react-native';

import {Display, Button} from '../components';
import {Container, ContainerButtons} from './styles';

const MainScreen = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [clearDisplay, setClearDisplay] = useState(false);
  const [currentOperation, setCurrentOperation] = useState(null);
  const [indexValue, setIndexValue] = useState(0);
  const [lValues, setlValues] = useState([0, 0]);

  const clearValues = () => {
    setDisplayValue('0');
    setClearDisplay(false);
    setCurrentOperation(null);
    setIndexValue(0);
    setlValues([0, 0]);
  };

  const addValue = (value) => {
    const clearCurrentDisplay = displayValue === '0' || clearDisplay;

    if (value === '.' && clearCurrentDisplay && displayValue.includes('.'))
      return;

    const currentValue = clearCurrentDisplay ? '' : displayValue;
    const updateDisplayValue = currentValue + value;
    setDisplayValue(updateDisplayValue);
    setClearDisplay(false)

    if (value !== '.') {
      const newArrayValue = parseFloat(updateDisplayValue);
      const values = [...lValues];
      values[indexValue] = newArrayValue;
      setlValues(values);
    }
  };

  const setOperation = (operation) => {
    if (indexValue === 0) {
      setClearDisplay(true);
      setIndexValue(1);
      setCurrentOperation(operation);
      return;
    }

    const equals = operation === '=';
    const values = [...lValues];

    try {
      values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`);
    } catch (e) {
      values[0] = lValues[0];
    }

    values[1] = 0;

    setDisplayValue(`${values[0]}`);
    setCurrentOperation(equals ? null : operation);
    setIndexValue(equals ? 0 : 1);
    setClearDisplay(true);
    setlValues(values);
  };
  return (
    <Container>
      <StatusBar backgroundColor={'#fa8231'} barStyle={'light-content'} />
      <Display value={displayValue} />
      <ContainerButtons>
        <Button label={'AC'} onPress={clearValues} width={3} />
        <Button label={'/'} onPress={setOperation} operation />
        <Button label={'7'} onPress={addValue} />
        <Button label={'8'} onPress={addValue} />
        <Button label={'9'} onPress={addValue} />
        <Button label={'*'} onPress={setOperation} operation />
        <Button label={'4'} onPress={addValue} />
        <Button label={'5'} onPress={addValue} />
        <Button label={'6'} onPress={addValue} />
        <Button label={'-'} onPress={setOperation} operation />
        <Button label={'1'} onPress={addValue} />
        <Button label={'2'} onPress={addValue} />
        <Button label={'3'} onPress={addValue} />
        <Button label={'+'} onPress={setOperation} operation />
        <Button label={'0'} onPress={addValue} width={2} />
        <Button label={'.'} onPress={addValue} />
        <Button label={'='} onPress={setOperation} operation />
      </ContainerButtons>
    </Container>
  );
};

export default MainScreen;
