def pig_latin(word):
    return word if len(word) <= 3 else f'{word[1:]}{word[0]}ay'
   
def test_pig_atinlay():
    assert pig_latin('hello') == 'ellohay'
    assert pig_latin('hi') == 'hi'
     