'use strict';

function shareTweet(twitter, tweet, item, callback) {
  tweet = tweet || {};
  if (typeof item === 'undefined') {
    return callback(new Error(`No results match 'date' criteria`), null);
  }
  let link = item.link;
  let text = `${item.title}`;
  if (tweet.prepend) {
    text = `${tweet.prepend} ${text}`;
  }

  if (text.length > 215) {
    text = text.substring(0, 200);
    text = `${text}...`;
  }

  let status = `${text} ${link}`
  if (tweet.append) {
    status = `${text} ${link} ${tweet.append}`;
  }
  twitter.post(`statuses/update`, {status: status}, (error, data, response)=> {
    if (error) {
      return callback(error, null);
    } else {
      return callback(null, `${data.created_at}: ${data.text}`);
    }
  });
}

module.exports = shareTweet;
