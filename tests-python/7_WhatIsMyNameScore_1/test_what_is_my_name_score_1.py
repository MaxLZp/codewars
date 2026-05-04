alpha = {'ABCDE':1, 'FGHIJ':2, 'KLMNO':3, 'PQRST':4, 'UVWXY':5}


def name_score(name):
    score = 0
    
    for c in name.upper():
        for k in alpha.keys():
            score += alpha.get(k) if k.find(c) >= 0 else 0
    
    return {name: score}

    # Other
    # return {name: sum(alpha[a] for n in name.upper() for a in alpha.keys() if n in a)}


def test_what_is_my_name_score_1():
    assert name_score('Mary Jane') == {"Mary Jane":20}
    assert name_score('Luke Skywalker') == {"Luke Skywalker":41}
    assert name_score('Zoe Andrews') == {"Zoe Andrews":23}
    assert name_score('Double  Space') == {"Double  Space":25}
    assert name_score('Greg Z MacDonald') == {"Greg Z MacDonald":26}