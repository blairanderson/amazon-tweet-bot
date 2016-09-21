'use strict';

const chai = require('chai');
const expect = chai.expect;

const AmazonTweetBot = require('../lib/amazon-tweet-bot');
const TwitStub = require('./stubs/twit-stub');
const ApacStub = require('./stubs/apac-stub');

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

const testBot = new AmazonTweetBot(options);

describe('AmazonTwitterBot tweetRandomLink method', () => {
  it(`Should return a string`, () => {
    let result;
    testBot.amazon = new ApacStub(options);
    testBot.twitter = new TwitStub(options);
    testBot.tweetRandomLink(data => result = data);
    expect(result).to.be.a('string');
  });
});
