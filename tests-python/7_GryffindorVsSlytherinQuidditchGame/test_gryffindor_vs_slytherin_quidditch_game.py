def game_winners(gryffindor, slytherin):
    gs = gryffindor[0] + (150 if gryffindor[1] == 'yes' else 0)
    ss = slytherin[0] + (150 if slytherin[1] == 'yes' else 0)
    if gs > ss: return "Gryffindor wins!"
    elif ss > gs: return "Slytherin wins!"
    return "It's a draw!"
  
def test_gryffindor_vs_slytherin_quidditch_game():
    assert game_winners([100, "yes"], [100, "no"]) == "Gryffindor wins!"
    assert game_winners([350, "no"], [250, "yes"]) == "Slytherin wins!"
    assert game_winners([100, "yes"], [250, "no"]) == "It's a draw!"
    assert game_winners([0, "yes"], [150, "no"]) == "It's a draw!"
    assert game_winners([150, "no"], [0, "yes"]) == "It's a draw!"