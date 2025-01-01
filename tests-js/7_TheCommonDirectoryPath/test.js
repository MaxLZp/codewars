const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("7kyu: The common directory path",() =>{

  function getCommonDirectoryPath(paths) {
    var common = paths[0] || '';
    for(var i = 1; i < paths.length; i++) {
      let j = 0
      for (; j < common.length && common[j] == paths[i][j]; j++) {
      }
      common = common.slice(0, j);
      common = common.slice(0, common.lastIndexOf('/')+1);
    }

    return common;
  }

  it("Should pass Example tests",() =>{
    assert.equal(getCommonDirectoryPath(['/dream/images/image1.png', '/dream/images/image2.png']), '/dream/images/');
    assert.equal(getCommonDirectoryPath(['/http/assets/style.css', '/https/scripts/app.js',  'home/setting.conf']), '');
    assert.equal(getCommonDirectoryPath(['/web/assets/style.css', '/.bin/mocha',  '/read.me']), '/');
    assert.equal(getCommonDirectoryPath(['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs']), '/');

    assert.equal(getCommonDirectoryPath(['/images/java/private' ,'/images/animals/img', '/img/home/home']), '/');
  })

})
