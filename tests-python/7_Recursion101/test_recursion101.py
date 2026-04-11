def solve(a,b):
    if a == 0 or b == 0: return [a,b]
    if a >= 2 * b: return solve(a - 2 * b, b)
    if b >= 2 * a: return solve(a, b - 2 * a)
    return [a, b]

def test_recursion101():
    assert solve(6,19) == [6,7]
    assert solve(2,1) == [0,1]
    assert solve(22,5) == [0,1]
    assert solve(2,10) == [2,2]