const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: Parsing Commandline Arguments', function () {

  it('Test', () => {

    function args(cmd){
      return cmd.replace(/[&;>|].*$/, '').trim().split(/\s+/);
    }

    assert.deepEqual(args("ls -R /"), ["ls", "-R", "/"], "failed parsing \"ls -R /\"")
    assert.deepEqual(args("cat /tmp/data.txt | less"), ["cat", "/tmp/data.txt"], "failed parsing command with pipe (|) operator")

  });

});

