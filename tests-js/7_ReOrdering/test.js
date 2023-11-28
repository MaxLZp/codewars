var assert = require('assert');

describe('Kyu 7: ReOrdering', function () {


  it('solution1', function () {
    function reOrdering(text){
      let match = text.match(/\b\w*[A-Z]\w*\b/);
      return (match + ' ' + text.replace(/\b\w*[A-Z]\w*\b/, '').replace('  ', ' ').trim()).trim();
    }

    assert.equal(reOrdering('ming Yao'), 'Yao ming');
    assert.equal(reOrdering('Mano donowana'), 'Mano donowana');
    assert.equal(reOrdering('wario LoBan hello'), 'LoBan wario hello');
    assert.equal(reOrdering('bull color pig Patrick'), 'Patrick bull color pig');
    assert.equal(reOrdering('jojo ddjajdiojdwo ana G nnibiial'), 'G jojo ddjajdiojdwo ana nnibiial');
    assert.equal(reOrdering('is one of those rare names that s both exotic and simple Adira'),'Adira is one of those rare names that s both exotic and simple');
    assert.equal(reOrdering('is an older name than annabel Amabel and a lot more distinctive'),'Amabel is an older name than annabel and a lot more distinctive');
    assert.equal(reOrdering('JoJo'), 'JoJo');
    assert.equal(reOrdering('a b c d e f g h i j k l m n o p q r s t u v w x y Z'), 'Z a b c d e f g h i j k l m n o p q r s t u v w x y');
    assert.equal(reOrdering('a b c d e f g h i j k l m N o p q r s t u v w x y z'), 'N a b c d e f g h i j k l m o p q r s t u v w x y z');

  })

  it('solution Other', function () {
    function reOrdering(text){
      return text.replace(/^(.+)\s([A-Z][^\s]*)(.*)$/, "$2 $1$3")
    }

    assert.equal(reOrdering('ming Yao'), 'Yao ming');
    assert.equal(reOrdering('Mano donowana'), 'Mano donowana');
    assert.equal(reOrdering('wario LoBan hello'), 'LoBan wario hello');
    assert.equal(reOrdering('bull color pig Patrick'), 'Patrick bull color pig');
    assert.equal(reOrdering('jojo ddjajdiojdwo ana G nnibiial'), 'G jojo ddjajdiojdwo ana nnibiial');
    assert.equal(reOrdering('is one of those rare names that s both exotic and simple Adira'),'Adira is one of those rare names that s both exotic and simple');
    assert.equal(reOrdering('is an older name than annabel Amabel and a lot more distinctive'),'Amabel is an older name than annabel and a lot more distinctive');
    assert.equal(reOrdering('JoJo'), 'JoJo');
    assert.equal(reOrdering('a b c d e f g h i j k l m n o p q r s t u v w x y Z'), 'Z a b c d e f g h i j k l m n o p q r s t u v w x y');
    assert.equal(reOrdering('a b c d e f g h i j k l m N o p q r s t u v w x y z'), 'N a b c d e f g h i j k l m o p q r s t u v w x y z');

  })

});
