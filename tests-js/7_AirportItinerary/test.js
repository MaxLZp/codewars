const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Kyu 7: Airport itinerary', function () {

  function itinerary(travel) {
    return travel.reduce((c, v, i, a) => {
      if (!a[i-1] || a[i-1]['out'] != v['in']) {
        c.push(v['in']);
      }
      c.push(v['out']);

      return c;
    }, []).join('-');
  }

  it("Simple", function() {
    assert.equal(itinerary([{in: "TRN", out: "FCO"}]), "TRN-FCO")
  });

  it("Multiple", function() {
    assert.equal(itinerary([{in: "TRN", out: "FCO"}, {in: "CIA", out: "JFK"}]), "TRN-FCO-CIA-JFK")
  });

  it("Same airports are skipped", function() {
    assert.equal(itinerary([{in: "TRN", out: "FCO"}, {in: "FCO", out: "JFK"}]), "TRN-FCO-JFK")
  });

  it("Round trip are conserved", function() {
    assert.equal(itinerary([{in: "TRN", out: "FCO"}, {in: "CIA", out: "TRN"}]), "TRN-FCO-CIA-TRN")
  });

  it("Round trip are conserved with shared airports", function() {
    assert.equal(itinerary([{in: "TRN", out: "FCO"}, {in: "FCO", out: "TRN"}]), "TRN-FCO-TRN")
  });

});
