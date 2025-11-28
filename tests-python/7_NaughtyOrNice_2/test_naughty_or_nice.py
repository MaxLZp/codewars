def get_nice_names(people):
    return [p['name'] for p in people if p['was_nice']]

def get_naughty_names(people):
    return [p['name'] for p in people if not p['was_nice']]
  
def test_naughty_or_nice_2():
    naughty = [{'name': 'xDranik', 'was_nice': False}]
    nice = [{'name': 'Santa', 'was_nice': True}, {'name': 'Warrior reading this kata', 'was_nice': True}]
    
    assert get_nice_names(naughty) == []
    assert get_nice_names(nice) == ['Santa', 'Warrior reading this kata']
    assert get_naughty_names(naughty) == ['xDranik']
    assert get_naughty_names(nice) == []