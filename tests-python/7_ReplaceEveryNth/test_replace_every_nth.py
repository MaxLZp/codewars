def replace_nth(text, n, old_value, new_value):
    result = ''
    vc = 0
    for i, c in enumerate(text):
        if c != old_value: 
            result += c
            continue
        vc += 1
        if vc == n:
            result += new_value
            vc = 0
        else:
            result += c
    
    return result
   

def test_replace_every_nth():
    tests = [
        # [expected, [input_args]],
        ["Vader soid: No, I am your fother!", ["Vader said: No, I am your father!", 2, 'a', 'o']],
        ["Vader said: No, I am your fother!", ["Vader said: No, I am your father!", 4, 'a', 'o']],
        ["Vader said: No, I am your father!", ["Vader said: No, I am your father!", 6, 'a', 'o']],
        ["Vader said: No, I am your father!", ["Vader said: No, I am your father!", 0, 'a', 'o']],
        ["Vader said: No, I am your father!", ["Vader said: No, I am your father!", -2, 'a', 'o']],
        ["Vader sayd: No, I am your father!", ["Vader said: No, I am your father!", 1, 'i', 'y']],
        ["Luke cries: Noooooioooooioooo!", ["Luke cries: Noooooooooooooooo!", 6, 'o', 'i']],
    ]

    for exp, inp in tests:
        assert replace_nth(*inp) == exp