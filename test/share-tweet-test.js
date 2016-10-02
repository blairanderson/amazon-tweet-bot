'use strict';

const chai = require('chai');
const expect = chai.expect;

const TwitStub = require('./stubs/twit-stub');
const shareTweet = require('./../lib/share-tweet');

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
      prepend: 'what will happen to this text when the tweet is wayyyyy too long?',
      append: 'what will happen to this text when the tweet is wayyyyy too long?'
    }
  }
};

const twitter = new TwitStub(options);
const tweet = options.twitter.tweet;

describe(`shareTweet function`, () => {
  it(`Should return a string`, () => {
    let result;
    let item = {
      date: '2016-01-01',
      title: 'Title',
      link: 'http://t.co/12345678901'
    };
    shareTweet(twitter, tweet, item, (error, data) => {
      result = data;
    });
    expect(result).to.be.a('string');
  });
  it(`Should truncate lengthy tweets`, () => {
    let result;
    let item = {
      date: '2016-01-01',
      title: 'This is an incredibly long title that we want to make sure gets properly truncated, as it is clearly going over the character limit!',
      link: 'http://t.co/12345678901'
    };
    shareTweet(twitter, tweet, item, (error, data) => {
      result = data;
    });
    expect(result.length).to.be.at.most(172);
  });
});
