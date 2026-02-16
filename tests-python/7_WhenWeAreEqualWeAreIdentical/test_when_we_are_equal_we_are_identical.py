import sys

def make_identical(strng):
    return sys.intern(strng)

def test_when_we_are_equal_we_are_identical():
      assert "abc" is make_identical("abcd"[:-1]) == True
