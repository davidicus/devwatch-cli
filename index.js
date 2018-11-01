"use strict";

const path = require("path");
const { argsParser } = require("./argsParser");
const { init } = require("./lib/dwFunctions");
const config = require("./.dwconfig.js");

module.exports = args => {
  args = typeof args == "object" ? args : false;

  if (args) {
    argsParser(args, config).then(args => {
      args.map(arg => {
        switch (arg) {
          case "init":
            init(path.join(__dirname, "/bin/setUpApp.sh"), process.cwd());
            break;
          case "help":
            console.log(config.help);
            break;
          case "watch":
            console.log("im watching");
            break;
          default:
            console.log(config.version);
        }
      });
    });
  } else {
    throw Error(
      "\x1b[31m%s\x1b[0m",
      "Improper arguments passed to the devwatch cli"
    );
  }
};
