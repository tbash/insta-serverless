'use strict';

const getAllFeedItems = require('./get-all-feed-items.js');

module.exports.getFeed = (event, context, callback) => {
  getAllFeedItems(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*"
      },
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
};
