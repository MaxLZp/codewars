var assert = require('assert');

describe('Kyu 7: Simple template', function () {

  function createTemplate(template) {
    return (object) => {
      return template.replace(/{{(.*?)}}/g, (match, p1) => (object[p1] || ''));
    };
  }

  it("Fixed Tests", () => {
    let personTmpl = createTemplate("{{name}} likes {{animalType}}");
    assert.equal(personTmpl({ name: "John", animalType: "dogs" }), 'John likes dogs');
  });

});
