'use strict';

import test from 'ava';
import m from './';

const deep = {
  foo: {
    bar: true
  }, 
  baz: 2, 
  blurg: {
    fop: {
      hif: [],
      hof: /hi/g, // regExp
      now : new Date(),
      what : "String",
      undef : undefined,
      nulls : null,
      nan : NaN,
    }
  },
  verb : function(){return "hi";},
  cur : 10,
};

test('should return path to primitives', t => {
  const paths = [];
  m(deep, (val, name, path) => {
    path.push(name);
    if (path.length !== 0) {
      paths.push(path);
    }
  }, 'deep');
  t.is(paths.length, 7);
});

test('should exit on some condition', t => {
  const paths = [];
  m(deep, (val, name, path) => {
    if (val === 2) {
      return true;
    };
    paths.push(path);
  }, 'deep');
  t.is(paths.length, 1);
});

test('should return empty path for primitive', t => {
  m("hi", (val, name, path) => {
    t.is(path.length, 0);
  });
});

test('should throw when no callback is provide', t => {
  t.throws(() => m({}), TypeError);
});
