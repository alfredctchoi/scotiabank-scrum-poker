import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import StyledText from './styled-text'
import {colourArray} from '../constants/colours'

const Card = ({value, onPress, index}) => (
  <TouchableOpacity onPress={() => {onPress({value, index})}}
                    style={[styles.container, {backgroundColor: colourArray[index % colourArray.length]}]}>
    <StyledText style={styles.value}>{value}</StyledText>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  value: {
    textAlign: 'center',
    fontSize: 36,
    fontWeight: '600',
    color: '#FFFFFF'
  }
});

export default Card;