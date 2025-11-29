const {assert} = require('chai');

describe('Kyu 7: Conference Traveller', function () {

  function conferencePicker(citiesVisited, citiesOffered) {
    if (citiesVisited.length == 0) { return citiesOffered[0]; }
    for(offered of citiesOffered) {
      if (!citiesVisited.includes(offered)) {
        return offered;
      }
    }

    return 'No worthwhile conferences this year!';
  }

  // Other
  // function conferencePicker(citiesVisited, citiesOffered) {
  //   return citiesOffered.find(city => !citiesVisited.includes(city)) || 'No worthwhile conferences this year!'
  // }

  assert.strictEqual(conferencePicker(['Mexico City','Johannesburg','Stockholm','Osaka','Saint Petersburg','London'],['Stockholm','Paris','Melbourne']),'Paris');
  assert.strictEqual(conferencePicker(['Buenos Aires','Mexico City','Johannesburg'],['Melbourne','Moscow']),'Melbourne');
  assert.strictEqual(conferencePicker(['Tokyo','Madrid','Melbourne','Sydney','Rio De Janeiro','Saint Petersburg','Brisbane','Paris','Houston'],['Sydney','Chicago','Paris']),'Chicago');
  assert.strictEqual(conferencePicker([],['Philadelphia','Osaka','Tokyo','Melbourne']),'Philadelphia','Should work if no cities visited');
  assert.strictEqual(conferencePicker(['London','Berlin','Mexico City','Melbourne','Buenos Aires','Hong Kong','Madrid','Paris'],['Berlin','Melbourne']),'No worthwhile conferences this year!','Should work if all offered cities previously visited');

});
