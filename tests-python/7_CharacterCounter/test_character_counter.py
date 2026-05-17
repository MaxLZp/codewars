def validate_word(word):
    res = {}
    for c in word:
        if c.lower() not in res.keys():
            res[c.lower()] = 0
        res[c.lower()] += 1
    
    return sum(res.values()) / len(res) == next(iter(res.values()), 0)

    # Other
    # word = word.lower()
    # return len(set(word.count(c) for c in word)) == 1


def test_character_counter():
        assert validate_word("abcabc") == True
        assert validate_word("Abcabc") == True
        assert validate_word("AbcabcC") == False
        assert validate_word("AbcCBa") == True
        assert validate_word("pippi") == False
        assert validate_word("abcabcd") == False

        assert validate_word("?!?!?!") == True
        assert validate_word("abc123") == True
        assert validate_word("abc!abc!") == True
        assert validate_word("abc:abc") == False
