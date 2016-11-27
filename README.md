# object-path [![Build Status](https://api.travis-ci.org/vivekimsit/primitive-path.svg?branch=master)](https://travis-ci.org/vivekimsit/primitive-path)

> Given an object finds the path to a primitive or array values.

## Install

```
$ npm install --save primitive-path
```

## Usage

```js
const findPrimitives = require('primitive-path');

function log(val, name, path) {
  console.log(path.join('.') + '.' + name + '=' + value);
}

findPrimitives(deep, log, 'foo' /* opt_name */, ['window'] /* opt path prefix */);
```
