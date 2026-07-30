def how_much_coffee(events):
    import re

    result = 0
    for event in events:
        if re.match(r'^(cw|cat|dog|movie)$', event, re.IGNORECASE):
            result += 1 if event.islower() else 2

    return result if result <= 3 else 'You need extra sleep'


def test_how_much_coffee_do_you_need():
    assert how_much_coffee([]) == 0
    assert how_much_coffee(['cw']) == 1
    assert how_much_coffee(['CW']) == 2
    assert how_much_coffee(['cw','CAT']) == 3
    assert how_much_coffee(['cw','CAT', 'cw=others']) == 3
    assert how_much_coffee(['cw','CAT','DOG']) == 'You need extra sleep'
