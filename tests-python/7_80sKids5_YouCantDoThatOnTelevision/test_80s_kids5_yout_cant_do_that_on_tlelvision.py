def bucket_of(said):
    import re
    water = True if re.search(r'water|wet|wash', said, re.IGNORECASE) else False
    slime = True if re.search(r"i don't know|slime", said, re.IGNORECASE) else False
    
    if water and slime: return 'sludge'
    if water: return 'water'
    if slime: return 'slime'
    return 'air'


def test_80s_kids5_yout_cant_do_that_on_tlelvision():
    assert bucket_of("wet water") == "water"
    assert bucket_of("slime water") == "sludge"
    assert bucket_of("I don't know if this will work") == "slime"
    assert bucket_of("I don't know if this will work without watering it first.") == "sludge"
    assert bucket_of("") == "air"
