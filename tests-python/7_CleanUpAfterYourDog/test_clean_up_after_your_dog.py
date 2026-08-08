def crap(garden: list[list[str]], bags: int, cap: int) -> str:
    crap = 0
    for row in garden:
        for item in row:
            if item == 'D': return 'Dog!!'
            if item == '@': crap += 1
            
    return 'Clean' if bags*cap >= crap else 'Cr@p'


def test_clean_up_after_your_dog():
    assert crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 2, 2) == "Clean"
    assert crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 1, 1) == "Cr@p"
    assert crap([['_','_'], ['_','@'], ['D','_']], 2, 2) == "Dog!!"
    assert crap([['_','_','_','_'], ['_','_','_','_'], ['_','_','_', '_']], 2, 2) == "Clean"
    assert crap([['@','@'], ['@','@'], ['@','@']], 3, 2) == "Clean"
