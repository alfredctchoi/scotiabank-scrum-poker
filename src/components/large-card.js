/**
 * Created by alfredchoi on 2016-12-20.
 */

import React from 'react'
import {
  Image,
  View,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native'

import {noop} from '../services/helpers'
import {getColourFromIndex, getRandomColour} from '../services/helpers'

const LargeCard = ({children, onPress, index, cardStyle, style}) => {

  const borderStyle = index !== undefined
    ? {borderColor: 'white'}
    : {borderColor: getRandomColour()};

  if (onPress !== noop) {
    return <View style={[styles.cardContainer, style]}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={[styles.cardInner, cardStyle, borderStyle]}>
          {children}
        </View>
      </TouchableWithoutFeedback>
    </View>
  }

  return <View style={[styles.cardContainer, style]}>
    <View style={[styles.cardInner, borderStyle]}>
      {children}
    </View>
  </View>
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexDirection: 'column'
  },
  cardInner: {
    flex: 1,
    borderWidth: 5,
    borderColor: '#D81E05',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
});

LargeCard.defaultProps = {
  onPress: noop
};

export default LargeCard;