'use strict';

const chai = require('chai');
const expect = chai.expect;

const amazonResultsHelper = require('./../lib/amazon-results-helper');

const testResults = {
  ItemSearchResponse: {
    Items: {
      Item: [{
        ItemAttributes: {
          Title: 'product01',
          PublicationDate: '2016-01-01'
        },
        DetailPageURL: 'amazon.com/product01'
      }, {
        ItemAttributes: {
          Title: 'product02',
          PublicationDate: '2016-01-01'
        },
        DetailPageURL: 'amazon.com/product02'
      }, {
        ItemAttributes: {
          Title: 'product03',
          PublicationDate: '2016-01-01'
        },
        DetailPageURL: 'amazon.com/product03'
      }, {
        ItemAttributes: {
          Title: 'product04',
          PublicationDate: '2016-01-01'
        },
        DetailPageURL: 'amazon.com/product04'
      }, {
        ItemAttributes: {
          Title: 'product05',
          PublicationDate: '2016-01-01'
        },
        DetailPageURL: 'amazon.com/product05'
      }, {
        ItemAttributes: {
          Title: 'product06',
          PublicationDate: '2016-01-01'
        },
        DetailPageURL: 'amazon.com/product06'
      }, {
        ItemAttributes: {
          Title: 'product07',
          PublicationDate: '2016-01-01'
        },
        DetailPageURL: 'amazon.com/product07'
      }, {
        ItemAttributes: {
          Title: 'product08',
          PublicationDate: '2016-01-01'
        },
        DetailPageURL: 'amazon.com/product08'
      }, {
        ItemAttributes: {
          Title: 'product09',
          PublicationDate: '2016-01-01'
        },
        DetailPageURL: 'amazon.com/product09'
      }, {
        ItemAttributes: {
          Title: 'product10',
          PublicationDate: '2016-01-01'
        },
        DetailPageURL: 'amazon.com/product10'
      }]
    }
  }
};

describe(`amazonResultsHelper function`, () => {
  it(`Should return an array`, () => {
    expect(amazonResultsHelper('2015-12-31', testResults)).to.be.instanceof(Array);
  });
  it(`Should return an array length equal to results.length`, () => {
    expect(amazonResultsHelper('2015-12-31', testResults).length).to.equal(testResults.ItemSearchResponse.Items.Item.length);
  });
  it(`Should return an array of objects with properties 'date', 'title, 'link'`, () => {
    expect(amazonResultsHelper('2015-12-31', testResults)[0]).to.have.property('date');
    expect(amazonResultsHelper('2015-12-31', testResults)[0]).to.have.property('title');
    expect(amazonResultsHelper('2015-12-31', testResults)[0]).to.have.property('link');
  });
});
