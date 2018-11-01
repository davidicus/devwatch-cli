/*
* Utils for creating directories and files
*
*/

// Dependencies
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const { spawn } = require("child_process");
const pj = require("./../package.json");

const lib = {};

// INIT - Create the project and bring in boilerplate
// @param pathToScript - [string] string path to script to execute
// @param targetPath - [string] string path to target directory
lib.init = (pathToScript, targetPath) => {
  const args = [pathToScript, targetPath, "init"];
  // Spin up child process to run gitbash script
  spawn(`sh`, args, { stdio: "inherit" }).on("exit", code => {
    if (code == 128) {
      console.log(
        "\x1b[31m%s\x1b[0m",
        "You can only use `dw-cli init` inside a clean directory!"
      );
    } else if (code == 0) {
      console.log(
        "\x1b[34m%s\x1b[0m",
        `All done!!! Process exited with code ${code}`
      );
    } else {
      console.log("\x1b[37m%s\x1b[0m", "Something happened!");
    }
  });
};

module.exports = lib;
