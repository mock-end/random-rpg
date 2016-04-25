'use strict';

var randomNatural = require('random-natural');

module.exports = function (thrown, options) {

  options = options || {};

  if (!thrown) {
    throw new RangeError('A type of die roll must be included');
  } else {

    var bits = thrown.toLowerCase().split('d');
    if (bits.length !== 2 || !parseInt(bits[0], 10) || !parseInt(bits[1], 10)) {
      throw new Error('Invalid format provided. Please provide #d# where the first # is the number of dice to roll, the second # is the max of each die');
    }

    var rolls = [];

    for (var i = bits[0]; i > 0; i--) {
      rolls[i - 1] = randomNatural({
        min: 1,
        max: bits[1]
      });
    }

    return options.sum
      ? rolls.reduce(function (p, c) { return p + c; })
      : rolls;
  }
};
