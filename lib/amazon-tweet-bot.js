'use strict';

const Twit = require('twit');
const Apac = require('apac').OperationHelper;
const dayChange = require('daychange');
const searchAmazon = require('./search-amazon');
const shareTweet = require('./share-tweet');

class AmazonTweetBot {
  constructor(options) {
    if (typeof options !== 'object') {
      throw new TypeError(`'Options' argument must be an object.`);
    }
    this.amazon = new Apac(options.amazon.keys);
    this.search = options.amazon.search;
    this.twitter = new Twit(options.twitter.keys);
    this.tweet = options.twitter.tweet;
  }
  tweetRandomLink(callback) {
    searchAmazon(this.amazon, this.search, (data) => {
      shareTweet(this.twitter, this.tweet, data, (result) => {
        return callback(result);
      });
    });
  }
}

module.exports = AmazonTweetBot;
