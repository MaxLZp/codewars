def sum_ppg(player_one, player_two):
    return player_one.get('ppg', 0) + player_two.get('ppg', 0)

  
def test_all_star_code_challenge1():
    iverson = { 'team': '76ers', 'ppg': 11.2 }
    jordan  = { 'team': 'bulls', 'ppg': 20.2 }
    assert 31.4 == sum_ppg(iverson, jordan)
  