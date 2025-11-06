def test_trimming_a_string():
    assert trim("Creating kata is fun", 14) =="Creating ka..."
    assert trim("He", 1) == "H..."
    assert trim("Hey", 2) == "He..."
    assert trim("Hey", 3) == "Hey"
    assert trim("Coding rocks", 12) == "Coding rocks"
    assert trim("Code Wars is pretty rad", 50) == "Code Wars is pretty rad"
    assert trim("London is freezing",18) == "London is freezing"


def trim(phrase, size):
    if (len(phrase) > size):
        size = size if size <= 3 else size - 3
        return f'{phrase[:size]}...'
    return phrase 
