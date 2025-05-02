var assert = require('assert');

describe('Kyu 7: Generate HTML links', function () {

  it("solution 1", function() {

    function generateMenu (menuItems) {
      return menuItems.reduce((c,e) => c + `<a href="${e.url}">${e.text}</a>`, '');
    }

    var inputs = [
      {
          url:"http://www.google.com",
          text:"10^100"
      },
      {
          url:"#codewars",
          text:"codewars"
      },
      {
          url:"#q",
          text:"query"
      },
      {
          url:"#a",
          text:"ans"
      },
      {
          url:"#123",
          text:123
      }
  ]

      assert.ok(generateMenu([]) === "", "Does not handle empty array correctly");
      assert.ok(generateMenu(inputs.slice(0,1)) === "<a href=\"http://www.google.com\">10^100</a>", "Does not handle basic url");
      assert.ok(generateMenu(inputs.slice(1,2)) === "<a href=\"#codewars\">codewars</a>", "Does not handle hash url");
      assert.ok(generateMenu(inputs.slice(2,4)) === "<a href=\"#q\">query</a><a href=\"#a\">ans</a>", "Does not handle multiple items");
      assert.ok(generateMenu(inputs.slice(4)) === "<a href=\"#123\">123</a>", "Does not handle non-string text property values");
    })



});
