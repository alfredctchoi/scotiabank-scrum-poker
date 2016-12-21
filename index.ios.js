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
  TouchableWithoutFeedback
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
    this.renderCardsContainer = this.renderCardsContainer.bind(this);
    this.reset = this.reset.bind(this);
    this.showValue = this.showValue.bind(this);

    this.state = {
      selectedIndex: null,
      isShowValue: false
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require('./src/assets/images/scotia.png')}
                 style={styles.logo}
                 resizeMode={Image.resizeMode.contain}/>
        </View>
        {this.renderCardsContainer()}
      </View>
    );
  }

  renderCardsContainer() {
    if (this.state.isShowValue && this.state.selectedIndex !== null) {
      return <LargeCard onPress={this.reset} index={this.state.selectedIndex}
                        cardStyle={{backgroundColor: getColourFromIndex(this.state.selectedIndex)}}>
        <StyledText style={styles.displayValueText}>
          {FIB[this.state.selectedIndex]}
        </StyledText>
      </LargeCard>;
    } else if (this.state.selectedIndex === null) {
      return <View style={styles.cardsContainer}>
        {this.renderCards()}
      </View>;
    }

    return <LargeCard onPress={this.showValue}>
      <Image source={require('./src/assets/images/df-logo.png')}
             style={styles.touchContainerBackLogo}
             resizeMode={Image.resizeMode.contain}/>
    </LargeCard>;
  }

  renderCards() {
    return FIB.map((num, i) => <Card key={num} onPress={this.selectCard} index={i} value={num}/>)
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
  cardsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 20
  },
  logo: {
    width: 200,
    height: 50
  },
  touchContainerBackLogo: {
    width: 300
  },
  displayValueText: {
    fontSize: 180,
    fontWeight: '400',
    color: '#FFFFFF'
  }
});

AppRegistry.registerComponent('ScotiabankScrumPoker', () => ScotiabankScrumPoker);
