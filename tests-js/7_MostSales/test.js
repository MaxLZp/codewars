const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: Most sales', function () {

  it("Solution 1. Node 18.13.3", function() {
    // Doesn't pass tests on codewars with Node 8.1.3 because of non stable sorting
    function top3(products, amounts, prices) {
      return products
        .map((v, i) => ({name: v, revenue: amounts[i] * prices[i]}))
        .sort((l, r) => (r.revenue - l.revenue))  // Non-stable sorting on Node 8
        .slice(0, 3)
        .map((v) => (v.name));
    }

    assert.deepEqual(top3(["Computer", "Cell Phones", "Vacuum Cleaner"], [3, 24, 8], [199, 299, 399]), ["Cell Phones", "Vacuum Cleaner", "Computer"]);
    assert.deepEqual(top3(["Cell Phones", "Vacuum Cleaner", "Computer", "Autos", "Gold", "Fishing Rods", "Lego", " Speakers"], [5, 25, 2, 7, 10, 3, 2, 24], [51, 225, 22, 47, 510, 83, 82, 124]), ['Vacuum Cleaner', 'Gold', ' Speakers']);
    assert.deepEqual(top3(["Cell Phones", "Vacuum Cleaner", "Computer", "Autos", "Gold", "Fishing Rods", "Lego", " Speakers"], [0, 12, 24, 17, 19, 23, 120, 8], [9, 24, 29, 31, 51, 8, 120, 14]), ['Lego', 'Gold', 'Computer']);

    assert.deepEqual(top3(['Cell Phones', 'Vacuum Cleaner', 'Computer', 'Printer', 'TVs', 'Laptops', 'Tablets', 'Chargers', 'Speakers', 'Games', 'Music CDs', 'Radios', 'Drones', 'Scooter', 'Keyboards', 'Mouses'], [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]), ['Cell Phones', 'Vacuum Cleaner', 'Computer']);

  });

  it("Solution 2. Node 8.1.3", function() {

    function top3(products, amounts, prices) {
      return products
        .map((v, i) => ({index: i, name: v, revenue: amounts[i] * prices[i]}))
        .sort((l, r) => ( r.revenue - l.revenue || l.index - r.index )) // Simulating stable sort with Node 8
        .slice(0, 3)
        .map((v) => (v.name));
    }

    assert.deepEqual(top3(["Computer", "Cell Phones", "Vacuum Cleaner"], [3, 24, 8], [199, 299, 399]), ["Cell Phones", "Vacuum Cleaner", "Computer"]);
    assert.deepEqual(top3(["Cell Phones", "Vacuum Cleaner", "Computer", "Autos", "Gold", "Fishing Rods", "Lego", " Speakers"], [5, 25, 2, 7, 10, 3, 2, 24], [51, 225, 22, 47, 510, 83, 82, 124]), ['Vacuum Cleaner', 'Gold', ' Speakers']);
    assert.deepEqual(top3(["Cell Phones", "Vacuum Cleaner", "Computer", "Autos", "Gold", "Fishing Rods", "Lego", " Speakers"], [0, 12, 24, 17, 19, 23, 120, 8], [9, 24, 29, 31, 51, 8, 120, 14]), ['Lego', 'Gold', 'Computer']);

    assert.deepEqual(top3(['Cell Phones', 'Vacuum Cleaner', 'Computer', 'Printer', 'TVs', 'Laptops', 'Tablets', 'Chargers', 'Speakers', 'Games', 'Music CDs', 'Radios', 'Drones', 'Scooter', 'Keyboards', 'Mouses'], [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]), ['Cell Phones', 'Vacuum Cleaner', 'Computer']);

  });

});
