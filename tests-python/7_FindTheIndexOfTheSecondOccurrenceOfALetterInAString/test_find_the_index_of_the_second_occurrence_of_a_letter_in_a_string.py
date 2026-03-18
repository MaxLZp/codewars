def second_symbol(s, symbol):
    return s.find(symbol, s.find(symbol) + 1)

def test_find_the_index_of_the_second_occurrence_of_a_letter_in_a_string():
    assert second_symbol('Hello world!!!','l') == 3
    assert second_symbol('Hello world!!!', 'o') == 7
    assert second_symbol('Hello world!!!', 'A') == -1
    assert second_symbol('', 'q') == -1
    assert second_symbol('Hello', '!') == -1