def leader_b(user, user_score, your_score):
    if your_score > user_score: return 'Winning!'
    if your_score == user_score: return 'Only need one!'
    # beta_needed = (user_score - your_score) // 3
    # eights_needed = user_score - your_score - beta_needed * 3
    beta_needed, eights_needed = divmod(user_score - your_score, 3)
    return f"To beat {user}'s score, I must complete {beta_needed} Beta kata and {eights_needed} 8kyu kata.{'' if 1000 > beta_needed+eights_needed else ' Dammit!'}"


def test_codewars_leaderboard_climber():
    assert leader_b('g964', 36097, 20000) == "To beat g964's score, I must complete 5365 Beta kata and 2 8kyu kata. Dammit!"
    assert leader_b('GiacomoSorbi', 23914, 23867) == "To beat GiacomoSorbi's score, I must complete 15 Beta kata and 2 8kyu kata."
    assert leader_b('ZozoFouchtra', 15991, 12000) == "To beat ZozoFouchtra's score, I must complete 1330 Beta kata and 1 8kyu kata. Dammit!"
    assert leader_b('webtechalex', 884, 900) == 'Winning!'
    assert leader_b('petegarvin1', 3307, 100) == "To beat petegarvin1's score, I must complete 1069 Beta kata and 0 8kyu kata. Dammit!"
    assert leader_b('myjinxin2015', 15720, 15720) == 'Only need one!'
    assert leader_b('AcesOfGlory', 2255, 1563) == "To beat AcesOfGlory's score, I must complete 230 Beta kata and 2 8kyu kata."
