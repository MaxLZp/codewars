def sort_it(words, n):
    return ', '.join(sorted(words.split(', '), key=lambda w: w[n-1]))
  
def test_alphabetize_a_list_by_the_nth_character():
    assert sort_it('bill, bell, ball, bull', 2) == 'ball, bell, bill, bull' , 'Sort by the second letter'
    assert sort_it('words, wordz, wordy, wording', 5) == 'wording, words, wordy, wordz', "Sort by the fifth letter"
    assert sort_it('he, hi, ha, ho', 2) == 'ha, he, hi, ho', "Sort by the second letter"
    assert sort_it('zephyr, yellow, wax, a, ba, cat', 1) == 'a, ba, cat, wax, yellow, zephyr', "Sort by the first letter"
    assert sort_it('hello, how, are, you, doing, today', 3) == 'today, are, doing, hello, you, how', "Sort by the third letter"
    