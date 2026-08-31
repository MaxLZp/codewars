def make_password(phrase):
    import re
    replacements = {'o' : '0', 'i': '1', 's': '5'}
    return re.sub(
        r'['+"".join(replacements.keys())+']', 
        lambda l: replacements.get(l[0].lower()), 
        ''.join(w[0] for w in phrase.split(' ')), 
        flags=re.IGNORECASE
    )

    
def test_password_maker():
    assert make_password("Give me liberty or give me death") == "Gml0gmd"
    assert make_password("Keep Calm and Carry On") == "KCaC0"
  