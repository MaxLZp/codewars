def solution(stones):
    result = 0
    for i in range(1, len(stones)):
        result += 1 if stones[i] == stones[i-1] else 0
    
    return result
# other
# def solution(s):
#     return sum(i==j for i,j in zip(s,s[1:]))
    
def test_stones_on_the_table():
    assert solution("RGBRGBRGGB") == 1
    assert solution("RGGRGBBRGRR") == 3
    assert solution("RRRRGGGGBBBB") == 9
 