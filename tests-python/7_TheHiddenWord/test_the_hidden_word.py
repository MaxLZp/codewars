def hidden(num):
    dict = {
        "6" : "a",
        "1" : "b",
        "7" : "d",
        "4" : "e",
        "3" : "i",
        "2" : "l",
        "9" : "m",
        "8" : "n",
        "0" : "o",
        "5" : "t"
    }
    return ''.join(dict.get(c, '') for c in f'{num}')
    
def test_the_hidden_word():
    assert hidden(637) =="aid"
    assert hidden(7415) =="debt"
    assert hidden(49632) =="email"
    assert hidden(942547) =="melted"
