'use strict';

class ApacStub {
  constructor(keys){
    this.awsId = keys.awsId;
    this.awsSecret = keys.awsSecret;
    this.assocId = keys.assocId;
  }
  execute(operation, query, callback){
    let error;
    let resultObject = {
      ItemSearchResponse: {
        Items: {
          Item: []
        }
      }
    };
    let itemsArray = resultObject.ItemSearchResponse.Items.Item;
    for (let i = 0; itemsArray.length < 10; i++) {
      itemsArray.push({
        ItemAttributes: {
          Title: `Title ${i}`,
          PublicationDate: `2016-01-01`
        },
        DetailPageURL: `URL ${i}`
      });
    }
    callback(error, resultObject);
  }
}

module.exports = ApacStub;
