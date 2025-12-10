def score_to_tally(score):
    result = 'e <br>' * (score // 5)
    result += chr(ord('a') - 1 + score % 5) if score % 5 > 0 else ''
    return result

def test_tally_it_up():
    assert score_to_tally(3) == 'c'
    assert score_to_tally(10) == 'e <br>e <br>'
    assert score_to_tally(5) == 'e <br>'
    assert score_to_tally(1) == 'a'
    assert score_to_tally(16) == 'e <br>e <br>e <br>a'
    assert score_to_tally(28) == 'e <br>e <br>e <br>e <br>e <br>c'
    assert score_to_tally(19) == 'e <br>e <br>e <br>d'
    assert score_to_tally(9) == 'e <br>d'
    assert score_to_tally(15) == 'e <br>e <br>e <br>'
    assert score_to_tally(7) == 'e <br>b'
