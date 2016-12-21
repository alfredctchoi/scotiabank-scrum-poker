import {colourArray} from '../constants/colours'

export const noop = () => {};

export const randomNumberBetween = (start, end) => {
  return Math.floor(Math.random() * end) + start;
};

export const getColourFromIndex = (index) => {
  return colourArray[index % colourArray.length];
};

export const getRandomColour = () => {
  return colourArray[randomNumberBetween(0, colourArray.length - 1)];
};