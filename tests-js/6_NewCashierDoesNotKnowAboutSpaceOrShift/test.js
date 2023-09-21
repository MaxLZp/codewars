var assert = require('assert');

describe('Kyu 6: New Cashier Does Not Know About Space or Shift', function () {


  it("Solution 1", function() {
    function getOrder(input) {
      const menu = ['Burger', 'Fries', 'Chicken', 'Pizza', 'Sandwich', 'Onionrings', 'Milkshake', 'Coke'];
      const order = [];
      menu.forEach(function (menuItem) {
        for (let index = 0; index < (input.match(new RegExp(menuItem, 'gi')) || []).length; index++) {
          order.push(menuItem);
        };
      });
      return order.join(' ');
    }

    assert.equal(getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"),
                      "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke");
    assert.equal(getOrder("pizzachickenfriesburgercokemilkshakefriessandwich"),
                      "Burger Fries Fries Chicken Pizza Sandwich Milkshake Coke");
  });

  it("Solution 2", function() {
    function getOrder(input) {
      const menu = ['Burger', 'Fries', 'Chicken', 'Pizza', 'Sandwich', 'Onionrings', 'Milkshake', 'Coke'];
      return input.match(new RegExp(menu.join('|'), 'gi'))
        .map(function (item) {
          return item.charAt(0).toUpperCase() + item.slice(1, item.length);
        })
        .sort(function(l, r) {
          return menu.indexOf(l) < menu.indexOf(r) ? -1 : 1;
        })
        .join(' ');
    }

    assert.equal(getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"),
                      "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke");
    assert.equal(getOrder("pizzachickenfriesburgercokemilkshakefriessandwich"),
                      "Burger Fries Fries Chicken Pizza Sandwich Milkshake Coke");
  });

});
