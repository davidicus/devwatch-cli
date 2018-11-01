/*
* Test for the argsParser.js
*
*/

// Dependencies
const config = require("./../configParser");

/////////////////////////////////////////////
// Test
/////////////////////////////////////////////

test("Expect these flags to return null", () => {
  expect(config(["-h"])).toEqual(null);
});
