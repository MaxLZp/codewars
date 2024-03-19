const { assert } = require("chai");

describe('Kyu 7: Stone Pickaxe Crafting', function () {

  function stonePick(arr) {
    var sticks = 0;
    var cobblestones = 0;
    var pickaxes = 0;
    arr.forEach((item) => {
      switch (item) {
        case "Cobblestone": cobblestones++; break;
        case "Sticks": sticks++; break;
        case "Wood": sticks += 4; break;
        default: break;
      }
      if (cobblestones >= 3 && sticks >= 2) {
        pickaxes++;
        cobblestones -= 3;
        sticks -= 2;
      }
    });
    return pickaxes;
  }

  const sampleTestCases = [
    ["Example Test Case", [
      [[...repeat("Sticks", 4), ...repeat("Cobblestone", 6)], 2],
      [[...repeat("Sticks", 2), "Cobblestone"], 0],
      [[...repeat("Sticks", 4), ...repeat("Wool", 3), ...repeat("Dirt", 6)], 0],
      [[...repeat("Wood", 2), ...repeat("Cobblestone", 12)], 4],
    ]],
    ["Picks greater than or equal to 1", [
      [[...repeat("Sticks", 4), ...repeat("Cobblestone", 3)], 1],
      [[...repeat("Sticks", 31), ...repeat("Cobblestone", 25)], 8],
      [[...repeat("Sticks", 64), ...repeat("Cobblestone", 64)], 21],
    ]],
    ["Picks with non-eligible materials", [
      [["Sticks", "Wool", "Dirt", "Diamond", "Stone", "Cobblestone", "Sticks", "Cobblestone", "Cobblestone"], 1],
      [["Wool", "Dirt", "Diamond", "Sticks", "Cobblestone", "Cobblestone"], 0],
      [[...repeat("Wool", 21), ...repeat("Sticks", 11), ...repeat("Stone", 31), ...repeat("Cobblestone", 41), ...repeat("Diamond", 8)], 5],
    ]],
    ["No Picks", [
      [["Wool", "Dirt", "Diamond", "Sticks"], 0],
      [["Wood", "Dirt", "Cobblestone", "Sticks"], 0],
      [[...repeat("Dirt", 51), ...repeat("Cobblestone", 21), "Sticks", ...repeat("Wool", 41), ...repeat("Diamond", 12)], 0],
    ]],
    ["Picks with only wood and no sticks", [
      [[...repeat("Wood", 51), ...repeat("Cobblestone", 91)], 30],
      [[...repeat("Wood", 12), ...repeat("Cobblestone", 120)], 24],
      [[...repeat("Wood", 33), ...repeat("Cobblestone", 50)], 16],
    ]],
    ["No Materials", [
      [[], 0],
    ]],
  ];

  describe("Sample tests", () => {
    for (let [desc, cases] of sampleTestCases) {
      describe(desc, () => {
        let testId = 1;
        for (let [arr, expected] of cases) {
          it(`Test #${testId++}`, () => {
            act(arr, expected);
          });
        }
      });
    }
  });

  function act(arr, expected) {
    const actual = stonePick(arr.slice());
    assert.strictEqual(actual, expected);
  }

  function* repeat(item, count) {
    while (count--> 0) yield item;
  }

});
