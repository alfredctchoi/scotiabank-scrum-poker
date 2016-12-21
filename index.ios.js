/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal
} from 'react-native';

import StyledText from './src/components/styled-text'
import Card from './src/components/card'
import LargeCard from './src/components/large-card'
import {getColourFromIndex} from './src/services/helpers'

const FIB = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

export default class ScotiabankScrumPoker extends Component {
  constructor(props) {
    super(props);

    this.renderCards = this.renderCards.bind(this);
    this.selectCard = this.selectCard.bind(this);
    this.reset = this.reset.bind(this);
    this.showValue = this.showValue.bind(this);

    this.state = {
      selectedIndex: null,
      isShowValue: false
    }
  }

  render() {
    const {isShowValue, selectedIndex} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require('./src/assets/images/scotia.png')}
                 style={styles.logo}
                 resizeMode={Image.resizeMode.contain}/>
        </View>

        {this.renderCards()}
        <Modal animationType={"slide"} transparent={true} visible={!isShowValue && selectedIndex !== null}>
          <LargeCard onPress={this.showValue} style={{marginTop: 125}}>
            <Image source={require('./src/assets/images/df-logo.png')}
                   style={styles.touchContainerBackLogo}
                   resizeMode={Image.resizeMode.contain}/>
          </LargeCard>
        </Modal>
        <Modal animationType={"slide"} transparent={true} visible={isShowValue && selectedIndex !== null}>
          <LargeCard onPress={this.reset} index={this.state.selectedIndex}
                     style={{marginTop: 125}}
                     cardStyle={{backgroundColor: getColourFromIndex(this.state.selectedIndex)}}>
            <StyledText style={styles.displayValueText}>
              {FIB[this.state.selectedIndex]}
            </StyledText>
          </LargeCard>
        </Modal>
      </View>
    );
  }

  renderCards() {
    const tempArray = [];
    const chunkSize = 3;
    for (let i = 0, j = FIB.length; i < j; i += chunkSize) {
      tempArray.push(FIB.slice(i, i + chunkSize));
    }

    return <View style={styles.cardsContainer}>
      {
        tempArray.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.cardsRow}>
            {row.map((num, i) => <Card key={num} onPress={this.selectCard} index={rowIndex * chunkSize + i}
                                       value={num}/>)}
          </View>
        ))
      }
    </View>;
  }

  selectCard({index}) {
    this.setState({
      selectedIndex: index
    });
  }

  reset() {
    this.setState({
      selectedIndex: null,
      isShowValue: false
    });
  }

  showValue() {
    this.setState({isShowValue: true});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 25
  },
  logoContainer: {
    alignItems: 'center',
    height: 75,
    justifyContent: 'center'
  },
  cardsContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  cardsRow: {
    flexDirection: 'row',
    flex: 1
  },
  logo: {
    width: 200,
    height: 50
  },
  touchContainerBackLogo: {
    width: 300
  },
  displayValueText: {
    fontSize: 160,
    fontWeight: '400',
    color: '#FFFFFF'
  }
});

AppRegistry.registerComponent('ScotiabankScrumPoker', () => ScotiabankScrumPoker);
