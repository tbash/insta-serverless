'use strict';

const fetch = require('node-fetch');

module.exports = (event, callback) => {
  const path =
    `https://www.instagram.com/${event.pathParameters.handle}/?__a=1`;

  fetch(path)
    .then(r => r.json())
    .then(r => callback(null, r))
    .catch(e => callback(e));
};

