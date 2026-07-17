def count_consonants(text):
    return len({s for s in text.lower() if s in 'bcdfghjklmnpqrstvwxyz'})

def test_how_many_unique_consonants():
    assert count_consonants('sillystring') == 7
    assert count_consonants('aeiou') == 0
    assert count_consonants('abcdefghijklmnopqrstuvwxyz') == 21
    assert count_consonants('Count my unique consonants!!') == 7
