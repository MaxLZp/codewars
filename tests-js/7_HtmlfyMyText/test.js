var assert = require('assert');

describe('Kyu 7: htmlify my text', function () {

  function htmlify(string){
    //remember to use the following link to use (copy and paste) the exact punctuation mark
    //with the exact html code
    //https://www.utexas.edu/learn/html/spchar.html

    var map = {
      "–": "&ndash;",
      "’": "&rsquo;",
      "&": "&amp;",
      "“": "&ldquo;",
      "”": "&rdquo;"
    };

    return string ? `<p>${string.replace(/[–’&“”]/g, (c) => (map[c]))}</p>` : ''; //formatted string
  }



  it("Fixed Tests", () => {
    assert.equal(htmlify("Hello"),"<p>Hello</p>", "Check valid input of opening < p > and closing < / p > tags")
    assert.equal(htmlify("Hello & World"),"<p>Hello &amp; World</p>", "Check valid output when handling the ampersand (&)")
    assert.equal(htmlify("shouldn’t"),"<p>shouldn&rsquo;t</p>", "Check valid output when handling the apostrophe ’ ")
    assert.equal(htmlify("shouldn’t wouldn’t couldn’t"),"<p>shouldn&rsquo;t wouldn&rsquo;t couldn&rsquo;t</p>","Check valid output when handling multiple apostrophes ’ ")
    assert.equal(htmlify("Simon says “Do the right thing”"),"<p>Simon says &ldquo;Do the right thing&rdquo;</p>", "Check valid  output when handling the “ and ”")
  });

});
