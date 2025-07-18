var assert = require('assert');

describe('Kyu 7: Validate the Hash', function () {

  function malwareValidate(hashArr) {
    return [...(new Set(hashArr))].filter(hash => hash.length == 10 && (hash.match(/\d/g) || []).length == 5 && ((hash.match(/[a-z]/g) || []).length ) == 5);
  }

  it("correct length", function () {
    assert.deepEqual(malwareValidate(['asdfiasdfg', "jsdfasdf14", "a212sdf345", "as00yud567", "as34asd567", "agsdgreast", "1dfg23asd4", "hjkjw98076", "fdsqweqrah", "12gh34gh1g"]), ['as00yud567', 'as34asd567', 'hjkjw98076', '12gh34gh1g']);
  });
  it("different lengths", function () {
    assert.deepEqual(malwareValidate(['06v58j56se', '075d6u4k54', '09iasdfue809rs', '0o568h016k', '0324g2keub', '0aoq14', '0pl3p5asdfxpa4', '05ow0asdf6cgkb', '037op7o', '0mckp4k8']), ['0324g2keub']);
  });
  it("symbols", function () {
    assert.deepEqual(malwareValidate(['04tg9(<)ad', '0s85eknq65', '0664^*<i2v', '06.x>3f:63', '02.:568nd:', '02tp6zse24', '09nms72p1g', '08a1s01d29', '0!emdgxf3m', '0e9,870ugc']), ['0s85eknq65', '02tp6zse24', '09nms72p1g']);
  });
  it("duplicates", function () {
    assert.deepEqual(malwareValidate(['0s85ebgf65', '0s85ebgf65', '0664^*<i2v', '06.x>3f:63', '02.:568nd:', '02tp6zse24', '09nms72p1g', '08a1s01d29', '0!emdgxf3m', '0e9,870ugc']), ['0s85ebgf65', '02tp6zse24', '09nms72p1g']);
  });

});
