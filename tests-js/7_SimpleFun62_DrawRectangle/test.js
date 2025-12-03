const chai = require('chai'), { assert } = chai;
chai.config.truncateThreshold = 0;

describe('Kyu 7: Simple Fun #62: Draw Rectangle', function () {

  function drawRectangle(canvas, rectangle) {
    canvas[rectangle[1]][rectangle[0]] = '*';
    canvas[rectangle[1]][rectangle[2]] = '*';
    canvas[rectangle[3]][rectangle[0]] = '*';
    canvas[rectangle[3]][rectangle[2]] = '*';

    for(var i = rectangle[0] + 1; i < rectangle[2]; i++) {
      canvas[rectangle[1]][i] = '-';
      canvas[rectangle[3]][i] = '-';
    }
    for(var i = rectangle[1] + 1; i < rectangle[3]; i++) {
      canvas[i][rectangle[0]] = '|';
      canvas[i][rectangle[2]] = '|';
    }

    return canvas;
  }

  it("Fixed Tests", () => {
    var canvas= [
      ["a","a","a","a","a","a","a","a"], 
      ["a","a","a","a","a","a","a","a"], 
      ["a","a","a","a","a","a","a","a"], 
      ["b","b","b","b","b","b","b","b"], 
      ["b","b","b","b","b","b","b","b"]],
      rectangle=[1, 1, 4, 3],
      expected =[
      ["a","a","a","a","a","a","a","a"], 
      ["a","*","-","-","*","a","a","a"], 
      ["a","|","a","a","|","a","a","a"], 
      ["b","*","-","-","*","b","b","b"], 
      ["b","b","b","b","b","b","b","b"]]
      assert.deepEqual(drawRectangle(canvas,rectangle),expected)
      
      canvas=[
      ["a","a","a","a","a","a","a","a"], 
      ["a","a","a","a","a","a","a","a"], 
      ["a","a","a","a","a","a","a","a"], 
      ["b","b","b","b","b","b","b","b"]]
      rectangle= [0, 0, 1, 1]
      expected=[
      ["*","*","a","a","a","a","a","a"], 
      ["*","*","a","a","a","a","a","a"], 
      ["a","a","a","a","a","a","a","a"], 
      ["b","b","b","b","b","b","b","b"]]
      assert.deepEqual(drawRectangle(canvas,rectangle),expected)
      
      canvas= [
      ["a","a","a","a","a","a","a","a"], 
      ["a","a","a","a","a","a","a","a"], 
      ["a","a","a","a","a","a","a","a"], 
      ["b","b","b","b","b","b","b","b"]]
      rectangle= [0, 2, 7, 3]
      expected=[
      ["a","a","a","a","a","a","a","a"], 
      ["a","a","a","a","a","a","a","a"], 
      ["*","-","-","-","-","-","-","*"], 
      ["*","-","-","-","-","-","-","*"]]
      assert.deepEqual(drawRectangle(canvas,rectangle),expected)
      
      canvas= [
      ["a","a","a"], 
      ["a","a","a"], 
      ["a","a","a"], 
      ["b","b","b"]]
      rectangle= [0, 0, 2, 3]
      expected=[
      ["*","-","*"], 
      ["|","a","|"], 
      ["|","a","|"], 
      ["*","-","*"]]
      assert.deepEqual(drawRectangle(canvas,rectangle),expected)
  });

});
