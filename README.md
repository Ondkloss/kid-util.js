# KID util

[![Build Status](https://travis-ci.com/Ondkloss/kid-util.js.svg?branch=master)](https://travis-ci.com/Ondkloss/kid-util.js)

**Development moved to NPM package `norwegian-numbers`: [GitHub](https://github.com/Ondkloss/norwegian-numbers.js) [npm](https://www.npmjs.com/package/norwegian-numbers)**

Simple utils to generate and verify KID numbers with either MOD10 or MOD11.

## Installation

To install from NPM as a package in your environment:

    npm install kid-util

## Code usage from installation

Example code usages after installation:

    > const kid = require('kid-util');
    undefined
    > kid.make('1234');
    '12344'
    > kid.make('1234', 'MOD11');
    '12343'
    > kid.verify('12344');
    true
    > kid.verify('12343', 'MOD11');
    true

## Testing from source

To run the tests:

    mocha

Or:

    npm test

## Distribution

The distribution was created by the following commands:

    npm publish --access public

## Notes

This repo is a JavaScript port of my Python [kid-util](https://github.com/Ondkloss/kid-util) repo.