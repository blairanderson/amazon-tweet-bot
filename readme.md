# Amazon Tweet Bot

[![Build Status](https://travis-ci.org/johnfoderaro/amazon-tweet-bot.svg?branch=master)](https://travis-ci.org/johnfoderaro/amazon-tweet-bot)

Amazon Tweet Bot is a Node.js module that allows for easily sharing a random tweet containing an Amazon product advertising link.

This module is essentially a wrapper around [Twit](https://github.com/ttezel/twit) and [Apac](https://github.com/dmcquay/node-apac), offering a streamlined API that helps bridge the gap between these two modules, all while hopefully helping the end user make some affiliate cash in the process! 😎 🍻

With that said, all of the typical rules and expectations from both Amazon's Product Advertising API and Twitter's API still apply.

## Getting Started

```shell
npm install amazon-tweet-bot
```

## Examples

```javascript
'use strict';

const AmazonTweetBot = require('amazon-tweet-bot');

const bookBot = new AmazonTweetBot({
  amazon: {
    keys: {
      awsId:     'YOUR AMAZON AWSID HERE',
      awsSecret: 'YOUR AMAZON AWSSECRET HERE',
      assocId:   'YOUR AMAZON ASSOCID HERE'
    },
    search: {
      query: {
        'SearchIndex': 'Books',
        'Keywords': 'best sellers',
        'ResponseGroup': 'ItemAttributes,Offers'
      },
      operation: 'ItemSearch',
      daysBack: 365
    }
  },
  twitter: {
    keys: {
      consumer_key:        'YOUR TWITTER CONSUMER KEY HERE',
      consumer_secret:     'YOUR TWITTER CONSUMER SECRET HERE',
      access_token:        'YOUR TWITTER ACCESS TOKEN HERE',
      access_token_secret: 'YOUR ACCESS TOKEN SECRET HERE'
    },
    tweet: {
      prepend: 'Check out this latest book!',
      append: '#books'
    }
  }
});

bookBot.tweetRandomLink(result => console.log(result));

```

The above example would then tweet and log something like this:

```shell
Sun Sep 18 23:37:20 +0000 2016: Check out this latest book "Title of product" http://amazon.com/product-link \#books
```

## Usage

### `const bookBot = new AmazonTweetBot(options)`

Creates an instance of `AmazonTweetBot`. This requires an options object consisting of several required key/value pairs, adhering to the following format:

#### `options.amazon.keys`
```javascript
{
  awsId:     'YOUR AMAZON AWSID HERE',
  awsSecret: 'YOUR AMAZON AWSSECRET HERE',
  assocId:   'YOUR AMAZON ASSOCID HERE'
}
```

#### `options.amazon.search`
```javascript
{
  query: {
    'SearchIndex': 'Books',
    'Keywords': 'best sellers',
    'ResponseGroup': 'ItemAttributes,Offers'
  },
  operation: 'ItemSearch',
  daysBack: 365 // optional
}
```

The values for `query` and `operation` must adhere to Amazon's Product Advertising API's guidelines, available [here](http://docs.aws.amazon.com/AWSECommerceService/latest/DG/CHAP_ApiReference.html).

As an optional parameter, `daysBack` currently only deals with the "publication date" value returned from Amazon's Product Advertising API. It allows you for greater filtering flexibility.

#### `options.twitter.keys`
```javascript
{
  consumer_key:        'YOUR TWITTER CONSUMER KEY HERE',
  consumer_secret:     'YOUR TWITTER CONSUMER SECRET HERE',
  access_token:        'YOUR TWITTER ACCESS TOKEN HERE',
  access_token_secret: 'YOUR ACCESS TOKEN SECRET HERE'
}
```

#### `options.twitter.tweet`
```javascript
{
  prepend: 'Check out this latest book!',
  append: '#books'
}
```
The properties and values for `tweet` are optional, as is `tweet` itself. These parameters allow for appending or prepending text before or after the standard "title + link" tweet that this module provides.

### `bookBot.tweetRandomLink(callback)`

The only method of `AmazonTweetBot` is `tweetRandomLink`, which then handles taking all of the above options, making the call to Amazon, receiving 10 results form a randomly chosen page (ranging from 1 through 10, see Amazon's Product Advertising API docs for more information on this limitation), and choosing randomly from that results array, ranging from 0 to 9, the item's title and link. Once that item is chosen, it is then tweeted, appending or prepending text to the tweet accordingly, following a "text + link" format. The callback function then returns the result, whether it be an error or success.

## License

The MIT License (MIT)

Copyright (c) 2016 John Foderaro

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
