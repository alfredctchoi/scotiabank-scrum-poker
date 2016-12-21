import React from 'react'
import {
  Text,
  StyleSheet
} from 'react-native'

const StyledText = ({children, style}) => (
  <Text style={[styles.text, style]}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Lato'
  }
});

export default StyledText;