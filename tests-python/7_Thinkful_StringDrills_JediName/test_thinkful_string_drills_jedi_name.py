def greet_jedi(first, last):
    return f'Greetings, master {last[:3].capitalize()}{first[:2].capitalize()}'

def test_thinkful_string_drills_jedi_name():
    assert greet_jedi('Beyonce', 'Knowles') == 'Greetings, master KnoBe'
    assert greet_jedi('Chris', 'Angelico') == 'Greetings, master AngCh'
    assert greet_jedi('grae', 'drake') == 'Greetings, master DraGr'
