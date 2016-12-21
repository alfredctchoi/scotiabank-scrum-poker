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

const LargeCard = ({children, onPress, index, cardStyle}) => {

  const borderStyle = index
    ? {borderColor: getColourFromIndex(index)}
    : {borderColor: getRandomColour()};

  if (onPress !== noop) {
    return <View style={styles.cardContainer}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={[styles.cardInner, cardStyle, borderStyle]}>
          {children}
        </View>
      </TouchableWithoutFeedback>
    </View>
  }

  return <View style={styles.cardContainer}>
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
    borderWidth: 4,
    borderColor: '#D81E05',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

LargeCard.defaultProps = {
  onPress: noop
};

export default LargeCard;