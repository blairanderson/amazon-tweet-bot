class TwitStub {
  constructor(keys){
    this.consumer_key = keys.consumer_key;
    this.consumer_secret = keys.consumer_secret;
    this.access_token = keys.access_token;
    this.access_token_secret = keys.access_token_secret;
  }
  post(type, tweet, callback) {
    let error;
    let data = {
      created_at: 'Sun Sep 18 23:37:20 +0000 2016',
      text: tweet.status
    };
    let response;
    return callback(error, data, response);
  }
}

module.exports = TwitStub;
