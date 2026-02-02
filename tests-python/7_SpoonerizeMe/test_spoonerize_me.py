# def spoonerize(words):
#     _words = words.split()
#     _letters = [word[0] for word in _words]
#     _words[0] = f'{_letters[1]}{_words[0][1::]}'
#     _words[1] = f'{_letters[0]}{_words[1][1::]}'
        
#     return " ".join(_words)

def spoonerize(words):
    """Other people solution

    Args:
        words (String): input string

    Returns:
        String: ouput string
    """
    a,b  = words.split()
        
    return f'{b[0]}{a[1::]} {a[0]}{b[1::]}'

def test_spoonerize_me():
    assert spoonerize("nit picking") == "pit nicking"
    assert spoonerize("wedding bells") == "bedding wells"
    assert spoonerize("jelly beans") == "belly jeans"
    assert spoonerize("pop corn") == "cop porn"