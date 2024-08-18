var assert = require('assert');

describe('Kyu 7: Help Bob count letters and digits', function () {

  it('solution1', function () {

    function correct(leaderBoard){
      var lb = leaderBoard.replace(/\s*#\d+\s+/gi, '\r').trim().split('\r');
      var io = lb.indexOf('myjinxin2015');
      [lb[0], lb[io]] = [lb[io], lb[0]];

      return lb.map((u, i) => (`#${i+1} ${u}`)).join("\n");
    }

    assert.equal(correct(
`#1 g964
#2 myjinxin2015
#3 SteffenVogel_79
#4 smile67
#5 Voile`
      ),
`#1 myjinxin2015
#2 g964
#3 SteffenVogel_79
#4 smile67
#5 Voile`
      );

      assert.equal(correct(
`#1 Voile
#2 g964
#3 SteffenVogel_79
#4 smile67
#5 myjinxin2015`
      ),
`#1 myjinxin2015
#2 g964
#3 SteffenVogel_79
#4 smile67
#5 Voile`
      );

      assert.equal(correct(
`#1 AlexIsHappy
#2 @m1ll
#3 siebenschlaefer
#4 Tefferson
#5 myjinxin2015`
        ),
`#1 myjinxin2015
#2 @m1ll
#3 siebenschlaefer
#4 Tefferson
#5 AlexIsHappy`
      );

      assert.equal(correct(
`#1 kkavita92
#2 myjinxin2015
#3 FrankK
#4 DealPete
#5 Blue Leaf`
        ),
`#1 myjinxin2015
#2 kkavita92
#3 FrankK
#4 DealPete
#5 Blue Leaf`
      );

  });

});
