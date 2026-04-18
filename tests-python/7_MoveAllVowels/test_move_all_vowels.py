def move_vowels(input): 
    cons = ''
    vows = ''
    for c in input:
        if c in 'aeiou':
            vows += c
        else:
            cons += c
    return cons + vows

    # Other
    # return re.sub('[aeiou]', '', input) + re.sub('[^aeiou]', '', input)



def test_move_all_vowels():
    assert move_vowels('day') == 'dya'
    assert move_vowels('apple') == 'pplae'
    assert move_vowels('peace') == 'pceae'
    assert move_vowels('maker') == 'mkrae'
    assert move_vowels('programming') == 'prgrmmngoai'
    assert move_vowels('javascript') == 'jvscrptaai'
    assert move_vowels('python') == 'pythno'
    assert move_vowels('ruby') == 'rbyu'
    assert move_vowels('haskell') == 'hskllae'
    assert move_vowels('clojure') == 'cljroue'
    assert move_vowels('csharp') == 'cshrpa'