"use strict";

/*
* Parse config file
*
*/

// Dependencies
const fs = require("fs");

module.exports = (configPath, args) => {
  try {
    // Check for config file. Use default if none found
    fs.accessSync(configPath);
    const config = require(configPath);
    return Promise.resolve({
      ...config,
      args
    });
  } catch (err) {
    const config = {
      reponame: "/node-blog",
      pagination: 10,
      highlight: "",
      catTitle: ""
    };
    return Promise.resolve({
      ...config,
      args
    });
  }
};
