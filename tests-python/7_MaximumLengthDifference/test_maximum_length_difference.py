def mxdiflg(a1, a2):
    max = -1
    for x in a1:
        for y in a2:
            dif = abs(len(x) - len(y))
            max = max if dif < max else dif
        
    return max

def test_maximum_length_difference():
    s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
    s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
    assert mxdiflg(s1, s2) == 13
    
    s1 = ["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"]
    s2 = ["bbbaaayddqbbrrrv"]
    assert mxdiflg(s1, s2) == 10
    
    s2 = []
    s1 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
    assert mxdiflg(s1, s2) == -1
