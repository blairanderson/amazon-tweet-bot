'use strict';

const chai = require('chai');
const expect = chai.expect;

const AmazonTweetBot = require('../lib/amazon-tweet-bot');

describe('AmazonTwitterBot constructor function', () => {
  it(`Should only accept an object as its only argument`, () => {
    expect(() => new AmazonTweetBot()).to.throw(TypeError);
    expect(() => new AmazonTweetBot(123)).to.throw(TypeError);
    expect(() => new AmazonTweetBot('test')).to.throw(TypeError);
    expect(() => new AmazonTweetBot(false)).to.throw(TypeError);
    expect(() => new AmazonTweetBot(() => {})).to.throw(TypeError);
  });
});
