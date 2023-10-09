var assert = require('assert');

describe('Kyu 7: Simple Fun #203: Strange Coach', function () {

  function strangeCoach(players) {
    const letters = {};
    players.sort().forEach(player => {
      if (!(letters.hasOwnProperty(player[0]))) {
        letters[player[0]] = 0;
      }
      letters[player[0]]++;
    });
    let result = '';
    for (const key in letters) {
      if (letters[key] >= 5) { result += key; }
    }
    return result.length > 0 ? result : 'forfeit';
  }

  it("Empty string", function() {
    assert.equal(strangeCoach([
      "michael",
      "jordan",
      "lebron",
      "james",
      "kobe",
      "bryant"]),"forfeit")

      assert.equal(strangeCoach([
       "babic",
       "keksic",
       "boric",
       "bukic",
       "sarmic",
       "balic",
       "kruzic",
       "hrenovkic",
       "beslic",
       "boksic",
       "krafnic",
       "pecivic",
       "klavirkovic",
       "kukumaric",
       "sunkic",
       "kolacic",
       "kovacic",
       "prijestolonasljednikovic"]),"bk")

      assert.equal(strangeCoach([
       "jgztazpytubijfsmjz",
       "bokvgratzzdibku",
       "qineboilzoqdqivc",
       "bfctyltibtkbxq",
       "vioxcuhqhikxeqwekqkjo",
       "nrvsdhttr",
       "eiaoajuwxpwmyliqikzcchid",
       "bxrwawgor",
       "gbsqaxotzmblxttj",
       "kwchrcaconuwaivhvnyf",
       "neiemapiica",
       "bppao",
       "bxujiwivsjfbqrzygpdgkyz",
       "jnzrhhmcgcpffflpzwmqib",
       "jhozlevckrrwimdmyzc",
       "bomojotkqqditelsk",
       "ywmbheywzfyqjjs",
       "snwrclyjkbspysjftcmyak",
       "eelrsgkuhu",
       "dnyzsvqjjuqoc"]),"b")
  });

});
