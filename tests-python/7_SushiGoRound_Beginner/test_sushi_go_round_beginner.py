def total_bill(s):
    plates = s.count('r')
    return (plates - plates // 5) * 2
    

def test_sushi_go_round_beginner():
    assert total_bill('rr') == 4
    assert total_bill('rr rrr') == 8
    assert total_bill('rr rrr rrr rr') == 16
    assert total_bill('rrrrrrrrrrrrrrrrrr   rr r') == 34
    assert total_bill('') == 0
    