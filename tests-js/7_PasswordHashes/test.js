var {assert} = require('chai');
var {createHash} = require('node:crypto');

describe('Kyu 7: Password Hashes', function () {

  it('Test', () => {

    /**
     * - var {createHash} = require('node:crypto');: 
     * This line imports the createHash function from Node.js's built-in crypto module.
     * 
     * - createHash('md5'):
     * This creates a Hash object specifically for the MD5 algorithm.
     * 
     * - .update(content):
     * This method feeds the input content (the string you want to hash) into the hash algorithm.
     * 
     * - .digest('hex'):
     * This method calculates the final hash and returns it as a hexadecimal string.
     * 
     * @param {*} str 
     * @returns 
     */
    function passHash(str) {
      return createHash('md5').update(str).digest('hex');
    }

    var tests = [
      ['password', '5f4dcc3b5aa765d61d8327deb882cf99'],
      ['abc123', 'e99a18c428cb38d5f260853678922e03']
    ]
    
    for (var i = 0; i < tests.length; i++) {
      assert.equal(passHash(tests[i][0]), tests[i][1])
    }

  });

});

