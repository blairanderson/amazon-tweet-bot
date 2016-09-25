'use strict';

function amazonResultsHelper(date, results) {
  let parsedResults = [];
  let item = results.ItemSearchResponse.Items.Item;
  for (let i = 0; i < item.length; i++) {
    if (item[i].ItemAttributes.PublicationDate >= date) {
      parsedResults.push({
        date:  item[i].ItemAttributes.PublicationDate,
        title: item[i].ItemAttributes.Title,
        link:  item[i].DetailPageURL
      });
    }
  }
  return parsedResults;
}

module.exports = amazonResultsHelper;
