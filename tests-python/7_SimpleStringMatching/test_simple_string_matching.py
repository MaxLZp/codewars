import re                
        
def solve(a, b):
    return re.fullmatch(a.replace('*', '.*'), b) != None


def test_simple_string_matching():
    assert solve("code*s","codewars") == True
    assert solve("codewar*s","codewars") == True
    assert solve("code*warrior","codewars") == False
    assert solve("c","c") == True
    assert solve("*s","codewars") == True
    assert solve("*s","s") == True
    assert solve("s*","s") == True
    assert solve("aa","aaa") == False
    assert solve("aa*","aaa") == True
    assert solve("aaa","aa") == False
    assert solve("aaa*","aa") == False
    assert solve("*","codewars") == True