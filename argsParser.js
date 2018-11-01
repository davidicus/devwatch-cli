"use strict";

/*
* Parse arguments found in config file and return the action to be taken
* @param args - [array] the list of flags passed to the cli
* @param config - [object] config file to run checks against
* @return actions - [array] list of actions that are being called
*/

const argsParser = (args, config) => {
  let actions = [];
  args.map(arg => {
    config.flags.find(o => {
      if (o.flag.includes(arg)) {
        actions.push(o.action);
      }
    });
  });
  return Promise.resolve(actions);
};

module.exports = {
  argsParser
};
