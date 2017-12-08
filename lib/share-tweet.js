'use strict';

function shareTweet(twitter, tweet, item, callback) {
  tweet = tweet || {};
  if (typeof item === 'undefined') {
    return callback(new Error(`No results match 'date' criteria`), null);
  }
  let link = item.link;
  let text = `"${item.title}"`;
  if (tweet.prepend) {
    text = `${tweet.prepend} ${text}`;
  }
  if (tweet.append) {
    text = `${text} ${tweet.append}`;
  }
  if (text.length > 115) {
    text = text.substring(0, 111);
    text = `${text}...`;
  }
  const status = `${text} ${link}`
  console.log(status);
  twitter.post(`statuses/update`, {status: status}, (error, data, response)=> {
    if (error) {
      return callback(error, null);
    } else {
      return callback(null, `${data.created_at}: ${data.text}`);
    }
  });
}

module.exports = shareTweet;
