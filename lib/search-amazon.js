'use strict';

const util = require('util');
const makeRandom = require('make-random');
const dayChange = require('daychange');
const amazonResultsHelper = require('./amazon-results-helper');
const getRandomArrayItem = require('./get-random-array-item');

function searchAmazon(amazon, search, callback) {
  let date;
  if (search.daysBack) {
    date = dayChange.sub(search.daysBack, 'iso').substring(0, 10);
  } else {
    date = '0000-00-00';
  }
  amazon.execute(search.operation, queryHelper(search.query), (error, data) => {
    if (error) {
      return callback(error, null);
    } else {
      return callback(null, getRandomArrayItem(amazonResultsHelper(date, data)));
    }
  });
}

function queryHelper(items) {
  return {
    'SearchIndex': items.SearchIndex,
    'Keywords': items.Keywords,
    'ResponseGroup': items.ResponseGroup,
    'ItemPage': makeRandom.ceil(10)
  };
}

module.exports = searchAmazon;
