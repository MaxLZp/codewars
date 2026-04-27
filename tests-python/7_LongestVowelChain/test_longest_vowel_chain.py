import re


def solve(s):
    return max([0] + [len(v) for v in re.findall(r'[aeiou]+', s)])

def test_longest_vowel_chain():
    assert solve("") == 0
    assert solve("codewarriors") == 2
    assert solve("suoidea") == 3
    assert solve("ultrarevolutionariees") == 3
    assert solve("strengthlessnesses") == 1
    assert solve("cuboideonavicuare") == 2
    assert solve("chrononhotonthuooaos") == 5
    assert solve("iiihoovaeaaaoougjyaw") == 8
