'use strict';

const chai = require('chai');
const expect = chai.expect;

const ApacStub = require('./stubs/apac-stub');
const searchAmazon = require('./../lib/search-amazon');

const options = {
  amazon: {
    keys: {
      awsId:     'awsId',
      awsSecret: 'awsSecret',
      assocId:   'assocId'
    },
    search: {
      query: {
        'SearchIndex': 'Books',
        'Keywords': 'javascript',
        'ResponseGroup': 'ItemAttributes,Offers'
      },
      operation: 'ItemSearch',
      daysBack: 365
    }
  },
  twitter: {
    keys: {
      consumer_key:        'consumer_key',
      consumer_secret:     'consumer_secret',
      access_token:        'access_token',
      access_token_secret: 'access_token_secret'
    },
    tweet: {
      prepend: '',
      append: ''
    }
  }
};

const amazon = new ApacStub(options);
const search = options.amazon.search;

describe(`searchAmazon function`, () => {
  it(`Should return an object`, () => {
    let result;
    searchAmazon(amazon, search, data => result = data);
    expect(result).to.be.an('object');
  });
  it(`Should return an object with properties 'date', 'title, 'link'`, () => {
    let result;
    searchAmazon(amazon, search, data => result = data);
    expect(result).to.have.property('date');
    expect(result).to.have.property('title');
    expect(result).to.have.property('link');
  });
});
