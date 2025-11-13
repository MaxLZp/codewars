const { assert } = require('chai');

describe('Kyu 7: Playing with Sets : Equal or Not ?', function () {

    function areEqual(s1, s2){
        if (s1.size != s2.size) {
            return false;
        }
        for (const item of s1) {
            if (!s2.has(item)) { return false; }
        }
        for (const item of s2) {
            if (!s1.has(item)) { return false; }
        }
        return true;
    }
    
    function notEqual(s1, s2){
        return !areEqual(s1, s2);
    }

    let A1 = new Set([1,2,3]), A2 = new Set([3,2,1]), B = new Set([1,2,5]), D = new Set(["1","2","3"]);
  
    it("Basic tests", () =>{
        assert.isTrue( areEqual(A1,A1), "A == A" );
        assert.isTrue( areEqual(A1,A2), "{1,2,3} == {3,2,1}" );
        assert.isTrue( areEqual(A2,A1), "{3,2,1} == {1,2,3}" );
        assert.isFalse( areEqual(A1,B), "{1,2,3} != {1,2,5}" );
        assert.isFalse( areEqual(A1,D), "{1,2,3} != {'1','2','3'}" );
    
        assert.isTrue( notEqual(A1,B), "{1,2,3} != {1,2,5}" );
        assert.isTrue( notEqual(A1,new Set()), "{1,2,3} != {}" );
        assert.isTrue( notEqual(A1,D), "{1,2,3} != {'1','2','3'}" );
        assert.isFalse( notEqual(A1,A2), "{1,2,3} == {3,2,1}" );
    });
});

