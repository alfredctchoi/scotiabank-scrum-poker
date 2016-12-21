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
    justifyContent: 'center',
    margin: 10,
    borderRadius: 10,
    flex: 1
  },
  value: {
    textAlign: 'center',
    fontSize: 42,
    fontWeight: '600',
    color: '#FFFFFF'
  }
});

export default Card;