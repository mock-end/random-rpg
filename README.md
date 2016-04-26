# random-rpg

> Return an array of dice values.

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/random-rpg /blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/mock-end/random-rpg /master.svg?style=flat-square)](https://travis-ci.org/mock-end/random-rpg )
[![coverage:?](https://img.shields.io/coveralls/mock-end/random-rpg /master.svg?style=flat-square)](https://coveralls.io/github/mock-end/random-rpg )

Given an input looking like `#d#`, where the first `#` is the number of dice to roll and the second `#` is the max of each die, then returns an array of dice values.


## Install

```
$ npm install --save random-rpg  
```

## Usage

```js
var randomRpg = require('random-rpg ');

// API
// - randomRpg(schema[, options]);

randomRpg('3d10');
// => [1, 6, 9]

randomRpg('5d6');
// => [3, 1, 2, 5, 2]
```

Optionally specify a sum be returned rather than an array of dice.

```js
randomRpg('3d10', {sum: true});
// => 14
```

## Related

- [random-uuid](https://github.com/mock-end/random-uuid) - Return a random uuid.
- [random-identity](https://github.com/mock-end/random-identity) - Return a random ID.
- [random-dx](https://github.com/mock-end/random-dx) - Return a value equal to the roll of a die.
- [random-hexhash](https://github.com/mock-end/random-hexhash) - Return a random hex hash.
- [random-normal](https://github.com/mock-end/random-normal) - Return a normally-distributed random variate.
- [random-rpg](https://github.com/mock-end/random-rpg) - Return an array of dice values.
- [random-file](https://github.com/mock-end/random-file) - Return a random file name with random extension.
- [random-semver](https://github.com/mock-end/random-semver) - Return a random semver version.

## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-rpg /issues/new).
