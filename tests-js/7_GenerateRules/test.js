var assert = require('assert');

describe('Kyu 7: generateRules', function () {

  it("solution 1", function() {

    function makeTCPRule(x){
      return "iptables -I INPUT -p tcp --dport " + x + " -j ACCEPT ;";
    }

    function generateRules(func,portList){
      return portList.reduce((carry, port) => (carry + func(port)), "");
    }

    assert.equal(generateRules(makeTCPRule, [22]), "iptables -I INPUT -p tcp --dport 22 -j ACCEPT ;");
    assert.equal(generateRules(makeTCPRule, [22, 80]), "iptables -I INPUT -p tcp --dport 22 -j ACCEPT ;iptables -I INPUT -p tcp --dport 80 -j ACCEPT ;");
  })



});
