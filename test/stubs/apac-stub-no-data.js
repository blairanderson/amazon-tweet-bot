'use strict';

class ApacStub {
  constructor(keys){
    this.awsId = keys.awsId;
    this.awsSecret = keys.awsSecret;
    this.assocId = keys.assocId;
  }
  execute(operation, query, callback) {
    let error;
    let resultObject = {
      ItemSearchResponse: {
        Items: {
          Item: []
        }
      }
    };
    callback(error, resultObject);
  }
}

module.exports = ApacStub;
