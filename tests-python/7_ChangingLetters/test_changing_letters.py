
def swap(st):
    import re
    return re.sub(r'[aeiou]', lambda c : c.group(0).upper(), st)


def test_changing_letters():
    assert swap("HelloWorld!") == "HEllOWOrld!"
    assert swap("Sunday") == "SUndAy"
    assert swap("Codewars") == "COdEwArs"
    assert swap("Monday") ==  "MOndAy"
    assert swap("Friday") == "FrIdAy"
    assert swap("abracadabra") == "AbrAcAdAbrA"
