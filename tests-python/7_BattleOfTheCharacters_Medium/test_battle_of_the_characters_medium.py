def battle(x: str, y: str) -> str:
    _x = sum((ord(c.upper()) - ord('A') + 1) * (1 if c.isupper() else 0.5) for c in x)
    _y = sum((ord(c.upper()) - ord('A') + 1) * (1 if c.isupper() else 0.5) for c in y)
    if _x == _y:
        return "Tie!"
    return x if _x > _y else y 

  
def test_barbell_weighttest_battle_of_the_characters_medium():
    assert battle("One", "Two") == "Two"
    assert battle("One", "Neo") == "One"
    assert battle("One", "neO") == "Tie!"
    assert battle("Foo", "BAR") == "Tie!"
    assert battle("Four", "Five") == "Four"

