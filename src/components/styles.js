import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

export const TitleButton = styled.Text`
  border-width: 1px;
  width: ${(props) => (Dimensions.get('window').width / 4) * props.width}px;
  height: ${Dimensions.get('window').width / 4}px;
  text-align: center;
  border-color: #888;
  padding: 20px;
  color: ${(props) => (props.operation ? '#fff' : '#575757')};
  background-color: ${(props) => (props.operation ? '#fa8231' : '#e8e8e8')};
  font-size: 40px;
`;

export const Display = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  align-items: flex-end;
  width: 100%;
`;

export const DisplayValue = styled.Text`
  font-size: 60px;
  color: #fff;
`;
