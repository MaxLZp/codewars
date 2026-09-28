def fire_fight(s):
    return s.replace('Fire', '~~')


def test_holidayIII_fire_on_boat():
    tests = [
        # [input, expected]
        [
            "Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast",
            "Boat Rudder Mast Boat Hull Water ~~ Boat Deck Hull ~~ Propeller Deck ~~ Deck Boat Mast"
        ],
        [
            "Mast Deck Engine Water Fire",
            "Mast Deck Engine Water ~~"
        ],
        [
            "Fire Deck Engine Sail Deck Fire Fire Fire Rudder Fire Boat Fire Fire Captain",
            "~~ Deck Engine Sail Deck ~~ ~~ ~~ Rudder ~~ Boat ~~ ~~ Captain"
        ],
    ]
    
    for inp, exp in tests:
        assert fire_fight(inp) == exp

