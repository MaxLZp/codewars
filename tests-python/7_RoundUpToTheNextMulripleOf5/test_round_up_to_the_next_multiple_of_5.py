def round_to_next5(n):
    return ((1 if n % 5 else 0) + n // 5) * 5

    # other
    # return math.ceil(n/5)*5
    
def test_round_up_to_the_next_multiple_of_5():
        inp = 0
        out = round_to_next5(inp)
        assert out == 0

        inp = 1
        out = round_to_next5(inp)
        assert out == 5

        inp = -1
        out = round_to_next5(inp)
        assert out == 0

        inp = 5
        out = round_to_next5(inp)
        assert out == 5

        inp = 7
        out = round_to_next5(inp)
        assert out == 10

        inp = 20
        out = round_to_next5(inp)
        assert out == 20

        inp = 39
        out = round_to_next5(inp)
        assert out == 40
