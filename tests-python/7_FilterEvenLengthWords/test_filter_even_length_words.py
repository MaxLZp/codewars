def filter_even_length_words(words):
    return [word for word in words if not len(word) % 2]


def test_filter_even_length_words():
    assert filter_even_length_words(["Hello", "World"]) == []
    assert filter_even_length_words(["One", "Two", "Three", "Four"]) == ["Four"]
